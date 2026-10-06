import type { ReactNode } from "react";
import type { Crumb } from "@/types";
import { Breadcrumbs } from "./Breadcrumbs";
import { Motif } from "./Motif";

export function PageHero({ title, intro, crumbs, children }: { title: string; intro?: string; crumbs: Crumb[]; children?: ReactNode }) {
  return (
    <section className="relative bg-bordeaux text-ivoire">
      <div className="mx-auto max-w-6xl px-5 pb-14 pt-8 md:pb-20">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-8 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-base leading-relaxed text-sable/90 md:text-lg">{intro}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
      <Motif tone="or" className="opacity-70" />
    </section>
  );
}
