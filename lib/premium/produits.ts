/**
 * Identifiants des produits Google Play. Ils doivent correspondre EXACTEMENT aux
 * produits créés dans la Play Console (tâche Play Console). Trois façons de passer
 * premium : abonnement mensuel, abonnement annuel, ou achat unique à vie.
 *
 * À VALIDER : mensuel et annuel peuvent être modélisés comme deux produits
 * d'abonnement distincts, ou comme deux « base plans » d'un même abonnement. Le
 * code les traite comme trois références achetables ; confirmer le modèle retenu
 * dans la Play Console et ajuster ces constantes en conséquence.
 */
export const SKU_MENSUEL = 'hublot_mensuel';
export const SKU_ANNUEL = 'hublot_annuel';
export const SKU_A_VIE = 'hublot_avie';

/** Toutes les références premium à interroger auprès de Play. */
export const SKUS_PREMIUM = [SKU_MENSUEL, SKU_ANNUEL, SKU_A_VIE] as const;

/** Fiche Play, pour l'appel à installer depuis le web. */
export const URL_PLAY_STORE =
  'https://play.google.com/store/apps/details?id=com.hublot.app';
