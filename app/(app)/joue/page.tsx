'use client';

import { ChoixModes } from '@/components/nav/ChoixModes';
import { useT } from '@/components/i18n/useT';

/**
 * L'entrée de l'onglet Joue : les jeux bâtis sur le contenu déjà écouté.
 *
 * Le quizz occupait un onglet à lui seul, ce qui ne laissait aucune place aux
 * modes suivants. Les annoncer ici, grisés, coûte peu et dit à l'enfant que
 * l'endroit va se remplir.
 */
export default function JouePage() {
  const t = useT();

  return (
    <ChoixModes
      titre={t('hub.joue.titre')}
      texte={t('hub.joue.texte')}
      modes={[
        {
          href: '/joue/quizz',
          emoji: '🎯',
          titre: t('jeu.quizz.titre'),
          texte: t('jeu.quizz.texte'),
          teinte: '#fb7185',
        },
        {
          href: '/joue/memo',
          emoji: '🃏',
          titre: t('jeu.memo.titre'),
          texte: t('jeu.memo.texte'),
          teinte: '#a3e635',
        },
        {
          href: '/joue/memo-cartes',
          emoji: '🗂️',
          titre: t('jeu.memo-cartes.titre'),
          texte: t('jeu.memo-cartes.texte'),
          teinte: '#38bdf8',
        },
        {
          href: '/joue/chrono',
          emoji: '⏱️',
          titre: t('jeu.chrono.titre'),
          texte: t('jeu.chrono.texte'),
          teinte: '#e879f9',
        },
      ]}
    />
  );
}
