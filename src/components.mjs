import { company, services, projects, steps, partners, academy, clips, lang, t } from './data.mjs';
import { esc, icon, img, asset, waLink } from './layout.mjs';

export const picture = (name, alt, { cls = '', eager = false, sizes } = {}) =>
  `<img class="${cls}" src="${img(name)}" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"${sizes ? ` sizes="${sizes}"` : ''}>`;

export const kicker = (text, light = false) => `<p class="kicker${light ? ' kicker-light' : ''}">${text}</p>`;

export const ctaButtons = (secondary = { label: t('Nos réalisations', 'Our projects'), href: 'realisations.html' }) =>
  `<div class="btn-row">
    <a class="btn btn-primary" href="contact.html#devis">${t('Demander un devis', 'Request a quote')} ${icon('arrow')}</a>
    ${secondary ? `<a class="btn btn-ghost" href="${secondary.href}">${secondary.label}</a>` : ''}
  </div>`;

export function homeHero() {
  const stats = [
    ['1', t('MWc', 'MWp'), t('notre plus grande centrale, à Sandiara', 'our largest plant, in Sandiara')],
    ['100', '%', t("d'autonomie pour l'usine de Sandiara", 'autonomy for the Sandiara factory')],
    ['20', t('ans', 'years'), t('de durée de vie, pour un retour sur investissement en 3 ans', 'lifespan, with a 3-year return on investment')],
    ['6', t('métiers', 'services'), t("de l'énergie à la maintenance, un seul groupe", 'from energy to maintenance, one group')],
  ];
  return `<section class="hero">
  <div class="hero-media">${picture('hero-centrale-1mwc', t('Vue aérienne de la centrale solaire de 1 MWc réalisée par DSG à Sandiara', 'Aerial view of the 1 MWp solar plant built by DSG in Sandiara'), { eager: true })}</div>
  <div class="hero-sun" aria-hidden="true"></div>
  <div class="wrap hero-in">
    <p class="kicker kicker-light">Dieye Solar Group · ${t('Thiès, Sénégal', 'Thiès, Senegal')}</p>
    <h1 class="hero-title">${t("L'innovation au service <span>de vos projets.</span>", 'Innovation serving <span>your projects.</span>')}</h1>
    <p class="hero-lead">${t(
      'Énergie solaire, forage et irrigation, électricité générale, BTP, SAV et maintenance. Un seul groupe conçoit, installe et entretient vos équipements, pour les industries, les collectivités et les familles de tout le Sénégal.',
      'Solar energy, boreholes and irrigation, electrical work, construction, after-sales service and maintenance. One group designs, installs and maintains your equipment, for industries, communities and families all over Senegal.'
    )}</p>
    ${ctaButtons()}
  </div>
  <div class="hero-stats">
    <div class="wrap">
      <ul class="stats">
        ${stats.map(([n, u, d]) => `<li><p class="stat-n"><span data-count>${n}</span><small>${u}</small></p><p class="stat-t">${d}</p></li>`).join('')}
      </ul>
    </div>
  </div>
</section>`;
}

export function logoTicker() {
  const seen = new Set();
  const all = [...partners.clients, ...partners.partners, ...partners.brands].filter(([f]) => !seen.has(f) && seen.add(f));
  const row = (hidden) => all.map(([f, n]) => `<li><img src="${asset(`logos/${f}.webp`)}" alt="${hidden ? '' : esc(n)}" loading="lazy" height="40"></li>`).join('');
  // La liste est courte : on la répète pour que la bande défile sans trou sur grand écran.
  return `<section class="ticker" aria-label="${t('Clients, partenaires et marques', 'Clients, partners and brands')}">
  <div class="ticker-track"><ul>${row(false)}${row(true)}</ul><ul aria-hidden="true">${row(true)}${row(true)}</ul></div>
</section>`;
}

