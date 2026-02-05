#!/usr/bin/env python3
"""
Surgical patcher for companies.json on the website.
Receives a patch payload (index + company data) and updates just that one entry.

Usage:
  echo '{"index": 29, "company": {...}, "metrics": {...}}' | python3 patch_company.py
  python3 patch_company.py patch.json
"""

import json
import sys
from pathlib import Path
from datetime import datetime

WEBSITE_JSON = Path(__file__).parent.parent / "public" / "data" / "companies.json"

def patch(payload: dict):
    idx = payload['index']
    company = payload['company']
    metrics = payload.get('metrics')
    last_updated = payload.get('lastUpdated', datetime.now().isoformat())
    
    with open(WEBSITE_JSON) as f:
        data = json.load(f)
    
    # Verify we're patching the right company
    existing = data['companies'][idx]
    if existing['name'].lower() != company['name'].lower():
        # Fallback: search by name
        found = False
        for i, c in enumerate(data['companies']):
            if c['name'].lower() == company['name'].lower():
                idx = i
                found = True
                break
        if not found:
            return {"error": f"Company mismatch at index {idx}: expected {company['name']}, got {existing['name']}"}
    
    # Patch
    data['companies'][idx] = company
    data['lastUpdated'] = last_updated
    if metrics:
        data['metrics'] = metrics
    
    with open(WEBSITE_JSON, 'w') as f:
        json.dump(data, f, indent=2)
    
    return {"success": True, "patched": company['name'], "index": idx}

if __name__ == '__main__':
    if len(sys.argv) > 1:
        with open(sys.argv[1]) as f:
            payload = json.load(f)
    else:
        payload = json.load(sys.stdin)
    
    result = patch(payload)
    print(json.dumps(result, indent=2))
