import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : un mot de passe ne se devine pas par ruse, il se casse
 * par le nombre d'essais. La conséquence contredit l'habitude enseignée
 * partout — la longueur protège bien mieux que les caractères tordus, et une
 * suite de mots ordinaires bat « P@ssw0rd! » de plusieurs ordres de grandeur.
 *
 * Le sujet est choisi parce qu'aucune autre carte d'informatique ne touche à
 * la sécurité : le réseau, le stockage, les programmes et l'apprentissage
 * automatique sont déjà traités ailleurs.
 */
export const card: ScienceCard = {
  id: 'les-mots-de-passe',
  domainId: 'informatique',
  animationId: 'mot-de-passe',
  thumbnail: '🔑',
  content: {
    fr: {
      title: {
        '3-5': 'Le mot secret',
        '6-8': 'Ce qui fait un bon mot de passe',
        '9-12': 'Mots de passe : la longueur avant la ruse',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'secret',
              text: 'Pour entrer dans la cabane, il faut dire le mot secret. Si tout le monde le connaît, ce n’est plus un secret.',
            },
            {
              id: 'essais',
              text: 'Un ordinateur, lui, peut essayer des mots pour deviner. Beaucoup, beaucoup de mots, et très vite.',
            },
            {
              id: 'longueur',
              text: 'Alors le meilleur secret est un secret long. « Chat », c’est trop court. « Chat lune bateau pomme », c’est bien mieux.',
            },
            {
              id: 'un-par-porte',
              text: 'Et un secret différent pour chaque porte. Comme ça, si on en devine un, les autres portes restent fermées.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'secret',
              text: 'Un mot de passe n’est pas une porte blindée : c’est une clé. Ce qui compte n’est pas qu’il ait l’air compliqué, mais qu’il soit difficile à trouver.',
            },
            {
              id: 'essais',
              text: 'Personne ne le devine en réfléchissant. Un ordinateur essaie les combinaisons les unes après les autres, des milliards par seconde, en commençant par les mots de passe les plus courants. La seule question est : combien d’essais lui faut-il ?',
            },
            {
              id: 'longueur',
              text: 'Et c’est là que tout le monde se trompe. Remplacer le « a » par une arobase ne fait gagner presque rien : la machine connaît l’astuce. Ajouter un mot, en revanche, multiplie le nombre d’essais par des milliers. Quatre mots tirés au hasard valent bien mieux qu’un mot tordu.',
            },
            {
              id: 'un-par-porte',
              text: 'Dernière règle : un mot de passe différent par site. Quand un site se fait voler sa liste, les voleurs essaient aussitôt les mêmes mots de passe partout ailleurs. Un seul mot de passe partout, c’est une seule clé pour toutes les portes.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'secret',
              text: 'La sécurité d’un mot de passe ne se juge pas à son allure, mais à son imprévisibilité : le nombre de possibilités qu’un attaquant devrait parcourir pour tomber dessus. C’est une grandeur mesurable, appelée entropie.',
            },
            {
              id: 'essais',
              text: 'L’attaque n’est pas de la devinette. Une carte graphique teste des milliards de candidats par seconde, en commençant par des dictionnaires de mots de passe déjà vus dans des fuites, puis par les variantes prévisibles. Les substitutions classiques — « a » en arobase, « e » en trois, un point d’exclamation à la fin — figurent toutes dans ces règles.',
            },
            {
              id: 'longueur',
              text: 'D’où un résultat contre-intuitif : « Tr0ub4dor&3 » représente environ vingt-huit bits d’entropie, quand quatre mots courants tirés vraiment au hasard en valent une quarantaine — des milliers de fois plus d’essais. Les recommandations officielles ont suivi : le NIST a abandonné les règles de composition obligatoires au profit de la longueur.',
            },
            {
              id: 'un-par-porte',
              text: 'Un site correctement conçu ne conserve pas ton mot de passe, seulement une empreinte calculée par une fonction impossible à remonter : c’est pourquoi il te propose de le réinitialiser et jamais de te le rappeler. Mais si tu réutilises le même partout, une seule fuite ouvre tous tes comptes — d’où le gestionnaire de mots de passe, et la vérification en deux étapes.',
            },
          ],
        },
      },
    },
  },
};
