'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { ScienceCard } from '@/lib/types';
import { construireEnigme, peutJouer, pointsPourIndices, type Enigme } from '@/lib/mystere';
import { rangDepuisEtoiles } from '@/lib/etoiles';
import { domainStyles } from '@/lib/domain-styles';
import { Lumi } from '@/components/mascotte/Lumi';
import { useAgeRange } from '@/components/age/useAgeRange';
import { useEtoiles } from '@/components/quiz/useEtoiles';
import { useCartesVues } from '@/components/cards/useCartesVues';
import { useMusee } from '@/components/musee/useLiberes';
import { useLienAudio } from '@/components/musee/useLienAudio';
import { useLocale } from '@/components/i18n/useLocale';
import { useT } from '@/components/i18n/useT';
import { jouerSonPaire, jouerSonRate, jouerSonRecompense } from '@/lib/sonRecompense';

interface MystereViewProps {
  cards: ScienceCard[];
}

/*
  Les intitulés d'époque, listés explicitement plutôt que construits à la volée :
  une clé fabriquée par concaténation échapperait au typage du dictionnaire.
*/
const CLE_EPOQUE = {
  antiquite: 'musee.epoque.antiquite',
  'moyen-age': 'musee.epoque.moyen-age',
  renaissance: 'musee.epoque.renaissance',
  lumieres: 'musee.epoque.lumieres',
  'dix-neuvieme': 'musee.epoque.dix-neuvieme',
  vingtieme: 'musee.epoque.vingtieme',
  aujourdhui: 'musee.epoque.aujourdhui',
} as const;

/**
 * Le savant mystère : trois indices, quelques portraits, une seule réponse.
 *
 * Les indices se découvrent l'un après l'autre, du plus large au plus précis.
 * Trouver au premier vaut trois étoiles filantes, au troisième une seule :
 * c'est le seul jeu qui récompense la compréhension rapide, là où le Défi
 * chrono récompense le doigt rapide.
 *
 * Se tromper ne met pas fin à la partie — ça retourne un portrait et **révèle
 * l'indice suivant**. L'erreur avance donc le jeu au lieu de le clore, ce qui
 * est la seule façon de garder un enfant de cinq ans dans la partie.
 */
