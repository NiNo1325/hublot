import type { ScienceCard } from '@/lib/types';

/**
 * La levure est un être vivant microscopique : elle mange le sucre de la pâte
 * et rejette du gaz carbonique, dont les bulles gonflent la pâte. Le four
 * fixe ensuite la mie, il ne fait pas gonfler le pain à lui seul.
 */
export const card: ScienceCard = {
  id: 'pourquoi-le-pain-gonfle',
  domainId: 'la-cuisine',
  animationId: 'pourquoi-le-pain-gonfle',
  thumbnail: '🍞',
  content: {
    fr: {
      title: {
        '3-5': 'Pourquoi le pain grandit',
        '6-8': 'Pourquoi le pain gonfle',
        '9-12': 'Pourquoi le pain lève',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Dans la pâte se cache la levure. Elle est vivante, toute petite.',
            },
            {
              id: 'deux',
              text: 'Elle mange le sucre caché dans la pâte. Miam !',
            },
            {
              id: 'trois',
              text: 'Après avoir mangé, elle fait plein de petites bulles.',
            },
            {
              id: 'quatre',
              text: 'Les bulles gonflent la pâte, comme un ballon.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: "Dans la pâte à pain, il y a de la levure : un tout petit être vivant qu'on ne voit pas à l'œil nu.",
            },
            {
              id: 'deux',
              text: 'La levure mange le sucre présent dans la farine, comme toi tu manges un goûter.',
            },
            {
              id: 'trois',
              text: 'En digérant ce sucre, elle rejette du gaz : plein de petites bulles apparaissent dans la pâte.',
            },
            {
              id: 'quatre',
              text: 'Les bulles grossissent et poussent la pâte de tous les côtés : elle gonfle avant même d\'entrer dans le four.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'La levure est un champignon microscopique vivant, ajouté à la farine, à l\'eau et au sel.',
            },
            {
              id: 'deux',
              text: 'Elle se nourrit des sucres de la farine grâce à son métabolisme.',
            },
            {
              id: 'trois',
              text: 'Cette digestion, appelée fermentation, produit du dioxyde de carbone qui forme des bulles de gaz.',
            },
            {
              id: 'quatre',
              text: 'Piégées dans le réseau élastique de la pâte, les bulles la font gonfler ; la chaleur du four fixe ensuite cette structure, elle ne la crée pas.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Why bread gets bigger',
        '6-8': 'Why bread puffs up',
        '9-12': 'Why bread rises',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Yeast is hiding in the dough. It is alive, and very tiny.',
            },
            {
              id: 'deux',
              text: 'It eats the sugar hidden in the dough. Yum!',
            },
            {
              id: 'trois',
              text: 'After eating, it makes lots of little bubbles.',
            },
            {
              id: 'quatre',
              text: 'The bubbles puff the dough up, like a balloon.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'In bread dough there is yeast: a tiny living thing you cannot see with your eyes alone.',
            },
            {
              id: 'deux',
              text: 'The yeast eats the sugar in the flour, just like you eat an afternoon snack.',
            },
            {
              id: 'trois',
              text: 'As it digests that sugar, it gives off a gas: lots of little bubbles appear in the dough.',
            },
            {
              id: 'quatre',
              text: 'The bubbles grow and push the dough out on every side: it puffs up before it even goes into the oven.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Yeast is a living microscopic fungus, added to the flour, the water and the salt.',
            },
            {
              id: 'deux',
              text: 'It feeds on the sugars in the flour through its metabolism.',
            },
            {
              id: 'trois',
              text: 'This digestion, called fermentation, produces carbon dioxide, which forms bubbles of gas.',
            },
            {
              id: 'quatre',
              text: 'Trapped in the elastic network of the dough, the bubbles make it rise; the heat of the oven then sets that structure, it does not create it.',
            },
          ],
        },
      },
    },
  },
};
