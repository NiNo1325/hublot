import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : l'explication fausse la plus répandue est que les
 * phases seraient l'ombre de la Terre sur la Lune. C'est la définition d'une
 * éclipse, pas d'une phase. Les trois niveaux le disent, et le niveau 9-12
 * nomme explicitement la confusion.
 */
export const card: ScienceCard = {
  id: 'les-phases-de-la-lune',
  domainId: 'astronomie',
  animationId: 'phases-lune',
  thumbnail: '🌙',
  content: {
    fr: {
      title: {
        '3-5': 'La Lune qui change',
        '6-8': 'Pourquoi la Lune change de forme',
        '9-12': 'Les phases de la Lune',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'lune-eclairee',
              text: 'La Lune ne fait pas de lumière toute seule. C’est le soleil qui l’éclaire, comme une lampe.',
            },
            {
              id: 'moitie',
              text: "Le soleil éclaire toujours une moitié de la Lune. L'autre moitié reste dans le noir.",
            },
            {
              id: 'tour',
              text: "La Lune tourne autour de la Terre. Alors on ne voit pas toujours la même part du côté éclairé.",
            },
            {
              id: 'formes',
              text: "C'est pour ça qu'elle a l'air toute ronde, puis en croissant, puis presque cachée. Mais elle ne change jamais vraiment de forme.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'lune-eclairee',
              text: "La Lune ne produit aucune lumière : elle réfléchit celle du Soleil, comme un miroir un peu terne.",
            },
            {
              id: 'moitie',
              text: "Le Soleil éclaire en permanence une moitié de la Lune. Cette moitié éclairée existe toujours, même quand nous ne la voyons pas.",
            },
            {
              id: 'tour',
              text: "La Lune met environ un mois à faire le tour de la Terre. Selon l'endroit où elle se trouve, nous voyons cette moitié éclairée de face, de côté, ou presque pas du tout.",
            },
            {
              id: 'formes',
              text: "Beaucoup de gens croient que c'est l'ombre de la Terre qui cache la Lune. C'est faux : ça, c'est une éclipse, et c'est très rare. Les phases, elles, viennent seulement de notre point de vue qui change.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'lune-eclairee',
              text: "La Lune est un corps sombre : elle ne renvoie qu'environ douze pour cent de la lumière solaire qu'elle reçoit, à peu près comme de l'asphalte usé. Elle nous paraît brillante seulement par contraste avec le ciel nocturne.",
            },
            {
              id: 'moitie',
              text: "Le Soleil éclaire toujours exactement un hémisphère lunaire. Il n'existe donc pas de « face cachée » permanemment obscure : la face que nous ne voyons jamais connaît le jour et la nuit comme l'autre.",
            },
            {
              id: 'tour',
              text: "En vingt-neuf jours et demi environ, la Lune parcourt son orbite autour de la Terre. L'angle entre le Soleil, la Terre et la Lune change continûment, et avec lui la fraction de l'hémisphère éclairé qui nous est visible.",
            },
            {
              id: 'formes',
              text: "L'idée que les phases seraient l'ombre de la Terre est une confusion avec l'éclipse de Lune, qui ne survient que lors de certaines pleines lunes, quelques fois par an. Si les phases venaient d'une ombre, elle serait toujours circulaire — or le quartier montre une limite droite, incompatible avec une ombre sphérique.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The Moon that changes',
        '6-8': 'Why the Moon changes shape',
        '9-12': 'The phases of the Moon',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'lune-eclairee',
              text: 'The Moon makes no light of its own. It is the sun that lights it up, like a lamp.',
            },
            {
              id: 'moitie',
              text: 'The sun always lights up one half of the Moon. The other half stays in the dark.',
            },
            {
              id: 'tour',
              text: 'The Moon goes round the Earth. So we do not always see the same part of the bright side.',
            },
            {
              id: 'formes',
              text: 'That is why it looks all round, then like a crescent, then almost hidden. But it never really changes shape.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'lune-eclairee',
              text: 'The Moon makes no light at all: it reflects the Sun’s light, like a rather dull mirror.',
            },
            {
              id: 'moitie',
              text: 'The Sun lights up one half of the Moon at all times. That lit half always exists, even when we cannot see it.',
            },
            {
              id: 'tour',
              text: 'The Moon takes about a month to travel round the Earth. Depending on where it is, we see that lit half face on, from the side, or hardly at all.',
            },
            {
              id: 'formes',
              text: 'Many people think it is the Earth’s shadow that hides the Moon. That is wrong: that is an eclipse, and it is very rare. The phases come only from our point of view changing.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'lune-eclairee',
              text: 'The Moon is a dark body: it sends back only about twelve per cent of the sunlight it receives, roughly like worn asphalt. It looks bright to us only by contrast with the night sky.',
            },
            {
              id: 'moitie',
              text: 'The Sun always lights exactly one lunar hemisphere. There is therefore no permanently dark “far side”: the face we never see has day and night just like the other.',
            },
            {
              id: 'tour',
              text: 'In about twenty-nine and a half days, the Moon completes its orbit around the Earth. The angle between the Sun, the Earth and the Moon changes continuously, and with it the fraction of the lit hemisphere that we can see.',
            },
            {
              id: 'formes',
              text: 'The idea that the phases are the Earth’s shadow is a confusion with a lunar eclipse, which happens only at certain full moons, a few times a year. If the phases came from a shadow, that shadow would always be circular — yet the quarter moon shows a straight edge, which a spherical shadow cannot produce.',
            },
          ],
        },
      },
    },
  },
};
