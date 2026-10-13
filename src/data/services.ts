import { images, type SiteImage } from './images';

export type Accent = 'sky' | 'lime' | 'tomato' | 'pink' | 'sun' | 'ink';

export interface Service {
  slug: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
  image: SiteImage;
  accent: Accent;
}

export const services: Service[] = [
  {
    slug: 'table-filling-campaigns',
    title: 'Table-Filling Campaigns',
    summary: 'Get found on Google and Maps by diners nearby, and turn searches into reservations.',
    description:
      'SEO, Google Maps optimisation and Google Ads aimed at diners within reach of your door — tuned around your quiet nights, with every booking and function enquiry tracked so every cover counts.',
    deliverables: [
      'SEO (search engine optimisation)',
      'Google Maps & Business Profile optimisation',
      'Google Ads',
      'Booking & function-enquiry funnel tracking',
    ],
    image: images.diningRoom,
    accent: 'sky',
  },
  {
    slug: 'social-media',
    title: 'Social Media',
    summary: 'Content and ads on Instagram, Facebook and TikTok that turn hungry followers into guests.',
    description:
      'Scroll-stopping reels, menu drops and behind-the-pass stories, plus paid campaigns on Meta and TikTok aimed at locals — planned in monthly content calendars and built to turn followers into regulars.',
    deliverables: [
      'Instagram & Facebook (Meta) ad campaigns',
      'TikTok campaigns',
      'Geo-targeted social ads',
      'Short-form video & content calendars',
      'Community management',
    ],
    image: images.pokeBowl,
    accent: 'tomato',
  },
  {
    slug: 'event-boost',
    title: 'Event Boost',
    summary: 'Promote themed nights and launch parties that bring your venue to life.',
    description:
      'From bottomless brunch to menu launches, we build the buzz, sell the tickets and make sure the room is full when the doors open.',
    deliverables: ['Event landing pages', 'Ticketing & RSVP promos', 'Influencer invites'],
    image: images.cocktails,
    accent: 'lime',
  },
  {
    slug: 'marketing-audit',
    title: 'Marketing Audit',
    summary: 'In-depth review uncovering growth opportunities tailored to your venue.',
    description:
      'A clear-eyed look at your website, Google profile, reviews, socials and booking flow — delivered as a prioritised action plan you can use straight away.',
    deliverables: ['Google Business Profile review', 'Website & booking UX check', 'Prioritised action plan'],
    image: images.chefPrep,
    accent: 'pink',
  },
];
