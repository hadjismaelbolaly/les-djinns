import Image from "next/image";
import Link from "next/link";
import type { Article, Crumb } from "@/types";
import { formatDate, renderMarkdown } from "@/lib/content";
import { articleSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { waMessages } from "@/lib/whatsapp";
import { Breadcrumbs } from "./Breadcrumbs";
import { JsonLd } from "./JsonLd";
import { WhatsAppButton } from "./WhatsAppButton";
import { ArticleCard } from "./ArticleCard";
import { Disclaimer } from "./Disclaimer";
import { Motif } from "./Motif";

export function ArticleView({ article, crumbs, path, related, base }: { article: Article; crumbs: Crumb[]; path: string; related: Article[]; base: string }) {
  return (
    <>
      <JsonLd data={articleSchema(article, path)} />
      <header className="bg-bordeaux text-ivoire">
        <div className="mx-auto max-w-4xl px-5 pb-12 pt-8">
          <Breadcrumbs items={crumbs} />
          <p className="mt-8 text-sm text-or-clair">{article.category}</p>
          <h1 className="mt-2 font-display text-4xl leading-[1.08] md:text-6xl">{article.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sable/90">{article.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-sable/80">
            <Image src={site.portrait} alt="" width={36} height={36} className="h-9 w-9 rounded-full object-cover" />
            <span>
              Par <Link href="/a-propos" className="underline decoration-or underline-offset-4">{article.author}</Link>, le {formatDate(article.date)}
              {article.updatedAt && `, mis à jour le ${formatDate(article.updatedAt)}`}. {article.readingTime} min de lecture.
            </span>
          </div>
        </div>
        <Motif />
      </header>
      <div className="mx-auto max-w-4xl px-5 py-12">
        <div className="relative aspect-[16/9] overflow-hidden bg-sable">
          <Image src={article.image} alt={article.imageAlt} fill priority sizes="(min-width: 896px) 860px, 100vw" className="object-cover" />
        </div>
        <div className="prose-site mx-auto mt-10" dangerouslySetInnerHTML={{ __html: renderMarkdown(article.content) }} />
        {article.tags.length > 0 && (
          <ul className="mx-auto mt-10 flex max-w-lecture flex-wrap gap-2" aria-label="Mots-clés">
            {article.tags.map((t) => (
              <li key={t} className="rounded-full border border-or/50 px-3 py-1 text-xs text-encre/80">{t}</li>
            ))}
          </ul>
        )}
        <div className="mx-auto mt-12 max-w-lecture rounded-sm bg-ebene p-7 text-sable">
          <p className="font-display text-2xl text-or-clair">Une question après cette lecture ?</p>
          <p className="mt-2 text-sm leading-relaxed text-sable/80">Hadj Ismael répond personnellement sur WhatsApp. Découvrez aussi les <Link href="/solutions" className="underline decoration-or">rituels</Link> et l'<Link href="/accompagnement" className="underline decoration-or">accompagnement</Link>.</p>
          <WhatsAppButton message={waMessages.article(article.title)} source={`article:${article.slug}`} label="Poser ma question" className="mt-5" />
        </div>
        <Disclaimer className="mx-auto mt-8 max-w-lecture" />
      </div>
      {related.length > 0 && (
        <section className="bg-sable">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="font-display text-3xl text-bordeaux md:text-4xl">Articles similaires</h2>
            <div className="mt-8 grid gap-10 md:grid-cols-3">
              {related.map((a) => <ArticleCard key={a.slug} article={a} base={base} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
