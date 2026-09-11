#!/usr/bin/env python3
"""Report active BIQU Panda and Snapmaker products absent from the planner."""

import json
import re
import sys
from pathlib import Path
from urllib.parse import urljoin
from urllib.request import Request, urlopen

CATALOG = Path(__file__).parents[1] / "js" / "data" / "catalog.js"
PRODUCTS_URL = "https://biqu.equipment/products.json?limit=250"


def normalize(value):
    value = value.lower()
    value = re.sub(r"\b(biqu|bigtreetech|btt|v\d+(?:\.\d+)?)\b", " ", value)
    return re.sub(r"[^a-z0-9]+", " ", value).strip()


def known_product_names():
    source = CATALOG.read_text(encoding="utf-8")
    return {
        normalize(name)
        for name in re.findall(r"name: '([^']+)'", source)
        if "panda" in name.lower() or "snapmaker" in name.lower()
    }


def catalog_products_missing_images():
    source = CATALOG.read_text(encoding="utf-8")
    return sorted(
        name
        for name, photo in re.findall(
            r"name: '([^']+)'.*?photo: '([^']*)'", source
        )
        if re.search(r"\b(panda|snapmaker)\b", name, re.I) and not photo
    )


def is_known(title, known):
    candidate = normalize(title)
    candidate_words = set(candidate.split())
    for name in known:
        name_words = set(name.split())
        if name_words <= candidate_words or candidate_words <= name_words:
            return True
    return False


def main():
    products = []
    url = PRODUCTS_URL
    while url:
        request = Request(url, headers={"User-Agent": "PandaPlanner catalog audit"})
        with urlopen(request, timeout=30) as response:
            products.extend(json.load(response)["products"])
            links = response.headers.get("Link", "")
        next_link = re.search(r'<([^>]+)>;\s*rel="next"', links)
        url = urljoin(url, next_link.group(1)) if next_link else None

    known = known_product_names()
    missing_products = sorted(
        f"{product['title']} — https://biqu.equipment/products/{product['handle']}"
        for product in products
        if re.search(r"\b(panda|snapmaker)\b", product["title"], re.I)
        and not is_known(product["title"], known)
    )
    missing_images = [
        f"{name} — catalog entry has no product image"
        for name in catalog_products_missing_images()
    ]
    missing = missing_products + missing_images
    if missing:
        print("\n".join(sorted(missing)))


if __name__ == "__main__":
    try:
        main()
    except Exception as error:
        print(f"Catalog audit failed: {error}", file=sys.stderr)
        sys.exit(1)
