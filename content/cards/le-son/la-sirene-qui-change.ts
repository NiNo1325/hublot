import type { ScienceCard } from '@/lib/types';

/**
 * Effet Doppler : la sirène émet toujours le même son, c'est le mouvement
 * relatif du véhicule qui fait paraître le son plus aigu à l'approche, puis
 * plus grave après le passage. Le conducteur n'y est pour rien.
 */
export const card: ScienceCard = {
  id: 'la-sirene-qui-change',
  domainId: 'le-son',
  animationId: 'la-sirene-qui-change',
  thumbnail: '🚑',
  content: {
    fr: {
      title: {
        '3-5': 'La sirène qui chante différemment',
        '6-8': 'La sirène qui change',
        '9-12': "L'effet Doppler : pourquoi la sirène change de son",
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Une ambulance arrive vers toi, sirène allumée.',
            },
            {
              id: 'deux',
              text: 'Devant elle, le son est tout serré : ça sonne aigu.',
            },
            {
              id: 'trois',
              text: 'Elle passe juste devant toi, vroum !',
            },
            {
              id: 'quatre',
              text: "Derrière elle, le son s'étire : ça sonne grave.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Une ambulance approche de toi à toute vitesse, sirène hurlante.',
            },
            {
              id: 'deux',
              text: 'Devant le véhicule, les ondes sonores se tassent les unes contre les autres : le son te paraît plus aigu.',
            },
            {
              id: 'trois',
              text: "Au moment où elle te dépasse, le son change brusquement.",
            },
            {
              id: 'quatre',
              text: "Derrière elle, les ondes s'étirent, plus espacées : le son te paraît plus grave. C'est ce changement qu'on entend, pas le conducteur qui baisse le volume.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Une ambulance se déplace vers toi en émettant un son de fréquence constante.',
            },
            {
              id: 'deux',
              text: "Comme le véhicule avance dans le sens des ondes qu'il émet, celles-ci s'écrasent les unes sur les autres devant lui : leur fréquence perçue augmente, le son semble plus aigu.",
            },
            {
              id: 'trois',
              text: 'Au passage du véhicule, la direction relative s\'inverse instantanément.',
            },
            {
              id: 'quatre',
              text: "Derrière l'ambulance qui s'éloigne, les ondes s'étirent et leur fréquence perçue diminue : le son semble plus grave. C'est l'effet Doppler, uniquement lié au mouvement relatif de la source ; la sirène elle-même ne change jamais de fréquence.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The siren that sings differently',
        '6-8': 'The siren that changes',
        '9-12': 'The Doppler effect: why a siren changes its sound',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'An ambulance comes towards you, siren wailing.',
            },
            {
              id: 'deux',
              text: 'In front of it, the sound is all squashed up: it sounds high.',
            },
            {
              id: 'trois',
              text: 'It goes right past you, vroom!',
            },
            {
              id: 'quatre',
              text: 'Behind it, the sound stretches out: it sounds low.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'An ambulance races towards you, siren screaming.',
            },
            {
              id: 'deux',
              text: 'In front of the vehicle, the sound waves pile up against each other: the sound seems higher to you.',
            },
            {
              id: 'trois',
              text: 'The moment it passes you, the sound changes all at once.',
            },
            {
              id: 'quatre',
              text: 'Behind it, the waves stretch out, further apart: the sound seems lower. That change is what you hear — not the driver turning the volume down.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'An ambulance moves towards you while giving out a sound of constant frequency.',
            },
            {
              id: 'deux',
              text: 'Because the vehicle travels in the same direction as the waves it emits, they bunch up in front of it: their frequency as you hear it rises, and the sound seems higher.',
            },
            {
              id: 'trois',
              text: 'As the vehicle goes past, the relative direction reverses instantly.',
            },
            {
              id: 'quatre',
              text: 'Behind the ambulance moving away, the waves stretch out and the frequency you hear falls: the sound seems lower. This is the Doppler effect, caused purely by the relative motion of the source; the siren itself never changes frequency.',
            },
          ],
        },
      },
    },
  },
};
