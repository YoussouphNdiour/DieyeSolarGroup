/* DSG – Dieye Solar Group · interactions */
(() => {
  const WA = '221786803131';
  const EMAIL = 'info@dsg.sn';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Langue de la page (<html lang>) : les textes générés ici suivent la version affichée.
  const EN = document.documentElement.lang === 'en';
  const L = (fr, en) => (EN ? en : fr);
  const fmt = (n, d = 0) => n.toLocaleString(EN ? 'en-US' : 'fr-FR', { minimumFractionDigits: d, maximumFractionDigits: d }).replace(/ /g, ' ');

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
    burger.setAttribute('aria-label', L('Ouvrir le menu', 'Open menu'));
  };
  burger.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? L('Fermer le menu', 'Close menu') : L('Ouvrir le menu', 'Open menu'));
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
    const sep = EN ? '.' : ',';
    const dec = raw.includes(sep) ? raw.split(sep)[1].length : 0;
    const target = parseFloat(EN ? raw.replace(/[\s,]/g, '') : raw.replace(/\s/g, '').replace(',', '.'));
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
    const labels = EN
      ? { maison: 'House / villa', entreprise: 'Business / shop', culte: 'Place of worship / school', agricole: 'Farm' }
      : { maison: 'Maison / villa', entreprise: 'Entreprise / commerce', culte: 'Lieu de culte / école', agricole: 'Exploitation agricole' };
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
      out('storage').textContent = storage ? fmt(storage) : L('Optionnel', 'Optional');
      out('storage-unit').hidden = !storage;
      out('save').textContent = fmt(save);
      out('save-year').textContent = fmt(save * 12);

      const msg = EN
        ? `Hello DSG, I used the simulator on your website.
- Type of site: ${labels[type]}
- Monthly bill: ${fmt(bill)} FCFA
- Power cuts / evening use: ${outages ? 'yes' : 'no'}
Estimate: ${fmt(kwc, 2)} kWp (${panels} panels)${storage ? `, ${storage} kWh of storage` : ''}, about ${fmt(save)} FCFA saved per month.
I would like a free study.`
        : `Bonjour DSG, j'ai utilisé le simulateur du site.
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
      const subject = `${L('Demande de devis', 'Quote request')} – ${needLabel}`;
      const body = EN
        ? `${subject}
Name: ${d.name}
Phone: ${d.phone}${d.email ? `\nEmail: ${d.email}` : ''}
Town: ${d.city}

${d.message}`
        : `${subject}
Nom : ${d.name}
Téléphone : ${d.phone}${d.email ? `\nE-mail : ${d.email}` : ''}
Localité : ${d.city}

