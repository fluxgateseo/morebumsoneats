# More Bums on Seats

Marketing website for **More Bums on Seats**, a restaurant & hospitality marketing agency.
Built with [Astro](https://astro.build) as a fast, fully static, SEO-friendly site and deployed on
[Cloudflare Workers static assets](https://developers.cloudflare.com/workers/static-assets/), with a
tiny Worker handling the form API.

- Bold, clean, colourful design (sky / lime / tomato / pink palette)
- Food & beverage photography from [Unsplash](https://unsplash.com), served responsively from its CDN
- Zero client-side framework — just a few KB of progressive-enhancement TypeScript

## Quick start

```bash
nvm use            # Node 22+
npm install
npm run dev        # http://localhost:4321
```

| Script            | What it does                                                        |
| ----------------- | ------------------------------------------------------------------- |
| `npm run dev`     | Start the Astro dev server                                          |
| `npm run check`   | Type-check Astro pages and the Cloudflare Worker                    |
| `npm run build`   | Type-check, then build the static site into `dist/`                 |
| `npm run preview` | Build and run the site + Worker locally with `wrangler dev`         |
| `npm run deploy`  | Build and deploy to Cloudflare with `wrangler deploy`               |

## Project structure

```text
.
├── worker/                    # Cloudflare Worker (server-side)
│   ├── index.ts               # Entry: routes /api/*, everything else → static assets
│   ├── env.ts                 # Bindings & variables
│   └── routes/leads.ts        # POST /api/leads — contact & newsletter forms
├── public/                    # Copied as-is to dist/
│   ├── _headers               # Security + caching headers
│   ├── _redirects             # 301s for legacy WordPress URLs
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── forms/             # ContactForm, NewsletterForm
│   │   ├── layout/            # Header, Footer
│   │   ├── sections/          # Page sections (Hero, ServicesGrid, FaqList…)
│   │   ├── seo/               # SEO <head> tags
│   │   └── ui/                # Primitives (Button, Icon, Logo, UnsplashImage…)
│   ├── config/site.ts         # Business details — single source of truth
│   ├── data/                  # Content: services, testimonials, FAQs, images…
│   ├── layouts/               # BaseLayout, ProseLayout
│   ├── lib/                   # Helpers: Unsplash URLs, schema.org JSON-LD
│   ├── pages/                 # File-based routes (+ robots.txt endpoint)
│   ├── scripts/               # Client-side enhancements (header, reveal, forms)
│   └── styles/                # Design tokens + global styles
├── astro.config.mjs
└── wrangler.toml
```

**Editing content:** copy lives in `src/data/*` and `src/config/site.ts`; pages only compose sections.
To change a photo, swap its Unsplash id in `src/data/images.ts`.

## SEO

- Unique `<title>`, meta description, canonical URL, Open Graph & Twitter cards on every page
- JSON-LD structured data: `ProfessionalService`, `WebSite`, `BreadcrumbList`, `Service` list,
  `FAQPage`, `AboutPage`, `ContactPage`
- `sitemap-index.xml` generated at build time and referenced from `robots.txt`
- Semantic HTML, a single `<h1>` per page, descriptive alt text, visible breadcrumbs
- Performance: static HTML, self-hosted fonts, responsive `srcset` images with explicit
  dimensions (no layout shift), lazy loading below the fold, immutable asset caching
- Utility pages (`/404`, `/thank-you/`) are `noindex` and excluded from the sitemap
- Legacy WordPress URLs are 301-redirected

## Deploying to Cloudflare

The site deploys as a Cloudflare **Worker with static assets** (`wrangler.toml`): Astro's `dist/`
folder is served from Cloudflare's edge, `_headers` / `_redirects` are applied automatically, and
only `/api/*` requests run the Worker script.

### Option A — Git integration (recommended)

1. Push this repository to GitHub.
2. In the Cloudflare dashboard go to **Workers & Pages → Create → Import a repository** and pick the repo.
3. Build settings:
   - **Build command:** `npm run build`
   - **Deploy command:** `npx wrangler deploy`
   - **Environment variable:** `NODE_VERSION = 22` (optional; `.nvmrc` already pins it)
4. Under **Settings → Domains & Routes**, add `morebumsonseats.com` (and `www`).

Every push to the production branch deploys automatically.

### Option B — Wrangler CLI

```bash
npx wrangler login
npm run deploy
```

## Forms

Both the contact form and the newsletter form post to `/api/leads`
(`worker/routes/leads.ts`). The function validates input, filters bots with a honeypot field and
emails each submission to the inbox set in **`LEADS_EMAIL`** (`wrangler.toml` →
`seoforestaurants@gmail.com`) using [FormSubmit](https://formsubmit.co). Because the email is sent
server-side, the recipient address never appears in the public HTML.

**One-time activation:** the very first submission makes FormSubmit send an activation email to
`seoforestaurants@gmail.com`. Click the link in it, and every submission after that arrives as a
normal email (the reply-to is set to the sender, so you can just hit reply).

To change the recipient, edit `LEADS_EMAIL` in `wrangler.toml` (or override it under
**Settings → Variables and Secrets** in Cloudflare).

## Before going live

Some details from the old site were placeholders. Update them in one place each:

- [ ] Contact email — `src/config/site.ts`
- [ ] Social profile URLs — `src/config/site.ts`
- [ ] Testimonial names and venues — `src/data/testimonials.ts`
- [ ] Send a test enquiry and confirm the FormSubmit activation email

## Credits

Photography from [Unsplash](https://unsplash.com/license), free to use under the Unsplash License.
