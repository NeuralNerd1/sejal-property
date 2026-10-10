#!/usr/bin/env bash
# Usage: scripts/images.sh <source-dir>
# Converts the original photos into optimised, SEO-named WebP files (600w + 1200w) in assets/img.
set -euo pipefail
SRC="${1:?source dir}"; OUT="$(dirname "$0")/../assets/img"; mkdir -p "$OUT"
# source file -> seo name (flat-number scribble in 14.jpg and the duplicate 12.jpg are intentionally skipped)
while read -r f name; do
  for w in 600 1200; do
    magick "$SRC/$f" -auto-orient -strip -resize "${w}x" -quality 78 "$OUT/$name-$w.webp"
  done
done <<LIST
13.jpg living-room-citylight-surat
6.jpg master-bedroom-citylight-surat
2.jpg tv-unit-hall-citylight-surat
9.jpg dining-area-citylight-surat
7.jpg kitchen-citylight-surat
10.jpg twin-bedroom-citylight-surat
11.jpg ac-bedroom-citylight-surat
8.jpg dining-window-seating-citylight-surat
5.jpg crockery-bar-unit-citylight-surat
4.jpg hall-view-citylight-surat
LIST
# 1200x630 social share image from the hero (living room) photo
magick "$SRC/13.jpg" -auto-orient -strip -gravity center -crop 1200x630+0-120 +repage -quality 82 "$OUT/og-citylight-surat-3bhk.jpg"
