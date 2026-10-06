"use client";
import { MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { waLink } from "@/lib/whatsapp";

type Variant = "or" | "contour" | "clair" | "lien";

const styles: Record<Variant, string> = {
  or: "bg-or text-ebene hover:bg-or-clair",
  contour: "border border-or text-or-clair hover:bg-or hover:text-ebene",
  clair: "border border-bordeaux text-bordeaux hover:bg-bordeaux hover:text-ivoire",
  lien: "text-bordeaux underline underline-offset-4 decoration-or hover:text-bordeaux-vif px-0 py-0",
};

export function WhatsAppButton({
  message,
  label = "Parler à Hadj Ismael",
  variant = "or",
  source,
  className = "",
}: {
  message: string;
  label?: string;
  variant?: Variant;
  source: string;
  className?: string;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { source, label })}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${styles[variant]} ${className}`}
    >
      <MessageCircle aria-hidden="true" className="h-4 w-4" />
      {label}
    </a>
  );
}
