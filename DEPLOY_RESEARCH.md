# Deploy Research to Website — Runbook

> **Purpose:** Ingest company research and deploy to andrewdavidnolan.com/tracker
> **Frequency:** After each research session (single company or batch)
> **Time:** ~30 seconds per company, 3 tool calls

---

## Architecture (Mac-Only — v2)

```
You paste research     Claude (in chat)              Mac (ingest_research.py)      Vercel
┌─────────────┐  →  ┌────────────────────┐  →  ┌──────────────────────┐  push →  ┌──────┐
│ External     │     │ Reads freeform     │     │ Saves research/*.md  │          │ Live │
│ research     │     │ text, extracts:    │     │ Patches JSON with    │          │ site │
│ (Grok,       │     │  • CEO, COO        │     │ extracted fields     │          │      │
│  Perplexity, │     │  • challenges      │     │ Auto-updates status  │          │      │
│  Gemini,     │     │  • fit score       │     │ + metrics            │          │      │
│  manual)     │     │  • open roles      │     │                      │          │      │
└─────────────┘     └────────────────────┘     └──────────────────────┘          └──────┘
```

**Key design:** Intelligence lives in the conversation (Claude extracts fields from freeform text), not in the script. The script is a dumb patcher. No Nash dependency.

---

## File Locations (All on Mac)

| File | Path | Purpose |
|------|------|---------|
| Website JSON | `~/Desktop/andrewdavidnolan.com/public/data/companies.json` | Single source of truth — 52 companies, live on Vercel |
| Research archive | `~/Desktop/andrewdavidnolan.com/research/*.md` | Full research text per company (freeform, uncompressed) |
| Ingest script | `~/Desktop/andrewdavidnolan.com/scripts/ingest_research.py` | Patches website JSON with extracted fields |
| Patch script | `~/Desktop/andrewdavidnolan.com/scripts/patch_company.py` | Lower-level patcher (legacy, still available) |

### Legacy (Nash — archived, not actively used)
| File | Location | Purpose |
|------|----------|---------|
| Nash master DB | `nash:/workspace/whats_next/companies.json` | Old source of truth (290KB, richer schema) |
| Nash research | `nash:/workspace/whats_next/research/*.md` | 34 Ralph-generated research files |
| Sniper scripts | `nash:/workspace/whats_next/sniper_*.py` | Old Nash→Mac deploy pipeline |

---

## The Workflow (3 Tool Calls)

### When Andrew pastes research in chat:

**Step 1: Save research markdown**
```
Filesystem:write_file → ~/Desktop/andrewdavidnolan.com/research/{company_name}.md
```
Claude saves the full freeform research text. No compression, no formatting changes.

**Step 2: Run ingest script**
```bash
Desktop Commander:start_process → cd ~/Desktop/andrewdavidnolan.com && \
  python3 scripts/ingest_research.py "Company Name" --fields '{
    "ceo": "Name",
    "coo": "Name or None identified",
    "challenges": ["Challenge 1", "Challenge 2", "Challenge 3"],
    "fitScore": 82,
    "hasOpsRoles": true,
    "source": "Grok"
  }'
```
Claude reads the freeform research and extracts these fields. The script patches `public/data/companies.json`, auto-sets `status: "Researched"`, timestamps, and recomputes metrics.

**Step 3: Git push**
```bash
Desktop Commander:start_process → cd ~/Desktop/andrewdavidnolan.com && \
  git add -A && \
  git commit -m "Research: Company Name" && \
  git push
```
Vercel auto-deploys. Live in ~30 seconds.

---

## Ingest Script Reference

### Usage

```bash
python3 scripts/ingest_research.py "Company Name" --fields '{ JSON }'
```

### Research Fields (populate `researchSummary`)

| Field | Type | Description |
|-------|------|-------------|
| `ceo` | string | CEO name |
| `coo` | string | COO name, or "None identified" |
| `challenges` | string[] | Key operational challenges (3-5 items) |
| `fitScore` | int | Fit score 0-100 |
| `hasOpsRoles` | bool | Are there open ops/leadership roles? |
| `source` | string | Where research came from (e.g. "Grok", "Perplexity") |

