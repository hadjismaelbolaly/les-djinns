import { buildMetadata } from "@/lib/seo";
import { getAll } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { ArticleCard } from "@/components/ArticleCard";
import { CtaBand } from "@/components/CtaBand";

export const metadata = buildMetadata({
  title: "Blog sur les djinns et la protection spirituelle",
  description: "Articles de Hadj Ismael Bohlaly sur les djinns, l'islam, les traditions africaines, la roqya et la protection spirituelle de la personne et du foyer.",
  path: "/blog",
});

export default function BlogPage() {
  const articles = getAll("blog");
  return (
    <>
      <PageHero title="Blog sur les djinns et la protection spirituelle" intro="Des articles pour comprendre, se protéger et retrouver la sérénité, écrits par Hadj Ismael Bohlaly." crumbs={[{ name: "Blog", path: "/blog" }]} />
      <div className="mx-auto max-w-6xl px-5 py-16">
        {articles.length === 0 ? (
          <p>Les premiers articles arrivent bientôt.</p>
        ) : (
          <div className="grid gap-12 md:grid-cols-3">
            {articles.map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
        )}
      </div>
      <CtaBand source="blog-bandeau" />
    </>
  );
}
