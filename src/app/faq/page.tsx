import { buildMetadata } from "@/lib/seo";
import { faq } from "@/data/faq";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Disclaimer } from "@/components/Disclaimer";
import { CtaBand } from "@/components/CtaBand";

export const metadata = buildMetadata({
  title: "Questions fréquentes sur les djinns et la protection spirituelle",
  description: "Les réponses aux questions les plus posées à Hadj Ismael Bohlaly : djinns, protection spirituelle, déroulement de l'accompagnement, commande des produits.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(faq)} />
      <PageHero title="Questions fréquentes" intro="Les réponses aux questions que l'on pose le plus souvent à Hadj Ismael." crumbs={[{ name: "FAQ", path: "/faq" }]} />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <div className="divide-y divide-or/40 border-y border-or/40">
          {faq.map((f) => (
            <section key={f.question} className="py-7">
              <h2 className="font-display text-2xl text-encre">{f.question}</h2>
              <p className="mt-3 leading-relaxed text-encre/85">{f.answer}</p>
            </section>
          ))}
        </div>
        <Disclaimer className="mt-10" />
      </div>
      <CtaBand title="Votre question n'est pas dans la liste ?" source="faq-bandeau" />
    </>
  );
}
