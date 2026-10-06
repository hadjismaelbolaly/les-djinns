import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { waMessages } from "@/lib/whatsapp";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Motif } from "@/components/Motif";
import { CtaBand } from "@/components/CtaBand";

export const metadata = buildMetadata({
  title: "À propos de Hadj Ismael Bohlaly, guide spirituel musulman et traditionaliste",
  description: "Qui est Hadj Ismael Bohlaly ? Musulman pratiquant et héritier des savoirs traditionnels d'Afrique de l'Ouest, il accompagne autour des djinns et de la protection spirituelle.",
  path: "/a-propos",
  image: site.portraitTraditionnel,
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-ebene text-sable">
        <div className="mx-auto max-w-6xl px-5 pt-6">
          <Breadcrumbs items={[{ name: "À propos", path: "/a-propos" }]} />
        </div>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-2 md:py-20">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-t-full border border-or/60" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full">
              <Image src={site.portraitTraditionnel} alt="Hadj Ismael Bohlaly en tenue traditionnelle d'Afrique de l'Ouest" fill priority sizes="(min-width: 768px) 440px, 90vw" className="object-cover object-top" />
            </div>
          </div>
          <div>
            <h1 className="font-display text-5xl leading-[1.05] text-ivoire md:text-6xl">Hadj Ismael Bohlaly</h1>
            <p className="mt-3 font-display text-2xl italic text-or-clair">Guide spirituel musulman et traditionaliste</p>
            <blockquote className="mt-8 border-l-2 border-or pl-5 font-display text-2xl leading-snug text-sable">
              « La foi et la tradition ne s'opposent pas. Elles se répondent, comme deux mains qui protègent. »
            </blockquote>
            <WhatsAppButton message={waMessages.general} source="a-propos-hero" label="Parler à Hadj Ismael" className="mt-8" />
          </div>
        </div>
        <Motif />
      </section>
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_0.7fr]">
          <div className="prose-site">
            <h2>Un double héritage</h2>
            <p>
              Musulman pratiquant, Hadj Ismael Bohlaly a accompli le pèlerinage à La Mecque, d'où son titre de Hadj.
              Il est aussi l'héritier des savoirs traditionnels d'Afrique de l'Ouest, transmis de génération en
              génération : la connaissance des plantes, des racines, des bains et des rituels de protection.
            </p>
            <h2>Son approche</h2>
            <p>
              Son accompagnement associe les récitations du Coran, les invocations transmises par la tradition
              prophétique et les pratiques ancestrales. Il écoute d'abord, puis propose ce qui correspond à la
              situation de chacun. Découvrez <Link href="/accompagnement">comment se passe un accompagnement</Link>.
            </p>
            <h2>Ses valeurs</h2>
            <ul>
              <li><strong>La foi</strong> : chaque pratique s'inscrit dans le rappel d'Allah.</li>
              <li><strong>La tradition</strong> : le respect des savoirs transmis par les anciens.</li>
              <li><strong>L'écoute</strong> : chaque personne reçoit une réponse personnelle.</li>
              <li><strong>La discrétion</strong> : ce qui est confié reste confidentiel.</li>
              <li><strong>La responsabilité</strong> : aucune promesse de résultat garanti, et le conseil de consulter un médecin lorsque c'est nécessaire.</li>
            </ul>
            <h2>Son expérience</h2>
            <p>
              Depuis de nombreuses années, Hadj Ismael accompagne des personnes en Afrique et dans le monde entier,
              en personne ou à distance. {/* À compléter : nombre d'années, pays, parcours de transmission. */}
            </p>
          </div>
          <aside>
            <div className="relative aspect-square overflow-hidden">
              <Image src={site.portrait} alt="Hadj Ismael Bohlaly souriant" fill sizes="(min-width: 768px) 30vw, 90vw" className="object-cover" />
            </div>
            <ul className="mt-6 space-y-2 text-sm">
              <li><Link href="/solutions" className="text-bordeaux underline decoration-or underline-offset-4">Ses rituels de protection</Link></li>
              <li><Link href="/produits" className="text-bordeaux underline decoration-or underline-offset-4">Ses produits spirituels</Link></li>
              <li><Link href="/blog" className="text-bordeaux underline decoration-or underline-offset-4">Ses articles</Link></li>
            </ul>
          </aside>
        </div>
      </div>
      <CtaBand source="a-propos-bandeau" />
    </>
  );
}
