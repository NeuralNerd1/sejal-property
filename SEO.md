# SEO Implementation Report
**Site:** https://property.kshiti.io · **Listing:** 3 BHK furnished flat for sale, Sejal Apartment, City Light, Athwa, Surat 395007

## 1. Summary
The site is a fast, static, mobile-friendly single-listing website. Everything a search engine needs (text, headings, photos, address, price, FAQs) sits in plain HTML and is described again as structured data. This report lists what is **implemented in the code today**, why each item matters, and what still has to be done by the owner after the site goes live (Section 9). SEO cannot guarantee a ranking. Section 2 explains what to realistically expect.

## 2. Goal and realistic expectations
The aim is to be found by buyers searching for a flat in this exact area and size.

Broad terms such as "property in Surat" are dominated by large portals (99acres, MagicBricks, Housing.com, NoBroker). A new single-listing site will not hold the first position for those. The site is therefore built to win **specific searches**, and to rank first for its own name and address.

| Priority | Example searches | Where they are targeted |
|---|---|---|
| Primary | 3 BHK flat for sale in City Light Surat · furnished flat for sale Athwa Surat · Sejal Apartment City Light | Home page title, H1, description, body text, FAQ, structured data |
| Secondary | flat for sale in Surat · buy 3 BHK in Surat · top floor flat Athwa · ready to move flat Surat | Home page text and guides |
| Informational | documents to buy a flat in Surat · property registration Surat Gujarat · City Light Surat area guide | The five buyer guides |
| Rent and other cities | Not targeted on purpose. The flat is for sale only. Ranking for "rent" would bring the wrong visitors. | The FAQ states it is for sale |

## 3. On-page SEO (implemented)
| Item | What was done | Why it matters |
|---|---|---|
| Page title | Home: "3 BHK Furnished Flat for Sale in City Light, Athwa, Surat" (57 characters, fits the ~60 shown by Google). Every guide has its own unique title. | The title is the strongest on-page ranking signal and the clickable headline in search results. |
| Meta description | Written per page, 124–146 characters on guides and about 145 on home. Contains the main keywords plus a call to action. | Not a ranking factor itself, but drives the click-through rate. |
| Headings | One H1 per page ("3 BHK furnished flat for sale in City Light, Surat"), then H2/H3 in a logical order. | Tells search engines what the page is about and how it is structured. |
| Keyword placement | Keywords appear naturally in the H1, first paragraph, address block, photo captions, FAQ and amenities: 3 BHK, furnished, flat for sale, City Light, Athwa, Surat, Sejal Apartment, top floor, 1500 sq ft. | Matches the words buyers type. No keyword stuffing, which Google penalises. |
| Spelling variants | Both "City Light" and "Citylight" are used (the area is written both ways locally); "flat", "apartment" and "house" all appear in the text. | Captures searches however people spell or phrase them. |
| Crisp copy | The description was shortened to one keyword-rich paragraph plus a one-line audience sentence; details moved into scannable lists (facts, furnishing, amenities). | Easier to read on mobile; search engines and users find the key facts quickly. |
| FAQ section | Nine real buyer questions (location, size, floor, furnishing, amenities, sale or rent, price, visit, documents). | Answers long-tail questions and can appear as expandable answers in Google. |
| Image alt text | Every photo has a descriptive alt text with room and location (e.g. "Spacious kitchen with granite platform, cabinets and water purifier, City Light, Surat"). The only empty alt is the photo-viewer pop-up, which is filled in by script. | Used for image search and for accessibility. |
| Image file names | Descriptive and keyword-based, e.g. `kitchen-citylight-surat-1200.webp`. | A small image-search signal. |
| Internal links | Home links to guides; each guide links to related guides and back to the listing with a button; the footer links everywhere. | Spreads ranking value and helps crawlers find every page. |
| Contact links | Phone `tel:`, WhatsApp link (number shown on the button and below it), email link. | Conversion and a consistent name-address-phone signal. |
| Language | `lang="en-IN"` on every page, `og:locale en_IN`. | Tells search engines this is English for India. |

## 4. Local SEO (implemented)
- **Full address in text and schema:** Sejal Apartment, 16 Maharishi Dadhichi Road, City Light Town, Athwa, Surat, Gujarat 395007.
- **Geo meta tags:** region IN-GJ, place name, and coordinates 21.167485, 72.7936508 (taken from the Google Maps link).
- **Google Maps embed and "Get directions" link** in the Location section.
- **Nearby areas** (Athwa, Parle Point, Vesu, Surat Railway Station) shown in the Location section and the copy.
- **Area guide:** a dedicated "City Light, Surat" page.

## 5. Structured data / JSON-LD (implemented)
Structured data is a machine-readable summary placed in the page. It helps search engines understand the page and can unlock richer results.

