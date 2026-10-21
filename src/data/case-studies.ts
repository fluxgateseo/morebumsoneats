import type { ImageMetadata } from 'astro';
import cosi from '@/assets/case-studies/cosi-bar-ristorante.jpg';
import vaporetto from '@/assets/case-studies/vaporetto.jpg';
import cucinetta from '@/assets/case-studies/cucinetta.jpg';
import pizzaGnocchi from '@/assets/case-studies/48h-pizza-e-gnocchi-bar.webp';
import piccolino from '@/assets/case-studies/piccolino.webp';
import cafeNate from '@/assets/case-studies/cafe-nate.webp';

/**
 * Client case studies.
 * Work delivered with our sister brand, SEO for Restaurants. Figures and
 * client quotes (excerpted) are as published on seoforestaurants.com,
 * where the full write-ups live (`sourceUrl`).
 */
export interface Metric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  location: string;
  tagline: string;
  image: ImageMetadata;
  imageAlt: string;
  /** Comparison window the metrics refer to. */
  period: string;
  metrics: [Metric, Metric, Metric];
  /** Suburbs targeted by the local SEO campaign. */
  areas: string[];
  challenge: string;
  strategy: string[];
  results: string;
  quote: string;
  author: string;
  authorRole: string;
  sourceUrl: string;
}

const metrics = (revenue: string, calls: string, conversion: string): CaseStudy['metrics'] => [
  { value: revenue, label: 'Increase in revenue' },
  { value: calls, label: 'Increase in phone calls & bookings' },
  { value: conversion, label: 'Increase in conversion rate' },
];

