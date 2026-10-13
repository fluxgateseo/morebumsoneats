import type { IconName } from '@/components/ui/Icon.astro';

/** Content for the Why Us page. */
export interface Stat {
  value: string;
  label: string;
}

export interface Differentiator {
  icon: IconName;
  title: string;
  text: string;
}

export const stats: Stat[] = [
  { value: '96+', label: 'Successful projects' },
  { value: '30+', label: 'Global reach' },
  { value: '17+', label: 'Years of experience' },
];

export const differentiators: Differentiator[] = [
  {
    icon: 'utensils',
    title: 'Restaurants & cafés only',
    text: 'We work exclusively in food and hospitality, so we already know the challenges — and the opportunities — your venue faces.',
  },
  {
    icon: 'sparkle',
    title: 'Strategy through to delivery',
    text: 'From the first plan to ongoing optimisation, we run every part of your digital marketing so you can focus on running the floor.',
  },
  {
    icon: 'chart',
    title: 'A dedicated senior specialist',
    text: 'Every client gets one senior specialist who implements the work, tracks performance and turns the data into clear decisions.',
  },
  {
    icon: 'search',
    title: 'Own your local market',
    text: 'We grow your visibility across your region, city and suburb — weekdays, weekends and peak dining hours.',
  },
  {
    icon: 'check',
    title: 'Ethical, Google-approved tactics',
    text: 'Every strategy follows Google’s best practices, so your rankings last and you never risk penalties.',
  },
  {
    icon: 'megaphone',
    title: 'Your full marketing department',
    text: 'SEO, Google Business Profile, paid ads and social media — everything handled by one team, under one roof.',
  },
];
