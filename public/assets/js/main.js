/* DSG – Dieye Solar Group · interactions */
(() => {
  const WA = '221786803131';
  const EMAIL = 'info@dsg.sn';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fmt = (n, d = 0) => n.toLocaleString('fr-FR', { minimumFractionDigits: d, maximumFractionDigits: d }).replace(/ /g, ' ');

  /* En-tête */
  const header = $('.site-header');
  const onScroll = () => header.classList.toggle('scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Menu mobile */
  const burger = $('.burger');
  const closeNav = () => {
    document.body.classList.remove('nav-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Ouvrir le menu');
  };
  burger.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  });
  $$('.main-nav a').forEach((a) => a.addEventListener('click', closeNav));

  /* Sous-menus */
  $$('.dd-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const li = btn.parentElement;
      const open = !li.classList.contains('open');
      $$('.has-dd.open').forEach((o) => {
        o.classList.remove('open');
        $('.dd-toggle', o).setAttribute('aria-expanded', 'false');
      });
      li.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.has-dd')) $$('.has-dd.open').forEach((o) => o.classList.remove('open'));
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    $$('.has-dd.open').forEach((o) => o.classList.remove('open'));
    if (document.body.classList.contains('nav-open')) { closeNav(); burger.focus(); }
  });

  /* Apparitions au défilement */
  const revealEls = $$('[data-reveal]');
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add('in');
        io.unobserve(en.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    revealEls.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 70}ms`;
      io.observe(el);
    });
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }

  /* Compteurs */
  const counters = $$('[data-count]');
  const runCount = (el) => {
    const raw = el.textContent.trim();
    const dec = raw.includes(',') ? raw.split(',')[1].length : 0;
    const target = parseFloat(raw.replace(/\s/g, '').replace(',', '.'));
    if (Number.isNaN(target)) return;
    const t0 = performance.now();
    const dur = 1600;
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / dur);
      const v = target * (1 - Math.pow(1 - k, 3));
      el.textContent = fmt(v, dec);
      if (k < 1) requestAnimationFrame(tick);
      else el.textContent = raw;
    };
    requestAnimationFrame(tick);
  };
  if (counters.length && !reduce && 'IntersectionObserver' in window) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        runCount(en.target);
        co.unobserve(en.target);
      });
    }, { threshold: 0.6 });
    counters.forEach((c) => co.observe(c));
  }

  /* Carrousel des réalisations */
  const car = $('[data-carousel]');
  if (car) {
    const prev = $('[data-car="prev"]');
    const next = $('[data-car="next"]');
    const step = () => (car.firstElementChild ? car.firstElementChild.getBoundingClientRect().width + 20 : 400);
    const update = () => {
      prev.disabled = car.scrollLeft < 8;
      next.disabled = car.scrollLeft + car.clientWidth >= car.scrollWidth - 8;
    };
    prev.addEventListener('click', () => car.scrollBy({ left: -step(), behavior: reduce ? 'auto' : 'smooth' }));
    next.addEventListener('click', () => car.scrollBy({ left: step(), behavior: reduce ? 'auto' : 'smooth' }));
    car.addEventListener('scroll', update, { passive: true });
    car.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); next.click(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev.click(); }
    });
    addEventListener('resize', update);
    update();
  }

  /* Vidéos : bouton de lecture personnalisé, une seule vidéo à la fois */
  const videos = $$('.vid video');
  videos.forEach((v) => {
    const fig = v.closest('.vid');
    const btn = $('.vid-play', fig);
    v.removeAttribute('controls');
    btn.addEventListener('click', () => {
      v.setAttribute('controls', '');
      v.play();
      v.focus();
    });
    v.addEventListener('play', () => {
      fig.classList.add('playing');
      v.setAttribute('controls', '');
      videos.forEach((o) => { if (o !== v) o.pause(); });
    });
  });

  /* Simulateur */
  const sim = $('[data-sim]');
  if (sim) {
    const TARIF = 125; // FCFA / kWh, moyenne indicative
    const YIELD = 4.8; // kWh produits par kWc et par jour
    const COVER = 0.7; // part de la consommation couverte par le solaire
    const PANEL = 0.59; // kWc par panneau (590 Wc)
    const NIGHT = { maison: 0.3, culte: 0.3, entreprise: 0.15, agricole: 0.1 };
    const range = $('#sim-bill-range', sim);
    const num = $('#sim-bill', sim);
    const out = (k) => $(`[data-out="${k}"]`, sim);
    const labels = { maison: 'Maison / villa', entreprise: 'Entreprise / commerce', culte: 'Lieu de culte / école', agricole: 'Exploitation agricole' };
    const cta = $('[data-sim-cta]', sim);

    const compute = () => {
      const bill = Math.max(0, Number(num.value) || 0);
      const type = (sim.querySelector('input[name="type"]:checked') || {}).value || 'maison';
      const outages = sim.querySelector('input[name="outages"]').checked;
      const monthKwh = bill / TARIF;
      const solarKwh = monthKwh * COVER;
      const panels = Math.max(1, Math.ceil(solarKwh / (YIELD * 30) / PANEL));
      const kwc = panels * PANEL;
      const save = Math.round((solarKwh * TARIF) / 1000) * 1000;
      const storage = outages ? Math.max(5, Math.ceil(((monthKwh / 30) * NIGHT[type]) / 5) * 5) : 0;

      out('kwc').textContent = fmt(kwc, kwc < 10 ? 2 : 1);
      out('panels').textContent = fmt(panels);
      out('storage').textContent = storage ? fmt(storage) : 'Optionnel';
      out('storage-unit').hidden = !storage;
      out('save').textContent = fmt(save);
      out('save-year').textContent = fmt(save * 12);

      const msg = `Bonjour DSG, j'ai utilisé le simulateur du site.
