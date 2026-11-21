/* ==========================================================================
   hero.js — Hero interactif
   Au passage de la souris, les visuels des projets apparaissent en traînée
   (derrière le portrait, devant le nom). Sur écran tactile : apparition
   ambiante + au toucher. Léger effet de profondeur (parallaxe) sur le nom
   et le portrait.
   ========================================================================== */
(function () {
  'use strict';

  var EY = window.EY, P = window.PORTFOLIO;
  var hero = document.querySelector('[data-hero]');
  if (!hero || !P) return;

  var trail = hero.querySelector('.trail');
  var nameEl = hero.querySelector('.hero__name');
  var portrait = hero.querySelector('.hero__portrait');

  /* ---------- Pool d'images (tous les projets, mélangés) ---------- */
  var pool = [];
  P.projects.forEach(function (p) {
    p.gallery.forEach(function (g) {
      pool.push({ src: g.sm, w: g.w, h: g.h, name: p.name, kind: p.kind });
    });
  });
  pool = EY.shuffle(pool);
  var cursor = 0;
  function nextImage() { var it = pool[cursor % pool.length]; cursor++; return it; }

  /* Préchargement progressif */
  function preload(from, n) {
    for (var i = from; i < Math.min(from + n, pool.length); i++) { var im = new Image(); im.decoding = 'async'; im.src = pool[i].src; }
  }
  preload(0, 12);
  var idle = window.requestIdleCallback || function (cb) { return setTimeout(cb, 600); };
  idle(function () { preload(12, EY.canHover ? pool.length : 30); });

  /* ---------- Éléments réutilisables ---------- */
  var MAX = 14;
  var nodes = [];
  var z = 1;
  for (var i = 0; i < MAX; i++) {
    var fig = document.createElement('figure');
    fig.className = 'trail__item';
    fig.setAttribute('aria-hidden', 'true');
    fig.innerHTML = '<img alt="" decoding="async"><figcaption class="mono"></figcaption>';
    trail.appendChild(fig);
    nodes.push({ el: fig, img: fig.firstChild, cap: fig.lastChild, anims: [] });
  }
  var slot = 0;

  function spawn(x, y, opts) {
    opts = opts || {};
    var n = nodes[slot % MAX]; slot++;
    var data = nextImage();
    var isWeb = data.kind === 'web';
    var vw = Math.max(window.innerWidth, 320);
    var base = isWeb ? Math.min(340, Math.max(220, vw * 0.2)) : Math.min(230, Math.max(140, vw * 0.13));
    var w = Math.round(base * (0.85 + Math.random() * 0.3));
    n.anims.forEach(function (a) { a.cancel(); });
    n.anims = [];
    n.el.style.setProperty('--w', w + 'px');
    n.img.src = data.src;
    n.img.width = data.w; n.img.height = data.h;
    n.cap.innerHTML = '<span>' + EY.esc(data.name) + '</span>';
    n.el.style.zIndex = ++z;
    var r = (Math.random() - 0.5) * 10;
    var hgt = w * data.h / data.w;
    var tx = Math.round(x - w / 2), ty = Math.round(y - hgt / 2);
    var from = 'translate3d(' + tx + 'px,' + (ty + 30) + 'px,0) rotate(' + (r * 1.6) + 'deg) scale(.55)';
    var mid = 'translate3d(' + tx + 'px,' + ty + 'px,0) rotate(' + r + 'deg) scale(1)';
    var to = 'translate3d(' + tx + 'px,' + (ty - 24) + 'px,0) rotate(' + (r * .6) + 'deg) scale(.9)';
    var hold = opts.hold || 900;
    var a1 = n.el.animate([{ opacity: 0, transform: from }, { opacity: 1, transform: mid }], { duration: 620, easing: 'cubic-bezier(.19,1,.22,1)', fill: 'forwards' });
    var a2 = n.el.animate([{ opacity: 1, transform: mid }, { opacity: 0, transform: to }], { duration: 700, delay: hold, easing: 'cubic-bezier(.55,0,.1,1)', fill: 'forwards' });
    n.anims.push(a1, a2);
  }

  if (EY.reduceMotion) return;

  /* ---------- Souris ---------- */
  var last = null;
  var rect = hero.getBoundingClientRect();
  function updateRect() { rect = hero.getBoundingClientRect(); }
  window.addEventListener('resize', updateRect);
  window.addEventListener('scroll', updateRect, { passive: true });

  var threshold = function () { return Math.max(70, Math.min(window.innerWidth, window.innerHeight) * 0.1); };

  /* Parallaxe */
  var px = 0, py = 0, cx = 0, cy = 0, rafOn = false;
  function loop() {
    cx = EY.lerp(cx, px, 0.08); cy = EY.lerp(cy, py, 0.08);
    if (nameEl) nameEl.style.transform = 'translate3d(' + (cx * -18).toFixed(2) + 'px,' + (cy * -10).toFixed(2) + 'px,0)';
    if (portrait) portrait.style.transform = 'translate3d(calc(-50% + ' + (cx * 10).toFixed(2) + 'px),' + (cy * 6).toFixed(2) + 'px,0)';
    if (Math.abs(cx - px) > 0.001 || Math.abs(cy - py) > 0.001) requestAnimationFrame(loop);
    else rafOn = false;
  }
  function kick() { if (!rafOn) { rafOn = true; requestAnimationFrame(loop); } }

  hero.addEventListener('pointermove', function (e) {
    if (e.pointerType !== 'mouse' && e.pointerType !== 'pen') return;
    var x = e.clientX - rect.left, y = e.clientY - rect.top;
    px = (x / rect.width) - 0.5; py = (y / rect.height) - 0.5; kick();
    if (!last) { last = { x: x, y: y }; spawn(x, y); return; }
    var dx = x - last.x, dy = y - last.y;
    if (dx * dx + dy * dy > threshold() * threshold()) { last = { x: x, y: y }; spawn(x, y); }
  });
  hero.addEventListener('pointerleave', function () { last = null; px = 0; py = 0; kick(); });

  /* ---------- Tactile : apparition ambiante + au toucher ---------- */
  var ambient = null;
  function startAmbient() {
    if (ambient) return;
    ambient = setInterval(function () {
      if (document.hidden) return;
      var r = hero.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      var x = r.width * (0.12 + Math.random() * 0.76);
      var y = r.height * (0.18 + Math.random() * 0.55);
      spawn(x, y, { hold: 1300 });
    }, 1100);
  }
  if (!EY.canHover) {
    startAmbient();
    var lastT = 0;
    hero.addEventListener('touchmove', function (e) {
      var now = Date.now(); if (now - lastT < 140) return; lastT = now;
      var t = e.touches[0]; var r = hero.getBoundingClientRect();
      spawn(t.clientX - r.left, t.clientY - r.top);
    }, { passive: true });
  } else {
    /* Courte démo tant que la souris n'a pas bougé (après l'entrée du hero) */
    var demoCount = 0, demo = null;
    setTimeout(function () {
      demo = setInterval(function () {
        if (last || demoCount > 5) { clearInterval(demo); return; }
        var r = hero.getBoundingClientRect();
        var side = demoCount % 2 ? 0.8 : 0.2;
        spawn(r.width * (side + (Math.random() - .5) * .1), r.height * (0.36 + Math.random() * .22), { hold: 700 });
        demoCount++;
      }, 520);
    }, 1400);
  }
})();
