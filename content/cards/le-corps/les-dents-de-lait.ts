import type { ScienceCard } from '@/lib/types';

export const card: ScienceCard = {
  id: 'les-dents-de-lait',
  domainId: 'le-corps',
  animationId: 'les-dents-de-lait',
  thumbnail: '🦷',
  content: {
    fr: {
      title: {
        '3-5': 'Les petites dents qui tombent',
        '6-8': 'Les dents de lait',
        '9-12': 'Pourquoi les dents de lait tombent',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Quand tu es petit, tu as d’abord de toutes petites dents : les dents de lait.',
            },
            {
              id: 'deux',
              text: 'Sous chacune, une dent plus grande pousse doucement.',
            },
            {
              id: 'trois',
              text: 'Cette grande dent grignote petit à petit la racine de la petite dent.',
            },
            {
              id: 'quatre',
              text: 'Alors la dent de lait tombe toute seule, et la grande dent prend sa place.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Tes premières dents, apparues quand tu étais bébé, s’appellent les dents de lait : elles sont plus petites que celles des grands.',
            },
            {
              id: 'deux',
              text: 'Sous chaque dent de lait, une dent définitive, plus grande, se forme et pousse peu à peu vers le haut.',
            },
            {
              id: 'trois',
              text: 'En poussant, cette dent définitive ronge petit à petit la racine de la dent de lait, qui devient de plus en plus fragile.',
            },
            {
              id: 'quatre',
              text: 'Une fois la racine bien rongée, la dent de lait se détache et tombe, laissant la place à la dent définitive.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Les vingt dents de lait, apparues dans la petite enfance, sont plus petites et en nombre inférieur aux trente-deux dents définitives à venir.',
            },
            {
              id: 'deux',
              text: 'Sous chaque dent de lait se développe le germe d’une dent définitive, qui migre progressivement vers la surface de la gencive.',
            },
            {
              id: 'trois',
              text: 'En progressant, la dent définitive exerce une pression qui provoque la résorption de la racine de la dent de lait : des cellules spécialisées dissolvent peu à peu cette racine.',
            },
            {
              id: 'quatre',
              text: 'Privée de racine pour la maintenir, la dent de lait se détache et tombe, ce qui permet à la dent définitive de prendre sa place. Une dent de lait tombe donc parce que sa racine a été résorbée, non parce qu’elle serait abîmée.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The little teeth that fall out',
        '6-8': 'Milk teeth',
        '9-12': 'Why milk teeth fall out',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'When you are little, you first have very small teeth: your milk teeth.',
            },
            {
              id: 'deux',
              text: 'Under each one, a bigger tooth is slowly growing.',
            },
            {
              id: 'trois',
              text: 'That big tooth nibbles away the root of the little tooth, bit by bit.',
            },
            {
              id: 'quatre',
              text: 'Then the milk tooth falls out all by itself, and the big tooth takes its place.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Your first teeth, which came through when you were a baby, are called milk teeth: they are smaller than grown-up ones.',
            },
            {
              id: 'deux',
              text: 'Under each milk tooth, a bigger, permanent tooth forms and pushes little by little towards the top.',
            },
            {
              id: 'trois',
              text: 'As it pushes, this permanent tooth gnaws away the root of the milk tooth, which grows more and more fragile.',
            },
            {
              id: 'quatre',
              text: 'Once the root is well and truly gnawed away, the milk tooth comes loose and falls out, leaving room for the permanent tooth.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'The twenty milk teeth, which appeared in early childhood, are smaller and fewer than the thirty-two permanent teeth still to come.',
            },
            {
              id: 'deux',
              text: 'Under each milk tooth, the bud of a permanent tooth develops and gradually migrates towards the surface of the gum.',
            },
            {
              id: 'trois',
              text: 'As it advances, the permanent tooth exerts a pressure that causes the root of the milk tooth to be resorbed: specialised cells slowly dissolve that root.',
            },
            {
              id: 'quatre',
              text: 'With no root left to hold it, the milk tooth comes loose and falls out, letting the permanent tooth take its place. A milk tooth therefore falls out because its root has been resorbed, not because it is damaged.',
            },
          ],
        },
      },
    },
  },
};
