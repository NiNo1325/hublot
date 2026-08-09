import { redirect } from 'next/navigation';
import { cards } from '@/content/cards';
import { domains } from '@/content/domains';
import { DomaineView } from '@/components/cards/DomaineView';

/** Une route statique par domaine, pré-générée au build. */
export function generateStaticParams() {
  return domains.map((d) => ({ domaine: d.id }));
}

export default async function DomainePage({
  params,
}: {
  params: Promise<{ domaine: string }>;
}) {
  const { domaine } = await params;
  const domain = domains.find((d) => d.id === domaine);
  // Slug inconnu : retour doux à la grille des mondes, plutôt qu'un 404.
  if (!domain) redirect('/decouvrir');

  const cartesDuDomaine = cards.filter((c) => c.domainId === domain.id);
  return <DomaineView domain={domain} cards={cartesDuDomaine} />;
}
