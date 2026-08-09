'use client';

import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';
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
  const [file, setFile] = useState<Celebration[]>([]);
  const celebrer = useCallback((c: Celebration) => setFile((f) => [...f, c]), []);
  const courante = file[0] ?? null;

  return (
    <CelebrationContext.Provider value={celebrer}>
      {children}
      {courante && (
        <LumiCelebre
          {...courante}
          onFermer={() => setFile((f) => f.slice(1))}
        />
      )}
    </CelebrationContext.Provider>
  );
}
