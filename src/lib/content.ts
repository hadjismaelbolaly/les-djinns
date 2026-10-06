import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import type { Article } from "@/types";

export type Collection = "blog" | "djinns";

const root = path.join(process.cwd(), "content");
const REQUIRED = ["title", "description", "date", "category", "image"] as const;

function toISO(v: unknown): string {
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return String(v);
}

/** Lit et valide un fichier Markdown. Un article incomplet bloque la compilation avec un message clair. */
function parseFile(collection: Collection, file: string): Article {
  const raw = fs.readFileSync(path.join(root, collection, file), "utf8");
  const { data, content } = matter(raw);
  const missing = REQUIRED.filter((k) => !data[k]);
  if (missing.length) {
    throw new Error(`Article incomplet « ${collection}/${file} » : champ(s) manquant(s) ${missing.join(", ")}`);
  }
  const slug = (data.slug as string) || file.replace(/\.md$/, "");
  const words = content.split(/\s+/).filter(Boolean).length;
  return {
    slug,
    title: data.title,
    seoTitle: data.seoTitle || undefined,
    description: data.description,
    date: toISO(data.date),
    updatedAt: data.updatedAt ? toISO(data.updatedAt) : undefined,
    author: data.author || "Hadj Ismael Bohlaly",
    category: data.category,
    tags: Array.isArray(data.tags) ? data.tags : [],
    image: data.image,
    imageAlt: data.imageAlt || data.title,
    ogImage: data.ogImage || undefined,
    content,
    readingTime: Math.max(1, Math.round(words / 200)),
  };
}

export function getAll(collection: Collection): Article[] {
  const dir = path.join(root, collection);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parseFile(collection, f))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getOne(collection: Collection, slug: string): Article | undefined {
  return getAll(collection).find((a) => a.slug === slug);
}

export function getRelated(collection: Collection, current: Article, limit = 3): Article[] {
  return getAll(collection)
    .filter((a) => a.slug !== current.slug)
    .map((a) => ({
      a,
      score: (a.category === current.category ? 2 : 0) + a.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .sort((x, y) => y.score - x.score)
    .slice(0, limit)
    .map((x) => x.a);
}

export function renderMarkdown(md: string): string {
  return marked.parse(md, { async: false }) as string;
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}
