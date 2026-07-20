import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : un objet ne « contient » pas sa couleur. Il absorbe
 * certaines longueurs d'onde et renvoie les autres — ce qui explique qu'un
 * même objet change d'aspect sous une autre lumière, et pourquoi tout paraît
 * gris dans la pénombre.
 */
export const card: ScienceCard = {
  id: 'pourquoi-on-voit-les-couleurs',
  domainId: 'physique',
  animationId: 'couleurs',
  thumbnail: '🌈',
  content: {
    fr: {
      title: {
        '3-5': "Les couleurs de la lumière",
        '6-8': 'Pourquoi on voit les couleurs',
        '9-12': 'Lumière, absorption et perception',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'lumiere-blanche',
              text: "La lumière du soleil a l'air toute blanche, mais elle cache en réalité toutes les couleurs à la fois.",
            },
            {
              id: 'decomposition',
              text: "Quand elle traverse des gouttes de pluie, les couleurs se séparent et forment un arc-en-ciel.",
            },
            {
              id: 'absorption',
              text: "Une pomme rouge garde toutes les couleurs pour elle, sauf le rouge, qu'elle renvoie vers tes yeux.",
            },
            {
              id: 'noir',
              text: "Et dans le noir complet, plus rien n'a de couleur. Sans lumière, il n'y a pas de couleur du tout.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'lumiere-blanche',
              text: "La lumière blanche est un mélange de toutes les couleurs. Newton l'a démontré avec un prisme, puis en les recombinant pour retrouver du blanc.",
            },
            {
              id: 'decomposition',
              text: "Chaque couleur est déviée un peu différemment en changeant de milieu. C'est ainsi qu'un prisme, ou une goutte de pluie, les sépare et fait apparaître un arc-en-ciel.",
            },
            {
              id: 'absorption',
              text: "Un objet ne fabrique pas sa couleur : il absorbe une partie des couleurs reçues et renvoie le reste. Une feuille verte absorbe le rouge et le bleu, et te renvoie le vert.",
            },
            {
              id: 'noir',
              text: "La couleur n'est donc pas dans l'objet seul : il faut de la lumière, un objet, et un œil. Change la lumière et la couleur change — c'est pourquoi un vêtement paraît différent en magasin et au soleil, et pourquoi tout semble gris la nuit.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'lumiere-blanche',
              text: "La lumière visible est une onde électromagnétique dont la longueur d'onde s'étend d'environ 380 nanomètres pour le violet à 750 pour le rouge. Le blanc n'est pas une couleur en soi, mais la somme de ce spectre.",
            },
            {
              id: 'decomposition',
              text: "L'indice de réfraction d'un milieu dépend de la longueur d'onde : c'est la dispersion. Chaque couleur est donc déviée d'un angle propre. Dans un arc-en-ciel, la lumière est réfractée en entrant dans la goutte, réfléchie au fond, puis réfractée en ressortant — d'où l'arc toujours observé à environ 42 degrés du point opposé au Soleil.",
            },
            {
              id: 'absorption',
              text: "La couleur d'un objet résulte de l'absorption sélective par ses molécules : les longueurs d'onde absorbées excitent les électrons, les autres sont diffusées. La chlorophylle absorbe le rouge et le bleu, d'où l'aspect vert des feuilles.",
            },
            {
              id: 'noir',
              text: "La perception ajoute une couche : nos trois types de cônes rétiniens échantillonnent le spectre, et le cerveau reconstruit la couleur. C'est pourquoi deux spectres différents peuvent paraître identiques — un écran ne produit que du rouge, du vert et du bleu, et simule tout le reste. Dans la pénombre, seuls les bâtonnets fonctionnent : ils ne distinguent pas les couleurs, et le monde apparaît en nuances de gris.",
            },
          ],
        },
      },
    },
  },
};
