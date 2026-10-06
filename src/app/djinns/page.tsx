import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getAll } from "@/lib/content";
import { PageHero } from "@/components/PageHero";
import { ArticleCard } from "@/components/ArticleCard";
import { Disclaimer } from "@/components/Disclaimer";
import { CtaBand } from "@/components/CtaBand";

export const metadata = buildMetadata({
  title: "Les djinns : comprendre leur place dans la tradition islamique",
  description: "Qu'est-ce qu'un djinn ? Origine, nature, place dans le Coran et dans les traditions africaines, et moyens de protection. Le guide de Hadj Ismael Bohlaly.",
  path: "/djinns",
});

export default function DjinnsPage() {
  const pages = getAll("djinns");
  const articles = getAll("blog").filter((a) => a.category === "Djinns");
  return (
    <>
      <PageHero title="Comprendre les djinns" intro="Créatures invisibles mentionnées dans le Coran et présentes dans les traditions d'Afrique de l'Ouest, les djinns suscitent beaucoup de questions. Voici l'essentiel, expliqué simplement." crumbs={[{ name: "Djinns", path: "/djinns" }]} />
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="prose-site">
          <h2>Qu'est-ce qu'un djinn ?</h2>
          <p>
            Le mot vient de l'arabe <em>jinn</em>, qui évoque ce qui est caché. Selon le Coran, les djinns ont été créés
            d'un feu sans fumée, avant l'homme. Ils vivent dans un monde que nous ne voyons pas et disposent, comme nous,
            du libre arbitre. Pour une définition complète, lisez <Link href="/blog/qu-est-ce-qu-un-djinn">qu'est-ce qu'un djinn ?</Link>
          </p>
          <h2>Les djinns dans la tradition islamique</h2>
          <p>
            Une sourate entière, la sourate Al-Jinn, leur est consacrée. La tradition enseigne que certains sont croyants
            et d'autres non, et transmet des protections simples à pratiquer chaque jour. Voir <Link href="/djinns/djinns-dans-la-tradition-islamique">les djinns dans la tradition islamique</Link>.
          </p>
          <h2>Les djinns dans les traditions africaines</h2>
          <p>
            En Afrique de l'Ouest, cette croyance s'est mêlée aux savoirs sur les esprits de la brousse et des eaux,
            et aux pratiques des guérisseurs. Voir <Link href="/djinns/djinns-dans-les-traditions-africaines">les djinns dans les traditions africaines</Link>.
          </p>
          <h2>Djinns et protection spirituelle</h2>
          <p>
            La tradition invite moins à la peur qu'à la protection : prière, récitations, invocations du matin et du soir,
            protection du foyer. Découvrez la page <Link href="/protection-spirituelle">protection spirituelle</Link> et
            les <Link href="/solutions">rituels proposés par Hadj Ismael</Link>.
          </p>
          <h3>Questions fréquentes</h3>
          <p>Retrouvez les réponses aux questions les plus posées dans notre <Link href="/faq">FAQ</Link>.</p>
        </div>
        <Disclaimer className="mt-10 max-w-lecture" />
      </div>
      {(pages.length > 0 || articles.length > 0) && (
        <section className="bg-sable">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="font-display text-3xl text-bordeaux md:text-4xl">Pour approfondir</h2>
            <div className="mt-8 grid gap-10 md:grid-cols-3">
              {pages.map((a) => <ArticleCard key={a.slug} article={a} base="/djinns" />)}
              {articles.map((a) => <ArticleCard key={a.slug} article={a} />)}
            </div>
          </div>
        </section>
      )}
      <CtaBand source="djinns-bandeau" />
    </>
  );
}
