# DSG – Dieye Solar Group · site vitrine

Site statique (HTML, CSS et JS sans framework) généré par un petit script Node sans dépendance.

## Utilisation

```bash
npm run build   # génère les pages HTML dans public/
npm run dev     # build + serveur local sur http://localhost:3000
```

## Modifier le contenu

Tout le contenu éditable se trouve dans `src/data.mjs` : coordonnées, activités, réalisations, étapes, partenaires.
Relancez `npm run build` après chaque modification.

| Fichier | Rôle |
|---|---|
| `src/data.mjs` | Contenu (textes, chiffres, coordonnées) |
| `src/layout.mjs` | En-tête, pied de page, balises `<head>` |
| `src/components.mjs` | Sections réutilisables (hero, simulateur, réalisations…) |
| `build.mjs` | Liste des pages et assemblage |
| `public/assets/` | CSS, JS, images, logos |

## Déploiement sur cPanel (dsg.sn)

Le dossier `public/` contient le site prêt à servir (HTML déjà générés, `.htaccess` inclus). Toujours lancer `npm run build` et committer avant de déployer.

**Option A – Git (recommandé)** : cPanel > *Git™ Version Control* > *Create* > cloner `https://github.com/YoussouphNdiour/DieyeSolarGroup.git`.
Ensuite, à chaque mise à jour : *Manage* > *Pull or Deploy* > *Update from Remote* puis *Deploy HEAD Commit*.
Le fichier `.cpanel.yml` copie `public/` dans `~/public_html/`.

**Option B – Upload** : cPanel > *Gestionnaire de fichiers* > `public_html` > téléverser `dsg-site-cpanel.zip` puis *Extraire*
(fichier créé par `npm run zip`).

Activer ensuite le SSL (cPanel > *SSL/TLS Status* > *Run AutoSSL*) : le `.htaccess` redirige vers `https://www.dsg.sn`.

## À compléter

- RCCM et NINEA dans `mentions-legales.html` (`build.mjs`).
- Le formulaire de devis ouvre WhatsApp ou la messagerie : aucun serveur n'est nécessaire.
