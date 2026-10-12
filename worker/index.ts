/**
 * Cloudflare Worker entry point.
 *
 * Static pages are served straight from the `dist/` assets (including
 * `_headers`, `_redirects` and the 404 page). Only `/api/*` requests reach
 * this script — see `run_worker_first` in wrangler.toml.
 */
import type { Env } from './env';
import { handleLeads } from './routes/leads';

export default {
  async fetch(request, env): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname === '/api/leads') {
      if (request.method !== 'POST') {
        return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'POST' } });
      }
      return handleLeads(request, env);
    }

    if (pathname.startsWith('/api/')) {
      return new Response('Not Found', { status: 404 });
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
