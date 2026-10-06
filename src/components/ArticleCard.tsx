import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/types";
import { formatDate } from "@/lib/content";

export function ArticleCard({ article, base = "/blog" }: { article: Article; base?: string }) {
  return (
    <article className="group">
      <Link href={`${base}/${article.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-sable">
          <Image src={article.image} alt={article.imageAlt} fill sizes="(min-width: 768px) 33vw, 90vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        </div>
        <p className="mt-4 text-xs text-bordeaux">
          {article.category}, {article.readingTime} min de lecture
        </p>
        <h3 className="mt-1 font-display text-2xl leading-tight text-encre group-hover:text-bordeaux">{article.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-encre/75">{article.description}</p>
        <p className="mt-2 text-xs text-encre/60">{formatDate(article.date)}</p>
      </Link>
    </article>
  );
}
