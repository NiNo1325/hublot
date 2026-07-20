import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : une expérience que les enfants font vraiment. Deux
 * choses à ne pas laisser croire — que ça « explose » (c'est une simple
 * effervescence, sans danger), et que la mousse serait de la lave. On en
 * profite pour poser la différence entre mélanger et transformer.
 */
export const card: ScienceCard = {
  id: 'le-volcan-de-vinaigre',
  domainId: 'chimie',
  animationId: 'reaction-chimique',
  thumbnail: '🌋',
  content: {
    fr: {
      title: {
        '3-5': 'La mousse qui déborde',
        '6-8': 'Le volcan de vinaigre',
        '9-12': 'Une réaction chimique',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'melange',
              text: 'On met une poudre blanche au fond d’un pot, et on verse du vinaigre dessus.',
            },
            {
              id: 'reaction',
              text: "Tout de suite, ça se met à faire des bulles, avec un petit bruit qui pétille.",
            },
            {
              id: 'gaz',
              text: "Les bulles sont remplies d'un gaz tout neuf, qui n'était pas là avant. C'est le mélange qui l'a fabriqué.",
            },
            {
              id: 'mousse',
              text: "Il y a tellement de bulles qu'elles montent et débordent du pot, comme une mousse. Ce n'est pas chaud, et ça ne fait aucun mal.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'melange',
              text: "La poudre blanche s'appelle le bicarbonate de soude. Le vinaigre, lui, est un liquide acide. Séparément, ni l'un ni l'autre ne fait de bulles.",
            },
            {
              id: 'reaction',
              text: "Dès qu'ils se rencontrent, ils réagissent ensemble et se transforment. Ce n'est pas comme mélanger du sable et de l'eau, où chacun reste ce qu'il était.",
            },
            {
              id: 'gaz',
              text: "Cette transformation fabrique un gaz : le dioxyde de carbone, celui-là même que tu expires en respirant. Chaque bulle en est remplie.",
            },
            {
              id: 'mousse',
              text: "Le gaz se forme si vite qu'il pousse le liquide vers le haut et le fait déborder. La mousse n'est ni chaude ni dangereuse — c'est simplement du liquide plein de bulles.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'melange',
              text: "Le bicarbonate de sodium est une base ; le vinaigre contient de l'acide acétique. Une réaction acide-base se produit dès leur mise en contact.",
            },
            {
              id: 'reaction',
              text: "C'est une transformation chimique, et non un simple mélange : les atomes se réorganisent et forment de nouvelles substances. Impossible de récupérer le bicarbonate et le vinaigre de départ, contrairement à du sel dissous dans l'eau, qu'une évaporation suffit à séparer.",
            },
            {
              id: 'gaz',
              text: "La réaction produit de l'eau, de l'acétate de sodium dissous, et du dioxyde de carbone gazeux. Ce gaz, invisible et peu soluble, s'échappe sous forme de bulles.",
            },
            {
              id: 'mousse',
              text: "Le volume occupé par un gaz est bien supérieur à celui des réactifs solides et liquides : c'est cette expansion brutale qui provoque le débordement. Rien à voir avec un volcan réel, où c'est de la roche fondue qui remonte sous la pression.",
            },
          ],
        },
      },
    },
  },
};
