# More Bums on Seats

Marketing website for **More Bums on Seats**, a restaurant & hospitality marketing agency.
Built with [Astro](https://astro.build) as a fast, fully static, SEO-friendly site and deployed on
[Cloudflare Workers static assets](https://developers.cloudflare.com/workers/static-assets/).

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
| `npm run check`   | Type-check the project                                              |
| `npm run build`   | Type-check, then build the static site into `dist/`                 |
| `npm run preview` | Build and serve the site locally with `wrangler dev`                |
| `npm run deploy`  | Build and deploy to Cloudflare with `wrangler deploy`               |

## Project structure

```text
.
├── public/                    # Copied as-is to dist/
│   ├── _headers               # Security + caching headers
│   ├── _redirects             # 301s for legacy WordPress URLs
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── forms/             # ContactForm, NewsletterForm, FormSubmit fields
│   │   ├── layout/            # Header, Footer
│   │   ├── sections/          # Page sections (Hero, ServicesGrid, FaqList…)
│   │   ├── seo/               # SEO <head> tags
│   │   └── ui/                # Primitives (Button, Icon, Logo, UnsplashImage…)
│   ├── config/site.ts         # Business details — single source of truth
│   ├── data/                  # Content: services, testimonials, FAQs, images…
│   ├── layouts/               # BaseLayout, ProseLayout
│   ├── lib/                   # Helpers: Unsplash URLs, schema.org JSON-LD, form endpoints
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
folder is served from Cloudflare's edge and `_headers` / `_redirects` are applied automatically.
There is no server code to run.

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

The contact form and the newsletter form submit straight from the visitor's browser to
[FormSubmit](https://formsubmit.co), which emails each submission to the inbox set in
`site.forms.recipient` (`src/config/site.ts` → `seoforestaurants@gmail.com`).

- With JavaScript, forms post to FormSubmit's JSON endpoint and show an inline message.
- Without JavaScript, they post normally and FormSubmit redirects to `/thank-you/`.
- Spam protection: FormSubmit's `_honey` honeypot field. The reply-to is the sender's email.

**One-time activation:** the very first submission makes FormSubmit email an activation link to
`seoforestaurants@gmail.com`. Until it's clicked, submissions aren't delivered (the site shows an
error asking people to email you instead). After activating, FormSubmit also gives you a random
alias string — put it in `site.forms.recipient` to hide the real address from the page source.

## Before going live

Some details from the old site were placeholders. Update them in one place each:

- [ ] Contact email — `src/config/site.ts`
- [ ] Social profile URLs — `src/config/site.ts`
- [ ] Testimonial names and venues — `src/data/testimonials.ts`
- [ ] Send a test enquiry from the live site and click the FormSubmit activation link

## Credits

Photography from [Unsplash](https://unsplash.com/license), free to use under the Unsplash License.
