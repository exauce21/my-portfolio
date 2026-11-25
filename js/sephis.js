/* ==========================================================================
   sephis.js - Page mission Fondation Sephis (sephis.html)
   Rendu depuis data.js (projet "sephis") :
   - identités réalisées (collection) + lightbox par marque
   - grille des logos conçus
   - numéro du projet et projet suivant
   ========================================================================== */
(function () {
  'use strict';

  var EY = window.EY, P = window.PORTFOLIO;
  var page = document.querySelector('[data-sephis]');
  if (!page || !P) return;
  var p = P.bySlug('sephis');
  if (!p) return;

  var t = EY.t;
  var pad = function (n) { return (n < 10 ? '0' : '') + n; };

  /* ---------- Numéro ---------- */
  var num = page.querySelector('[data-sephis-num]');
  if (num) num.textContent = p.number + ' / ' + pad(P.projects.length);

  /* ---------- Identités réalisées ---------- */
  var brandsEl = page.querySelector('[data-sephis-brands]');
  if (brandsEl) {
    brandsEl.innerHTML = p.collection.map(function (b, bi) {
      var thumbs = b.gallery.map(function (g, i) {
        return '<figure class="gallery__item sephis-brand__item" data-brand="' + bi + '" data-i="' + i + '">' +
          '<button type="button" class="sr-only">' + EY.esc(t('Agrandir le visuel ' + (i + 1))) + '</button>' +
          '<img src="' + g.sm + '" alt="' + EY.esc(t(b.name + ' - visuel ' + (i + 1) + ' sur ' + b.gallery.length)) + '" width="480" height="640" loading="lazy" decoding="async">' +
        '</figure>';
      }).join('');
      return '<article class="sephis-brand grid">' +
        '<header class="sephis-brand__info" data-reveal>' +
          '<span class="mono muted">B-' + pad(bi + 1) + '</span>' +
          '<h3 class="sephis-brand__name">' + EY.esc(b.name) + '</h3>' +
          '<p class="mono muted">' + (b.sector ? '<span>' + EY.esc(t(b.sector)) + '</span><br>' : '') +
            '<span>' + EY.esc(t('Identité visuelle')) + '</span> · <span>' + EY.esc(t(b.gallery.length + ' visuels')) + '</span></p>' +
        '</header>' +
        '<div class="sephis-brand__grid" data-reveal style="--d:120">' + thumbs + '</div>' +
      '</article>';
    }).join('');
  }

  /* ---------- Logos ---------- */
  var logosEl = page.querySelector('[data-sephis-logos]');
  if (logosEl) {
    logosEl.innerHTML = p.logos.map(function (l, i) {
      return '<li class="sephis-logo" data-reveal style="--d:' + (i % 4) * 60 + '">' +
        '<img src="assets/img/projets/sephis/logos/' + l.file + '.webp" alt="' + EY.esc(t('Logo ' + l.name)) + '" loading="lazy" decoding="async">' +
        '<span class="mono">' + EY.esc(l.name) + '</span>' +
      '</li>';
    }).join('');
    var lc = page.querySelector('[data-sephis-logo-count]');
    if (lc) lc.textContent = pad(p.logos.length);
  }

  /* ---------- Projet suivant ---------- */
  var nextEl = page.querySelector('[data-sephis-next]');
  if (nextEl) {
    var next = P.projects[(P.projects.indexOf(p) + 1) % P.projects.length];
    nextEl.innerHTML =
      '<a class="next" href="' + P.href(next) + '" data-slug="' + next.slug + '" data-preview-host>' +
        '<span class="next__row mono"><span>' + t('Projet suivant') + '</span><span>' + next.number + '</span></span>' +
        '<span class="next__name">' + EY.esc(next.name) + ' <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" stroke-width="1"/></svg></span>' +
      '</a>';
  }

  EY.observe(page);
  if (EY.bindPreview && nextEl) EY.bindPreview(nextEl);

  /* ---------- Lightbox (par marque) ---------- */
  var dlg = document.getElementById('lightbox');
  if (!dlg || typeof dlg.showModal !== 'function') return;
  var img = dlg.querySelector('img');
  var counter = dlg.querySelector('[data-lb-count]');
  var titleEl = dlg.querySelector('[data-lb-title]');
  var brand = null, cur = 0;

  function render() {
    var g = brand.gallery[cur];
    img.src = g.lg; img.width = g.w; img.height = g.h;
    img.alt = t(brand.name + ' - visuel ' + (cur + 1));
    counter.textContent = (cur + 1) + ' / ' + brand.gallery.length;
    titleEl.textContent = brand.name;
  }
  function open(b, i) { brand = b; cur = i; render(); dlg.showModal(); document.body.style.overflow = 'hidden'; }
  function go(d) { cur = (cur + d + brand.gallery.length) % brand.gallery.length; render(); }

  EY.$$('.sephis-brand__item', page).forEach(function (fig) {
    fig.addEventListener('click', function () {
      open(p.collection[+fig.getAttribute('data-brand')], +fig.getAttribute('data-i'));
    });
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

  var sx = null;
  dlg.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
  dlg.addEventListener('touchend', function (e) {
    if (sx == null) return;
    var dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    sx = null;
  });
})();
