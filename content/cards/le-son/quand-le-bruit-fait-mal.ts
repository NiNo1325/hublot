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
    en: {
      title: {
        '3-5': 'The noise that hurts your ears',
        '6-8': 'When noise hurts',
        '9-12': 'Why noise damages the ear for good',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'A very, very loud noise makes big vibrations.',
            },
            {
              id: 'deux',
              text: 'They shake the little snail inside your ear far too hard.',
            },
            {
              id: 'trois',
              text: 'Tiny hairs inside it can break.',
            },
            {
              id: 'quatre',
              text: 'They never grow back: you have to protect your ears!',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'A very loud sound makes wide, powerful vibrations.',
            },
            {
              id: 'deux',
              text: 'As they come into the ear, they shake the cochlea violently.',
            },
            {
              id: 'trois',
              text: 'Inside it, tiny hair cells, which you need in order to hear, can then be damaged or broken.',
            },
            {
              id: 'quatre',
              text: 'The trouble is that they never grow back: that is why you have to protect your ears from sounds that are too loud, like concerts or fireworks close up.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'A very intense sound means unusually wide variations in pressure.',
            },
            {
              id: 'deux',
              text: 'These excessive vibrations violently shake the fluid held inside the cochlea.',
            },
            {
              id: 'trois',
              text: 'That turbulence can damage, or even destroy, the hair cells lining the organ, the ones that turn movement into a nerve signal.',
            },
            {
              id: 'quatre',
              text: 'In humans, these cells do not grow back: their loss is permanent, which makes noise-induced hearing loss irreversible and is the reason ear protection matters.',
            },
          ],
        },
      },
    },
  },
};
