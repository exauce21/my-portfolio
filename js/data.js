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
