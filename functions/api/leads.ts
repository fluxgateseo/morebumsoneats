/**
 * Cloudflare Pages Function — POST /api/leads
 *
 * Receives the contact and newsletter forms, validates them and forwards the
 * lead as JSON to `LEADS_WEBHOOK_URL` (Zapier, Make, Slack, n8n, a CRM, etc.).
 *
 * Responds with JSON for fetch() requests and with a redirect to /thank-you/
 * for regular (no-JS) form posts.
 */

interface Env {
  LEADS_WEBHOOK_URL?: string;
}

type FormType = 'contact' | 'newsletter';

interface Lead {
  form: FormType;
  email: string;
  name?: string;
  venue?: string;
  venueType?: string;
  message?: string;
  submittedAt: string;
  page?: string | null;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const field = (data: FormData, key: string, max = 200): string =>
  String(data.get(key) ?? '')
    .trim()
    .slice(0, max);

function validate(data: FormData): { lead?: Lead; error?: string } {
  const form: FormType = field(data, 'form') === 'contact' ? 'contact' : 'newsletter';
  const email = field(data, 'email');

  if (!EMAIL_PATTERN.test(email)) return { error: 'Please enter a valid email address.' };

  const lead: Lead = { form, email, submittedAt: new Date().toISOString() };

  if (form === 'contact') {
    lead.name = field(data, 'name', 100);
    lead.venue = field(data, 'venue', 150);
    lead.venueType = field(data, 'venueType', 50);
    lead.message = field(data, 'message', 3000);

    if (!lead.name || !lead.message) return { error: 'Please add your name and a short message.' };
    if (!data.get('consent')) return { error: 'Please accept the privacy consent to continue.' };
  }

  return { lead };
}

function respond(request: Request, status: number, message: string): Response {
  const wantsJson = request.headers.get('Accept')?.includes('application/json');
  const ok = status < 400;

  if (wantsJson) return Response.json({ ok, message }, { status });
  if (ok) return Response.redirect(new URL('/thank-you/', request.url).toString(), 303);

  return new Response(message, { status, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return respond(request, 400, 'Invalid form submission.');
  }

  // Honeypot: bots fill hidden fields, people don't. Pretend success.
  if (field(data, 'company')) return respond(request, 200, 'Thanks!');

  const { lead, error } = validate(data);
  if (!lead) return respond(request, 422, error ?? 'Invalid form submission.');

  if (!env.LEADS_WEBHOOK_URL) {
    console.error('LEADS_WEBHOOK_URL is not configured.');
    return respond(request, 503, 'Our form is taking a break — please email us directly.');
  }

  lead.page = request.headers.get('Referer');

  const upstream = await fetch(env.LEADS_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(lead),
  }).catch(() => null);

  if (!upstream?.ok) {
    console.error('Lead webhook failed', upstream?.status);
    return respond(request, 502, 'Something went wrong. Please email us instead.');
  }

  const message =
    lead.form === 'newsletter'
      ? 'You’re in! Fresh tips are on their way.'
      : 'Thanks! We’ll be in touch within one working day.';

  return respond(request, 200, message);
};
