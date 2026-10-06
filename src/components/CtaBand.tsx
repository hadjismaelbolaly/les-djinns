import { WhatsAppButton } from "./WhatsAppButton";
import { waMessages } from "@/lib/whatsapp";

export function CtaBand({
  title = "Parlons de votre situation",
  text = "Expliquez ce que vous vivez à Hadj Ismael. Il vous répond personnellement sur WhatsApp et vous oriente vers les pratiques adaptées.",
  message = waMessages.general,
  source = "bandeau",
}: {
  title?: string;
  text?: string;
  message?: string;
  source?: string;
}) {
  return (
    <section className="bg-ebene text-sable">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl text-or-clair md:text-4xl">{title}</h2>
          <p className="mt-3 leading-relaxed text-sable/85">{text}</p>
        </div>
        <WhatsAppButton message={message} source={source} label="Écrire sur WhatsApp" className="shrink-0" />
      </div>
    </section>
  );
}
