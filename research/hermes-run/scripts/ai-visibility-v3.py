"""AI-visibility V3 — frozen 264-query benchmark + 20-query exploratory set (2026-09-01).
Same methodology as V2: neutral system prompt, temperature 0, deepseek-chat + gpt-4o-mini.
Incremental CSV writing so partial progress survives. NO brand priming.
"""
import csv, json, os, re, sys, threading, time, urllib.request, urllib.error
from concurrent.futures import ThreadPoolExecutor, as_completed

BASE = r"C:/Users/josme/HOS/projects/vareya-ai-hermes-20260901/research/hermes-run"
FROZEN = r"C:/Users/josme/HOS/projects/vareya-ai/research/data/ai-query-benchmark.csv"
OUT_V3 = os.path.join(BASE, "ai-query-benchmark-v3.csv")
OUT_EXP = os.path.join(BASE, "ai-query-benchmark-v3-exploratory.csv")
OUT_KPI = os.path.join(BASE, "ai-benchmark-v3-kpis.json")

def load_env(path):
    env = {}
    with open(path, encoding="utf-8", errors="replace") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            k, v = line.split("=", 1)
            env[k.strip()] = v.strip().strip('"').strip("'")
    return env

ENV = load_env(r"C:/Users/josme/AppData/Local/hermes/.env")
DEEPSEEK_KEY = ENV.get("DEEPSEEK_API_KEY", "")
OPENAI_KEY = ENV.get("OPENAI_API_KEY", "")

SYSTEM_PROMPT = ("You are a helpful assistant that answers questions about ecommerce "
                 "fulfilment and logistics providers in Europe. Answer factually and concisely.")

PROVIDERS = ["ShipBob","ShipMonk","Amazon FBA","Fulfilment by Amazon","FBA","DHL Supply Chain",
"DHL Fulfilment","DHL","Active Ants","Montapacking","Monta","Huboo","Red Stag",
"Fulfilment Solutions","Geodis","Kuehne","K\u002bN","Kuehne+Nagel","GXO","Radial","Alaiko",
"BYRD","Hive","Salesupply","Omnipack","Stord","Shipwire","DSV","XPO","CEVA",
"FedEx Fulfillment","UPS Supply Chain","eFullment","Warehousing1","Weengs",
"Active Fulfillment","Bol.com FBB","Zendbox","James and James","Airhouse",
"fulfillmenttools","filment.nl","Wuunder","Vareya","VareYa","Vareia","Rakuten Super Logistics",
"OTTO Fulfilment","PostNL","Picnic","Logsta","Everstox","Locus Robotics","Shipstation",
"Sendcloud","Bigblue","Bezala","Ware2Go","Fulfyld","ShipHero","Flowspace","Jungheinrich"]

PROV_RE = re.compile(r"|".join(sorted((re.escape(p) for p in PROVIDERS), key=len, reverse=True)), re.IGNORECASE)

def call_llm(model, query):
    if model == "deepseek-chat":
        url = "https://api.deepseek.com/chat/completions"
        key = DEEPSEEK_KEY
    else:
        url = "https://api.openai.com/v1/chat/completions"
        key = OPENAI_KEY
    body = json.dumps({
        "model": "deepseek-chat" if model == "deepseek-chat" else "gpt-4o-mini",
        "messages": [{"role": "system", "content": SYSTEM_PROMPT},
                     {"role": "user", "content": query}],
        "temperature": 0.0, "max_tokens": 700,
    }).encode("utf-8")
    req = urllib.request.Request(url, data=body, headers={
        "Content-Type": "application/json",
        "Authorization": f"Bearer {key}"})
    last = None
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=90) as r:
                data = json.loads(r.read().decode("utf-8"))
            return data["choices"][0]["message"]["content"]
        except Exception as e:
            last = e
            time.sleep(2 ** attempt)
    raise RuntimeError(f"FAILED after retries: {last}")

def parse_answer(answer):
    if not answer:
        return {"vareya": "NO", "pos": "not mentioned", "comps": "", "primary": "",
                "reason": "", "excerpt": ""}
    matches = [(m.group(0), m.start()) for m in PROV_RE.finditer(answer)]
    # dedupe consecutive duplicates
    uniq = []
    for name, start in matches:
        if not uniq or name.lower() != uniq[-1][0].lower():
            uniq.append((name, start))
    vareya = "NO"
    pos = "not mentioned"
    primary = ""
    comps = ""
    reason = ""
    for i, (name, start) in enumerate(uniq):
        if name.lower().startswith("varey"):
            vareya = "YES"
            pos = i + 1
            s = max(0, start - 200)
            reason = answer[s:start + 250].replace("\n", " ").strip()
        if i == 0:
            primary = name
    comps = ", ".join(n for n, _ in uniq if not n.lower().startswith("varey"))
    excerpt = answer[:800].replace("\n", " ")
    return {"vareya": vareya, "pos": pos, "comps": comps, "primary": primary,
            "reason": reason, "excerpt": excerpt}

