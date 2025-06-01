
import type { LucideIcon } from 'lucide-react';
import type { NavItem, SocialLink } from '@/types';
import { Home, Film, User, Mail, Linkedin, Instagram, Youtube } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/work', label: 'Work', icon: Film },
  { href: '/about', label: 'About', icon: User },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://www.linkedin.com/in/oomkar-panchal-432231218/', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://www.instagram.com/oomkar_panchal_/', label: 'Instagram', icon: Instagram },
  { href: 'https://www.youtube.com/channel/UCzY2_WB2TU9Ja93c09Xko9A', label: 'YouTube', icon: Youtube },
];

