import { images, type SiteImage } from './images';

/**
 * Client testimonials.
 * TODO: replace the placeholder names/venues with real, approved client details.
 */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: SiteImage;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'More Bums on Seats transformed our slow nights into fully booked evenings!',
    name: 'John Doe',
    role: 'Owner, Bistro · New York',
    avatar: images.portraitD,
  },
  {
    quote: 'Their marketing boosted our bookings by 40% in just three months!',
    name: 'John Doe',
    role: 'General Manager, Wine Bar',
    avatar: images.portraitB,
  },
  {
    quote:
      'Their tailored marketing brought a fresh crowd and boosted our bookings by over 30% in months.',
    name: 'John Doe',
    role: 'Founder, Café · New York',
    avatar: images.portraitA,
  },
  {
    quote: 'More Bums on Seats transformed our slow weekdays into busy nights. Truly impressive results!',
    name: 'John Doe',
    role: 'Owner, Pizzeria',
    avatar: images.portraitC,
  },
];
