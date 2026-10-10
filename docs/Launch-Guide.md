# Launch Guide – Getting property.kshiti.io Found on Google
**Site:** https://property.kshiti.io · **Flat:** 3 BHK furnished, Sejal Apartment, City Light, Athwa, Surat

## How to read this guide
Do the parts in order. Parts 1–4 take about 1–2 hours in total and give the biggest gain. Parts 5–7 are ongoing. A new site normally takes **1–2 weeks to appear in Google at all** and **4–8 weeks to settle for specific searches**. Nobody can promise a first-page position for broad searches like "flat in Surat". The portals own those. The realistic targets are listed in Part 7.

## Part 1. Final checks before you start
1. Open https://property.kshiti.io in your browser and on your phone. Check the home page, the photos, the Hindi page (`/hi/`) and the Gujarati page (`/gu/`).
2. Open https://property.kshiti.io/sitemap.xml. It should show a list of addresses starting with `https://property.kshiti.io/`.
3. Open https://property.kshiti.io/robots.txt. It should contain the line `Sitemap: https://property.kshiti.io/sitemap.xml`.
4. **Set the price** (optional but recommended). Open `config.json`, set `"price": "12500000"` (digits only, in rupees, example only), then in the project folder run `npm run build`, then commit and push. Vercel redeploys by itself.
5. Ask a Hindi and a Gujarati speaker to read the two translated pages once.

## Part 2. Google Search Console (most important)
Google Search Console is Google's free tool where you tell Google your site exists. It is at https://search.google.com/search-console.

**Step A. Add the site**
1. Sign in with your Google account.
2. Click **Add property**.
3. Choose **URL prefix** (the right-hand box), type `https://property.kshiti.io/` and click **Continue**. This is the easiest method because it needs no DNS changes.

**Step B. Verify ownership (HTML tag method)**
1. In the verification window, open **HTML tag**. You will see something like `<meta name="google-site-verification" content="AbC123...">`.
2. Copy **only the value inside `content="..."`**.
3. Open `config.json` in the project and paste it: `"googleSiteVerification": "AbC123..."`.
4. In the project folder run `npm run build`, then `git add -A && git commit -m "Add Google verification" && git push`. Wait about one minute for Vercel to deploy.
5. Go back to Search Console and click **Verify**. You should see "Ownership verified".

*Alternative (DNS method):* choose **Domain** instead and enter `kshiti.io`. Google shows a TXT record. Add it at the company where kshiti.io's DNS is managed (for example Vercel DNS, GoDaddy or Cloudflare): Type **TXT**, Name **@**, Value the text Google gave. Wait a few minutes and click **Verify**. This covers every subdomain.

**Step C. Submit the sitemap**
1. In the left menu click **Sitemaps**.
2. In "Add a new sitemap" type `sitemap.xml` and click **Submit**.
3. Status should become **Success** (it may say "Couldn't fetch" for a few minutes; retry later).

**Step D. Ask Google to index the key pages**
1. Click the search bar at the top ("Inspect any URL in…").
2. Paste a page address and press Enter.
3. If it says "URL is not on Google", click **Request indexing** and wait for the confirmation.
4. Repeat for these pages, in this order (Google limits requests to about 10 per day, so do the first five today and the rest on the following days):
   - `https://property.kshiti.io/`
   - `https://property.kshiti.io/hi/`
   - `https://property.kshiti.io/gu/`
   - `https://property.kshiti.io/guides/`
   - `https://property.kshiti.io/guides/flat-for-sale-in-athwa-surat/`
   - `https://property.kshiti.io/guides/3-bhk-flat-for-sale-in-citylight-surat/`
   - the other guides, a few each day

**Step E. Check the structured data**
1. Open https://search.google.com/test/rich-results.
2. Test `https://property.kshiti.io/`. You should see valid **FAQ** items. Warnings are fine; errors should be reported to me.

## Part 3. Bing Webmaster Tools (also covers Yahoo and DuckDuckGo)
1. Open https://www.bing.com/webmasters and sign in.
2. Click **Import from Google Search Console** and approve. Your site is added and verified automatically.
3. If you prefer manual: **Add a site**, then choose **HTML Meta Tag**, copy the `content` value into `bingSiteVerification` in `config.json`, rebuild, push and click **Verify**.
4. In **Sitemaps**, submit `https://property.kshiti.io/sitemap.xml`.

