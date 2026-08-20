'use client';

import { ChoixModes } from '@/components/nav/ChoixModes';
import { useT } from '@/components/i18n/useT';

/**
 * L'entrée de l'onglet Joue : les jeux bâtis sur le contenu déjà écouté.
 *
 * L'ordre n'est pas alphabétique, il est pédagogique. Le quizz vient en tête
 * parce que c'est le seul qui donne des clés — le fil rouge passe par lui, et
 * l'enfant doit le trouver sans chercher. Viennent ensuite les trois jeux qui
 * font travailler ce qu'il a écouté : trancher une affirmation, situer une
 * époque — pour les savants comme pour les découvertes — et reconnaître un
 * savant. Les deux frises se suivent : même geste, deux angles sur le temps. Le mémo et le chrono ferment la marche : ce
 * sont des jeux d'adresse, ils amusent sans rien enseigner de neuf.
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
          href: '/joue/vrai-faux',
          emoji: '🤔',
          titre: t('jeu.vrai-faux.titre'),
          texte: t('jeu.vrai-faux.texte'),
          teinte: '#facc15',
        },
        {
          href: '/joue/liens',
          emoji: '🔗',
          titre: t('jeu.liens.titre'),
          texte: t('jeu.liens.texte'),
          teinte: '#38bdf8',
        },
        {
          href: '/joue/frise',
          emoji: '⏳',
          titre: t('jeu.frise.titre'),
          texte: t('jeu.frise.texte'),
          teinte: '#fb923c',
        },
        {
          href: '/joue/decouvertes',
          emoji: '💡',
          titre: t('jeu.decouvertes.titre'),
          texte: t('jeu.decouvertes.texte'),
          teinte: '#fbbf24',
        },
        {
          href: '/joue/mystere',
          emoji: '🕵️',
          titre: t('jeu.mystere.titre'),
          texte: t('jeu.mystere.texte'),
          teinte: '#c4b5fd',
        },
        {
          href: '/joue/memo',
          emoji: '🃏',
          titre: t('jeu.memo.titre'),
          texte: t('jeu.memo.texte'),
          teinte: '#a3e635',
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
