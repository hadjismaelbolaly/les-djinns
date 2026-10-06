import { buildMetadata } from "@/lib/seo";
import { productCategories, products } from "@/data/catalog";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { CtaBand } from "@/components/CtaBand";

export const metadata = buildMetadata({
  title: "Produits spirituels : bagues, huiles récitées et savon noir",
  description:
    "Bagues gravées, bracelets, huiles récitées, eaux parfumées et savon noir traditionnel, préparés par Hadj Ismael Bohlaly. Commande et informations sur WhatsApp.",
  path: "/produits",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Produits spirituels"
        intro="Bijoux gravés, huiles récitées, eaux parfumées et savons traditionnels. Chaque produit peut être préparé et récité par Hadj Ismael. Les commandes se font simplement sur WhatsApp."
        crumbs={[{ name: "Produits", path: "/produits" }]}
      >
        <nav aria-label="Catégories de produits" className="flex flex-wrap gap-2">
          {productCategories.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="rounded-full border border-or/50 px-4 py-2 text-sm text-sable hover:bg-or hover:text-ebene">
              {c.name}
            </a>
          ))}
        </nav>
      </PageHero>
      <div className="mx-auto max-w-6xl px-5">
        {productCategories.map((c, i) => (
          <section key={c.id} id={c.id} className={`scroll-mt-24 py-16 ${i > 0 ? "border-t border-or/30" : ""}`}>
            <h2 className="font-display text-4xl text-bordeaux">{c.name}</h2>
            <p className="mt-2 text-encre/75">{c.description}</p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {products.filter((p) => p.category === c.id).map((p, j) => (
                <ProductCard key={p.slug} product={p} priority={i === 0 && j < 2} />
              ))}
            </div>
          </section>
        ))}
      </div>
      <CtaBand title="Un produit vous intéresse ?" text="Hadj Ismael vous indique le prix, la disponibilité et la livraison, et vous conseille sur l'utilisation." source="produits-bandeau" />
    </>
  );
}
