import type { ScienceCard } from '@/lib/types';

/**
 * Idée reçue corrigée : « le brouillard descend du ciel ». En réalité, c'est un
 * nuage qui se forme au niveau du sol : l'air près du sol se refroidit, sa vapeur
 * d'eau se condense sur place en gouttelettes. Ce n'est pas quelque chose qui
 * tombe d'en haut. Cohérent avec la carte « les nuages ».
 */
export const card: ScienceCard = {
  id: 'le-brouillard',
  domainId: 'meteo',
  animationId: 'brouillard',
  thumbnail: '🌫️',
  content: {
    fr: {
      title: {
        '3-5': 'Le brouillard',
        '6-8': "D'où vient le brouillard",
        '9-12': "D'où vient le brouillard",
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'soir',
              text: 'Le soir, quand le soleil s’en va, l’air tout près du sol devient froid.',
            },
            {
              id: 'condense',
              text: 'Alors la vapeur d’eau de l’air se change en toutes petites gouttes, juste au-dessus du sol.',
            },
            {
              id: 'nuage-au-sol',
              text: 'Ces gouttes font comme un nuage, mais par terre : c’est le brouillard !',
            },
            {
              id: 'leve',
              text: 'Le matin, le soleil réchauffe tout, les gouttes disparaissent, et le brouillard se lève.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'soir',
              text: "On croit que le brouillard descend du ciel. Faux : tout se passe en bas. Le soir, l'air près du sol se refroidit.",
            },
            {
              id: 'condense',
              text: 'En refroidissant, cet air ne peut plus garder toute sa vapeur d’eau. Elle se condense en une multitude de gouttelettes, juste au ras du sol.',
            },
            {
              id: 'nuage-au-sol',
              text: 'Ce brouillard de gouttelettes, c’est exactement un nuage — sauf qu’il est posé au niveau du sol, et pas là-haut. Voilà pourquoi on n’y voit plus très loin.',
            },
            {
              id: 'leve',
              text: 'Au matin, le soleil réchauffe l’air, les gouttelettes s’évaporent et redeviennent de la vapeur invisible. Le brouillard « se lève » : il disparaît sur place.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'soir',
              text: "Le brouillard ne tombe pas du ciel : il se forme au ras du sol. Par nuit claire et sans vent, le sol perd sa chaleur et refroidit la fine couche d'air qui le touche.",
            },
            {
              id: 'condense',
              text: "Quand cet air atteint son point de rosée, sa vapeur d'eau se condense autour de microscopiques poussières, formant des gouttelettes en suspension — le même processus que dans un nuage.",
            },
            {
              id: 'nuage-au-sol',
              text: "Le brouillard est donc littéralement un nuage au niveau du sol. On distingue d'ailleurs plusieurs types selon la cause du refroidissement : brouillard de rayonnement la nuit, ou brouillard d'advection quand un air humide passe sur une surface froide.",
            },
            {
              id: 'leve',
              text: "Il se dissipe quand l'air se réchauffe et repasse au-dessus du point de rosée : les gouttelettes s'évaporent. On dit que le brouillard « se lève », mais il ne monte pas — il se change simplement en vapeur invisible, là où il était.",
            },
          ],
        },
      },
    },
  },
};
