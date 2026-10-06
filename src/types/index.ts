export type ProductCategory = "bijoux" | "huiles-parfums" | "savons";

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  images: string[];
  imageAlt: string;
  short: string;
  description: string;
  usage: string;
  important?: string;
  /** Prix numérique en FCFA, ou absent si « sur demande » */
  price?: number;
  currency?: string;
  availability: "en-stock" | "sur-commande" | "epuise";
  featured?: boolean;
}

export type RitualFamilyId =
  | "recitations"
  | "domicile"
  | "bains"
  | "huiles"
  | "traditionnels"
  | "accompagnement";

export interface RitualFamily {
  id: RitualFamilyId;
  name: string;
  description: string;
  icon: "book" | "home" | "waves" | "droplet" | "leaf" | "hands";
}

export interface Ritual {
  slug: string;
  name: string;
  family: RitualFamilyId;
  description: string;
}

export interface Article {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  date: string;
  updatedAt?: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  imageAlt: string;
  ogImage?: string;
  content: string;
  readingTime: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  location?: string;
  text: string;
  date?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SeoInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  absoluteTitle?: boolean;
  type?: "website" | "article";
}

export interface Crumb {
  name: string;
  path: string;
}
