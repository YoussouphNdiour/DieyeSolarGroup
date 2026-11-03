import { company, services, projects, steps, partners, academy, clips } from './data.mjs';
import { esc, icon, img, waLink } from './layout.mjs';

export const picture = (name, alt, { cls = '', eager = false, sizes } = {}) =>
  `<img class="${cls}" src="${img(name)}" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"${sizes ? ` sizes="${sizes}"` : ''}>`;

export const kicker = (text, light = false) => `<p class="kicker${light ? ' kicker-light' : ''}">${text}</p>`;

export const ctaButtons = (secondary = { label: 'Nos réalisations', href: 'realisations.html' }) =>
  `<div class="btn-row">
    <a class="btn btn-primary" href="contact.html#devis">Demander un devis ${icon('arrow')}</a>
    ${secondary ? `<a class="btn btn-ghost" href="${secondary.href}">${secondary.label}</a>` : ''}
  </div>`;

export function homeHero() {
  const stats = [
    ['1', 'MWc', 'notre plus grande centrale, à Sandiara'],
    ['70', '%', "d'autonomie pour la mosquée Abdoulaye Diop"],
    ['600 000', 'FCFA', "économisés chaque mois par la mosquée"],
    ['6', 'métiers', "de l'énergie à la maintenance, un seul groupe"],
  ];
  return `<section class="hero">
  <div class="hero-media">${picture('hero-centrale-1mwc', 'Vue aérienne de la centrale solaire de 1 MWc réalisée par DSG à Sandiara', { eager: true })}</div>
  <div class="hero-sun" aria-hidden="true"></div>
  <div class="wrap hero-in">
    <p class="kicker kicker-light">Dieye Solar Group · Thiès, Sénégal</p>
    <h1 class="hero-title">L'innovation au service <span>de vos projets.</span></h1>
    <p class="hero-lead">Énergie solaire, forage et irrigation, électricité générale, BTP, SAV et maintenance. Un seul groupe conçoit, installe et entretient vos équipements, pour les industries, les collectivités et les familles de tout le Sénégal.</p>
    ${ctaButtons()}
  </div>
  <div class="hero-stats">
    <div class="wrap">
      <ul class="stats">
        ${stats.map(([n, u, t]) => `<li><p class="stat-n"><span data-count>${n}</span><small>${u}</small></p><p class="stat-t">${t}</p></li>`).join('')}
      </ul>
    </div>
  </div>
</section>`;
}

export function logoTicker() {
  const seen = new Set();
  const all = [...partners.clients, ...partners.partners, ...partners.brands].filter(([f]) => !seen.has(f) && seen.add(f));
  const row = (hidden) => all.map(([f, n]) => `<li><img src="assets/logos/${f}.webp" alt="${hidden ? '' : esc(n)}" loading="lazy" height="40"></li>`).join('');
  // La liste est courte : on la répète pour que la bande défile sans trou sur grand écran.
  return `<section class="ticker" aria-label="Clients, partenaires et marques">
  <div class="ticker-track"><ul>${row(false)}${row(true)}</ul><ul aria-hidden="true">${row(true)}${row(true)}</ul></div>
</section>`;
}

