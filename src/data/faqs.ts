export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'What kind of venues do you work with?',
    answer:
      'Independent restaurants, bars, cafés, pubs and small hospitality groups. If you have tables to fill, we can help fill them.',
  },
  {
    question: 'How quickly will I see more bookings?',
    answer:
      'Paid local campaigns usually start moving reservations within the first few weeks. Organic social and search work compounds over the following months.',
  },
  {
    question: 'Do I need to sign a long contract?',
    answer:
      'No. We work on rolling monthly agreements because we would rather keep you with results than with paperwork.',
  },
  {
    question: 'What is included in the free marketing audit?',
    answer:
      'We review your Google Business Profile, website, booking journey, reviews and social channels, then send you a prioritised list of quick wins.',
  },
  {
    question: 'Do you create the photos and videos?',
    answer:
      'Yes. Our social packages include planning and producing short-form content, or we can work with photography you already have.',
  },
];

/** Questions venue owners ask before booking a strategy session. */
export const bookingFaqs: Faq[] = [
  {
    question: 'How long does it take to see results from SEO?',
    answer:
      'Google Business Profile and local fixes can lift calls and bookings within weeks. Organic rankings usually build over three to six months, then keep compounding.',
  },
  {
    question: 'What makes restaurant SEO different from regular SEO?',
    answer:
      'Diners search close to when they want to eat, so Maps visibility, reviews, menus and opening hours matter more than long articles. We optimise for “near me” moments that end in a booking.',
  },
  {
    question: 'Do you work with restaurants outside my area?',
    answer:
      'Yes. We work remotely with venues across Australia and beyond, and target the suburbs your guests actually come from.',
  },
  {
    question: 'Will this work for my type of venue?',
    answer:
      'We work with restaurants, cafés, bars, pizzerias and multi-site groups. On the call we’ll tell you honestly where the biggest wins are for your venue.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'It depends on your goals and how many locations you have. The strategy session is free, and you’ll get a clear quote afterwards with no lock-in contract.',
  },
];
