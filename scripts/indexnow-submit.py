# -*- coding: utf-8 -*-
"""IndexNow submitter for vareya.ai.

- Auto-discovers the key from public/{key}.txt in the repo.
- Reads the LIVE sitemap.xml, compares each URL's lastmod against a local state file.
- Submits only URLs that are new or whose lastmod changed since last submission.
- Idempotent; never resubmits unchanged URLs (no spam).
- POSTs to api.indexnow.org (forwards to Bing/Yandex/Seznam/Naver/etc.).
Usage: python scripts/indexnow-submit.py
"""
import csv, json, os, sys, time, urllib.request, urllib.error, re, glob
from datetime import datetime, timezone

REPO = r"C:\Users\josme\HOS\projects\vareya-ai"
STATE = r"C:\Users\josme\HOS\projects\vareya-ai-lead-engine\data\indexnow-state.json"
LOG = r"C:\Users\josme\HOS\projects\vareya-ai-lead-engine\data\indexnow-submissions.csv"
HOST = "vareya.ai"
ENDPOINT = "https://api.indexnow.org/indexnow"

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"


def find_key():
    for f in glob.glob(os.path.join(REPO, "public", "*.txt")):
        name = os.path.basename(f)
        if re.fullmatch(r"[0-9a-f]{32}\.txt", name):
            key = name[:-4]
            content = open(f, encoding="utf-8").read().strip()
            if content == key:
                return key, f"https://{HOST}/{name}"
    return None, None


def load_state():
    if os.path.exists(STATE):
        return json.load(open(STATE, encoding="utf-8"))
    return {}


def save_state(state):
    os.makedirs(os.path.dirname(STATE), exist_ok=True)
    json.dump(state, open(STATE, "w", encoding="utf-8"), indent=1)


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode("utf-8", errors="replace")


def parse_sitemap(xml):
    urls = {}
    for m in re.finditer(r"<url>\s*<loc>([^<]+)</loc>(?:\s*<lastmod>([^<]+)</lastmod>)?", xml):
        urls[m.group(1).strip()] = m.group(2) or ""
    return urls


def submit(key, key_location, url_list):
    body = json.dumps({
        "host": HOST,
        "key": key,
        "keyLocation": key_location,
        "urlList": url_list,
    }).encode()
    req = urllib.request.Request(ENDPOINT, data=body, headers={
        "Content-Type": "application/json; charset=utf-8",
        "User-Agent": UA,
    })
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            return r.status, r.read().decode()[:120]
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode()[:200]


def log_rows(rows):
    os.makedirs(os.path.dirname(LOG), exist_ok=True)
    new = not os.path.exists(LOG)
    with open(LOG, "a", newline="", encoding="utf-8-sig") as f:
        w = csv.writer(f)
        if new:
            w.writerow(["url", "submission_timestamp", "http_response", "status", "reason"])
        for r in rows:
            w.writerow([r["url"], r["submission_timestamp"], r["http_response"], r["status"], r["reason"]])


def main():
    key, key_location = find_key()
    if not key:
        print("NO KEY FOUND in public/ (expect {32-hex}.txt)")
        sys.exit(2)
    print(f"key: {key}  keyLocation: {key_location}")

    xml = fetch(f"https://{HOST}/sitemap.xml")
    urls = parse_sitemap(xml)
    print(f"sitemap: {len(urls)} URLs")

    state = load_state()
    now = datetime.now(timezone.utc).isoformat()
    changed = []
    for url, lastmod in urls.items():
        prev = state.get(url)
        if prev != lastmod:
            reason = "new URL" if prev is None else f"lastmod changed: {prev} -> {lastmod}"
            changed.append((url, lastmod, reason))
    if not changed:
        print("NO CHANGES — nothing to submit (no spam)")
        return

    # cap at 10,000 per submission; submit in batches
    batches = [changed[i:i + 500] for i in range(0, len(changed), 500)]
    rows = []
    for batch in batches:
        status, resp = submit(key, key_location, [u for u, _, _ in batch])
        ok = "OK" if status in (200, 202) else "FAILED"
        for url, lastmod, reason in batch:
            state[url] = lastmod
            rows.append({"url": url, "submission_timestamp": now,
                         "http_response": status, "status": ok, "reason": reason})
            print(f"{ok} {status} | {url} | {reason}")
    save_state(state)
    log_rows(rows)
    print(f"DONE: {len(rows)} URLs submitted, {len(changed)} changed total")


if __name__ == "__main__":
    main()
