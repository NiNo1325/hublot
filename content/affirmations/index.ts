import type { Affirmation } from '@/lib/types';
import { affirmations as sciencesDeLaTerre } from './sciences-de-la-terre';
import { affirmations as astronomie } from './astronomie';
import { affirmations as biologie } from './biologie';
import { affirmations as physique } from './physique';
import { affirmations as chimie } from './chimie';
import { affirmations as ingenierie } from './ingenierie';
import { affirmations as informatique } from './informatique';
import { affirmations as mathematiques } from './mathematiques';
import { affirmations as animaux } from './animaux';
import { affirmations as meteo } from './meteo';
import { affirmations as leSon } from './le-son';
import { affirmations as lesDinosaures } from './les-dinosaures';
import { affirmations as leCorps } from './le-corps';
import { affirmations as lesOceans } from './les-oceans';
import { affirmations as laCuisine } from './la-cuisine';

/**
 * Les affirmations du jeu « Vrai ou faux », groupées par domaine.
 *
 * Une par carte, que Lumi affirme et que l'enfant doit trancher. C'est le seul
 * format de l'application qui attaque **les idées reçues de front** : un QCM
 * demande de reconnaître la bonne réponse parmi d'autres, alors qu'ici il faut
 * oser contredire quelqu'un qui affirme. Un enfant qui coche « le ciel est
 * bleu parce qu'il reflète la mer » dans une liste hésitait peut-être ; celui
 * qui l'entend dire par Lumi et répond « faux » a vraiment compris.
 *
 * D'où la règle de rédaction : **une affirmation fausse reprend l'idée reçue
 * que la carte corrige**, jamais une bêtise inventée. Le sang bleu, les
 * dinosaures devenus pétrole, la face de la Lune qui serait toujours sombre —
 * ce sont des croyances réellement répandues, et les démonter est tout
 * l'intérêt du jeu. Une affirmation vraie, elle, énonce le fait surprenant de
 * la carte : celui qu'on croirait faux sans l'avoir écoutée.
 *
 * La moitié des énoncés environ sont vrais : un enfant qui répondrait toujours
 * « faux » ne doit pas gagner.
 *
 * Le découpage par fichier suit celui des cartes et du quizz — un domaine par
 * fichier, pour que deux rédacteurs ne se marchent pas dessus.
 */
export const affirmations: Affirmation[] = [
  ...sciencesDeLaTerre,
  ...astronomie,
  ...biologie,
  ...physique,
  ...chimie,
  ...ingenierie,
  ...informatique,
  ...mathematiques,
  ...animaux,
  ...meteo,
  ...leSon,
  ...lesDinosaures,
  ...leCorps,
  ...lesOceans,
  ...laCuisine,
];

const parCarte = new Map(affirmations.map((a) => [a.cardId, a]));

/** L'affirmation d'une carte, s'il y en a une. */
export function affirmationDe(cardId: string): Affirmation | undefined {
  return parCarte.get(cardId);
}
