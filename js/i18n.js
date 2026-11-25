/* ==========================================================================
   i18n.js — Traduction FR / EN
   Le français est écrit dans le HTML. En anglais, chaque texte (et les
   attributs alt, aria-label, title, data-pre-line, meta) est remplacé
   via le dictionnaire ci-dessous, clé = texte français exact.
   - Langue mémorisée dans localStorage ("ey-lang"), ou forcée par ?lang=en
   - Boutons [data-lang] : changent la langue puis rechargent la page
   - Les textes des projets sont traduits dans data.js (champ EN)
   Ajouter un texte : copier la phrase française telle quelle en clé.
   Doit être chargé AVANT les autres scripts.
   ========================================================================== */
(function () {
  'use strict';

  var SUPPORTED = ['fr', 'en'];
  var KEY = 'ey-lang';
  var root = document.documentElement;

  var lang = 'fr';
  try {
    var q = new URLSearchParams(window.location.search).get('lang');
    if (q && SUPPORTED.indexOf(q) > -1) { lang = q; localStorage.setItem(KEY, q); }
    else {
      var saved = localStorage.getItem(KEY);
      if (saved && SUPPORTED.indexOf(saved) > -1) lang = saved;
    }
  } catch (e) { /* stockage indisponible : français */ }

  /* ---------- Dictionnaire FR → EN ---------- */
  var EN = {
    /* Meta */
    'Exaucé Yanga — Développeur Front-end & Brand Designer': 'Exaucé Yanga — Front-end Developer & Brand Designer',
    'Portfolio d’Exaucé Yanga, développeur front-end et brand designer : identités visuelles, web design et développement de sites sur mesure.': 'Portfolio of Exaucé Yanga, front-end developer and brand designer: visual identities, web design and custom website development.',
    'Projets — Exaucé Yanga': 'Projects — Exaucé Yanga',
    'Tous les projets d’Exaucé Yanga : identités visuelles (brand), web design (UI) et développement (dev).': 'All projects by Exaucé Yanga: visual identities (brand), web design (UI) and development (dev).',
    'Projet — Exaucé Yanga': 'Project — Exaucé Yanga',
    'Étude de cas — identité visuelle, web design et développement par Exaucé Yanga.': 'Case study — visual identity, web design and development by Exaucé Yanga.',
    'Page introuvable — Exaucé Yanga': 'Page not found — Exaucé Yanga',
    'Cette page n’existe pas.': 'This page does not exist.',
    'Projet introuvable — Exaucé Yanga': 'Project not found — Exaucé Yanga',

    /* Préchargeur */
    '--INITIALISATION:': '--INITIALIZING:',
    ':--ENVIRONNEMENT:': ':--ENVIRONMENT:',
    ':BRAND / WEB DESIGN / DÉVELOPPEMENT': ':BRAND / WEB DESIGN / DEVELOPMENT',
    ':--CHARGEMENT:': ':--LOADING:',
    ':--IDENTITÉ': ':--IDENTITY',
    ':--GRILLE': ':--GRID',
    ':--DÉTAILS': ':--DETAILS',
    ':--STATUT:': ':--STATUS:',
    ':DÉMARRAGE': ':BOOTING',
    ':PRÊT À EXPLORER': ':READY TO EXPLORE',

    /* Navigation */
    'Aller au contenu': 'Skip to content',
    'Navigation principale': 'Main navigation',
    'Menu mobile': 'Mobile menu',
    'Langue': 'Language',
    'Accueil': 'Home',
    'Projets': 'Projects',
    'À propos': 'About',
    'Fermer': 'Close',

    /* Hero */
    'Disponible pour': 'Available for',
    'de nouveaux projets': 'new projects',
    'Portrait en noir et blanc d’Exaucé Yanga': 'Black and white portrait of Exaucé Yanga',
    'Je conçois des marques et je développe les': 'I design brands and build the',
    'qui les font vivre.': 'that bring them to life.',
    'Développeur': 'Developer',
    'Basé en': 'Based in',
    'Défiler': 'Scroll',

    /* À propos */
    '(01) — À propos': '(01) — About',
    'Développeur front-end et brand designer, j’accompagne les marques': 'Front-end developer and brand designer, I take brands',
    'de l’idée au pixel : identité visuelle, web design et développement': 'from idea to pixel: visual identity, web design and development',
    '— une seule': '— one single',
    ', de bout en bout.': ', end to end.',
    'Approche': 'Approach',
    'De Dakar à Edmonton, j’ai appris à faire dialoguer le design et le code. Je construis des identités cohérentes, puis je les traduis en interfaces rapides, accessibles et pensées pour durer.': 'From Dakar to Edmonton, I learned to make design and code work together. I build consistent identities, then turn them into fast, accessible interfaces designed to last.',
    'Un seul interlocuteur, de la stratégie de marque à la mise en ligne : moins de pertes en route, plus de cohérence à l’arrivée.': 'One point of contact, from brand strategy to launch: less lost along the way, more consistency at the finish line.',
    'Parcours': 'Experience',
    'Développeur web': 'Web developer',
    'Développeur Full stack': 'Full stack developer',
    'Développeur web / Concepteur UI': 'Web developer / UI designer',
    'Outils': 'Tools',
    'Design & identité': 'Design & identity',
    'CMS & données': 'CMS & data',
    'Identités visuelles': 'Visual identities',
    'Projets web & UI': 'Web & UI projects',
    'Marques accompagnées': 'Brands supported',
    'En activité depuis': 'Active since',

    /* Projets (accueil) */
    '(02) — Projets sélectionnés': '(02) — Selected projects',
    'projets au total': 'projects in total',
    'Travaux': 'Selected',
    'choisis': 'work',
    'Projet': 'Project',
    'Secteur': 'Sector',
    'Prestations': 'Services',
    'Projets sélectionnés': 'Selected projects',
    'Survolez un projet pour en faire défiler les visuels.': 'Hover over a project to flip through its visuals.',
    'Voir les': 'See all',
    'projets': 'projects',
    '· Site web': '· Website',

    /* Services */
    '03 expertises': '03 areas of expertise',
    'Ce que je': 'What I',
    'fais': 'do',
    'Numéro': 'Number',
    'Développement': 'Development',
    '+ (Développement)': '+ (Development)',
    'Développement web': 'Web development',
    'React / Next.js / Three.js / Développements WebGL': 'React / Next.js / Three.js / WebGL development',
    'API, bases de données et infrastructure évolutive': 'APIs, databases and scalable infrastructure',
    'Intégrations paiements': 'Payment integrations',
    'Référencement naturel (SEO)': 'Search engine optimization (SEO)',
    'Optimisation de la vitesse, de la structure et du classement': 'Speed, structure and ranking optimization',
    'Hébergement, mises à jour et assistance continue': 'Hosting, updates and ongoing support',
    'Démarrer un projet': 'Start a project',
    '(À propos & exemples)': '(About & examples)',
    'Des sites rapides, accessibles et pensés pour durer — du site vitrine à la plateforme de contenus, chaque ligne de code sert l’expérience.': 'Fast, accessible websites built to last — from showcase sites to content platforms, every line of code serves the experience.',
    'Site Acquire by Pin Africa': 'Acquire by Pin Africa website',
    'Site David Banga Studio': 'David Banga Studio website',
    'Versions « wordmark » et « monogramme »': 'Wordmark and monogram versions',
    'Systèmes': 'Systems',
    'Familles de polices avec licences': 'Licensed font families',
    'Psychologie': 'Psychology',
    'Signification culturelle et émotionnelle': 'Cultural and emotional meaning',
    'Aspect visuel': 'Visual look',
    'Formes, illustrations et textures': 'Shapes, illustrations and textures',
    'Kits pour les réseaux sociaux, supports imprimés et éléments d’interface utilisateur': 'Social media kits, print materials and user interface elements',
    'Créer ma marque': 'Create my brand',
    'Voir les identités': 'See the identities',
    'Une identité forte raconte une histoire avant le premier mot. Je construis des systèmes de marque cohérents, du logotype aux déclinaisons print, digitales et sociales.': 'A strong identity tells a story before the first word. I build consistent brand systems, from the logotype to print, digital and social applications.',
    'Identité Anasa — façade du studio': 'Anasa identity — studio storefront',
    'Identité Kult — campagne d’affichage': 'Kult identity — poster campaign',
    'Parcours utilisateurs, arborescence et wireframes': 'User journeys, site maps and wireframes',
    'Interfaces web & mobile haute fidélité': 'High-fidelity web & mobile interfaces',
    'Composants, styles et documentation': 'Components, styles and documentation',
    'Prototypage': 'Prototyping',
    'Prototypes interactifs pour tester et valider': 'Interactive prototypes to test and validate',
    'Micro-interactions et animations d’interface': 'Micro-interactions and interface animations',
    'Concevoir mon site': 'Design my website',
    'Voir les interfaces': 'See the interfaces',
    'Des interfaces claires qui servent à la fois la marque et l’utilisateur : chaque écran a une intention, chaque détail une raison d’être.': 'Clear interfaces that serve both the brand and the user: every screen has an intention, every detail a reason to be.',
    'Guide interactif RNTÉÉ': 'RNTÉÉ interactive guide',
    'RNTÉÉ — Guide interactif': 'RNTÉÉ — Interactive guide',
    'Site Pin Africa': 'Pin Africa website',
    'Site national': 'National website',
    'Guide interactif': 'Interactive guide',

    /* Clients */
    '17 marques': '17 brands',
    'Ils m’ont fait': 'They',
    'confiance': 'trusted me',
    'Lift — Solutions de sécurité': 'Lift — Security solutions',
    'Votre marque ?': 'Your brand?',
    'Parlons-en': 'Let’s talk',

    /* Recommandations */
    '(05) — Recommandations': '(05) — Recommendations',
    'Ce qu’ils': 'What they',
    'en disent': 'say',
    'Quatre recommandations publiées sur LinkedIn par des clients et des collaborateurs.': 'Four recommendations posted on LinkedIn by clients and collaborators.',
    'Voir le profil LinkedIn': 'View LinkedIn profile',
    'Lire en entier': 'Read in full',
    'Réduire': 'Collapse',
    '“Il a trouvé le moyen de mettre en scène les informations à partager pour qu’elles touchent la cible avec précision.”': '“He found a way to stage the information so that it reaches its audience with precision.”',
    'Il a trouvé le moyen de mettre en scène les informations à partager pour qu’elles touchent la cible avec précision.': 'He found a way to stage the information so that it reaches its audience with precision.',
    'Exaucé est un professionnel proactif et dynamique. Il anticipe les besoins de ses clients et délivre un résultat qui va au-delà de vos attentes.': 'Exaucé is a proactive and dynamic professional. He anticipates his clients’ needs and delivers results that go beyond your expectations.',
    'J’ai le bonheur d’avoir recours à ses services et il est toujours attentif à toujours fournir un travail qui monte en qualité. Mon projet de documents PDF à partager sur la maîtrise de LinkedIn en 2020 a pu profiter de sa créativité. Tout le monde a apprécié la forme des documents, dont le mérite lui revient exclusivement.': 'I have the pleasure of working with him, and he is always careful to deliver work of ever-increasing quality. My 2020 project of shareable PDF guides on mastering LinkedIn benefited from his creativity. Everyone appreciated the design of the documents, and the credit goes entirely to him.',
    'C’est très agréable de travailler avec un professionnel qui est passionné par ce qu’il fait. Confiez-lui vos projets avec l’assurance que vous obtiendrez bien plus que ce que vous pensez.': 'It is a real pleasure to work with a professional who is passionate about what he does. Entrust him with your projects, knowing you will get far more than you expect.',
    '“Si votre souci est de communiquer pour votre organisation ou pour votre personal branding, je conseille à 100 % Exaucé.”': '“If you need to communicate for your organization or your personal brand, I recommend Exaucé 100%.”',
    'Exaucé est le designer le plus bienveillant et compétent avec qui j’ai eu affaire depuis que je l’ai connu. Durant maintenant plus de deux ans, il m’a aidé dans la conception et la mise en application de flyers et d’affiches marketing pour ma communication en ligne.': 'Exaucé is the kindest and most skilled designer I have worked with since I met him. For more than two years now, he has helped me design and produce flyers and marketing posters for my online communication.',
    'Son originalité, sa capacité à travailler à tout temps selon les exigences qui lui sont données et son attention au détail lui permettent d’établir des livrables ou des résultats respectant la qualité de façon optimale… Au cours des trois dernières années (2019, 2020 et 2021), tous ses livrables ont été appréciés par mon portefeuille professionnel. Il ne travaille pas seul : il a un réseau étendu dans le milieu lui permettant d’être complet pour toute conception d’affiche créative.': 'His originality, his ability to work at any time to the requirements he is given and his attention to detail allow him to deliver work of the highest quality… Over the past three years (2019, 2020 and 2021), all of his deliverables have been well received by my professional network. He does not work alone: he has a wide network in the field that lets him cover every aspect of creative poster design.',
    'Si votre souci est de communiquer pour votre organisation ou pour votre personal branding, je conseille à 100 % Exaucé, professionnel et impliqué dans son travail.': 'If you need to communicate for your organization or your personal brand, I recommend Exaucé 100%, a professional who is committed to his work.',
    '“Sa combinaison unique de compétences techniques et créatives, associée à son éthique de travail exemplaire, en fait un professionnel remarquable.”': '“His unique combination of technical and creative skills, together with his exemplary work ethic, makes him a remarkable professional.”',
    'Je recommande vivement Exaucé Yanga pour tout projet impliquant des compétences en développement front-end et en design. Sa combinaison unique de compétences techniques et créatives, associée à son éthique de travail exemplaire, en fait un professionnel remarquable et un atout précieux pour toute entreprise.': 'I highly recommend Exaucé Yanga for any project that calls for front-end development and design skills. His unique combination of technical and creative skills, together with his exemplary work ethic, makes him a remarkable professional and a valuable asset to any company.',
    'N’hésitez pas à me contacter si vous avez besoin de plus d’informations sur Exaucé Yanga.': 'Feel free to contact me if you need more information about Exaucé Yanga.',
    '“Sa modestie et sa capacité d’écoute font de lui un graphiste exceptionnel.”': '“His modesty and his ability to listen make him an exceptional graphic designer.”',
    'J’ai eu l’énorme plaisir de travailler avec Exaucé sur les visuels de mon entreprise Sion Guinar, et j’ai été particulièrement impressionné par son efficacité. Sa modestie et sa capacité d’écoute font de lui un graphiste exceptionnel.': 'I had the great pleasure of working with Exaucé on the visuals for my company Sion Guinar, and I was particularly impressed by his efficiency. His modesty and his ability to listen make him an exceptional graphic designer.',
    'Gouvernance, Risques & Conformité · Executive MBA Candidate': 'Governance, Risk & Compliance · Executive MBA Candidate',

    /* Contact & pied de page */
    'Un projet en tête ?': 'A project in mind?',
    'Parlons-en.': 'Let’s talk.',
    'Copier l’adresse': 'Copy address',
    'Copié !': 'Copied!',
    'Téléphone': 'Phone',
    'Réseaux': 'Social',
    'Disponibilité': 'Availability',
    'Ouvert aux nouveaux projets': 'Open to new projects',
    'Basé en France — fuseau Paris': 'Based in France — Paris time',
    'Disponible pour de nouveaux projets': 'Available for new projects',
    'Exaucé Yanga — Tous droits réservés': 'Exaucé Yanga — All rights reserved',
    'Conçu & développé par Exaucé Yanga': 'Designed & developed by Exaucé Yanga',
    'Retour en haut ↑': 'Back to top ↑',

    /* Page projets */
    'Index des projets': 'Project index',
    'Identités visuelles, web design et développement : une sélection de projets menés pour des marques en Afrique, en Europe et en Amérique du Nord.': 'Visual identities, web design and development: a selection of projects for brands in Africa, Europe and North America.',
    'Identité visuelle': 'Visual identity',
    'Filtrer les projets': 'Filter projects',
    'Tout': 'All',
    'Sites web': 'Websites',
    'Liste des projets': 'Project list',
    'projets affichés — survolez une ligne pour faire défiler les visuels.': 'projects shown — hover over a row to flip through the visuals.',

    /* Page projet */
    'Visionneuse d’images': 'Image viewer',
    'Fermer ✕': 'Close ✕',
    '← Précédent': '← Previous',
    'Suivant →': 'Next →',
    'Erreur — projet introuvable': 'Error — project not found',
    'Ce projet n’existe pas': 'This project doesn’t exist',
    '(encore)': '(yet)',
    'Voir tous les projets': 'See all projects',
    'Tous les projets': 'All projects',
    'Site web': 'Website',
    'Projets liés': 'Related projects',
    'En ligne': 'Online',
    'Livrables': 'Deliverables',
    '(Le projet)': '(The project)',
    'Visiter le site': 'Visit the website',
    'Projet suivant': 'Next project',

    /* Page mission Sephis */
    'Fondation Sephis — WAWI · Exaucé Yanga': 'Sephis Foundation — WAWI · Exaucé Yanga',
    'Mission de consultant pour la Fondation SEPHIS (programme WAWI) : identités visuelles et packagings pour 50 femmes entrepreneures sénégalaises.': 'Consulting mission for the SEPHIS Foundation (WAWI program): visual identities and packaging for 50 Senegalese women entrepreneurs.',
    'Identités visuelles et packagings pour 50 femmes entrepreneures sénégalaises.': 'Visual identities and packaging for 50 Senegalese women entrepreneurs.',
    'Fondation Sephis': 'Sephis Foundation',
    'Fondation SEPHIS': 'SEPHIS Foundation',
    'Programme': 'Program',
    'Rôle': 'Role',
    'Consultant — identité visuelle & packaging': 'Consultant — visual identity & packaging',
    'Période': 'Period',
    'Juillet 2025 — Juillet 2026': 'July 2025 — July 2026',
    'Dakar, Sénégal': 'Dakar, Senegal',
    '(01) — La mission': '(01) — The mission',
    '(Contexte)': '(Context)',
    'Au Sénégal, les femmes représentent 52 % de la population active, mais seulement 20 % des entreprises du secteur formel sont dirigées par des femmes, qui essuient 30 % de refus de prêts bancaires, contre 18 % pour les hommes.': 'In Senegal, women make up 52% of the workforce, yet only 20% of formal-sector businesses are run by women, who face a 30% bank loan rejection rate, compared with 18% for men.',
    'Une identité visuelle peu attrayante et des emballages non conformes freinent directement la commercialisation et l’accès au financement. Le programme WAWI de la Fondation SEPHIS fait office de passerelle technique et financière.': 'An unappealing visual identity and non-compliant packaging directly hold back sales and access to financing. The SEPHIS Foundation’s WAWI program acts as a technical and financial bridge.',
    'Ma mission : accompagner 50 entrepreneures, issues des cohortes 1 à 6, dans la création ou l’ajustement de leur identité visuelle et la normalisation de leurs packagings.': 'My mission: support 50 entrepreneurs, from cohorts 1 to 6, in creating or refining their visual identity and bringing their packaging up to standard.',
    'Diagnostics individualisés': 'Individual diagnostics',
    'Logos & chartes graphiques': 'Logos & brand guidelines',
    'Palettes & typographies': 'Palettes & typography',
    'Cartes de visite': 'Business cards',
    'Templates réseaux sociaux': 'Social media templates',
    'Brochures & flyers': 'Brochures & flyers',
    'Packagings conformes aux normes': 'Standards-compliant packaging',
    'Entrepreneures accompagnées': 'Entrepreneurs supported',
    'Kits d’identité visuelle': 'Visual identity kits',
    'Diagnostics': 'Diagnostics',
    'Kits de communication': 'Communication kits',
    'Refontes': 'Redesigns',
    '(02) — Méthode': '(02) — Method',
    '4 étapes': '4 steps',
    'Une méthode': 'A method',
    'en 4 temps': 'in 4 steps',
    'Audit & prise de contact': 'Audit & first contact',
    'Échanges directs avec chaque entrepreneure pour cerner l’histoire de la marque et les besoins de son marché.': 'Direct conversations with each entrepreneur to understand the story of the brand and the needs of its market.',
    'Phase conceptuelle': 'Concept phase',
    'Analyse des logos existants, souvent obsolètes ou générés par IA, et proposition d’axes de modernisation ou de refonte complète.': 'Analysis of existing logos, often outdated or AI-generated, and proposals for a refresh or a complete redesign.',
    'Production graphique': 'Design production',
    'Développement complet des chartes graphiques, des supports et des packagings sous la suite Adobe et Canva Pro.': 'Full development of brand guidelines, materials and packaging with Adobe Creative Suite and Canva Pro.',
    'Livraison & autonomie': 'Delivery & autonomy',
    'Remise des kits d’identité avec leurs fichiers sources, et conseils pour appliquer la charte sur tous les supports.': 'Handover of identity kits with their source files, plus guidance on applying the guidelines across every medium.',
    '(03) — Identités réalisées': '(03) — Identities created',
    'Sélection': 'Selection',
    'Marques': 'Brands',
    'accompagnées': 'supported',
    'Activez JavaScript pour afficher les identités.': 'Enable JavaScript to see the identities.',
    '(04) — Logos conçus': '(04) — Logos designed',
    'logos': 'logos',
    'Logos': 'Logos',
    'conçus': 'designed',
    '(05) — Résultats': '(05) — Results',
    '(Impact)': '(Impact)',
    'Chaque entreprise dispose désormais de fichiers sources exploitables pour ses impressions et sa communication digitale.': 'Every business now has usable source files for its printing and digital communication.',
    'Des identités artisanales ou générées par IA ont laissé place à des visuels uniques, stables et représentatifs des valeurs locales sénégalaises, prêts pour les marchés formels.': 'Homemade or AI-generated identities have given way to unique, consistent visuals that reflect local Senegalese values, ready for formal markets.',
    'Des templates prêts à l’emploi rendent les entrepreneures autonomes dans la production de leurs contenus pour les réseaux sociaux.': 'Ready-to-use templates let the entrepreneurs produce their own social media content.',
    'Recommandations': 'Recommendations',
    'Appliquer les chartes sur tous les supports': 'Apply the guidelines on every medium',
    'Standardiser la production des packagings': 'Standardize packaging production',
    'Investir dans des séances photo professionnelles': 'Invest in professional photo shoots',
    'Former les équipes internes à la charte': 'Train internal teams on the guidelines',
    'Produits de la mer': 'Seafood',
    'Pâtisserie': 'Pastry',
    'Matériaux de construction': 'Building materials',
    'BTP — Construction': 'Construction',

    /* 404 */
    'Erreur — page introuvable': 'Error — page not found',
    'Cette page s’est égarée. Les projets, eux, sont bien là.': 'This page got lost. The projects, however, are right here.',
    'Retour à l’accueil': 'Back to home',
    'Voir les projets': 'See the projects'
  };

  /* Textes avec des nombres variables */
  var EN_RULES = [
    [/^Étude de cas — (\d+) visuels$/, 'Case study — $1 visuals'],
    [/^Agrandir le visuel (\d+)$/, 'Enlarge image $1'],
    [/^(.+) — visuel (\d+) sur (\d+)$/, '$1 — image $2 of $3'],
    [/^(.+) — visuel (\d+)$/, '$1 — image $2'],
    [/^(.+) — (\d+) visuels$/, '$1 — $2 visuals'],
    [/^(\d+) visuels$/, '$1 visuals'],
    [/^Logo (.+)$/, '$1 logo']
  ];

  /* ---------- Traduction ---------- */
  function norm(s) { return s.replace(/ /g, ' ').replace(/\s+/g, ' ').trim(); }

  function lookup(key) {
    if (lang === 'fr' || !key) return null;
    if (Object.prototype.hasOwnProperty.call(EN, key)) return EN[key];
    for (var i = 0; i < EN_RULES.length; i++) {
      if (EN_RULES[i][0].test(key)) return key.replace(EN_RULES[i][0], EN_RULES[i][1]);
    }
    return null;
  }

  /* t('texte français') → texte dans la langue courante */
  function t(s) {
    var r = lookup(norm(String(s)));
    return r == null ? s : r;
  }

  /* Remplace en gardant les espaces autour du texte d'origine */
  function swap(s) {
    var key = norm(s);
    var r = lookup(key);
    if (r == null) return null;
    var lead = s.match(/^[\s ]*/)[0], trail = s.match(/[\s ]*$/)[0];
    return lead + r + trail;
  }

  var ATTRS = ['alt', 'aria-label', 'title', 'data-pre-line'];
  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1 };

  function apply(scope) {
    if (lang === 'fr') return;
    scope = scope || document.body;
    if (!scope) return;
    var walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p || SKIP[p.nodeName] || (p.closest && p.closest('[translate="no"]'))) return NodeFilter.FILTER_REJECT;
        return /\S/.test(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    var nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(function (node) { var r = swap(node.nodeValue); if (r != null) node.nodeValue = r; });

    var els = scope.querySelectorAll ? scope.querySelectorAll('[' + ATTRS.join('],[') + ']') : [];
    Array.prototype.forEach.call(els, function (el) {
      ATTRS.forEach(function (a) {
        var v = el.getAttribute(a);
        if (v == null) return;
        var r = swap(v);
        if (r != null) el.setAttribute(a, r);
      });
    });
  }

  function applyHead() {
    if (lang === 'fr') return;
    var tt = t(document.title); if (tt) document.title = tt;
    ['meta[name="description"]', 'meta[property="og:title"]', 'meta[property="og:description"]'].forEach(function (sel) {
      var m = document.querySelector(sel);
      if (m) m.setAttribute('content', t(m.getAttribute('content')));
    });
    var loc = document.querySelector('meta[property="og:locale"]');
    if (loc) loc.setAttribute('content', 'en_US');
  }

  /* ---------- Bouton de langue ---------- */
  function set(next) {
    if (next === lang || SUPPORTED.indexOf(next) < 0) return;
    try {
      localStorage.setItem(KEY, next);
      sessionStorage.setItem('ey-lang-switch', '1');
    } catch (e) { /* sans stockage : on passe par l'URL */ }
    var url = new URL(window.location.href);
    url.searchParams.delete('lang');
    try { if (localStorage.getItem(KEY) !== next) url.searchParams.set('lang', next); }
    catch (e) { url.searchParams.set('lang', next); }
    if (url.toString() === window.location.href) window.location.reload();
    else window.location.replace(url.toString());
  }

  function bindButtons() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function (b) {
      var l = b.getAttribute('data-lang');
      b.setAttribute('aria-pressed', l === lang ? 'true' : 'false');
      b.addEventListener('click', function () { set(l); });
    });
  }

  window.I18N = { lang: lang, t: t, apply: apply, set: set };

  root.lang = lang;
  applyHead();
  apply(document.body);
  bindButtons();
  root.classList.remove('i18n-wait');
})();
