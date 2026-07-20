import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : regarder le ciel, c'est regarder le passé. L'idée est
 * spectaculaire, exacte, et accessible dès six ans — la lumière met du temps à
 * nous parvenir.
 */
export const card: ScienceCard = {
  id: 'les-etoiles',
  domainId: 'astronomie',
  animationId: 'etoiles',
  thumbnail: '⭐',
  content: {
    fr: {
      title: {
        '3-5': 'Les petites lumières du ciel',
        '6-8': "Qu'est-ce qu'une étoile",
        '9-12': 'Étoiles, distances et temps-lumière',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'soleils',
              text: "Chaque étoile que tu vois la nuit est un soleil, comme le nôtre. Elles sont juste très très loin.",
            },
            {
              id: 'notre-soleil',
              text: "Notre soleil paraît énorme parce qu'il est le plus proche de nous. Les autres semblent minuscules.",
            },
            {
              id: 'voyage',
              text: "Leur lumière voyage pendant des années avant d'arriver dans tes yeux.",
            },
            {
              id: 'passe',
              text: "Alors quand tu regardes une étoile, tu la vois telle qu'elle était il y a très longtemps.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'soleils',
              text: "Une étoile est une immense boule de gaz qui produit sa propre lumière et sa propre chaleur, grâce aux réactions qui se déroulent en son cœur.",
            },
            {
              id: 'notre-soleil',
              text: "Le Soleil est une étoile parfaitement ordinaire. Il nous paraît immense uniquement parce qu'il est proche : l'étoile suivante est plus de deux cent mille fois plus éloignée.",
            },
            {
              id: 'voyage',
              text: "La lumière est ce qui va le plus vite dans l'univers : trois cent mille kilomètres par seconde. Elle mettrait un peu plus d'une seconde pour aller de la Terre à la Lune.",
            },
            {
              id: 'passe',
              text: "Malgré cette vitesse, il lui faut plus de quatre ans pour venir de l'étoile la plus proche. Tu la vois donc telle qu'elle était il y a quatre ans. Regarder le ciel, c'est regarder le passé.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'soleils',
              text: "Une étoile est une sphère de plasma maintenue par sa propre gravité, où la fusion nucléaire transforme l'hydrogène en hélium. C'est cette réaction qui fournit l'énergie rayonnée et empêche l'étoile de s'effondrer sur elle-même.",
            },
            {
              id: 'notre-soleil',
              text: "Le Soleil est une naine jaune de taille moyenne. Les étoiles diffèrent par leur masse, ce qui détermine leur couleur, leur durée de vie et leur fin : les plus massives brûlent vite et explosent en supernova, les plus petites vivent des centaines de milliards d'années.",
            },
            {
              id: 'voyage',
              text: "On mesure les distances en années-lumière : la distance parcourue par la lumière en un an, soit environ neuf mille cinq cents milliards de kilomètres. Proxima Centauri est à 4,2 années-lumière.",
            },
            {
              id: 'passe',
              text: "Observer, c'est donc remonter le temps. Les galaxies lointaines nous apparaissent telles qu'elles étaient il y a des milliards d'années. Certaines étoiles visibles ce soir ont peut-être déjà cessé d'exister — leur lumière, elle, poursuit son trajet.",
            },
          ],
        },
      },
    },
  },
};
