import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-ebene text-sable">
      <div className="mx-auto max-w-3xl px-5 py-28 text-center">
        <h1 className="font-display text-5xl text-or-clair">Cette page n'existe pas</h1>
        <p className="mt-4 text-sable/80">Elle a peut-être été déplacée. Revenez à l'accueil ou découvrez les rituels de protection.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-full bg-or px-6 py-3 text-sm text-ebene">Retour à l'accueil</Link>
          <Link href="/solutions" className="rounded-full border border-or/60 px-6 py-3 text-sm text-or-clair">Voir les rituels</Link>
        </div>
      </div>
    </section>
  );
}
