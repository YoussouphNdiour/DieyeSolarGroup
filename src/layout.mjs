import { company, services, projects } from './data.mjs';

const ASSET_V = Date.now().toString(36);

export const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const img = (name) => `assets/img/${name}.webp`;

export const waLink = (text = 'Bonjour DSG, je souhaite un devis pour un projet.') =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;

const paths = {
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  drop: '<path d="M12 2.7c3.6 4.3 6 7.6 6 10.8a6 6 0 0 1-12 0c0-3.2 2.4-6.5 6-10.8z"/>',
  sprout: '<path d="M12 21v-9"/><path d="M12 12c0-4 3-7 8-7 0 5-3 7-8 7z"/><path d="M12 15c0-3-2.5-5.5-7-5.5 0 4 2.5 5.5 7 5.5z"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>',
  building: '<path d="M4 21V8l8-5 8 5v13"/><path d="M9 21v-6h6v6"/><path d="M9 10h.01M15 10h.01"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowLeft: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  chat: '<path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3 3z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-2-2l.8-1-1-2z"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  battery: '<rect x="2" y="7" width="17" height="10" rx="2"/><path d="M22 11v2M6 10v4M10 10v4"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3z"/><path d="m9 12 2 2 4-4"/>',
  chart: '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',
  play: '<path d="M8 5.5v13l11-6.5z" fill="currentColor"/>',
  doc: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',
};

export const icon = (name, cls = '') =>
  `<svg class="ico ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;

const nav = [
  { label: 'Accueil', href: 'index.html', key: 'home' },
  {
    label: 'Activités',
    key: 'services',
    children: services.map((s) => ({ label: s.title, href: `${s.slug}.html`, icon: s.icon, desc: s.short })),
  },
  {
    label: 'Réalisations',
    key: 'projects',
    children: [
      ...projects.map((p) => ({ label: p.title, href: `projet-${p.slug}.html`, desc: `${p.figure} ${p.unit} · ${p.place}` })),
      { label: 'Toutes nos réalisations', href: 'realisations.html', all: true },
    ],
  },
  { label: 'Le groupe', href: 'groupe.html', key: 'group' },
  { label: 'Contact', href: 'contact.html', key: 'contact' },
];

function header(active) {
  const items = nav
    .map((item) => {
      const cur = item.key === active ? ' aria-current="page"' : '';
      if (!item.children) return `<li><a class="nav-link" href="${item.href}"${cur}>${item.label}</a></li>`;
      const links = item.children
        .map(
          (c) => `<li><a href="${c.href}" class="${c.all ? 'dd-all' : ''}">${c.icon ? `<span class="dd-ico">${icon(c.icon)}</span>` : ''}<span><strong>${esc(c.label)}</strong>${c.desc ? `<small>${esc(c.desc)}</small>` : ''}</span>${c.all ? icon('arrow') : ''}</a></li>`
        )
        .join('');
      return `<li class="has-dd${item.key === active ? ' is-current' : ''}">
        <button class="nav-link dd-toggle" type="button" aria-expanded="false">${item.label}${icon('chevron', 'chev')}</button>
        <ul class="dd">${links}</ul>
      </li>`;
    })
    .join('');

  return `<a class="skip" href="#contenu">Aller au contenu</a>
<header class="site-header">
  <div class="wrap header-in">
    <a class="brand" href="index.html" aria-label="Dieye Solar Group, accueil">
      <img src="assets/brand/dsg-mark.webp" alt="DSG Dieye Solar Group" width="160" height="45">
    </a>
    <nav class="main-nav" aria-label="Navigation principale">
      <ul class="nav-list">${items}</ul>
      <div class="nav-mobile-extra">
        <a class="btn btn-primary" href="contact.html#devis">Demander un devis</a>
        <a class="nav-phone" href="tel:${company.phoneHref}">${icon('phone')} ${company.phone}</a>
      </div>
    </nav>
    <div class="header-actions">
      <a class="header-phone" href="tel:${company.phoneHref}">${icon('phone')}<span>${company.phone}</span></a>
      <a class="btn btn-primary btn-sm" href="contact.html#devis">Demander un devis</a>
      <button class="burger" type="button" aria-label="Ouvrir le menu" aria-expanded="false">${icon('menu', 'i-open')}${icon('close', 'i-close')}</button>
    </div>
  </div>
  <div class="brand-stripe" aria-hidden="true"></div>
