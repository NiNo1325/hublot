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
  },
};
