/** Process steps, venue types and headline figures used across the site. */

export interface Step {
  title: string;
  text: string;
}

export const process: Step[] = [
  { title: 'Audit', text: 'We dig into your venue, guests, competitors and booking data.' },
  { title: 'Plan', text: 'A tailored strategy built around your quietest covers.' },
  { title: 'Launch', text: 'Campaigns, content and events go live across every channel.' },
  { title: 'Optimise', text: 'Weekly tweaks and clear reporting on bookings and revenue.' },
];

export const venueTypes: string[] = [
  'Restaurants',
  'Cocktail bars',
  'Cafés',
  'Pizzerias',
  'Rooftop terraces',
  'Brunch spots',
  'Wine bars',
  'Gastropubs',
  'Burger joints',
  'Bakeries',
];

export const values: Step[] = [
  {
    title: 'Hospitality first',
    text: 'We speak service, covers and table turns — not just clicks and impressions.',
  },
  {
    title: 'Local by design',
    text: 'Every campaign targets the diners who can actually walk through your door tonight.',
  },
  {
    title: 'Results you can count',
    text: 'We report on bookings and revenue, so you always know what your spend is doing.',
  },
];
