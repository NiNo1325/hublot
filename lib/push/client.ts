'use client';

/**
 * Côté navigateur : (dé)abonnement aux notifications push.
 *
 * L'abonnement passe par le service worker déjà enregistré. La clé publique
 * VAPID (variable `NEXT_PUBLIC_VAPID_PUBLIC_KEY`) sert de clé serveur ; sans
 * elle, la fonctionnalité est simplement considérée comme indisponible.
 */
const CLE_VAPID = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;

export function pushSupporte(): boolean {
  return (
    typeof window !== 'undefined' &&
    'serviceWorker' in navigator &&
    'PushManager' in window &&
    'Notification' in window &&
    Boolean(CLE_VAPID)
  );
}

/** La clé VAPID base64url doit être fournie en Uint8Array à `subscribe`. */
function base64UrlVersUint8(base64: string): Uint8Array {
  const bourrage = '='.repeat((4 - (base64.length % 4)) % 4);
  const normal = (base64 + bourrage).replace(/-/g, '+').replace(/_/g, '/');
  const brut = atob(normal);
  const sortie = new Uint8Array(brut.length);
  for (let i = 0; i < brut.length; i += 1) sortie[i] = brut.charCodeAt(i);
  return sortie;
}

export async function abonnementCourant(): Promise<PushSubscription | null> {
  if (!pushSupporte()) return null;
  const enregistrement = await navigator.serviceWorker.ready;
  return enregistrement.pushManager.getSubscription();
}

export type ResultatActivation = 'ok' | 'refuse' | 'indisponible' | 'erreur';

export async function activerNotifications(): Promise<ResultatActivation> {
  if (!pushSupporte()) return 'indisponible';
  try {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') return 'refuse';
    const enregistrement = await navigator.serviceWorker.ready;
    const abonnement = await enregistrement.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: base64UrlVersUint8(CLE_VAPID as string) as BufferSource,
    });
    const reponse = await fetch('/api/push/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // `PushSubscription` se sérialise en { endpoint, expirationTime, keys }.
      body: JSON.stringify(abonnement),
    });
    return reponse.ok ? 'ok' : 'erreur';
  } catch {
    return 'erreur';
  }
}

export async function desactiverNotifications(): Promise<void> {
  const abonnement = await abonnementCourant();
  if (!abonnement) return;
  try {
    await fetch('/api/push/unsubscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ endpoint: abonnement.endpoint }),
    });
  } finally {
    await abonnement.unsubscribe();
  }
}
