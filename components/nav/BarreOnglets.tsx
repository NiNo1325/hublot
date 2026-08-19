'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { rangDepuisEtoiles } from '@/lib/etoiles';
import { Lumi } from '@/components/mascotte/Lumi';
import { useEtoiles } from '@/components/quiz/useEtoiles';
import { useT } from '@/components/i18n/useT';

/**
 * Barre d'onglets du bas : les quatre destinations de l'app, toujours au même
 * endroit. Elle remplace les boutons « Menu / Retour » qui étaient éparpillés.
 *
 * L'onglet Lumi n'a pas d'emoji : c'est la mascotte elle-même, au rang courant,
 * qui suit le progrès de l'enfant. Les autres portent un emoji. L'onglet actif
 * porte `aria-current="page"`.
 *
 * Les libellés viennent du dictionnaire d'interface : l'adresse, elle, ne
 * change pas de langue — traduire les URL casserait les liens partagés et les
 * raccourcis installés sur l'écran d'accueil.
 */
const ONGLETS = [
  /*
    Le musée ouvre la marche : c'est lui qui porte le récit, et c'est par lui
    qu'on doit entrer. Un enfant qui lance l'application tombe d'abord sur les
    savants enfermés et sur ce que Lumi lui demande ; le reste — explorer,
    jouer — devient le moyen de les délivrer, au lieu d'être une fin en soi.

    `aussi` : les chemins qui appartiennent à l'onglet sans être sous son
    préfixe. Lumi habite le musée (son cabinet, ses rangs), et le parcours guidé
    se choisit depuis Découvrir ; sans cela, aucun onglet ne s'allumerait une
    fois dedans, et l'enfant ne saurait plus où il se trouve.
  */
  { href: '/musee', icone: null, cle: 'nav.musee', aussi: ['/lumi'] },
  { href: '/decouvrir', icone: '🔭', cle: 'nav.decouvrir', aussi: ['/parcours'] },
  { href: '/joue', icone: '🎮', cle: 'nav.joue', aussi: [] },
  { href: '/reglages', icone: '⚙️', cle: 'nav.reglages', aussi: [] },
] as const;

export function BarreOnglets() {
  const pathname = usePathname();
  const t = useT();
  const { etoiles } = useEtoiles();
  const { rang } = rangDepuisEtoiles(etoiles);

  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t-2 border-encre-bord bg-encre/95 backdrop-blur">
      <ul className="mx-auto flex max-w-2xl">
        {ONGLETS.map((onglet) => {
          // Un onglet reste actif dans toute sa descendance (/decouvrir/xxx),
          // et sur les chemins qu'il héberge sans les préfixer.
          const dansOnglet = (base: string) =>
            pathname === base || pathname.startsWith(`${base}/`);
          const actif =
            dansOnglet(onglet.href) || onglet.aussi.some((chemin) => dansOnglet(chemin));
          return (
            <li key={onglet.href} className="flex-1">
              <Link
                href={onglet.href}
                aria-current={actif ? 'page' : undefined}
                className={`flex min-h-[60px] cursor-pointer flex-col items-center justify-center gap-0.5 py-2 transition-colors ${
                  actif ? 'text-soleil' : 'text-craie-douce hover:text-craie'
                }`}
              >
                {onglet.icone ? (
                  <span aria-hidden="true" className="text-2xl leading-none">
                    {onglet.icone}
                  </span>
                ) : (
                  <span
                    aria-hidden="true"
                    className={`flex h-7 items-center leading-none transition-opacity ${
                      actif ? '' : 'opacity-80'
                    }`}
                  >
                    <Lumi rang={rang.index} taille={30} />
                  </span>
                )}
                <span className="font-display text-xs">{t(onglet.cle)}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
