"use client";
import { useState, type FormEvent } from "react";
import { waLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

const subjects = ["Accompagnement spirituel", "Un rituel", "Un produit", "Une question sur les djinns", "Autre"];

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get("site_web")) return; // piège anti-robots : champ invisible pour les humains
    const name = String(data.get("nom") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    const subject = String(data.get("sujet") || "");
    const message = String(data.get("message") || "").trim();
    const next: Record<string, string> = {};
    if (name.length < 2) next.nom = "Indiquez votre prénom ou votre nom.";
    if (message.length < 10) next.message = "Votre message doit faire au moins 10 caractères.";
    if (message.length > 2000) next.message = "Votre message est trop long (2000 caractères maximum).";
    setErrors(next);
    if (Object.keys(next).length) return;
    const text = `Bonjour Hadj Ismael, je m'appelle ${name}.${contact ? ` Mon contact : ${contact}.` : ""}\nSujet : ${subject}\n\n${message}`;
    trackEvent("contact_form", { subject });
    trackEvent("whatsapp_click", { source: "formulaire-contact" });
    window.open(waLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const field = "mt-2 w-full rounded-sm border border-or/50 bg-ivoire px-4 py-3 text-base text-encre focus:border-bordeaux";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="site_web">Ne pas remplir</label>
        <input id="site_web" name="site_web" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <label htmlFor="nom" className="text-sm font-medium">Votre nom</label>
        <input id="nom" name="nom" autoComplete="name" className={field} aria-invalid={!!errors.nom} aria-describedby={errors.nom ? "nom-err" : undefined} />
        {errors.nom && <p id="nom-err" className="mt-1 text-sm text-bordeaux-vif">{errors.nom}</p>}
      </div>
      <div>
        <label htmlFor="contact" className="text-sm font-medium">Téléphone ou e-mail (facultatif)</label>
        <input id="contact" name="contact" autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor="sujet" className="text-sm font-medium">Sujet</label>
        <select id="sujet" name="sujet" className={field}>
          {subjects.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">Votre message</label>
        <textarea id="message" name="message" rows={6} maxLength={2000} className={field} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
        {errors.message && <p id="message-err" className="mt-1 text-sm text-bordeaux-vif">{errors.message}</p>}
      </div>
      <button type="submit" className="w-full rounded-full bg-bordeaux px-8 py-4 text-base text-ivoire transition-colors hover:bg-bordeaux-vif sm:w-auto">
        Envoyer sur WhatsApp
      </button>
      <p className="text-xs leading-relaxed text-encre/70">
        Votre message s'ouvre dans WhatsApp, prêt à être envoyé à Hadj Ismael. Aucune donnée n'est enregistrée sur ce site.
      </p>
      {sent && <p role="status" className="text-sm text-bordeaux">WhatsApp s'est ouvert avec votre message. Il ne reste qu'à appuyer sur Envoyer.</p>}
    </form>
  );
}
