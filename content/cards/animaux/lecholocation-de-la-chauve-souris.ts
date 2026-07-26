import type { ScienceCard } from '@/lib/types';

/**
 * Idée reçue corrigée : « les chauves-souris sont aveugles ». En réalité, elles
 * voient très bien. Mais dans le noir, elles « voient avec le son » : elles
 * émettent des cris aigus, l'écho revient sur les obstacles et leur cerveau
 * reconstruit la scène. Cohérent avec « comment voyage le son » : le son est une
 * onde qui se propage et peut rebondir.
 */
export const card: ScienceCard = {
  id: 'lecholocation-de-la-chauve-souris',
  domainId: 'animaux',
  animationId: 'echolocation',
  thumbnail: '🦇',
  content: {
    fr: {
      title: {
        '3-5': 'La chauve-souris dans le noir',
        '6-8': "L'écholocation de la chauve-souris",
        '9-12': "L'écholocation de la chauve-souris",
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'voit',
              text: 'La chauve-souris a des yeux et elle voit très bien. Elle n’est pas aveugle !',
            },
            {
              id: 'cri',
              text: 'La nuit, dans le noir, elle pousse des petits cris très aigus.',
            },
            {
              id: 'echo',
              text: 'Le cri va taper sur un moustique, puis revient vers ses oreilles, comme un ballon qui rebondit.',
            },
            {
              id: 'image',
              text: 'Grâce à ça, elle sait où est le moustique, même sans le voir. Elle « voit » avec le son !',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'voit',
              text: 'On dit souvent « aveugle comme une chauve-souris ». C’est faux : la chauve-souris voit parfaitement avec ses yeux.',
            },
            {
              id: 'cri',
              text: 'Mais la nuit, dans l’obscurité totale, la vue ne suffit pas. Alors elle émet des cris très aigus, trop aigus pour nos oreilles.',
            },
            {
              id: 'echo',
              text: 'Ces sons se propagent, rebondissent sur un insecte ou un mur, et reviennent : c’est l’écho.',
            },
            {
              id: 'image',
              text: 'Plus l’écho met de temps à revenir, plus l’obstacle est loin. Son cerveau assemble tous ces échos et « dessine » ce qui l’entoure. C’est l’écholocation.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'voit',
              text: 'Contrairement au dicton, les chauves-souris ne sont pas aveugles : la plupart voient très bien. L’écholocation ne remplace pas la vue, elle la complète quand il fait trop noir.',
            },
            {
              id: 'cri',
              text: 'Elles émettent des ultrasons — des sons trop aigus pour l’oreille humaine — par bouffées, parfois des dizaines par seconde à l’approche d’une proie.',
            },
            {
              id: 'echo',
              text: 'Comme tout son, ces ondes se propagent dans l’air et rebondissent sur ce qu’elles rencontrent. Une partie revient vers la chauve-souris sous forme d’écho.',
            },
            {
              id: 'image',
              text: 'Le délai de retour donne la distance, l’intensité la taille, la direction la position. En analysant ces échos, le cerveau reconstruit une véritable image sonore de la scène — assez précise pour attraper un moustique en plein vol dans le noir absolu.',
            },
          ],
        },
      },
    },
  },
};
