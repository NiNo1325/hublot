import { SignJWT, jwtVerify } from 'jose';

/**
 * La session du parent, sans état.
 *
 * Le schéma que recommande la doc Next embarquée : un cookie signé, aucune
 * session en base. Le jeton ne contient qu'un champ — l'identifiant Google
 * pseudonyme du compte. Ni e-mail, ni nom, ni photo : ce qu'on ne stocke pas
 * ne peut ni fuir ni avoir à être déclaré.
 */

export const NOM_COOKIE = 'hublot_session';

/** Quatre-vingt-dix jours : assez pour qu'un parent ne se reconnecte pas chaque semaine. */
export const DUREE_SESSION_S = 60 * 60 * 24 * 90;

function secret(): Uint8Array | null {
  const brut = process.env.SESSION_SECRET;
  if (!brut) return null;
  return new TextEncoder().encode(brut);
}

export function sessionConfiguree(): boolean {
  return secret() !== null;
}

export async function signerSession(sub: string): Promise<string> {
  const cle = secret();
  if (!cle) throw new Error('SESSION_SECRET manquant : impossible de signer une session.');
  return new SignJWT({ sub })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${DUREE_SESSION_S}s`)
    .sign(cle);
}

/**
 * L'identifiant du compte derrière un cookie, ou `null`.
 *
 * Toute anomalie — signature invalide, expiration, secret absent au
 * déploiement — rend `null` plutôt que de lever : une session illisible doit
 * déconnecter, jamais faire tomber la page ni, pire, laisser passer.
 */
export async function lireSession(jeton: string | undefined | null): Promise<string | null> {
  const cle = secret();
  if (!cle || !jeton) return null;
  try {
    const { payload } = await jwtVerify(jeton, cle, { algorithms: ['HS256'] });
    return typeof payload.sub === 'string' && payload.sub.length > 0 ? payload.sub : null;
  } catch {
    return null;
  }
}
