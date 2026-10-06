import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { rituals } from "@/data/catalog";
import { PageHero } from "@/components/PageHero";
import { RitualCard } from "@/components/RitualCard";
import { Disclaimer } from "@/components/Disclaimer";
import { CtaBand } from "@/components/CtaBand";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { waMessages } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "Protection spirituelle contre les influences attribuées aux djinns",
  description: "Comment se protéger spirituellement : récitations, invocations du matin et du soir, protection de la maison, bains de purification et savoirs traditionnels.",
  path: "/protection-spirituelle",
});

const picks = [
  "ayat-al-kursi-de-protection",
  "les-trois-sourates-protectrices",
  "invocations-du-matin",
  "lecture-de-la-sourate-al-baqara-dans-la-maison",
  "bain-au-sidr-feuilles-de-jujubier",
  "protection-ancestrale-de-la-famille",
];

export default function ProtectionPage() {
  const selected = picks.map((s) => rituals.find((r) => r.slug === s)).filter((r): r is NonNullable<typeof r> => Boolean(r));
  return (
    <>
      <PageHero title="Protection spirituelle" intro="Se protéger, protéger sa famille et son foyer : la tradition islamique et les savoirs africains transmettent des pratiques simples, à vivre au quotidien." crumbs={[{ name: "Protection spirituelle", path: "/protection-spirituelle" }]}>
        <WhatsAppButton message={waMessages.general} source="protection-hero" label="Demander conseil à Hadj Ismael" />
      </PageHero>
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="prose-site">
          <h2>Comment se protéger spirituellement ?</h2>
          <p>
            La première protection, selon la tradition, est le rappel d'Allah : la prière accomplie à l'heure, la
            récitation du Coran et les invocations. Viennent ensuite des pratiques plus ciblées, pour la personne,
            la maison ou un moment particulier de la vie.
          </p>
          <h2>Les récitations de protection</h2>
          <p>
            L'Ayat al-Kursi avant de dormir, les trois dernières sourates du Coran matin et soir, les deux derniers
            versets de la sourate Al-Baqara : ces récitations sont les plus transmises. Retrouvez-les dans les
            <Link href="/solutions#recitations"> récitations et invocations</Link>.
          </p>
          <h2>Protection spirituelle de la maison</h2>
          <p>
            Lire la sourate Al-Baqara chez soi, purifier les pièces au bakhour, protéger le seuil : voir notre article
            <Link href="/blog/proteger-sa-maison-spirituellement"> comment protéger sa maison spirituellement</Link>.
          </p>
          <h2>L'apport des savoirs traditionnels</h2>
          <p>
            Plantes, racines, bains et fumigations : les savoirs ancestraux d'Afrique de l'Ouest complètent les
            récitations. Hadj Ismael, musulman et traditionaliste, les associe avec respect. Voir les
            <Link href="/solutions#traditionnels"> savoirs traditionnels</Link>.
          </p>
        </div>
        <h2 className="mt-16 font-display text-3xl text-bordeaux md:text-4xl">Pratiques de protection les plus demandées</h2>
        <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {selected.map((r) => <RitualCard key={r.slug} ritual={r} />)}
        </div>
        <p className="mt-10">
          <Link href="/solutions" className="text-bordeaux underline decoration-or underline-offset-4">Voir les {rituals.length} rituels</Link>
        </p>
        <Disclaimer className="mt-10" />
      </div>
      <CtaBand source="protection-bandeau" />
    </>
  );
}