def process_query(item):
    query, model = item
    try:
        answer = call_llm(model, query)
        p = parse_answer(answer)
        return (query, model, p, None)
    except Exception as e:
        return (query, model, None, f"ERROR: {type(e).__name__}: {str(e)[:120]}")

HEADER = ["query","date","platform_model","vareya_mentioned","vareya_position",
          "competitors_mentioned","primary_recommendation","citations_sources",
          "vareya_source","reason_given","commercial_intent_score","intent","category","answer_excerpt"]

def run_batch(queries, out_path, extra_meta):
    today = "2026-09-01"
    rows = []
    lock = threading.Lock()
    if os.path.exists(out_path):
        with open(out_path, encoding="utf-8") as f:
            rows = list(csv.DictReader(f))
        done = {(r["query"], r["platform_model"]) for r in rows}
    else:
        done = set()
    with open(out_path, "a", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=HEADER)
        if not rows:
            w.writeheader()
        jobs = [(q, m) for q in queries for m in ["deepseek-chat", "openai-gpt-4o-mini"]
                if (q, m) not in done]
        print(f"{out_path}: {len(jobs)} calls to run")
        with ThreadPoolExecutor(max_workers=5) as ex:
            futs = {ex.submit(process_query, j): j for j in jobs}
            for fut in as_completed(futs):
                q, m = futs[fut]
                query, model, p, err = fut.result()
                meta = extra_meta.get(q, {})
                row = {"query": query, "date": today, "platform_model": model,
                       "vareya_mentioned": "ERROR" if err else p["vareya"],
                       "vareya_position": "ERROR" if err else p["pos"],
                       "competitors_mentioned": "" if err else p["comps"],
                       "primary_recommendation": "" if err else p["primary"],
                       "citations_sources": "none (no web grounding — API chat model)",
                       "vareya_source": "n/a", "reason_given": err or p["reason"],
                       "commercial_intent_score": meta.get("score", ""),
                       "intent": meta.get("intent", ""), "category": meta.get("category", ""),
                       "answer_excerpt": "" if err else p["excerpt"]}
                with lock:
                    w.writerow(row)
    return out_path

def compute_kpis(path):
    with open(path, encoding="utf-8") as f:
        rows = list(csv.DictReader(f))
    total = len(rows)
    mention = sum(1 for r in rows if r["vareya_mentioned"] == "YES")
    top3 = sum(1 for r in rows if r["vareya_mentioned"] == "YES" and r["vareya_position"].isdigit() and int(r["vareya_position"]) <= 3)
    top5 = sum(1 for r in rows if r["vareya_mentioned"] == "YES" and r["vareya_position"].isdigit() and int(r["vareya_position"]) <= 5)
    primary = sum(1 for r in rows if r["primary_recommendation"].lower().startswith("varey"))
    qualified = sum(1 for r in rows if r["commercial_intent_score"] not in ("", None) and int(float(r["commercial_intent_score"])) >= 7)
    qual_mention = sum(1 for r in rows if r["vareya_mentioned"] == "YES" and r["commercial_intent_score"] not in ("", None) and int(float(r["commercial_intent_score"])) >= 7)
    errors = sum(1 for r in rows if r["vareya_mentioned"] == "ERROR")
    from collections import Counter
    prim = Counter(r["primary_recommendation"] for r in rows if r["primary_recommendation"] and r["vareya_mentioned"] != "ERROR")
    comps = Counter()
    for r in rows:
        for c in r["competitors_mentioned"].split(", "):
            if c:
                comps[c] += 1
    kpi = {"date": "2026-09-01", "file": os.path.basename(path),
           "total_tested_rows": total, "error_rows": errors,
           "mention_rate_pct": round(100 * mention / total, 2) if total else None,
           "top3_rate_pct": round(100 * top3 / total, 2) if total else None,
           "top5_rate_pct": round(100 * top5 / total, 2) if total else None,
           "primary_recommendation_rate_pct": round(100 * primary / total, 2) if total else None,
           "citation_rate_pct": 0.0,
           "qualified_rows": qualified,
           "qualified_mention_rate_pct": round(100 * qual_mention / qualified, 2) if qualified else None,
           "top_primary_recommendations": prim.most_common(12),
           "top_competitors_mentioned": comps.most_common(12)}
    return kpi

if __name__ == "__main__":
    # frozen set
    with open(FROZEN, encoding="utf-8-sig") as f:
        frozen = list(csv.DictReader(f))
    meta = {}
    for r in frozen:
        meta[r["query"]] = {"score": r.get("commercial_intent_score", ""),
                            "intent": r.get("intent", ""), "category": r.get("category", "")}
    queries = [r["query"] for r in frozen]
    print(f"frozen queries: {len(queries)}")
    run_batch(queries, OUT_V3, meta)
    kpi = compute_kpis(OUT_V3)
    with open(OUT_KPI, "w", encoding="utf-8") as f:
        json.dump({"frozen_v3": kpi}, f, indent=1)
    print(json.dumps(kpi, indent=1))
    print("V3 FROZEN DONE")
