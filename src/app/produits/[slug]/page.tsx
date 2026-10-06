import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { formatPrice, getProduct, productCategories, products } from "@/data/catalog";
import { productSchema } from "@/lib/schema";
import { waMessages } from "@/lib/whatsapp";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProductCard } from "@/components/ProductCard";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props) {
  const p = getProduct(params.slug);
  if (!p) return {};
  return buildMetadata({ title: p.name, description: `${p.short}. Préparé par Hadj Ismael Bohlaly, commande sur WhatsApp.`, path: `/produits/${p.slug}`, image: p.images[0] });
}

const availabilityLabel = { "en-stock": "Disponible", "sur-commande": "Sur commande", epuise: "Momentanément épuisé" };

export default function ProductPage({ params }: Props) {
  const p = getProduct(params.slug);
  if (!p) notFound();
  const cat = productCategories.find((c) => c.id === p.category)!;
  const similar = products.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={productSchema(p)} />
      <div className="bg-ebene px-5 py-4">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ name: "Produits", path: "/produits" }, { name: p.name, path: `/produits/${p.slug}` }]} />
        </div>
      </div>
      <article className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-2 md:py-16">
        <div className="space-y-4">
          {p.images.map((src, i) => (
            <div key={src} className="relative aspect-[4/5] overflow-hidden bg-sable">
              <Image src={src} alt={i === 0 ? p.imageAlt : `${p.imageAlt}, vue ${i + 1}`} fill priority={i === 0} sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>
        <div className="md:sticky md:top-24 md:self-start">
          <Link href={`/produits#${cat.id}`} className="text-sm text-bordeaux">{cat.name}</Link>
          <h1 className="mt-2 font-display text-4xl leading-tight text-encre md:text-5xl">{p.name}</h1>
          <p className="mt-4 text-lg text-bordeaux">{formatPrice(p)}</p>
          <p className="mt-1 text-sm text-encre/70">{availabilityLabel[p.availability]}</p>
          <WhatsAppButton message={waMessages.product(p.name)} source={`produit-page:${p.slug}`} label="Commander / Demander des informations" className="mt-6 w-full px-8 py-4 text-base sm:w-auto" />
          <div className="prose-site mt-8">
            <h2>Description</h2>
            <p>{p.description}</p>
            <h2>Utilisation</h2>
            <p>{p.usage}</p>
            {p.important && (
              <>
                <h2>Informations importantes</h2>
                <p>{p.important}</p>
              </>
            )}
            <p>
              Envie de savoir dans quel rituel l'utiliser ? Consultez les <Link href="/solutions">rituels et solutions</Link>.
            </p>
          </div>
        </div>
      </article>
      {similar.length > 0 && (
        <section className="bg-sable">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="font-display text-3xl text-bordeaux md:text-4xl">Dans la même catégorie</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((s) => <ProductCard key={s.slug} product={s} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