${d.message}`;
      const url = via === 'email'
        ? `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        : `https://wa.me/${WA}?text=${encodeURIComponent(`${L('Bonjour DSG,', 'Hello DSG,')}\n${body}`)}`;
      if (via === 'email') location.href = url;
      else window.open(url, '_blank', 'noopener');
    });
    $$('[required]', form).forEach((f) => f.addEventListener('input', () => f.removeAttribute('aria-invalid')));
  }

  /* Inscription ProSolar Academy : envoi à inscription.php puis page de paiement Wave */
  const reg = $('[data-register]');
  if (reg) {
    const f = reg.elements;
    const err = $('.form-error', reg);
    const btn = $('button[type="submit"]', reg);
    const btnLabel = btn.innerHTML;
    f.ts.value = Math.floor(Date.now() / 1000);

    // « Autre » : champ libre affiché seulement quand cette option est choisie
    $$('[data-other-field]', reg).forEach((box) => {
      const sel = document.getElementById(box.dataset.otherField);
      const input = $('input', box);
      const toggle = () => {
        const isOther = !!(sel.selectedOptions[0] && sel.selectedOptions[0].hasAttribute('data-other'));
        box.hidden = !isOther;
        input.required = isOther;
        if (!isOther) input.removeAttribute('aria-invalid');
      };
      sel.addEventListener('change', toggle);
      toggle();
    });
    if (new URLSearchParams(location.search).get('erreur')) {
      err.textContent = L("Votre inscription n'a pas pu être enregistrée : vérifiez les champs obligatoires puis réessayez.", 'Your enrolment could not be saved: please check the required fields and try again.');
      err.hidden = false;
    }
    const showError = (text) => {
      err.textContent = text;
      err.hidden = false;
    };
    const waFallback = () => {
      const fd = new FormData(reg);
      const d = Object.fromEntries(fd);
      const days = fd.getAll('dispo[]').join(', ');
      const opt = reg.elements.profil.selectedOptions[0];
      if (d.profil_autre && opt && opt.hasAttribute('data-other')) d.profil = `${d.profil} : ${d.profil_autre}`;
      const msg = EN
        ? `Hello DSG, I would like to enrol in ProSolar Academy.
First name: ${d.prenom}
Last name: ${d.nom}
Phone: ${d.telephone}${d.email ? `\nEmail: ${d.email}` : ''}
Town: ${d.ville}
Profile: ${d.profil}
Education: ${d.niveau}
Availability: ${days}${d.creneau ? ` (${d.creneau})` : ''}
Travel / accommodation: ${d.deplacement}`
        : `Bonjour DSG, je souhaite m'inscrire à ProSolar Academy.
Prénom : ${d.prenom}
Nom : ${d.nom}
Téléphone : ${d.telephone}${d.email ? `\nE-mail : ${d.email}` : ''}
Ville : ${d.ville}
Profil : ${d.profil}
Niveau : ${d.niveau}
Disponibilités : ${days}${d.creneau ? ` (${d.creneau})` : ''}
Déplacement / hébergement : ${d.deplacement}`;
      err.textContent = L("L'envoi n'a pas abouti. Vous pouvez envoyer votre inscription sur WhatsApp : ", 'Sending failed. You can send your enrolment on WhatsApp: ');
      const a = document.createElement('a');
      a.href = `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = L('envoyer sur WhatsApp', 'send on WhatsApp');
      err.appendChild(a);
      err.hidden = false;
    };

    reg.addEventListener('submit', async (e) => {
      e.preventDefault();
      const required = $$('[required]', reg);
      required.forEach((el) => {
        const bad = el.type === 'checkbox' ? !el.checked : !el.value.trim();
        el.setAttribute('aria-invalid', String(bad));
      });
      // Groupes de cases (disponibilités) : au moins une case cochée
      $$('[data-required-group]', reg).forEach((g) => g.setAttribute('aria-invalid', String(!$('input:checked', g))));
      if (f.telephone.value.trim() && !/^[0-9 +().-]{7,20}$/.test(f.telephone.value.trim())) f.telephone.setAttribute('aria-invalid', 'true');
      if (f.email.value.trim() && !f.email.checkValidity()) f.email.setAttribute('aria-invalid', 'true');
      const firstBad = $('[aria-invalid="true"]', reg);
      if (firstBad) {
        showError(L('Merci de vérifier les champs signalés en rouge.', 'Please check the fields highlighted in red.'));
        (firstBad.tagName === 'FIELDSET' ? $('input', firstBad) : firstBad).focus();
        return;
      }
      err.hidden = true;
      btn.disabled = true;
      btn.textContent = L('Envoi en cours…', 'Sending…');
      try {
        const res = await fetch(reg.action, { method: 'POST', body: new FormData(reg), headers: { Accept: 'application/json' } });
        const data = await res.json();
        if (!data.ok) throw new Error(data.error || 'refus');
        location.href = `prosolar-inscription-merci.html?ref=${encodeURIComponent(data.ref)}&prenom=${encodeURIComponent(f.prenom.value.trim())}`;
      } catch (ex) {
        btn.disabled = false;
        btn.innerHTML = btnLabel;
        waFallback();
      }
    });
    $$('input, select, textarea', reg).forEach((el) => {
      const clear = () => {
        el.removeAttribute('aria-invalid');
        const g = el.closest('[data-required-group]');
        if (g) g.removeAttribute('aria-invalid');
      };
      el.addEventListener('input', clear);
      el.addEventListener('change', clear);
    });
  }

  /* Page de paiement : référence et message WhatsApp préremplis */
  const pay = $('[data-pay]');
  if (pay) {
    const q = new URLSearchParams(location.search);
    const ref = (q.get('ref') || '').replace(/[^A-Za-z0-9-]/g, '').slice(0, 24);
    const prenom = (q.get('prenom') || '').trim().slice(0, 60);
    if (ref) {
      $('[data-ref]', pay).textContent = ref;
      $('[data-ref-row]', pay).hidden = false;
    }
    if (prenom) {
      const hello = $('[data-hello]', pay);
      hello.textContent = EN ? `Thank you ${prenom}, just one more step!` : `Merci ${prenom}, plus qu'une étape !`;
      hello.hidden = false;
    }
    const msg = EN
      ? `Hello DSG, here is my Wave payment receipt for ProSolar Academy (session starting ${pay.dataset.session}).${ref ? ` Reference: ${ref}.` : ''}${prenom ? ` First name: ${prenom}.` : ''}`
      : `Bonjour DSG, voici mon reçu de paiement Wave pour ProSolar Academy (session du ${pay.dataset.session}).${ref ? ` Référence : ${ref}.` : ''}${prenom ? ` Prénom : ${prenom}.` : ''}`;
    $('[data-pay-wa]', pay).href = `https://wa.me/${pay.dataset.wa}?text=${encodeURIComponent(msg)}`;
  }

  /* Année du pied de page */
  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
