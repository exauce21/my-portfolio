/* ==========================================================================
   preloader.js — écran de chargement de la page d'accueil
   1. Les lignes s'écrivent une à une (caractères brouillés en tête)
   2. Le compteur [000 — 100] suit le chargement réel (polices, page, portrait)
   3. Statut « PRÊT À EXPLORER », puis dissolution en grille ASCII
   Expose EY.preloader : promesse résolue au début de la dissolution,
   utilisée par core.js pour lancer l'entrée du hero.
   ========================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  var EY = window.EY = window.EY || {};
  var el = document.querySelector('[data-preloader]');

  function finish() {
    root.classList.remove('is-preloading');
    if (el) el.remove();
  }

  if (!el || !root.classList.contains('is-preloading') ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    finish();
    EY.preloader = Promise.resolve();
    return;
  }

  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);

  var GLYPHS = '#$%&*@!?<>/\\_+=-:;01xX';
  var RAMP = ' .:-ixvcuznoabdq*#$&%B@';
  var t = window.I18N ? window.I18N.t : function (s) { return s; };
  var wait = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
  var rand = function (s) { return s[(Math.random() * s.length) | 0]; };

  /* ---------- Écriture d'une ligne ---------- */
  function type(node, text, speed) {
    speed = speed || 5;
    return new Promise(function (resolve) {
      var t0 = performance.now();
      (function step(now) {
        var n = Math.min(text.length, Math.floor((now - t0) / speed) + 1);
        var tail = text.slice(n, n + 2).replace(/\S/g, function () { return rand(GLYPHS); });
        node.textContent = text.slice(0, n) + tail;
        if (n < text.length) requestAnimationFrame(step);
        else { node.textContent = text; resolve(); }
      })(t0);
    });
  }

  /* ---------- Signaux de chargement ---------- */
  var portrait = document.querySelector('.hero__portrait');
  var signals = [
    document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve(),
    new Promise(function (r) {
      if (document.readyState === 'complete') r();
      else window.addEventListener('load', r, { once: true });
    }),
    new Promise(function (r) {
      if (!portrait || portrait.complete) return r();
      portrait.addEventListener('load', r, { once: true });
      portrait.addEventListener('error', r, { once: true });
    })
  ];
  var settled = 0;
  signals.forEach(function (p) { p.then(function () { settled++; }, function () { settled++; }); });

  /* ---------- Dissolution ASCII ---------- */
  function dissolve() {
    var paper = getComputedStyle(root).getPropertyValue('--paper').trim() || '#eeede9';
    var ink = getComputedStyle(root).getPropertyValue('--ink').trim() || '#0f0f0f';
    var muted = getComputedStyle(root).getPropertyValue('--muted').trim() || '#63625d';

    var canvas = document.createElement('canvas');
    canvas.className = 'preloader__fx';
    canvas.setAttribute('aria-hidden', 'true');
    document.body.appendChild(canvas);

    var w = window.innerWidth, h = window.innerHeight;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    var ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    var cell = w < 760 ? 14 : 18;
    var cols = Math.ceil(w / cell), rows = Math.ceil(h / cell);
    var SPREAD = 1, JITTER = .55, LEN = .32, MS = 1150, IDLE = .07, SHARE = .6;
    var total = SPREAD + JITTER + LEN;
    var seed = new Float32Array(cols * rows);
    var start = new Float32Array(cols * rows);
    for (var y = 0; y < rows; y++) {
      for (var x = 0; x < cols; x++) {
        var i = y * cols + x;
        seed[i] = Math.random();
        start[i] = y / Math.max(1, rows - 1) * SPREAD + seed[i] * JITTER;
      }
    }

    // La grille prend le relais du texte du préchargeur
    el.style.display = 'none';

    return new Promise(function (resolve) {
      var t0 = performance.now();
      var last = RAMP.length - 1;
      (function frame(now) {
        var k = Math.min(1, (now - t0) / MS);
        var front = k * total;
        ctx.clearRect(0, 0, w, h);

        ctx.fillStyle = paper;
        ctx.beginPath();
        for (var i = 0; i < start.length; i++) {
          if (front < start[i]) ctx.rect((i % cols) * cell, ((i / cols) | 0) * cell, cell + .5, cell + .5);
        }
        ctx.fill();

        ctx.font = (cell * .95).toFixed(1) + 'px "Geist Mono", ui-monospace, monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (var j = 0; j < start.length; j++) {
          var s = seed[j];
          var u = (front - start[j]) / LEN;
          if (u >= 1) continue;
          var cx = ((j % cols) + .5) * cell, cy = (((j / cols) | 0) + .5) * cell;
          if (u < 0) {
            if (s >= IDLE) continue;
            ctx.globalAlpha = .55;
            ctx.fillStyle = muted;
            ctx.fillText(rand(GLYPHS), cx, cy);
            continue;
          }
          if (s >= SHARE) continue;
          var lvl = Math.round(last * (.7 + .5 * s) * (1 - u));
          if (lvl < 1) continue;
          ctx.globalAlpha = 1 - u * u;
          ctx.fillStyle = u < .35 ? ink : muted;
          ctx.fillText(RAMP[Math.min(last, lvl)], cx + (s - .5) * 6 * u, cy + u * u * cell * 1.4);
        }
        ctx.globalAlpha = 1;

        if (k < 1) requestAnimationFrame(frame);
        else { canvas.remove(); resolve(); }
      })(t0);
    });
  }

  /* ---------- Séquence ---------- */
  var startDissolve;
  EY.preloader = new Promise(function (r) { startDissolve = r; });

  (async function run() {
    var lines = Array.prototype.slice.call(el.querySelectorAll('[data-pre-line]'));
    var texts = lines.map(function (n) { return n.getAttribute('data-pre-line') || ''; });
    lines.forEach(function (n) { n.textContent = ''; });
    var num = el.querySelector('[data-pre-num]');
    var status = el.querySelector('[data-pre-status]');
    el.classList.add('is-on');

    var typed = false;
    (async function () {
      for (var i = 0; i < lines.length; i++) {
        await type(lines[i], texts[i]);
        await wait(Number(lines[i].getAttribute('data-pre-gap')) || 40);
      }
      typed = true;
    })();

    status.textContent = t(':DÉMARRAGE');

    var t0 = performance.now(), val = 0;
    await new Promise(function (resolve) {
      (function tick() {
        var dt = performance.now() - t0;
        var target = dt > 4000 ? 1 : Math.min(Math.min(1, dt / 1200), .15 + .85 * (settled / signals.length));
        if (!typed && dt < 4000) target = Math.min(target, .97);
        val += (100 * target - val) * .18 + (target >= 1 ? .6 : 0);
        val = Math.min(100, val);
        num.textContent = String(Math.floor(val)).padStart(3, '0');
        if (val >= 99.5 && target >= 1) { num.textContent = '100'; resolve(); }
        else requestAnimationFrame(tick);
      })();
    });

    await type(status, t(':PRÊT À EXPLORER'), 22);
    await wait(380);

    root.classList.remove('is-preloading');
    startDissolve();
    await dissolve();
    finish();
  })().catch(function () { finish(); startDissolve(); });
})();
