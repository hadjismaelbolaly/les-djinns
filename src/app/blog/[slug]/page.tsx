import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { getAll, getOne, getRelated } from "@/lib/content";
import { ArticleView } from "@/components/ArticleView";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAll("blog").map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props) {
  const a = getOne("blog", params.slug);
  if (!a) return {};
  return buildMetadata({ title: a.seoTitle || a.title, description: a.description, path: `/blog/${a.slug}`, image: a.ogImage || a.image, type: "article" });
}

export default function BlogArticle({ params }: Props) {
  const a = getOne("blog", params.slug);
  if (!a) notFound();
  const path = `/blog/${a.slug}`;
  return <ArticleView article={a} path={path} base="/blog" related={getRelated("blog", a)} crumbs={[{ name: "Blog", path: "/blog" }, { name: a.title, path }]} />;
}
