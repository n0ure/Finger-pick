# Random Finger Chooser (PWA iPhone/Android)

Cette app web fonctionne hors-ligne et peut être ajoutée à l’écran d’accueil sur iPhone.

## Déploiement ultra-rapide (GitHub Pages)

1. Crée un dépôt **public** sur GitHub (ex: `finger-pick`).
2. Téléverse **tous les fichiers** de ce dossier à la racine.
3. Dans le dépôt, va dans **Settings → Pages**.
4. Dans **Build and deployment**, choisis **Deploy from a branch** puis **main / root** et enregistre.
5. Attends ~1–2 minutes, l’URL s’affiche en haut de la page **Pages** (ex: `https://<ton-user>.github.io/finger-pick/`).

## Installation sur iPhone (plein écran, “comme une app”)

1. Ouvre l’URL du site dans **Safari**.
2. Touche **Partager** (carré avec une flèche) → **Ajouter à l’écran d’accueil**.
3. Ouvre l’icône : l’app est maintenant **plein écran** et **offline**.

## Utilisation

- Pose 2+ doigts sur l’écran, attends 3 secondes.
- Un seul doigt est choisi aléatoirement, les autres disparaissent.
- Bouton **Réinitialiser** pour relancer une partie.

> Astuce : si le nombre de doigts change pendant le décompte, le timer redémarre automatiquement.

## Développement

- Code principal : `index.html` (Canvas + Touch Events).
- PWA : `manifest.webmanifest`, `sw.js` (cache offline), `icons/*`.
