'use client';

import { ChoixModes } from '@/components/nav/ChoixModes';
import { useT } from '@/components/i18n/useT';

/**
 * L'entrée de l'onglet Découvrir : les façons d'aborder le contenu.
 *
 * Exploration libre et parcours guidé étaient deux onglets voisins, ce qui les
 * présentait comme deux endroits différents alors qu'ils donnent sur les mêmes
 * cartes. Réunis ici, le choix devient ce qu'il est vraiment — une manière
 * d'avancer, pas une destination — et la barre du bas se réserve aux vraies
 * destinations.
 */
export default function DecouvrirPage() {
  const t = useT();

  return (
    <ChoixModes
      titre={t('hub.decouvrir.titre')}
      texte={t('hub.decouvrir.texte')}
      modes={[
        {
          href: '/decouvrir/mondes',
          emoji: '🔭',
          titre: t('mode.explorer.titre'),
          texte: t('mode.explorer.texte'),
          teinte: '#ffb627',
        },
        {
          href: '/parcours',
          emoji: '🗺️',
          titre: t('mode.parcours.titre'),
          texte: t('mode.parcours.texte'),
          teinte: '#38bdf8',
        },
        {
          href: '/savants',
          emoji: '🏛️',
          titre: t('mode.savants.titre'),
          texte: t('mode.savants.texte'),
          teinte: '#e879f9',
        },
      ]}
    />
  );
}
