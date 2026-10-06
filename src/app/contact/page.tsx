import { Mail, MessageCircle } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { waMessages } from "@/lib/whatsapp";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Disclaimer } from "@/components/Disclaimer";

export const metadata = buildMetadata({
  title: "Contacter Hadj Ismael Bohlaly",
  description: "Contactez Hadj Ismael Bohlaly sur WhatsApp ou par e-mail pour un accompagnement spirituel, un rituel de protection ou une commande de produit.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contacter Hadj Ismael" intro="Le plus simple et le plus rapide : WhatsApp. Vous pouvez aussi utiliser le formulaire ou écrire par e-mail." crumbs={[{ name: "Contact", path: "/contact" }]} />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-6">
          <div className="rounded-sm bg-ebene p-7 text-sable">
            <MessageCircle className="h-7 w-7 text-or" aria-hidden="true" />
            <h2 className="mt-3 font-display text-3xl text-or-clair">WhatsApp</h2>
            <p className="mt-1">{site.whatsappDisplay}</p>
            <WhatsAppButton message={waMessages.general} source="contact" label="Ouvrir WhatsApp" className="mt-5 w-full" />
          </div>
          <div className="rounded-sm border border-or/40 p-7">
            <Mail className="h-6 w-6 text-bordeaux" aria-hidden="true" />
            <h2 className="mt-3 font-display text-2xl">E-mail</h2>
            <a href={`mailto:${site.email}`} className="mt-1 block break-all text-bordeaux underline decoration-or underline-offset-4">{site.email}</a>
          </div>
          <Disclaimer />
        </div>
        <div>
          <h2 className="font-display text-3xl text-bordeaux">Formulaire de contact</h2>
          <div className="mt-6"><ContactForm /></div>
        </div>
      </div>
    </>
  );
}
