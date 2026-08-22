# Audit des illustrations — monde « le-corps »

---

### la-chair-de-poule / phase deux — contradiction
**Gravité** : haute
**Le texte dit** : « Sous ta peau, de minuscules muscles se contractent et tirent sur la racine de chaque poil. » (6-8) ; « De minuscules muscles appelés muscles arrecteurs, attachés à la base de chaque poil, se contractent. » (9-12)
**L'image montre** : le muscle (le trait jaune sous la peau) passe d'un court segment vertical d'environ 70 px à la phase un à un long segment oblique d'environ 150 px à la phase deux. Il double de longueur au moment exact où le texte dit qu'il se contracte. (Confirmé dans `C:\Applications\science\components\animations\LaChairDePouleAnimation.tsx`, ligne du muscle : relâché `(172,222)→(172,192)`, longueur 30 ; « contracté » `(172,222)→(192,158)`, longueur 67.)
**Pourquoi c'est un problème** : l'enfant entend « se contracte » et voit un muscle s'allonger, exactement l'inverse de ce que la carte voisine `comment-les-muscles-bougent` lui enseigne (« Quand il se contracte, le muscle raccourcit »).
**Piste** : intervertir les deux états — long au repos, court en tirant — en gardant l'extrémité haute fixe près du poil et en remontant l'extrémité basse.

---

### la-chair-de-poule / phase quatre — ressemblance
**Gravité** : moyenne
**Le texte dit** : « Chez les animaux très poilus, ça les réchauffe. » (3-5) ; « Chez un animal bien poilu, les poils dressés emprisonnent de l'air chaud contre la peau. » (6-8) ; « Chez les animaux à fourrure épaisse, les poils dressés emprisonnent une couche d'air isolante et gardent la chaleur. » (9-12)
**L'image montre** : une tache grise informe à trois bosses, sans tête, sans patte, sans œil et sans un seul poil dessiné, surmontée de trois points orange flottant au-dessus d'elle (hors de la forme, pas contre la peau).
**Pourquoi c'est un problème** : l'unique phase qui parle d'un animal ne montre rien d'identifiable comme un animal, et le mécanisme énoncé — des poils dressés qui emprisonnent l'air *contre la peau* — n'est visible nulle part : ni poils, ni air enfermé dessous.
**Piste** : silhouette d'animal reconnaissable (museau + dos + pattes) hérissée de quelques traits de poils dressés, et points d'air chaud placés *entre* les poils, sous la ligne du dos.

---

### les-empreintes-digitales / phase quatre — manque
**Gravité** : moyenne
**Le texte dit** : « Ton dessin n'existe que sur tes doigts à toi : personne d'autre n'a exactement le même, même pas un jumeau. » (3-5) ; « même des vrais jumeaux, qui ont pourtant le même patrimoine génétique, ont des empreintes différentes. » (6-8)
**L'image montre** : rigoureusement la même image qu'aux phases un à trois — un seul bout de doigt, un seul motif — avec la seule légende « personne n'a le même » qui s'ajoute. Aucune seconde empreinte n'apparaît.
**Pourquoi c'est un problème** : la phase repose entièrement sur une comparaison, et il n'y a rien à comparer ; le second motif existe pourtant dans le code (`BOUCLES_JUMEAU` dans `C:\Applications\science\components\animations\LesEmpreintesDigitalesAnimation.tsx`) mais son `transform="translate(-108 90) scale(0.42)"` le place entre x = −45 et x = −3, hors du `viewBox 0 0 400 240` : il est dessiné à côté de l'écran.
**Piste** : translation positive, par exemple `translate(20 90)`, pour ramener le doigt du jumeau dans le cadre, à gauche du doigt principal.

---

