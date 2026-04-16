# 🚀 Portfolio - Full-Stack Developer

Un portfolio personnel moderne et responsif construit avec **Node.js/Express** et **TailwindCSS**, suivant une architecture **MVC**.

## 📋 Table des matières

- [Caractéristiques](#-caractéristiques)
- [Installation](#-installation)
- [Démarrage](#-démarrage)
- [Structure du projet](#-structure-du-projet)
- [Pages disponibles](#-pages-disponibles)
- [Technologie](#-technologie)
- [Personnalisation](#-personnalisation)

## ✨ Caractéristiques

✅ **Responsive Design** - S'adapte à tous les appareils (mobile, tablet, desktop)
✅ **Design Moderne** - Interface sombre élégante avec TailwindCSS
✅ **Architecture MVC** - Code organisé et maintenable
✅ **Performances** - Optimisé pour les performances maximales
✅ **SEO Ready** - Optimisé pour les moteurs de recherche
✅ **Animations Fluides** - Transitions et animations JavaScript
✅ **Formulaire de Contact** - Système de contact fonctionnel

## 📦 Installation

### Prérequis

- Node.js (v14 ou supérieur)
- npm ou yarn

### Étapes d'installation

1. **Installer les dépendances**
```bash
npm install
```

2. **Compiler les styles CSS**
```bash
npm run build:css
```

## 🚀 Démarrage

### Mode développement

```bash
npm run dev
```

Accédez au portfolio sur `http://localhost:3000`

### Mode production

```bash
npm start
```

### Observer les changements CSS (optionnel)

```bash
npm run watch:css
```

## 📁 Structure du projet

```
portfolio/
├── models/                  # Modèles de données
│   ├── Portfolio.js        # Données du portfolio
│   ├── Project.js          # Modèle des projets
│   └── Experience.js       # Modèle des expériences
├── views/                  # Templates EJS
│   ├── home.ejs           # Page d'accueil
│   ├── projects.ejs       # Liste des projets
│   ├── project-detail.ejs # Détail d'un projet
│   ├── experience.ejs     # Page expériences/compétences
│   ├── contact.ejs        # Page de contact
│   ├── 404.ejs           # Page 404
│   ├── layout.ejs        # Layout principal
│   └── components/        # Composants réutilisables
│       ├── navbar.ejs    # Barre de navigation
│       └── footer.ejs    # Pied de page
├── controllers/           # Contrôleurs
│   ├── homeController.js
│   ├── projectController.js
│   └── experienceController.js
├── routes/               # Routes
│   └── index.js
├── public/               # Fichiers statiques
│   ├── css/
│   │   ├── input.css    # CSS source (Tailwind directives)
│   │   └── output.css   # CSS compilé (généré)
│   └── js/
│       └── main.js      # JavaScript client
├── app.js               # Serveur Express
├── package.json         # Dépendances et scripts
├── tailwind.config.js   # Configuration TailwindCSS
└── postcss.config.js    # Configuration PostCSS
```

## 📄 Pages disponibles

### Accueil (/)
- Présentation personnelle
- Statistiques professionnelles
- Stack technologique
- Appel à l'action

### Projets (/projects)
- Grille des projets
- Description rapide de chaque projet
- Liens vers les détails

### Détail Projet (/projects/:id)
- Description complète du projet
- Problème et solution
- Fonctionnalités principales
- Technologies utilisées
- Informations projet
- Projets associés

### Expériences (/experience)
- Timeline du parcours professionnel
- Compétences techniques
- Compétences personnelles
- Statistiques professionnelles
- Téléchargement du CV

### Contact (/contact)
- Informations de contact
- Formulaire de contact
- Liens réseaux sociaux
- Coordonnées directes

## 🛠️ Technologie

### Backend
- **Express.js** - Framework web minimaliste
- **EJS** - Template engine

### Frontend
- **TailwindCSS** - Framework CSS utilitaire
- **JavaScript Vanilla** - Pour les interactions

### Build & Development
- **Tailwind CLI** - Compilation CSS
- **PostCSS** - Traitement CSS
- **Autoprefixer** - Préfixes navigateur

## 🎨 Personnalisation

### Modifier les données du portfolio

Éditez le fichier `models/Portfolio.js` :
```javascript
this.name = "Votre nom";
this.email = "votre@email.com";
// ... autres informations
```

### Ajouter de nouveaux projets

Modifiez le fichier `models/Project.js` et ajoutez un nouveau projet au tableau `projects`.

### Personnaliser les couleurs

Éditez `tailwind.config.js` :
```javascript
theme: {
  extend: {
    colors: {
      primary: '#votre-couleur',
      secondary: '#votre-couleur',
    },
  },
},
```

### Ajouter de nouvelles pages

1. Créez un contrôleur dans `controllers/`
2. Créez une vue dans `views/`
3. Ajoutez la route dans `routes/index.js`

## 📱 Responsive Design

Le portfolio est entièrement responsive et s'adapte à :
- 📱 Mobile (320px et plus)
- 📱 Tablet (768px et plus)
- 🖥️ Desktop (1024px et plus)
- 🖥️ Large screens (1280px et plus)

## 🔗 Déploiement

### Vercel (Recommandé)

```bash
npm install -g vercel
vercel
```

### Heroku

```bash
heroku create votre-portfolio
git push heroku main
```

### Autres plateformes

Le portfolio peut être déployé sur n'importe quelle plateforme supportant Node.js (Railway, Render, etc.)

## 📝 Notes importantes

- Le formulaire de contact enregistre les messages dans la console (à configurer avec un service email)
- Les liens des réseaux sociaux dans le footer peuvent être personnalisés
- Assurez-vous que TailwindCSS est compilé avant de lancer l'application

## 🤝 Support

Pour toute question ou problème, référez-vous à la documentation :
- [Express.js Documentation](https://expressjs.com/)
- [EJS Documentation](https://ejs.co/)
- [TailwindCSS Documentation](https://tailwindcss.com/)


