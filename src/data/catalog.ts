import type { Product, ProductCategory, Ritual, RitualFamily } from "@/types";
import produits from "@content/produits.json";
import rituels from "@content/rituels.json";

export const products = produits.items as Product[];
export const rituals = rituels.items as Ritual[];

export const productCategories: { id: ProductCategory; name: string; description: string }[] = [
  { id: "bijoux", name: "Bagues et bracelets", description: "Bijoux gravés et pierres, préparés et récités sur demande." },
  { id: "huiles-parfums", name: "Huiles et parfums", description: "Huiles récitées, macérations de plantes et eaux parfumées." },
  { id: "savons", name: "Savons", description: "Savon noir traditionnel pour les ablutions et les bains de purification." },
];

export const families: RitualFamily[] = [
  { id: "recitations", name: "Récitations et invocations", icon: "book", description: "Les versets et invocations de protection transmis par la tradition islamique." },
  { id: "domicile", name: "Protection du domicile", icon: "home", description: "Purifier et protéger la maison, le commerce et les lieux de vie." },
  { id: "bains", name: "Bains et purifications", icon: "waves", description: "Bains au sidr, eau récitée, savon noir et plantes de purification." },
  { id: "huiles", name: "Huiles et produits récités", icon: "droplet", description: "Huile d'olive, nigelle, miel, parfums et sels récités." },
  { id: "traditionnels", name: "Savoirs traditionnels", icon: "leaf", description: "Racines, plantes et rituels hérités des anciens d'Afrique de l'Ouest." },
  { id: "accompagnement", name: "Accompagnement personnalisé", icon: "hands", description: "Séances, suivi à distance et conseils adaptés à votre situation." },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getRitual = (slug: string) => rituals.find((r) => r.slug === slug);
export const getFamily = (id: string) => families.find((f) => f.id === id);
export const formatPrice = (p: Product) =>
  typeof p.price === "number" ? `${p.price.toLocaleString("fr-FR")} ${p.currency || "FCFA"}` : "Prix sur demande";
