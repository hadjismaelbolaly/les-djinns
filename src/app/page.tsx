import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { waMessages } from "@/lib/whatsapp";
import { families, products, rituals } from "@/data/catalog";
import { faq } from "@/data/faq";
import { getAll } from "@/lib/content";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Reveal } from "@/components/Reveal";
import { Motif } from "@/components/Motif";
import { FamilyIcon } from "@/components/FamilyIcon";
import { ProductCard } from "@/components/ProductCard";
import { ArticleCard } from "@/components/ArticleCard";
import { Disclaimer } from "@/components/Disclaimer";
import { CtaBand } from "@/components/CtaBand";

export const metadata = buildMetadata({
  title: "Djinns et protection spirituelle | Hadj Ismael Bohlaly",
  absoluteTitle: true,
  description:
    "Découvrez les informations, conseils et pratiques spirituelles autour des djinns et de la protection spirituelle avec Hadj Ismael Bohlaly, guide musulman et traditionaliste.",
  path: "/",
});

const djinnLinks = [
  { title: "Comprendre les djinns", text: "Qui sont-ils, d'où viennent-ils, et pourquoi on en parle encore aujourd'hui.", href: "/djinns" },
  { title: "Les djinns dans la tradition islamique", text: "Ce que disent le Coran et la tradition prophétique.", href: "/djinns/djinns-dans-la-tradition-islamique" },
  { title: "Djinns et traditions africaines", text: "Esprits des lieux, guérisseurs et savoirs ancestraux d'Afrique de l'Ouest.", href: "/djinns/djinns-dans-les-traditions-africaines" },
  { title: "Protection spirituelle", text: "Les récitations et gestes pour se protéger, soi et son foyer.", href: "/protection-spirituelle" },
  { title: "Questions fréquentes", text: "Les réponses aux questions qu'on pose le plus souvent à Hadj Ismael.", href: "/faq" },
];

