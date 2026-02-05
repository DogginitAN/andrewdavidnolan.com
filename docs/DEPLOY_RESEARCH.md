# Deploy Research to Website — Runbook

> **Purpose:** Push completed company research from Nash Spark to andrewdavidnolan.com/tracker
> **Frequency:** After each research update (single company or batch)
> **Time:** ~30 seconds per company

---

## Architecture (Sniper Method — Default)

```
You paste research     Nash (sniper_research.py)         Mac (patch_company.py)       Vercel
┌─────────────┐  →  ┌────────────────────┐  patch →  ┌──────────────────┐  push →  ┌──────┐
│ External     │     │ Updates:           │  (~1KB)   │ Patches ONE      │          │ Live │
│ research     │     │  • research/*.md   │           │ company in       │          │ site │
│ (any format) │     │  • companies.json  │           │ public/data/     │          │      │
│              │     │  • website.json    │           │ companies.json   │          │      │
└─────────────┘     └────────────────────┘           └──────────────────┘          └──────┘
```

**Key improvement:** Each update sends ~1KB through context instead of rewriting the full 34KB file. 98% compute reduction.

---

## File Locations

| File | Location | Purpose |
|------|----------|---------|
| Master DB | `nash:/workspace/whats_next/companies.json` | Source of truth — all 52 companies, scores, metadata |
| Research archive | `nash:/workspace/whats_next/research/*.md` | Individual deep-dive research per company |
| Website JSON | `nash:/workspace/whats_next/companies_website.json` | Transformed for website consumption |
| Sniper ingest | `nash:/workspace/whats_next/sniper_research.py` | Receives research, updates master + website JSON |
| Sniper extract | `nash:/workspace/whats_next/sniper_deploy_to_mac.py` | Extracts single-company patch payload (~1KB) |
| Mac patcher | `mac:~/Desktop/andrewdavidnolan.com/scripts/patch_company.py` | Applies 1KB patch to website JSON in-place |
| Production file | `mac:~/Desktop/andrewdavidnolan.com/public/data/companies.json` | What the website reads |

### Legacy (still available but not preferred)
| File | Location | Purpose |
|------|----------|---------|
| Generator script | `nash:/workspace/generate_website_json.py` | Full regenerate of website JSON from master |

---

## Method 1: Sniper Deploy (Default — Single Company)

### Three Input Modes

**Mode A: Research text (most common)**
You paste research from Grok/Perplexity/wherever. Claude:
1. Saves to `research/{company}.md` on Nash via `sniper_research.py --stdin`
2. Parses structured fields (CEO, COO, challenges, fit rationale, etc.)
3. Updates master DB + website JSON on Nash
4. Extracts ~1KB patch via `sniper_deploy_to_mac.py`
5. Applies patch on Mac via `patch_company.py`
6. Git push → Vercel auto-deploy

**Mode B: Quick manual fields**
You provide specific fields directly. No markdown saved.

```bash
nash → cd /workspace/whats_next && python3 sniper_research.py "Shield AI" --json '{"ceo":"Ryan Tseng","coo":"None","hasOpsRoles":true}'
```

**Mode C: Fix/override existing research**
Surgical correction of single field on already-researched company.

```bash
nash → cd /workspace/whats_next && python3 sniper_research.py "Oklo" --json '{"coo":"Caroline DeWitte"}'
```

### Deploy Steps (3 tool calls, ~1KB through context)

```bash
# 1. Nash: Get the patch payload (~1KB)
nash-spark:execute_command → cd /workspace/whats_next && python3 sniper_deploy_to_mac.py "Company Name"

# 2. Mac: Write patch to temp file
Filesystem:write_file → /tmp/patch.json (paste the ~1KB output)

# 3. Mac: Apply patch + git push
Desktop Commander:start_process → cd /Users/andrewnolan/Desktop/andrewdavidnolan.com && \
  python3 scripts/patch_company.py /tmp/patch.json && \
  git add public/data/companies.json && \
  git commit -m "Update: Company Name research" && \
  git push
```

### Batch Updates

For multiple companies in one session, repeat the 3-step deploy per company.
Each patch is ~1KB. Even 10 companies = ~10KB total vs old method's 340KB.

---

## Method 2: Full Regenerate + Copy (Legacy — Bulk Operations Only)

Use this only when:
- Restructuring the entire tracker (adding/removing fields)
- Doing a major schema change
- Something went wrong and you need to rebuild from scratch

