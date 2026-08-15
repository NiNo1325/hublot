'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { DomainDefinition, DomainId, ScienceCard } from '@/lib/types';
import { domainStyles } from '@/lib/domain-styles';
import { useAgeRange } from '@/components/age/useAgeRange';
import { useCartesVues } from '@/components/cards/useCartesVues';
import { useQuizAudio } from './useQuizAudio';
import { useEtoiles } from './useEtoiles';
import { useCartesMaitrisees } from '@/components/cards/useCartesMaitrisees';
import { Lumi } from '@/components/mascotte/Lumi';
import { useCelebration } from '@/components/celebration/CelebrationProvider';
import { rangDepuisEtoiles } from '@/lib/etoiles';
import { ordreLecture } from '@/content/quiz/ordre';
import {
  construireSerie,
  cartesEligibles,
  melanger,
  type Tirage,
} from '@/content/quiz/tirage';
import { useLocale } from '@/components/i18n/useLocale';
import { localise } from '@/lib/i18n/localise';
import { useT } from '@/components/i18n/useT';

interface QuizViewProps {
  cards: ScienceCard[];
  domains: DomainDefinition[];
}

export function QuizView({ cards, domains }: QuizViewProps) {
  const router = useRouter();
  const { ageRange, status } = useAgeRange();
  const { cartesVues } = useCartesVues();
  const { locale } = useLocale();
  const t = useT();

  const { jouer, jouerProposition, jouerVerdict, arreter, enLecture } =
    useQuizAudio(ageRange ?? '6-8');
  const [serie, setSerie] = useState<Tirage[] | null>(null);
  const [index, setIndex] = useState(0);
  const [choisie, setChoisie] = useState<number | null>(null);
  const [reussies, setReussies] = useState(0);
  const { etoiles, gagnerEtoiles } = useEtoiles();
  const { marquerMaitrisee } = useCartesMaitrisees();
  // Bonnes réponses consécutives, pour un encouragement positif (jamais négatif).
  const [dAffilee, setDAffilee] = useState(0);
  const celebrer = useCelebration();
  // Périmètre de la série en cours : un monde précis, ou `null` pour « Tout ».
  // Sert à proposer « sujet suivant » et à rejouer le même sujet en fin de série.
  const [scope, setScope] = useState<DomainId | null>(null);

  const tirageCourant = serie?.[index] ?? null;

  /*
    Les non-lecteurs ont besoin d'entendre l'énoncé et ses propositions pour
    pouvoir choisir : la lecture démarre seule pour eux. Les plus grands lisent
    déjà le texte et disposent d'un bouton.
  */
  const questionEnonceeRef = useRef<string | null>(null);
  useEffect(() => {
    if (!tirageCourant || ageRange !== '3-5') return;
    const repere = `${tirageCourant.carte.id}/${tirageCourant.question.id}`;
    if (questionEnonceeRef.current === repere) return;
    questionEnonceeRef.current = repere;
    jouer(tirageCourant.carte.id, tirageCourant.question.id, 'question');
  }, [tirageCourant, ageRange, jouer]);

  /*
    Ordre des propositions. Pour les 3-5 ans, l'énoncé est un mp3 figé qui les
    lit dans l'ordre de `ordreLecture` : un tirage aléatoire ici ferait
    annoncer une proposition quand l'écran en montre une autre — une fois sur
    deux, puisqu'ils n'en ont que deux. L'affichage suit donc la voix.

    Aux autres âges, l'audio n'énonce pas les propositions : le mélange reste
    utile, il empêche de retenir une position d'une partie à l'autre.
  */
  const propositions = useMemo(() => {
    const tirage = serie?.[index];
    if (!tirage) return [];
    return ageRange === '3-5'
      ? ordreLecture(tirage.question)
      : melanger(tirage.question.reponses);
  }, [serie, index, ageRange]);

  if (status === 'chargement' || !ageRange) return null;

  const eligibles = cartesEligibles(cards, cartesVues, ageRange, locale);

  // Mondes réellement jouables : au moins une carte écoutée qui a une question à
  // cet âge. On ne propose jamais un monde qui donnerait un quizz vide.
  const mondesJouables = domains
    .map((domain) => ({
      domain,
      n: eligibles.reduce((t, c) => (c.domainId === domain.id ? t + 1 : t), 0),
    }))
    .filter((m) => m.n > 0);

  const lancer = (domainId: DomainId | null, accueil = false) => {
    setScope(domainId);
    setSerie(construireSerie(cards, cartesVues, ageRange, domainId, locale));
    setIndex(0);
    setChoisie(null);
    setReussies(0);
    setDAffilee(0);
    // Lumi encourage au lancement depuis le menu — pas sur « rejouer » ni
    // « sujet suivant », où l'enfant est déjà lancé.
    if (accueil) {
      celebrer({
        rang: rangDepuisEtoiles(etoiles).rang.index,
        titre: t('fete.on-y-va'),
        variante: 'leger',
        autoFermerMs: 2000,
      });
    }
  };

  // Le monde jouable suivant, dans l'ordre d'affichage, en cyclant. `null` s'il
  // n'y a pas d'autre monde à enchaîner (« Tout », ou un seul monde jouable).
  const idsJouables = mondesJouables.map((m) => m.domain.id);
  const domaineSuivant = (courant: DomainId | null): DomainId | null => {
    if (courant === null || idsJouables.length <= 1) return null;
    const i = idsJouables.indexOf(courant);
    if (i === -1) return null;
    return idsJouables[(i + 1) % idsJouables.length];
  };
  const nomDomaine = (id: DomainId) => domains.find((d) => d.id === id);
  const libelleDomaine = (d: DomainDefinition | undefined) =>
    d ? localise(d.labels, locale) : '';

  /*
    Aucune carte écoutée parmi celles qui ont des questions : plutôt qu'un
    quizz vide, on renvoie explorer. C'est le seul écran possible et il doit
    donner envie, pas ressembler à une erreur.
  */
  if (eligibles.length === 0) {
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 px-6 py-12 text-center">
        <span className="text-7xl" aria-hidden="true">
          🎯
        </span>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">
          {t('quizz.vide.titre')}
        </h1>
        <p className="max-w-md text-craie-douce">
          {t('quizz.vide.texte')}
        </p>
        <button
          type="button"
          onClick={() => router.push('/decouvrir/mondes')}
          className="min-h-16 cursor-pointer rounded-full border-2 border-soleil px-8 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
        >
          {t('quizz.vide.action')}
        </button>
      </main>
    );
  }

  if (!serie) {
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-8 px-6 py-12">
        <header className="flex flex-col items-center gap-3 text-center">
          <span className="text-6xl" aria-hidden="true">
            🎯
          </span>
          <h1 className="font-display text-3xl font-semibold sm:text-4xl">
            {t('quizz.menu.titre')}
          </h1>
          <p className="text-craie-douce">
            {t('quizz.menu.texte')}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* Le quizz général en tête, mis en avant : c'est le choix par défaut. */}
          <button
            type="button"
            onClick={() => lancer(null, true)}
            className="flex min-h-16 cursor-pointer items-center gap-4 rounded-2xl border-2 border-soleil bg-soleil/10 px-5 font-display text-lg text-soleil transition-transform hover:scale-[1.02] active:scale-95 sm:col-span-2"
          >
            <span className="text-3xl" aria-hidden="true">🎲</span>
            <span className="flex flex-col text-left">
              <span>{t('quizz.tout')}</span>
              <span className="text-sm font-normal text-craie-douce">
                {t('quizz.menu.total')(eligibles.length)}
              </span>
            </span>
          </button>

          {mondesJouables.map(({ domain, n }) => {
            const style = domainStyles[domain.id];
            return (
              <button
                key={domain.id}
                type="button"
                onClick={() => lancer(domain.id, true)}
                className="flex min-h-16 cursor-pointer items-center gap-3 rounded-2xl border-2 border-encre-bord bg-encre-clair px-4 text-left transition-transform hover:scale-[1.02] active:scale-95"
                style={{ boxShadow: `0 0 18px ${style.halo}` }}
              >
                <span className="text-3xl" aria-hidden="true">{domain.icon}</span>
                <span className="flex flex-col">
                  <span className="font-display text-lg text-craie">
                    {localise(domain.labels, locale)}
                  </span>
                  <span className="text-sm text-craie-douce">
                    {t('quizz.menu.cartes')(n)}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </main>
    );
  }

  // Fin de série.
  if (index >= serie.length) {
    const rangApres = rangDepuisEtoiles(etoiles);
    const suivant = domaineSuivant(scope);
    const suivantDef = suivant ? nomDomaine(suivant) : null;
    const scopeDef = scope ? nomDomaine(scope) : null;
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 px-6 py-12 text-center">
        {/* Lumi fête l'enfant, dans l'apparence du rang qu'il vient d'atteindre. */}
        <Lumi rang={rangApres.rang.index} taille={120} etat="fete" />
        <div className="flex flex-col items-center gap-2">
          <span className="flex items-center gap-1.5 text-sm text-craie-douce">
            <span aria-hidden="true">{scopeDef ? scopeDef.icon : '🎲'}</span>
            {scopeDef ? localise(scopeDef.labels, locale) : t('quizz.tout')}
          </span>
          <p className="font-display text-lg text-soleil">{t('quizz.fin.bravo')}</p>
          <h1 className="font-display text-3xl font-semibold sm:text-4xl">
            {t('quizz.fin.score')(reussies, serie.length)}
          </h1>
        </div>

        {/* Étoiles gagnées et total, jamais de sanction. */}
        <div className="flex flex-col items-center gap-2">
          <p className="font-display text-2xl text-soleil">
            +{reussies} <span aria-hidden="true">⭐</span>
          </p>
          <p className="text-craie-douce">
            <span aria-hidden="true">⭐</span> {t('quizz.fin.total')(etoiles)}{' '}
            <span aria-hidden="true">{rangApres.rang.icone}</span>{' '}
            {localise(rangApres.rang.nom, locale)}
          </p>
        </div>

        {/* Aucun échec possible : on encourage, on ne sanctionne pas. */}
        <p className="max-w-md text-craie-douce">
          {t('quizz.fin.texte')}
        </p>

        {/* Enchaînement guidé : d'un sujet on passe au suivant d'un clic, sans
            repasser par le menu. */}
        <div className="flex w-full max-w-xs flex-col items-center gap-3">
          {suivant && suivantDef ? (
            <button
              type="button"
              onClick={() => lancer(suivant)}
              className="flex min-h-16 w-full cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-soleil bg-soleil/10 px-6 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
            >
              {t('quizz.fin.suivant')} <span aria-hidden="true">→ {suivantDef.icon}</span>{' '}
              {localise(suivantDef.labels, locale)}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => lancer(scope)}
              className="min-h-16 w-full cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-6 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
            >
              {scope ? t('quizz.fin.rejouer-sujet') : t('quizz.fin.rejouer')}
            </button>
          )}

          {scope && suivant && (
            <button
              type="button"
              onClick={() => lancer(scope)}
              className="min-h-14 w-full cursor-pointer rounded-full border-2 border-encre-bord px-6 font-display text-base text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
            >
              {t('quizz.fin.rejouer-sujet')}
            </button>
          )}

          <button
            type="button"
            onClick={() => setSerie(null)}
            className="min-h-14 w-full cursor-pointer rounded-full border-2 border-encre-bord px-6 font-display text-base text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
          >
            {scope ? t('quizz.fin.autre-sujet') : t('quizz.fin.choisir-sujet')}
          </button>
        </div>
      </main>
    );
  }

  const tirage = serie[index];
  const style = domainStyles[tirage.carte.domainId];
  const repondu = choisie !== null;
  const justeChoisie = repondu && propositions[choisie]?.correcte === true;

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 px-5 py-8">
      <header className="flex items-center justify-between gap-3">
        <span className="text-sm text-craie-douce">
          {t('quizz.progression')(index + 1, serie.length)}
        </span>
        {/* Sujet en cours : on sait toujours où on est. */}
        <span className="flex items-center gap-1.5 rounded-full border border-encre-bord px-3 py-1 text-xs text-craie-douce">
          <span aria-hidden="true">{scope ? nomDomaine(scope)?.icon : '🎲'}</span>
          {scope ? libelleDomaine(nomDomaine(scope)) : t('quizz.tout')}
        </span>
      </header>

      <div className="flex justify-center gap-1" aria-hidden="true">
        {serie.map((_, i) => (
          <span key={i} className={i < reussies ? 'text-xl' : 'text-xl opacity-25'}>
            ⭐
          </span>
        ))}
      </div>

      <div
        className="flex items-start gap-4 rounded-3xl border-2 p-5"
        style={{ borderColor: style.teinte, boxShadow: `0 0 30px ${style.halo}` }}
      >
        <p className="flex-1 font-display text-xl leading-snug sm:text-2xl">
          {tirage.question.question}
        </p>
        <button
          type="button"
          onClick={() =>
            enLecture
              ? arreter()
              : jouer(tirage.carte.id, tirage.question.id, 'question')
          }
          className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-encre-bord text-xl transition-colors hover:border-soleil hover:text-soleil"
        >
          <span aria-hidden="true">{enLecture ? '⏸' : '🔊'}</span>
          <span className="sr-only">
            {enLecture ? t('quizz.arreter') : t('quizz.ecouter-question')}
          </span>
        </button>
      </div>

      <ul className="flex flex-col gap-3">
        {propositions.map((reponse, i) => {
          const estChoisie = choisie === i;
          const revelee = repondu && reponse.correcte;
          return (
            <li key={reponse.texte} className="flex items-stretch gap-2">
              <button
                type="button"
                disabled={repondu}
                onClick={() => {
                  setChoisie(i);
                  if (reponse.correcte) {
                    setReussies((n) => n + 1);
                    const enchainees = dAffilee + 1;
                    setDAffilee(enchainees);
                    marquerMaitrisee(tirage.carte.id);
                    // Lumi surgit féliciter les séries : à 3, 6, 9… d'affilée,
                    // avec une intensité qui monte par paliers (1 → 3).
                    if (enchainees >= 3 && enchainees % 3 === 0) {
                      const intensite = Math.min(3, enchainees / 3) as 1 | 2 | 3;
                      const titre =
                        intensite === 1
                          ? t('fete.bien-joue')
                          : intensite === 2
                            ? t('fete.en-forme')
                            : t('fete.en-feu');
                      celebrer({
                        rang: rangDepuisEtoiles(etoiles).rang.index,
                        titre,
                        sousTitre: t('fete.serie')(enchainees),
                        intensite,
                        variante: 'leger',
                        recompense: true,
                        autoFermerMs: 3000,
                      });
                    }
                  } else {
                    // Remise à zéro silencieuse : aucun message de « série perdue ».
                    setDAffilee(0);
                  }
                  jouerVerdict(
                    tirage.carte.id,
                    tirage.question.id,
                    reponse.correcte ? 'juste' : 'presque',
                  );
                }}
                className="flex min-h-20 flex-1 cursor-pointer items-center gap-4 rounded-2xl border-2 p-4 text-left transition-transform hover:scale-[1.02] active:scale-95 disabled:cursor-default disabled:hover:scale-100"
                style={{
                  borderColor: revelee
                    ? '#34d399'
                    : estChoisie
                      ? '#fb7185'
                      : 'var(--color-encre-bord)',
                  backgroundColor: revelee
                    ? 'rgba(52,211,153,0.12)'
                    : estChoisie
                      ? 'rgba(251,113,133,0.12)'
                      : 'var(--color-encre-clair)',
                }}
              >
                <span className="text-3xl" aria-hidden="true">
                  {reponse.icone}
                </span>
                {/* Les non-lecteurs se repèrent à l'icône ; le texte reste pour les autres. */}
                <span
                  className={
                    ageRange === '3-5'
                      ? 'text-base text-craie'
                      : 'text-lg text-craie'
                  }
                >
                  {reponse.texte}
                </span>
              </button>

              {/*
                Écoute de la proposition, en 6-8 : un lecteur débutant peut vouloir
                se faire relire une réponse. Bouton distinct, hors du bouton de
                réponse (un bouton ne peut pas en contenir un autre), et jamais
                désactivé — on peut réécouter même après avoir répondu.
              */}
              {ageRange === '6-8' && (
                <button
                  type="button"
                  onClick={() =>
                    jouerProposition(
                      tirage.carte.id,
                      tirage.question.id,
                      tirage.question.reponses.indexOf(reponse),
                    )
                  }
                  aria-label={t('quizz.ecouter-reponse')(reponse.texte)}
                  className="flex w-14 shrink-0 cursor-pointer items-center justify-center rounded-2xl border-2 border-encre-bord text-xl transition-colors hover:border-soleil hover:text-soleil"
                >
                  <span aria-hidden="true">🔊</span>
                </button>
              )}
            </li>
          );
        })}
      </ul>

      {repondu && (
        <div aria-live="polite" className="flex flex-col gap-4">
          <p
            className="font-display text-lg"
            style={{ color: justeChoisie ? '#34d399' : '#ffb627' }}
          >
            {justeChoisie ? t('quizz.juste') : t('quizz.presque')}
          </p>
          {justeChoisie && dAffilee >= 3 && (
            <p className="font-display text-base text-soleil">{t('fete.en-forme')} 🔥</p>
          )}
          <p className="text-base leading-relaxed text-craie-douce">
            {tirage.question.explication}
          </p>
          <button
            type="button"
            onClick={() => {
              arreter();
              // Dernière question : on crédite les étoiles une seule fois, et
              // si le total fait passer un rang, Lumi surgit féliciter l'enfant.
              if (index + 1 >= serie.length) {
                const avant = rangDepuisEtoiles(etoiles).rang;
                const apres = rangDepuisEtoiles(etoiles + reussies).rang;
                gagnerEtoiles(reussies);
                if (apres.index > avant.index) {
                  celebrer({
                    rang: apres.index,
                    rangAvant: avant.index,
                    titre: t('fete.nouveau-rang'),
                    sousTitre: `${apres.icone} ${localise(apres.nom, locale)}`,
                  });
                }
              }
              setIndex((n) => n + 1);
              setChoisie(null);
            }}
            className="min-h-16 cursor-pointer self-start rounded-full border-2 border-soleil px-8 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
          >
            {index + 1 >= serie.length ? t('quizz.resultat') : t('quizz.suivante')}
          </button>
        </div>
      )}
    </main>
  );
}
