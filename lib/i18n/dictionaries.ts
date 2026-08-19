import type { Locale } from '@/lib/types';

/**
 * Chaînes de l'interface, hors contenu.
 *
 * Le contenu (cartes, quizz, accroches) vit dans `content/` et se décline par
 * `Localise<T>`. Les libellés de l'interface — onglets, boutons, messages —
 * n'ont pas de fichier à eux : ils sont ici, dans un simple objet TypeScript.
 * Pas de bibliothèque d'i18n : elles apportent le chargement paresseux et la
 * négociation de langue, dont une application entièrement statique de cette
 * taille n'a pas l'usage, au prix d'un format de fichier et d'un typage plus
 * lâche que le nôtre.
 *
 * Les clés sont plates et préfixées par zone (`nav.`, `quizz.`, …). C'est ce
 * qui permet de traduire l'interface zone par zone, en parallèle, sans que deux
 * traducteurs se marchent dessus.
 *
 * Une valeur est une chaîne, ou une fonction quand elle dépend d'une variable —
 * un pluriel, par exemple, dont la règle n'est pas la même d'une langue à
 * l'autre (« 0 carte » en français, « 0 cards » en anglais). La fonction est
 * traduite comme le reste : chaque langue apporte sa propre règle.
 */
const fr = {
  'nav.decouvrir': 'Découvrir',
  'nav.quizz': 'Quizz',
  'nav.parcours': 'Parcours',
  'nav.lumi': 'Lumi',
  'nav.reglages': 'Réglages',

  'decouvrir.titre': 'Qu’est-ce qui t’intéresse ?',
  'decouvrir.sous-titre':
    'Ta bibliothèque : explore et revois ce que tu veux, quand tu veux, sans ordre imposé.',
  'decouvrir.chemin-guide': 'Envie d’un chemin guidé ? → Parcours',

  'monde.maitrise': 'maîtrisé',
  'monde.ecouter': (accroche: string) => `Écouter : ${accroche}`,
  'monde.progression': (nom: string, vues: number, total: number) =>
    `${nom}, ${vues} carte${vues > 1 ? 's' : ''} sur ${total} écoutée${vues > 1 ? 's' : ''}`,
  'monde.termine': ', terminé',

  'carte.fermer': 'Fermer la carte',

  'narration.precedente': 'Étape précédente',
  'narration.pause': 'Pause',
  'narration.reprendre': 'Reprendre',
  'narration.ecouter': 'Écouter',
  'narration.reecouter': 'Réécouter',
  'narration.silencieux':
    'Le son n’a pas pu être chargé. L’explication défile à l’écrit.',

  'quizz.vide.titre': 'Écoute d’abord quelques cartes',
  'quizz.vide.texte':
    'Le quizz ne pose des questions que sur les cartes que tu as déjà écoutées. Va en découvrir une ou deux, puis reviens jouer.',
  'quizz.vide.action': 'Découvrir des cartes',
  'quizz.menu.titre': 'Sur quoi joue-t-on ?',
  'quizz.menu.texte': 'Choisis un monde, ou joue sur tout à la fois.',
  'quizz.tout': 'Tout',
  'quizz.menu.total': (n: number) => `${n} carte${n > 1 ? 's' : ''} au total`,
  'quizz.menu.cartes': (n: number) => `${n} carte${n > 1 ? 's' : ''}`,
  'quizz.progression': (i: number, n: number) => `Question ${i} sur ${n}`,
  'quizz.arreter': 'Arrêter la lecture',
  'quizz.ecouter-question': 'Écouter la question',
  'quizz.ecouter-reponse': (texte: string) => `Écouter la réponse : ${texte}`,
  'quizz.juste': 'Bravo, c’est ça !',
  'quizz.presque': 'Pas tout à fait…',
  'quizz.suivante': 'Question suivante',
  'quizz.resultat': 'Voir le résultat',
  'quizz.fin.bravo': 'Bravo ! 🎉',
  'quizz.fin.score': (justes: number, total: number) =>
    `${justes} bonne${justes > 1 ? 's' : ''} réponse${justes > 1 ? 's' : ''} sur ${total}`,
  'quizz.fin.total': (etoiles: number) => `${etoiles} au total —`,
  'quizz.fin.texte':
    'Chaque question t’a rappelé quelque chose. Rejoue quand tu veux, les questions changent.',
  'quizz.fin.suivant': 'Sujet suivant',
  'quizz.fin.rejouer': 'Rejouer',
  'quizz.fin.rejouer-sujet': 'Rejouer ce sujet',
  'quizz.fin.autre-sujet': 'Choisir un autre sujet',
  'quizz.fin.choisir-sujet': 'Choisir un sujet',

  'cles.gagnee': (nom: string) => `+1 🔑 — la clé de ${nom}`,
  'cles.deja': 'Ces cartes étaient déjà comprises : leurs clés sont déjà à toi.',
  'cles.trousseau': (n: number) =>
    n > 0
      ? `Tu as ${n} clé${n > 1 ? 's' : ''} à dépenser au musée`
      : 'Toutes tes clés sont déjà servies',
  'nav.musee': 'Le musée',
  'invitation.titre': 'Une question ?',
  'invitation.texte': (nom: string) =>
    nom
      ? `Réponds juste et tu gagnes la clé de ${nom}, enfermé au musée.`
      : 'Réponds juste et tu gagnes une clé pour le musée.',
  'invitation.oui': 'J’essaie !',
  'invitation.non': 'Plus tard',
  'action.delivrer': (nom: string, prix: number) =>
    `Tu peux délivrer quelqu’un ! ${nom}, pour ${prix} 🔑`,
  'action.repondre': (n: number) =>
    `Réponds à une question pour gagner une clé — il t’en reste ${n} à essayer`,
  'action.ecouter': (n: number) =>
    `Écoute une carte pour gagner une étoile — il t’en reste ${n} à découvrir`,
  'action.complet': 'Tous les savants sont délivrés. Bravo !',
  'musee.chez-lumi': 'Chez Lumi',
  'musee.ligne-du-temps': 'La ligne du temps',
  'musee.dates.avant': (an: number) => `jusqu’en ${an}`,
  'musee.dates.depuis': (an: number) => `depuis ${an}`,
  'musee.titre': 'Le musée des savants',
  'musee.texte': 'Ils ont été oubliés, et l’oubli les a enfermés. Apprends ce qu’ils ont trouvé, et tu les délivres.',
  'musee.compte': (n: number, total: number) => `${n} délivrés sur ${total}`,
  'musee.vers-histoire': 'Lumi t’explique',
  'musee.legende': 'Chaque bonne réponse te donne une clé. Une cellule coûte autant de clés que le savant a de cartes.',
  'musee.cellule-libre': (nom: string) => `${nom}, délivré`,
  'musee.cellule-fermee': (prix: number) => `Cellule fermée, ${prix} clés`,
  'musee.inconnu': 'Qui est-ce ?',
  'musee.enferme': (n: number) =>
    `Ce savant a inspiré ${n} carte${n > 1 ? 's' : ''}. Ouvre sa cellule pour découvrir qui il est.`,
  'musee.liberer': 'Délivrer',
  'musee.delivre': 'Délivré !',
  'musee.manque': (n: number) => `Il te manque ${n} 🔑`,
  'musee.fermer': 'Fermer',
  'musee.vivant': (n: number) => `né en ${n}`,
  'musee.epoque.antiquite': 'L’Antiquité',
  'musee.epoque.moyen-age': 'Le Moyen Âge',
  'musee.epoque.renaissance': 'La Renaissance',
  'musee.epoque.lumieres': 'Le siècle des Lumières',
  'musee.epoque.dix-neuvieme': 'Le XIXᵉ siècle',
  'musee.epoque.vingtieme': 'Le XXᵉ siècle',
  'musee.epoque.aujourdhui': 'Aujourd’hui',
  'histoire.titre': 'Pourquoi ils sont enfermés',
  'histoire.ecouter': 'Raconte-moi',
  'histoire.arreter': 'Arrêter',
  'histoire.action': 'Au musée !',
  'jeu.liens.titre': 'Les liens',
  'jeu.liens.texte': 'Relie chaque savant à sa découverte.',
  'liens.titre': 'Les liens',
  'liens.regle': 'Touche un savant, puis sa découverte. Quand tous les traits sont tirés, c’est gagné !',
  'liens.demarrer': 'Commencer',
  'liens.commence': 'Touche un savant à gauche',
  'liens.maintenant': 'Maintenant, sa découverte à droite',
  'liens.avancement': (faits: number, total: number) => `${faits} lien${faits > 1 ? 's' : ''} sur ${total}`,
  'liens.gagne': 'Tous les liens sont faits !',
  'liens.rejouer': 'Rejouer',
  'liens.retour': 'Retour aux jeux',
  'fete.on-y-va': 'On y va !',
  'fete.bien-joue': 'Bien joué !',
  'fete.en-forme': 'En pleine forme !',
  'fete.en-feu': 'En feu ! 🔥',
  'fete.serie': (n: number) => `${n} bonnes réponses d’affilée`,
  'fete.nouveau-rang': 'Nouveau rang !',

  'parcours.titre': 'Ton aventure',
  'parcours.avancement': (faites: number, total: number) =>
    `Lumi t’accompagne, une carte après l’autre · ${faites}/${total} découvertes`,
  'parcours.prochaine': 'Prochaine étape',
  'parcours.continuer': 'Continuer →',
  'parcours.fini.titre': 'Bravo, aventure terminée ! 🎉',
  'parcours.fini.texte':
    'Tu as découvert toutes les cartes. Rejoue au quizz, ou explore librement ce que tu veux revoir.',
  'parcours.fini.quizz': 'Aller au quizz',
  'parcours.fini.explorer': 'Explorer librement',
  'parcours.jalon': (vues: number, total: number) => `${vues}/${total} cartes`,

  'lumi.titre': 'Ton évolution',
  'lumi.progression-rang': 'Progression vers le rang suivant',
  'lumi.reste': (reste: number) => `plus que ${reste}`,
  'lumi.pour': 'pour',
  'lumi.rang-max': 'Rang maximum atteint ! 🎉',
  'lumi.bilan': (explores: number, maitrises: number, total: number) =>
    `${explores}/${total} explorés · ${maitrises}/${total} maîtrisés`,
  'lumi.bilan-cartes': (ecoutees: number, reussies: number, total: number) =>
    `${ecoutees} carte${ecoutees > 1 ? 's' : ''} écoutée${ecoutees > 1 ? 's' : ''} sur ${total} · ${reussies} réussie${reussies > 1 ? 's' : ''} au quizz`,
  'lumi.badges-legende': 'Deux badges par monde : 🧭 quand tu as écouté toutes ses cartes, 🏅 quand tu as réussi toutes ses questions.',
  'lumi.reste-ecouter': (n: number) =>
    `encore ${n} carte${n > 1 ? 's' : ''} à écouter pour 🧭`,
  'lumi.reste-reussir': (n: number) =>
    `encore ${n} question${n > 1 ? 's' : ''} à réussir pour 🏅`,
  'lumi.monde-complet': 'les deux badges sont à toi ✓',
  'cabinet.titre': 'Le cabinet de curiosités',
  'cabinet.texte':
    'Remplis ton étagère avec tes étoiles. Touche un objet : il t’apprend quelque chose.',
  'cabinet.solde': (n: number) => `il te reste ${n}`,
  'cabinet.etagere': (n: number, total: number) => `Ton étagère · ${n} sur ${total}`,
  'cabinet.emplacement': (nom: string, prix: number) =>
    `${nom}, place vide, ${prix} étoiles`,
  'cabinet.manque': (n: number) => `Il te manque ${n} ⭐ pour le rapporter sur ton étagère.`,
  'cabinet.gagner': 'Les étoiles se gagnent en répondant juste, dans les jeux et le parcours.',
  'lumi.retour': 'Retour à Lumi',
  'lumi.section-progression': 'Ta progression',
  'lumi.section-collection': 'Tes trouvailles',
  'lumi.vers-mondes': 'Tes mondes',
  'lumi.vers-cabinet': 'Le cabinet de curiosités',
  'lumi.vers-cabinet-detail': (n: number, total: number) => `${n} objets sur ${total}`,
  'lumi.rangs': 'Les rangs de Lumi',
  'lumi.vers-rangs-detail': (n: number) => `${n} rangs à gravir`,
  'lumi.origine-etoiles':
    'Lumi grandit avec tes étoiles. Tu en gagnes une à chaque bonne réponse, dans les jeux et dans le parcours. Écouter une carte n’en donne pas : c’est ce qui t’apprend à répondre.',
  'lumi.rang-atteint': 'atteint ✓',
  'lumi.rang-aria': (nom: string, seuil: number, atteint: boolean) =>
    `${nom}, ${seuil} étoiles${atteint ? ', atteint' : ''}`,
  'lumi.monde': (vues: number, reussies: number, total: number) =>
    `${vues}/${total} écoutée${total > 1 ? 's' : ''} · ${reussies}/${total} réussie${total > 1 ? 's' : ''}`,

  'reglages.titre': 'Réglages',
  'reglages.profil': 'Profil',
  'reglages.langue': 'Langue',
  'reglages.ecoute': 'Écoute & alertes',
  'reglages.aide': 'Aide',
  'reglages.age-enregistre': 'Enregistré ✓',
  'reglages.enregistrer-age': 'Enregistrer l’âge',
  'reglages.hors-ligne': 'Écouter sans internet',
  'reglages.hors-ligne.maj': 'Mise à jour',
  'reglages.hors-ligne.pret': 'Prêt ✓',
  'reglages.hors-ligne.incomplet': 'Incomplet',
  'reglages.tutoriel': 'Revoir la présentation',
  'reglages.reinitialiser': (n: number) => `Réinitialiser la progression (${n} cartes)`,
  'reglages.confirmer': 'Confirmer ? Les cartes redeviendront neuves',

  'tuto.aria': 'Présentation de Hublot',
  'tuto.passer': 'Passer',
  'tuto.arreter': 'Arrêter la lecture',
  'tuto.ecouter': 'Écouter',
  'tuto.suivant': 'Suivant',
  'tuto.commencer': 'C’est parti !',

  'age.moins': 'Un an de moins',
  'age.plus': 'Un an de plus',
  'narration.etapes': 'Étapes de l’explication',
  'parcours.une-question': 'Une question sur cette carte',
  'notifications.aria': 'Recevoir les notifications',
  'notifications.texte': 'Nouvelles cartes et mises à jour de l’application.',
  'parcours.quitter': 'Quitter le parcours',

  'hl.mo': (n: number) => `${n} Mo`,
  'hl.titre': 'Écouter sans internet',
  'hl.texte':
    'En voiture, en avion, ou quand le réseau ne suit pas. Une fois les cartes téléchargées, tout fonctionne sans connexion.',
  'hl.indisponible':
    'Ce navigateur ne permet pas le téléchargement hors connexion. L’application reste utilisable en ligne.',
  'hl.detail': (e: string) => `Détail : ${e}`,
  'hl.maj-dispo': (taille: string) => `Mise à jour disponible — ${taille}`,
  'hl.pret': (taille: string) => `Prêt hors connexion — ${taille}`,
  'hl.en-cours': (fait: string, total: string) => `Téléchargement… ${fait} sur ${total}`,
  'hl.incomplet': (fait: string, total: string) => `Incomplet — ${fait} sur ${total}`,
  'hl.a-telecharger': (taille: string) => `À télécharger — ${taille}`,
  'hl.telechargement': 'Téléchargement en cours…',
  'hl.mettre-a-jour': 'Mettre à jour',
  'hl.reprendre': 'Reprendre le téléchargement',
  'hl.tout': 'Tout télécharger',
  'hl.liberer': 'Libérer l’espace',
  'hl.conseil':
    'À télécharger de préférence en wifi. Le téléchargement peut être interrompu et repris : ce qui est déjà là n’est pas redemandé.',
  'hl.installer-titre': 'Installe Hublot sur ton écran d’accueil',
  'hl.installer-texte':
    'pour que le téléchargement soit conservé. Sans installation, le téléphone peut l’effacer quand il manque de place. Dans le menu du navigateur : « Installer l’application » ou « Ajouter à l’écran d’accueil ».',
  'hl.retour': 'Retour au menu',

  'carte.deja-ecoutee': ', déjà écoutée',
  'carte.verrouillee': ', premium — à débloquer',

  'commun.bientot': 'bientôt',

  'nav.joue': 'Joue',

  'hub.decouvrir.titre': 'Comment veux-tu découvrir ?',
  'hub.decouvrir.texte': 'Deux façons d’avancer. Tu peux changer quand tu veux.',
  'mode.explorer.titre': 'Exploration libre',
  'mode.explorer.texte':
    'Choisis ton monde et la carte qui t’attire. Aucun ordre, aucune obligation.',
  'mode.parcours.titre': 'Parcours guidé',
  'mode.parcours.texte':
    'Lumi t’emmène de carte en carte, avec une petite question après chacune.',

  'hub.joue.titre': 'À quoi joue-t-on ?',
  'hub.joue.texte': 'Quatre façons de jouer avec les cartes.',
  'jeu.quizz.titre': 'Quizz',
  'jeu.quizz.texte':
    'Des questions sur tes cartes. Chaque bonne réponse te fait gagner une étoile.',
  'jeu.memo.titre': 'Mémo des savants',
  'jeu.memo.texte': 'Retrouve les paires de portraits, et apprends leur nom. Dès 3 ans.',
  'jeu.chrono.titre': 'Défi chrono',
  'jeu.chrono.texte': 'Le quizz, mais contre la montre.',

  'mode.savants.titre': 'Le mur des savants',
  'mode.savants.texte':
    'Celles et ceux qui ont trouvé tout ça avant toi, et ce qu’on raconte sur eux.',
  'savants.titre': 'Le mur des savants',
  'savants.texte':
    'Vingt personnes, mille ans de curiosité. Touche un portrait pour savoir ce qu’on lui doit.',
  'savants.fermer': 'Fermer la fiche',
  'savants.cartes': 'À écouter ensuite',
  'savants.ecouter': 'Écouter la fiche',
  'savants.arreter': 'Arrêter la lecture',

  'chrono.titre': 'Défi chrono',
  'chrono.texte': (secondes: number) =>
    `${secondes} secondes, un maximum de bonnes réponses. Pas d’explications : on file.`,
  'chrono.demarrer': 'C’est parti !',
  'chrono.podium': 'Tes meilleurs scores',
  'chrono.score': (n: number) => `${n} bonne${n > 1 ? 's' : ''} réponse${n > 1 ? 's' : ''}`,
  'chrono.record': 'Nouveau record ! 🎉',
  'chrono.fin': (n: number) =>
    `${n} bonne${n > 1 ? 's' : ''} réponse${n > 1 ? 's' : ''} en une minute`,
  'chrono.rejouer': 'Rejouer',
  'chrono.retour': 'Retour aux jeux',
  'chrono.trop-jeune.titre': 'Ce jeu est pour les plus grands',
  'chrono.trop-jeune.texte':
    'Le chrono va trop vite pour qu’on ait le temps de tout écouter. Va plutôt faire le quizz : là, on prend le temps.',

  'memo.savants.titre': 'Mémo des savants',
  'memo.savants.regle':
    'Retourne les tuiles deux par deux et retrouve les paires de portraits. À chaque paire, tu apprends un nom.',
  'memo.cartes.regle':
    'Retourne les tuiles deux par deux et associe chaque dessin au nom de sa carte. Seules les cartes que tu as écoutées sont dans le jeu.',
  'memo.pas-assez':
    'Écoute d’abord deux ou trois cartes : ce jeu ne pioche que dans celles que tu connais.',
  'memo.demarrer': 'Commencer',
  'memo.coups': (n: number) => `${n} coup${n > 1 ? 's' : ''}`,
  'memo.bravo': 'Toutes les paires trouvées ! 🎉',
  'memo.rejouer': 'Nouvelle partie',
  'memo.tuile-cachee': 'Tuile cachée',
  'memo.trop-jeune.texte':
    'Celui-ci associe un dessin au nom écrit de sa carte. Le mémo des savants, lui, est fait pour toi.',
};