### Steps

```bash
# 1. Nash: Regenerate full website JSON
nash-spark:execute_command → cd /workspace && python3 generate_website_json.py

# 2. Nash: Get full file content (~34KB)
nash-spark:execute_command → cat /workspace/companies_website.json

# 3. Mac: Write full file
Filesystem:write_file → /Users/andrewnolan/Desktop/andrewdavidnolan.com/public/data/companies.json

# 4. Mac: Git push
Desktop Commander:start_process → cd /Users/andrewnolan/Desktop/andrewdavidnolan.com && \
  git add public/data/companies.json && \
  git commit -m "Full tracker rebuild" && \
  git push
```

⚠️ This puts ~34KB through context window. Use sniper method for normal updates.

---

## Quick Reference: "Push research to website"

When Andrew says "deploy" or "push to website" after research:

| Scenario | Method | Context Cost |
|----------|--------|-------------|
| Just updated 1 company | Sniper (3 calls) | ~1KB |
| Updated 5 companies in session | Sniper × 5 | ~5KB |
| Full schema rebuild needed | Legacy full copy | ~34KB |
| Something broke, need clean slate | Legacy full copy | ~34KB |

---

## Monitoring Research Progress

```bash
# Nash: Quick progress check
nash-spark:execute_command → python3 -c "
import json
with open('/workspace/whats_next/companies.json') as f:
    data = json.load(f)
companies = data['companies']
researched = sum(1 for c in companies if c.get('researchStatus') == 'Researched')
total = len(companies)
print(f'Research progress: {researched}/{total} ({100*researched//total}%)')
print(f'Remaining: {total - researched}')
by_tier = {}
for c in companies:
    if c.get('researchStatus') != 'Researched':
        t = c.get('tier', '?')
        by_tier[t] = by_tier.get(t, 0) + 1
if by_tier:
    print('Remaining by tier:')
    for tier in sorted(by_tier):
        print(f'  Tier {tier}: {by_tier[tier]}')
"
```

---

## Data Schema Reference

Each company in `companies_website.json` has:

```json
{
  "id": "oklo",
  "name": "Oklo",
  "ticker": "OKLO",
  "sector": "Nuclear SMR",
  "tier": 1,
  "score": 95,
  "source": "Portfolio",
  "stage": "Public",
  "employees": "~150",
  "hq": "Santa Clara, CA",
  "researchStatus": "Researched",
  "researchSummary": "...",
  "ceo": "Jacob DeWitte",
  "coo": "None identified",
  "keyChallenge": "...",
  "fitRationale": "...",
  "openRoles": true,
  "lastUpdated": "2026-01-28"
}
```

Fields populated by research: `researchSummary`, `ceo`, `coo`, `keyChallenge`, `fitRationale`, `openRoles`, `lastUpdated`.

Patch payload from `sniper_deploy_to_mac.py` contains: `{index, company, metrics, lastUpdated}` — ~926 bytes.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Patch fails — company not found | Check exact name spelling matches `companies_website.json` |
| Patch applies to wrong company | Patcher checks by index first, then falls back to name search. Verify index. |
| `sniper_research.py` can't find company | Name must match exactly in `companies.json`. Check capitalization. |
| Website JSON out of sync with master | Run legacy full regenerate: `python3 generate_website_json.py` |
| Git push fails | Check if SSH tunnel is active or if there are uncommitted changes |
| Vercel build fails | Check Vercel dashboard or `git log` for bad commits |
| JSON parse error on website | Validate: `python3 -m json.tool < public/data/companies.json > /dev/null` |

---

## Sniper Script Reference

### sniper_research.py (Nash)

```bash
# Mode A: Markdown file
python3 sniper_research.py "Company Name" --file research/company_name.md

# Mode B: Inline JSON fields
python3 sniper_research.py "Company Name" --json '{"ceo":"Name","coo":"Name","hasOpsRoles":true,"fitScore":85,"challenges":["a","b","c"]}'

# Mode C: Piped markdown (stdin)
echo "research text..." | python3 sniper_research.py "Company Name" --stdin
```

### sniper_deploy_to_mac.py (Nash)

```bash
python3 sniper_deploy_to_mac.py "Company Name"
# Returns ~926 byte JSON patch payload
```

### patch_company.py (Mac)

```bash
python3 scripts/patch_company.py /tmp/patch.json
# Patches single entry in public/data/companies.json
```

---

*Last updated: February 5, 2026*
