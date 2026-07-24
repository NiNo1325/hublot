import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Confidentialité — Hublot',
  description:
    "Hublot ne collecte aucune donnée personnelle. Politique de confidentialité.",
};

/**
 * Politique de confidentialité.
 *
 * Obligatoire pour publier une application destinée aux enfants sur le Play
 * Store (Politique Familles). Hublot ne collecte rien : la page l'énonce
 * simplement, et son URL publique est fournie à la fiche Play.
 */
export default function ConfidentialitePage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12 text-slate-100">
      <h1 className="font-[family-name:var(--font-fredoka)] text-3xl font-bold">
        Confidentialité
      </h1>
      <p className="mt-2 text-sm text-slate-400">
        Dernière mise à jour : 24 juillet 2026
      </p>

      <section className="mt-8 space-y-4 leading-relaxed">
        <p>
          Hublot est une application qui fait découvrir les sciences aux enfants
          de 3 à 12 ans. Nous avons conçu Hublot pour qu&apos;elle respecte la vie
          privée des familles.
        </p>
        <h2 className="font-[family-name:var(--font-fredoka)] text-xl font-semibold">
          Aucune donnée collectée
        </h2>
        <p>
          Hublot ne collecte, ne stocke et ne transmet aucune donnée personnelle.
          L&apos;application ne demande ni compte, ni inscription, ni adresse
          e-mail. Elle ne contient aucune publicité et aucun outil de suivi.
        </p>
        <h2 className="font-[family-name:var(--font-fredoka)] text-xl font-semibold">
          Fonctionnement hors ligne
        </h2>
        <p>
          Les cartes et les sons peuvent être enregistrés sur l&apos;appareil pour
          fonctionner sans connexion. Ces données restent sur l&apos;appareil et ne
          sont jamais envoyées ailleurs.
        </p>
        <h2 className="font-[family-name:var(--font-fredoka)] text-xl font-semibold">
          Contact
        </h2>
        <p>
          Pour toute question :{' '}
          <a
            className="underline"
            href="mailto:nicolas.notte@gmail.com"
          >
            nicolas.notte@gmail.com
          </a>
          .
        </p>
        <p className="pt-4">
          <Link className="underline" href="/">
            Retour à l&apos;accueil
          </Link>
        </p>
      </section>
    </main>
  );
}
