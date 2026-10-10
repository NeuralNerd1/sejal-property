# Citylight, Surat – property site

Static site (no framework). Edit `config.json`, then:

    node build.mjs            # generates ./dist
    cd dist && python3 -m http.server 8000

Deploy `dist/` to Netlify / Cloudflare Pages / GitHub Pages (drag-and-drop works).
Photos: `scripts/images.sh <folder-with-original-jpgs>` regenerates the optimised WebP files.
Guides live in `content/guides/*.md` and are linked from the footer and the guides index.