export function servicesGrid({ title = 'Six métiers, <br>un seul interlocuteur.', intro = true } = {}) {
  return `<section class="section services" id="activites">
  <div class="wrap">
    <div class="section-head">
      <div>
        ${kicker('Nos activités')}
        <h2>${title}</h2>
      </div>
      ${intro ? `<p class="section-intro">L'énergie, l'eau, le bâtiment et l'entretien sont liés sur un chantier. Nous les réunissons dans une même équipe pour que votre projet avance sans coordination à faire entre plusieurs prestataires.</p>` : ''}
    </div>
    <ul class="svc-grid">
      ${services
        .map(
          (s) => `<li class="svc-card" data-reveal>
        <a href="${s.slug}.html">
          ${picture(s.image, s.imageAlt)}
          <div class="svc-body">
            <span class="svc-ico">${icon(s.icon)}</span>
            <h3>${s.title}</h3>
            <p>${s.short}</p>
            <span class="svc-more">Découvrir ${icon('arrow')}</span>
          </div>
        </a>
      </li>`
        )
        .join('')}
    </ul>
  </div>
</section>`;
}

export function approach() {
  const items = [
    ['doc', "L'étude avant le devis", 'Nous relevons vos consommations et vos contraintes sur place avant de chiffrer. Vous payez la solution juste nécessaire, pas plus.'],
    ['shield', 'Du matériel qui dure', 'Onduleurs, batteries et panneaux de marques reconnues (Deye, Felicity Solar, Solarig…), posés par nos propres techniciens.'],
    ['chart', 'Un suivi dans le temps', 'Supervision de la production, visites de maintenance et dépannage rapide : votre installation garde ses performances.'],
  ];
  return `<section class="section approach">
  <div class="wrap approach-in">
    <div class="approach-media" data-reveal>
      ${picture('sandiara-techniciens', 'Techniciens DSG en tenue de chantier lors de la mise en service des onduleurs de Sandiara')}
      <p class="media-tag"><span></span>Mise en service à Sandiara, région de Thiès</p>
    </div>
    <div>
      ${kicker('Notre approche')}
      <h2>Une vision globale, des solutions durables.</h2>
      <ol class="pillars">
        ${items.map(([ic, t, d], i) => `<li data-reveal><span class="pillar-n">0${i + 1}</span><div><h3>${icon(ic)} ${t}</h3><p>${d}</p></div></li>`).join('')}
      </ol>
    </div>
  </div>
</section>`;
}

export function hybridDay() {
  const moments = [
    ['7 h', 'Le soleil se lève', 'Les panneaux alimentent le site et le surplus recharge les batteries.'],
    ['13 h', 'Pic de production', 'La centrale couvre toute la consommation : le réseau Senelec n\'est plus sollicité.'],
    ['19 h', 'Relais des batteries', 'Éclairage, froid et équipements tournent sur le stockage jusqu\'au lendemain.'],
    ['24/7', 'Coupure réseau ?', 'Les onduleurs hybrides basculent sur les batteries sans interruption, puis reviennent au réseau.'],
  ];
  const x = (h) => (40 + h * (560 / 24)).toFixed(1);
  return `<section class="section dark hybrid">
  <div class="wrap">
    <div class="section-head">
      <div>
        ${kicker('Centrale hybride', true)}
        <h2>24 heures avec le soleil.</h2>
      </div>
      <p class="section-intro">Comment une centrale hybride DSG alimente un site du lever au coucher du soleil, et bien après.</p>
    </div>
    <div class="hybrid-in">
      <figure class="chart" data-reveal>
        <svg viewBox="0 0 640 270" role="img" aria-labelledby="chart-t">
          <title id="chart-t">Profil type sur 24 heures : production solaire en journée, consommation du site, batteries la nuit</title>
          <defs>
            <linearGradient id="g-sun" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FDBD00" stop-opacity=".9"/><stop offset="1" stop-color="#FD6600" stop-opacity=".05"/></linearGradient>
            <pattern id="hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="7" stroke="#66DEFF" stroke-opacity=".35" stroke-width="2"/></pattern>
          </defs>
          <g class="grid">${[60, 100, 140, 180, 220].map((y) => `<line x1="40" x2="600" y1="${y}" y2="${y}"/>`).join('')}</g>
          <rect x="40" y="30" width="${(x(6.5) - 40).toFixed(1)}" height="190" fill="url(#hatch)"/>
          <rect x="${x(18.5)}" y="30" width="${(600 - x(18.5)).toFixed(1)}" height="190" fill="url(#hatch)"/>
          <path class="sun-area" d="M${x(6.5)} 220 C245 216 287 42 ${x(13)} 42 S441 216 ${x(18.5)} 220 Z" fill="url(#g-sun)"/>
          <path class="sun-line" d="M${x(6.5)} 220 C245 216 287 42 ${x(13)} 42 S441 216 ${x(18.5)} 220" fill="none" stroke="#FDBD00" stroke-width="3"/>
          <path class="load-line" d="M40 172 C110 172 150 168 180 160 S250 140 300 138 S400 142 440 136 S490 104 530 104 S580 128 600 146" fill="none" stroke="#66DEFF" stroke-width="3" stroke-linecap="round"/>
          <circle cx="${x(13)}" cy="42" r="5" fill="#FDBD00"/>
          <text x="${x(13)}" y="26" text-anchor="middle" class="lbl">Pic de production</text>
          <text x="535" y="50" text-anchor="middle" class="lbl">Soirée sur batteries</text>
          <g class="ticks">${[0, 6, 12, 18, 24].map((h) => `<text x="${x(h)}" y="244" text-anchor="middle">${h} h</text>`).join('')}</g>
        </svg>
        <figcaption class="legend">
          <span><i class="lg-sun"></i>Production solaire</span>
          <span><i class="lg-load"></i>Consommation du site</span>
          <span><i class="lg-bat"></i>Batteries en relais</span>
        </figcaption>
      </figure>
      <ol class="moments">
        ${moments.map(([h, t, d]) => `<li data-reveal><span class="m-h">${h}</span><div><h3>${t}</h3><p>${d}</p></div></li>`).join('')}
      </ol>
    </div>
  </div>
</section>`;
}

export const projectCard = (p, cls = '') => `<article class="proj-card ${cls}">
  <a href="projet-${p.slug}.html">
    ${picture(p.image, `${p.title}, ${p.place}`)}
    <div class="proj-body">
      <p class="proj-fig"><span>${p.figure}</span><small>${p.unit}</small></p>
      <h3>${p.shortTitle || p.title}</h3>
      <p class="proj-sum">${p.place} · ${p.summary}</p>
      <p class="tags"><span class="tag tag-accent">${p.category}</span>${p.year ? `<span class="tag">${p.year}</span>` : ''}</p>
    </div>
  </a>
</article>`;

export function projectsCarousel() {
  return `<section class="section projects" id="realisations">
  <div class="wrap">
    <div class="section-head">
      <div>
        ${kicker('Réalisations')}
        <h2>Des installations qui tournent déjà.</h2>
      </div>
      <div class="car-ctrl">
        <button class="round-btn" type="button" data-car="prev" aria-label="Réalisation précédente">${icon('arrowLeft')}</button>
        <button class="round-btn" type="button" data-car="next" aria-label="Réalisation suivante">${icon('arrow')}</button>
      </div>
    </div>
  </div>
  <div class="car" data-carousel tabindex="0" aria-label="Nos réalisations">
    ${projects.map((p) => projectCard(p)).join('')}
  </div>
  <div class="wrap"><a class="link-arrow" href="realisations.html">Toutes les réalisations ${icon('arrow')}</a></div>
</section>`;
}

const vidFigure = ({ file, poster, title, sub, portrait = false }) => `<figure class="vid${portrait ? ' vid-portrait' : ''}">
  <div class="vid-frame">
    <video controls preload="none" playsinline poster="${img(poster)}" aria-label="Vidéo : ${esc(title)}">
      <source src="assets/video/${file}.mp4" type="video/mp4">
    </video>
    <button class="vid-play" type="button" aria-label="Lire la vidéo : ${esc(title)}">${icon('play')}</button>
  </div>
  <figcaption><strong>${title}</strong>${sub ? `<span>${sub}</span>` : ''}</figcaption>
</figure>`;

export const videoCard = (p) =>
  vidFigure({ file: p.video.file, poster: p.video.poster, title: p.title, sub: `${p.place}${p.video.duration ? ` · ${p.video.duration}` : ''}` });

export const clipCard = (key) =>
  vidFigure({ file: key, poster: `video-${key}`, title: clips[key].title, sub: clips[key].duration, portrait: true });

export function clipsSection(keys, { kickerText = 'En vidéo', title = 'Sur le terrain, en vidéo.', paper = false } = {}) {
  return `<section class="section${paper ? ' section-paper' : ''} videos-sec">
  <div class="wrap">
    ${kicker(kickerText)}
    <h2>${title}</h2>
    <div class="videos videos-portrait">${keys.map(clipCard).join('')}</div>
  </div>
</section>`;
}

export function videosSection() {
  const list = projects.filter((p) => p.video);
  return `<section class="section section-paper videos-sec">
  <div class="wrap">
    <div class="section-head">
      <div>
        ${kicker('En vidéo')}
        <h2>Nos chantiers en mouvement.</h2>
      </div>
      <p class="section-intro">De la pose des panneaux à la mise en service : suivez nos équipes sur deux de nos réalisations.</p>
    </div>
    <div class="videos">${list.map(videoCard).join('')}</div>
  </div>
</section>`;
}

export const academyWa = () =>
  waLink(`Bonjour DSG, je souhaite m'inscrire à ProSolar Academy (session du ${academy.nextSession}).`);

export const academyFacts = () =>
  `<ul class="ac-facts">${academy.facts.map(([n, t]) => `<li><strong>${n}</strong><span>${t}</span></li>`).join('')}</ul>`;

export function academySection() {
  return `<section class="section dark academy" id="prosolar-academy">
  <div class="wrap academy-in">
    <div>
      ${kicker('Formation · ProSolar Academy', true)}
      <h2>Formez-vous aux métiers du solaire.</h2>
      <p class="academy-lead">${academy.name}, le centre de formation de Dieye Solar Group, forme des techniciens opérationnels en installation et maintenance de systèmes solaires, en partenariat avec l'${academy.partner}.</p>
      ${academyFacts()}
      <div class="btn-row">
        <a class="btn btn-primary" href="prosolar-inscription.html">S'inscrire en ligne ${icon('arrow')}</a>
        <a class="btn btn-ghost" href="prosolar-academy.html">Découvrir la formation</a>
      </div>
    </div>
    <figure class="academy-media" data-reveal>
      ${picture('prosolar-signature', "Signature de la convention de partenariat ProSolar Academy entre le directeur général de Dieye Solar Group et le directeur de l'ISEP de Thiès")}
      <figcaption><span></span>Signature de la convention de partenariat avec l'ISEP de Thiès</figcaption>
    </figure>
  </div>
</section>`;
}

export function simulator() {
  const types = [
    ['maison', 'Maison / villa', true],
    ['entreprise', 'Entreprise / commerce'],
    ['culte', 'Lieu de culte / école'],
    ['agricole', 'Exploitation agricole'],
  ];
  return `<section class="section sim-sec" id="simulateur">
  <div class="wrap sim-in">
    <div class="sim-copy">
      ${kicker('Simulateur')}
      <h2>Combien pouvez-vous économiser ?</h2>
      <p>Indiquez votre facture d'électricité mensuelle : vous obtenez en quelques secondes une première estimation de la puissance solaire à installer et des économies possibles.</p>
      <p class="sim-note">Estimation indicative : tarif moyen de 125 FCFA/kWh, production de 4,8 kWh par kWc et par jour à Thiès, objectif de 70 % d'autonomie, panneaux de 590 Wc. Le chiffrage définitif se fait après l'étude sur site, gratuite.</p>
    </div>
    <form class="sim card" data-sim novalidate>
      <fieldset>
        <legend>Type de site</legend>
        <div class="chips">
          ${types.map(([v, l, c]) => `<label class="chip"><input type="radio" name="type" value="${v}"${c ? ' checked' : ''}><span>${l}</span></label>`).join('')}
        </div>
      </fieldset>
      <div class="field">
        <label for="sim-bill">Facture Senelec mensuelle</label>
        <div class="bill-row">
          <input id="sim-bill-range" type="range" min="20000" max="3000000" step="5000" value="150000" aria-label="Facture mensuelle (curseur)">
          <div class="bill-input"><input id="sim-bill" type="number" inputmode="numeric" min="5000" step="1000" value="150000"><span>FCFA</span></div>
        </div>
      </div>
      <label class="switch"><input type="checkbox" name="outages" checked><span class="sw"></span>Je subis des coupures ou j'ai besoin d'électricité le soir</label>
      <dl class="sim-out" aria-live="polite">
        <div><dt>Puissance conseillée</dt><dd><span data-out="kwc">–</span> <small>kWc</small></dd></div>
        <div><dt>Panneaux</dt><dd><span data-out="panels">–</span></dd></div>
        <div><dt>Stockage conseillé</dt><dd><span data-out="storage">–</span> <small data-out="storage-unit">kWh</small></dd></div>
        <div class="out-main"><dt>Économies estimées</dt><dd><span data-out="save">–</span> <small>FCFA / mois</small></dd><p>soit <strong data-out="save-year">–</strong> FCFA par an</p></div>
      </dl>
      <a class="btn btn-primary btn-block" data-sim-cta href="${waLink()}" target="_blank" rel="noopener">Recevoir mon étude gratuite ${icon('arrow')}</a>
    </form>
  </div>
</section>`;
}

export function stepsSection() {
  return `<section class="section steps-sec">
  <div class="wrap">
    <div class="section-head">
      <div>
        ${kicker('Comment ça se passe')}
        <h2>Cinq étapes, un devis avant tout engagement.</h2>
      </div>
    </div>
    <ol class="steps">
      ${steps.map(([t, d], i) => `<li data-reveal><span class="step-n">${i + 1}</span><h3>${t}</h3><p>${d}</p></li>`).join('')}
    </ol>
    <div class="btn-row">
      <a class="btn btn-dark" href="contact.html#devis">Demander un devis ${icon('arrow')}</a>
      <a class="btn btn-outline" href="${waLink()}" target="_blank" rel="noopener">${icon('chat')} Écrire sur WhatsApp</a>
    </div>
  </div>
</section>`;
}

export function partnersSection() {
  const group = (title, list) => `<div class="pt-group" data-reveal>
    <h3>${title}</h3>
    <ul class="pt-logos">${list.map(([f, n]) => `<li><img src="assets/logos/${f}.webp" alt="${esc(n)}" loading="lazy"></li>`).join('')}</ul>
  </div>`;
  return `<section class="section partners">
  <div class="wrap">
    <div class="section-head">
      <div>
        ${kicker('Ils nous font confiance')}
        <h2>Clients, partenaires et marques.</h2>
      </div>
    </div>
    ${group('Clients', partners.clients)}
    ${group('Partenaires', partners.partners)}
    ${group('Équipements que nous installons', partners.brands)}
  </div>
</section>`;
}

export function ctaBand() {
  return `<section class="cta-band">
  <div class="wrap cta-in">
    <div>
      ${kicker('Parlons de votre projet', true)}
      <h2>Prêt à produire votre propre énergie ?</h2>
      <p>Décrivez-nous votre besoin : nous vous rappelons sous 24 heures ouvrées avec une première estimation et une proposition de visite.</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="contact.html#devis">Demander un devis ${icon('arrow')}</a>
        <a class="btn btn-ghost" href="${waLink()}" target="_blank" rel="noopener">${icon('chat')} WhatsApp</a>
      </div>
    </div>
    <ul class="cta-contacts">
      <li>${icon('phone')}<div><small>Téléphone et WhatsApp</small><a href="tel:${company.phoneHref}">${company.phone}</a></div></li>
      <li>${icon('mail')}<div><small>E-mail</small><a href="mailto:${company.email}">${company.email}</a></div></li>
      <li>${icon('pin')}<div><small>Adresse</small><span>${company.address}</span></div></li>
      <li>${icon('clock')}<div><small>Horaires</small><span>${company.hours}</span></div></li>
    </ul>
  </div>
</section>`;
}

export function pageHero({ kickerText, title, lead, image, alt, crumbs = [], actions = true }) {
  return `<section class="page-hero${image ? ' has-img' : ''}">
  ${image ? `<div class="hero-media">${picture(image, alt || '', { eager: true })}</div>` : ''}
  <div class="wrap page-hero-in">
    <nav class="crumbs" aria-label="Fil d'Ariane"><a href="index.html">Accueil</a>${crumbs.map(([l, h]) => (h ? `<span>/</span><a href="${h}">${l}</a>` : `<span>/</span><span aria-current="page">${l}</span>`)).join('')}</nav>
    ${kickerText ? kicker(kickerText, true) : ''}
    <h1>${title}</h1>
    ${lead ? `<p class="page-lead">${lead}</p>` : ''}
    ${actions ? ctaButtons(null) : ''}
  </div>
</section>`;
}

export const gallery = (items) =>
  `<ul class="gallery">${items.map(([n, a]) => `<li data-reveal>${picture(n, a)}</li>`).join('')}</ul>`;
