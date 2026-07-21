import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : un trou noir n'est pas un aspirateur cosmique qui
 * avalerait tout. Sa gravité obéit aux mêmes règles que celle d'une étoile :
 * remplacer le Soleil par un trou noir de même masse ne changerait rien à
 * l'orbite des planètes. Ce qui le distingue, c'est sa densité, pas un pouvoir
 * d'aspiration.
 */
export const card: ScienceCard = {
  id: 'les-trous-noirs',
  domainId: 'astronomie',
  animationId: 'trou-noir',
  thumbnail: '🕳️',
  content: {
    fr: {
      title: {
        '3-5': 'Le trou tout noir du ciel',
        '6-8': "Qu'est-ce qu'un trou noir",
        '9-12': 'Trous noirs et horizon des événements',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'etoile-morte',
              text: 'Quand une très grosse étoile arrive au bout de sa vie, elle se ratatine sur elle-même.',
            },
            {
              id: 'lumiere',
              text: 'Elle devient si serrée que même la lumière ne peut plus en sortir. Alors on ne voit rien : c’est tout noir.',
            },
            {
              id: 'pas-aspirateur',
              text: 'Ce n’est pas un aspirateur géant ! Il faut s’approcher tout près pour être attrapé.',
            },
            {
              id: 'invisible',
              text: 'Comme on ne le voit pas, on le repère grâce aux étoiles qui tournent autour de lui.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'etoile-morte',
              text: 'Un trou noir naît de la mort d’une étoile bien plus grosse que le Soleil. En s’éteignant, elle s’effondre et toute sa matière se tasse dans un espace minuscule.',
            },
            {
              id: 'lumiere',
              text: 'La gravité y devient si intense que rien ne peut s’en échapper, pas même la lumière — la chose la plus rapide de l’univers. C’est pour cela qu’il est parfaitement noir.',
            },
            {
              id: 'pas-aspirateur',
              text: 'Attention à une idée fausse : un trou noir n’aspire pas tout comme un aspirateur. Si le Soleil devenait un trou noir de même masse, la Terre continuerait de tourner exactement pareil. Il faut passer très près pour être piégé.',
            },
            {
              id: 'invisible',
              text: 'Un trou noir est invisible par définition. On le devine à ce qu’il fait autour de lui : des étoiles qui tournoient très vite, ou de la matière qui chauffe et brille en tombant vers lui.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'etoile-morte',
              text: 'Une étoile très massive, en fin de vie, ne peut plus lutter contre sa propre gravité : son cœur s’effondre. Si la masse restante est suffisante, rien n’arrête l’effondrement, et la matière se concentre en un point de densité extrême.',
            },
            {
              id: 'lumiere',
              text: 'Autour, il existe une frontière appelée horizon des événements. En deçà, la vitesse nécessaire pour s’échapper dépasse celle de la lumière : or rien ne va plus vite. Tout ce qui franchit cet horizon est perdu pour l’extérieur.',
            },
            {
              id: 'pas-aspirateur',
              text: 'La gravité d’un trou noir n’a rien de spécial à distance : elle suit la même loi que celle de n’importe quel astre de même masse. Remplacer le Soleil par un trou noir solaire laisserait les orbites intactes. Ce qui le rend redoutable, c’est de pouvoir s’en approcher énormément, faute de surface.',
            },
            {
              id: 'invisible',
              text: 'On les détecte indirectement : par le mouvement rapide d’étoiles autour d’un point invisible, par le rayonnement du disque de matière qui les alimente, ou par les ondes gravitationnelles émises quand deux trous noirs fusionnent. En 2019, on en a même obtenu une première image, celle de l’ombre du trou noir central d’une galaxie.',
            },
          ],
        },
      },
    },
  },
};
