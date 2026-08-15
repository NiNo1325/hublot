/**
 * Petit intitulé de section, en capitales, au-dessus d'une carte de rangées.
 *
 * Né dans les Réglages, partagé depuis que l'écran de Lumi range lui aussi son
 * contenu en groupes : deux menus qui se ressemblent doivent se ressembler
 * exactement, sinon l'enfant croit changer d'application en changeant d'onglet.
 */
export function Intitule({ children }: { children: string }) {
  return (
    <h2 className="px-2 font-display text-xs font-semibold uppercase tracking-[0.15em] text-craie-douce">
      {children}
    </h2>
  );
}
