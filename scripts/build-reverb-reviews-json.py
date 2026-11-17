"""Parse reference/reverb-reviews-body.html into reverb.json and reverb-summary.json.

Stdlib only. Run with: python -I -X utf8 scripts/build-reverb-reviews-json.py
"""
import html
import json
import os
import re
import sys
from datetime import datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "reference", "reverb-reviews-body.html")
OUT_DIR = os.path.join(ROOT, "src", "data", "reviews")
OUT_REVIEWS = os.path.join(OUT_DIR, "reverb.json")
OUT_SUMMARY = os.path.join(OUT_DIR, "reverb-summary.json")

ARTICLE_RE = re.compile(r'<article\b[^>]*>(.*?)</article>', re.S)
STARS_RE = re.compile(r'<span class="[^"]*stars s(\d)"[^>]*>(.*?)</span>', re.S)
TITLE_RE = re.compile(r'<h2 class="rv-title">(.*?)</h2>', re.S)
META_RE = re.compile(r'<p class="rv-meta">(.*?)</p>', re.S)
TIME_RE = re.compile(r'<time>(.*?)</time>', re.S)
BODY_RE = re.compile(r'<p class="rv-body">(.*?)</p>', re.S)
REVIEWER_RE = re.compile(r'<span[^>]*>\s*<span>(.*?)</span>', re.S)
TAG_RE = re.compile(r"<[^>]+>")
DATE_RE = re.compile(r"^\s*([A-Za-z]{3})\s+(\d{1,2})(?:st|nd|rd|th)?,\s*(\d{4})\s*$")

BRAND_RULES = [
    ("fender", re.compile(r"fender|squier|stratocaster|\bstrat\b|telecaster|\btele\b|jazzmaster|jaguar|p-bass|precision bass|jazz bass", re.I)),
    ("gibson", re.compile(r"gibson|les paul|\bsg\b|\bes-?\d|epiphone", re.I)),
    ("martin", re.compile(r"\bmartin\b", re.I)),
    ("gretsch", re.compile(r"gretsch", re.I)),
    ("guild", re.compile(r"\bguild\b", re.I)),
    ("rickenbacker", re.compile(r"rickenbacker", re.I)),
    ("prs", re.compile(r"\bprs\b|paul reed", re.I)),
]

QUOTE_CHARS = "\"'“”‘’"


def clean_text(raw):
    """Strip tags, decode entities, collapse whitespace."""
    text = html.unescape(TAG_RE.sub("", raw))
    return re.sub(r"\s+", " ", text).strip()


def parse_date(label):
    m = DATE_RE.match(label)
    if not m:
        return None
    try:
        dt = datetime.strptime(f"{m.group(1)} {int(m.group(2))} {m.group(3)}", "%b %d %Y")
    except ValueError:
        return None
    return dt.strftime("%Y-%m-%d")


def brand_of(title):
    for name, pattern in BRAND_RULES:
        if pattern.search(title):
            return name
    return "other"


def strip_quotes(body):
    return body.strip().strip(QUOTE_CHARS).strip()


def parse_article(index, block, failures):
    rec = {"id": index}

    stars_m = STARS_RE.search(block)
    if not stars_m:
        failures.append((index, "no stars class"))
        return None
    stars = int(stars_m.group(1))
    star_glyphs = stars_m.group(2).count("★")
    if star_glyphs != stars:
        failures.append((index, f"star glyph count {star_glyphs} != class s{stars}"))
    rec["stars"] = stars

    title_m = TITLE_RE.search(block)
    title = clean_text(title_m.group(1)) if title_m else ""
    rec["title"] = title

    meta_m = META_RE.search(block)
    if not meta_m:
        failures.append((index, "no rv-meta"))
        return None
    meta = meta_m.group(1)
    reviewer_m = REVIEWER_RE.search(meta)
    rec["reviewer"] = clean_text(reviewer_m.group(1)) if reviewer_m else ""
    if not rec["reviewer"]:
        failures.append((index, "no reviewer"))

    time_m = TIME_RE.search(meta)
    label = clean_text(time_m.group(1)) if time_m else ""
    date = parse_date(label)
    if date is None:
        failures.append((index, f"unparsed date {label!r}"))
        date = ""
    rec["date"] = date
    rec["dateLabel"] = label

    body_m = BODY_RE.search(block)
    body = strip_quotes(clean_text(body_m.group(1))) if body_m else ""
    rec["body"] = body
    rec["words"] = len(body.split()) if body else 0

    rec["brand"] = brand_of(title)
    return rec


def main():
    with open(SRC, encoding="utf-8") as fh:
        text = fh.read()

    blocks = ARTICLE_RE.findall(text)
    failures = []
    records = []
    for i, block in enumerate(blocks, start=1):
        rec = parse_article(i, block, failures)
        if rec is not None:
            records.append(rec)

    os.makedirs(OUT_DIR, exist_ok=True)
    with open(OUT_REVIEWS, "w", encoding="utf-8", newline="\n") as fh:
        json.dump(records, fh, ensure_ascii=False, indent=2)
        fh.write("\n")

    brands = ["fender", "gibson", "martin", "gretsch", "guild", "rickenbacker", "prs", "other"]
    by_brand = {b: {"total": 0, "withText": 0, "fiveStar": 0, "firstDate": None, "lastDate": None}
                for b in brands}
    by_stars = {}
    dates = []
    with_text = 0
    for r in records:
        b = by_brand[r["brand"]]
        b["total"] += 1
        if r["body"]:
            b["withText"] += 1
            with_text += 1
        if r["stars"] == 5:
            b["fiveStar"] += 1
        if r["date"]:
            dates.append(r["date"])
            if b["firstDate"] is None or r["date"] < b["firstDate"]:
                b["firstDate"] = r["date"]
            if b["lastDate"] is None or r["date"] > b["lastDate"]:
                b["lastDate"] = r["date"]
        key = str(r["stars"])
        by_stars[key] = by_stars.get(key, 0) + 1

    summary = {
        "total": len(records),
        "withText": with_text,
        "byBrand": by_brand,
        "byStars": dict(sorted(by_stars.items())),
        "firstDate": min(dates) if dates else None,
        "lastDate": max(dates) if dates else None,
    }
    with open(OUT_SUMMARY, "w", encoding="utf-8", newline="\n") as fh:
        json.dump(summary, fh, ensure_ascii=False, indent=2)
        fh.write("\n")

    print(f"blocks={len(blocks)} records={len(records)} withText={with_text}")
    print(f"failures={len(failures)}")
    for idx, msg in failures:
        print(f"  #{idx}: {msg}")
    return 0 if not failures and len(records) == 2052 else 1


if __name__ == "__main__":
    sys.exit(main())
