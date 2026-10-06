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
  title: "Accompagnement spirituel – Hadj Ismael Bohlaly",
  description: "Accompagnement spirituel personnalisé, en personne ou à distance par WhatsApp : roqya, protection, rituels traditionnels et suivi avec Hadj Ismael Bohlaly.",
  path: "/accompagnement",
});

export default function AccompagnementPage() {
  const list = rituals.filter((r) => r.family === "accompagnement");
  return (
    <>
      <PageHero title="Un accompagnement spirituel personnalisé" intro="En personne ou à distance, Hadj Ismael vous écoute, comprend votre situation et vous guide vers les pratiques adaptées, avec discrétion." crumbs={[{ name: "Accompagnement", path: "/accompagnement" }]}>
        <WhatsAppButton message={waMessages.general} source="accompagnement-hero" label="Parler à Hadj Ismael" className="px-8 py-4 text-base" />
      </PageHero>
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="prose-site">
          <h2>À qui s'adresse l'accompagnement ?</h2>
          <p>
            À toute personne qui se pose des questions sur les djinns, qui traverse une période difficile, qui souhaite
            protéger son foyer, ses enfants ou un projet, ou simplement renforcer sa vie spirituelle.
          </p>
          <h2>Comment ça se passe ?</h2>
          <ol>
            <li>Vous écrivez à Hadj Ismael sur WhatsApp et décrivez votre situation.</li>
            <li>Il vous pose quelques questions pour bien la comprendre.</li>
            <li>Il vous propose les récitations, rituels ou produits adaptés, et vous suit si besoin.</li>
          </ol>
          <h2>Ce que l'accompagnement n'est pas</h2>
          <p>
            Hadj Ismael ne promet pas de résultat garanti et ne remplace pas un médecin. Il vous encourage à consulter
            un professionnel de santé lorsque des symptômes physiques ou psychologiques sont présents. Pour mieux le
            connaître, lisez <Link href="/a-propos">son parcours</Link>.
          </p>
        </div>
        <h2 className="mt-16 font-display text-3xl text-bordeaux md:text-4xl">Formules d'accompagnement</h2>
        <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((r) => <RitualCard key={r.slug} ritual={r} />)}
        </div>
        <Disclaimer className="mt-12" />
      </div>
      <CtaBand source="accompagnement-bandeau" />
    </>
  );
}