export function MystereView({ cards }: MystereViewProps) {
  const router = useRouter();
  const { ageRange, status } = useAgeRange();
  const { etoiles } = useEtoiles();
  const { cartesVues } = useCartesVues();
  const { liberes } = useMusee();
  const { locale } = useLocale();
  const t = useT();
  const { direNom, direTitre } = useLienAudio();

  const [enigme, setEnigme] = useState<Enigme | null>(null);
  const [reveles, setReveles] = useState(1);
  const [ecartes, setEcartes] = useState<string[]>([]);
  const [gagne, setGagne] = useState(false);
  const [gains, setGains] = useState(0);

  useEffect(() => {
    if (status === 'pret' && !ageRange) router.replace('/');
  }, [status, ageRange, router]);

  if (status === 'chargement' || !ageRange) return null;

  const lancer = () => {
    setEnigme(construireEnigme(cards, cartesVues, liberes, ageRange, locale));
    setReveles(1);
    setEcartes([]);
    setGagne(false);
  };

  const deviner = (id: string) => {
    if (!enigme || gagne || ecartes.includes(id)) return;
    if (id === enigme.savantId) {
      setGains(pointsPourIndices(reveles));
      setGagne(true);
      jouerSonRecompense();
      direNom(id);
      return;
    }
    // Raté : le portrait s'éteint, et un indice de plus tombe.
    jouerSonRate();
    setEcartes((liste) => [...liste, id]);
    setReveles((n) => Math.min(enigme.indices.length, n + 1));
  };

  const rang = rangDepuisEtoiles(etoiles).rang.index;

  if (enigme === null) {
    /*
      Aucun savant connu : le mystère se jouerait au hasard et n'apprendrait
      rien. On invite à écouter des cartes, comme le quizz vide.
    */
    if (!peutJouer(cartesVues, liberes)) {
      return (
        <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center">
          <Lumi rang={rang} taille={110} etat="repos" />
          <h1 className="font-display text-2xl font-semibold sm:text-3xl">
            {t('mystere.vide.titre')}
          </h1>
          <p className="max-w-md text-craie-douce">{t('mystere.vide.texte')}</p>
          <Link
            href="/decouvrir"
            className="flex min-h-14 items-center rounded-full border-2 border-soleil bg-soleil/10 px-8 font-display text-base text-soleil transition-transform hover:scale-105 active:scale-95"
          >
            {t('mystere.vide.action')}
          </Link>
        </main>
      );
    }

    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 px-6 py-12 text-center">
        <span className="text-7xl" aria-hidden="true">
          🕵️
        </span>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">{t('mystere.titre')}</h1>
        <p className="max-w-md text-craie-douce">{t('mystere.regle')}</p>
        <button
          type="button"
          onClick={lancer}
          className="min-h-16 cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-10 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
        >
          {t('mystere.demarrer')}
        </button>
      </main>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 px-4 py-8">
      <header className="flex flex-col items-center gap-2 text-center">
        <h1 className="font-display text-2xl font-semibold sm:text-3xl">{t('mystere.titre')}</h1>
        <p aria-live="polite" className="text-sm text-craie-douce">
          {gagne
            ? t('mystere.trouve')(enigme.nom, gains)
            : t('mystere.indices')(reveles, enigme.indices.length)}
        </p>
      </header>

      {/* Les indices, du plus large au plus précis. Ceux qui restent sont voilés. */}
      <ul className="flex flex-col gap-2">
        {enigme.indices.map((indice, i) => {
          const visible = i < reveles || gagne;
          const teinte = indice.domainId ? domainStyles[indice.domainId].teinte : undefined;
          return (
            <li
              key={indice.genre}
              className={`flex min-h-16 items-center gap-3 rounded-2xl border-2 p-3 ${
                visible ? 'border-encre-bord bg-encre-clair' : 'border-dashed border-encre-bord/60'
              }`}
            >
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 text-xl"
                style={
                  visible
                    ? {
                        borderColor: teinte ?? 'var(--color-soleil)',
                        boxShadow: indice.domainId
                          ? `0 0 10px ${domainStyles[indice.domainId].halo}`
                          : undefined,
                      }
                    : { borderColor: 'var(--color-encre-bord)' }
                }
              >
                {visible ? indice.emoji : '❔'}
              </span>
              <span className="flex-1 text-left text-sm leading-snug text-craie">
                {visible
                  ? indice.genre === 'epoque'
                    ? t(CLE_EPOQUE[indice.epoque ?? 'aujourdhui'])
                    : indice.texte
                  : t('mystere.cache')}
              </span>
              {/*
                Le titre de la découverte s'écoute : c'est l'indice le plus riche,
                et le seul que l'enfant a déjà entendu ailleurs.
              */}
              {visible && indice.carteId && (
                <button
                  type="button"
                  onClick={() => direTitre(indice.carteId!)}
                  aria-label={t('mystere.ecouter')}
                  className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-encre-bord transition-colors hover:border-soleil"
                >
                  <span aria-hidden="true">🔊</span>
                </button>
              )}
            </li>
          );
        })}
      </ul>

      {/* Les portraits : un seul est le bon. */}
      <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        {enigme.portraits.map((p) => {
          const eteint = ecartes.includes(p.id);
          const vainqueur = gagne && p.id === enigme.savantId;
          return (
            <li key={p.id}>
              <button
                type="button"
                onClick={() => deviner(p.id)}
                disabled={eteint || gagne}
                className={`flex w-full flex-col items-center gap-1 rounded-2xl border-2 p-2 transition-colors ${
                  vainqueur
                    ? 'border-soleil bg-soleil/15'
                    : eteint
                      ? 'border-encre-bord opacity-30'
                      : 'cursor-pointer border-encre-bord bg-encre-clair hover:border-soleil'
                }`}
              >
                <Image
                  src={p.portrait}
                  alt=""
                  width={160}
                  height={160}
                  className={`h-16 w-16 rounded-full object-cover ${eteint ? 'grayscale' : ''}`}
                />
                {/* Le nom ne paraît qu'une fois trouvé : sinon l'indice se lit d'un coup d'œil. */}
                <span className="min-h-4 text-center text-[11px] leading-tight text-craie">
                  {gagne || eteint ? p.nom : ''}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {gagne && (
        <div className="flex flex-col items-center gap-5">
          <Lumi rang={rang} taille={100} etat="fete" />
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={lancer}
              className="min-h-14 cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-8 font-display text-base text-soleil transition-transform hover:scale-105 active:scale-95"
            >
              {t('mystere.rejouer')}
            </button>
            <button
              type="button"
              onClick={() => router.push('/joue')}
              className="min-h-14 cursor-pointer rounded-full border-2 border-encre-bord px-8 font-display text-base text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
            >
              {t('mystere.retour')}
            </button>
          </div>
        </div>
      )}

      {!gagne && (
        <button
          type="button"
          onClick={() => {
            if (reveles < enigme.indices.length) {
              jouerSonPaire();
              setReveles((n) => n + 1);
            }
          }}
          disabled={reveles >= enigme.indices.length}
          className="min-h-12 cursor-pointer self-center rounded-full border-2 border-encre-bord px-8 font-display text-sm text-craie-douce transition-colors hover:border-soleil hover:text-soleil disabled:cursor-default disabled:opacity-40"
        >
          {t('mystere.indice-suivant')}
        </button>
      )}
    </main>
  );
}
