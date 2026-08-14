import type { ScienceCard } from '@/lib/types';

/**
 * La voix naît sur les cordes vocales, dans la gorge — pas dans la bouche.
 * La bouche, le nez et la gorge ne font que la colorer ensuite.
 */
export const card: ScienceCard = {
  id: 'pourquoi-les-voix-sont-differentes',
  domainId: 'le-son',
  animationId: 'pourquoi-les-voix-sont-differentes',
  thumbnail: '🗣️',
  content: {
    fr: {
      title: {
        '3-5': "D'où vient ta voix ?",
        '6-8': 'Pourquoi les voix sont différentes',
        '9-12': 'Pourquoi chaque voix est unique',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'L\'air sort de tes poumons et remonte dans ta gorge.',
            },
            {
              id: 'deux',
              text: 'Il fait trembler deux petites cordes, au fond de ta gorge.',
            },
            {
              id: 'trois',
              text: 'Ta bouche et ton nez donnent une couleur à ce son.',
            },
            {
              id: 'quatre',
              text: 'Ta gorge et ta bouche ont une forme à toi : ta voix est unique !',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: "Quand tu parles, l'air remonte de tes poumons vers ta gorge.",
            },
            {
              id: 'deux',
              text: 'Il fait vibrer les cordes vocales, deux petits replis tendus dans ta gorge : c\'est là que naît le son de ta voix.',
            },
            {
              id: 'trois',
              text: 'Ce son traverse ensuite ta gorge, ta bouche et ton nez, qui le transforment comme une caisse de résonance.',
            },
            {
              id: 'quatre',
              text: "Comme personne n'a exactement la même forme de gorge, de bouche ou de nez, chaque voix est unique, même entre jumeaux.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: "En parlant, l'air expiré par les poumons remonte le long de la trachée jusqu'au larynx.",
            },
            {
              id: 'deux',
              text: "Il fait vibrer les cordes vocales, deux replis de tissu tendus dans le larynx : c'est cette vibration qui crée le son brut de la voix, pas la bouche.",
            },
            {
              id: 'trois',
              text: "Ce son traverse ensuite les cavités du pharynx, de la bouche et du nez, qui agissent comme une caisse de résonance et renforcent certaines fréquences plutôt que d'autres.",
            },
            {
              id: 'quatre',
              text: "La forme précise de ces cavités varie d'une personne à l'autre : c'est cette combinaison unique qui donne à chaque voix sa couleur reconnaissable entre toutes.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Where does your voice come from?',
        '6-8': 'Why voices are all different',
        '9-12': 'Why every voice is unique',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Air comes out of your lungs and rises up your throat.',
            },
            {
              id: 'deux',
              text: 'It makes two little cords shake, deep in your throat.',
            },
            {
              id: 'trois',
              text: 'Your mouth and your nose give that sound its colour.',
            },
            {
              id: 'quatre',
              text: 'Your throat and mouth have a shape all of their own: your voice is unique!',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'When you speak, air rises from your lungs towards your throat.',
            },
            {
              id: 'deux',
              text: 'It makes the vocal cords vibrate, two small folds stretched across your throat: that is where the sound of your voice is born.',
            },
            {
              id: 'trois',
              text: 'The sound then passes through your throat, your mouth and your nose, which reshape it like a sounding box.',
            },
            {
              id: 'quatre',
              text: 'Since nobody has exactly the same shape of throat, mouth or nose, every voice is unique — even between twins.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'As you speak, air breathed out from the lungs travels up the windpipe to the larynx.',
            },
            {
              id: 'deux',
              text: 'It makes the vocal cords vibrate, two folds of tissue stretched across the larynx: this vibration creates the raw sound of the voice, not the mouth.',
            },
            {
              id: 'trois',
              text: 'The sound then passes through the cavities of the throat, mouth and nose, which act as a sounding box and reinforce some frequencies rather than others.',
            },
            {
              id: 'quatre',
              text: 'The exact shape of those cavities differs from one person to the next: it is this unique combination that gives every voice a colour recognisable among all others.',
            },
          ],
        },
      },
    },
  },
};
