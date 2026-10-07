import type { NavItem } from "@/types";

export const site = {
  name: "Hadj Ismael Bohlaly",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.lesdjinnssolutions.com").replace(/\/$/, ""),
  locale: "fr_FR",
    whatsapp: "22604469454",
  whatsappDisplay: "+226 04 46 94 54",
  email: "hadjismaelbolaly@gmail.com",
  defaultOg: "/images/og-default.jpg",
  portrait: "/images/hadj/hadj-ismael-portrait.webp",
  portraitTraditionnel: "/images/hadj/hadj-ismael-tenue-traditionnelle.webp",
  // Ajoutez ici les profils officiels (Facebook, TikTok, YouTube…) : ils renforcent l'identité sur Google
  socials: [] as { label: string; url: string }[],
};

export const nav: NavItem[] = [
  { label: "Djinns", href: "/djinns" },
  { label: "Protection", href: "/protection-spirituelle" },
  { label: "Rituels", href: "/solutions" },
  { label: "Produits", href: "/produits" },
  { label: "Accompagnement", href: "/accompagnement" },
  { label: "Blog", href: "/blog" },
  { label: "À propos", href: "/a-propos" },
];

export function absoluteUrl(path = "/") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
