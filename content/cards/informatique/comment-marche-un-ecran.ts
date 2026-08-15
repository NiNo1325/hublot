import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : un écran ne contient pas de la peinture de toutes les
 * couleurs. Il n'émet que du rouge, du vert et du bleu, et fabrique toutes les
 * autres couleurs en les mélangeant. Le jaune d'un écran, ce n'est pas du
 * jaune : c'est du rouge et du vert allumés côte à côte.
 */
export const card: ScienceCard = {
  id: 'comment-marche-un-ecran',
  domainId: 'informatique',
  animationId: 'pixels',
  thumbnail: '📺',
  content: {
    fr: {
      title: {
        '3-5': 'Les petits points de l’écran',
        '6-8': 'Comment marche un écran',
        '9-12': 'Pixels et synthèse des couleurs',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'points',
              text: 'Une image sur un écran est faite de milliers de tout petits points, trop petits pour être vus.',
            },
            {
              id: 'trois-couleurs',
              text: 'Chaque point ne connaît que trois lumières : le rouge, le vert et le bleu.',
            },
            {
              id: 'melange',
              text: 'En les allumant plus ou moins fort, le point peut faire toutes les couleurs que tu vois.',
            },
            {
              id: 'loupe',
              text: 'Si tu regardes l’écran avec une grosse loupe, tu découvres ces petits points colorés.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'points',
              text: 'Une image d’écran est une grille de minuscules carrés lumineux, les pixels. Un téléphone en compte plusieurs millions, si serrés qu’on les prend pour une image continue.',
            },
            {
              id: 'trois-couleurs',
              text: 'Chaque pixel est fait de trois petites lampes : une rouge, une verte, une bleue. Ce sont les seules couleurs que l’écran sait produire.',
            },
            {
              id: 'melange',
              text: 'Toutes les autres couleurs sont fabriquées en mélangeant ces trois lumières. Rouge et vert allumés ensemble donnent du jaune. Les trois à fond donnent du blanc, les trois éteintes du noir. Le jaune de ton écran n’est donc pas du jaune : c’est du rouge et du vert côte à côte que ton œil mélange.',
            },
            {
              id: 'loupe',
              text: 'Avec une loupe puissante posée sur l’écran, l’illusion se casse : tu vois les trois lampes colorées de chaque pixel, séparées.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'points',
              text: 'Un écran affiche une image matricielle : une grille de pixels. Sa définition se compte en millions de pixels, chacun repéré par sa position et sa couleur.',
            },
            {
              id: 'trois-couleurs',
              text: 'Chaque pixel se compose de trois sous-pixels rouge, vert et bleu. C’est la synthèse additive des couleurs, distincte de la peinture : on ajoute des lumières à partir du noir, au lieu de retirer de la lumière à partir du blanc.',
            },
            {
              id: 'melange',
              text: 'L’intensité de chaque sous-pixel est codée par un nombre, souvent de zéro à deux cent cinquante-cinq. Trois nombres suffisent donc à définir une couleur, soit environ seize millions de combinaisons. Ton œil, incapable de distinguer les sous-pixels, fond le tout en une seule teinte.',
            },
            {
              id: 'loupe',
              text: 'Ce procédé exploite une limite de la vision : au-delà d’une certaine finesse, l’œil ne sépare plus les détails. C’est aussi ce qui permet à une photo imprimée, faite de points d’encre, de paraître continue. L’écran ne montre jamais la couleur elle-même — il la simule à partir de trois primaires.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The little dots on the screen',
        '6-8': 'How a screen works',
        '9-12': 'Pixels and additive colour',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'points',
              text: 'A picture on a screen is made of thousands of tiny dots, far too small to see.',
            },
            {
              id: 'trois-couleurs',
              text: 'Each dot knows only three lights: red, green and blue.',
            },
            {
              id: 'melange',
              text: 'By turning them up or down, the dot can make every colour you see.',
            },
            {
              id: 'loupe',
              text: 'If you look at the screen with a big magnifying glass, you find these little coloured dots.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'points',
              text: 'A picture on a screen is a grid of tiny glowing squares, the pixels. A phone has several million of them, packed so tightly that we take them for one continuous image.',
            },
            {
              id: 'trois-couleurs',
              text: 'Each pixel is made of three little lamps: a red one, a green one and a blue one. Those are the only colours a screen knows how to produce.',
            },
            {
              id: 'melange',
              text: 'Every other colour is made by mixing those three lights. Red and green lit together give yellow. All three at full give white, all three off give black. So the yellow on your screen is not yellow at all: it is red and green side by side, which your eye mixes.',
            },
            {
              id: 'loupe',
              text: 'Hold a strong magnifying glass against the screen and the illusion breaks: you see the three coloured lamps of each pixel, quite separate.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'points',
              text: 'A screen displays a raster image: a grid of pixels. Its resolution is counted in millions of pixels, each one identified by its position and its colour.',
            },
            {
              id: 'trois-couleurs',
              text: 'Each pixel is made up of three subpixels: red, green and blue. This is additive colour mixing, quite unlike paint: you add lights starting from black, instead of taking light away starting from white.',
            },
            {
              id: 'melange',
              text: 'The intensity of each subpixel is coded as a number, often from zero to two hundred and fifty-five. Three numbers are therefore enough to define a colour, giving about sixteen million combinations. Your eye, unable to separate the subpixels, blends the lot into a single shade.',
            },
            {
              id: 'loupe',
              text: 'The method exploits a limit of vision: beyond a certain fineness, the eye no longer separates details. It is also what allows a printed photograph, made of dots of ink, to look continuous. A screen never shows the colour itself — it simulates it from three primaries.',
            },
          ],
        },
      },
    },
  },
};
