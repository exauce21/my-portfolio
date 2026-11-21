/* ==========================================================================
   core.js — comportements communs à toutes les pages
   (horloge, menu mobile, reveal au scroll, split de titres, copie d'email)
   ========================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');

  var EY = window.EY = window.EY || {};
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  EY.reduceMotion = reduceMotion;
  EY.canHover = canHover;

  /* ---------- Utils ---------- */
  EY.$ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  EY.$$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };
  EY.lerp = function (a, b, t) { return a + (b - a) * t; };
  EY.shuffle = function (arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  };
  EY.esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  EY.icon = {
    arrow: '<svg class="arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" stroke-width="1.3"/></svg>',
    out: '<svg class="arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" stroke="currentColor" stroke-width="1.3"/></svg>',
    down: '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 2v11M3.5 8.5 8 13l4.5-4.5" stroke="currentColor" stroke-width="1.3"/></svg>'
  };
  EY.tagsHTML = function (tags) {
    var L = window.PORTFOLIO.TAG_LABELS;
    return '<span class="tags">' + tags.map(function (t) {
      return '<span class="tag tag--' + t + '">' + L[t] + '</span>';
    }).join('') + '</span>';
  };

  /* ---------- Horloge (Paris) ---------- */
  function initClock() {
    var els = EY.$$('[data-clock]');
    if (!els.length) return;
    var tz = (window.PORTFOLIO && window.PORTFOLIO.person.timezone) || 'Europe/Paris';
    var fmt;
    try {
      fmt = new Intl.DateTimeFormat('fr-FR', { timeZone: tz, hour: '2-digit', minute: '2-digit' });
    } catch (e) {
      fmt = new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit' });
    }
    function tick() {
      var t = fmt.format(new Date());
      els.forEach(function (el) { el.textContent = t; });
    }
    tick();
    setInterval(tick, 15000);
  }

  /* ---------- Menu mobile ---------- */
  function initMenu() {
    var btn = EY.$('[data-menu-toggle]');
    var menu = EY.$('#menu');
    if (!btn || !menu) return;
    function set(open) {
      menu.classList.toggle('is-open', open);
      document.body.classList.toggle('menu-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? 'Fermer' : 'Menu';
      menu.setAttribute('aria-hidden', open ? 'false' : 'true');
      if (open) { var first = EY.$('a', menu); if (first) first.focus({ preventScroll: true }); }
    }
    btn.addEventListener('click', function () { set(!menu.classList.contains('is-open')); });
    EY.$$('a', menu).forEach(function (a) { a.addEventListener('click', function () { set(false); }); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) { set(false); btn.focus(); }
    });
  }

  /* ---------- Split des titres en mots ---------- */
  EY.split = function (el) {
    if (el.dataset.splitDone) return;
    el.dataset.splitDone = '1';
    var i = 0;
    function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (child) {
        if (child.nodeType === 3) {
          var parts = child.textContent.split(/([ \t\n\r]+)/);
          var frag = document.createDocumentFragment();
          parts.forEach(function (part) {
            if (!part) return;
            if (/^[ \t\n\r]+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
            var w = document.createElement('span'); w.className = 'w';
            var inner = document.createElement('span'); inner.textContent = part;
            inner.style.setProperty('--i', i++);
            w.appendChild(inner); frag.appendChild(w);
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === 1 && !child.classList.contains('chip') && child.tagName !== 'BR' && child.tagName !== 'SUP') {
          walk(child);
        } else if (child.nodeType === 1 && (child.classList.contains('chip') || child.tagName === 'SUP')) {
          var wrap = document.createElement('span'); wrap.className = 'w';
          var inn = document.createElement('span'); inn.style.setProperty('--i', i++);
          child.parentNode.insertBefore(wrap, child);
          inn.appendChild(child); wrap.appendChild(inn);
        }
      });
    }
    walk(el);
  };

  /* ---------- Reveal au scroll ---------- */
  var io = null;
  EY.observe = function (scope) {
    var els = EY.$$('[data-reveal], [data-split]', scope || document);
    els.forEach(function (el) { if (el.hasAttribute('data-split')) EY.split(el); });
    if (reduceMotion || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    }
    els.forEach(function (el) { if (!el.classList.contains('is-in')) io.observe(el); });
  };

  /* ---------- Copier l'email ---------- */
  function initCopy() {
    EY.$$('[data-copy]').forEach(function (btn) {
      var label = btn.querySelector('span') || btn;
      var initial = label.textContent;
      btn.addEventListener('click', function () {
        var value = btn.getAttribute('data-copy');
        var done = function () {
          btn.classList.add('is-done'); label.textContent = 'Copié !';
          setTimeout(function () { btn.classList.remove('is-done'); label.textContent = initial; }, 1800);
        };
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(value).then(done, function () { window.location.href = 'mailto:' + value; });
        } else {
          var ta = document.createElement('textarea'); ta.value = value; ta.setAttribute('readonly', '');
          ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select();
          try { document.execCommand('copy'); done(); } catch (e) { window.location.href = 'mailto:' + value; }
          document.body.removeChild(ta);
        }
      });
    });
  }

  /* ---------- Compteurs (données) ---------- */
  function initCounts() {
    var P = window.PORTFOLIO;
    if (!P) return;
    var map = {
      projects: P.projects.length,
      brand: P.count('brand'),
      ui: P.count('ui'),
      dev: P.count('dev'),
      web: P.projects.filter(function (p) { return p.kind === 'web'; }).length
    };
    EY.$$('[data-count]').forEach(function (el) {
      var v = map[el.getAttribute('data-count')];
      if (v != null) el.textContent = (el.hasAttribute('data-pad') && v < 10 ? '0' : '') + v;
    });
  }

  /* ---------- Recommandations : lire en entier ---------- */
  function initRecos() {
    EY.$$('[data-reco-toggle]').forEach(function (btn) {
      var item = btn.closest('.reco');
      var region = document.getElementById(btn.getAttribute('aria-controls'));
      var label = btn.lastElementChild;
      btn.addEventListener('click', function () {
        var open = !item.classList.contains('is-open');
        item.classList.toggle('is-open', open);
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        label.textContent = open ? 'Réduire' : 'Lire en entier';
        if (region) {
          region.setAttribute('aria-hidden', open ? 'false' : 'true');
          if (open) region.removeAttribute('inert'); else region.setAttribute('inert', '');
        }
      });
    });
  }

  /* ---------- Header : masqué en descendant, visible en remontant ---------- */
  function initHeader() {
    var header = EY.$('.site-header');
    if (!header) return;
    var lastY = window.scrollY, ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY;
        var down = y > lastY + 4, up = y < lastY - 4;
        if (document.body.classList.contains('menu-open') || y < 120 || up) header.classList.remove('is-hidden');
        else if (down) header.classList.add('is-hidden');
        if (down || up) lastY = y;
        ticking = false;
      });
    }, { passive: true });
    header.addEventListener('focusin', function () { header.classList.remove('is-hidden'); });
  }

  /* ---------- Année ---------- */
  function initYear() {
    EY.$$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  }

  /* ---------- Chargement ---------- */
  function ready() {
    initClock();
    initMenu();
    initCopy();
    initCounts();
    initRecos();
    initHeader();
    initYear();
    EY.observe();
    var reveal = function () { root.classList.add('is-loaded'); };
    if (document.fonts && document.fonts.ready) {
      Promise.race([document.fonts.ready, new Promise(function (r) { setTimeout(r, 900); })]).then(function () {
        requestAnimationFrame(reveal);
      });
    } else {
      reveal();
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready);
  else ready();
})();