export function servicesGrid({ title = t('Six métiers, <br>un seul interlocuteur.', 'Six services, <br>one single contact.'), intro = true } = {}) {
  return `<section class="section services" id="activites">
  <div class="wrap">
    <div class="section-head">
      <div>
        ${kicker(t('Nos activités', 'Our services'))}
        <h2>${title}</h2>
      </div>
      ${intro ? `<p class="section-intro">${t(
        "L'énergie, l'eau, le bâtiment et l'entretien sont liés sur un chantier. Nous les réunissons dans une même équipe pour que votre projet avance sans coordination à faire entre plusieurs prestataires.",
        'Energy, water, buildings and maintenance are linked on every site. We bring them together in one team, so your project moves forward without you having to coordinate several contractors.'
      )}</p>` : ''}
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
            <span class="svc-more">${t('Découvrir', 'Learn more')} ${icon('arrow')}</span>
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
    ['doc', t("L'étude avant le devis", 'A study before the quote'), t('Nous relevons vos consommations et vos contraintes sur place avant de chiffrer. Vous payez la solution juste nécessaire, pas plus.', 'We record your consumption and constraints on site before pricing anything. You pay for the solution you need, nothing more.')],
    ['shield', t('Du matériel qui dure', 'Equipment built to last'), t('Onduleurs, batteries et panneaux de marques reconnues (Deye, Felicity Solar, Solarig…), posés par nos propres techniciens.', 'Inverters, batteries and panels from recognised brands (Deye, Felicity Solar, Solarig…), installed by our own technicians.')],
    ['chart', t('Un suivi dans le temps', 'Long-term follow-up'), t('Supervision de la production, visites de maintenance et dépannage rapide : votre installation garde ses performances.', 'Production monitoring, maintenance visits and fast repairs: your installation keeps performing.')],
  ];
  return `<section class="section approach">
  <div class="wrap approach-in">
    <div class="approach-media" data-reveal>
      ${picture('sandiara-techniciens', t('Techniciens DSG en tenue de chantier lors de la mise en service des onduleurs de Sandiara', 'DSG technicians in work gear commissioning the inverters in Sandiara'))}
      <p class="media-tag"><span></span>${t('Mise en service à Sandiara, région de Thiès', 'Commissioning in Sandiara, Thiès region')}</p>
    </div>
    <div>
      ${kicker(t('Notre approche', 'Our approach'))}
      <h2>${t('Une vision globale, des solutions durables.', 'A global vision, sustainable solutions.')}</h2>
      <ol class="pillars">
        ${items.map(([ic, h, d], i) => `<li data-reveal><span class="pillar-n">0${i + 1}</span><div><h3>${icon(ic)} ${h}</h3><p>${d}</p></div></li>`).join('')}
      </ol>
    </div>
  </div>
</section>`;
}

export function hybridDay() {
  const moments = [
    [t('7 h', '7 am'), t('Le soleil se lève', 'Sunrise'), t('Les panneaux alimentent le site et le surplus recharge les batteries.', 'The panels power the site and the surplus charges the batteries.')],
    [t('13 h', '1 pm'), t('Pic de production', 'Peak production'), t("La centrale couvre toute la consommation : le réseau Senelec n'est plus sollicité.", 'The plant covers all consumption: the Senelec grid is no longer used.')],
    [t('19 h', '7 pm'), t('Relais des batteries', 'Batteries take over'), t("Éclairage, froid et équipements tournent sur le stockage jusqu'au lendemain.", 'Lighting, cooling and equipment run on storage until the next morning.')],
    ['24/7', t('Coupure réseau ?', 'Power cut?'), t('Les onduleurs hybrides basculent sur les batteries sans interruption, puis reviennent au réseau.', 'Hybrid inverters switch to the batteries without interruption, then back to the grid.')],
  ];
  const x = (h) => (40 + h * (560 / 24)).toFixed(1);
  return `<section class="section dark hybrid">
  <div class="wrap">
    <div class="section-head">
      <div>
        ${kicker(t('Centrale hybride', 'Hybrid plant'), true)}
        <h2>${t('24 heures avec le soleil.', '24 hours with the sun.')}</h2>
      </div>
      <p class="section-intro">${t('Comment une centrale hybride DSG alimente un site du lever au coucher du soleil, et bien après.', 'How a DSG hybrid plant powers a site from sunrise to sunset, and long after.')}</p>
    </div>
    <div class="hybrid-in">
      <figure class="chart" data-reveal>
        <svg viewBox="0 0 640 270" role="img" aria-labelledby="chart-t">
          <title id="chart-t">${t('Profil type sur 24 heures : production solaire en journée, consommation du site, batteries la nuit', 'Typical 24-hour profile: solar production during the day, site consumption, batteries at night')}</title>
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
          <text x="${x(13)}" y="26" text-anchor="middle" class="lbl">${t('Pic de production', 'Peak production')}</text>
          <text x="535" y="50" text-anchor="middle" class="lbl">${t('Soirée sur batteries', 'Evening on batteries')}</text>
          <g class="ticks">${[0, 6, 12, 18, 24].map((h) => `<text x="${x(h)}" y="244" text-anchor="middle">${lang === 'en' ? `${h}:00` : `${h} h`}</text>`).join('')}</g>
        </svg>
        <figcaption class="legend">
          <span><i class="lg-sun"></i>${t('Production solaire', 'Solar production')}</span>
          <span><i class="lg-load"></i>${t('Consommation du site', 'Site consumption')}</span>
          <span><i class="lg-bat"></i>${t('Batteries en relais', 'Batteries take over')}</span>
        </figcaption>
      </figure>
      <ol class="moments">
        ${moments.map(([h, ti, d]) => `<li data-reveal><span class="m-h">${h}</span><div><h3>${ti}</h3><p>${d}</p></div></li>`).join('')}
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
        ${kicker(t('Réalisations', 'Projects'))}
        <h2>${t('Des installations qui tournent déjà.', 'Installations already up and running.')}</h2>
      </div>
      <div class="car-ctrl">
        <button class="round-btn" type="button" data-car="prev" aria-label="${t('Réalisation précédente', 'Previous project')}">${icon('arrowLeft')}</button>
        <button class="round-btn" type="button" data-car="next" aria-label="${t('Réalisation suivante', 'Next project')}">${icon('arrow')}</button>
      </div>
    </div>
  </div>
  <div class="car" data-carousel tabindex="0" aria-label="${t('Nos réalisations', 'Our projects')}">
    ${projects.map((p) => projectCard(p)).join('')}
  </div>
  <div class="wrap"><a class="link-arrow" href="realisations.html">${t('Toutes les réalisations', 'All projects')} ${icon('arrow')}</a></div>
</section>`;
}

const vidFigure = ({ file, poster, title, sub, portrait = false }) => `<figure class="vid${portrait ? ' vid-portrait' : ''}">
  <div class="vid-frame">
    <video controls preload="none" playsinline poster="${img(poster)}" aria-label="${t('Vidéo', 'Video')} : ${esc(title)}">
      <source src="${asset(`video/${file}.mp4`)}" type="video/mp4">
    </video>
    <button class="vid-play" type="button" aria-label="${t('Lire la vidéo', 'Play video')} : ${esc(title)}">${icon('play')}</button>
  </div>
  <figcaption><strong>${title}</strong>${sub ? `<span>${sub}</span>` : ''}</figcaption>
</figure>`;

export const videoCard = (p) =>
  vidFigure({ file: p.video.file, poster: p.video.poster, title: p.title, sub: `${p.place}${p.video.duration ? ` · ${p.video.duration}` : ''}` });

export const clipCard = (key) =>
  vidFigure({ file: key, poster: `video-${key}`, title: clips[key].title, sub: clips[key].duration, portrait: true });

export function clipsSection(keys, { kickerText = t('En vidéo', 'On video'), title = t('Sur le terrain, en vidéo.', 'On site, on video.'), paper = false } = {}) {
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
        ${kicker(t('En vidéo', 'On video'))}
        <h2>${t('Nos chantiers en mouvement.', 'Our sites in motion.')}</h2>
      </div>
      <p class="section-intro">${t('De la pose des panneaux à la mise en service : suivez nos équipes sur deux de nos réalisations.', 'From installing the panels to commissioning: follow our teams on two of our projects.')}</p>
    </div>
    <div class="videos">${list.map(videoCard).join('')}</div>
  </div>
</section>`;
}

