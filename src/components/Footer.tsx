import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { nav, site } from "@/lib/site";
import { waLink, waMessages } from "@/lib/whatsapp";
import { Motif } from "./Motif";

export function Footer() {
  return (
    <footer className="bg-ebene pb-24 text-sable">
      <Motif />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl text-or-clair">Hadj Ismael Bohlaly</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-sable/80">
            Guide spirituel musulman et traditionaliste. Djinns, protection spirituelle et savoirs ancestraux.
          </p>
        </div>
        <nav aria-label="Pages du site">
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {[...nav, { label: "FAQ", href: "/faq" }, { label: "Contact", href: "/contact" }].map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="hover:text-or-clair">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-3 text-sm">
          <a href={waLink(waMessages.general)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-or-clair">
            <MessageCircle className="h-4 w-4 text-or" aria-hidden="true" /> {site.whatsappDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-2 break-all hover:text-or-clair">
            <Mail className="h-4 w-4 shrink-0 text-or" aria-hidden="true" /> {site.email}
          </a>
          {site.socials.map((s) => (
            <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer me" className="block hover:text-or-clair">
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-6xl border-t border-or/15 px-5 pt-6 text-xs leading-relaxed text-sable/60">
        <p>
          L'accompagnement proposé est spirituel et religieux. Il ne remplace pas l'avis d'un médecin ou d'un professionnel de santé.
        </p>
        <p className="mt-2">
          © {new Date().getFullYear()} Hadj Ismael Bohlaly. <Link href="/confidentialite" className="underline">Politique de confidentialité</Link>
        </p>
      </div>
    </footer>
  );
}
