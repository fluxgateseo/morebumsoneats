/**
 * Global site configuration.
 * Business details live here so every page, component and
 * structured-data block reads from a single source of truth.
 */
export const site = {
  name: 'More Bums on Seats',
  shortName: 'MBOS',
  url: 'https://morebumsonseats.com',
  locale: 'en_US',
  lang: 'en',
  tagline: 'Fill more tables. Grow revenue.',
  description:
    'Restaurant marketing agency helping restaurants, bars and dining venues fill more tables with tailored campaigns that boost bookings and revenue.',
  themeColor: '#1466F5',
  contact: {
    email: 'hello@morebumsonseats.com',
  },
  social: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    x: 'https://x.com/',
    tiktok: 'https://tiktok.com/',
  },
  defaultOgImage: 'photo-1414235077428-338989a2e8c0',
} as const;

export type Site = typeof site;