### Top-Level Fields (optional overrides)

| Field | Type | Description |
|-------|------|-------------|
| `score` | int | Overall company score (auto-recomputes tier) |
| `notes` | string | Updated notes |
| `nextAction` | string | Next action to take |
| `employees` | int | Updated employee count |
| `stage` | string | Updated stage info |
| `hq` | string | Updated HQ |
| `noExecOps` | bool | No COO/VP Ops currently? |
| `strategicBacking` | bool | Strategic investor backing? |
| `recentFunding` | bool | Recent funding round? |

### Auto-Updated by Script
- `status` → set to `"Researched"`
- `researchSummary.lastResearched` → today's date
- `metrics` → recalculated (totals, tiers, research count)

### Examples

```bash
# Full research ingest
python3 scripts/ingest_research.py "Shield AI" --fields '{
  "ceo": "Ryan Tseng",
  "coo": "None identified",
  "challenges": ["Scaling production", "Defense procurement", "Talent acquisition"],
  "fitScore": 78,
  "hasOpsRoles": true,
  "source": "Grok"
}'

# Quick field correction (no new research file needed)
python3 scripts/ingest_research.py "Oklo" --fields '{"coo": "Caroline DeWitte"}'

# Score update with tier recomputation
python3 scripts/ingest_research.py "Dexory" --fields '{"score": 76, "notes": "COO hired Sept 2024"}'
```

---

## Data Schema Reference

Each company in `public/data/companies.json`:

```json
{
  "id": 1,
  "name": "Oklo",
  "ticker": "OKLO",
  "sector": "Nuclear SMR",
  "source": "Portfolio",
  "stage": "Public",
  "employees": 150,
  "hq": "Santa Clara, CA",
  "score": 95,
  "tier": 1,
  "status": "Researched",
  "holdStock": true,
  "recentFunding": false,
  "noExecOps": true,
  "strategicBacking": true,
  "notes": "SMR developer building first commercial reactor.",
  "nextAction": "Find warm intro path",
  "researchSummary": {
    "lastResearched": "2026-02-05",
    "source": "Grok",
    "fitScore": 85,
    "ceo": "Jacob DeWitte",
    "coo": "Caroline DeWitte",
    "challenges": ["NRC licensing timeline", "Fuel fabrication scale-up", "Site acquisition"],
    "hasOpsRoles": false
  }
}
```

Unresearched companies have no `researchSummary` field. The script creates it on first ingest.

---

## Monitoring Progress

```bash
python3 -c "
import json
with open('public/data/companies.json') as f:
    data = json.load(f)
companies = data['companies']
researched = sum(1 for c in companies if c.get('status') == 'Researched')
total = len(companies)
print(f'Research progress: {researched}/{total} ({100*researched//total}%)')
remaining = [c for c in companies if c.get('status') != 'Researched']
for c in sorted(remaining, key=lambda x: x.get('score', 0), reverse=True):
    print(f'  Tier {c.get(\"tier\",\"?\")} | Score {c.get(\"score\",\"?\")} | {c[\"name\"]}')
"
```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Company not found | Name must match exactly in `companies.json`. Case-insensitive. |
| JSON parse error | Validate: `python3 -m json.tool < public/data/companies.json > /dev/null` |
| Git push fails | Check for uncommitted changes or auth issues |
| Vercel build fails | Check Vercel dashboard or `git log` for bad commits |
| Need to add a new company | Manually add entry to `public/data/companies.json`, then ingest research |
| Need Nash data | Old research files still at `nash:/workspace/whats_next/research/*.md` |

---

## Quick Reference

When Andrew says "deploy" or "push to website" after pasting research:

| Scenario | Action |
|----------|--------|
| Just pasted research for 1 company | 3 tool calls: save .md → ingest → git push |
| Pasted research for N companies | 3 tool calls × N |
| Quick field fix (no new research) | Skip .md save, just run ingest + git push |
| Need to add a brand new company | Add to JSON first, then ingest |
| Something broke | Validate JSON, check git log, worst case restore from git history |

---

*Last updated: February 5, 2026*
*v2: Consolidated from Nash+Mac to Mac-only workflow*
