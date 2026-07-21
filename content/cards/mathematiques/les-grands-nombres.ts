import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : un milliard n'est pas « un peu plus » qu'un million.
 * C'est mille fois plus. L'intuition écrase les grands nombres ; les rendre
 * concrets par le temps (un million de secondes fait onze jours, un milliard
 * fait trente-deux ans) révèle l'écart réel.
 */
export const card: ScienceCard = {
  id: 'les-grands-nombres',
  domainId: 'mathematiques',
  animationId: 'grands-nombres',
  thumbnail: '🔢',
  content: {
    fr: {
      title: {
        '3-5': 'Beaucoup, beaucoup',
        '6-8': 'Les très grands nombres',
        '9-12': 'Ordres de grandeur',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'compter',
              text: 'Compter jusqu’à dix, c’est facile. Mais jusqu’à mille, il faudrait déjà très longtemps.',
            },
            {
              id: 'million',
              text: 'Un million, c’est mille fois mille. Bien trop pour le compter dans une journée.',
            },
            {
              id: 'milliard',
              text: 'Et un milliard, c’est encore mille fois plus qu’un million. C’est énorme !',
            },
            {
              id: 'imaginer',
              text: 'Ces nombres sont si grands qu’on n’arrive pas à les imaginer dans sa tête.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'compter',
              text: 'Chaque fois qu’on ajoute un zéro, un nombre devient dix fois plus grand. Dix, cent, mille : ça monte très vite.',
            },
            {
              id: 'million',
              text: 'Un million s’écrit avec six zéros : mille fois mille. Pour te le représenter, compte les secondes : un million de secondes, ça fait environ onze jours et demi sans jamais s’arrêter.',
            },
            {
              id: 'milliard',
              text: 'On croit souvent qu’un milliard est juste un peu plus qu’un million. C’est faux : c’est mille fois plus. Un milliard de secondes, ce ne sont pas onze jours, mais environ trente-deux ans.',
            },
            {
              id: 'imaginer',
              text: 'Onze jours contre trente-deux ans : voilà l’écart réel entre un million et un milliard. Nos yeux voient deux nombres qui se ressemblent, mais l’un est gigantesque à côté de l’autre.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'compter',
              text: 'Notre système est décimal : chaque rang vaut dix fois le précédent. On parle d’ordre de grandeur — le nombre de zéros. Passer d’un ordre au suivant, c’est multiplier par dix.',
            },
            {
              id: 'million',
              text: 'Un million vaut dix puissance six. L’intuition humaine gère mal ces échelles : au-delà de quelques milliers, on cesse de vraiment se les figurer, et on tend à tout tasser sur une même « grande » catégorie.',
            },
            {
              id: 'milliard',
              text: 'Un milliard vaut dix puissance neuf : mille millions. L’écart d’ordre de grandeur est de trois — un facteur mille. Traduit en secondes, un million fait onze jours et demi, un milliard trente-deux ans. Le rapport saute alors aux yeux.',
            },
            {
              id: 'imaginer',
              text: 'Raisonner en ordres de grandeur est un outil essentiel des sciences : il permet d’estimer sans calcul exact, et de repérer une erreur énorme. Confondre million et milliard fausse un budget d’un facteur mille — d’où l’importance de sentir ces échelles plutôt que de les subir.',
            },
          ],
        },
      },
    },
  },
};
