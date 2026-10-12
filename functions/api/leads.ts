/**
 * Cloudflare Pages Function — POST /api/leads
 *
 * Receives the contact and newsletter forms, validates them and emails the
 * lead to `LEADS_EMAIL` via FormSubmit (https://formsubmit.co). Sending
 * server-side keeps the recipient address out of the public HTML.
 *
 * Responds with JSON for fetch() requests and with a redirect to /thank-you/
 * for regular (no-JS) form posts.
 */

interface Env {
  LEADS_EMAIL?: string;
}

const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/';

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

async function sendEmail(recipient: string, lead: Lead, origin: string): Promise<boolean> {
  const subject =
    lead.form === 'newsletter'
      ? `New newsletter subscriber: ${lead.email}`
      : `New enquiry from ${lead.name}${lead.venue ? ` (${lead.venue})` : ''}`;

  const response = await fetch(FORMSUBMIT_ENDPOINT + encodeURIComponent(recipient), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      // FormSubmit only accepts submissions that identify the originating site.
      Origin: origin,
      Referer: lead.page ?? `${origin}/`,
    },
    body: JSON.stringify({ ...lead, _subject: subject, _replyto: lead.email, _template: 'table' }),
  }).catch(() => null);

  const result = response ? ((await response.json().catch(() => null)) as { success?: unknown } | null) : null;
  const ok = response?.ok === true && String(result?.success) === 'true';
  if (!ok) console.error('FormSubmit delivery failed', response?.status, result);
  return ok;
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

  if (!env.LEADS_EMAIL) {
    console.error('LEADS_EMAIL is not configured.');
    return respond(request, 503, 'Our form is taking a break — please email us directly.');
  }

  lead.page = request.headers.get('Referer');

  const delivered = await sendEmail(env.LEADS_EMAIL, lead, new URL(request.url).origin);
  if (!delivered) {
    return respond(request, 502, 'Something went wrong. Please email us instead.');
  }

  const message =
    lead.form === 'newsletter'
      ? 'You’re in! Fresh tips are on their way.'
      : 'Thanks! We’ll be in touch within one working day.';

  return respond(request, 200, message);
};
