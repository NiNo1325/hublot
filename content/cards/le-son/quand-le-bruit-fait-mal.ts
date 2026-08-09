import type { ScienceCard } from '@/lib/types';

/**
 * Les cellules ciliées de la cochlée ne se régénèrent pas chez l'humain : un
 * bruit trop fort peut donc les abîmer de façon définitive, d'où l'intérêt
 * des protections auditives.
 */
export const card: ScienceCard = {
  id: 'quand-le-bruit-fait-mal',
  domainId: 'le-son',
  animationId: 'quand-le-bruit-fait-mal',
  thumbnail: '🔇',
  content: {
    fr: {
      title: {
        '3-5': 'Le bruit qui fait mal aux oreilles',
        '6-8': 'Quand le bruit fait mal',
        '9-12': "Pourquoi le bruit abîme l'oreille pour de bon",
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Un bruit très très fort fait de grosses vibrations.',
            },
            {
              id: 'deux',
              text: 'Elles secouent trop fort le petit escargot de ton oreille.',
            },
            {
              id: 'trois',
              text: 'De minuscules poils, dedans, peuvent se casser.',
            },
            {
              id: 'quatre',
              text: "Ils ne repoussent jamais : il faut protéger ses oreilles !",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Un son très fort produit des vibrations amples et puissantes.',
            },
            {
              id: 'deux',
              text: "En entrant dans l'oreille, elles secouent violemment la cochlée.",
            },
            {
              id: 'trois',
              text: "À l'intérieur, de minuscules cellules ciliées, indispensables pour entendre, peuvent alors s'abîmer ou se casser.",
            },
            {
              id: 'quatre',
              text: "Le problème, c'est qu'elles ne repoussent jamais : c'est pour ça qu'il faut protéger ses oreilles des bruits trop forts, comme les concerts ou les feux d'artifice de près.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: "Un son très intense correspond à des variations de pression particulièrement amples.",
            },
            {
              id: 'deux',
              text: 'Ces vibrations excessives secouent violemment le liquide contenu dans la cochlée.',
            },
            {
              id: 'trois',
              text: "Cette agitation peut endommager, voire détruire, les cellules ciliées qui tapissent l'organe et qui transforment le mouvement en signal nerveux.",
            },
            {
              id: 'quatre',
              text: "Chez l'humain, ces cellules ne se régénèrent pas : leur perte est définitive, ce qui rend la perte auditive due au bruit irréversible et justifie les protections auditives.",
            },
          ],
        },
      },
    },
  },
};
