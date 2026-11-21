# 🚀 Portfolio Personnel — Exaucé Yanga
> Développeur Full Stack / Web & Brand Designer

Bienvenue sur le dépôt de mon portfolio officiel ! Ce site présente mes projets, mon parcours et l'alliance de mes compétences techniques en développement et créatives en design d'interfaces.

🌐 **Site en ligne :** [www.yexauce.me](https://www.yexauce.me)  
💼 **LinkedIn :** [Exauce Yanga](https://www.linkedin.com/in/exauce21)

---

## 🛠️ Stack & Compétences Techniques

### Développement
- **Langages :** Java, JavaScript, PHP, HTML/CSS
- **Frameworks & Bibliothèques :** Spring Boot, Angular, React.js, Symfony, Bootstrap
- **Backend & API :** JPA, API REST, JWT, POO
- **Bases de données :** MySQL, PostgreSQL, MongoDB
- **Outils & DevOps :** Git, Docker, WordPress, CMS

### Design & Prototypage
- **Outils :** Figma, Suite Adobe (Photoshop, Illustrator, Adobe XD)
- **Domaines :** UI/UX Design, Design System, Identité visuelle, Modélisation UML

---

## 💼 Expériences Professionnelles Clés

- **Développeur Web (Edmonton, Canada | 2024 - 2025) :**  
  Conception de l'identité visuelle et développement de sites web et landing pages ([teenational.ca](https://teenational.ca), [guide.teenational.ca](https://guide.teenational.ca)).
- **UI & Web Designer (Hashdak, Dakar | 2023 - 2024) :**  
  Création de 8 interfaces utilisateurs (web/mobiles), mise en place de design systems et migration de sites WordPress.
- **Développeur Full Stack (Pin Africa, Dakar | 2021 - 2023) :**  
  Développement de plateformes web (e-learning et médias), optimisation SEO, performances et rédaction de documentation technique.
- **Développeur Web / Concepteur UI (Universcom, Dakar | 2020 - 2021) :**  
  Conception d'applications web avec React et Java, gestion des bases de données MySQL et tests fonctionnels.

---

## 📦 Installation & Lancement en Local

Si tu souhaites exécuter ou inspecter ce projet en local, suis les étapes ci-dessous :

1. **Cloner le dépôt :**
   ```bash
   git clone [https://github.com/exauce21/nom-de-ton-repo.git](https://github.com/exauce21/my-portfolio.git)
---

## 🗂️ Structure du site

```
my-portfolio/
├── index.html        → Accueil : hero interactif, à propos, projets choisis, services, clients, recommandations, contact
├── projets.html      → Liste complète des projets + filtres (Brand identity / UI & Dev / Sites web)
├── projet.html       → Étude de cas (projet.html?p=<slug>) : galerie, lightbox, projet suivant
├── 404.html
├── css/style.css     → Design system (tokens, typographie, composants, responsive)
├── js/
│   ├── data.js       → Source unique des projets (ajouter / modifier un projet ici)
│   ├── core.js       → Commun : horloge Paris, menu mobile, animations au scroll, copie de l'email
│   ├── hero.js       → Traînée d'images au passage de la souris + parallaxe du hero
│   ├── works.js      → Liste des projets, aperçu aléatoire au survol, filtres
│   └── project.js    → Rendu des pages étude de cas + lightbox
├── assets/
│   ├── fonts/        → Polices auto-hébergées (Libre Caslon Condensed, Geist, Geist Mono)
│   └── img/
│       ├── projets/<slug>/   → Visuels brand optimisés (NN.webp + NN-sm.webp)
│       ├── web/              → Captures des sites en ligne
│       ├── clients/          → Logos clients en noir & blanc (PNG transparents)
│       └── portrait.webp, og-image.jpg, favicon.svg
└── projet/           → Fichiers sources originaux (non utilisés par le site, inutile de les déployer)
```

### Ajouter un projet
1. Exporter les visuels en `.webp` dans `assets/img/projets/<slug>/` (`01.webp` ~1050×1400 et `01-sm.webp` ~480×640, etc.).
2. Ajouter une entrée dans `js/data.js` (`kind`, `name`, `sector`, `tags: ['brand','ui','dev']`, `images`, `description`…).
3. Pour le mettre en avant sur l'accueil, ajouter son `slug` dans `featured`.

### Lancer en local
Aucune dépendance ni build : ouvrir `index.html`, ou servir le dossier (`npx serve .` / `python3 -m http.server`).
