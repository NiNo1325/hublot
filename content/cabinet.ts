import type { Localise } from '@/lib/types';

/**
 * Le cabinet de curiosités de Lumi : les objets que l'on peut acheter avec ses
 * étoiles, et qui viennent garnir son étagère.
 *
 * Chaque objet porte un fait scientifique. C'est ce qui distingue ce cabinet
 * d'une boutique de cosmétiques : la récompense enseigne quelque chose, au lieu
 * de seulement décorer. La recherche sur la surjustification montre qu'une
 * récompense matérielle attendue peut éroder l'envie d'apprendre, surtout chez
 * l'enfant ; un objet qui apprend encore quelque chose limite ce risque, parce
 * qu'il prolonge le sujet au lieu de s'y substituer.
 *
 * Les prix montent avec la rareté supposée de l'objet, pas avec sa difficulté :
 * rien ici n'est un obstacle. Le total dépasse ce qu'une traversée complète du
 * contenu rapporte, pour qu'il reste toujours quelque chose à convoiter.
 */
export interface ObjetCabinet {
  id: string;
  emoji: string;
  /** En étoiles. */
  prix: number;
  nom: Localise<string>;
  /** Ce que l'objet apprend, en une phrase. */
  fait: Localise<string>;
}

/**
 * Objets par planche de l'étagère. Quatre tiennent sur la largeur d'un
 * téléphone, et le catalogue en compte un multiple exact : une planche à moitié
 * vide se lirait comme un bug plutôt que comme une place à remplir.
 */
export const OBJETS_PAR_PLANCHE = 4;

export const objetsCabinet: ObjetCabinet[] = [
  {
    id: 'aimant',
    emoji: '🧲',
    prix: 25,
    nom: { fr: 'Un aimant', en: 'A magnet' },
    fait: {
      fr: 'La Terre entière est un aimant géant. C’est pour ça qu’une boussole sait où est le nord.',
      en: 'The whole Earth is a giant magnet. That is how a compass knows where north is.',
    },
  },
  {
    id: 'boussole',
    emoji: '🧭',
    prix: 35,
    nom: { fr: 'Une boussole', en: 'A compass' },
    fait: {
      fr: 'Son aiguille ne pointe pas tout à fait le vrai nord, mais le nord magnétique — et celui-ci se déplace un peu chaque année.',
      en: 'Its needle does not point at true north but at magnetic north — and that moves a little every year.',
    },
  },
  {
    id: 'thermometre',
    emoji: '🌡️',
    prix: 40,
    nom: { fr: 'Un thermomètre', en: 'A thermometer' },
    fait: {
      fr: 'Le liquide monte parce qu’il gonfle en chauffant. Presque tout gonfle en chauffant, même les rails de train.',
      en: 'The liquid rises because it swells when warmed. Almost everything swells when warmed, even railway tracks.',
    },
  },
  {
    id: 'loupe',
    emoji: '🔍',
    prix: 50,
    nom: { fr: 'Une loupe', en: 'A magnifying glass' },
    fait: {
      fr: 'Elle courbe la lumière pour tromper ton œil : l’objet n’a pas grandi, ce sont ses rayons qui arrivent autrement.',
      en: 'It bends light to fool your eye: the object has not grown, its rays simply arrive differently.',
    },
  },
  {
    id: 'ampoule',
    emoji: '💡',
    prix: 60,
    nom: { fr: 'Une ampoule', en: 'A light bulb' },
    fait: {
      fr: 'Dans une ampoule ancienne, un fil chauffe si fort qu’il devient blanc. Chauffe n’importe quoi assez fort, et ça brille.',
      en: 'In an old bulb, a wire gets so hot it turns white. Heat anything enough and it glows.',
    },
  },
  {
    id: 'sablier',
    emoji: '⏳',
    prix: 70,
    nom: { fr: 'Un sablier', en: 'An hourglass' },
    fait: {
      fr: 'Le sable coule toujours à la même vitesse, plein ou presque vide. Ce n’est pas le cas de l’eau.',
      en: 'Sand flows at the same speed whether the glass is full or nearly empty. Water does not.',
    },
  },
  {
    id: 'fiole',
    emoji: '⚗️',
    prix: 85,
    nom: { fr: 'Une fiole', en: 'A flask' },
    fait: {
      fr: 'Son col étroit sert à faire tourner le liquide sans qu’il gicle. La forme d’un objet dit toujours à quoi il sert.',
      en: 'Its narrow neck lets you swirl the liquid without splashing. An object’s shape always tells you its job.',
    },
  },
  {
    id: 'ammonite',
    emoji: '🐚',
    prix: 100,
    nom: { fr: 'Une ammonite', en: 'An ammonite' },
    fait: {
      fr: 'Cet animal en spirale nageait il y a plus de cent millions d’années. Sa coquille est devenue pierre, chambre par chambre.',
      en: 'This spiral animal swam more than a hundred million years ago. Its shell turned to stone, chamber by chamber.',
    },
  },
  {
    id: 'microscope',
    emoji: '🔬',
    prix: 120,
    nom: { fr: 'Un microscope', en: 'A microscope' },
    fait: {
      fr: 'Le premier a révélé que l’eau d’une flaque grouille de bêtes vivantes. Personne ne voulait le croire.',
      en: 'The first one revealed that puddle water teems with living creatures. Nobody wanted to believe it.',
    },
  },
  {
    id: 'telescope',
    emoji: '🔭',
    prix: 140,
    nom: { fr: 'Un télescope', en: 'A telescope' },
    fait: {
      fr: 'Celui de Galilée grossissait vingt fois à peine. Ça a suffi pour découvrir les lunes de Jupiter.',
      en: 'Galileo’s magnified barely twenty times. That was enough to discover Jupiter’s moons.',
    },
  },
  {
    id: 'globe',
    emoji: '🌍',
    prix: 160,
    nom: { fr: 'Un globe', en: 'A globe' },
    fait: {
      fr: 'On savait la Terre ronde bien avant d’en faire le tour : son ombre sur la Lune est toujours un disque.',
      en: 'We knew the Earth was round long before sailing around it: its shadow on the Moon is always a disc.',
    },
  },
  {
    id: 'meteorite',
    emoji: '☄️',
    prix: 200,
    nom: { fr: 'Une météorite', en: 'A meteorite' },
    fait: {
      fr: 'La plupart sont plus vieilles que la Terre. Tenir une météorite, c’est tenir un morceau d’avant les planètes.',
      en: 'Most are older than the Earth. Holding a meteorite means holding a piece of the time before the planets.',
    },
  },
];
