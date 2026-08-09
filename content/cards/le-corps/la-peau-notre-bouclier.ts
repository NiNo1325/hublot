import type { ScienceCard } from '@/lib/types';

export const card: ScienceCard = {
  id: 'la-peau-notre-bouclier',
  domainId: 'le-corps',
  animationId: 'la-peau-notre-bouclier',
  thumbnail: '💦',
  content: {
    fr: {
      title: {
        '3-5': 'Notre peau nous protège',
        '6-8': 'La peau, notre bouclier',
        '9-12': 'La peau : bouclier et régulateur de chaleur',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Ta peau forme un bouclier tout autour de toi : elle empêche les microbes d’entrer.',
            },
            {
              id: 'deux',
              text: 'Quand tu as chaud, ta peau se couvre de petites gouttes de sueur.',
            },
            {
              id: 'trois',
              text: 'Ces gouttes s’envolent doucement dans l’air.',
            },
            {
              id: 'quatre',
              text: 'En s’envolant, elles emportent un peu de chaleur, et ça te rafraîchit.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Ta peau agit comme un bouclier : sa surface empêche la plupart des microbes de pénétrer dans ton corps.',
            },
            {
              id: 'deux',
              text: 'Quand il fait chaud ou que tu fais du sport, de minuscules glandes fabriquent de la sueur qui perle sur ta peau.',
            },
            {
              id: 'trois',
              text: 'Cette sueur s’évapore, c’est-à-dire qu’elle se transforme en vapeur invisible et s’envole dans l’air.',
            },
            {
              id: 'quatre',
              text: 'Ce passage de liquide à vapeur absorbe de la chaleur : ta peau se refroidit. Transpirer n’est donc pas sale, c’est ta meilleure climatisation naturelle.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'La peau constitue une barrière physique et chimique qui empêche la plupart des microbes et substances extérieures de pénétrer dans l’organisme.',
            },
            {
              id: 'deux',
              text: 'Lorsque la température du corps s’élève, des millions de glandes sudoripares sécrètent de la sueur, un liquide composé surtout d’eau et de sels minéraux.',
            },
            {
              id: 'trois',
              text: 'Au contact de l’air, l’eau de la sueur s’évapore, c’est-à-dire qu’elle passe de l’état liquide à l’état gazeux.',
            },
            {
              id: 'quatre',
              text: 'Ce changement d’état consomme de l’énergie, puisée dans la chaleur de la peau, qui se refroidit en conséquence. Loin d’être un signe de saleté, la transpiration est un mécanisme indispensable de régulation de la température corporelle.',
            },
          ],
        },
      },
    },
  },
};
