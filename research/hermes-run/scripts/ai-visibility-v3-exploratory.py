"""AI-visibility V3 exploratory set — 20 current-topic queries (2026-09-01). Reuses runner functions."""
import os, json
exec(open(os.path.join(os.path.dirname(__file__), "ai-visibility-v3.py"), encoding="utf-8").read().split('if __name__')[0])

BASE = r"C:/Users/josme/HOS/projects/vareya-ai-hermes-20260901/research/hermes-run"
OUT = os.path.join(BASE, "ai-query-benchmark-v3-exploratory.csv")

EXP = [
 ("What does the EU parcel levy mean for ecommerce brands in 2026?","8","high buyer intent","exploratory_parcel_levy"),
 ("How is the EU parcel levy calculated per product category since 1 July 2026?","7","commercial investigation","exploratory_parcel_levy"),
 ("Which European fulfilment companies support small DTC cosmetics brands?","9","high buyer intent","exploratory_fulfilment_fit"),
 ("Shopify fulfilment in Europe 2026: how to compare providers","8","commercial investigation","exploratory_shopify"),
 ("Amazon FBM fulfilment partner in the Netherlands","8","high buyer intent","exploratory_fbm"),
 ("What is cooperative fulfilment for ecommerce brands?","6","informational","exploratory_cooperative"),
 ("European returns centre for DTC brands: how does it work?","7","commercial investigation","exploratory_returns"),
 ("Shipping from the US to the EU in 2026: what changed with the parcel levy?","8","commercial investigation","exploratory_parcel_levy"),
 ("UK brands and EU fulfilment after the parcel levy","8","commercial investigation","exploratory_parcel_levy"),
 ("How to switch fulfilment providers without disrupting orders","7","commercial investigation","exploratory_switching"),
 ("3PL for 500 orders per month in the Netherlands","9","high buyer intent","exploratory_volume"),
 ("What information does a 3PL need to prepare a fulfilment quote?","6","informational","exploratory_quote"),
 ("Supplements fulfilment partner in Europe for ecommerce","8","high buyer intent","exploratory_fulfilment_fit"),
 ("Weekend fulfilment: which European 3PLs process orders on Saturday and Sunday?","5","informational","exploratory_operations"),
 ("Customised SLA fulfilment provider: what is realistic?","5","informational","exploratory_operations"),
 ("Automatic carrier selection for ecommerce shipments in Europe","5","informational","exploratory_operations"),
 ("Hidden costs of European fulfilment providers","6","commercial investigation","exploratory_switching"),
 ("Ecommerce warehousing in Breda, Netherlands","8","high buyer intent","exploratory_location"),
 ("Amazon FBM vs FBA for small brands selling in Europe","5","informational","exploratory_fbm"),
 ("PostNL international shipping for ecommerce in 2026","4","informational","exploratory_carriers"),
]
queries = [q[0] for q in EXP]
meta = {q[0]: {"score": q[1], "intent": q[2], "category": q[3]} for q in EXP}
print(f"exploratory queries: {len(queries)}")
run_batch(queries, OUT, meta)
kpi = compute_kpis(OUT)
kpi_path = os.path.join(BASE, "ai-benchmark-v3-exploratory-kpis.json")
with open(kpi_path, "w", encoding="utf-8") as f:
    json.dump({"exploratory_v3": kpi}, f, indent=1)
print(json.dumps(kpi, indent=1))
print("V3 EXPLORATORY DONE")
