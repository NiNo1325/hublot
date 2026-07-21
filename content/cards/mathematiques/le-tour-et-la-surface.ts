import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : périmètre et aire sont indépendants. L'intuition — plus
 * grand tour, plus grande surface — résiste très bien à l'école, et se réfute
 * avec une seule ficelle de vingt mètres : neuf mètres carrés en rectangle
 * allongé, vingt-cinq en carré, presque trente-deux en cercle.
 */
export const card: ScienceCard = {
  id: 'le-tour-et-la-surface',
  domainId: 'mathematiques',
  animationId: 'perimetre-aire',
  thumbnail: '📐',
  content: {
    fr: {
      title: {
        '3-5': 'L’enclos des moutons',
        '6-8': 'Le tour et la place à l’intérieur',
        '9-12': 'Périmètre et aire : deux choses différentes',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'corde',
              text: 'Avec une ficelle, tu fabriques un enclos pour tes moutons. La ficelle, elle, ne change jamais de longueur.',
            },
            {
              id: 'long-et-fin',
              text: 'Si l’enclos est tout long et tout fin, il n’y a presque pas de place dedans. Deux moutons, et c’est déjà plein.',
            },
            {
              id: 'carre',
              text: 'Avec la même ficelle, tu fais un carré. Et là, beaucoup plus de moutons tiennent à l’intérieur !',
            },
            {
              id: 'rond',
              text: 'Le mieux, c’est un rond. Toujours la même ficelle, et encore plus de place.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'corde',
              text: 'Deux champs peuvent avoir exactement la même longueur de clôture et pas du tout la même surface. Ça paraît impossible, et pourtant ça se vérifie avec une ficelle de vingt mètres.',
            },
            {
              id: 'long-et-fin',
              text: 'Fais un rectangle de neuf mètres sur un. Le tour fait bien vingt mètres — et il n’y a que neuf mètres carrés à l’intérieur.',
            },
            {
              id: 'carre',
              text: 'Avec la même ficelle, fais un carré de cinq mètres de côté. Le tour vaut toujours vingt mètres, mais la surface est de vingt-cinq mètres carrés : presque trois fois plus, sans un centimètre de ficelle en plus.',
            },
            {
              id: 'rond',
              text: 'Et en cercle, tu montes à près de trente-deux mètres carrés. Le tour ne dit donc rien de la place à l’intérieur : plus la forme est ramassée, plus elle en contient.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'corde',
              text: 'Périmètre et aire sont deux grandeurs indépendantes. On les lie spontanément — plus grand tour, plus grande surface — et l’erreur résiste remarquablement à l’enseignement.',
            },
            {
              id: 'long-et-fin',
              text: 'Le contre-exemple tient en deux rectangles de même périmètre, vingt mètres. Neuf sur un enferme neuf mètres carrés. Aplatis-le encore, neuf virgule cinq sur zéro virgule cinq : le tour n’a pas bougé d’un centimètre, l’aire est tombée sous cinq mètres carrés. On peut la faire tendre vers zéro à périmètre constant.',
            },
            {
              id: 'carre',
              text: 'Dans l’autre sens, il existe une limite. À périmètre fixé, le rectangle d’aire maximale est le carré : cinq sur cinq, vingt-cinq mètres carrés. Impossible de faire mieux avec quatre angles droits.',
            },
            {
              id: 'rond',
              text: 'En s’autorisant toutes les formes, le maximum est le disque — environ trente et un virgule huit mètres carrés pour le même tour de vingt mètres. C’est le problème isopérimétrique, connu depuis l’Antiquité et démontré seulement au dix-neuvième siècle. C’est aussi pourquoi une bulle de savon est ronde : elle enferme son volume avec le moins de surface possible.',
            },
          ],
        },
      },
    },
  },
};