export const academyWa = () =>
  waLink(t(
    `Bonjour DSG, je souhaite m'inscrire à ProSolar Academy (session du ${academy.nextSession}).`,
    `Hello DSG, I would like to enrol in ProSolar Academy (session starting ${academy.nextSession}).`
  ));

export const academyFacts = () =>
  `<ul class="ac-facts">${academy.facts.map(([n, d]) => `<li><strong>${n}</strong><span>${d}</span></li>`).join('')}</ul>`;

export function academySection() {
  return `<section class="section dark academy" id="prosolar-academy">
  <div class="wrap academy-in">
    <div>
      <img class="ac-logo" src="${img('logo-prosolar')}" alt="${t('Logo ProSolar Academy', 'ProSolar Academy logo')}" width="120" height="100" loading="lazy">
      ${kicker(t('Formation · ProSolar Academy', 'Training · ProSolar Academy'), true)}
      <h2>${t('Formez-vous aux métiers du solaire.', 'Train for a career in solar.')}</h2>
      <p class="academy-lead">${t(
        `${academy.name}, le centre de formation de Dieye Solar Group, forme des techniciens opérationnels en installation et maintenance de systèmes solaires, en partenariat avec l'${academy.partner}.`,
        `${academy.name}, the Dieye Solar Group training centre, trains job-ready technicians in the installation and maintenance of solar systems, in partnership with ${academy.partner}.`
      )}</p>
      ${academyFacts()}
      <div class="btn-row">
        <a class="btn btn-primary" href="prosolar-inscription.html">${t("S'inscrire en ligne", 'Enrol online')} ${icon('arrow')}</a>
        <a class="btn btn-ghost" href="prosolar-academy.html">${t('Découvrir la formation', 'About the programme')}</a>
      </div>
    </div>
    <figure class="academy-media" data-reveal>
      ${picture('prosolar-signature', t("Signature de la convention de partenariat ProSolar Academy entre le directeur général de Dieye Solar Group et le directeur de l'ISEP de Thiès", 'Signing of the ProSolar Academy partnership agreement between the CEO of Dieye Solar Group and the director of ISEP Thiès'))}
      <figcaption><span></span>${t("Signature de la convention de partenariat avec l'ISEP de Thiès", 'Signing the partnership agreement with ISEP Thiès')}</figcaption>
    </figure>
  </div>
