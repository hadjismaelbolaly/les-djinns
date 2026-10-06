import type { Article, Crumb, FaqItem, Product } from "@/types";
import { absoluteUrl, site } from "./site";

export const personSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": absoluteUrl("/#person"),
  name: site.name,
  jobTitle: "Guide spirituel",
  description:
    "Guide spirituel musulman et traditionaliste, accompagnement autour des djinns et de la protection spirituelle.",
  image: absoluteUrl(site.portrait),
  email: `mailto:${site.email}`,
  telephone: `+${site.whatsapp}`,
  url: absoluteUrl("/a-propos"),
  sameAs: site.socials.map((s) => s.url),
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  name: site.name,
  url: site.url,
  inLanguage: "fr",
  publisher: { "@id": absoluteUrl("/#person") },
});

export const breadcrumbSchema = (items: Crumb[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: absoluteUrl(c.path),
  })),
});

export const articleSchema = (a: Article, path: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: a.title,
  description: a.description,
  image: absoluteUrl(a.ogImage || a.image),
  datePublished: a.date,
  dateModified: a.updatedAt || a.date,
  author: { "@type": "Person", name: a.author, url: absoluteUrl("/a-propos") },
  publisher: { "@id": absoluteUrl("/#person") },
  mainEntityOfPage: absoluteUrl(path),
  inLanguage: "fr",
});

export const productSchema = (p: Product) => {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.short,
    image: p.images.map((i) => absoluteUrl(i)),
    brand: { "@type": "Brand", name: site.name },
  };
  // Offre uniquement si un prix réel est affiché sur la page
  if (typeof p.price === "number") {
    base.offers = {
      "@type": "Offer",
      price: p.price,
      priceCurrency: p.currency || "XOF",
      availability:
        p.availability === "epuise" ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
      url: absoluteUrl(`/produits/${p.slug}`),
    };
  }
  return base;
};

export const faqSchema = (items: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});
