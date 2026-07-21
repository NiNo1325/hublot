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
  },
};
