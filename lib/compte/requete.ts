import { cookies } from 'next/headers';
import { DUREE_SESSION_S, NOM_COOKIE, lireSession, signerSession } from './session';

/**
 * Le pont entre le cookie de la requête et l'identifiant du compte.
 *
 * Isolé ici pour que `lib/compte/session.ts` reste de la pure cryptographie,
 * testable sous node sans simuler Next.
 */

/** L'identifiant du compte connecté, ou `null` si personne ne l'est. */
export async function compteCourant(): Promise<string | null> {
  const boite = await cookies();
  return lireSession(boite.get(NOM_COOKIE)?.value);
}

export async function ouvrirSession(sub: string): Promise<void> {
  const boite = await cookies();
  boite.set(NOM_COOKIE, await signerSession(sub), {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: DUREE_SESSION_S,
  });
}

export async function fermerSession(): Promise<void> {
  const boite = await cookies();
  boite.delete(NOM_COOKIE);
}
