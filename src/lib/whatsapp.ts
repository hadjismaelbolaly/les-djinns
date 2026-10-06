import { site } from "./site";

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  general:
    "Bonjour Hadj Ismael, je viens de visiter votre site et je souhaiterais obtenir des informations sur votre accompagnement spirituel.",
  product: (name: string) =>
    `Bonjour Hadj Ismael, je souhaiterais avoir des informations concernant le produit ${name}.`,
  ritual: (name: string) =>
    `Bonjour Hadj Ismael, je souhaiterais en savoir plus sur le rituel « ${name} ».`,
  article: (title: string) =>
    `Bonjour Hadj Ismael, je viens de lire votre article « ${title} » et j'aimerais vous poser une question.`,
};
