import { Suspense } from 'react';
import { AgeGate } from '@/components/age/AgeGate';

export default function AccueilPage() {
  /*
    `useSearchParams` impose une frontière Suspense pour que la page reste
    prérendue en statique. Le repli est vide : l'écran d'âge s'affiche déjà
    après lecture du stockage, un état de chargement supplémentaire ne ferait
    que clignoter.
  */
  return (
    <Suspense fallback={null}>
      <AgeGate />
    </Suspense>
  );
}
