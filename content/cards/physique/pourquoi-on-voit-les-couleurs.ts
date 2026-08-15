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
    en: {
      title: {
        '3-5': 'The colours inside light',
        '6-8': 'Why we see colours',
        '9-12': 'Light, absorption and perception',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'lumiere-blanche',
              text: 'Sunlight looks all white, but really it is hiding every colour at once.',
            },
            {
              id: 'decomposition',
              text: 'When it goes through raindrops, the colours come apart and make a rainbow.',
            },
            {
              id: 'absorption',
              text: 'A red apple keeps every colour for itself, except red, which it sends back to your eyes.',
            },
            {
              id: 'noir',
              text: 'And in complete darkness, nothing has a colour any more. Without light, there is no colour at all.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'lumiere-blanche',
              text: 'White light is a mixture of every colour. Newton proved it with a prism, then put them back together to get white again.',
            },
            {
              id: 'decomposition',
              text: 'Each colour is bent slightly differently when it moves from one material into another. That is how a prism, or a raindrop, separates them and makes a rainbow appear.',
            },
            {
              id: 'absorption',
              text: 'An object does not make its own colour: it absorbs part of the light it receives and sends the rest back. A green leaf absorbs the red and the blue, and sends the green back to you.',
            },
            {
              id: 'noir',
              text: 'So the colour is not in the object alone: you need light, an object, and an eye. Change the light and the colour changes — which is why a piece of clothing looks different in a shop and in the sunshine, and why everything looks grey at night.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'lumiere-blanche',
              text: 'Visible light is an electromagnetic wave whose wavelength runs from about 380 nanometres for violet to 750 for red. White is not a colour in itself, but the sum of that spectrum.',
            },
            {
              id: 'decomposition',
              text: 'The refractive index of a material depends on the wavelength: this is dispersion. Each colour is therefore bent by its own angle. In a rainbow, the light is refracted as it enters the drop, reflected at the back, then refracted again on the way out — hence the arc, always seen at about 42 degrees from the point opposite the Sun.',
            },
            {
              id: 'absorption',
              text: 'The colour of an object results from selective absorption by its molecules: the absorbed wavelengths excite the electrons, the others are scattered. Chlorophyll absorbs red and blue, which is why leaves look green.',
            },
            {
              id: 'noir',
              text: 'Perception adds a further layer: our three types of retinal cone sample the spectrum, and the brain reconstructs the colour. That is why two different spectra can look identical — a screen only produces red, green and blue, and simulates all the rest. In dim light, only the rods work: they do not tell colours apart, and the world appears in shades of grey.',
            },
          ],
        },
      },
    },
  },
};
