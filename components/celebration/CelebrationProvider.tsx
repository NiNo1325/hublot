'use client';

import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from 'react';
import { LumiCelebre } from './LumiCelebre';

export interface Celebration {
  /** Rang de Lumi affiché dans la fête. */
  rang: number;
  titre: string;
  sousTitre?: string;
  /** Emblème du progrès (🧭 exploré, 🏅 maîtrisé, 🏆 parcours…), pour distinguer
   *  chaque type de célébration d'un coup d'œil. Absent pour une montée de rang,
   *  où l'évolution de Lumi suffit. */
  embleme?: string;
  /** `fete` (défaut) : plein écran, bouton, Lumi qui saute — pour un vrai palier.
   *  `leger` : encouragement bref, Lumi qui rebondit, sans bouton, à refermer
   *  seul via `autoFermerMs` — pour l'accueil et les séries. */
  variante?: 'fete' | 'leger';
  /** Referme la célébration seule après ce délai (ms). Surtout pour `leger`. */
  autoFermerMs?: number;
  /** Joue le son + la gerbe de confettis. Vrai par défaut pour `fete`. À mettre
   *  à vrai sur un `leger` qui récompense (série), faux pour un simple accueil. */
  recompense?: boolean;
}

const CelebrationContext = createContext<(c: Celebration) => void>(() => {});

/** Déclenche une célébration de n'importe où sous le fournisseur. */
export function useCelebration() {
  return useContext(CelebrationContext);
}

/**
 * Rend l'overlay « Lumi te félicite » par-dessus l'app quand un progrès le
 * mérite. Monté dans la coquille (app) : quizz, parcours et détecteur de
 * progrès peuvent donc appeler `celebrer(...)`.
 *
 * Les célébrations sont mises en file : si plusieurs surviennent d'un coup
 * (une bonne réponse qui fait monter de rang ET maîtriser un monde), elles
 * s'enchaînent au lieu de s'écraser.
 */
export function CelebrationProvider({ children }: { children: ReactNode }) {
  const [file, setFile] = useState<Array<Celebration & { id: number }>>([]);
  const idRef = useRef(0);
  const celebrer = useCallback((c: Celebration) => {
    idRef.current += 1;
    const id = idRef.current;
    setFile((f) => [...f, { ...c, id }]);
  }, []);
  const fermer = useCallback(() => setFile((f) => f.slice(1)), []);
  const courante = file[0] ?? null;

  return (
    <CelebrationContext.Provider value={celebrer}>
      {children}
      {/* La clé remonte le composant à chaque célébration : deux encouragements
          légers identiques qui s'enchaînent relancent bien leur minuterie. */}
      {courante && <LumiCelebre key={courante.id} {...courante} onFermer={fermer} />}
    </CelebrationContext.Provider>
  );
}