/** Toutes les clés traduisibles, dérivées de la source française. */
export type CleUI = keyof typeof fr;

/**
 * Traductions, langue par langue. Chaque entrée est partielle : une clé pas
 * encore traduite retombe sur le français, si bien qu'une traduction en cours
 * n'affiche jamais de trou ni de clé brute à l'écran.
 */
const traductions: Record<Locale, Partial<typeof fr>> = {
  fr,
  en: {
    'nav.decouvrir': 'Explore',
    'nav.quizz': 'Quiz',
    'nav.parcours': 'Journey',
    'nav.lumi': 'Lumi',
    'nav.reglages': 'Settings',

    'decouvrir.titre': 'What are you curious about?',
    'decouvrir.sous-titre':
      'Your library: explore and revisit whatever you like, whenever you like, in any order.',
    'decouvrir.chemin-guide': 'Fancy a guided path? → Journey',

    'monde.maitrise': 'mastered',
    'monde.ecouter': (accroche: string) => `Listen: ${accroche}`,
    // L'anglais met le singulier au seul 1, là où le français l'étend à 0.
    'monde.progression': (nom: string, vues: number, total: number) =>
      `${nom}, ${vues} card${vues === 1 ? '' : 's'} of ${total} listened to`,
    'monde.termine': ', complete',

    'carte.fermer': 'Close the card',

    'narration.precedente': 'Previous step',
    'narration.pause': 'Pause',
    'narration.reprendre': 'Resume',
    'narration.ecouter': 'Listen',
    'narration.reecouter': 'Listen again',
    'narration.silencieux':
      'The sound could not be loaded. The explanation scrolls as text.',

    'quizz.vide.titre': 'Listen to a few cards first',
    'quizz.vide.texte':
      'The quiz only asks about cards you have already listened to. Go and discover one or two, then come back and play.',
    'quizz.vide.action': 'Discover some cards',
    'quizz.menu.titre': 'What shall we play on?',
    'quizz.menu.texte': 'Pick a world, or play on everything at once.',
    'quizz.tout': 'Everything',
    'quizz.menu.total': (n: number) => `${n} card${n === 1 ? '' : 's'} in total`,
    'quizz.menu.cartes': (n: number) => `${n} card${n === 1 ? '' : 's'}`,
    'quizz.progression': (i: number, n: number) => `Question ${i} of ${n}`,
    'quizz.arreter': 'Stop playing',
    'quizz.ecouter-question': 'Listen to the question',
    'quizz.ecouter-reponse': (texte: string) => `Listen to the answer: ${texte}`,
    'quizz.juste': 'Well done, that’s it!',
    'quizz.presque': 'Not quite…',
    'quizz.suivante': 'Next question',
    'quizz.resultat': 'See the result',
    'quizz.fin.bravo': 'Well done! 🎉',
    'quizz.fin.score': (justes: number, total: number) =>
      `${justes} right answer${justes === 1 ? '' : 's'} out of ${total}`,
    'quizz.fin.total': (etoiles: number) => `${etoiles} in total —`,
    'quizz.fin.texte':
      'Every question reminded you of something. Play again whenever you like — the questions change.',
    'quizz.fin.suivant': 'Next topic',
    'quizz.fin.rejouer': 'Play again',
    'quizz.fin.rejouer-sujet': 'Play this topic again',
    'quizz.fin.autre-sujet': 'Choose another topic',
    'quizz.fin.choisir-sujet': 'Choose a topic',

    'cles.gagnee': (nom: string) => `+1 🔑 — ${nom}’s key`,
    'cles.deja': 'You had already understood these cards: their keys are already yours.',
    'cles.trousseau': (n: number) =>
      n > 0
        ? `You have ${n} key${n === 1 ? '' : 's'} to spend at the museum`
        : 'All your keys have been used',
    'nav.musee': 'Museum',
    'invitation.titre': 'A question?',
    'invitation.texte': (nom: string) =>
      nom
        ? `Answer correctly and you win ${nom}’s key — they are locked in the museum.`
        : 'Answer correctly and you win a key for the museum.',
    'invitation.oui': 'I’ll try!',
    'invitation.non': 'Later',
    'action.delivrer': (nom: string, prix: number) =>
      `You can free someone! ${nom}, for ${prix} 🔑`,
    'action.repondre': (n: number) =>
      `Answer a question to win a key — ${n} still to try`,
    'action.ecouter': (n: number) =>
      `Listen to a card to win a star — ${n} still to discover`,
    'action.complet': 'Every scientist is free. Well done!',
    'musee.chez-lumi': 'Lumi’s rooms',
    'musee.ligne-du-temps': 'Timeline',
    'musee.dates.avant': (an: number) => `up to ${an}`,
    'musee.dates.depuis': (an: number) => `since ${an}`,
    'musee.titre': 'The museum of scientists',
    'musee.texte': 'They were forgotten, and forgetting locked them away. Learn what they found, and you set them free.',
    'musee.compte': (n: number, total: number) => `${n} freed of ${total}`,
    'musee.vers-histoire': 'Lumi explains',
    'musee.legende': 'Every right answer gives you a key. A cell costs as many keys as the scientist has cards.',
    'musee.cellule-libre': (nom: string) => `${nom}, freed`,
    'musee.cellule-fermee': (prix: number) => `Locked cell, ${prix} keys`,
    'musee.inconnu': 'Who is this?',
    'musee.enferme': (n: number) =>
      `This scientist inspired ${n} card${n > 1 ? 's' : ''}. Open the cell to find out who they are.`,
    'musee.liberer': 'Set free',
    'musee.delivre': 'Freed!',
    'musee.manque': (n: number) => `You need ${n} more 🔑`,
    'musee.fermer': 'Close',
    'musee.vivant': (n: number) => `born in ${n}`,
    'musee.epoque.antiquite': 'Antiquity',
    'musee.epoque.moyen-age': 'The Middle Ages',
    'musee.epoque.renaissance': 'The Renaissance',
    'musee.epoque.lumieres': 'The Enlightenment',
    'musee.epoque.dix-neuvieme': 'The 19th century',
    'musee.epoque.vingtieme': 'The 20th century',
    'musee.epoque.aujourdhui': 'Today',
    'histoire.titre': 'Why they are locked away',
    'histoire.ecouter': 'Tell me',
    'histoire.arreter': 'Stop',
    'histoire.action': 'To the museum!',
    'jeu.liens.titre': 'Matching',
    'jeu.liens.texte': 'Match each scientist to their discovery.',
    'liens.titre': 'Matching',
    'liens.regle': 'Tap a scientist, then their discovery. When every line is drawn, you win!',
    'liens.demarrer': 'Start',
    'liens.commence': 'Tap a scientist on the left',
    'liens.maintenant': 'Now their discovery on the right',
    'liens.avancement': (faits: number, total: number) => `${faits} of ${total} matched`,
    'liens.gagne': 'Every link is made!',
    'liens.rejouer': 'Play again',
    'liens.retour': 'Back to the games',
    'fete.on-y-va': 'Here we go!',
    'fete.bien-joue': 'Nicely done!',
    'fete.en-forme': 'On a roll!',
    'fete.en-feu': 'On fire! 🔥',
    'fete.serie': (n: number) => `${n} right answers in a row`,
    'fete.nouveau-rang': 'New rank!',

    'parcours.titre': 'Your adventure',
    'parcours.avancement': (faites: number, total: number) =>
      `Lumi walks with you, one card at a time · ${faites}/${total} discovered`,
    'parcours.prochaine': 'Next step',
    'parcours.continuer': 'Continue →',
    'parcours.fini.titre': 'Well done, adventure complete! 🎉',
    'parcours.fini.texte':
      'You have discovered every card. Play the quiz again, or explore freely whatever you fancy revisiting.',
    'parcours.fini.quizz': 'Go to the quiz',
    'parcours.fini.explorer': 'Explore freely',
    'parcours.jalon': (vues: number, total: number) => `${vues}/${total} cards`,

    'lumi.titre': 'How you are growing',
    'lumi.progression-rang': 'Progress towards the next rank',
    'lumi.reste': (reste: number) => `only ${reste} more`,
    'lumi.pour': 'to reach',
    'lumi.rang-max': 'Highest rank reached! 🎉',
    'lumi.bilan': (explores: number, maitrises: number, total: number) =>
      `${explores}/${total} explored · ${maitrises}/${total} mastered`,
    'lumi.bilan-cartes': (ecoutees: number, reussies: number, total: number) =>
      `${ecoutees} card${ecoutees === 1 ? '' : 's'} of ${total} listened to · ${reussies} answered in the quiz`,
    'lumi.badges-legende': 'Two badges per world: 🧭 once you have listened to all its cards, 🏅 once you have answered all its questions.',
    'lumi.reste-ecouter': (n: number) =>
      `${n} more card${n === 1 ? '' : 's'} to listen to for 🧭`,
    'lumi.reste-reussir': (n: number) =>
      `${n} more question${n === 1 ? '' : 's'} to answer for 🏅`,
    'lumi.monde-complet': 'both badges are yours ✓',
    'cabinet.titre': 'The cabinet of curiosities',
    'cabinet.texte':
      'Fill your shelf with your stars. Touch an object: it teaches you something.',
    'cabinet.solde': (n: number) => `you have ${n} left`,
    'cabinet.etagere': (n: number, total: number) => `Your shelf · ${n} of ${total}`,
    'cabinet.emplacement': (nom: string, prix: number) =>
      `${nom}, empty spot, ${prix} stars`,
    'cabinet.manque': (n: number) => `You need ${n} more ⭐ to bring it to your shelf.`,
    'cabinet.gagner': 'Stars are earned by answering correctly, in the games and the journey.',
    'lumi.retour': 'Back to Lumi',
    'lumi.section-progression': 'Your progress',
    'lumi.section-collection': 'Your finds',
    'lumi.vers-mondes': 'Your worlds',
    'lumi.vers-cabinet': 'The cabinet of curiosities',
    'lumi.vers-cabinet-detail': (n: number, total: number) => `${n} objects of ${total}`,
    'lumi.rangs': 'Lumi’s ranks',
    'lumi.vers-rangs-detail': (n: number) => `${n} ranks to climb`,
    'lumi.origine-etoiles':
      'Lumi grows with your stars. You earn one for every right answer, in the games and in the journey. Listening to a card earns none: it is what teaches you the answer.',
    'lumi.rang-atteint': 'reached ✓',
    'lumi.rang-aria': (nom: string, seuil: number, atteint: boolean) =>
      `${nom}, ${seuil} stars${atteint ? ', reached' : ''}`,
    'lumi.monde': (vues: number, reussies: number, total: number) =>
      `${vues}/${total} listened to · ${reussies}/${total} answered`,

    'reglages.titre': 'Settings',
    'reglages.profil': 'Profile',
    'reglages.langue': 'Language',
    'reglages.ecoute': 'Listening & alerts',
    'reglages.aide': 'Help',
    'reglages.age-enregistre': 'Saved ✓',
    'reglages.enregistrer-age': 'Save age',
    'reglages.hors-ligne': 'Listen without internet',
    'reglages.hors-ligne.maj': 'Updating',
    'reglages.hors-ligne.pret': 'Ready ✓',
    'reglages.hors-ligne.incomplet': 'Incomplete',
    'reglages.tutoriel': 'See the introduction again',
    'reglages.reinitialiser': (n: number) => `Reset progress (${n} cards)`,
    'reglages.confirmer': 'Are you sure? The cards will all become new again',

    'tuto.aria': 'Introduction to Hublot',
    'tuto.passer': 'Skip',
    'tuto.arreter': 'Stop playing',
    'tuto.ecouter': 'Listen',
    'tuto.suivant': 'Next',
    'tuto.commencer': 'Let’s go!',

    'age.moins': 'One year younger',
    'age.plus': 'One year older',
    'narration.etapes': 'Steps of the explanation',
    'parcours.une-question': 'A question about this card',
    'notifications.aria': 'Receive notifications',
    'notifications.texte': 'New cards and app updates.',
    'parcours.quitter': 'Leave the journey',

    'hl.mo': (n: number) => `${n} MB`,
    'hl.titre': 'Listen without internet',
    'hl.texte':
      'In the car, on a plane, or when the signal gives up. Once the cards are downloaded, everything works with no connection.',
    'hl.indisponible':
      'This browser cannot download for offline use. The app still works online.',
    'hl.detail': (e: string) => `Details: ${e}`,
    'hl.maj-dispo': (taille: string) => `Update available — ${taille}`,
    'hl.pret': (taille: string) => `Ready offline — ${taille}`,
    'hl.en-cours': (fait: string, total: string) => `Downloading… ${fait} of ${total}`,
    'hl.incomplet': (fait: string, total: string) => `Incomplete — ${fait} of ${total}`,
    'hl.a-telecharger': (taille: string) => `To download — ${taille}`,
    'hl.telechargement': 'Downloading…',
    'hl.mettre-a-jour': 'Update',
    'hl.reprendre': 'Resume the download',
    'hl.tout': 'Download everything',
    'hl.liberer': 'Free up the space',
    'hl.conseil':
      'Best downloaded over Wi-Fi. The download can be interrupted and resumed: whatever is already there is not fetched again.',
    'hl.installer-titre': 'Install Hublot on your home screen',
    'hl.installer-texte':
      'so the download is kept. Without installing, the phone may erase it when it runs short of space. In the browser menu: “Install app” or “Add to Home Screen”.',
    'hl.retour': 'Back to the menu',

    'carte.deja-ecoutee': ', already listened to',
    'carte.verrouillee': ', premium — to unlock',

    'commun.bientot': 'soon',

    'nav.joue': 'Play',

    'hub.decouvrir.titre': 'How would you like to explore?',
    'hub.decouvrir.texte': 'Two ways to go. You can switch whenever you like.',
    'mode.explorer.titre': 'Free exploration',
    'mode.explorer.texte':
      'Pick your world and whichever card draws you in. No order, no obligation.',
    'mode.parcours.titre': 'Guided journey',
    'mode.parcours.texte':
      'Lumi takes you from card to card, with a little question after each one.',

    'hub.joue.titre': 'What shall we play?',
    'hub.joue.texte': 'Four ways to play with the cards.',
    'jeu.quizz.titre': 'Quiz',
    'jeu.quizz.texte':
      'Questions about your cards. Every right answer earns you a star.',
    'jeu.memo.titre': 'Scientist memory',
    'jeu.memo.texte': 'Find the matching portraits, and learn their names. From age 3.',
    'jeu.chrono.titre': 'Time challenge',
    'jeu.chrono.texte': 'The quiz, but against the clock.',

    'mode.savants.titre': 'The wall of scientists',
    'mode.savants.texte':
      'The people who worked all this out before you, and the stories told about them.',
    'savants.titre': 'The wall of scientists',
    'savants.texte':
      'Twenty people, a thousand years of curiosity. Touch a portrait to find out what we owe them.',
    'savants.fermer': 'Close the profile',
    'savants.cartes': 'Listen to next',
    'savants.ecouter': 'Listen to the profile',
    'savants.arreter': 'Stop playing',

    'chrono.titre': 'Time challenge',
    'chrono.texte': (secondes: number) =>
      `${secondes} seconds, as many right answers as you can. No explanations: off we go.`,
    'chrono.demarrer': 'Let’s go!',
    'chrono.podium': 'Your best scores',
    'chrono.score': (n: number) => `${n} right answer${n === 1 ? '' : 's'}`,
    'chrono.record': 'New record! 🎉',
    'chrono.fin': (n: number) =>
      `${n} right answer${n === 1 ? '' : 's'} in one minute`,
    'chrono.rejouer': 'Play again',
    'chrono.retour': 'Back to the games',
    'chrono.trop-jeune.titre': 'This game is for older children',
    'chrono.trop-jeune.texte':
      'The clock runs too fast to listen to everything. Try the quiz instead: there, you can take your time.',

    'memo.savants.titre': 'Scientist memory',
    'memo.savants.regle':
      'Turn the tiles over two at a time and find the matching portraits. Each pair teaches you a name.',
    'memo.cartes.regle':
      'Turn the tiles over two at a time and match each picture with the name of its card. Only the cards you have listened to are in the game.',
    'memo.pas-assez':
      'Listen to two or three cards first: this game only uses the ones you know.',
    'memo.demarrer': 'Start',
    'memo.coups': (n: number) => `${n} move${n === 1 ? '' : 's'}`,
    'memo.bravo': 'All the pairs found! 🎉',
    'memo.rejouer': 'New game',
    'memo.tuile-cachee': 'Hidden tile',
    'memo.trop-jeune.texte':
      'This one matches a picture with the written name of its card. Scientist memory is the one made for you.',
  },
};

/** Traduit une clé dans la langue demandée, avec repli sur le français. */
export function traduire<K extends CleUI>(locale: Locale, cle: K): (typeof fr)[K] {
  return (traductions[locale][cle] ?? fr[cle]) as (typeof fr)[K];
}
