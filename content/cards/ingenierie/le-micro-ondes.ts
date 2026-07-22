import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : le micro-ondes ne cuit pas « de l'intérieur ». Le dépôt
 * d'énergie est maximal en surface et décroît vers le cœur — d'où les points
 * froids, le temps de repos, et l'obligation de remuer. Les deux règles
 * d'usage, pas de métal et la grille de la porte, s'expliquent de la même
 * physique.
 */
export const card: ScienceCard = {
  id: 'le-micro-ondes',
  domainId: 'ingenierie',
  animationId: 'micro-ondes',
  thumbnail: '♨️',
  content: {
    fr: {
      title: {
        '3-5': 'La boîte qui fait chauffer',
        '6-8': 'Le micro-ondes ne cuit pas de l’intérieur',
        '9-12': 'Chauffage diélectrique et cage de Faraday',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'de-linterieur',
              text: 'Le micro-ondes ne chauffe pas par le milieu, comme on le raconte souvent.',
            },
            {
              id: 'agiter-leau',
              text: 'Il secoue l’eau qui se trouve dans les aliments. Et quand ça remue beaucoup, ça chauffe.',
            },
            {
              id: 'deux-centimetres',
              text: 'Mais il ne va pas loin : juste le bord. Le milieu se réchauffe après, tout doucement.',
            },
            {
              id: 'metal',
              text: 'Et jamais de métal dedans : ça fait des étincelles.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'de-linterieur',
              text: 'On répète qu’un micro-ondes cuit de l’intérieur vers l’extérieur. C’est faux — et c’est même plutôt l’inverse.',
            },
            {
              id: 'agiter-leau',
              text: 'Il émet des ondes qui font pivoter sur elles-mêmes les molécules d’eau des aliments, des milliards de fois par seconde. Cette agitation, c’est exactement ce qu’est la chaleur : l’aliment chauffe parce que son eau s’agite, pas parce qu’une flamme le touche.',
            },
            {
              id: 'deux-centimetres',
              text: 'Seulement, les ondes ne pénètrent que d’un ou deux centimètres. Au-delà, c’est la chaleur qui progresse lentement vers le cœur, comme dans un four ordinaire. Voilà pourquoi un plat épais reste froid au milieu, et pourquoi il faut le remuer et le laisser reposer.',
            },
            {
              id: 'metal',
              text: 'Deux règles s’expliquent alors. Pas de métal : les ondes y accumulent des charges qui finissent en étincelles. Et la grille de la porte n’est pas décorative — ses trous sont bien plus petits que les ondes, qui ne peuvent donc pas sortir, alors que la lumière, beaucoup plus fine, passe sans problème.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'de-linterieur',
              text: 'La cuisson « de l’intérieur » est un mythe tenace. Le dépôt d’énergie est maximal en surface et décroît de façon exponentielle vers le cœur.',
            },
            {
              id: 'agiter-leau',
              text: 'Le magnétron émet un rayonnement à 2,45 gigahertz. Les molécules d’eau, polaires, tentent de s’aligner sur le champ électrique alternatif, et ce mouvement dissipe de l’énergie par frottement moléculaire : c’est le chauffage diélectrique. Corps gras et sucres y répondent moins, et la glace bien moins que l’eau liquide — d’où la décongélation par cycles entrecoupés de pauses.',
            },
            {
              id: 'deux-centimetres',
              text: 'La profondeur de pénétration dans un aliment humide est de l’ordre du centimètre. Le cœur d’une pièce épaisse n’est donc chauffé que par conduction, exactement comme dans un four classique. D’où les points froids, et l’importance du temps de repos — qui relève de la sécurité alimentaire autant que du confort.',
            },
            {
              id: 'metal',
              text: 'Le métal pose problème par sa conductivité : le champ y induit des courants et se concentre sur les arêtes, jusqu’à ioniser l’air. La grille de la porte, elle, forme une cage de Faraday : ses perforations de quelques millimètres sont très inférieures aux douze centimètres de longueur d’onde, qui est donc réfléchie — tandis que la lumière visible, de longueur d’onde cent mille fois plus courte, passe librement.',
            },
          ],
        },
      },
    },
  },
};
