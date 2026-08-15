import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : « agrandis, améliore » n'existe pas. Agrandir
 * n'invente aucune information, et les modèles récents qui semblent y arriver
 * ne restaurent rien — ils fabriquent un détail plausible, ce qui n'est pas la
 * même chose. La carte s'appuie sur la grille de pixels déjà posée par
 * « comment marche un écran », sans la réexpliquer.
 */
export const card: ScienceCard = {
  id: 'pourquoi-une-photo-devient-floue',
  domainId: 'informatique',
  animationId: 'zoom-pixels',
  thumbnail: '🔍',
  content: {
    fr: {
      title: {
        '3-5': 'La photo qui fait des carrés',
        '6-8': 'Pourquoi on ne peut pas « améliorer » une photo',
        '9-12': 'Zoomer n’invente pas d’information',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'zoomer',
              text: 'Tu agrandis une photo sur l’écran. Encore, et encore.',
            },
            {
              id: 'grille',
              text: 'Et là, tu vois des carrés ! La photo était faite de tout petits carrés de couleur.',
            },
            {
              id: 'inventer',
              text: 'Si un détail n’a pas été photographié, il n’est nulle part. On ne peut pas le faire apparaître.',
            },
            {
              id: 'compresser',
              text: 'Alors pour bien voir les petites choses, il faut prendre la photo de tout près.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'zoomer',
              text: 'Dans les films, un policier lance « agrandis, améliore », et le visage flou devient net. Cela n’existe pas.',
            },
            {
              id: 'grille',
              text: 'Une photo numérique est une grille de nombres, un par petit carré de couleur. Agrandir ne fait qu’étirer ces carrés : l’écran te montre exactement les mêmes nombres, en plus gros.',
            },
            {
              id: 'inventer',
              text: 'Ce qui n’a pas été enregistré au moment de la prise de vue n’est stocké nulle part. Aucun logiciel ne peut aller le rechercher, parce qu’il n’y a rien à rechercher.',
            },
            {
              id: 'compresser',
              text: 'Il y a pire. Pour tenir moins de place, un fichier JPEG jette volontairement des détails que l’œil remarque peu. Et chaque fois que l’image est réenregistrée, un peu plus disparaît — définitivement.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'zoomer',
              text: '« Zoom and enhance » est une invention de scénaristes. Agrandir une image matricielle ne crée aucune information : l’algorithme ne fait qu’interpoler entre des pixels existants.',
            },
            {
              id: 'grille',
              text: 'Une image est un tableau de valeurs, une par pixel et par canal de couleur. Sa définition fixe une limite dure à ce qu’elle contient. Le théorème d’échantillonnage l’énonce : au-delà d’une certaine finesse, le détail n’a jamais été capté, et rien ne permet de le reconstituer.',
            },
            {
              id: 'inventer',
              text: 'Les modèles d’intelligence artificielle semblent contredire cela. Ils ne restaurent pourtant rien : ils fabriquent un détail plausible, appris sur d’autres images. Le résultat est net et peut être entièrement faux. Un visage reconstitué de la sorte est une hypothèse, jamais une preuve.',
            },
            {
              id: 'compresser',
              text: 'S’y ajoute la compression avec pertes. Le JPEG découpe l’image en blocs, la convertit en fréquences et supprime celles que l’œil perçoit mal. L’opération est irréversible : réenregistrer plusieurs fois dégrade cumulativement, ce qu’on appelle la perte de génération.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The photo that turns into squares',
        '6-8': 'Why you cannot “enhance” a photo',
        '9-12': 'Zooming in invents no information',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'zoomer',
              text: 'You make a photo bigger on the screen. Bigger, and bigger.',
            },
            {
              id: 'grille',
              text: 'And there you see squares! The photo was made of tiny coloured squares.',
            },
            {
              id: 'inventer',
              text: 'If a little thing was not photographed, it is nowhere at all. You cannot make it appear.',
            },
            {
              id: 'compresser',
              text: 'So to see tiny things properly, you have to take the photo from up close.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'zoomer',
              text: 'In films, a detective calls out “zoom in, enhance”, and the blurry face turns sharp. That does not exist.',
            },
            {
              id: 'grille',
              text: 'A digital photo is a grid of numbers, one per little coloured square. Enlarging it only stretches those squares: the screen shows you exactly the same numbers, bigger.',
            },
            {
              id: 'inventer',
              text: 'Whatever was not recorded when the picture was taken is stored nowhere. No software can go and fetch it, because there is nothing to fetch.',
            },
            {
              id: 'compresser',
              text: 'It gets worse. To take up less room, a JPEG file deliberately throws away details the eye barely notices. And each time the image is saved again, a little more disappears — for good.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'zoomer',
              text: '“Zoom and enhance” is an invention of scriptwriters. Enlarging a raster image creates no information: the algorithm merely interpolates between existing pixels.',
            },
            {
              id: 'grille',
              text: 'An image is a table of values, one per pixel and per colour channel. Its resolution sets a hard limit on what it holds. The sampling theorem states as much: beyond a certain fineness, the detail was never captured, and nothing can bring it back.',
            },
            {
              id: 'inventer',
              text: 'Artificial intelligence models appear to contradict this. Yet they restore nothing: they manufacture a plausible detail, learnt from other images. The result is sharp and can be entirely false. A face rebuilt this way is a hypothesis, never a proof.',
            },
            {
              id: 'compresser',
              text: 'On top of that comes lossy compression. JPEG cuts the image into blocks, converts it into frequencies and removes those the eye perceives poorly. The operation is irreversible: saving several times degrades it cumulatively, which is known as generation loss.',
            },
          ],
        },
      },
    },
  },
};
