import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { getFamily, getRitual, products, rituals } from "@/data/catalog";
import { waMessages } from "@/lib/whatsapp";
import { PageHero } from "@/components/PageHero";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { RitualCard } from "@/components/RitualCard";
import { ProductCard } from "@/components/ProductCard";
import { Disclaimer } from "@/components/Disclaimer";
import { FamilyIcon } from "@/components/FamilyIcon";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return rituals.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: Props) {
  const r = getRitual(params.slug);
  if (!r) return {};
  return buildMetadata({
    title: `${r.name} : rituel de protection spirituelle`,
    description: `${r.description} Rituel proposé par Hadj Ismael Bohlaly, guide musulman et traditionaliste.`.slice(0, 160),
    path: `/solutions/${r.slug}`,
  });
}

const familyProducts: Record<string, string[]> = {
  bains: ["savons", "huiles-parfums"],
  huiles: ["huiles-parfums"],
  traditionnels: ["bijoux", "huiles-parfums"],
  domicile: ["huiles-parfums"],
  recitations: ["bijoux"],
  accompagnement: ["bijoux", "huiles-parfums"],
};

export default function RitualPage({ params }: Props) {
  const r = getRitual(params.slug);
  if (!r) notFound();
  const family = getFamily(r.family)!;
  const siblings = rituals.filter((x) => x.family === r.family && x.slug !== r.slug).slice(0, 4);
  const linked = products.filter((p) => familyProducts[r.family]?.includes(p.category) && p.featured).slice(0, 3);

  return (
    <>
      <PageHero
        title={r.name}
        intro={r.description}
        crumbs={[
          { name: "Rituels et solutions", path: "/solutions" },
          { name: r.name, path: `/solutions/${r.slug}` },
        ]}
      >
        <WhatsAppButton message={waMessages.ritual(r.name)} source={`rituel-page:${r.slug}`} label="En parler avec Hadj Ismael" className="px-8 py-4 text-base" />
      </PageHero>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.3fr_0.7fr]">
        <div className="prose-site">
          <h2>Comment se déroule ce rituel ?</h2>
          <p>
            Chaque rituel est adapté à la personne. Avant de vous proposer « {r.name} », Hadj Ismael échange avec vous
            sur WhatsApp pour comprendre votre situation : ce que vous ressentez, depuis quand, et ce que vous avez déjà essayé.
          </p>
          <p>
            Il vous explique ensuite le déroulement, le moment le plus favorable, les récitations qui l'accompagnent
            et, si besoin, les produits à utiliser. Le rituel peut se faire en personne ou à distance.
          </p>
          <h2>Pour qui ?</h2>
          <p>
            Ce rituel fait partie de la famille <Link href={`/solutions#${family.id}`}>{family.name.toLowerCase()}</Link>.
            Il s'adresse à toute personne qui souhaite renforcer sa <Link href="/protection-spirituelle">protection spirituelle</Link>,
            dans le respect de la foi musulmane et des savoirs traditionnels.
          </p>
          <h2>Une démarche responsable</h2>
          <p>
            Aucun rituel ne promet un résultat garanti. La protection s'inscrit dans la durée, avec la prière, le rappel
            d'Allah et une hygiène de vie équilibrée. Pour comprendre le contexte, lisez aussi
            <Link href="/blog/qu-est-ce-qu-un-djinn"> qu'est-ce qu'un djinn ?</Link>
          </p>
        </div>
        <aside className="space-y-6">
          <div className="rounded-sm bg-ebene p-6 text-sable">
            <FamilyIcon icon={family.icon} className="h-7 w-7 text-or" />
            <p className="mt-3 font-display text-2xl text-or-clair">Une question sur ce rituel ?</p>
            <p className="mt-2 text-sm leading-relaxed text-sable/80">Le message est déjà écrit, il suffit de l'envoyer.</p>
            <WhatsAppButton message={waMessages.ritual(r.name)} source={`rituel-aside:${r.slug}`} label="Écrire sur WhatsApp" className="mt-5 w-full" />
          </div>
          <Disclaimer />
        </aside>
      </div>

      {siblings.length > 0 && (
        <section className="bg-sable">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="font-display text-3xl text-bordeaux md:text-4xl">Autres rituels : {family.name.toLowerCase()}</h2>
            <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {siblings.map((s) => <RitualCard key={s.slug} ritual={s} />)}
            </div>
          </div>
        </section>
      )}

      {linked.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-3xl text-bordeaux md:text-4xl">Produits associés</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {linked.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </section>
      )}
    </>
  );
}
