import { createRemoteJWKSet, jwtVerify, type JWTVerifyGetKey } from 'jose';

/**
 * Vérification du jeton d'identité rendu par Google Identity Services.
 *
 * Aucune bibliothèque d'authentification : le jeton est un JWT signé par
 * Google, et `jose` — déjà présent pour la session — sait le vérifier contre
 * le jeu de clés publiques de Google. Trois contrôles font tout le travail :
 * la signature, l'émetteur, et l'audience (sans quoi un jeton émis pour une
 * autre application ouvrirait un compte chez nous).
 */

/** Google émet ses jetons tantôt avec le schéma, tantôt sans. Les deux sont légitimes. */
export const EMETTEURS_GOOGLE = ['https://accounts.google.com', 'accounts.google.com'];

const URL_CLES = 'https://www.googleapis.com/oauth2/v3/certs';

/*
  Construit une seule fois par instance : `createRemoteJWKSet` garde les clés
  en cache et ne rappelle Google qu'à la rotation. Créer le jeu à chaque
  requête ferait un aller-retour réseau à chaque connexion.
*/
let clesDistantes: JWTVerifyGetKey | null = null;

function clesGoogle(): JWTVerifyGetKey {
  clesDistantes ??= createRemoteJWKSet(new URL(URL_CLES));
  return clesDistantes;
}

export interface OptionsVerification {
  /** Injectable pour les tests, qui utilisent une paire de clés locale. */
  jwks?: JWTVerifyGetKey;
  audience?: string;
}

/**
 * L'identifiant du compte Google derrière un jeton, ou `null`.
 *
 * On n'en retient que `sub`. Le jeton contient aussi l'e-mail, le nom et la
 * photo du parent : ils sont délibérément ignorés, et ne sont donc jamais
 * écrits nulle part.
 */
export async function verifierJetonGoogle(
  jeton: string,
  options: OptionsVerification = {},
): Promise<string | null> {
  const audience = options.audience ?? process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  if (!jeton || !audience) return null;

  try {
    const { payload } = await jwtVerify(jeton, options.jwks ?? clesGoogle(), {
      issuer: EMETTEURS_GOOGLE,
      audience,
    });
    return typeof payload.sub === 'string' && payload.sub.length > 0 ? payload.sub : null;
  } catch {
    return null;
  }
}
