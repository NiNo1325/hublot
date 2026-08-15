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
    en: {
      title: {
        '3-5': 'The little lights in the sky',
        '6-8': 'What a star is',
        '9-12': 'Stars, distances and light travel time',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'soleils',
              text: 'Every star you see at night is a sun, like ours. They are just very, very far away.',
            },
            {
              id: 'notre-soleil',
              text: 'Our sun looks huge because it is the closest one to us. The others look tiny.',
            },
            {
              id: 'voyage',
              text: 'Their light travels for years before it reaches your eyes.',
            },
            {
              id: 'passe',
              text: 'So when you look at a star, you see it as it was a very long time ago.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'soleils',
              text: 'A star is an enormous ball of gas that makes its own light and its own heat, thanks to the reactions going on in its core.',
            },
            {
              id: 'notre-soleil',
              text: 'The Sun is a perfectly ordinary star. It looks huge to us only because it is close by: the next star along is more than two hundred thousand times further away.',
            },
            {
              id: 'voyage',
              text: 'Light is the fastest thing in the universe: three hundred thousand kilometres per second. It would take a little over a second to go from the Earth to the Moon.',
            },
            {
              id: 'passe',
              text: 'Even at that speed, it takes more than four years to come from the nearest star. So you see that star as it was four years ago. Looking at the sky is looking at the past.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'soleils',
              text: 'A star is a sphere of plasma held together by its own gravity, in which nuclear fusion turns hydrogen into helium. That reaction supplies the energy it radiates and stops the star collapsing in on itself.',
            },
            {
              id: 'notre-soleil',
              text: 'The Sun is a medium-sized yellow dwarf. Stars differ in their mass, which sets their colour, their lifespan and their end: the most massive burn fast and explode as supernovae, the smallest live for hundreds of billions of years.',
            },
            {
              id: 'voyage',
              text: 'Distances are measured in light years: the distance light covers in one year, about nine thousand five hundred billion kilometres. Proxima Centauri is 4.2 light years away.',
            },
            {
              id: 'passe',
              text: 'To observe is therefore to look back in time. Distant galaxies appear to us as they were billions of years ago. Some of the stars visible tonight may already have ceased to exist — their light, though, carries on its journey.',
            },
          ],
        },
      },
    },
  },
};
