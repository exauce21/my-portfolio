/* ==========================================================================
   project.js — Page étude de cas (projet.html?p=<slug>)
   Rendu depuis data.js + galerie + lightbox + projet suivant.
   ========================================================================== */
(function () {
  'use strict';

  var EY = window.EY, P = window.PORTFOLIO;
  var mount = document.querySelector('[data-case]');
  if (!mount || !P) return;

  var slug = new URLSearchParams(window.location.search).get('p');
  var p = slug && P.bySlug(slug);

  if (p && p.page) { window.location.replace(p.page); return; }

  if (!p) {
    document.title = EY.t('Projet introuvable — Exaucé Yanga');
    mount.innerHTML =
      '<section class="container notfound">' +
        '<p class="mono muted">Erreur — projet introuvable</p>' +
        '<h1 class="case-hero__title">Ce projet n’existe pas <em>(encore)</em>.</h1>' +
        '<p style="margin-top:32px"><a class="btn" href="projets.html">Voir tous les projets ' + EY.icon.arrow + '</a></p>' +
      '</section>';
    if (window.I18N) window.I18N.apply(mount);
    return;
  }

  /* ---------- SEO / partage ---------- */
  var title = p.name + ' — ' + (p.kind === 'web' ? EY.t('Site web') : 'Brand identity') + ' · Exaucé Yanga';
  document.title = title;
  var setMeta = function (sel, val) { var m = document.querySelector(sel); if (m) m.setAttribute('content', val); };
  setMeta('meta[name="description"]', p.summary);
  setMeta('meta[property="og:title"]', title);
  setMeta('meta[property="og:description"]', p.summary);

  var isWeb = p.kind === 'web';
  var idx = P.projects.indexOf(p);
  var next = P.projects[(idx + 1) % P.projects.length];
  var L = P.TAG_LABELS;
  var scopeLabels = { brand: 'Brand identity', ui: 'Web design (UI)', dev: 'Développement' };

  /* ---------- Méta ---------- */
  var linksHTML = '';
  if (p.url) {
    linksHTML = '<a class="u-link u-link--on" href="' + p.url + '" target="_blank" rel="noopener">' + p.url.replace(/^https?:\/\//, '').replace(/\/$/, '') + EY.icon.out + '</a>';
  } else if (p.links && p.links.length) {
    linksHTML = p.links.map(function (l) {
      return '<a class="u-link u-link--on" href="' + l.url + '" target="_blank" rel="noopener">' + EY.esc(l.label) + EY.icon.out + '</a>';
    }).join('<br>');
  }

  var stackHTML = p.stack ? '<div class="mono muted" style="margin-top:10px">' + p.stack.map(EY.esc).join(' · ') + '</div>' : '';

  /* ---------- Galerie ---------- */
  /* Mise en page sans orphelin (grille 3 colonnes, 1er visuel en 2x2) :
     on ajoute des visuels "larges" (2 colonnes) pour compléter les rangées. */
  var brandItems = p.gallery.filter(function (g) { return !g.web; });
  var n = brandItems.length, spans = {};
  if (!isWeb && n > 2) {
    spans[0] = 'big';
    var r = (n + 3) % 3;
    if (r === 2) spans[n - 1] = 'wide';
    if (r === 1 && n >= 6) { spans[n - 4] = 'wide'; spans[n - 1] = 'wide'; }
  }
  function itemHTML(g, i) {
    return '<figure class="gallery__item' + (spans[i] && !g.web ? ' gallery__item--' + spans[i] : '') + '" data-reveal style="--d:' + (i % 3) * 80 + '">' +
      '<button type="button" class="sr-only">Agrandir le visuel ' + (i + 1) + '</button>' +
      '<img src="' + g.lg + '" alt="' + EY.esc(p.name) + ' — visuel ' + (i + 1) + ' sur ' + p.gallery.length + '" width="' + g.w + '" height="' + g.h + '" loading="' + (i < 3 ? 'eager' : 'lazy') + '" decoding="async">' +
      '<figcaption class="mono">' + (g.label ? EY.esc(EY.t(g.label)) + ' — ' : '') + (i + 1 < 10 ? '0' : '') + (i + 1) + ' / ' + (p.gallery.length < 10 ? '0' : '') + p.gallery.length + '</figcaption>' +
    '</figure>';
  }
  /* Visuels de marque (grille 3 colonnes), puis captures de sites en pleine largeur */
  var galleryHTML = p.gallery.map(function (g, i) { return g.web ? '' : itemHTML(g, i); }).join('');
  var sitesHTML = p.gallery.map(function (g, i) { return g.web ? itemHTML(g, i) : ''; }).join('');

  /* ---------- Projets liés ---------- */
  var relatedHTML = '';
  if (p.related && p.related.length) {
    relatedHTML = '<section class="related container"><div class="label-row mono"><span>Projets liés</span><span>' + p.related.length + '</span></div>' +
      '<ol class="works__list" data-preview-host>' + p.related.map(P.bySlug).filter(Boolean).map(function (r) {
        return '<li class="work" data-slug="' + r.slug + '"><a class="work__link" href="' + P.href(r) + '">' +
          '<span class="work__idx mono">' + r.number + '</span><span class="work__name">' + EY.esc(r.name) + '</span>' +
          '<span class="work__sector">' + EY.esc(r.sector) + '</span>' + EY.tagsHTML(r.tags) +
          '<svg class="work__arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4.5 4.5 11.5 11.5M11.5 5.5v6h-6" stroke="currentColor" stroke-width="1.2"/></svg></a></li>';
      }).join('') + '</ol></section>';
  }

  mount.innerHTML =
    '<header class="case-hero container">' +
      '<div class="case-hero__top mono">' +
        '<a class="back u-link" href="projets.html">' + EY.icon.arrow.replace('class="arrow"', '') + ' Tous les projets</a>' +
        '<span>' + p.number + ' / ' + (P.projects.length < 10 ? '0' : '') + P.projects.length + '</span>' +
      '</div>' +
      '<h1 class="case-hero__title" data-split>' + EY.esc(p.name) + '</h1>' +
      '<p class="case-hero__summary" data-reveal style="--d:200">' + EY.esc(p.summary) + '</p>' +
      '<div class="case-meta grid" data-reveal style="--d:300">' +
        '<div class="case-meta__cell"><span class="mono muted">Client</span><div>' + EY.esc(p.client) + '</div></div>' +
        '<div class="case-meta__cell"><span class="mono muted">Secteur</span><div>' + EY.esc(p.sector) + '</div></div>' +
        '<div class="case-meta__cell"><span class="mono muted">Prestations</span>' + EY.tagsHTML(p.tags) +
          '<div class="mono muted" style="margin-top:10px">' + p.tags.map(function (t) { return EY.t(scopeLabels[t] || L[t]); }).join(' · ') + '</div></div>' +
        (linksHTML
          ? '<div class="case-meta__cell"><span class="mono muted">En ligne</span><div>' + linksHTML + '</div>' + stackHTML + '</div>'
          : '<div class="case-meta__cell"><span class="mono muted">Format</span><div>Étude de cas — ' + p.gallery.length + ' visuels</div></div>') +
      '</div>' +
    '</header>' +
    '<section class="container">' +
      '<div class="case-body grid">' +
        '<p class="case-body__label mono" data-reveal>(Le projet)</p>' +
        '<div class="case-body__text" data-reveal style="--d:100">' + p.description.map(function (t) { return '<p>' + EY.esc(t) + '</p>'; }).join('') + '</div>' +
        '<div class="case-body__list" data-reveal style="--d:200"><p class="mono muted" style="margin-bottom:12px">Livrables</p><ul>' +
          p.deliverables.map(function (d) { return '<li>' + EY.esc(d) + '</li>'; }).join('') + '</ul></div>' +
      '</div>' +
      (galleryHTML ? '<div class="gallery' + (isWeb ? ' gallery--web' : '') + '">' + galleryHTML + '</div>' : '') +
      (sitesHTML ? '<div class="gallery gallery--web">' + sitesHTML + '</div>' : '') +
      (isWeb ? '<p style="margin-top:24px"><a class="btn" href="' + p.url + '" target="_blank" rel="noopener">Visiter le site ' + EY.icon.out + '</a></p>' : '') +
    '</section>' +
    relatedHTML +
    '<section class="container">' +
      '<a class="next" href="' + P.href(next) + '" data-slug="' + next.slug + '" data-preview-host>' +
        '<span class="next__row mono"><span>Projet suivant</span><span>' + next.number + '</span></span>' +
        '<span class="next__name">' + EY.esc(next.name) + ' <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" stroke-width="1"/></svg></span>' +
      '</a>' +
    '</section>';

  EY.observe(mount);
  if (EY.bindPreview) EY.bindPreview(mount);

  /* ---------- Lightbox ---------- */
  var dlg = document.getElementById('lightbox');
  if (!dlg || typeof dlg.showModal !== 'function') return;
  var img = dlg.querySelector('img');
  var counter = dlg.querySelector('[data-lb-count]');
  var titleEl = dlg.querySelector('[data-lb-title]');
  var cur = 0;
  titleEl.textContent = p.name;

  function render() {
    var g = p.gallery[cur];
    img.src = g.lg; img.width = g.w; img.height = g.h;
    img.alt = EY.t(p.name + ' — visuel ' + (cur + 1));
    counter.textContent = (cur + 1) + ' / ' + p.gallery.length;
  }
  function open(i) { cur = i; render(); dlg.showModal(); document.body.style.overflow = 'hidden'; }
  function go(d) { cur = (cur + d + p.gallery.length) % p.gallery.length; render(); }

  EY.$$('.gallery__item', mount).forEach(function (fig, i) {
    fig.addEventListener('click', function () { open(i); });
  });
  dlg.querySelector('[data-lb-prev]').addEventListener('click', function () { go(-1); });
  dlg.querySelector('[data-lb-next]').addEventListener('click', function () { go(1); });
  dlg.querySelector('[data-lb-close]').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('close', function () { document.body.style.overflow = ''; });
  dlg.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
  });
  dlg.addEventListener('click', function (e) { if (e.target === dlg || e.target.classList.contains('lightbox__stage')) dlg.close(); });

  /* swipe */
  var sx = null;
  dlg.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
  dlg.addEventListener('touchend', function (e) {
    if (sx == null) return;
    var dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    sx = null;
  });
})();
