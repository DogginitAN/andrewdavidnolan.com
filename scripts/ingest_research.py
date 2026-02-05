#!/usr/bin/env python3
"""
Ingest research into the website tracker.

Usage:
  python3 scripts/ingest_research.py "Company Name" --fields '{"ceo":"Name","coo":"Name or None",...}'

This script:
  1. Reads research/{company}.md (must already exist)
  2. Patches public/data/companies.json with extracted fields
  3. Auto-updates status to "Researched" and timestamps

The --fields JSON should contain any subset of:
  ceo          - CEO name
  coo          - COO name (or "None" / "None identified")
  challenges   - Array of key operational challenges (strings)
  fitScore     - Fit score 0-100
  hasOpsRoles  - Boolean: are there open ops/leadership roles?
  source       - Where the research came from (e.g. "Grok", "Perplexity")

Additionally, you can update top-level company fields:
  score        - Overall company score (updates tier automatically)
  notes        - Updated notes
  nextAction   - Next action to take
  employees    - Updated employee count
  stage        - Updated stage info
  hq           - Updated HQ
  noExecOps    - Boolean: no COO/VP Ops currently?
  strategicBacking - Boolean
  recentFunding    - Boolean
"""

import json
import sys
import re
import argparse
from pathlib import Path
from datetime import datetime

ROOT = Path(__file__).parent.parent
WEBSITE_JSON = ROOT / "public" / "data" / "companies.json"
RESEARCH_DIR = ROOT / "research"


def snake_case(name: str) -> str:
    return re.sub(r'[^a-z0-9]+', '_', name.lower()).strip('_')


def compute_tier(score: int) -> int:
    if score >= 85:
        return 1
    elif score >= 75:
        return 2
    else:
        return 3


def ingest(company_name: str, fields: dict):
    # Verify research file exists
    fname = snake_case(company_name)
    research_file = RESEARCH_DIR / f"{fname}.md"
    if not research_file.exists():
        print(f"WARNING: research/{fname}.md not found. Proceeding without it.")

    # Load website JSON
    with open(WEBSITE_JSON) as f:
        data = json.load(f)

    # Find company (case-insensitive)
    company = None
    company_idx = None
    for i, c in enumerate(data['companies']):
        if c['name'].lower() == company_name.lower():
            company = c
            company_idx = i
            break

    if company is None:
        return {"error": f"'{company_name}' not found in companies.json"}

    now = datetime.now()

    # Separate research fields from top-level fields
    research_keys = {'ceo', 'coo', 'challenges', 'fitScore', 'hasOpsRoles', 'source'}
    top_level_keys = {'score', 'notes', 'nextAction', 'employees', 'stage', 'hq',
                      'noExecOps', 'strategicBacking', 'recentFunding'}

    # Update research summary
    if 'researchSummary' not in company or company['researchSummary'] is None:
        company['researchSummary'] = {}

    rs = company['researchSummary']
    rs['lastResearched'] = now.strftime('%Y-%m-%d')

    for key in research_keys:
        if key in fields:
            rs[key] = fields[key]

    # Update top-level fields
    for key in top_level_keys:
        if key in fields:
            company[key] = fields[key]

    # If score changed, recompute tier
    if 'score' in fields:
        company['tier'] = compute_tier(fields['score'])

    # Auto-update status
    company['status'] = 'Researched'

    # Recompute metrics
    companies = data['companies']
    data['lastUpdated'] = now.isoformat()
    data['metrics']['researched'] = sum(1 for c in companies if c.get('status') == 'Researched')
    data['metrics']['deepResearched'] = data['metrics']['researched']
    data['metrics']['withOpenRoles'] = sum(
        1 for c in companies
        if isinstance(c.get('researchSummary'), dict) and c['researchSummary'].get('hasOpsRoles')
    )
    for tier_num in [1, 2, 3]:
        data['metrics'][f'tier{tier_num}'] = sum(1 for c in companies if c.get('tier') == tier_num)

    # Save
    with open(WEBSITE_JSON, 'w') as f:
        json.dump(data, f, indent=2)

    return {
        "success": True,
        "company": company['name'],
        "index": company_idx,
        "score": company.get('score'),
        "tier": company.get('tier'),
        "status": company['status'],
        "researchFile": f"research/{fname}.md" if research_file.exists() else None,
        "fieldsUpdated": list(fields.keys()),
        "totalResearched": data['metrics']['researched'],
        "totalCompanies": data['metrics']['total']
    }


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Ingest research into website tracker')
    parser.add_argument('company', help='Company name (exact match)')
    parser.add_argument('--fields', required=True, help='JSON string with extracted fields')

    args = parser.parse_args()
    fields = json.loads(args.fields)
    result = ingest(args.company, fields)
    print(json.dumps(result, indent=2))
