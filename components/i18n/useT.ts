'use client';

import { useCallback } from 'react';
import { useLocale } from './useLocale';
import { traduire, type CleUI } from '@/lib/i18n/dictionaries';

/**
 * Traducteur des chaînes d'interface, dans la langue choisie.
 *
 * Usage : `const t = useT();` puis `t('nav.quizz')`. Le composant se réabonne à
 * `useLocale`, donc l'écran se retraduit dès la bascule dans Réglages, sans
 * rechargement.
 */
export function useT() {
  const { locale } = useLocale();
  return useCallback(
    <K extends CleUI>(cle: K) => traduire(locale, cle),
    [locale],
  );
}
