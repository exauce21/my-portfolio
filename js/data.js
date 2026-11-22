/* ==========================================================================
   Exaucé Yanga — Portfolio
   Source unique des projets (liste, accueil, pages étude de cas).

   Ajouter un projet "brand" :
     1. Déposer les visuels optimisés dans assets/img/projets/<slug>/
        (01.webp, 01-sm.webp, 02.webp, 02-sm.webp …)
     2. Ajouter une entrée ci-dessous avec kind: "brand" et images: <nombre>.
   Ajouter un projet "web" :
     1. Déposer assets/img/web/<slug>-1.webp (+ -1-sm.webp), -2 …
     2. Ajouter une entrée avec kind: "web", url et images: <nombre>.

   Traduction anglaise : ajouter le projet dans EN (plus bas, même slug).

   tags : "brand" (Brand identity), "ui" (Web design / UI), "dev" (Développement)
   ========================================================================== */

window.PORTFOLIO = (function () {
  'use strict';

  var person = {
    name: 'Exaucé Yanga',
    role: 'Développeur Front-end & Brand Designer',
    email: 'yexauce@gmail.com',
    phone: '+33 6 11 22 63 73',
    phoneHref: '+33611226373',
    timezone: 'Europe/Paris',
    socials: [
      { label: 'Instagram', url: 'https://www.instagram.com/exauce.yanga/' },
      { label: 'Behance', url: 'https://www.behance.net/exauceyanga' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/exauceyanga/' }
    ]
  };

  var TAG_LABELS = { brand: 'Brand', ui: 'UI', dev: 'Dev' };

  /* Ordre = ordre d'affichage sur projets.html (et numérotation N°). */
  var projects = [
    {
      slug: 'tee',
      kind: 'brand',
      name: 'RNTÉÉ',
      client: 'Réseau National TÉÉ',
      sector: 'Éducation — Canada',
      tags: ['brand', 'ui', 'dev'],
      images: 7,
      summary: 'Identité, site national et guide interactif pour le réseau qui accompagne les familles nouvellement arrivées au Canada.',
      description: [
        'Identité visuelle du Réseau National des Travailleuses et Travailleurs en Établissement dans les Écoles (RNTÉÉ) : un symbole inspiré de la feuille d’érable et des silhouettes en mouvement, une palette rouge affirmée et un système graphique décliné sur le print, la signalétique et le digital.',
        'L’accompagnement s’est prolongé avec le design et le développement du site national et du guide interactif destiné aux TÉÉ.'
      ],
      deliverables: ['Logotype & symbole', 'Système graphique', 'Supports print & signalétique', 'Web design', 'Développement'],
      links: [
        { label: 'teenational.ca', url: 'https://teenational.ca/' },
        { label: 'guide.teenational.ca', url: 'https://guide.teenational.ca/' }
      ],
      related: ['teenational', 'guide-tee']
    },
    {
      slug: 'samir',
      kind: 'brand',
      name: 'Samir',
      client: 'SamirPay',
      sector: 'Fintech — Paiement mobile',
      tags: ['brand', 'ui', 'dev'],
      images: 10,
      summary: 'Une marque fintech chaleureuse pour une solution d’encaissement mobile simplifiée.',
      description: [
        'Identité de Samir, solution d’encaissement mobile : un monogramme fluide qui évoque le mouvement de l’argent, la typographie Filson Pro et un duo vert / orange pensé pour l’écran.',
        'Le système a été décliné jusqu’au produit — icône d’application, interfaces, supports de communication — avec un accompagnement en UI design et en développement.'
      ],
      deliverables: ['Monogramme & logotype', 'Typographie & couleurs', 'Icône d’application', 'UI design', 'Développement']
    },
    {
      slug: 'teenational',
      kind: 'web',
      name: 'RNTÉÉ — Site national',
      client: 'Réseau National TÉÉ',
      sector: 'Éducation — Canada',
      tags: ['ui', 'dev'],
      images: 2,
      url: 'https://teenational.ca/',
      stack: ['WordPress', 'Elementor', 'SEO'],
      summary: 'Le portail qui guide gratuitement les familles dans l’intégration scolaire de leurs enfants au Canada.',
      description: [
        'Site du Réseau National TÉÉ : un portail qui accompagne gratuitement les familles nouvellement arrivées dans leurs démarches scolaires — découvrir le système, trouver une école francophone, contacter un TÉÉ local.',
        'Arborescence, design des pages et intégration WordPress, dans la continuité directe de la nouvelle identité de marque.'
      ],
      deliverables: ['Arborescence', 'Web design', 'Intégration WordPress', 'Référencement naturel'],
      related: ['tee', 'guide-tee']
    },
    {
      slug: 'guide-tee',
      kind: 'web',
      name: 'RNTÉÉ — Guide interactif',
      client: 'Réseau National TÉÉ',
      sector: 'Éducation — Canada',
      tags: ['ui', 'dev'],
      images: 2,
      url: 'https://guide.teenational.ca/',
      stack: ['HTML', 'CSS', 'JavaScript'],
      summary: 'Un outil interactif pour structurer l’accompagnement des élèves à besoins élevés.',
      description: [
        'Guide interactif d’accompagnement des élèves à besoins élevés, à l’intention des travailleuses et travailleurs d’établissement dans les écoles : fiches d’action par situation, boussoles par profil, grille d’intervention en quatre niveaux.',
        'L’enjeu : rendre un contenu dense immédiatement utilisable sur le terrain, avec une navigation par point de départ et une interface claire.'
      ],
      deliverables: ['UX & architecture de contenu', 'UI design', 'Développement front-end'],
      related: ['tee', 'teenational']
    },
    {
      slug: 'anasa',
      kind: 'brand',
      name: 'Anasa',
      client: 'Anasa Pilates & Wellness',
      sector: 'Pilates & bien-être',
      tags: ['brand', 'ui', 'dev'],
      images: 10,
      summary: 'Une identité minimale et sensorielle pour un studio de Pilates & bien-être.',
      description: [
        'Identité d’un studio de Pilates & bien-être : un monogramme épuré, un logotype aux approches généreuses et une palette terre, sable et kaki.',
        'Le système vit sur le textile, les accessoires, le packaging et la signalétique du studio, puis sur le site, conçu et développé dans la même écriture.'
      ],
      deliverables: ['Monogramme & logotype', 'Palette & typographie', 'Merchandising & signalétique', 'Web design', 'Développement']
    },
    {
      slug: 'lift',
      kind: 'brand',
      name: 'Lift Sécurité',
      client: 'Lift — Solutions de sécurité',
      sector: 'Sécurité électronique',
      tags: ['brand', 'ui', 'dev'],
      images: 10,
      summary: 'Un symbole en chevrons qui conjugue protection et élévation.',
      description: [
        'Lift propose des solutions de surveillance et de sécurité électronique. Le symbole, construit en chevrons, évoque à la fois la protection et l’élévation ; la typographie TT Hoves et un bleu électrique installent une marque technique mais accessible.',
        'Déclinaisons papeterie, réseaux sociaux et accompagnement en UI design et en développement.'
      ],
      deliverables: ['Symbole & logotype', 'Système de couleurs', 'Papeterie', 'Réseaux sociaux', 'UI design', 'Développement']
    },
    {
      slug: 'ci360',
      kind: 'brand',
      name: 'Consult’in 360',
      client: 'Consult’in 360',
      sector: 'Conseil',
      tags: ['brand', 'ui', 'dev'],
      images: 10,
      summary: '« Votre vision, notre expertise » — une marque de conseil ouverte et lumineuse.',
      description: [
        'Identité d’un cabinet de conseil : un monogramme circulaire et ouvert, la typographie Area Normal et un duo vert profond / citron qui donne de l’énergie à un secteur souvent austère.',
        'Le système est décliné de la papeterie aux objets, jusqu’au site web conçu et développé pour la marque.'
      ],
      deliverables: ['Monogramme & logotype', 'Grille de construction', 'Papeterie & objets', 'Web design', 'Développement']
    },
    {
      slug: 'oxavents',
      kind: 'brand',
      name: 'Oxavents',
      client: 'Oxavents',
      sector: 'Événementiel',
      tags: ['brand', 'ui', 'dev'],
      images: 10,
      summary: 'Une trame de points comme signature pour une plateforme événementielle.',
      description: [
        'Oxavents accompagne entreprises et particuliers dans la conception, l’organisation et la gestion de leurs événements. Son symbole en trame de points devient un motif, porté par la typographie Space Grotesk et un univers noir & blanc.',
        'Déclinaisons merchandising — badges, textile, casquettes, tote bags — et accompagnement en UI design et en développement.'
      ],
      deliverables: ['Symbole & logotype', 'Typographie', 'Merchandising', 'UI design', 'Développement']
    },
    {
      slug: 'dfc',
      kind: 'brand',
      name: 'Digital Freelance Club',
      client: 'Digital Freelance Club',
      sector: 'Communauté freelance',
      tags: ['brand', 'ui', 'dev'],
      images: 6,
      summary: 'Une mascotte et un damier bleu électrique pour fédérer une communauté.',
      description: [
        'Identité d’une communauté de freelances du digital : une mascotte expressive, un damier bleu électrique et la typographie Neulis Neue pour une marque joyeuse, immédiatement reconnaissable.',
        'Supports imprimés, tote bags et réseaux sociaux, avec un accompagnement en UI design et en développement.'
      ],
      deliverables: ['Logotype & mascotte', 'Motif & couleurs', 'Papeterie & goodies', 'UI design', 'Développement']
    },
    {
      slug: 'davidbanga',
      kind: 'web',
      name: 'David Banga Studio',
      client: 'David Banga',
      sector: 'Photographie — Dakar',
      tags: ['ui', 'dev'],
      images: 2,
      url: 'https://davidbanga.studio/',
      stack: ['HTML', 'CSS', 'JavaScript'],
      summary: 'Un portfolio sombre et éditorial pour un photographe basé à Dakar.',
      description: [
        'Portfolio du photographe David Banga : une direction artistique sombre et éditoriale qui laisse toute la place aux visages, une galerie filtrable par série — portraits studio, corporate, mode, couples, mariages — et un parcours de réservation de séance.'
      ],
      deliverables: ['Direction artistique web', 'UI design', 'Développement front-end', 'Galerie filtrable']
    },
    {
      slug: 'acquire',
      kind: 'web',
      name: 'Acquire by Pin Africa',
      client: 'Pin Africa',
      sector: 'Médias — Formation',
      tags: ['ui', 'dev'],
      images: 2,
      url: 'https://acquire.pin-africa.com/',
      stack: ['HTML', 'CSS', 'JavaScript'],
      summary: 'L’initiative de formation au journalisme de Pin Africa, racontée en un site.',
      description: [
        'Site de l’initiative de formation au journalisme et de développement des médias de Pin Africa : cours en ligne, programmes de terrain, chiffres d’impact, couverture presse et partenaires, présentés dans une interface chaleureuse et accessible.'
      ],
      deliverables: ['UI design', 'Développement front-end', 'Animations', 'Optimisation des performances'],
      related: ['pin-africa']
    },
    {
      slug: 'pin-africa',
      kind: 'web',
      name: 'Pin Africa',
      client: 'Pin Africa',
      sector: 'Média digital',
      tags: ['ui', 'dev'],
      images: 2,
      url: 'https://pin-africa.com/',
      stack: ['HTML', 'CSS', 'JavaScript'],
      summary: '« Stories that shape Africa » — l’archive vivante d’un média digital africain.',
      description: [
        'Site de Pin Africa, média digital africain engagé pour un journalisme indépendant à la voix authentique. Le site préserve les travaux phares — vidéo, mobile, storytelling interactif, articles — et raconte la mission du média.'
      ],
      deliverables: ['UI design', 'Développement front-end', 'Référencement naturel'],
      related: ['acquire']
    },
    {
      slug: 'kult',
      kind: 'brand',
      name: 'Kult',
      client: 'Kult',
      sector: 'RH — Tech',
      tags: ['brand'],
      images: 10,
      summary: 'La plateforme RH mobile des employés de terrain en Afrique francophone.',
      description: [
        'Kult est la première plateforme mobile RH dédiée aux employés de terrain en Afrique francophone. Un symbole « K » bicolore, une palette ocre et bleu nuit, une grille de construction précise.',
        'Le système s’étend à la campagne d’affichage, aux objets et au packaging.'
      ],
      deliverables: ['Symbole & logotype', 'Grille de construction', 'Campagne d’affichage', 'Packaging & objets']
    },
    {
      slug: 'gsf',
      kind: 'brand',
      name: 'GSF Global Advisors',
      client: 'GSF Global Advisors',
      sector: 'Conseil stratégique',
      tags: ['brand'],
      images: 10,
      summary: 'Un damier pixelisé pour un cabinet de conseil stratégique.',
      description: [
        'Identité d’un cabinet de conseil stratégique : un logotype « gsf » construit, la typographie Alvar Essential et un motif en damier pixelisé rouge et bleu, qui donne du rythme aux supports éditoriaux et aux réseaux sociaux.'
      ],
      deliverables: ['Logotype', 'Typographie & couleurs', 'Motif graphique', 'Kit réseaux sociaux']
    },
    {
      slug: 'skda',
      kind: 'brand',
      name: 'Skills Development Academy',
      client: 'Skills Development Academy',
      sector: 'Formation',
      tags: ['brand'],
      images: 10,
      summary: '« Libérez votre potentiel » — une académie aux couleurs vibrantes.',
      description: [
        'Identité de Skills Development Academy : un symbole en entrelacs, la typographie Sora et une palette violette et vibrante. Les tracés fluides du symbole deviennent un langage graphique pour les campagnes, la papeterie et les produits dérivés.'
      ],
      deliverables: ['Symbole & logotype', 'Palette & typographie', 'Campagnes', 'Papeterie & goodies']
    },
    {
      slug: 'etpp',
      kind: 'brand',
      name: 'ETPP',
      client: 'ETPP',
      sector: 'BTP — Construction',
      tags: ['brand'],
      images: 8,
      summary: '« Construire la qualité, brique par brique. »',
      description: [
        'Identité d’une entreprise de construction : un symbole dynamique, un jaune-vert de sécurité associé au noir, et des déclinaisons pensées pour le chantier — casques, conteneurs, panneaux — comme pour la papeterie.'
      ],
      deliverables: ['Symbole & logotype', 'Couleurs', 'Déclinaisons chantier', 'Papeterie']
    },
    {
      slug: 'cifsa',
      kind: 'brand',
      name: 'CIFSA',
      client: 'CIFSA',
      sector: 'Sport',
      tags: ['brand'],
      images: 8,
      summary: 'Une identité énergique au service du sport féminin.',
      description: [
        'Identité d’une structure sportive : un logotype géométrique, la typographie TT Hoves et une palette rouge-orangé énergique, déclinés sur des campagnes qui mettent en lumière le sport féminin.'
      ],
      deliverables: ['Logotype', 'Typographie & couleurs', 'Campagnes', 'Affichage']
    },
    {
      slug: 'coraf',
      kind: 'brand',
      name: 'CORAF',
      client: 'CORAF',
      sector: 'Recherche agricole',
      tags: ['brand'],
      images: 5,
      summary: '« Impulser l’innovation en Afrique de l’Ouest et du Centre. »',
      description: [
        'Campagne et supports pour le CORAF (Conseil Ouest et Centre Africain pour la Recherche et le Développement Agricoles) : affichage grand format, éditions et goodies autour de l’innovation agricole.'
      ],
      deliverables: ['Campagne', 'Affichage', 'Éditions', 'Goodies']
    },
    {
      slug: 'mupho',
      kind: 'brand',
      name: 'MuPho',
      client: 'Musée de la Photographie de Saint-Louis',
      sector: 'Art & culture',
      tags: ['brand'],
      images: 5,
      summary: '« African Art, Global Impact » — affiches et éditions pour le Musée de la Photographie.',
      description: [
        'Pour le Musée de la Photographie de Saint-Louis (Sénégal), une série d’affiches et de couvertures où le monogramme du musée devient fenêtre sur les œuvres — autour de la campagne « African Art, Global Impact » et des éditions « 100 regards ».'
      ],
      deliverables: ['Affiches', 'Couvertures', 'Campagne']
    },
    {
      slug: 'ric',
      kind: 'brand',
      name: 'RIC',
      client: 'Réseau d’Influence Chrétiens',
      sector: 'Réseau associatif',
      tags: ['brand'],
      images: 6,
      summary: 'Un logotype géométrique et un motif rythmé pour un réseau associatif.',
      description: [
        'Identité du Réseau d’Influence Chrétiens : un logotype géométrique, une palette bleu roi et orange, et un motif rythmé décliné sur la papeterie, les tote bags et les supports événementiels.'
      ],
      deliverables: ['Logotype', 'Grille de construction', 'Palette', 'Papeterie & goodies']
    },
    {
      slug: 'proskill-it',
      kind: 'brand',
      name: 'Proskills IT',
      client: 'Proskills IT',
      sector: 'Formation tech — Lomé',
      tags: ['brand'],
      images: 7,
      summary: 'Un monogramme « IT » en deux tons pour un centre de formation tech.',
      description: [
        'Identité d’un centre de formations IT intensives basé à Lomé : un monogramme « IT » en deux tons, la typographie Sora et une palette bleu / vert d’eau, déclinés sur les supports digitaux et les réseaux sociaux.'
      ],
      deliverables: ['Monogramme & logotype', 'Typographie & couleurs', 'Réseaux sociaux']
    }
  ];

  /* ---------- Traductions anglaises (clé = slug) ----------
     Seuls les champs listés remplacent le français quand la langue est EN.
     Nouveau projet : ajouter son entrée ici (sinon il reste en français). */
  var EN = {
    tee: {
      sector: 'Education — Canada',
      summary: 'Identity, national website and interactive guide for the network that supports newly arrived families in Canada.',
      description: [
        'Visual identity for the Réseau National des Travailleuses et Travailleurs en Établissement dans les Écoles (RNTÉÉ), Canada’s national network of settlement workers in schools: a symbol inspired by the maple leaf and figures in motion, a bold red palette and a graphic system rolled out across print, signage and digital.',
        'The collaboration continued with the design and development of the national website and the interactive guide for settlement workers.'
      ],
      deliverables: ['Logotype & symbol', 'Graphic system', 'Print & signage', 'Web design', 'Development']
    },
    samir: {
      sector: 'Fintech — Mobile payments',
      summary: 'A warm fintech brand for a simplified mobile payment solution.',
      description: [
        'Identity for Samir, a mobile payment solution: a fluid monogram that evokes the movement of money, the Filson Pro typeface and a green / orange pairing designed for screens.',
        'The system was carried all the way into the product — app icon, interfaces, communication materials — with support in UI design and development.'
      ],
      deliverables: ['Monogram & logotype', 'Typography & colors', 'App icon', 'UI design', 'Development']
    },
    teenational: {
      name: 'RNTÉÉ — National website',
      sector: 'Education — Canada',
      summary: 'The portal that guides families, free of charge, through their children’s school integration in Canada.',
      description: [
        'Website for the Réseau National TÉÉ: a portal that supports newly arrived families free of charge with school matters — understanding the system, finding a French-language school, contacting a local settlement worker.',
        'Site structure, page design and WordPress build, in direct continuity with the new brand identity.'
      ],
      deliverables: ['Site structure', 'Web design', 'WordPress build', 'Search engine optimization']
    },
    'guide-tee': {
      name: 'RNTÉÉ — Interactive guide',
      sector: 'Education — Canada',
      summary: 'An interactive tool to structure support for students with high needs.',
      description: [
        'Interactive guide for supporting students with high needs, written for settlement workers in schools: action sheets by situation, compasses by profile, a four-level intervention grid.',
        'The challenge: make dense content immediately usable in the field, with navigation by starting point and a clear interface.'
      ],
      deliverables: ['UX & content architecture', 'UI design', 'Front-end development']
    },
    anasa: {
      sector: 'Pilates & wellness',
      summary: 'A minimal, sensory identity for a Pilates & wellness studio.',
      description: [
        'Identity for a Pilates & wellness studio: a refined monogram, a generously spaced logotype and an earth, sand and khaki palette.',
        'The system lives on textiles, accessories, packaging and studio signage, then on the website, designed and developed in the same language.'
      ],
      deliverables: ['Monogram & logotype', 'Palette & typography', 'Merchandise & signage', 'Web design', 'Development']
    },
    lift: {
      name: 'Lift Security',
      client: 'Lift — Security solutions',
      sector: 'Electronic security',
      summary: 'A chevron symbol that combines protection and elevation.',
      description: [
        'Lift provides surveillance and electronic security solutions. The chevron-based symbol evokes both protection and elevation; the TT Hoves typeface and an electric blue create a brand that is technical yet approachable.',
        'Stationery and social media applications, plus support in UI design and development.'
      ],
      deliverables: ['Symbol & logotype', 'Color system', 'Stationery', 'Social media', 'UI design', 'Development']
    },
    ci360: {
      sector: 'Consulting',
      summary: '“Your vision, our expertise” — an open, bright consulting brand.',
      description: [
        'Identity for a consulting firm: a circular, open monogram, the Area Normal typeface and a deep green / lime pairing that brings energy to an often austere sector.',
        'The system extends from stationery to objects, all the way to the website designed and developed for the brand.'
      ],
      deliverables: ['Monogram & logotype', 'Construction grid', 'Stationery & objects', 'Web design', 'Development']
    },
    oxavents: {
      sector: 'Events',
      summary: 'A dot pattern as the signature of an events platform.',
      description: [
        'Oxavents helps companies and individuals design, organize and manage their events. Its dot-pattern symbol becomes a motif, carried by the Space Grotesk typeface and a black & white universe.',
        'Merchandise applications — badges, apparel, caps, tote bags — plus support in UI design and development.'
      ],
      deliverables: ['Symbol & logotype', 'Typography', 'Merchandise', 'UI design', 'Development']
    },
    dfc: {
      sector: 'Freelance community',
      summary: 'A mascot and an electric blue checkerboard to bring a community together.',
      description: [
        'Identity for a community of digital freelancers: an expressive mascot, an electric blue checkerboard and the Neulis Neue typeface for a joyful, instantly recognizable brand.',
        'Print materials, tote bags and social media, with support in UI design and development.'
      ],
      deliverables: ['Logotype & mascot', 'Pattern & colors', 'Stationery & goodies', 'UI design', 'Development']
    },
    davidbanga: {
      sector: 'Photography — Dakar',
      summary: 'A dark, editorial portfolio for a Dakar-based photographer.',
      description: [
        'Portfolio for photographer David Banga: a dark, editorial art direction that puts faces front and center, a gallery filterable by series — studio portraits, corporate, fashion, couples, weddings — and a session booking flow.'
      ],
      deliverables: ['Web art direction', 'UI design', 'Front-end development', 'Filterable gallery']
    },
    acquire: {
      sector: 'Media — Training',
      summary: 'Pin Africa’s journalism training initiative, told in one website.',
      description: [
        'Website for Pin Africa’s journalism training and media development initiative: online courses, field programs, impact figures, press coverage and partners, presented in a warm, accessible interface.'
      ],
      deliverables: ['UI design', 'Front-end development', 'Animations', 'Performance optimization']
    },
    'pin-africa': {
      sector: 'Digital media',
      summary: '“Stories that shape Africa” — the living archive of an African digital media outlet.',
      description: [
        'Website for Pin Africa, an African digital media outlet committed to independent journalism with an authentic voice. The site preserves its flagship work — video, mobile, interactive storytelling, articles — and tells the story of its mission.'
      ],
      deliverables: ['UI design', 'Front-end development', 'Search engine optimization']
    },
    kult: {
      sector: 'HR — Tech',
      summary: 'The mobile HR platform for frontline employees in French-speaking Africa.',
      description: [
        'Kult is the first mobile HR platform dedicated to frontline employees in French-speaking Africa. A two-tone “K” symbol, an ochre and midnight blue palette, a precise construction grid.',
        'The system extends to the poster campaign, objects and packaging.'
      ],
      deliverables: ['Symbol & logotype', 'Construction grid', 'Poster campaign', 'Packaging & objects']
    },
    gsf: {
      sector: 'Strategy consulting',
      summary: 'A pixelated checkerboard for a strategy consulting firm.',
      description: [
        'Identity for a strategy consulting firm: a constructed “gsf” logotype, the Alvar Essential typeface and a red and blue pixelated checkerboard pattern that gives rhythm to editorial materials and social media.'
      ],
      deliverables: ['Logotype', 'Typography & colors', 'Graphic pattern', 'Social media kit']
    },
    skda: {
      sector: 'Training',
      summary: '“Unlock your potential” — an academy in vibrant colors.',
      description: [
        'Identity for Skills Development Academy: an interlaced symbol, the Sora typeface and a vibrant purple palette. The symbol’s fluid lines become a graphic language for campaigns, stationery and merchandise.'
      ],
      deliverables: ['Symbol & logotype', 'Palette & typography', 'Campaigns', 'Stationery & goodies']
    },
    etpp: {
      sector: 'Construction',
      summary: '“Building quality, brick by brick.”',
      description: [
        'Identity for a construction company: a dynamic symbol, a safety yellow-green paired with black, and applications designed for the job site — helmets, containers, signs — as well as stationery.'
      ],
      deliverables: ['Symbol & logotype', 'Colors', 'Job site applications', 'Stationery']
    },
    cifsa: {
      sector: 'Sport',
      summary: 'An energetic identity in support of women’s sport.',
      description: [
        'Identity for a sports organization: a geometric logotype, the TT Hoves typeface and an energetic red-orange palette, rolled out across campaigns that put women’s sport in the spotlight.'
      ],
      deliverables: ['Logotype', 'Typography & colors', 'Campaigns', 'Posters']
    },
    coraf: {
      sector: 'Agricultural research',
      summary: '“Driving innovation in West and Central Africa.”',
      description: [
        'Campaign and materials for CORAF (West and Central African Council for Agricultural Research and Development): large-format posters, publications and goodies around agricultural innovation.'
      ],
      deliverables: ['Campaign', 'Posters', 'Publications', 'Goodies']
    },
    mupho: {
      sector: 'Art & culture',
      summary: '“African Art, Global Impact” — posters and publications for the Museum of Photography.',
      description: [
        'For the Musée de la Photographie de Saint-Louis (Senegal), a series of posters and covers where the museum’s monogram becomes a window onto the works — around the “African Art, Global Impact” campaign and the “100 regards” publications.'
      ],
      deliverables: ['Posters', 'Covers', 'Campaign']
    },
    ric: {
      sector: 'Non-profit network',
      summary: 'A geometric logotype and a rhythmic pattern for a non-profit network.',
      description: [
        'Identity for the Réseau d’Influence Chrétiens: a geometric logotype, a royal blue and orange palette, and a rhythmic pattern rolled out across stationery, tote bags and event materials.'
      ],
      deliverables: ['Logotype', 'Construction grid', 'Palette', 'Stationery & goodies']
    },
    'proskill-it': {
      sector: 'Tech training — Lomé',
      summary: 'A two-tone “IT” monogram for a tech training center.',
      description: [
        'Identity for an intensive IT training center based in Lomé: a two-tone “IT” monogram, the Sora typeface and a blue / aqua green palette, rolled out across digital media and social networks.'
      ],
      deliverables: ['Monogram & logotype', 'Typography & colors', 'Social media']
    }
  };

  if (window.I18N && window.I18N.lang === 'en') {
    projects.forEach(function (p) {
      var tr = EN[p.slug];
      if (tr) for (var k in tr) p[k] = tr[k];
    });
  }

  /* Sélection affichée sur la page d'accueil */
  var featured = ['tee', 'samir', 'davidbanga', 'anasa', 'acquire', 'lift', 'kult', 'ci360'];

  /* ---------- Helpers ---------- */
  function pad(n) { return (n < 10 ? '0' : '') + n; }

  projects.forEach(function (p, i) {
    p.index = i + 1;
    p.number = 'N°' + pad(i + 1);
    p.gallery = [];
    for (var k = 1; k <= p.images; k++) {
      if (p.kind === 'web') {
        p.gallery.push({
          lg: 'assets/img/web/' + p.slug + '-' + k + '.webp',
          sm: 'assets/img/web/' + p.slug + '-' + k + '-sm.webp',
          w: 1440, h: 900
        });
      } else {
        p.gallery.push({
          lg: 'assets/img/projets/' + p.slug + '/' + pad(k) + '.webp',
          sm: 'assets/img/projets/' + p.slug + '/' + pad(k) + '-sm.webp',
          w: 1050, h: 1400
        });
      }
    }
    p.cover = p.gallery[0];
  });

  function bySlug(slug) {
    for (var i = 0; i < projects.length; i++) if (projects[i].slug === slug) return projects[i];
    return null;
  }

  function count(tag) {
    if (!tag || tag === 'all') return projects.length;
    return projects.filter(function (p) { return p.tags.indexOf(tag) > -1; }).length;
  }

  return {
    person: person,
    projects: projects,
    featured: featured,
    TAG_LABELS: TAG_LABELS,
    bySlug: bySlug,
    count: count
  };
})();
