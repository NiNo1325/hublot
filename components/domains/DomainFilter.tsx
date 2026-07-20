'use client';

import type { DomainDefinition, DomainId } from '@/lib/types';
import { domainStyles } from '@/lib/domain-styles';

interface DomainFilterProps {
  domains: DomainDefinition[];
  /** `null` signifie « tous les domaines », l'état par défaut. */
  selected: Set<DomainId> | null;
  onToggle: (id: DomainId) => void;
  onSelectAll: () => void;
}

export function DomainFilter({
  domains,
  selected,
  onToggle,
  onSelectAll,
}: DomainFilterProps) {
  const tousActifs = selected === null;

  return (
    <nav aria-label="Domaines scientifiques">
      <ul className="flex flex-wrap justify-center gap-3">
        <li>
          <button
            type="button"
            onClick={onSelectAll}
            aria-pressed={tousActifs}
            className="flex min-h-12 cursor-pointer items-center gap-2 rounded-full border-2 px-5 font-display text-base transition-colors"
            style={{
              borderColor: tousActifs ? 'var(--color-soleil)' : 'var(--color-encre-bord)',
              color: tousActifs ? 'var(--color-soleil)' : 'var(--color-craie-douce)',
            }}
          >
            <span aria-hidden="true">✨</span> Tout
          </button>
        </li>

        {domains.map((domain) => {
          const actif = tousActifs || selected.has(domain.id);
          const style = domainStyles[domain.id];
          return (
            <li key={domain.id}>
              <button
                type="button"
                onClick={() => onToggle(domain.id)}
                aria-pressed={actif}
                className="flex min-h-12 cursor-pointer items-center gap-2 rounded-full border-2 px-5 font-display text-base transition-colors"
                style={{
                  borderColor: actif ? style.teinte : 'var(--color-encre-bord)',
                  color: actif ? style.teinte : 'var(--color-craie-douce)',
                  backgroundColor: actif ? `${style.teinte}1a` : 'transparent',
                }}
              >
                <span aria-hidden="true">{domain.icon}</span>
                {domain.labels.fr}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
