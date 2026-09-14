"""Shared definitions for the non-EU country content queue.

Single source of truth for: the approved country list (must match
content/claims-register.md's approved non-EU destinations and
src/content/countries.ts), and the two topic-category rotations used to
generate future practical/deep-dive article slots without hardcoding
every future title up front.

Import this from build_queue.py (initial/rebuild) and next_topics.py
(daily queue-advance) so both always agree on country list and category
order.
"""
from __future__ import annotations

# Must match src/content/countries.ts COUNTRIES keys exactly (non-EU
# approved destinations per claims-register.md v1.6, minus the four
# EU/EEA-adjacent-but-still-non-EU markets Norway/Switzerland which ARE
# included since they are not EU members).
COUNTRIES: list[str] = [
    "united-kingdom",
    "united-states",
    "canada",
    "australia",
    "new-zealand",
    "norway",
    "switzerland",
    "japan",
    "china",
    "hong-kong",
    "brazil",
    "south-korea",
    "saudi-arabia",
    "turkey",
    "united-arab-emirates",
]

# "Praktisch artikel" rotation — concrete operational questions. Order is
# the rotation order; each country works through this list once before any
# category repeats for that country.
PRACTICAL_CATEGORIES: list[str] = [
    "export-documentation",       # what the origin country requires before goods leave
    "amazon-fbm-setup",
    "shopify-checkout-eu-shipping",
    "returns-handling-eu-customers",
    "carrier-choice-eu",
    "parcel-size-packaging",
    "peak-season-planning",
    "multi-channel-fulfilment",
    "switching-3pl-to-eu",
    "cross-border-returns-cost",
    "cutoff-dispatch-windows",
    "product-fit-smaller-parcels",
    "vat-ioss-basics",
]

# "Verdiepend artikel" rotation — market development / segment / decision
# framework angles.
DEEP_DIVE_CATEGORIES: list[str] = [
    "trade-agreement-context",     # FTA / tariff status between origin country and EU
    "eu-parcel-levy-impact",
    "stock-vs-per-order-decision",
    "segment-product-fit",
    "fulfilment-model-comparison",
    "eu-consumer-expectations",
    "regulatory-horizon-2028-review",
    "multi-marketplace-consolidation",
    "pricing-currency-presentation",
    "ecommerce-market-trend",
]

STATUSES = ("pending", "researching", "drafted", "review", "published", "rejected", "deferred")
