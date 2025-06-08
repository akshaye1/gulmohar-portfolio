import type { LucideIcon } from "lucide-react";
import type { NavItem, SocialLink } from "@/types";
import { Home, Film, User, Mail, Instagram, Youtube } from "lucide-react";

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/work", label: "Work", icon: Film },
  { href: "/about", label: "About", icon: User },
  { href: "/contact", label: "Contact", icon: Mail },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://www.instagram.com/gulmohar_production?igsh=MXEyMXgxN2U1dnk3dw==",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://youtube.com/@gulmoharproductions260?si=jFkco9h-XhRchDLK",
    label: "YouTube",
    icon: Youtube,
  },
];
