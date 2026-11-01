# GUERRE IA

Jeu de décision stratégique : incarnez un dirigeant au cœur des grandes crises
du XXe siècle (Juillet 1914, Munich, Berlin, Suez, Cuba, Kippour, Able Archer,
Bosnie) et d'un monde fictif (le détroit d'Orion). Cinq décisions par crise,
quatre jauges (escalade, civils, soutien intérieur, confiance adverse), un
cabinet, un canal de négociation et un bilan qui juge vos choix sur le temps long.

- 9 dossiers, 24 rôles jouables, 120 tours, 384 options
- 2 duels (Cuba 1962, Berlin 1948) : à deux, contre l'ordinateur ou à distance
- 3 modes : Conseiller, Chef d'État, Brouillard total
- Installable (PWA) et jouable hors connexion

## Contenu du dépôt

| fichier | rôle |
|---|---|
| `index.html` | le jeu entier : données des crises, moteur, interface et styles |
| `sw.js` | service worker (mode hors connexion) |
| `manifest.webmanifest` | installation sur l'écran d'accueil |
| `icon.svg`, `icon-192.png`, `icon-512.png` | icônes |

Version du jeu : **20.2** (`<meta name="game-version">`).

## Ce qui n'est pas dans ce dépôt

Le site d'origine s'appuie sur trois routes serveur dont le code n'est pas ici :

- `/api/ai` : conseil génératif et négociation libre (la clé IA reste côté serveur) ;
- `/api/saves` : synchronisation des parties avec un compte ;
- `/api/rooms` : salons de duel à distance.

Sans elles, le jeu reste entièrement jouable : les conseillers utilisent leurs
réactions préparées, l'adversaire des duels est à règles fixes, et les parties
sont sauvegardées dans le navigateur.

## Lancer en local

```bash
npx serve .
```

Puis ouvrir l'adresse affichée. Le service worker exige `localhost` ou HTTPS.
