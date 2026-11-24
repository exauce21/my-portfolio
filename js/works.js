/* ==========================================================================
   works.js — Liste des projets
   - rendu depuis data.js (accueil : sélection / projets.html : tous)
   - aperçu flottant au survol : les visuels du projet défilent
     aléatoirement et suivent le curseur
   - filtres Brand / UI / Dev (projets.html)
   ========================================================================== */
(function () {
  'use strict';

  var EY = window.EY, P = window.PORTFOLIO;
  if (!P) return;

  /* ---------- Rendu ---------- */
  function rowHTML(p) {
    return '' +
      '<li class="work" data-slug="' + p.slug + '" data-tags="' + p.tags.join(' ') + '">' +
        '<a class="work__link" href="' + P.href(p) + '">' +
          '<span class="work__idx mono">' + p.number + '</span>' +
          '<span class="work__name">' + EY.esc(p.name) + '</span>' +
          '<span class="work__sector">' + EY.esc(p.sector) + (p.kind === 'web' ? ' <span class="mono muted">· Site web</span>' : '') + '</span>' +
          EY.tagsHTML(p.tags) +
          '<svg class="work__arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4.5 4.5 11.5 11.5M11.5 5.5v6h-6" stroke="currentColor" stroke-width="1.2"/></svg>' +
        '</a>' +
      '</li>';
  }

  var lists = EY.$$('[data-works]');
  lists.forEach(function (list) {
    var source = list.getAttribute('data-works');
    var items = source === 'featured'
      ? P.featured.map(P.bySlug).filter(Boolean)
      : P.projects;
    list.innerHTML = items.map(rowHTML).join('');
    EY.$$('.work', list).forEach(function (li, i) {
      li.setAttribute('data-reveal', '');
      li.style.setProperty('--d', Math.min(i, 10) * 45);
    });
    EY.observe(list);
  });

  /* ---------- Filtres ---------- */
  var filterBar = EY.$('[data-filters]');
  if (filterBar) {
    var list = EY.$('[data-works="all"]');
    var countEl = EY.$('[data-visible-count]');
    var buttons = EY.$$('[data-filter]', filterBar);

    /* all : tout — brand : identités — ui : projets UI & Dev — web : sites web */
    var match = function (p, f) {
      if (f === 'all') return true;
      if (f === 'web') return p.kind === 'web';
      return p.tags.indexOf(f) > -1;
    };
    var apply = function (tag, push) {
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-filter') === tag ? 'true' : 'false'); });
      var shown = 0;
      EY.$$('.work', list).forEach(function (li) {
        var ok = match(P.bySlug(li.getAttribute('data-slug')), tag);
        li.classList.toggle('is-hidden', !ok);
        li.classList.remove('is-entering');
        if (ok) {
          li.classList.add('is-in');
          void li.offsetWidth;
          li.style.setProperty('--i', shown);
          li.classList.add('is-entering');
          shown++;
        }
      });
      if (countEl) countEl.textContent = (shown < 10 ? '0' : '') + shown;
      if (push) {
        try {
          var url = new URL(window.location.href);
          if (tag === 'all') url.searchParams.delete('filtre'); else url.searchParams.set('filtre', tag);
          history.replaceState(null, '', url.toString());
        } catch (e) { /* file:// — pas de mise à jour d'URL */ }
      }
    };

    buttons.forEach(function (b) {
      var t = b.getAttribute('data-filter');
      var sup = b.querySelector('sup');
      if (sup) sup.textContent = P.projects.filter(function (p) { return match(p, t); }).length;
      b.addEventListener('click', function () { apply(t, true); });
    });
    var initial = new URLSearchParams(window.location.search).get('filtre');
    if (initial && ['brand', 'ui', 'web'].indexOf(initial) > -1) apply(initial, false);
    else if (countEl) countEl.textContent = P.projects.length;
  }

  /* ---------- Aperçu flottant ---------- */
  EY.bindPreview = function () {};
  if (!EY.canHover || EY.reduceMotion) return;
  var hoverTargets = EY.$$('[data-works], [data-preview-host]');

  var prev = document.createElement('div');
  prev.className = 'preview';
  prev.setAttribute('aria-hidden', 'true');
  prev.innerHTML = '<div class="preview__inner"><img alt=""><img alt=""></div><span class="preview__label mono"></span>';
  document.body.appendChild(prev);
  var inner = prev.firstChild;
  var imgs = EY.$$('img', inner);
  var label = prev.querySelector('.preview__label');
  var front = 0;

  var current = null, timer = null, lastSrc = null, order = [], step = 0;
  var tx = 0, ty = 0, x = 0, y = 0, vx = 0, rot = 0, running = false;

  function show(src) {
    var el = imgs[1 - front], other = imgs[front];
    front = 1 - front;
    var reveal = function () {
      el.onload = null;
      el.style.opacity = 1; other.style.opacity = 0;
    };
    el.onload = reveal;
    el.src = src;
    if (el.complete && el.naturalWidth) reveal();
  }

  function cycle() {
    if (!current) return;
    var g = current.gallery;
    if (g.length < 2) return;
    // ordre aléatoire sans répétition immédiate
    if (step >= order.length) {
      var o = EY.shuffle(g.map(function (_, i) { return i; }));
      if (o[0] === order[order.length - 1]) o.push(o.shift());
      order = o; step = 0;
    }
    var src = g[order[step++]].sm;
    if (src === lastSrc) return cycle();
    lastSrc = src; show(src);
  }

  function enter(p) {
    if (current === p) return;
    current = p;
    prev.classList.toggle('is-web', p.kind === 'web');
    label.textContent = EY.t(p.name + ' — ' + p.gallery.length + ' visuels');
    order = EY.shuffle(p.gallery.map(function (_, i) { return i; })); step = 0;
    var first = p.gallery[order[step++]].sm;
    lastSrc = first;
    imgs[0].style.opacity = 0; imgs[1].style.opacity = 0;
    show(first);
    prev.classList.add('is-visible');
    clearInterval(timer);
    timer = setInterval(cycle, 620);
    p.gallery.forEach(function (g) { var im = new Image(); im.src = g.sm; });
  }
  function leave() {
    current = null; clearInterval(timer);
    prev.classList.remove('is-visible');
  }

  function loop() {
    var nx = EY.lerp(x, tx, 0.16), ny = EY.lerp(y, ty, 0.16);
    vx = nx - x; x = nx; y = ny;
    rot = EY.lerp(rot, Math.max(-8, Math.min(8, vx * 0.35)), 0.12);
    var w = prev.offsetWidth, h = prev.offsetHeight;
    // l'aperçu se place à droite du curseur, ou à gauche près du bord
    var ox = (tx + w + 40 > window.innerWidth) ? -w - 28 : 28;
    var top = Math.max(12, Math.min(window.innerHeight - h - 40, y - h / 2));
    prev.style.transform = 'translate3d(' + (x + ox).toFixed(1) + 'px,' + top.toFixed(1) + 'px,0) rotate(' + rot.toFixed(2) + 'deg)';
    if (current || Math.abs(tx - x) > 0.5) requestAnimationFrame(loop);
    else running = false;
  }

  document.addEventListener('pointermove', function (e) {
    tx = e.clientX; ty = e.clientY;
    if (!running && current) { running = true; requestAnimationFrame(loop); }
  }, { passive: true });

  function bind(scope) {
    EY.$$('[data-slug]', scope).forEach(function (el) {
      var p = P.bySlug(el.getAttribute('data-slug'));
      if (!p) return;
      el.addEventListener('pointerenter', function (e) {
        if (!current) { x = tx = e.clientX; y = ty = e.clientY; }
        enter(p);
        if (!running) { running = true; requestAnimationFrame(loop); }
      });
      el.addEventListener('pointerleave', function (e) {
        var to = e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest('[data-slug]');
        if (!to) leave();
      });
    });
  }
  hoverTargets.forEach(bind);
  window.addEventListener('scroll', function () {
    if (!current) return;
    var el = document.elementFromPoint(tx, ty);
    var host = el && el.closest && el.closest('[data-slug]');
    if (!host) leave();
    else { var p = P.bySlug(host.getAttribute('data-slug')); if (p) enter(p); }
  }, { passive: true });

  EY.bindPreview = bind;
})();
