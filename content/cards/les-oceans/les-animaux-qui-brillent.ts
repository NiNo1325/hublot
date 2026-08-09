import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : la bioluminescence est une lumière produite par une
 * réaction chimique interne (luciférine/luciférase), pas par de l'électricité
 * ni une flamme, et elle dégage très peu de chaleur — une « lumière froide ».
 */
export const card: ScienceCard = {
  id: 'les-animaux-qui-brillent',
  domainId: 'les-oceans',
  animationId: 'les-animaux-qui-brillent',
  thumbnail: '✨',
  content: {
    fr: {
      title: {
        '3-5': 'Des animaux qui brillent',
        '6-8': 'Les animaux qui brillent dans le noir',
        '9-12': 'La bioluminescence, une lumière vivante',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Tout au fond de la mer, il fait très noir. Mais certains animaux s’allument comme des lampes.',
            },
            {
              id: 'deux',
              text: 'Dans leur corps, il se passe une petite magie chimique qui fait de la lumière.',
            },
            {
              id: 'trois',
              text: 'Cette lumière ne chauffe pas du tout.',
            },
            {
              id: 'quatre',
              text: 'Ça leur sert à attirer, à se cacher, ou à se retrouver entre eux.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Dans le noir complet des profondeurs, de nombreux animaux marins savent produire leur propre lumière.',
            },
            {
              id: 'deux',
              text: 'Cette lumière vient d’une réaction chimique qui se déroule à l’intérieur de leur corps, entre deux substances spéciales.',
            },
            {
              id: 'trois',
              text: 'Contrairement à une ampoule ou une flamme, cette lumière ne dégage presque pas de chaleur : on l’appelle lumière froide.',
            },
            {
              id: 'quatre',
              text: 'Selon les espèces, elle sert à attirer une proie, à effrayer un prédateur, à se camoufler, ou à retrouver un partenaire dans le noir.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Dans les profondeurs océaniques, où aucune lumière solaire ne pénètre, une grande diversité d’organismes produit leur propre lumière : c’est la bioluminescence.',
            },
            {
              id: 'deux',
              text: 'Elle résulte d’une réaction chimique entre une molécule appelée luciférine et une enzyme, la luciférase, qui libère de l’énergie sous forme de photons.',
            },
            {
              id: 'trois',
              text: 'Cette réaction convertit l’essentiel de son énergie en lumière plutôt qu’en chaleur, ce qui en fait un processus bien plus efficace qu’une ampoule classique.',
            },
            {
              id: 'quatre',
              text: 'Les usages varient selon les espèces : leurre pour attirer une proie, éblouissement pour fuir un prédateur, camouflage par contre-illumination, ou signal pour reconnaître un partenaire de la même espèce.',
            },
          ],
        },
      },
    },
  },
};
