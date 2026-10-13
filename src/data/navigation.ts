export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'Why Us', href: '/why-us/' },
  { label: 'Case Studies', href: '/case-studies/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const legalNav: NavItem[] = [{ label: 'Privacy Policy', href: '/privacy-policy/' }];

export const primaryCta: NavItem = { label: 'Get a free audit', href: '/contact/' };
