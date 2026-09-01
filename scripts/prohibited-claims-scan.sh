#!/bin/bash
# Prohibited-claims guard — blocks production content that reintroduces verboten phrases.
# Local + CI usage:  scripts/prohibited-claims-scan.sh [--ci]
# Allowlist: historical audit citations may be excluded via .claims-allowlist
# (one path-glob per line, relative to repo root). Exit 1 on any new hit.
set -u
set -f   # disable glob expansion of allowlist patterns in for-loops
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

PHRASES=(
  "Coöperatie U.A."
  "being built as a cooperative"
  "is a cooperative"
  "strategic partner"
  "over 1000 brands"
  "1,000+ brands"
  "under 3 minutes"
)

# Directories that are NEVER scanned: build output, deps, old snapshots.
EXCLUDE_DIRS=(".git" "node_modules" ".next" "playwright-report" "test-results")

ALLOWLIST=""
if [ -f .claims-allowlist ]; then
  ALLOWLIST=$(grep -v '^#' .claims-allowlist | grep -v '^[[:space:]]*$' || true)
fi

matches=0
declare -a REPORTS
for dir in $(find . -type d \( -name node_modules -o -name .git -o -name .next -o -name playwright-report -o -name test-results \) -prune -o -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.md" -o -name "*.txt" -o -name "*.html" -o -name "*.json" \) -print 2>/dev/null); do
  rel="${dir#./}"
  if [ -n "$ALLOWLIST" ]; then
    allowed=0
    for glob in $ALLOWLIST; do
      case "$rel" in $glob) allowed=1; break;; esac
    done
    [ "$allowed" = "1" ] && continue
  fi
  for ph in "${PHRASES[@]}"; do
    out=$(grep -n -i -F -- "$ph" "$dir" 2>/dev/null || true)
    if [ -n "$out" ]; then
      while IFS= read -r line; do
        lineno="${line%%:*}"
        REPORTS+=("$rel:$lineno: ${ph}")
        matches=$((matches+1))
      done <<< "$out"
    fi
  done
done

if [ "$matches" -gt 0 ]; then
  echo "PROHIBITED-CLAIMS-GUARD: $matches hit(s):"
  printf '%s\n' "${REPORTS[@]}" | head -50
  echo "FAIL"
  exit 1
fi
echo "PROHIBITED-CLAIMS-GUARD: PASS (0 hits)"
exit 0
