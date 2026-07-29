/**
 * Interrupteur unique du freemium.
 *
 * Livré à `false` : l'app reste entièrement gratuite, sans cadenas ni paywall.
 * On l'allume en posant `NEXT_PUBLIC_PREMIUM_ACTIF=true` dans l'environnement
 * (Vercel) puis en redéployant — aucun changement de code n'est nécessaire.
 * Le préfixe `NEXT_PUBLIC_` rend la valeur lisible côté client, où vit le gating.
 */
export function premiumActif(): boolean {
  return process.env.NEXT_PUBLIC_PREMIUM_ACTIF === 'true';
}
