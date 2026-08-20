import { NextResponse } from 'next/server';
import { verifierJetonGoogle } from '@/lib/compte/google';
import { ouvrirSession } from '@/lib/compte/requete';
import { sessionConfiguree } from '@/lib/compte/session';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Ouvre une session à partir du jeton d'identité rendu par Google.
 *
 * Du jeton, on ne retient que `sub` — l'identifiant pseudonyme du compte.
 * L'e-mail, le nom et la photo qu'il contient ne sont ni lus, ni journalisés,
 * ni stockés.
 */
export async function POST(request: Request) {
  if (!sessionConfiguree()) {
    return NextResponse.json({ ok: false, erreur: 'compte indisponible' }, { status: 503 });
  }

  try {
    const { credential } = (await request.json()) as { credential?: unknown };
    if (typeof credential !== 'string' || credential.length === 0) {
      return NextResponse.json({ ok: false, erreur: 'jeton manquant' }, { status: 400 });
    }

    const sub = await verifierJetonGoogle(credential);
    if (!sub) {
      return NextResponse.json({ ok: false, erreur: 'jeton refusé' }, { status: 401 });
    }

    await ouvrirSession(sub);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, erreur: 'connexion impossible' }, { status: 500 });
  }
}
