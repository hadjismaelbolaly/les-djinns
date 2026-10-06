"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/site";
import { WhatsAppButton } from "./WhatsAppButton";
import { waMessages } from "@/lib/whatsapp";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b border-or/20 bg-ebene/95 text-sable backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="font-display text-xl leading-none text-or-clair md:text-2xl" onClick={() => setOpen(false)}>
          Hadj Ismael Bohlaly
        </Link>
        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition-colors hover:text-or-clair ${pathname.startsWith(item.href) ? "text-or-clair" : ""}`}
                  aria-current={pathname.startsWith(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:block">
          <WhatsAppButton message={waMessages.general} source="en-tete" label="Parler à Hadj Ismael" className="py-2" />
        </div>
        <button
          type="button"
          className="rounded p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav id="menu-mobile" aria-label="Navigation mobile" className="border-t border-or/20 lg:hidden">
          <ul className="flex flex-col px-5 py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-3 text-base" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <Link href="/contact" className="block text-base" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
