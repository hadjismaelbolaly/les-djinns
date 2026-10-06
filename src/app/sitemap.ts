import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { getAll } from "@/lib/content";
import { products, rituals } from "@/data/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const main = ["/", "/djinns", "/protection-spirituelle", "/solutions", "/produits", "/accompagnement", "/a-propos", "/faq", "/blog", "/contact"];
  return [
    ...main.map((p) => ({ url: absoluteUrl(p), lastModified: now, changeFrequency: "weekly" as const, priority: p === "/" ? 1 : 0.8 })),
    ...getAll("blog").map((a) => ({ url: absoluteUrl(`/blog/${a.slug}`), lastModified: new Date(a.updatedAt || a.date), priority: 0.7 })),
    ...getAll("djinns").map((a) => ({ url: absoluteUrl(`/djinns/${a.slug}`), lastModified: new Date(a.updatedAt || a.date), priority: 0.7 })),
    ...rituals.map((r) => ({ url: absoluteUrl(`/solutions/${r.slug}`), lastModified: now, priority: 0.6 })),
    ...products.map((p) => ({ url: absoluteUrl(`/produits/${p.slug}`), lastModified: now, priority: 0.6 })),
  ];
}
