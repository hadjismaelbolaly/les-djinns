import type { Metadata } from "next";
import type { SeoInput } from "@/types";
import { absoluteUrl, site } from "./site";

export function buildMetadata({ title, description, path, image, absoluteTitle, type = "website" }: SeoInput): Metadata {
  const img = image || site.defaultOg;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: site.name,
      locale: site.locale,
      type,
      images: [{ url: absoluteUrl(img), width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [absoluteUrl(img)] },
  };
}