| Type | Where | Content |
|---|---|---|
| RealEstateListing + Apartment | Home | 3 bedrooms, 2 bathrooms, 1500 sq ft floor size, top floor, amenities (furnished, AC, water purifier, geyser, lift, security guard, CCTV, visitor parking, children's play area, park), full postal address, geo coordinates, all photos, date posted. An **Offer with price** is added automatically as soon as the price is set in `config.json`. |
| FAQPage | Home | The nine questions and answers. |
| WebSite | Home | Site name and URL. |
| Article + BreadcrumbList | Each guide | Headline, description, dates, publisher, and the Home > Guides > Article path. |
| BreadcrumbList | Guides index | Home > Buyer guides. |

## 6. Technical SEO and speed (implemented)
- **Plain HTML:** all text is in the page source. Nothing depends on JavaScript to be read or indexed. The only script is a small optional photo viewer.
- **Canonical URLs:** every page declares its own canonical address on `https://property.kshiti.io`, which prevents duplicate-URL issues.
- **Robots meta:** `index, follow, max-image-preview:large` (allows big image previews in results). The 404 page is set to `noindex`.
- **sitemap.xml:** lists the home page, the guides index and the five guides with last-modified dates. The home entry also lists every photo with a caption (helps Google Images).
- **robots.txt:** allows all crawlers and points to the sitemap.
- **Social sharing tags:** Open Graph and Twitter Card with a 1200×630 preview image, so WhatsApp, Facebook and X show a proper preview when the link is shared.
- **Image performance:** photos converted to WebP at 600 px and 1200 px with `srcset`/`sizes` (roughly 25–110 KB each, about 1.4 MB for the whole site). The hero photo is preloaded with high priority; the rest load lazily. Width and height are set on images so the page does not jump while loading.
- **Light assets:** one 6.6 KB stylesheet, no web fonts, no frameworks, no third-party scripts except the optional Google Maps embed (loaded lazily).
- **Mobile-first:** responsive layout, viewport tag, readable text sizes, tap-friendly buttons, tested at phone and tablet widths. Google ranks based on the mobile version.
- **Accessibility:** semantic landmarks, visible keyboard focus, labels on buttons, reduced-motion support. Good accessibility overlaps with good SEO.
- **Caching and security headers:** `_headers` file for Netlify/Cloudflare Pages (long caching for assets, `nosniff`, referrer policy).
- **Clean URLs:** lowercase, hyphenated, with a trailing slash, e.g. `/guides/citylight-surat-area-guide/`.

## 7. Content: buyer guides (implemented)
Five real, readable pages in `/guides/`, linked from the footer and the guides index. They exist to rank for informational searches and to bring buyers to the listing.
1. 3 BHK Flat for Sale in Citylight, Surat – What to Expect
2. Buying a Flat in Surat – Documents Checklist
3. Property Registration Process in Surat, Gujarat – Step by Step
4. Buying a Furnished Flat in Surat – What to Check
5. Citylight, Surat – Area Guide for Home Buyers

**Not hidden:** the guides are visible to visitors. Showing text only to search engines is called cloaking, and Google penalises sites that do it, so it was deliberately avoided. The guides contain general information only (no invented statistics or rates) and tell readers to verify current rules.

## 8. How the site is generated
`node build.mjs` produces all pages, the sitemap, `robots.txt` and the headers file from `config.json` and the guide files. Because of this, the title tags, schema and sitemap always match the data in one place. Changing the price or domain and rebuilding updates everything at once.

## 9. Still to do after the site goes live (owner)
These matter more for ranking than any further code change.
1. **Deploy and enable HTTPS** on property.kshiti.io, then point the DNS at the host.
2. **Google Search Console:** add the site, verify it, submit `https://property.kshiti.io/sitemap.xml`, and use *URL Inspection → Request indexing* on the home page and each guide.
3. **Bing Webmaster Tools:** import from Search Console (also covers Yahoo and DuckDuckGo).
4. **Test the structured data** at search.google.com/test/rich-results and validator.schema.org.
5. **List the flat on 99acres, MagicBricks, Housing.com, NoBroker and OLX**, with the same phone number and a link to this website. Links from these sites are the biggest ranking boost for a new domain.
6. **Share the link** in WhatsApp groups, Facebook Marketplace and local Surat property groups.
7. **Set the price** in `config.json` so it appears on the page and in the structured data.
8. **Check results after 2–4 weeks** in Search Console (Pages and Performance reports).

## 10. Later improvements (optional)
- Hindi and Gujarati versions with `hreflang` tags.
- A short video walkthrough (video schema).
- A floor plan and a building exterior photo.
- New FAQ entries based on real buyer questions.
- When the flat is sold, replace the page with a "Sold" notice so searchers are not misled.