const SOURCE = 'https://seoforestaurants.com/case-studies/';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'cosi-bar-ristorante',
    name: 'Cosi Bar Ristorante',
    location: 'South Yarra, Melbourne',
    tagline: 'Italian dining in South Yarra',
    image: cosi,
    imageAlt: 'Cosi Bar Ristorante restaurant facade in South Yarra',
    period: 'Jan–Jul 2023 vs Aug 2023–Feb 2024',
    metrics: metrics('44%', '152.14%', '157.97%'),
    areas: ['South Yarra', 'Prahran', 'Richmond', 'Windsor', 'Melbourne CBD'],
    challenge:
      'Great food and warm service weren’t enough on their own: with almost no online presence, Cosi relied on word of mouth while competitors captured diners searching on Google.',
    strategy: [
      'Full audit of the restaurant’s digital footprint to find visibility gaps.',
      'Google Business Profile optimisation, local keyword targeting and consistent listings across directories.',
      'Rebrand and website rebuild to showcase the food and hospitality, backed by fresh content and professional photography.',
    ],
    results:
      'Bookings, calls and takeaway orders climbed sharply as Cosi started ranking for diners across South Yarra and neighbouring suburbs.',
    quote:
      'Since the inception of our partnership, phone inquiries, table bookings, and takeaway orders have experienced a remarkable surge.',
    author: 'Omar El Deek',
    authorRole: 'Owner, Cosi Bar Ristorante',
    sourceUrl: `${SOURCE}cosi-bar-ristorante-south-yarra/`,
  },
  {
    slug: 'vaporetto',
    name: 'Vaporetto Bar & Eatery',
    location: 'Hawthorn, Melbourne',
    tagline: 'Italian bar & eatery in Hawthorn',
    image: vaporetto,
    imageAlt: 'Vaporetto Bar & Eatery in Hawthorn',
    period: 'Jan–Jul 2023 vs Aug 2023–Feb 2024',
    metrics: metrics('63%', '173.17%', '196.1%'),
    areas: ['Hawthorn', 'Kew', 'Camberwell', 'Balwyn', 'Malvern', 'Glen Iris', 'Melbourne CBD'],
    challenge:
      'Vaporetto leaned on traditional marketing while nearby competitors were winning online, making it hard to stay visible and keep regulars coming back.',
    strategy: [
      'Location landing page built around Hawthorn and the surrounding suburbs.',
      'Local search rankings, keyword targeting and Google Business Profile optimisation.',
      'Rebrand and complete website redesign focused on the menu and the experience.',
    ],
    results:
      'Within a year Vaporetto became a go-to for both everyday dining and events, with conversions from the website nearly tripling.',
    quote:
      'Since the start of our partnership, we have experienced a notable increase in phone inquiries, table bookings, and takeaway orders.',
    author: 'Omar El Deek',
    authorRole: 'Owner, Vaporetto',
    sourceUrl: `${SOURCE}vaporetto-hawthorn/`,
  },
  {
    slug: 'cucinetta',
    name: 'Cucinetta',
    location: 'South Yarra, Melbourne',
    tagline: 'Neighbourhood Italian in South Yarra',
    image: cucinetta,
    imageAlt: 'Cucinetta restaurant in South Yarra',
    period: 'Jan–Jul 2023 vs Aug 2023–Feb 2024',
    metrics: metrics('31%', '188.43%', '277.09%'),
    areas: ['South Yarra', 'Albert Park', 'Prahran', 'Windsor', 'Richmond', 'Melbourne CBD'],
    challenge:
      'Without strong digital channels, Cucinetta struggled to stay front-of-mind while competitors used online marketing to stay relevant.',
    strategy: [
      'SEO and local SEO targeting South Yarra and neighbouring suburbs.',
      'Rebrand and website redevelopment to simplify the path from search to booking.',
      'Local campaigns promoting both regular dining and special events.',
    ],
    results:
      'Calls and bookings almost tripled and the conversion rate grew nearly four-fold, turning far more website visitors into guests.',
    quote:
      'Since the beginning of our partnership, there has been a significant surge in phone inquiries, table bookings, and takeaway orders.',
    author: 'Omar El Deek',
    authorRole: 'Owner, Cucinetta',
    sourceUrl: `${SOURCE}cucinetta-south-yarra/`,
  },
  {
    slug: '48h-pizza-e-gnocchi-bar',
    name: '48h Pizza e Gnocchi Bar',
    location: 'South Yarra & Elsternwick, Melbourne',
    tagline: '100+ extra weekly bookings per location',
    image: pizzaGnocchi,
    imageAlt: '48h Pizza e Gnocchi Bar venue',
    period: 'Jan–Dec 2023 vs Jan–Feb 2024',
    metrics: metrics('33%', '42.5%', '12.4%'),
    areas: ['South Yarra', 'Elsternwick', 'Richmond', 'Toorak', 'Prahran', 'St Kilda East', 'Brighton', 'Caulfield'],
    challenge:
      'An award-winning pizzeria in a crowded market, 48h needed to keep loyal regulars while pulling in new diners from the surrounding suburbs.',
    strategy: [
      'SEO and local SEO for both locations, reaching more than a dozen nearby suburbs.',
      'Website redevelopment and rebrand that put the authentic recipes front and centre.',
      'Local awareness campaigns for everyday dining and special events.',
    ],
    results:
      'Each location gained 100+ additional bookings a week, with steady growth in revenue and calls.',
    quote:
      'Since the beginning of our partnership, we’ve witnessed a significant uptick in phone inquiries, table bookings, and delivery requests.',
    author: 'Michele and Fabio',
    authorRole: 'Owners, 48h Pizza e Gnocchi Bar',
    sourceUrl: `${SOURCE}48h-pizza-e-gnocchi-bar/`,
  },
  {
    slug: 'piccolino-pizza',
    name: 'Piccolino Pizza',
    location: 'Fitzroy North, Melbourne',
    tagline: 'Trattoria pizzeria in Fitzroy North',
    image: piccolino,
    imageAlt: 'Piccolino Pizza in Fitzroy North',
    period: 'Apr 2020–Apr 2021 vs May 2021–Feb 2024',
    metrics: metrics('58%', '201.96%', '355.55%'),
    areas: ['Fitzroy North', 'Carlton', 'Collingwood', 'Clifton Hill', 'Thornbury', 'Northcote'],
    challenge:
      'Lockdowns in 2020 stopped dine-in trade overnight, so Piccolino needed to win takeaway customers and be ready to fill the room once doors reopened.',
    strategy: [
      'SEO and local SEO across Fitzroy North and neighbouring suburbs.',
      'Social media campaigns to stay visible through lockdowns.',
      'Rebrand and website rebuild to drive bookings for tables and functions.',
    ],
    results:
      'Takeaway surged during lockdown, followed by a big rise in calls and bookings — strong enough that the team cut trading from six to five days a week.',
    quote:
      'Phone inquiries, table bookings, and takeaway orders have surged since our partnership began.',
    author: 'Andrea Fioriti',
    authorRole: 'Head Chef & Partner, Piccolino',
    sourceUrl: `${SOURCE}piccolino-pizza-fitzroy-north/`,
  },
  {
    slug: 'cafe-nate',
    name: 'Cafe Nate',
    location: 'Roseville, New South Wales',
    tagline: 'Specialty coffee & eatery in Roseville',
    image: cafeNate,
    imageAlt: 'Cafe Nate specialty coffee and eatery in Roseville',
    period: 'Oct 2023–Jan 2024 vs Feb–May 2024',
    metrics: metrics('19.7%', '24.8%', '35.9%'),
    areas: ['Roseville'],
    challenge:
      'Cafe Nate serves two very different crowds — loyal older regulars and younger occasional visitors — and needed marketing that spoke to both.',
    strategy: [
      'Targeted content for each audience, from signature dishes to new menu drops.',
      'Google Business Profile optimisation with accurate details and local keywords.',
      'Keyword-optimised, regularly updated online menu and an active review strategy.',
    ],
    results:
      'More locals found the cafe online and turned that interest into visits, lifting revenue in just four months.',
    quote:
      '…Cafe Nate has seen a remarkable rise in phone calls, table reservations, and takeout orders. Their expertise in SEO has been instrumental in driving more customers to our door.',
    author: 'Peach',
    authorRole: 'Owner, Cafe Nate',
    sourceUrl: `${SOURCE}cafe-nate/`,
  },
];
