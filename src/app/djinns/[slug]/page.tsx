import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { getAll, getOne, getRelated } from "@/lib/content";
import { ArticleView } from "@/components/ArticleView";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAll("djinns").map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props) {
  const a = getOne("djinns", params.slug);
  if (!a) return {};
  return buildMetadata({ title: a.seoTitle || a.title, description: a.description, path: `/djinns/${a.slug}`, image: a.ogImage || a.image, type: "article" });
}

export default function DjinnPage({ params }: Props) {
  const a = getOne("djinns", params.slug);
  if (!a) notFound();
  const path = `/djinns/${a.slug}`;
  return <ArticleView article={a} path={path} base="/djinns" related={getRelated("djinns", a)} crumbs={[{ name: "Djinns", path: "/djinns" }, { name: a.title, path }]} />;
}
