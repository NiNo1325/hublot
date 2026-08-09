import { BarreOnglets } from '@/components/nav/BarreOnglets';

/**
 * Coquille des écrans principaux : le contenu, puis la barre d'onglets fixée en
 * bas. Le padding bas dégage la hauteur de la barre pour ne rien masquer.
 *
 * L'écran de première entrée (`/`) vit hors de ce groupe : il n'a pas de barre.
 */
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-1 flex-col pb-24">{children}</div>
      <BarreOnglets />
    </>
  );
}
