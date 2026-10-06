import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";

export const metadata = buildMetadata({ title: "Politique de confidentialité", description: "Comment le site de Hadj Ismael Bohlaly traite vos données : WhatsApp, formulaire de contact et mesure d'audience.", path: "/confidentialite" });

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Politique de confidentialité" crumbs={[{ name: "Confidentialité", path: "/confidentialite" }]} />
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="prose-site">
          <h2>Données collectées</h2>
          <p>Ce site n'enregistre aucune donnée personnelle dans une base de données. Le formulaire de contact prépare un message que vous envoyez vous-même depuis WhatsApp.</p>
          <h2>WhatsApp</h2>
          <p>Les échanges sur WhatsApp sont soumis à la politique de confidentialité de WhatsApp. Ce que vous confiez à Hadj Ismael reste confidentiel et n'est jamais partagé.</p>
          <h2>Mesure d'audience</h2>
          <p>Le site peut utiliser Google Analytics pour compter les visites et les clics, avec anonymisation de l'adresse IP. Ces statistiques servent uniquement à améliorer le site.</p>
          <h2>Vos droits</h2>
          <p>Pour toute question ou demande de suppression, écrivez à <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
        </div>
      </div>
    </>
  );
}
