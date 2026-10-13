import type { ImageMetadata } from 'astro';
import omar from '@/assets/owners/omar-el-deek.jpg';
import micheleFabio from '@/assets/owners/michele-and-fabio.jpg';
import andrea from '@/assets/owners/andrea-fioriti.jpg';
import peach from '@/assets/owners/peach.jpg';

/**
 * Real testimonials only, attributed as published:
 * - `client`: quotes from our published case studies
 * - `google`: public Google reviews of our sister brand, SEO for Restaurants
 *   (excerpts; reviewer names as they appear on Google)
 */
export interface Testimonial {
  quote: string;
  name: string;
  detail: string;
  source: 'client' | 'google';
  avatar?: ImageMetadata;
  /** Case study to link to, when there is one. */
  caseStudy?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Since the inception of our partnership, phone inquiries, table bookings, and takeaway orders have experienced a remarkable surge.',
    name: 'Omar El Deek',
    detail: 'Owner, Cosi Bar Ristorante',
    source: 'client',
    avatar: omar,
    caseStudy: 'cosi-bar-ristorante',
  },
  {
    quote:
      'Since the beginning of our partnership, we’ve witnessed a significant uptick in phone inquiries, table bookings, and delivery requests.',
    name: 'Michele & Fabio',
    detail: 'Owners, 48h Pizza e Gnocchi Bar',
    source: 'client',
    avatar: micheleFabio,
    caseStudy: '48h-pizza-e-gnocchi-bar',
  },
  {
    quote:
      'I recently collaborated with Andrea on our organic presence, and I couldn’t be happier with the results.',
    name: 'Fady Ilias',
    detail: 'Google review',
    source: 'google',
  },
  {
    quote: 'Phone inquiries, table bookings, and takeaway orders have surged since our partnership began.',
    name: 'Andrea Fioriti',
    detail: 'Head Chef & Partner, Piccolino',
    source: 'client',
    avatar: andrea,
    caseStudy: 'piccolino-pizza',
  },
  {
    quote: '…a rock! They got an excelent skills in making restaurants shine online.',
    name: 'Galih',
    detail: 'Google review',
    source: 'google',
  },
  {
    quote:
      '…Cafe Nate has seen a remarkable rise in phone calls, table reservations, and takeout orders. Their expertise in SEO has been instrumental in driving more customers to our door.',
    name: 'Peach',
    detail: 'Owner, Cafe Nate',
    source: 'client',
    avatar: peach,
    caseStudy: 'cafe-nate',
  },
  {
    quote:
      'Since the beginning of our partnership, there has been a significant surge in phone inquiries, table bookings, and takeaway orders.',
    name: 'Omar El Deek',
    detail: 'Owner, Cucinetta',
    source: 'client',
    avatar: omar,
    caseStudy: 'cucinetta',
  },
];
