import { Info } from "lucide-react";

export function Disclaimer({ className = "" }: { className?: string }) {
  return (
    <aside className={`flex gap-3 rounded-lg border border-or/40 bg-sable/60 p-4 text-sm leading-relaxed text-encre ${className}`}>
      <Info className="mt-0.5 h-5 w-5 shrink-0 text-bordeaux" aria-hidden="true" />
      <p>
        L'accompagnement de Hadj Ismael est spirituel et religieux. Certains symptômes physiques ou psychologiques
        (troubles du sommeil, angoisse, douleurs…) peuvent avoir une cause médicale : consultez aussi un professionnel de santé.
      </p>
    </aside>
  );
}
