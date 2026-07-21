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
  },
};
