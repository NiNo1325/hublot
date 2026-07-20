import { describe, expect, it } from 'vitest';
import { pickFrenchVoice } from '@/lib/voices';

function voix(
  lang: string,
  name: string,
  localService = true,
): SpeechSynthesisVoice {
  return { lang, name, localService, default: false, voiceURI: name } as SpeechSynthesisVoice;
}

describe('pickFrenchVoice', () => {
  it('préfère fr-FR aux autres français', () => {
    const choix = pickFrenchVoice([
      voix('fr-CA', 'Canadienne'),
      voix('fr-FR', 'Française'),
    ]);
    expect(choix?.name).toBe('Française');
  });

  it('accepte un français régional à défaut de fr-FR', () => {
    const choix = pickFrenchVoice([voix('en-US', 'Anglaise'), voix('fr-CA', 'Canadienne')]);
    expect(choix?.name).toBe('Canadienne');
  });

  it('préfère une voix locale à une voix réseau à langue égale', () => {
    const choix = pickFrenchVoice([
      voix('fr-FR', 'Réseau', false),
      voix('fr-FR', 'Locale', true),
    ]);
    expect(choix?.name).toBe('Locale');
  });

  it('renvoie null sans voix française, pour laisser le navigateur décider', () => {
    expect(pickFrenchVoice([voix('en-US', 'Anglaise')])).toBeNull();
  });

  it('renvoie null sur une liste vide', () => {
    expect(pickFrenchVoice([])).toBeNull();
  });
});
