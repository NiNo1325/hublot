'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { DomainDefinition, QuizQuestion, ScienceCard } from '@/lib/types';
import { domainStyles } from '@/lib/domain-styles';
import { progressionDomaine } from '@/lib/progression';
import { ordreParcours, prochaineEtape } from '@/lib/parcours';
import { rangDepuisEtoiles } from '@/lib/etoiles';
import { questionsDe } from '@/content/quiz';
import { expeditionDuJour, indexDuJour } from '@/lib/expedition';
import { useExpeditionFaite } from '@/components/ciel/useExpeditionFaite';
import { useAgeRange } from '@/components/age/useAgeRange';
import { useCartesVues } from '@/components/cards/useCartesVues';
import { useEtoiles } from '@/components/quiz/useEtoiles';
import { Lumi } from '@/components/mascotte/Lumi';
import { Intitule } from '@/components/ui/Intitule';
import { CardModal } from '@/components/cards/CardModal';
import { useLocale } from '@/components/i18n/useLocale';
import { localise } from '@/lib/i18n/localise';
import { useT } from '@/components/i18n/useT';
import { QuestionUnique } from './QuestionUnique';

interface ParcoursViewProps {
  cards: ScienceCard[];
  domains: DomainDefinition[];
}

type Session =
  | { carte: ScienceCard; phase: 'decouverte' }
  | { carte: ScienceCard; phase: 'quizz'; question: QuizQuestion };

/** Une question au hasard parmi celles de la carte (hors composant : impur). */
function tirerQuestion(qs: QuizQuestion[]): QuizQuestion {
  return qs[Math.floor(Math.random() * qs.length)];
}

/**
 * Le mode guidé, à deux rythmes.
 *
 * En tête, l'expédition du jour : trois cartes reliées par un thème, et une
 * fin. C'est elle qui fait revenir demain, parce qu'elle se termine — dans une
 * application pour enfants, celui qui décide du retour est le parent, et un
 * parent ne relance que ce qui s'arrête tout seul.
 *
 * En dessous, le grand voyage : le chemin linéaire à travers les 150 cartes,
 * pour qui veut avancer sans attendre le lendemain. Les deux partagent la même
 * mécanique — raconter une carte, poser une question dessus, enchaîner.
 *
 * Épuré de toute statistique : le suivi (rang, badges) vit dans l'onglet Lumi.
 */
