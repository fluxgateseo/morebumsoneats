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
    summary: 'Targeted local campaigns designed to boost your reservations and pack your dining room.',
    description:
      'Hyper-local paid search, social and maps campaigns aimed at diners within reach of your door — tuned around your quiet nights so every cover counts.',
    deliverables: ['Local search & Maps ads', 'Geo-targeted social ads', 'Booking-funnel tracking'],
    image: images.diningRoom,
    accent: 'sky',
  },
  {
    slug: 'social-media',
    title: 'Social Media',
    summary: 'Engaging food content crafted for Instagram and TikTok to attract hungry followers.',
    description:
      'Scroll-stopping reels, menu drops and behind-the-pass stories that turn followers into regulars, planned in monthly content calendars.',
    deliverables: ['Content calendars', 'Short-form video', 'Community management'],
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
