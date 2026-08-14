import type { QuizCarte } from '@/lib/types';

/**
 * Questions du domaine « Le son ».
 *
 * Idées reçues visées : quelqu'un répondrait à l'écho, aigu confondu avec
 * fort, la voix qui viendrait de la bouche, l'oreille qui entendrait « au
 * trou », l'ouïe qui se répare toujours, le son de la guitare sortant du
 * trou, le conducteur qui baisserait le son d'une sirène, le micro qui
 * déformerait la voix, l'absence de son sans oreille humaine pour l'entendre,
 * et l'harmonie musicale réduite à une question de goût.
 */
export const quiz: QuizCarte[] = [
  {
    cardId: 'pourquoi-lecho-repond',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'qui-repond',
            question: 'Qui te répond quand tu cries dans la montagne ?',
            reponses: [
              { texte: 'Personne, c’est ton cri qui revient', icone: '🔁', correcte: true },
              { texte: 'Quelqu’un caché', icone: '👤' },
            ],
            explication:
              'C’est ton propre cri qui rebondit sur la paroi et te revient aux oreilles.',
          },
        ],
        '6-8': [
          {
            id: 'echo-repond',
            question: 'Quand tu entends un écho, qui te répond vraiment ?',
            reponses: [
              { texte: 'Ton propre son qui a rebondi', icone: '🔁', correcte: true },
              { texte: 'La montagne qui parle', icone: '🏔️' },
              { texte: 'Un animal caché', icone: '🦊' },
            ],
            explication:
              'Il n’y a personne : ton cri a simplement rebondi sur un mur ou une paroi et t’est revenu.',
          },
        ],
        '9-12': [
          {
            id: 'delai-echo',
            question: 'Pourquoi l’écho arrive-t-il après un petit délai ?',
            reponses: [
              { texte: 'Le son met du temps à faire l’aller-retour', icone: '⏱️', correcte: true },
              { texte: 'La montagne réfléchit avant de répondre', icone: '🏔️' },
              { texte: 'Ta voix ralentit en s’éloignant', icone: '🐌' },
            ],
            explication:
              'Le son voyage à vitesse finie (environ 340 mètres par seconde) : plus l’obstacle est loin, plus le retour prend de temps.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'qui-repond',
            question: 'Who answers you when you shout in the mountains?',
            reponses: [
              { texte: 'Nobody — it’s your own shout coming back', icone: '🔁', correcte: true },
              { texte: 'Someone hiding', icone: '👤' },
            ],
            explication:
              'It’s your own shout bouncing off the rock face and coming back to your ears.',
          },
        ],
        '6-8': [
          {
            id: 'echo-repond',
            question: 'When you hear an echo, who is really answering you?',
            reponses: [
              { texte: 'Your own sound, bounced back', icone: '🔁', correcte: true },
              { texte: 'The mountain talking', icone: '🏔️' },
              { texte: 'A hidden animal', icone: '🦊' },
            ],
            explication:
              'There’s nobody there: your shout simply bounced off a wall or a rock face and came back to you.',
          },
        ],
        '9-12': [
          {
            id: 'delai-echo',
            question: 'Why does an echo arrive after a short delay?',
            reponses: [
              { texte: 'Sound takes time to travel there and back', icone: '⏱️', correcte: true },
              { texte: 'The mountain thinks it over before answering', icone: '🏔️' },
              { texte: 'Your voice slows down as it moves away', icone: '🐌' },
            ],
            explication:
              'Sound travels at a finite speed (about 340 metres per second): the further away the obstacle, the longer the return trip takes.',
          },
        ],
      },
    },
  },
  {
    cardId: 'aigu-ou-grave',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'aigu-rapide',
            question: 'Un son aigu, qu’est-ce qui le rend aigu ?',
            reponses: [
              { texte: 'Il vibre très vite', icone: '🌀', correcte: true },
              { texte: 'Il est très fort', icone: '🔊' },
            ],
            explication:
              'Aigu ou grave dépend de la vitesse de vibration, pas du volume : un son aigu peut être tout doux.',
          },
        ],
        '6-8': [
          {
            id: 'aigu-fort',
            question: 'Un son aigu est-il forcément un son fort ?',
            reponses: [
              { texte: 'Non, il vibre juste plus vite', icone: '🌀', correcte: true },
              { texte: 'Oui, aigu veut dire fort', icone: '🔊' },
              { texte: 'Oui, plus c’est aigu, plus c’est fort', icone: '📢' },
            ],
            explication:
              'La hauteur (aigu/grave) vient de la vitesse de vibration ; le volume (fort/doux) vient de l’ampleur des vibrations. Ce sont deux choses différentes.',
          },
        ],
        '9-12': [
          {
            id: 'frequence-hauteur',
            question: 'Qu’est-ce qui distingue un son aigu d’un son grave ?',
            reponses: [
              { texte: 'La fréquence de vibration', icone: '📈', correcte: true },
              { texte: 'Le volume sonore', icone: '🔊' },
              { texte: 'La distance à la source', icone: '📏' },
            ],
            explication:
              'La hauteur d’un son est déterminée par sa fréquence en hertz, indépendamment de son intensité (le volume).',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'aigu-rapide',
            question: 'What makes a high sound high?',
            reponses: [
              { texte: 'It vibrates very fast', icone: '🌀', correcte: true },
              { texte: 'It’s very loud', icone: '🔊' },
            ],
            explication:
              'High or low depends on the speed of vibration, not the volume: a high sound can be very quiet.',
          },
        ],
        '6-8': [
          {
            id: 'aigu-fort',
            question: 'Is a high sound always a loud sound?',
            reponses: [
              { texte: 'No, it just vibrates faster', icone: '🌀', correcte: true },
              { texte: 'Yes, high means loud', icone: '🔊' },
              { texte: 'Yes, the higher it is, the louder it is', icone: '📢' },
            ],
            explication:
              'Pitch (high/low) comes from the speed of vibration; volume (loud/quiet) comes from how big the vibrations are. They are two different things.',
          },
        ],
        '9-12': [
          {
            id: 'frequence-hauteur',
            question: 'What tells a high sound apart from a low sound?',
            reponses: [
              { texte: 'The frequency of vibration', icone: '📈', correcte: true },
              { texte: 'The volume', icone: '🔊' },
              { texte: 'The distance from the source', icone: '📏' },
            ],
            explication:
              'The pitch of a sound is set by its frequency in hertz, whatever its intensity (the volume).',
          },
        ],
      },
    },
  },
  {
    cardId: 'pourquoi-les-voix-sont-differentes',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'voix-nait-ou',
            question: 'Où naît le son de ta voix ?',
            reponses: [
              { texte: 'Dans ta gorge', icone: '🗣️', correcte: true },
              { texte: 'Dans ta bouche', icone: '👄' },
            ],
            explication: 'Ce sont deux petites cordes au fond de ta gorge qui vibrent en premier.',
          },
        ],
        '6-8': [
          {
            id: 'origine-son-voix',
            question: 'D’où vient vraiment le son de ta voix ?',
            reponses: [
              { texte: 'Des cordes vocales, dans la gorge', icone: '🗣️', correcte: true },
              { texte: 'De la langue', icone: '👅' },
              { texte: 'Des lèvres', icone: '💋' },
            ],
            explication:
              'Le son naît dans la gorge, aux cordes vocales. La bouche et la langue ne font que le façonner ensuite.',
          },
        ],
        '9-12': [
          {
            id: 'role-bouche',
            question: 'Quel est le rôle principal de la bouche dans la voix ?',
            reponses: [
              { texte: 'Façonner le son déjà produit par les cordes vocales', icone: '👄', correcte: true },
              { texte: 'Produire directement le son de la voix', icone: '🗣️' },
              { texte: 'Amplifier l’air venu des poumons', icone: '💨' },
            ],
            explication:
              'Le son est généré par la vibration des cordes vocales dans le larynx ; la bouche agit comme résonateur et articulateur, pas comme source.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'voix-nait-ou',
            question: 'Where is the sound of your voice born?',
            reponses: [
              { texte: 'In your throat', icone: '🗣️', correcte: true },
              { texte: 'In your mouth', icone: '👄' },
            ],
            explication: 'Two little cords deep in your throat are the first thing to vibrate.',
          },
        ],
        '6-8': [
          {
            id: 'origine-son-voix',
            question: 'Where does the sound of your voice really come from?',
            reponses: [
              { texte: 'From the vocal cords, in the throat', icone: '🗣️', correcte: true },
              { texte: 'From the tongue', icone: '👅' },
              { texte: 'From the lips', icone: '💋' },
            ],
            explication:
              'The sound is born in the throat, at the vocal cords. The mouth and tongue only shape it afterwards.',
          },
        ],
        '9-12': [
          {
            id: 'role-bouche',
            question: 'What is the mouth’s main role in the voice?',
            reponses: [
              { texte: 'Shaping the sound already made by the vocal cords', icone: '👄', correcte: true },
              { texte: 'Producing the sound of the voice directly', icone: '🗣️' },
              { texte: 'Amplifying the air coming from the lungs', icone: '💨' },
            ],
            explication:
              'The sound is generated by the vibration of the vocal cords in the larynx; the mouth acts as a resonator and articulator, not as the source.',
          },
        ],
      },
    },
  },
  {
    cardId: 'comment-loreille-entend',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'travail-oreille',
            question: 'Où travaille vraiment ton oreille pour entendre ?',
            reponses: [
              { texte: 'Bien à l’intérieur', icone: '👂', correcte: true },
              { texte: 'Juste au trou', icone: '🕳️' },
            ],
            explication:
              'Tout se passe à l’intérieur : le tympan, les petits os, puis l’escargot.',
          },
        ],
        '6-8': [
          {
            id: 'trou-oreille',
            question: 'Le trou de l’oreille, est-ce que c’est là que tu entends ?',
            reponses: [
              { texte: 'Non, le travail se fait à l’intérieur', icone: '👂', correcte: true },
              { texte: 'Oui, c’est le trou qui entend', icone: '🕳️' },
              { texte: 'Oui, c’est la peau du trou', icone: '🩹' },
            ],
            explication:
              'Le trou n’est qu’un passage : le vrai travail commence au tympan, puis continue avec les osselets et la cochlée.',
          },
        ],
        '9-12': [
          {
            id: 'role-osselets',
            question: 'Quelle est la fonction des osselets de l’oreille moyenne ?',
            reponses: [
              { texte: 'Transmettre et amplifier les vibrations du tympan', icone: '🔗', correcte: true },
              { texte: 'Filtrer les sons désagréables', icone: '🚫' },
              { texte: 'Produire eux-mêmes le son perçu', icone: '🔊' },
            ],
            explication:
              'Marteau, enclume et étrier relaient et amplifient mécaniquement la vibration jusqu’à la cochlée, sans produire de son eux-mêmes.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'travail-oreille',
            question: 'Where does your ear really do its work?',
            reponses: [
              { texte: 'Deep inside', icone: '👂', correcte: true },
              { texte: 'Right at the hole', icone: '🕳️' },
            ],
            explication:
              'It all happens inside: the eardrum, the little bones, then the snail.',
          },
        ],
        '6-8': [
          {
            id: 'trou-oreille',
            question: 'The hole in your ear — is that where you hear?',
            reponses: [
              { texte: 'No, the work happens inside', icone: '👂', correcte: true },
              { texte: 'Yes, the hole is what hears', icone: '🕳️' },
              { texte: 'Yes, it’s the skin around the hole', icone: '🩹' },
            ],
            explication:
              'The hole is only a passage: the real work starts at the eardrum, then carries on with the ossicles and the cochlea.',
          },
        ],
        '9-12': [
          {
            id: 'role-osselets',
            question: 'What do the ossicles of the middle ear do?',
            reponses: [
              { texte: 'Pass on and amplify the eardrum’s vibrations', icone: '🔗', correcte: true },
              { texte: 'Filter out unpleasant sounds', icone: '🚫' },
              { texte: 'Produce the sound you hear themselves', icone: '🔊' },
            ],
            explication:
              'Hammer, anvil and stirrup mechanically relay and amplify the vibration as far as the cochlea, without producing any sound of their own.',
          },
        ],
      },
    },
  },
  {
    cardId: 'quand-le-bruit-fait-mal',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'poils-repoussent',
            question: 'Les petits poils cassés dans l’oreille, ça repousse ?',
            reponses: [
              { texte: 'Non, jamais', icone: '🚫', correcte: true },
              { texte: 'Oui, toujours', icone: '🔁' },
            ],
            explication:
              'Ils ne repoussent pas : mieux vaut protéger ses oreilles des bruits très forts.',
          },
        ],
        '6-8': [
          {
            id: 'oreille-repare',
            question: 'Après un concert trop fort, l’oreille se répare-t-elle toujours ?',
            reponses: [
              { texte: 'Non, certains dégâts restent', icone: '🚫', correcte: true },
              { texte: 'Oui, elle guérit toute seule', icone: '🔁' },
              { texte: 'Oui, en une nuit de sommeil', icone: '😴' },
            ],
            explication:
              'Les cellules ciliées abîmées par un bruit trop fort ne repoussent pas : la perte peut être définitive.',
          },
        ],
        '9-12': [
          {
            id: 'cellules-ciliees',
            question: 'Les cellules ciliées détruites par un bruit intense repoussent-elles ?',
            reponses: [
              { texte: 'Non, elles ne se régénèrent pas chez l’humain', icone: '🚫', correcte: true },
              { texte: 'Oui, en quelques semaines', icone: '🔁' },
              { texte: 'Oui, si on se repose assez', icone: '😴' },
            ],
            explication:
              'Contrairement à d’autres cellules du corps, les cellules ciliées de la cochlée ne se renouvellent pas : leur destruction est définitive.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'poils-repoussent',
            question: 'Do broken little hairs in your ear grow back?',
            reponses: [
              { texte: 'No, never', icone: '🚫', correcte: true },
              { texte: 'Yes, always', icone: '🔁' },
            ],
            explication:
              'They don’t grow back: it’s better to protect your ears from very loud noises.',
          },
        ],
        '6-8': [
          {
            id: 'oreille-repare',
            question: 'After a concert that was too loud, does the ear always repair itself?',
            reponses: [
              { texte: 'No, some damage stays', icone: '🚫', correcte: true },
              { texte: 'Yes, it heals on its own', icone: '🔁' },
              { texte: 'Yes, after one night’s sleep', icone: '😴' },
            ],
            explication:
              'Hair cells damaged by a sound that is too loud do not grow back: the loss can be permanent.',
          },
        ],
        '9-12': [
          {
            id: 'cellules-ciliees',
            question: 'Do hair cells destroyed by intense noise grow back?',
            reponses: [
              { texte: 'No, they don’t regenerate in humans', icone: '🚫', correcte: true },
              { texte: 'Yes, within a few weeks', icone: '🔁' },
              { texte: 'Yes, if you rest enough', icone: '😴' },
            ],
            explication:
              'Unlike other cells in the body, the hair cells of the cochlea are not renewed: their destruction is permanent.',
          },
        ],
      },
    },
  },
  {
    cardId: 'comment-chante-une-guitare',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'son-guitare-ou',
            question: 'D’où sort surtout le son de la guitare ?',
            reponses: [
              { texte: 'De tout le bois qui vibre', icone: '🎸', correcte: true },
              { texte: 'Juste du trou rond', icone: '⭕' },
            ],
            explication:
              'C’est toute la caisse en bois qui vibre et fait le son, pas seulement le trou.',
          },
        ],
        '6-8': [
          {
            id: 'trou-seul',
            question: 'Le son de la guitare sort-il seulement du trou rond ?',
            reponses: [
              { texte: 'Non, c’est la caisse entière qui vibre', icone: '🎸', correcte: true },
              { texte: 'Oui, tout vient du trou', icone: '⭕' },
              { texte: 'Oui, le trou fabrique le son', icone: '🔘' },
            ],
            explication:
              'Le trou laisse juste sortir l’air mis en mouvement par la caisse entière, qui vibre et amplifie le son de la corde.',
          },
        ],
        '9-12': [
          {
            id: 'role-rosace',
            question: 'Quel rôle joue le trou (la rosace) de la guitare ?',
            reponses: [
              { texte: 'Il laisse rayonner l’air mis en mouvement par la caisse', icone: '🎸', correcte: true },
              { texte: 'Il fabrique lui-même le son', icone: '⭕' },
              { texte: 'Il sert uniquement de décoration', icone: '🎨' },
            ],
            explication:
              'Le son naît de la vibration de la corde amplifiée par la table d’harmonie ; la rosace permet à l’air interne de communiquer avec l’extérieur, sans être la source du son.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'son-guitare-ou',
            question: 'Where does a guitar’s sound mostly come out?',
            reponses: [
              { texte: 'From all the wood, vibrating', icone: '🎸', correcte: true },
              { texte: 'Just from the round hole', icone: '⭕' },
            ],
            explication:
              'It’s the whole wooden body that vibrates and makes the sound, not just the hole.',
          },
        ],
        '6-8': [
          {
            id: 'trou-seul',
            question: 'Does a guitar’s sound come only out of the round hole?',
            reponses: [
              { texte: 'No, the whole body vibrates', icone: '🎸', correcte: true },
              { texte: 'Yes, it all comes from the hole', icone: '⭕' },
              { texte: 'Yes, the hole makes the sound', icone: '🔘' },
            ],
            explication:
              'The hole simply lets out the air set moving by the whole body, which vibrates and amplifies the string’s sound.',
          },
        ],
        '9-12': [
          {
            id: 'role-rosace',
            question: 'What role does a guitar’s soundhole play?',
            reponses: [
              { texte: 'It lets the air moved by the body radiate out', icone: '🎸', correcte: true },
              { texte: 'It makes the sound itself', icone: '⭕' },
              { texte: 'It is purely decorative', icone: '🎨' },
            ],
            explication:
              'The sound comes from the string’s vibration amplified by the soundboard; the soundhole lets the air inside reach the outside, without being the source of the sound.',
          },
        ],
      },
    },
  },
  {
    cardId: 'la-sirene-qui-change',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'qui-change-sirene',
            question: 'Qui fait chanter la sirène plus grave après ?',
            reponses: [
              { texte: 'Le mouvement de l’ambulance', icone: '🚑', correcte: true },
              { texte: 'Le chauffeur qui baisse le son', icone: '🔉' },
            ],
            explication:
              'C’est parce que l’ambulance s’éloigne que le son parait plus grave, personne ne touche à rien.',
          },
        ],
        '6-8': [
          {
            id: 'sirene-passage',
            question: 'Pourquoi la sirène semble-t-elle changer de son au passage ?',
            reponses: [
              { texte: 'À cause du mouvement de l’ambulance', icone: '🚑', correcte: true },
              { texte: 'Le conducteur baisse le volume', icone: '🔉' },
              { texte: 'La sirène change vraiment de fréquence', icone: '🔧' },
            ],
            explication:
              'La sirène émet toujours le même son : c’est le mouvement du véhicule qui fait paraître le son plus aigu à l’approche, plus grave après.',
          },
        ],
        '9-12': [
          {
            id: 'conducteur-sirene',
            question: 'Que fait exactement le conducteur quand l’ambulance te dépasse ?',
            reponses: [
              { texte: 'Rien : la sirène ne change pas', icone: '🚑', correcte: true },
              { texte: 'Il baisse le volume au moment de passer', icone: '🔉' },
              { texte: 'Il change la fréquence de la sirène', icone: '🔧' },
            ],
            explication:
              'L’effet Doppler est un phénomène de propagation des ondes, pas une action du conducteur : la fréquence émise par la sirène reste constante tout du long.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'qui-change-sirene',
            question: 'Who makes the siren sing lower afterwards?',
            reponses: [
              { texte: 'The ambulance moving away', icone: '🚑', correcte: true },
              { texte: 'The driver turning the sound down', icone: '🔉' },
            ],
            explication:
              'The sound seems lower because the ambulance is moving away — nobody touches anything.',
          },
        ],
        '6-8': [
          {
            id: 'sirene-passage',
            question: 'Why does a siren seem to change its sound as it goes past?',
            reponses: [
              { texte: 'Because of the ambulance’s movement', icone: '🚑', correcte: true },
              { texte: 'The driver turns the volume down', icone: '🔉' },
              { texte: 'The siren really does change frequency', icone: '🔧' },
            ],
            explication:
              'The siren always gives out the same sound: it’s the movement of the vehicle that makes the sound seem higher as it comes closer, and lower once it has passed.',
          },
        ],
        '9-12': [
          {
            id: 'conducteur-sirene',
            question: 'What exactly does the driver do as the ambulance passes you?',
            reponses: [
              { texte: 'Nothing: the siren doesn’t change', icone: '🚑', correcte: true },
              { texte: 'Turns the volume down as it goes past', icone: '🔉' },
              { texte: 'Changes the siren’s frequency', icone: '🔧' },
            ],
            explication:
              'The Doppler effect is a matter of how waves travel, not something the driver does: the frequency given out by the siren stays constant throughout.',
          },
        ],
      },
    },
  },
  {
    cardId: 'ma-voix-enregistree',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'voix-bizarre',
            question: 'Pourquoi ta voix enregistrée sonne bizarre ?',
            reponses: [
              { texte: 'Tu t’entends d’habitude aussi par les os', icone: '🦴', correcte: true },
              { texte: 'Le micro casse ta voix', icone: '🎙️' },
            ],
            explication:
              'D’habitude, tes os ajoutent des graves à ta voix ; l’enregistrement n’a que l’air, donc elle sonne plus aiguë.',
          },
        ],
        '6-8': [
          {
            id: 'micro-deforme',
            question: 'Le micro déforme-t-il vraiment ta voix ?',
            reponses: [
              { texte: 'Non, c’est toi qui t’entends autrement', icone: '🦴', correcte: true },
              { texte: 'Oui, il l’abîme', icone: '🎙️' },
              { texte: 'Oui, il ajoute des aigus', icone: '📈' },
            ],
            explication:
              'Le micro capte fidèlement le son dans l’air. C’est toi qui t’entends d’habitude avec des graves en plus, grâce à tes os.',
          },
        ],
        '9-12': [
          {
            id: 'vraie-voix',
            question: 'Qui entend ta « vraie » voix, celle de l’enregistrement ou celle que tu entends dans ta tête ?',
            reponses: [
              { texte: 'Les autres, depuis toujours', icone: '👂', correcte: true },
              { texte: 'Toi, dans ta tête', icone: '🧠' },
              { texte: 'Aucune des deux n’est réelle', icone: '❓' },
            ],
            explication:
              'Les autres t’ont toujours entendu par voie aérienne, comme l’enregistrement. Ta perception interne, enrichie par la conduction osseuse, est celle qui est propre à toi seul.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'voix-bizarre',
            question: 'Why does your recorded voice sound strange?',
            reponses: [
              { texte: 'You usually hear yourself through your bones too', icone: '🦴', correcte: true },
              { texte: 'The microphone spoils your voice', icone: '🎙️' },
            ],
            explication:
              'Usually your bones add low notes to your voice; a recording only has the air, so it sounds higher.',
          },
        ],
        '6-8': [
          {
            id: 'micro-deforme',
            question: 'Does a microphone really distort your voice?',
            reponses: [
              { texte: 'No, it’s you who hears yourself differently', icone: '🦴', correcte: true },
              { texte: 'Yes, it spoils it', icone: '🎙️' },
              { texte: 'Yes, it adds high notes', icone: '📈' },
            ],
            explication:
              'The microphone captures the sound in the air faithfully. It’s you who usually hears yourself with extra low notes, thanks to your bones.',
          },
        ],
        '9-12': [
          {
            id: 'vraie-voix',
            question: 'Who hears your “real” voice — the recording, or the one you hear in your head?',
            reponses: [
              { texte: 'Other people, all along', icone: '👂', correcte: true },
              { texte: 'You, inside your head', icone: '🧠' },
              { texte: 'Neither one is real', icone: '❓' },
            ],
            explication:
              'Other people have always heard you through the air, just like the recording. What you hear inside, enriched by bone conduction, is the version that belongs to you alone.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-sons-quon-nentend-pas',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'sifflet-chien',
            question: 'Le sifflet à chien fait-il un son pour tout le monde ?',
            reponses: [
              { texte: 'Non, seulement pour le chien', icone: '🐶', correcte: true },
              { texte: 'Non, il ne fait aucun son', icone: '🔇' },
            ],
            explication:
              'Le son existe, mais il est trop aigu pour tes oreilles à toi ; le chien, lui, l’entend.',
          },
        ],
        '6-8': [
          {
            id: 'son-existe',
            question: 'Si tu n’entends rien avec un sifflet à chien, y a-t-il vraiment un son ?',
            reponses: [
              { texte: 'Oui, mais trop aigu pour toi', icone: '🐶', correcte: true },
              { texte: 'Non, il ne se passe rien', icone: '🔇' },
              { texte: 'Non, c’est un objet cassé', icone: '🔧' },
            ],
            explication:
              'Le sifflet émet bien un son, un ultrason. Il existe, simplement hors de la plage que ton oreille peut capter.',
          },
        ],
        '9-12': [
          {
            id: 'son-inaudible',
            question: 'Un son inaudible pour l’humain est-il forcément inexistant ?',
            reponses: [
              { texte: 'Non, il peut être capté par d’autres espèces', icone: '🐋', correcte: true },
              { texte: 'Oui, l’oreille humaine capte tous les sons', icone: '👂' },
              { texte: 'Oui, sans oreille humaine, pas de son', icone: '🔇' },
            ],
            explication:
              'Ultrasons et infrasons existent bel et bien physiquement ; seule notre plage auditive limitée nous empêche de les percevoir.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'sifflet-chien',
            question: 'Does a dog whistle make a sound for everyone?',
            reponses: [
              { texte: 'No, only for the dog', icone: '🐶', correcte: true },
              { texte: 'No, it makes no sound at all', icone: '🔇' },
            ],
            explication:
              'The sound is really there, but it’s too high for your ears; the dog can hear it.',
          },
        ],
        '6-8': [
          {
            id: 'son-existe',
            question: 'If you hear nothing from a dog whistle, is there really a sound?',
            reponses: [
              { texte: 'Yes, but too high for you', icone: '🐶', correcte: true },
              { texte: 'No, nothing happens', icone: '🔇' },
              { texte: 'No, the whistle is broken', icone: '🔧' },
            ],
            explication:
              'The whistle does give out a sound, an ultrasound. It exists — simply outside the range your ear can pick up.',
          },
        ],
        '9-12': [
          {
            id: 'son-inaudible',
            question: 'Is a sound humans can’t hear necessarily non-existent?',
            reponses: [
              { texte: 'No, other species can pick it up', icone: '🐋', correcte: true },
              { texte: 'Yes, the human ear picks up every sound', icone: '👂' },
              { texte: 'Yes, without a human ear there is no sound', icone: '🔇' },
            ],
            explication:
              'Ultrasound and infrasound really do exist physically; only our limited hearing range stops us perceiving them.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-notes-qui-vont-ensemble',
    questions: {
      fr: {
        '3-5': [
          {
            id: 'notes-ensemble',
            question: 'Pourquoi deux notes sonnent-elles bien ensemble ?',
            reponses: [
              { texte: 'Leurs vibrations s’accordent', icone: '🎵', correcte: true },
              { texte: 'C’est juste une question de goût', icone: '👍' },
            ],
            explication:
              'C’est un vrai rapport entre les vibrations, pas seulement une préférence.',
          },
        ],
        '6-8': [
          {
            id: 'question-de-gout',
            question: 'Deux notes qui sonnent bien ensemble, est-ce juste une question de goût ?',
            reponses: [
              { texte: 'Non, leurs vibrations s’emboîtent bien', icone: '🎵', correcte: true },
              { texte: 'Oui, c’est totalement subjectif', icone: '👍' },
              { texte: 'Oui, ça dépend de l’habitude', icone: '🎧' },
            ],
            explication:
              'Il existe un vrai rapport mathématique simple entre les fréquences des deux notes, ce qui explique pourquoi l’accord sonne agréable, indépendamment du goût.',
          },
        ],
        '9-12': [
          {
            id: 'accord-agreable',
            question: 'Qu’est-ce qui rend un accord musical agréable à l’oreille ?',
            reponses: [
              { texte: 'Un rapport simple entre les fréquences des notes', icone: '🔢', correcte: true },
              { texte: 'Une préférence purement culturelle', icone: '👍' },
              { texte: 'Le volume auquel les notes sont jouées', icone: '🔊' },
            ],
            explication:
              'Des fréquences dans un rapport de nombres entiers simples, comme l’octave (2:1) ou la quinte (3:2), créent une superposition d’ondes régulière que l’oreille perçoit comme harmonieuse.',
          },
        ],
      },
      en: {
        '3-5': [
          {
            id: 'notes-ensemble',
            question: 'Why do two notes sound good together?',
            reponses: [
              { texte: 'Their vibrations fit together', icone: '🎵', correcte: true },
              { texte: 'It’s just a matter of taste', icone: '👍' },
            ],
            explication:
              'It’s a real relationship between the vibrations, not just a preference.',
          },
        ],
        '6-8': [
          {
            id: 'question-de-gout',
            question: 'Two notes that sound good together — is that just a matter of taste?',
            reponses: [
              { texte: 'No, their vibrations fit together neatly', icone: '🎵', correcte: true },
              { texte: 'Yes, it’s completely subjective', icone: '👍' },
              { texte: 'Yes, it depends what you’re used to', icone: '🎧' },
            ],
            explication:
              'There is a real, simple mathematical ratio between the frequencies of the two notes, which is why the chord sounds pleasant — whatever your taste.',
          },
        ],
        '9-12': [
          {
            id: 'accord-agreable',
            question: 'What makes a musical chord pleasant to the ear?',
            reponses: [
              { texte: 'A simple ratio between the notes’ frequencies', icone: '🔢', correcte: true },
              { texte: 'A purely cultural preference', icone: '👍' },
              { texte: 'The volume the notes are played at', icone: '🔊' },
            ],
            explication:
              'Frequencies in a simple whole-number ratio, like the octave (2:1) or the fifth (3:2), create a regular overlap of waves that the ear hears as harmonious.',
          },
        ],
      },
    },
  },
];
