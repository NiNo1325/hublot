/**
 * Déduit le droit premium à partir des achats renvoyés par Google Play.
 *
 * Isolé du reste parce que c'est la seule partie décidable sans navigateur : la
 * Digital Goods API ne vit que dans la TWA. `listPurchases` ne renvoie que les
 * achats actifs (abonnement en cours, achat unique possédé), donc posséder
 * n'importe quelle référence premium suffit à débloquer.
 */
export function estPremiumDapresAchats(
  achatsItemIds: readonly string[],
  skusPremium: readonly string[],
): boolean {
  const premium = new Set(skusPremium);
  return achatsItemIds.some((id) => premium.has(id));
}
