import type { ScienceCard } from '@/lib/types';

/**
 * La coupe brise les cellules de l'oignon et libère une substance soufrée qui
 * se transforme en gaz irritant. Ce n'est ni l'odeur ni le jus qui piquent
 * les yeux : le gaz n'existe qu'à partir du moment où l'oignon est entamé.
 */
export const card: ScienceCard = {
  id: 'pourquoi-loignon-fait-pleurer',
  domainId: 'la-cuisine',
  animationId: 'pourquoi-loignon-fait-pleurer',
  thumbnail: '🧅',
  content: {
    fr: {
      title: {
        '3-5': "Pourquoi l'oignon fait pleurer",
        '6-8': "Pourquoi l'oignon fait pleurer",
        '9-12': "Pourquoi l'oignon fait pleurer",
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Quand tu coupes un oignon, tu casses ses petites cellules.',
            },
            {
              id: 'deux',
              text: 'Elles laissent échapper quelque chose d\'invisible.',
            },
            {
              id: 'trois',
              text: 'Ça monte tout doucement jusqu\'à tes yeux.',
            },
            {
              id: 'quatre',
              text: 'Alors tes yeux font des larmes pour se laver.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Quand tu coupes un oignon, le couteau casse des milliers de ses toutes petites cellules.',
            },
            {
              id: 'deux',
              text: 'Ces cellules libèrent une substance qui contient du soufre.',
            },
            {
              id: 'trois',
              text: 'Cette substance se transforme aussitôt en un gaz invisible, qui monte dans l\'air vers ton visage.',
            },
            {
              id: 'quatre',
              text: 'Quand ce gaz touche tes yeux, ils fabriquent des larmes pour se rincer et se protéger.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Le couteau rompt les cellules de l\'oignon, séparant des composés qui restaient jusque-là bien à l\'écart les uns des autres.',
            },
            {
              id: 'deux',
              text: 'Leur rencontre déclenche une réaction chimique qui produit une substance soufrée volatile.',
            },
            {
              id: 'trois',
              text: 'Ce gaz s\'échappe et atteint la surface humide de tes yeux, où il se transforme en une substance légèrement irritante.',
            },
            {
              id: 'quatre',
              text: 'Le réflexe lacrymal se déclenche alors pour diluer et évacuer cette irritation : ce n\'est ni l\'odeur ni le jus qui piquent, mais un gaz créé seulement au moment de la coupe.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Why onions make you cry',
        '6-8': 'Why onions make you cry',
        '9-12': 'Why onions make you cry',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'When you cut an onion, you break its little cells.',
            },
            {
              id: 'deux',
              text: 'They let something invisible escape.',
            },
            {
              id: 'trois',
              text: 'It floats gently up to your eyes.',
            },
            {
              id: 'quatre',
              text: 'So your eyes make tears to wash themselves.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'When you cut an onion, the knife breaks thousands of its very tiny cells.',
            },
            {
              id: 'deux',
              text: 'These cells release a substance that contains sulphur.',
            },
            {
              id: 'trois',
              text: 'That substance turns straight away into an invisible gas, which drifts up through the air towards your face.',
            },
            {
              id: 'quatre',
              text: 'When this gas touches your eyes, they make tears to rinse themselves and stay protected.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'The knife ruptures the onion’s cells, freeing compounds that had until then been kept well apart from one another.',
            },
            {
              id: 'deux',
              text: 'Their meeting sets off a chemical reaction that produces a volatile sulphur compound.',
            },
            {
              id: 'trois',
              text: 'This gas escapes and reaches the moist surface of your eyes, where it turns into a mildly irritating substance.',
            },
            {
              id: 'quatre',
              text: 'The tear reflex is then triggered to dilute and flush away that irritation: it is neither the smell nor the juice that stings, but a gas created only at the moment of cutting.',
            },
          ],
        },
      },
    },
  },
};
