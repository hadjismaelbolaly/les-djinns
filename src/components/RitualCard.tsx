import Link from "next/link";
import type { Ritual } from "@/types";
import { waMessages } from "@/lib/whatsapp";
import { WhatsAppButton } from "./WhatsAppButton";

export function RitualCard({ ritual }: { ritual: Ritual }) {
  return (
    <article className="flex flex-col border-t border-or/50 pt-5">
      <h3 className="font-display text-2xl leading-tight text-encre">
        <Link href={`/solutions/${ritual.slug}`} className="hover:text-bordeaux">{ritual.name}</Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-encre/80">{ritual.description}</p>
      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
        <WhatsAppButton message={waMessages.ritual(ritual.name)} source={`rituel-carte:${ritual.slug}`} label="En parler sur WhatsApp" variant="clair" className="py-2" />
        <Link href={`/solutions/${ritual.slug}`} className="text-sm text-bordeaux underline decoration-or underline-offset-4">
          En savoir plus
        </Link>
      </div>
    </article>
  );
}
