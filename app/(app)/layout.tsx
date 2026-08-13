import { cards } from '@/content/cards';
import { domains } from '@/content/domains';
import { BarreOnglets } from '@/components/nav/BarreOnglets';
import { CelebrationProvider } from '@/components/celebration/CelebrationProvider';
import { DetecteurProgres } from '@/components/celebration/DetecteurProgres';
import { TutorielGate } from '@/components/tutoriel/TutorielGate';

/**
 * Coquille des écrans principaux : le contenu, puis la barre d'onglets fixée en
 * bas. Le padding bas dégage la hauteur de la barre pour ne rien masquer.
 *
 * Le `CelebrationProvider` enveloppe le tout pour que Lumi puisse surgir
 * féliciter l'enfant depuis n'importe quel écran (montée de rang au quizz ou
 * dans le parcours).
 *
 * L'écran de première entrée (`/`) vit hors de ce groupe : il n'a pas de barre.
 */
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <CelebrationProvider>
      <DetecteurProgres cards={cards} domains={domains} />
      <TutorielGate />
      <div className="flex flex-1 flex-col pb-24">{children}</div>
      <BarreOnglets />
    </CelebrationProvider>
  );
}