export function ParcoursView({ cards, domains }: ParcoursViewProps) {
  const router = useRouter();
  const { ageRange, status } = useAgeRange();
  const { cartesVues } = useCartesVues();
  const { etoiles } = useEtoiles();
  const { locale } = useLocale();
  const t = useT();
  const { faite, marquerFaite } = useExpeditionFaite();
  const [session, setSession] = useState<Session | null>(null);
  /* Expédition en cours : la série est figée, on la parcourt dans l'ordre. */
  const [expedition, setExpedition] = useState<{ cartes: ScienceCard[]; index: number } | null>(
    null,
  );
  const [expeditionFinie, setExpeditionFinie] = useState(false);

  const ordre = useMemo(() => ordreParcours(cards, domains), [cards, domains]);
  const prochaine = prochaineEtape(ordre, cartesVues);

  useEffect(() => {
    if (status === 'pret' && !ageRange) router.replace('/');
  }, [status, ageRange, router]);

  if (status === 'chargement' || !ageRange) return null;

  const decouvertes = ordre.reduce((n, c) => (cartesVues.has(c.id) ? n + 1 : n), 0);
  const rang = rangDepuisEtoiles(etoiles).rang;

  // Après la découverte : on teste la carte, ou on avance s'il n'y a pas de
  // question à cet âge.
  const apresDecouverte = (carte: ScienceCard) => {
    const qs = questionsDe(carte.id, ageRange, locale);
    if (qs.length > 0) {
      setSession({ carte, phase: 'quizz', question: tirerQuestion(qs) });
    } else {
      avancer();
    }
  };

  // La carte qu'on vient de faire est désormais « vue » : `prochaine` pointe donc
  // sur la suivante. `null` quand le parcours est terminé.
  const avancer = () => {
    if (expedition) {
      const suivant = expedition.index + 1;
      if (suivant < expedition.cartes.length) {
        setExpedition({ ...expedition, index: suivant });
        setSession({ carte: expedition.cartes[suivant], phase: 'decouverte' });
      } else {
        // La date du jour n'est écrite qu'ici : une expédition abandonnée en
        // route reste à faire, sinon quitter au milieu la ferait disparaître.
        marquerFaite();
        setExpedition(null);
        setSession(null);
        setExpeditionFinie(true);
      }
      return;
    }
    setSession(prochaine ? { carte: prochaine, phase: 'decouverte' } : null);
  };

  const expeditionDuMoment = expeditionDuJour(indexDuJour(new Date()), cartesVues);
  const trio = expeditionDuMoment.cartes
    .map((id) => cards.find((c) => c.id === id))
    .filter((c): c is ScienceCard => c !== undefined);

  const lancerExpedition = () => {
    if (trio.length === 0) return;
    setExpeditionFinie(false);
    setExpedition({ cartes: trio, index: 0 });
    setSession({ carte: trio[0], phase: 'decouverte' });
  };

  const quitterSession = () => {
    setSession(null);
    setExpedition(null);
  };

  return (
    <>
      {/* Le chemin s'efface pendant la question, qui prend sa place (écran normal,
          donc la barre d'onglets reste visible en bas). */}
      {session?.phase !== 'quizz' && (
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-10">
        <header className="flex flex-col items-center gap-2 text-center">
          <Lumi rang={rang.index} taille={72} etat="repos" />
          <h1 className="font-display text-3xl font-semibold sm:text-4xl">{t('parcours.titre')}</h1>
          <p className="text-sm text-craie-douce">
            {t('parcours.avancement')(decouvertes, ordre.length)}
          </p>
        </header>

        {/*
          L'expédition du jour, en tête. Trois cartes, un thème, une fin : c'est
          le seul endroit de l'application qui change tout seul d'un jour sur
          l'autre, et donc la seule raison de revenir qui ne dépende pas de la
          culpabilité.
        */}
        <section className="flex flex-col gap-3">
          <Intitule>{t('expedition.section')}</Intitule>
          {expeditionFinie ? (
            <div className="flex flex-col items-center gap-3 rounded-3xl border-2 border-soleil bg-soleil/10 p-6 text-center">
              <Lumi rang={rang.index} taille={96} etat="fete" />
              <p className="font-display text-xl text-soleil">{t('expedition.bravo')}</p>
              <p className="text-craie-douce">{t('expedition.demain')}</p>
            </div>
          ) : faite ? (
            <div className="flex items-center gap-4 rounded-3xl border-2 border-encre-bord bg-encre-clair px-5 py-4">
              <span aria-hidden="true" className="text-3xl opacity-60">
                {expeditionDuMoment.emoji}
              </span>
              <span className="flex flex-1 flex-col">
                <span className="font-display text-base text-craie">{t('expedition.faite')}</span>
                <span className="text-sm text-craie-douce">{t('expedition.demain')}</span>
              </span>
            </div>
          ) : (
            <button
              type="button"
              onClick={lancerExpedition}
              className="flex cursor-pointer items-center gap-4 rounded-3xl border-2 border-soleil bg-soleil/10 px-5 py-4 text-left transition-transform hover:scale-[1.01] active:scale-95"
            >
              <span aria-hidden="true" className="text-4xl">
                {expeditionDuMoment.emoji}
              </span>
              <span className="flex flex-1 flex-col">
                <span className="font-display text-xl text-soleil">
                  {localise(expeditionDuMoment.titre, locale)}
                </span>
                <span className="text-sm text-craie-douce">
                  {t('expedition.combien')(
                    trio.filter((c) => !cartesVues.has(c.id)).length,
                    trio.length,
                  )}
                </span>
                <span className="mt-1 font-display text-base text-craie">
                  {t('expedition.partir')}
                </span>
              </span>
            </button>
          )}
        </section>

        <Intitule>{t('parcours.section-voyage')}</Intitule>

        {/* Le cœur du mode guidé : une seule action, la prochaine étape. */}
        {prochaine ? (
          <button
            type="button"
            onClick={() => setSession({ carte: prochaine, phase: 'decouverte' })}
            className="flex cursor-pointer flex-col gap-1 rounded-3xl border-2 border-soleil bg-soleil/10 p-5 text-left transition-transform hover:scale-[1.01] active:scale-95"
          >
            <span className="text-sm text-craie-douce">{t('parcours.prochaine')}</span>
            <span className="flex items-center gap-3 font-display text-xl text-soleil">
              <span aria-hidden="true">
                {domains.find((d) => d.id === prochaine.domainId)?.icon}
              </span>
              {localise(prochaine.content, locale).title[ageRange]}
            </span>
            <span className="mt-1 font-display text-base text-craie">{t('parcours.continuer')}</span>
          </button>
        ) : (
          <div className="flex flex-col items-center gap-3 rounded-3xl border-2 border-soleil bg-soleil/10 p-6 text-center">
            <Lumi rang={rang.index} taille={96} etat="fete" />
            <p className="font-display text-xl text-soleil">{t('parcours.fini.titre')}</p>
            <p className="text-craie-douce">
              {t('parcours.fini.texte')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => router.push('/joue/quizz')}
                className="min-h-14 cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-8 font-display text-base text-soleil transition-transform hover:scale-105 active:scale-95"
              >
                {t('parcours.fini.quizz')}
              </button>
              <button
                type="button"
                onClick={() => router.push('/decouvrir/mondes')}
                className="min-h-14 cursor-pointer rounded-full border-2 border-encre-bord px-8 font-display text-base text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
              >
                {t('parcours.fini.explorer')}
              </button>
            </div>
          </div>
        )}

        {/* La carte-chemin : les dix mondes en jalons reliés. */}
        <ol className="relative flex flex-col gap-2">
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[27px] top-6 w-0.5 bg-encre-bord"
          />
          {domains.map((domain) => {
            const style = domainStyles[domain.id];
            const { vues, total } = progressionDomaine(cards, cartesVues, domain.id);
            const courant = prochaine?.domainId === domain.id;
            const termine = total > 0 && vues >= total;
            return (
              <li key={domain.id} className="relative flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 text-2xl"
                  style={{
                    backgroundColor: 'var(--color-encre-clair)',
                    borderColor: courant ? 'var(--color-soleil)' : 'var(--color-encre-bord)',
                    boxShadow: courant ? `0 0 18px ${style.halo}` : 'none',
                    opacity: vues > 0 || courant ? 1 : 0.55,
                  }}
                >
                  {termine ? '✅' : domain.icon}
                </span>
                {/* Jalon non cliquable : le chemin n'avance que par « Continuer ».
                    Pour explorer un monde librement, c'est l'onglet Découvrir. */}
                <div className="flex flex-1 items-center justify-between gap-3 rounded-2xl border-2 border-encre-bord bg-encre-clair px-4 py-3">
                  <span className="flex flex-col">
                    <span className="font-display text-base text-craie">
                      {localise(domain.labels, locale)}
                    </span>
                    <span className="text-sm text-craie-douce">{t('parcours.jalon')(vues, total)}</span>
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </main>
      )}

      {/* Découverte : modale plein écran (comme dans Découvrir). Question :
          écran normal ci-dessous, la barre d'onglets reste visible. */}
      {session?.phase === 'decouverte' && (
        <CardModal
          key={session.carte.id}
          card={session.carte}
          ageRange={ageRange}
          onClose={() => apresDecouverte(session.carte)}
        />
      )}
      {session?.phase === 'quizz' && (
        <QuestionUnique
          key={session.carte.id}
          card={session.carte}
          question={session.question}
          age={ageRange}
          onTermine={avancer}
          onQuitter={quitterSession}
        />
      )}
    </>
  );
}