export default function HomePage() {
  const featured = products.filter((p) => p.featured).slice(0, 6);
  const articles = getAll("blog").slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ebene text-sable">
        <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true">
          <Image src={site.portraitTraditionnel} alt="" fill sizes="100vw" className="object-cover blur-sm" />
        </div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-[1.15fr_0.85fr] md:py-24">
          <div>
            <Reveal>
              <h1 className="font-display text-[2.6rem] font-medium leading-[1.02] text-ivoire sm:text-6xl lg:text-7xl">
                Comprendre les djinns.
                <span className="block text-or-clair">Renforcer sa protection spirituelle.</span>
                <span className="block">Retrouver la sérénité.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-sable/85 md:text-lg">
                Découvrez les enseignements, conseils et accompagnements spirituels proposés par Hadj Ismael Bohlaly,
                guide musulman et héritier des savoirs traditionnels africains.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton message={waMessages.general} source="hero" label="Parler à Hadj Ismael" className="px-8 py-4 text-base" />
                <Link href="/solutions" className="inline-flex items-center justify-center rounded-full border border-or/60 px-8 py-4 text-base text-or-clair transition-colors hover:bg-or hover:text-ebene">
                  Découvrir les solutions
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="mx-auto w-full max-w-sm">
            <div className="relative">
              <div className="absolute -inset-3 rounded-t-full border border-or/60" aria-hidden="true" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-full">
                <Image
                  src={site.portraitTraditionnel}
                  alt="Hadj Ismael Bohlaly en tenue traditionnelle"
                  fill
                  priority
                  sizes="(min-width: 768px) 380px, 85vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </Reveal>
        </div>
        <Motif />
      </section>

      {/* Présentation */}
      <section className="bg-ivoire">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="relative aspect-square overflow-hidden rounded-sm">
              <Image src={site.portrait} alt="Portrait de Hadj Ismael Bohlaly, souriant" fill sizes="(min-width: 768px) 45vw, 90vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl leading-tight text-bordeaux md:text-5xl">Hadj Ismael Bohlaly</h2>
            <p className="mt-2 font-display text-xl italic text-encre/80">Guide spirituel musulman et traditionaliste</p>
            <p className="mt-6 leading-relaxed">
              Musulman pratiquant et héritier des savoirs traditionnels d'Afrique de l'Ouest, Hadj Ismael accompagne
              les personnes qui cherchent protection, apaisement et clarté spirituelle. Son approche associe les
              récitations du Coran aux plantes, racines et rituels transmis par les anciens.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 text-sm">
              {[
                ["La foi", "Les récitations et invocations du Coran au cœur de chaque pratique."],
                ["La tradition", "Les savoirs ancestraux des guérisseurs d'Afrique de l'Ouest."],
                ["L'écoute", "Chaque situation est unique et reçoit une réponse personnelle."],
                ["La discrétion", "Ce que vous confiez reste entre vous et Hadj Ismael."],
              ].map(([t, d]) => (
                <div key={t} className="border-t border-or/50 pt-3">
                  <dt className="font-display text-xl text-encre">{t}</dt>
                  <dd className="mt-1 leading-relaxed text-encre/75">{d}</dd>
                </div>
              ))}
            </dl>
            <Link href="/a-propos" className="mt-8 inline-flex rounded-full border border-bordeaux px-6 py-3 text-sm text-bordeaux transition-colors hover:bg-bordeaux hover:text-ivoire">
              Découvrir Hadj Ismael
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Djinns */}
      <section className="bg-sable">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight text-bordeaux md:text-5xl">Comprendre le monde des djinns</h2>
            <p className="mt-5 leading-relaxed text-encre/85">
              Des explications claires, fidèles au Coran et aux traditions africaines, pour comprendre sans avoir peur.
            </p>
            <Link href="/djinns" className="mt-7 inline-flex rounded-full bg-bordeaux px-6 py-3 text-sm text-ivoire transition-colors hover:bg-bordeaux-vif">
              Explorer les djinns
            </Link>
          </Reveal>
          <ul className="divide-y divide-or/40 border-y border-or/40">
            {djinnLinks.map((d) => (
              <li key={d.href}>
                <Link href={d.href} className="group grid gap-1 py-5 md:grid-cols-[1fr_1.2fr] md:gap-6">
                  <span className="font-display text-2xl text-encre group-hover:text-bordeaux">{d.title}</span>
                  <span className="text-sm leading-relaxed text-encre/75">{d.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-ebene text-sable">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <h2 className="max-w-2xl font-display text-4xl leading-tight text-ivoire md:text-5xl">
              {rituals.length} rituels et pratiques de protection
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-sable/80">
              Des récitations du Coran aux bains de plantes, chaque pratique est choisie avec vous selon votre situation.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm bg-or/25 sm:grid-cols-2 lg:grid-cols-3">
            {families.map((f) => (
              <div key={f.id} className="flex flex-col bg-ebene p-7">
                <FamilyIcon icon={f.icon} className="h-7 w-7 text-or" />
                <h3 className="mt-5 font-display text-2xl text-or-clair">{f.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-sable/75">{f.description}</p>
                <Link href={`/solutions#${f.id}`} className="mt-5 text-sm text-ivoire underline decoration-or underline-offset-4 hover:text-or-clair">
                  Voir les {rituals.filter((r) => r.family === f.id).length} rituels
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/solutions" className="inline-flex rounded-full border border-or/60 px-6 py-3 text-sm text-or-clair hover:bg-or hover:text-ebene">
              Découvrir les solutions
            </Link>
            <WhatsAppButton message={waMessages.general} source="accueil-solutions" label="Demander conseil" />
          </div>
        </div>
      </section>

      {/* Produits */}
      <section className="bg-ivoire">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-display text-4xl leading-tight text-bordeaux md:text-5xl">Produits spirituels</h2>
            <Link href="/produits" className="text-sm text-bordeaux underline decoration-or underline-offset-4">
              Voir les {products.length} produits
            </Link>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Déroulement */}
      <section className="bg-bordeaux text-ivoire">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-4xl md:text-5xl">Comment se passe un accompagnement</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              ["Vous écrivez sur WhatsApp", "Un message suffit. Expliquez votre situation avec vos mots, en toute discrétion."],
              ["Hadj Ismael vous répond", "Il vous pose quelques questions pour bien comprendre ce que vous vivez."],
              ["Vous recevez vos pratiques", "Récitations, rituels ou produits : il vous propose ce qui est adapté, et vous suit si besoin."],
            ].map(([t, d], i) => (
              <li key={t}>
                <span className="font-display text-5xl text-or-clair">{i + 1}</span>
                <h3 className="mt-3 font-display text-2xl">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sable/85">{d}</p>
              </li>
            ))}
          </ol>
          <WhatsAppButton message={waMessages.general} source="accueil-deroulement" label="Commencer sur WhatsApp" className="mt-12" />
        </div>
      </section>

      {/* Blog */}
      {articles.length > 0 && (
        <section className="bg-ivoire">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 className="font-display text-4xl leading-tight text-bordeaux md:text-5xl">Derniers articles</h2>
              <Link href="/blog" className="text-sm text-bordeaux underline decoration-or underline-offset-4">Tous les articles</Link>
            </div>
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              {articles.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ courte */}
      <section className="bg-sable">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <h2 className="font-display text-4xl text-bordeaux md:text-5xl">Questions fréquentes</h2>
          <div className="mt-8 divide-y divide-or/40 border-y border-or/40">
            {faq.slice(0, 4).map((f) => (
              <details key={f.question} className="group py-5">
                <summary className="cursor-pointer list-none font-display text-xl text-encre marker:hidden">
                  {f.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-encre/80">{f.answer}</p>
              </details>
            ))}
          </div>
          <Link href="/faq" className="mt-6 inline-block text-sm text-bordeaux underline decoration-or underline-offset-4">Toutes les questions</Link>
          <Disclaimer className="mt-10" />
        </div>
      </section>

      <CtaBand source="accueil-bas" />
    </>
  );
}
