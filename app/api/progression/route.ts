import { NextResponse } from 'next/server';
import { compteCourant } from '@/lib/compte/requete';
import { ecrireProgression, lireProgression } from '@/lib/compte/store';
import { fusionner } from '@/lib/sync/fusion';
import { lireBloc } from '@/lib/sync/validation';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** La sauvegarde du compte, telle quelle. */
export async function GET() {
  const sub = await compteCourant();
  if (!sub) return NextResponse.json({ ok: false, erreur: 'non connecté' }, { status: 401 });

  try {
    return NextResponse.json({ ok: true, bloc: await lireProgression(sub) });
  } catch {
    return NextResponse.json({ ok: false, erreur: 'stockage indisponible' }, { status: 500 });
  }
}

/**
 * Dépose une progression, fusionnée avec celle déjà stockée.
 *
 * Le serveur fusionne au lieu de remplacer, et c'est ce qui rend la
 * synchronisation sûre : si la tablette et le téléphone déposent au même
 * moment, aucun des deux n'écrase l'autre. La fusion étant commutative et
 * idempotente, l'ordre d'arrivée est sans importance — et rejouer une requête
 * ne change rien.
 *
 * La réponse renvoie le bloc fusionné : le client n'a pas besoin d'un second
 * aller-retour pour savoir où il en est.
 */
export async function PUT(request: Request) {
  const sub = await compteCourant();
  if (!sub) return NextResponse.json({ ok: false, erreur: 'non connecté' }, { status: 401 });

  try {
    const recu = lireBloc(await request.json());
    const fusionne = fusionner(await lireProgression(sub), recu);
    await ecrireProgression(sub, fusionne);
    return NextResponse.json({ ok: true, bloc: fusionne });
  } catch {
    return NextResponse.json({ ok: false, erreur: 'stockage indisponible' }, { status: 500 });
  }
}