### la-chair-de-poule / phase deux — manque
**Gravité** : moyenne
**Le texte dit** : « De tout petits muscles, cachés sous la peau, tirent sur chaque poil. » (3-5) ; « ...tirent sur la racine de chaque poil. » (6-8)
**L'image montre** : le poil blanc part exactement de la ligne rose de la surface cutanée et ne se prolonge pas d'un millimètre sous la peau : il n'y a ni racine, ni follicule. Le trait jaune du muscle s'arrête dans le derme, à une vingtaine de pixels en dessous et à gauche de la base du poil, sans jamais la toucher.
**Pourquoi c'est un problème** : le muscle est montré en train de ne tirer sur rien, et l'enfant repart avec l'idée qu'un poil est simplement posé sur la peau au lieu d'y être planté.
**Piste** : prolonger le trait blanc du poil de quelques dizaines d'unités sous la surface (le follicule) et faire aboutir l'extrémité haute du muscle sur ce prolongement.

---

### comment-on-tient-debout / phase trois — manque
**Gravité** : basse
**Le texte dit** : « Ça prévient ton cerveau : "Attention, tu es en train de pencher !" » (3-5) ; « De petits capteurs sentent ce mouvement et envoient l'information à ton cerveau » (6-8)
**L'image montre** : un trait pointillé vert qui part des canaux, sort de la tête et descend jusqu'au niveau du buste du petit bonhomme. Aucun cerveau n'est dessiné, ni dans la grosse tête (uniformément couleur chair, sans aucun organe hormis les trois anneaux bleus), ni ailleurs — alors que les autres cartes du monde figurent toutes le cerveau par une tache rose.
**Pourquoi c'est un problème** : le destinataire du message, seul sujet de la phrase, est absent, et le trait semble mener au corps plutôt qu'au cerveau.
**Piste** : ajouter une tache rose de cerveau dans la grosse tête et y faire aboutir le pointillé.

---

### les-dents-de-lait / phase quatre — manque
**Gravité** : basse
**Le texte dit** : « Alors la dent de lait tombe toute seule, et la grande dent prend sa place. » (3-5) ; « ...laissant la place à la dent définitive. » (6-8)
**L'image montre** : la dent de lait a bien disparu ; la dent définitive crème a remonté, mais son sommet reste sous la ligne rose de la gencive. Rien ne dépasse : la surface de la gencive est vide.
**Pourquoi c'est un problème** : « prend sa place » se traduit à l'image par une gencive nue ; la dent définitive n'occupe visiblement pas la place laissée libre, qui était au-dessus de la gencive.
**Piste** : remonter la dent définitive d'une vingtaine d'unités de plus, pour que sa couronne perce la ligne de gencive comme le faisait la dent de lait.

---

