/**
 * Submit `[data-lead-form]` forms to FormSubmit's JSON endpoint and show
 * inline feedback. Without JS the forms post normally and FormSubmit
 * redirects to /thank-you/.
 */
interface FormSubmitResponse {
  /** FormSubmit returns this as a boolean or as the string "true"/"false". */
  success?: boolean | string;
  message?: string;
}

const MESSAGES = {
  sending: 'Sending…',
  success: 'Thanks! We’ll be in touch soon.',
  error: 'Something went wrong. Please email us at hello@morebumsonseats.com.',
};

export function initLeadForms(): void {
  document.querySelectorAll<HTMLFormElement>('[data-lead-form]').forEach((form) => {
    const status = form.querySelector<HTMLElement>('[data-form-status]');
    const submit = form.querySelector<HTMLButtonElement>('[type="submit"]');
    const endpoint = form.dataset.ajaxAction ?? form.action;

    const setStatus = (text: string) => {
      if (status) status.textContent = text;
    };

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (submit) submit.disabled = true;
      setStatus(MESSAGES.sending);

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(Object.fromEntries(new FormData(form))),
        });
        const result = (await response.json()) as FormSubmitResponse;

        if (response.ok && String(result.success) === 'true') {
          setStatus(MESSAGES.success);
          form.reset();
        } else {
          // e.g. "This form needs Activation" on the very first submission.
          console.warn('[lead-form]', result.message);
          setStatus(MESSAGES.error);
        }
      } catch (error) {
        console.warn('[lead-form]', error);
        setStatus(MESSAGES.error);
      } finally {
        if (submit) submit.disabled = false;
      }
    });
  });
}
