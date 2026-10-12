/**
 * Submit `[data-lead-form]` forms with fetch and show inline feedback.
 * Without JS the forms post normally and the API redirects to /thank-you/.
 */
interface LeadResponse {
  ok: boolean;
  message: string;
}

export function initLeadForms(): void {
  document.querySelectorAll<HTMLFormElement>('[data-lead-form]').forEach((form) => {
    const status = form.querySelector<HTMLElement>('[data-form-status]');
    const submit = form.querySelector<HTMLButtonElement>('[type="submit"]');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (submit) submit.disabled = true;
      if (status) status.textContent = 'Sending…';

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });
        const result = (await response.json()) as LeadResponse;
        if (status) status.textContent = result.message;
        if (result.ok) form.reset();
      } catch {
        if (status) status.textContent = 'Something went wrong. Please email us instead.';
      } finally {
        if (submit) submit.disabled = false;
      }
    });
  });
}