</section>`;
}

export function simulator() {
  const types = [
    ['maison', t('Maison / villa', 'House / villa'), true],
    ['entreprise', t('Entreprise / commerce', 'Business / shop')],
    ['culte', t('Lieu de culte / école', 'Place of worship / school')],
    ['agricole', t('Exploitation agricole', 'Farm')],
  ];
  const kwc = t('kWc', 'kWp');
  return `<section class="section sim-sec" id="simulateur">
  <div class="wrap sim-in">
    <div class="sim-copy">
      ${kicker(t('Simulateur', 'Simulator'))}
      <h2>${t('Combien pouvez-vous économiser ?', 'How much could you save?')}</h2>
      <p>${t(
        "Indiquez votre facture d'électricité mensuelle : vous obtenez en quelques secondes une première estimation de la puissance solaire à installer et des économies possibles.",
        'Enter your monthly electricity bill: in a few seconds you get a first estimate of the solar capacity to install and the savings you could make.'
      )}</p>
      <p class="sim-note">${t(
        "Estimation indicative : tarif moyen de 125 FCFA/kWh, production de 4,8 kWh par kWc et par jour à Thiès, objectif de 70 % d'autonomie, panneaux de 590 Wc. Le chiffrage définitif se fait après l'étude sur site, gratuite.",
        'Indicative estimate: average tariff of 125 FCFA/kWh, production of 4.8 kWh per kWp per day in Thiès, 70% autonomy target, 590 Wp panels. The final price is set after a free on-site study.'
      )}</p>
    </div>
    <form class="sim card" data-sim novalidate>
      <fieldset>
        <legend>${t('Type de site', 'Type of site')}</legend>
        <div class="chips">
          ${types.map(([v, l, c]) => `<label class="chip"><input type="radio" name="type" value="${v}"${c ? ' checked' : ''}><span>${l}</span></label>`).join('')}
        </div>
      </fieldset>
      <div class="field">
        <label for="sim-bill">${t('Facture Senelec mensuelle', 'Monthly Senelec bill')}</label>
        <div class="bill-row">
          <input id="sim-bill-range" type="range" min="20000" max="3000000" step="5000" value="150000" aria-label="${t('Facture mensuelle (curseur)', 'Monthly bill (slider)')}">
          <div class="bill-input"><input id="sim-bill" type="number" inputmode="numeric" min="5000" step="1000" value="150000"><span>FCFA</span></div>
        </div>
      </div>
      <label class="switch"><input type="checkbox" name="outages" checked><span class="sw"></span>${t("Je subis des coupures ou j'ai besoin d'électricité le soir", 'I experience power cuts or need electricity in the evening')}</label>
      <dl class="sim-out" aria-live="polite">
        <div><dt>${t('Puissance conseillée', 'Recommended capacity')}</dt><dd><span data-out="kwc">–</span> <small>${kwc}</small></dd></div>
        <div><dt>${t('Panneaux', 'Panels')}</dt><dd><span data-out="panels">–</span></dd></div>
        <div><dt>${t('Stockage conseillé', 'Recommended storage')}</dt><dd><span data-out="storage">–</span> <small data-out="storage-unit">kWh</small></dd></div>
        <div class="out-main"><dt>${t('Économies estimées', 'Estimated savings')}</dt><dd><span data-out="save">–</span> <small>${t('FCFA / mois', 'FCFA / month')}</small></dd><p>${t('soit', 'i.e.')} <strong data-out="save-year">–</strong> ${t('FCFA par an', 'FCFA per year')}</p></div>
      </dl>
      <a class="btn btn-primary btn-block" data-sim-cta href="${waLink()}" target="_blank" rel="noopener">${t('Recevoir mon étude gratuite', 'Get my free study')} ${icon('arrow')}</a>
    </form>
  </div>
