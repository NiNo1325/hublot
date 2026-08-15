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
    en: {
      title: {
        '3-5': 'Our skin protects us',
        '6-8': 'Skin, our shield',
        '9-12': 'Skin: shield and heat regulator',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Your skin makes a shield all around you: it stops germs getting in.',
            },
            {
              id: 'deux',
              text: 'When you are hot, your skin gets covered in little drops of sweat.',
            },
            {
              id: 'trois',
              text: 'These drops slowly fly away into the air.',
            },
            {
              id: 'quatre',
              text: 'As they fly away, they carry off a bit of heat, and that cools you down.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Your skin works like a shield: its surface stops most germs getting into your body.',
            },
            {
              id: 'deux',
              text: 'When it is hot, or when you play sport, tiny glands make sweat that beads on your skin.',
            },
            {
              id: 'trois',
              text: 'This sweat evaporates — it turns into invisible vapour and flies off into the air.',
            },
            {
              id: 'quatre',
              text: 'Going from liquid to vapour soaks up heat: your skin cools down. So sweating is not dirty at all, it is your best natural air conditioning.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'The skin forms a physical and chemical barrier that stops most microbes and outside substances entering the body.',
            },
            {
              id: 'deux',
              text: 'When body temperature rises, millions of sweat glands release sweat, a liquid made up mainly of water and mineral salts.',
            },
            {
              id: 'trois',
              text: 'In contact with the air, the water in sweat evaporates: it passes from the liquid state to the gaseous state.',
            },
            {
              id: 'quatre',
              text: 'This change of state uses up energy, drawn from the heat of the skin, which cools down as a result. Far from being a sign of dirtiness, sweating is an essential mechanism for regulating body temperature.',
            },
          ],
        },
      },
    },
  },
};
