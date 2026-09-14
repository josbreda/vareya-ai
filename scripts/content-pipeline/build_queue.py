#!/usr/bin/env python3
"""Builds/rebuilds content/editorial-queue.json from scratch.

Run this ONLY to initialise the queue or to add a newly-approved country
or category (rare). Day-to-day advancement is next_topics.py, which reads
and updates the existing file in place — it does NOT call this script,
so re-running this after the queue has real status data would silently
discard that history. Guarded below: refuses to overwrite an existing
queue file unless --force is passed.
"""
from __future__ import annotations

import argparse
import json
import os
import sys
from datetime import datetime, timezone

sys.path.insert(0, os.path.dirname(__file__))
from queue_lib import COUNTRIES, DEEP_DIVE_CATEGORIES, PRACTICAL_CATEGORIES

QUEUE_PATH = os.path.join(os.path.dirname(__file__), "..", "..", "content", "editorial-queue.json")


def build() -> dict:
    now = datetime.now(timezone.utc).isoformat()
    countries = {}
    for country in COUNTRIES:
        countries[country] = {
            "practical": [{"category": c, "status": "pending", "slug": None, "publishedAt": None} for c in PRACTICAL_CATEGORIES],
            "deepDive": [{"category": c, "status": "pending", "slug": None, "publishedAt": None} for c in DEEP_DIVE_CATEGORIES],
        }
    return {
        "version": 1,
        "timezone": "Europe/Amsterdam",
        "targetArticlesPerCountryPerDay": 2,
        "generatedAt": now,
        "countries": countries,
        "log": [],
    }


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--force", action="store_true", help="overwrite an existing queue file")
    args = parser.parse_args()

    if os.path.exists(QUEUE_PATH) and not args.force:
        print(f"Refusing to overwrite existing queue at {QUEUE_PATH} (pass --force to rebuild from scratch, discarding all status).", file=sys.stderr)
        sys.exit(1)

    queue = build()
    with open(QUEUE_PATH, "w", encoding="utf-8") as f:
        json.dump(queue, f, indent=2, ensure_ascii=False)
        f.write("\n")
    print(f"Wrote {QUEUE_PATH}")
