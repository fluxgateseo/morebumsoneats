/** Bindings and variables configured in wrangler.toml. */
export interface Env {
  /** Static site built by Astro (`dist/`). */
  ASSETS: Fetcher;
  /** Inbox that receives contact-form and newsletter submissions. */
  LEADS_EMAIL?: string;
}
