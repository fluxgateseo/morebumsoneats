/**
 * Form delivery via FormSubmit (https://formsubmit.co).
 * Forms post straight from the visitor's browser, which is how FormSubmit is
 * designed to be used — no server code to run or maintain.
 */
import { site } from '@/config/site';

const FORMSUBMIT_ORIGIN = 'https://formsubmit.co';
const { recipient } = site.forms;

/** Regular form post (no-JS fallback); FormSubmit redirects to `_next`. */
export const formAction = `${FORMSUBMIT_ORIGIN}/${recipient}`;

/** JSON endpoint used by the progressive-enhancement script. */
export const formAjaxAction = `${FORMSUBMIT_ORIGIN}/ajax/${recipient}`;

export const thankYouUrl = new URL('/thank-you/', site.url).toString();
