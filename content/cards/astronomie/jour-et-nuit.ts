import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : l'erreur courante est de laisser croire que le Soleil
 * tourne autour de la Terre, ou qu'il « s'en va » la nuit. Les trois niveaux
 * disent explicitement que c'est la Terre qui tourne et que le Soleil, lui,
 * ne bouge pas.
 */
export const card: ScienceCard = {
  id: 'jour-et-nuit',
  domainId: 'astronomie',
  animationId: 'jour-et-nuit',
  thumbnail: '🌗',
  content: {
    fr: {
      title: {
        '3-5': 'Le jour et la nuit',
        '6-8': "Pourquoi il fait nuit",
        '9-12': 'La rotation de la Terre',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'terre-tourne',
              text: 'La Terre est une grosse boule, et elle tourne sur elle-même tout doucement, sans jamais s’arrêter.',
            },
            {
              id: 'cote-eclaire',
              text: "Le soleil éclaire seulement le côté de la boule qui le regarde. Sur ce côté-là, c'est le jour.",
            },
            {
              id: 'cote-sombre',
              text: "De l'autre côté, il fait tout noir. C'est la nuit, et c'est l'heure de dormir.",
            },
            {
              id: 'cycle',
              text: "Comme la Terre tourne, ton pays passe du côté éclairé, puis du côté sombre, puis revient. Le soleil, lui, ne bouge pas.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'terre-tourne',
              text: "La Terre tourne sur elle-même comme une toupie très lente. Il lui faut vingt-quatre heures pour faire un tour complet.",
            },
            {
              id: 'cote-eclaire',
              text: "Le Soleil est tellement loin qu'il n'éclaire qu'une moitié de la Terre à la fois. Sur cette moitié, il fait jour.",
            },
            {
              id: 'cote-sombre',
              text: "L'autre moitié est dans l'ombre de la Terre elle-même. Il y fait nuit, et on peut voir les étoiles.",
            },
            {
              id: 'cycle',
              text: "Le matin, quand tu vois le Soleil « se lever », c'est en réalité toi qui tournes vers lui. Le Soleil, lui, reste à sa place.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'terre-tourne',
              text: "La Terre effectue un tour complet sur son axe en environ vingt-quatre heures. À l'équateur, cela représente une vitesse de plus de mille six cents kilomètres par heure — que tu ne sens pas, parce que l'atmosphère et toi tournez exactement à la même vitesse.",
            },
            {
              id: 'cote-eclaire',
              text: "Le Soleil étant très éloigné, ses rayons arrivent presque parallèles et n'éclairent qu'un hémisphère à la fois. La frontière entre zone éclairée et zone sombre s'appelle le terminateur.",
            },
            {
              id: 'cote-sombre',
              text: "L'hémisphère opposé n'est pas éclairé : c'est la nuit. Les étoiles y sont visibles parce que la lumière du Soleil ne sature plus le ciel — elles sont là de jour aussi, simplement noyées dans cette lumière.",
            },
            {
              id: 'cycle',
              text: "Le lever et le coucher du Soleil sont donc des effets de notre propre rotation, pas d'un mouvement du Soleil. C'est ce raisonnement qui a permis de comprendre que la Terre tourne, alors que nos yeux nous suggèrent l'inverse.",
            },
          ],
        },
      },
    },
  },
};
