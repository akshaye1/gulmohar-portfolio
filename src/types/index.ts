import type { LucideIcon } from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  category: string;
  date: string;
  client?: string;
  services?: string[];
  longDescription?: string;
  dataAiHint?: string; // Keep this for potential future use, but it's not used with picsum
  showcaseVideos?: Array<{
    name: string;
    videoUrl: string;
    thumbnail: string;
    external?: boolean;
  }>;
}
