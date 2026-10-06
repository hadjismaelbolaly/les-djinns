import { buildMetadata } from "@/lib/seo";
import { families, rituals } from "@/data/catalog";
import { PageHero } from "@/components/PageHero";
import { RitualCard } from "@/components/RitualCard";
import { FamilyIcon } from "@/components/FamilyIcon";
import { Disclaimer } from "@/components/Disclaimer";
import { CtaBand } from "@/components/CtaBand";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { waMessages } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "Rituels de protection spirituelle et solutions contre les djinns",
  description:
    "50 rituels de protection : roqya, récitations, protection de la maison, bains au sidr, huiles récitées et savoirs traditionnels africains, avec Hadj Ismael Bohlaly.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        title="Rituels et solutions de protection spirituelle"
        intro="Récitations du Coran, protection du foyer, bains de purification, huiles récitées et savoirs ancestraux d'Afrique de l'Ouest : chaque pratique est choisie avec vous, selon votre situation."
        crumbs={[{ name: "Rituels et solutions", path: "/solutions" }]}
      >
        <nav aria-label="Familles de rituels" className="flex flex-wrap gap-2">
          {families.map((f) => (
            <a key={f.id} href={`#${f.id}`} className="inline-flex items-center gap-2 rounded-full border border-or/50 px-4 py-2 text-sm text-sable hover:bg-or hover:text-ebene">
              <FamilyIcon icon={f.icon} className="h-4 w-4" /> {f.name}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="mx-auto max-w-6xl px-5">
        {families.map((f, i) => (
          <section key={f.id} id={f.id} className={`scroll-mt-24 py-16 ${i > 0 ? "border-t border-or/30" : ""}`}>
            <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
              <div>
                <FamilyIcon icon={f.icon} className="h-8 w-8 text-bordeaux" />
                <h2 className="mt-4 font-display text-4xl leading-tight text-bordeaux">{f.name}</h2>
                <p className="mt-3 leading-relaxed text-encre/80">{f.description}</p>
              </div>
              <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
                {rituals.filter((r) => r.family === f.id).map((r) => (
                  <RitualCard key={r.slug} ritual={r} />
                ))}
              </div>
            </div>
          </section>
        ))}
        <div className="pb-16">
          <Disclaimer />
          <div className="mt-8">
            <WhatsAppButton message={waMessages.general} source="solutions-bas" label="Je ne sais pas quel rituel choisir" variant="clair" />
          </div>
        </div>
      </div>
      <CtaBand source="solutions-bandeau" />
    </>
  );
}