</section>`;
}

export function stepsSection() {
  return `<section class="section steps-sec">
  <div class="wrap">
    <div class="section-head">
      <div>
        ${kicker(t('Comment ça se passe', 'How it works'))}
        <h2>${t('Cinq étapes, un devis avant tout engagement.', 'Five steps, a quote before any commitment.')}</h2>
      </div>
    </div>
    <ol class="steps">
      ${steps.map(([h, d], i) => `<li data-reveal><span class="step-n">${i + 1}</span><h3>${h}</h3><p>${d}</p></li>`).join('')}
    </ol>
    <div class="btn-row">
      <a class="btn btn-dark" href="contact.html#devis">${t('Demander un devis', 'Request a quote')} ${icon('arrow')}</a>
      <a class="btn btn-outline" href="${waLink()}" target="_blank" rel="noopener">${icon('chat')} ${t('Écrire sur WhatsApp', 'Message us on WhatsApp')}</a>
    </div>
  </div>
</section>`;
}

export function partnersSection() {
  const group = (title, list) => `<div class="pt-group" data-reveal>
    <h3>${title}</h3>
    <ul class="pt-logos">${list.map(([f, n]) => `<li><img src="${asset(`logos/${f}.webp`)}" alt="${esc(n)}" loading="lazy"></li>`).join('')}</ul>
  </div>`;
  return `<section class="section partners">
  <div class="wrap">
    <div class="section-head">
      <div>
        ${kicker(t('Ils nous font confiance', 'They trust us'))}
        <h2>${t('Clients, partenaires et marques.', 'Clients, partners and brands.')}</h2>
      </div>
    </div>
    ${group(t('Clients', 'Clients'), partners.clients)}
    ${group(t('Partenaires', 'Partners'), partners.partners)}
    ${group(t('Équipements que nous installons', 'Equipment we install'), partners.brands)}
  </div>
</section>`;
}

export function ctaBand() {
  return `<section class="cta-band">
  <div class="wrap cta-in">
    <div>
      ${kicker(t('Parlons de votre projet', "Let's talk about your project"), true)}
      <h2>${t('Prêt à produire votre propre énergie ?', 'Ready to produce your own energy?')}</h2>
      <p>${t(
        'Décrivez-nous votre besoin : nous vous rappelons sous 24 heures ouvrées avec une première estimation et une proposition de visite.',
        'Tell us what you need: we will call you back within 24 working hours with a first estimate and a proposed site visit.'
      )}</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="contact.html#devis">${t('Demander un devis', 'Request a quote')} ${icon('arrow')}</a>
        <a class="btn btn-ghost" href="${waLink()}" target="_blank" rel="noopener">${icon('chat')} WhatsApp</a>
      </div>
    </div>
    <ul class="cta-contacts">
      <li>${icon('phone')}<div><small>${t('Téléphone et WhatsApp', 'Phone and WhatsApp')}</small><a href="tel:${company.phoneHref}">${company.phone}</a></div></li>
      <li>${icon('mail')}<div><small>E-mail</small><a href="mailto:${company.email}">${company.email}</a></div></li>
      <li>${icon('pin')}<div><small>${t('Adresse', 'Address')}</small><span>${company.address}</span></div></li>
      <li>${icon('clock')}<div><small>${t('Horaires', 'Opening hours')}</small><span>${company.hours}</span></div></li>
    </ul>
  </div>
</section>`;
}

export function pageHero({ kickerText, title, lead, image, alt, badge, badgeAlt = '', crumbs = [], actions = true }) {
  return `<section class="page-hero${image ? ' has-img' : ''}">
  ${image ? `<div class="hero-media">${picture(image, alt || '', { eager: true })}</div>` : ''}
  <div class="wrap page-hero-in">
    <nav class="crumbs" aria-label="${t("Fil d'Ariane", 'Breadcrumb')}"><a href="index.html">${t('Accueil', 'Home')}</a>${crumbs.map(([l, h]) => (h ? `<span>/</span><a href="${h}">${l}</a>` : `<span>/</span><span aria-current="page">${l}</span>`)).join('')}</nav>
    ${badge ? `<img class="hero-badge" src="${img(badge)}" alt="${esc(badgeAlt)}" width="150" height="125">` : ''}
    ${kickerText ? kicker(kickerText, true) : ''}
    <h1>${title}</h1>
    ${lead ? `<p class="page-lead">${lead}</p>` : ''}
    ${actions ? ctaButtons(null) : ''}
  </div>
</section>`;
}

export const gallery = (items) =>
  `<ul class="gallery">${items.map(([n, a]) => `<li data-reveal>${picture(n, a)}</li>`).join('')}</ul>`;
