import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Crumb } from "@/types";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "./JsonLd";

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: "Accueil", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbSchema(all)} />
      <nav aria-label="Fil d'Ariane" className="text-xs text-sable/70">
        <ol className="flex flex-wrap items-center gap-1">
          {all.map((c, i) => (
            <li key={c.path} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="h-3 w-3" aria-hidden="true" />}
              {i === all.length - 1 ? (
                <span aria-current="page" className="text-or-clair">{c.name}</span>
              ) : (
                <Link href={c.path} className="hover:text-or-clair">{c.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
