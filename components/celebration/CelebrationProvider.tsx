'use client';

import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';
import { LumiCelebre } from './LumiCelebre';

export interface Celebration {
  /** Rang de Lumi affiché dans la fête. */
  rang: number;
  titre: string;
  sousTitre?: string;
}

const CelebrationContext = createContext<(c: Celebration) => void>(() => {});

/** Déclenche une célébration de n'importe où sous le fournisseur. */
export function useCelebration() {
  return useContext(CelebrationContext);
}

/**
 * Rend l'ovelay « Lumi te félicite » par-dessus l'app quand un progrès le
 * mérite. Monté dans la coquille (app) : le quizz et le parcours peuvent donc
 * appeler `celebrer(...)` à une montée de rang.
 */
export function CelebrationProvider({ children }: { children: ReactNode }) {
  const [celebration, setCelebration] = useState<Celebration | null>(null);
  const celebrer = useCallback((c: Celebration) => setCelebration(c), []);

  return (
    <CelebrationContext.Provider value={celebrer}>
      {children}
      {celebration && (
        <LumiCelebre {...celebration} onFermer={() => setCelebration(null)} />
      )}
    </CelebrationContext.Provider>
  );
}
