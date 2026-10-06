import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";
import { formatPrice } from "@/data/catalog";
import { waMessages } from "@/lib/whatsapp";
import { WhatsAppButton } from "./WhatsAppButton";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <article className="group flex flex-col bg-ivoire">
      <Link href={`/produits/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden bg-sable">
        <Image
          src={product.images[0]}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          priority={priority}
        />
      </Link>
      <div className="flex flex-1 flex-col border-x border-b border-or/30 p-5">
        <h3 className="font-display text-2xl leading-tight text-encre">
          <Link href={`/produits/${product.slug}`} className="hover:text-bordeaux">{product.name}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-encre/80">{product.short}</p>
        <p className="mt-3 text-sm font-medium text-bordeaux">{formatPrice(product)}</p>
        <WhatsAppButton
          message={waMessages.product(product.name)}
          source={`produit-carte:${product.slug}`}
          label="Commander / Demander des informations"
          variant="clair"
          className="mt-4 w-full text-center"
        />
      </div>
    </article>
  );
}