- Type de site : ${labels[type]}
- Facture mensuelle : ${fmt(bill)} FCFA
- Coupures / besoin le soir : ${outages ? 'oui' : 'non'}
Estimation : ${fmt(kwc, 2)} kWc (${panels} panneaux)${storage ? `, ${storage} kWh de stockage` : ''}, environ ${fmt(save)} FCFA d'économies par mois.
Je souhaite une étude gratuite.`;
      cta.href = `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
    };

    range.addEventListener('input', () => { num.value = range.value; compute(); });
    num.addEventListener('input', () => {
      const v = Number(num.value) || 0;
      range.value = Math.min(Number(range.max), Math.max(Number(range.min), v));
      compute();
    });
    sim.addEventListener('change', compute);
    sim.addEventListener('submit', (e) => e.preventDefault());
    compute();
  }

  /* Formulaire de devis */
  const form = $('[data-quote]');
  if (form) {
    const need = $('#q-need', form);
    const pre = new URLSearchParams(location.search).get('besoin');
    if (pre && [...need.options].some((o) => o.value === pre)) need.value = pre;
    const err = $('.form-error', form);
    let via = 'whatsapp';
    $$('button[type="submit"]', form).forEach((b) => b.addEventListener('click', () => { via = b.dataset.via; }));

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const required = $$('[required]', form);
      let ok = true;
      required.forEach((f) => {
        const bad = !f.value.trim();
        f.setAttribute('aria-invalid', String(bad));
        if (bad) ok = false;
      });
      err.hidden = ok;
      if (!ok) { required.find((f) => f.getAttribute('aria-invalid') === 'true').focus(); return; }

      const d = Object.fromEntries(new FormData(form));
      const needLabel = need.options[need.selectedIndex].text;
      const body = `Demande de devis – ${needLabel}
Nom : ${d.name}
Téléphone : ${d.phone}${d.email ? `\nE-mail : ${d.email}` : ''}
Localité : ${d.city}

${d.message}`;
      const url = via === 'email'
        ? `mailto:${EMAIL}?subject=${encodeURIComponent(`Demande de devis – ${needLabel}`)}&body=${encodeURIComponent(body)}`
        : `https://wa.me/${WA}?text=${encodeURIComponent(`Bonjour DSG,\n${body}`)}`;
      if (via === 'email') location.href = url;
      else window.open(url, '_blank', 'noopener');
    });
    $$('[required]', form).forEach((f) => f.addEventListener('input', () => f.removeAttribute('aria-invalid')));
  }

  /* Année du pied de page */
  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
