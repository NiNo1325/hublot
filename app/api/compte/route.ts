import { NextResponse } from 'next/server';
import { compteCourant, fermerSession } from '@/lib/compte/requete';
import { effacerProgression } from '@/lib/compte/store';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * L'état de la session, et rien d'autre.
 *
 * Ne rend jamais l'identifiant du compte : la page n'en a aucun usage, et le
 * publier reviendrait à exposer un identifiant stable à tout script tiers que
 * la page viendrait à charger un jour.
 */
export async function GET() {
  return NextResponse.json({ connecte: (await compteCourant()) !== null });
}

/**
 * Efface toutes les données du compte, puis déconnecte.
 *
 * Le Play Store l'exige de toute app permettant de créer un compte, et cette
 * app-ci le doit doublement : les familles qui confient une progression
 * d'enfant doivent pouvoir la retirer sans écrire à personne.
 *
 * La progression locale n'est pas touchée — l'enfant qui joue sur cet appareil
 * garde ses cartes. Seule la copie en ligne disparaît.
 */
export async function DELETE() {
  const sub = await compteCourant();
  if (!sub) return NextResponse.json({ ok: false, erreur: 'non connecté' }, { status: 401 });

  try {
    await effacerProgression(sub);
    await fermerSession();
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, erreur: 'effacement impossible' }, { status: 500 });
  }
}