## Part 4. Check that you are indexed
1. After 2–7 days, search Google for `site:property.kshiti.io`. If pages appear, you are indexed. If nothing appears, wait a few more days.
2. In Search Console open **Pages**. It shows how many pages are indexed and, under "Why pages aren't indexed", the reason for the rest.
3. Common messages:
   - **Discovered – currently not indexed:** Google knows the page but has not visited it yet. Wait, and get more links (Part 5).
   - **Crawled – currently not indexed:** Google visited but did not add it. New sites often see this. Improve the page, get links, request indexing again after two weeks.
   - **Page with redirect / Duplicate:** tell me the page name and I will fix it.

## Part 5. Get links and listings (this is what moves rankings)
Google trusts a site more when other sites link to it. Do every item below. Use the same phone number (+91 94261 04316) and the same address everywhere.

**Property portals** (create a free owner listing; add the website address in the description)
- 99acres (99acres.com) → **Post free property ad**
- MagicBricks (magicbricks.com) → **Post property**
- Housing.com → **Post property free**
- NoBroker (nobroker.in) → **Post free property ad**
- OLX (olx.in), Quikr (quikr.com), Sulekha, Square Yards

For each: choose **Sell → Residential → Apartment/Flat**, enter Surat, Athwa/City Light, 3 BHK, 2 bathrooms, 1500 sq ft, top floor, furnished, upload at least 8 photos, and paste the text below.

**Ready-to-paste listing text**
> 3 BHK furnished flat for sale in Sejal Apartment, City Light, Athwa, Surat. 1500 sq ft, top floor, three sides open, 2 bathrooms, AC, sofa, dining table, wardrobes, geyser, water purifier. Lift, security guard, CCTV, visitor parking, children's play area and park. Available for immediate sale. More photos and details: https://property.kshiti.io

**Social and local sharing**
1. Post on Facebook Marketplace (Property for Sale) with the link.
2. Join 3–5 Surat property or Surat buy-and-sell Facebook groups and post the listing (follow each group's rules).
3. Send to relevant WhatsApp groups (society, school, office, community) and set it as your WhatsApp status.
4. Add the link to your Instagram and LinkedIn bio, and to your email signature.
5. Ask friends and family with websites or blogs to link to it.

**Short post for groups**
> 3 BHK furnished flat for sale – Sejal Apartment, City Light, Athwa, Surat. 1500 sq ft, top floor, 2 baths. Photos and details: https://property.kshiti.io – call/WhatsApp +91 94261 04316.

## Part 6. Weekly routine (10 minutes)
1. Open Search Console → **Performance**. Look at **Queries** (what people searched) and **Pages**.
2. Open **Pages** and check for new problems.
3. Every two weeks, write a new guide (tell me the topic and I will add it) and request indexing for it.
4. Check the portals and refresh or renew the listings so they stay active.
5. When you decide on the price, update `config.json`, rebuild and push.

## Part 7. What to expect
Check these searches manually (use a private window) once a week and note the position.

| Search | Realistic timing |
|---|---|
| `property.kshiti.io` or "property kshiti" | days after indexing |
| Sejal Apartment City Light Surat | 1–4 weeks |
| 3 BHK furnished flat City Light Athwa Surat | 2–8 weeks |
| flat for sale in Athwa Surat | 1–3 months, depends on links |
| 3 BHK flat price in Surat · carpet area vs super built-up area · documents to buy flat in Surat | 1–3 months |
| flat in Surat · flat for sale in Surat | unlikely; the portals hold these |

If page one is not reached for the specific searches after 8 weeks, send me the Search Console "Queries" data and I will improve the pages that are close.

## Part 8. What not to do
- Do not buy links or use "SEO packages" that promise a first position. They can get the site penalised.
- Do not post fake reviews or fake listings.
- Do not copy text from other websites; duplicates lower ranking.
- Do not create many near-identical pages for other cities or for "rent". Google treats this as spam.
- When the flat is sold, tell me and I will replace the home page with a "Sold" notice, so searchers are not misled.

## Quick reference
| Task | Where |
|---|---|
| Change phone, email, price, domain, verification codes | `config.json` |
| Rebuild the site | `npm run build` |
| Preview locally | `npm run dev`, then open http://localhost:8000 |
| Publish | `git add -A && git commit -m "message" && git push` (Vercel redeploys) |
| Regenerate the PDFs | `npm run seo-pdf` and `node scripts/seo-pdf.mjs docs/Launch-Guide.md docs/Launch-Guide.pdf` |