</header>`;
}

function footer() {
  const col = (title, links) =>
    `<div class="f-col"><h3>${title}</h3><ul>${links.map(([l, h]) => `<li><a href="${h}">${esc(l)}</a></li>`).join('')}</ul></div>`;
  return `<footer class="site-footer">
  <div class="wrap">
    <div class="f-top">
      <div class="f-brand">
        <img src="assets/brand/dsg-logo-blanc.webp" alt="DSG Dieye Solar Group, l'innovation au service de vos projets" width="260" height="110" loading="lazy">
        <p>Groupe sénégalais basé à Thiès. Énergie solaire, forage et pompage, irrigation, électricité générale et BTP, de l'étude à la maintenance.</p>
        <a class="btn btn-wa" href="${waLink()}" target="_blank" rel="noopener">${icon('chat')} Écrire sur WhatsApp</a>
      </div>
      ${col('Activités', services.map((s) => [s.title, `${s.slug}.html`]))}
      ${col('Réalisations', [...projects.map((p) => [p.title, `projet-${p.slug}.html`]), ['Toutes les réalisations', 'realisations.html']])}
      <div class="f-col f-contact">
        <h3>Contact</h3>
        <ul>
          <li>${icon('phone')}<a href="tel:${company.phoneHref}">${company.phone}</a></li>
          <li>${icon('mail')}<a href="mailto:${company.email}">${company.email}</a></li>
          <li>${icon('pin')}<span>${company.address}</span></li>
          <li>${icon('clock')}<span>${company.hours}</span></li>
        </ul>
      </div>
    </div>
    <div class="f-bottom">
      <p>© <span data-year>2026</span> ${company.legal}. Tous droits réservés.</p>
      <ul><li><a href="groupe.html">Le groupe</a></li><li><a href="mentions-legales.html">Mentions légales</a></li><li><a href="contact.html">Contact</a></li></ul>
    </div>
  </div>
</footer>
<a class="wa-float" href="${waLink()}" target="_blank" rel="noopener" aria-label="Écrire à DSG sur WhatsApp">${icon('chat')}</a>`;
}

const jsonLd = () =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    alternateName: company.short,
    slogan: company.slogan,
    url: company.url,
    telephone: company.phone,
    email: company.email,
    image: `${company.url}/assets/img/hero-mosquee.webp`,
    logo: `${company.url}/assets/brand/dsg-logo.png`,
    address: { '@type': 'PostalAddress', streetAddress: 'Grand Standing', addressLocality: 'Thiès', addressCountry: 'SN' },
    openingHours: 'Mo-Sa 08:00-18:00',
    areaServed: 'Sénégal',
  });

export function page({ file, title, description, active, body, image = 'hero-mosquee', home = false }) {
  const fullTitle = home ? title : `${title} | DSG – Dieye Solar Group`;
  const canonical = `${company.url}/${file === 'index.html' ? '' : file}`;
  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script>document.documentElement.classList.add('js')</script>
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<meta name="theme-color" content="#0D1034">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_SN">
<meta property="og:site_name" content="DSG – Dieye Solar Group">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${company.url}/${img(image)}">
<meta property="og:url" content="${canonical}">
<link rel="icon" type="image/png" sizes="64x64" href="assets/brand/favicon-64.png">
<link rel="apple-touch-icon" href="assets/brand/favicon-180.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..800&family=DM+Sans:opsz,wght@9..40,400..700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.css?v=${ASSET_V}">
${home ? `<link rel="preload" as="image" href="${img(image)}" fetchpriority="high">\n<script type="application/ld+json">${jsonLd()}</script>` : ''}
</head>
<body>
${header(active)}
<main id="contenu">
${body}
</main>
${footer()}
<script src="assets/js/main.js?v=${ASSET_V}" defer></script>
</body>
</html>
`;
}
