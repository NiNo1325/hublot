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
    en: {
      title: {
        '3-5': 'The pitch-black hole in the sky',
        '6-8': 'What a black hole is',
        '9-12': 'Black holes and the event horizon',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'etoile-morte',
              text: 'When a very big star comes to the end of its life, it shrinks in on itself.',
            },
            {
              id: 'lumiere',
              text: 'It gets so squashed that even light cannot come out any more. So we see nothing: it is all black.',
            },
            {
              id: 'pas-aspirateur',
              text: 'It is not a giant vacuum cleaner! You have to go very, very close to get caught.',
            },
            {
              id: 'invisible',
              text: 'Since we cannot see it, we spot it thanks to the stars that go round it.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'etoile-morte',
              text: 'A black hole is born from the death of a star much bigger than the Sun. As it goes out, it collapses and all its matter is packed into a tiny space.',
            },
            {
              id: 'lumiere',
              text: 'Gravity there becomes so strong that nothing can escape, not even light — the fastest thing in the universe. That is why it is perfectly black.',
            },
            {
              id: 'pas-aspirateur',
              text: 'Watch out for a false idea: a black hole does not suck everything in like a vacuum cleaner. If the Sun became a black hole of the same mass, the Earth would carry on orbiting exactly as before. You have to pass very close to be trapped.',
            },
            {
              id: 'invisible',
              text: 'A black hole is invisible by definition. We work out that it is there from what it does around it: stars whirling very fast, or matter that heats up and glows as it falls towards it.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'etoile-morte',
              text: 'A very massive star, at the end of its life, can no longer fight its own gravity: its core collapses. If enough mass remains, nothing stops the collapse, and the matter concentrates into a point of extreme density.',
            },
            {
              id: 'lumiere',
              text: 'Around it lies a boundary called the event horizon. Inside it, the speed needed to escape exceeds the speed of light: and nothing travels faster. Everything that crosses that horizon is lost to the outside world.',
            },
            {
              id: 'pas-aspirateur',
              text: 'A black hole’s gravity is nothing special at a distance: it follows the same law as that of any body of the same mass. Replacing the Sun with a solar-mass black hole would leave the orbits untouched. What makes it dangerous is that you can get enormously close to it, since it has no surface.',
            },
            {
              id: 'invisible',
              text: 'They are detected indirectly: by the rapid motion of stars around an invisible point, by the radiation from the disc of matter feeding them, or by the gravitational waves given off when two black holes merge. In 2019 a first image was even obtained, that of the shadow of the black hole at the centre of a galaxy.',
            },
          ],
        },
      },
    },
  },
};
