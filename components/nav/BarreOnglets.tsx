'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Barre d'onglets du bas : les quatre destinations de l'app, toujours au même
 * endroit. Elle remplace les boutons « Menu / Retour » qui étaient éparpillés
 * dans les en-têtes — la navigation vit désormais à un seul endroit.
 *
 * Libellés courts et visibles (jeunes lecteurs + accessibilité) ; l'onglet actif
 * porte `aria-current="page"`.
 */
const ONGLETS = [
  { href: '/decouvrir', icone: '🔭', label: 'Découvrir' },
  { href: '/quizz', icone: '🎯', label: 'Quizz' },
  { href: '/parcours', icone: '🗺️', label: 'Parcours' },
  { href: '/reglages', icone: '⚙️', label: 'Réglages' },
] as const;

export function BarreOnglets() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t-2 border-encre-bord bg-encre/95 backdrop-blur">
      <ul className="mx-auto flex max-w-2xl">
        {ONGLETS.map((onglet) => {
          // Découvrir reste actif sur le détail d'un domaine (/decouvrir/xxx).
          const actif =
            pathname === onglet.href || pathname.startsWith(`${onglet.href}/`);
          return (
            <li key={onglet.href} className="flex-1">
              <Link
                href={onglet.href}
                aria-current={actif ? 'page' : undefined}
                className={`flex min-h-[60px] cursor-pointer flex-col items-center justify-center gap-0.5 py-2 transition-colors ${
                  actif ? 'text-soleil' : 'text-craie-douce hover:text-craie'
                }`}
              >
                <span aria-hidden="true" className="text-2xl leading-none">
                  {onglet.icone}
                </span>
                <span className="font-display text-xs">{onglet.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
