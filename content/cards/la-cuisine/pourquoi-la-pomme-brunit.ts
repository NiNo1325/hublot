import type { ScienceCard } from '@/lib/types';

/**
 * Le contact avec l'air oxyde des composés de la chair de pomme et la fait
 * brunir : ce n'est pas un signe de pourriture. Le jus de citron ralentit la
 * réaction, il ne l'empêche pas totalement.
 */
export const card: ScienceCard = {
  id: 'pourquoi-la-pomme-brunit',
  domainId: 'la-cuisine',
  animationId: 'pourquoi-la-pomme-brunit',
  thumbnail: '🍎',
  content: {
    fr: {
      title: {
        '3-5': 'Pourquoi la pomme devient marron',
        '6-8': 'Pourquoi la pomme coupée brunit',
        '9-12': 'Pourquoi la pomme coupée brunit',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Tu coupes la pomme avec un couteau.',
            },
            {
              id: 'deux',
              text: 'L\'intérieur touche l\'air pour la première fois.',
            },
            {
              id: 'trois',
              text: 'Il devient tout marron petit à petit.',
            },
            {
              id: 'quatre',
              text: 'Un peu de jus de citron ralentit ça.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Quand tu coupes une pomme, sa chair blanche se retrouve à l\'air libre.',
            },
            {
              id: 'deux',
              text: 'Des substances de la pomme rencontrent alors l\'oxygène de l\'air.',
            },
            {
              id: 'trois',
              text: 'Cette rencontre déclenche une réaction qui fabrique une couleur marron.',
            },
            {
              id: 'quatre',
              text: 'Verser un peu de jus de citron ralentit cette réaction, la pomme reste claire plus longtemps.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'La chair de la pomme contient des enzymes et des composés phénoliques, séparés dans des cellules intactes.',
            },
            {
              id: 'deux',
              text: 'La coupe brise les cellules et met ces composés en contact avec l\'oxygène de l\'air.',
            },
            {
              id: 'trois',
              text: 'Les enzymes catalysent alors leur oxydation, ce qui produit des pigments bruns.',
            },
            {
              id: 'quatre',
              text: 'L\'acidité du citron ralentit ces enzymes, ce qui retarde le brunissement : la pomme n\'est absolument pas pourrie, juste oxydée.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Why the apple turns brown',
        '6-8': 'Why a cut apple turns brown',
        '9-12': 'Why a cut apple turns brown',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'You cut the apple with a knife.',
            },
            {
              id: 'deux',
              text: 'The inside touches the air for the very first time.',
            },
            {
              id: 'trois',
              text: 'Little by little, it goes all brown.',
            },
            {
              id: 'quatre',
              text: 'A little lemon juice slows that down.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'When you cut an apple, its white flesh is suddenly out in the open air.',
            },
            {
              id: 'deux',
              text: 'Substances inside the apple then meet the oxygen in the air.',
            },
            {
              id: 'trois',
              text: 'That meeting sets off a reaction which makes a brown colour.',
            },
            {
              id: 'quatre',
              text: 'Pouring on a little lemon juice slows this reaction down, so the apple stays pale for longer.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Apple flesh contains enzymes and phenolic compounds, kept apart from each other inside intact cells.',
            },
            {
              id: 'deux',
              text: 'Cutting breaks those cells open and brings the compounds into contact with the oxygen in the air.',
            },
            {
              id: 'trois',
              text: 'The enzymes then catalyse their oxidation, which produces brown pigments.',
            },
            {
              id: 'quatre',
              text: 'The acidity of lemon slows those enzymes down and delays the browning: the apple is not rotten at all, simply oxidised.',
            },
          ],
        },
      },
    },
  },
};
