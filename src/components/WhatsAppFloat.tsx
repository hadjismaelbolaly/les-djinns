"use client";
import { MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { waLink, waMessages } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink(waMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { source: "bouton-flottant" })}
      aria-label="Écrire à Hadj Ismael sur WhatsApp"
      className="fixed right-4 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-medium text-white shadow-lg shadow-black/30 transition-transform hover:scale-105 md:right-6"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))" }}
    >
      <MessageCircle aria-hidden="true" className="h-5 w-5" />
      <span>WhatsApp</span>
    </a>
  );
}
