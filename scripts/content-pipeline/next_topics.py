#!/usr/bin/env python3
"""Reads content/editorial-queue.json and reports what should be written next.

This is the read side of the durable queue: it never writes an article
itself (that step needs an LLM — see docs/CONTENT-PIPELINE.md for why this
repo does not currently wire that up unattended). It only tells you, per
country, which category slot is next in the rotation for each of the two
daily article types.

Usage:
  python3 next_topics.py                 # print next pending slot per country
  python3 next_topics.py --country japan  # just one country
  python3 next_topics.py --mark-published --country japan --slot practical \
      --category export-documentation --published-slug japan-... \
      --published-at 2026-09-15
"""
from __future__ import annotations

import argparse
import json
import os
import sys
from datetime import datetime, timezone

QUEUE_PATH = os.path.join(os.path.dirname(__file__), "..", "..", "content", "editorial-queue.json")


def load() -> dict:
    with open(QUEUE_PATH, encoding="utf-8") as f:
        return json.load(f)


def save(queue: dict) -> None:
    with open(QUEUE_PATH, "w", encoding="utf-8") as f:
        json.dump(queue, f, indent=2, ensure_ascii=False)
        f.write("\n")


def next_pending(slots: list[dict]) -> dict | None:
    for slot in slots:
        if slot["status"] == "pending":
            return slot
    return None  # every category in this rotation has been used at least once


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--country", help="restrict to one country slug")
    parser.add_argument("--mark-published", action="store_true")
    parser.add_argument("--slot", choices=["practical", "deepDive"])
    parser.add_argument("--category")
    parser.add_argument("--published-slug")
    parser.add_argument("--published-at")
    args = parser.parse_args()

    queue = load()

    if args.mark_published:
        if not (args.country and args.slot and args.category and args.published_slug):
            print("--mark-published requires --country --slot --category --published-slug", file=sys.stderr)
            sys.exit(1)
        slots = queue["countries"][args.country][args.slot]
        target = next((s for s in slots if s["category"] == args.category), None)
        if target is None:
            print(f"Category {args.category} not found for {args.country}/{args.slot}", file=sys.stderr)
            sys.exit(1)
        target["status"] = "published"
        target["slug"] = args.published_slug
        target["publishedAt"] = args.published_at or datetime.now(timezone.utc).date().isoformat()
        queue["log"].append({
            "date": target["publishedAt"], "country": args.country, "slot": args.slot,
            "category": args.category, "slug": args.published_slug, "status": "published",
        })
        save(queue)
        print(f"Marked {args.country}/{args.slot}/{args.category} as published ({args.published_slug}).")
        return

    countries = [args.country] if args.country else list(queue["countries"].keys())
    report = []
    for country in countries:
        entry = queue["countries"][country]
        practical = next_pending(entry["practical"])
        deep = next_pending(entry["deepDive"])
        report.append({
            "country": country,
            "nextPractical": practical["category"] if practical else "ROTATION_EXHAUSTED — all practical categories used at least once",
            "nextDeepDive": deep["category"] if deep else "ROTATION_EXHAUSTED — all deep-dive categories used at least once",
        })
    print(json.dumps(report, indent=2))


if __name__ == "__main__":
    main()