### pourquoi-on-eternue / phase trois — manque
**Gravité** : basse
**Le texte dit** : « D'un coup, l'air sort très fort par ton nez et ta bouche. » (3-5)
**L'image montre** : le trajet nerveux qui repart du cerveau vers la narine, en vert, avec la légende « "expulse-la !" ». La bouche est encore fermée et aucun souffle n'est représenté : les traits d'air jaunes n'apparaissent qu'à la phase quatre.
**Pourquoi c'est un problème** : au niveau 3-5, la phrase ne parle que de l'air qui jaillit, et c'est la seule chose que l'image ne montre pas ; le petit voit un ordre abstrait pendant qu'on lui décrit une explosion d'air. Les niveaux 6-8 et 9-12, eux, sont bien servis (l'ordre du cerveau y est nommé).
**Piste** : faire apparaître les traits d'air dès la phase trois, en montée d'intensité, plutôt qu'à la phase quatre seulement.

---

### comment-les-muscles-bougent / phase quatre — manque
**Gravité** : basse (forme ambiguë : les deux muscles se recouvrent, je signale ce que je vois sans certitude d'interprétation)
**Le texte dit** : « Pour retendre le bras, il faut un deuxième muscle, placé de l'autre côté, qui se contracte à son tour et tire dans le sens opposé. » (6-8) ; « ...c'est le triceps, de l'autre côté, qui se contracte à son tour pour le retendre. » (9-12)
**L'image montre** : deux masses roses (une rose clair, une mauve foncé) largement superposées, occupant la même portion du bras autour de l'humérus ; entre la phase trois et la phase quatre, seule leur découpe change légèrement, et l'avant-bras se retend. On ne distingue pas un muscle d'un côté de l'os et un autre du côté opposé.
**Pourquoi c'est un problème** : l'idée maîtresse de la phase — la paire antagoniste, un muscle *de chaque côté* de l'os — n'est pas lisible ; le tendon jaune, lui, ne bouge jamais et reste celui du seul biceps.
**Piste** : écarter franchement les deux polygones de part et d'autre de la ligne de l'humérus, et donner au triceps son propre tendon, du côté opposé, vers l'arrière du coude.

---

### les-dents-de-lait / phase un — ressemblance
**Gravité** : basse
**Le texte dit** : « Quand tu es petit, tu as d'abord de toutes petites dents : les dents de lait. » (3-5)
**L'image montre** : la couronne blanche ne dépasse la ligne rose de la gencive que d'environ un quart de sa hauteur ; les trois autres quarts, plus la racine, sont sous la gencive.
**Pourquoi c'est un problème** : une dent de lait en place a toute sa couronne hors de la gencive ; dessinée ainsi, elle ressemble à une dent en train de sortir ou enfouie.
**Piste** : remonter la dent de lait d'une dizaine d'unités pour que la jonction couronne-racine coïncide avec la ligne de gencive.

---

## Cartes examinées sans reproche

- **a-quoi-servent-les-larmes** — l'œil, son film lacrymal, l'intrus, le cœur de l'émotion et le bouclier vert de la phase quatre correspondent chacun à leur phrase. (La faible visibilité des larmes sur les captures deux et quatre est un artefact du script de capture, pas un défaut : les grosses larmes sont bien présentes dans la source.)
- **la-peau-notre-bouclier** — coupe de peau, microbes arrêtés au-dessus de la surface, glande sudoripare en pelote avec son canal, goutte, volutes de vapeur, thermomètre qui refroidit : chaque phase est servie.
- **pourquoi-on-a-mal** — objet brûlant, capteurs dans la peau, signal qui file le long du nerf, main qui se retire de l'objet à la dernière phase : rien à redire.
- **pourquoi-on-a-deux-yeux** — deux yeux écartés, deux lignes de visée d'angles différents, objet dédoublé qui « saute », comparaison au cerveau, puis anneaux de distance : la chaîne est juste.

## Compte

10 cartes, 40 phases, 9 défauts : **1 contradiction**, **2 ressemblances**, **6 manques**. 4 cartes sans reproche ; les 6 autres sont concernées, mais la carte `la-chair-de-poule` concentre à elle seule les deux défauts les plus graves.

Fichiers utiles :
- manifeste : `C:\Applications\science\audit-illustrations\manifeste-le-corps.json`
- sources fautives : `C:\Applications\science\components\animations\LaChairDePouleAnimation.tsx`, `C:\Applications\science\components\animations\LesEmpreintesDigitalesAnimation.tsx`, `C:\Applications\science\components\animations\LesDentsDeLaitAnimation.tsx`, `C:\Applications\science\components\animations\CommentOnTientDeboutAnimation.tsx`, `C:\Applications\science\components\animations\PourquoiOnEternueAnimation.tsx`, `C:\Applications\science\components\animations\CommentLesMusclesBougentAnimation.tsx`

Note de méthode, utile pour les prochains audits : `C:\Applications\science\scripts\capturer-illustrations.mjs` réinjecte le SVG dans une page vierge avant la capture, ce qui remet les animations SMIL à t = 0 — tout élément dont l'opacité est animée (larmes, poussière expulsée, points d'air chaud) apparaît donc éteint ou à mi-course sur les PNG. Je n'ai jugé que les états liés à la phase.
