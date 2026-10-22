// Génère les pages HTML statiques dans public/ — usage : node build.mjs
import { writeFileSync } from 'node:fs';
import { company, services, projects, fieldPhotos } from './src/data.mjs';
import { page, icon, esc, waLink } from './src/layout.mjs';
import {
  homeHero, logoTicker, servicesGrid, approach, hybridDay, projectsCarousel, simulator,
  stepsSection, partnersSection, ctaBand, pageHero, projectCard, picture, kicker, gallery,
  videosSection, videoCard,
} from './src/components.mjs';

const out = [];
const add = (file, opts) => out.push([file, page({ file, ...opts })]);

// Accueil
add('index.html', {
  home: true,
  active: 'home',
  title: 'DSG – Dieye Solar Group | Énergie solaire, forage, irrigation, électricité et BTP au Sénégal',
  description: "Dieye Solar Group (DSG), groupe sénégalais basé à Thiès : centrales solaires hybrides, forage et pompage solaire, irrigation, électricité générale et BTP. Étude gratuite.",
  body: [homeHero(), logoTicker(), servicesGrid(), approach(), hybridDay(), projectsCarousel(), videosSection(), simulator(), stepsSection(), partnersSection(), ctaBand()].join('\n'),
});

// Pages activités
services.forEach((s, i) => {
  const p = projects.find((x) => x.slug === s.project);
  const others = services.filter((x) => x.slug !== s.slug);
  add(`${s.slug}.html`, {
    active: 'services',
    image: s.image,
    title: s.title,
    description: `${s.title} au Sénégal par Dieye Solar Group (DSG) : ${s.short}`,
    body: `${pageHero({ kickerText: `Activité 0${i + 1}`, title: s.title, lead: s.lead, image: s.image, alt: s.imageAlt, crumbs: [['Activités', 'index.html#activites'], [s.title]] })}
<section class="section">
  <div class="wrap svc-detail">
    <div>
      ${kicker('Ce que nous faisons')}
      <h2>Nos prestations</h2>
      <ul class="offer-list">
        ${s.offers.map(([t, d]) => `<li data-reveal><span class="ol-ico">${icon('check')}</span><div><h3>${t}</h3><p>${d}</p></div></li>`).join('')}
      </ul>
    </div>
    <aside class="card side-card">
      <h3>Pour qui ?</h3>
      <ul class="check-list">${s.audiences.map((a) => `<li>${icon('check')}${a}</li>`).join('')}</ul>
      <a class="btn btn-primary btn-block" href="contact.html?besoin=${s.slug}#devis">Demander un devis ${icon('arrow')}</a>
      <a class="btn btn-outline btn-block" href="${waLink(`Bonjour DSG, je suis intéressé(e) par : ${s.title}.`)}" target="_blank" rel="noopener">${icon('chat')} WhatsApp</a>
    </aside>
  </div>
</section>
<section class="section section-paper">
  <div class="wrap">
    ${kicker('Sur le terrain')}
    <h2>Nos équipes à l'œuvre.</h2>
    ${gallery(s.gallery.map((g) => [g, `${s.title} : chantier DSG`]))}
  </div>
</section>
${p ? `<section class="section">
  <div class="wrap feat-proj">
    <div>
      ${kicker('Référence')}
      <h2>${p.title}</h2>
      <p class="section-intro">${p.result}</p>
      <a class="link-arrow" href="projet-${p.slug}.html">Voir le projet ${icon('arrow')}</a>
    </div>
    ${projectCard(p, 'proj-static')}
  </div>
</section>` : ''}
${s.slug === 'energie-solaire' ? hybridDay() + simulator() : ''}
<section class="section section-paper">
  <div class="wrap">
    ${kicker('Nos autres activités')}
    <ul class="mini-svc">${others.map((o) => `<li><a href="${o.slug}.html"><span class="svc-ico">${icon(o.icon)}</span><span><strong>${o.title}</strong><small>${o.short}</small></span>${icon('arrow')}</a></li>`).join('')}</ul>
  </div>
</section>
${ctaBand()}`,
  });
});

// Réalisations
add('realisations.html', {
  active: 'projects',
  image: 'sandiara-aerien',
  title: 'Nos réalisations',
  description: 'Centrales solaires hybrides, chambres froides solaires, pompage solaire : les réalisations de Dieye Solar Group (DSG) au Sénégal.',
  body: `${pageHero({ kickerText: 'Réalisations', title: 'Des installations qui tournent déjà.', lead: "Lieux de culte, agro-industrie, résidences, agriculture : chaque projet est étudié, installé et suivi par nos équipes.", image: 'sandiara-aerien', alt: 'Vue aérienne des chambres froides solaires de Sandiara', crumbs: [['Réalisations']], actions: false })}
<section class="section">
  <div class="wrap">
    <div class="proj-grid">${projects.map((p) => projectCard(p, 'proj-static')).join('')}</div>
  </div>
</section>
<section class="section section-paper">
  <div class="wrap">
    ${kicker('Sur le terrain')}
    <h2>D'autres chantiers.</h2>
    ${gallery(fieldPhotos)}
  </div>
</section>
${ctaBand()}`,
});

// Pages projets
projects.forEach((p, i) => {
  const next = projects[(i + 1) % projects.length];
  add(`projet-${p.slug}.html`, {
    active: 'projects',
    image: p.image,
    title: p.title,
    description: `${p.title} (${p.place}, ${p.year}) : ${p.summary} Une réalisation Dieye Solar Group.`,
    body: `${pageHero({ kickerText: `${p.category} · ${p.year}`, title: p.title, lead: `${p.place}. ${p.summary}`, image: p.image, alt: `${p.title}, ${p.place}`, crumbs: [['Réalisations', 'realisations.html'], [p.title]], actions: false })}
<section class="section">
  <div class="wrap">
    <dl class="spec-bar">${p.specs.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
    <div class="story">
      <div data-reveal><h2>Le besoin</h2><p>${p.challenge}</p></div>
      <div data-reveal><h2>Notre solution</h2><p>${p.solution}</p></div>
      <div data-reveal class="story-res"><h2>Le résultat</h2><p>${p.result}</p></div>
    </div>
  </div>
</section>
${p.video ? `<section class="section section-paper videos-sec">
  <div class="wrap">
    ${kicker('En vidéo')}
    <h2>Le chantier, filmé.</h2>
    <div class="videos videos-single">${videoCard(p)}</div>
  </div>
</section>` : ''}
<section class="section${p.video ? '' : ' section-paper'}">
  <div class="wrap">
    ${kicker('En images')}
    <h2>Le chantier.</h2>
    ${gallery(p.gallery.map((g) => [g, `${p.title} : photo du chantier`]))}
  </div>
</section>
<section class="section">
  <div class="wrap next-proj">
    <a href="projet-${next.slug}.html">
      <small>Projet suivant</small>
      <strong>${next.title}</strong>
      <span>${next.figure} ${next.unit} · ${next.place}</span>
      ${icon('arrow')}
    </a>
  </div>
</section>
${ctaBand()}`,
  });
});

// Le groupe
add('groupe.html', {
  active: 'group',
  image: 'sandiara-techniciens',
  title: 'Le groupe',
  description: "Dieye Solar Group (DSG), groupe sénégalais basé à Thiès : énergie solaire, eau, électricité et BTP réunis sous une même enseigne.",
  body: `${pageHero({ kickerText: 'Le groupe', title: 'Un groupe sénégalais, basé à Thiès.', lead: "Dieye Solar Group réunit sous une même enseigne l'énergie solaire, l'eau, l'électricité et le bâtiment, pour accompagner un projet du premier relevé jusqu'à la maintenance.", image: 'sandiara-techniciens', alt: 'Techniciens DSG lors d\'une mise en service', crumbs: [['Le groupe']] })}
<section class="section">
  <div class="wrap about-in">
    <div>
      ${kicker('Qui sommes-nous')}
      <h2>L'innovation au service de vos projets.</h2>
      <p class="section-intro">DSG est né d'un constat simple : au Sénégal, un projet d'énergie touche presque toujours l'eau, l'électricité du bâtiment et le génie civil. Plutôt que de multiplier les intervenants, nous avons réuni ces métiers dans une seule équipe.</p>
      <p>Nos techniciens, électriciens et équipes BTP travaillent ensemble sur chaque chantier : centrale hybride pour une mosquée, chambres froides solaires pour l'agro-industrie, forage et bassin pour une ferme, villa en autoconsommation.</p>
    </div>
    <div class="vm">
      <div class="card" data-reveal><h3>${icon('sun')} Notre vision</h3><p>Une énergie propre, fiable et accessible pour chaque foyer, chaque entreprise et chaque communauté du Sénégal.</p></div>
      <div class="card" data-reveal><h3>${icon('bolt')} Notre mission</h3><p>Concevoir des solutions solaires et hydrauliques justes, durables et abordables, avec un service réactif après l'installation.</p></div>
      <div class="card card-dark" data-reveal><h3>Direction</h3><p class="owner">${company.owner}</p><p>Propriétaire de Dieye Solar Group</p></div>
    </div>
  </div>
</section>
${servicesGrid({ title: 'Nos cinq métiers.', intro: false })}
<section class="section section-paper">
  <div class="wrap">
    ${kicker('Sur le terrain')}
    <h2>Nos équipes, nos chantiers.</h2>
    ${gallery(fieldPhotos)}
  </div>
</section>
${stepsSection()}
${partnersSection()}
${ctaBand()}`,
});

// Contact
add('contact.html', {
  active: 'contact',
  title: 'Contact et devis',
  description: 'Contactez Dieye Solar Group (DSG) à Thiès : devis gratuit pour votre projet solaire, forage, irrigation, électricité ou BTP. Réponse sous 24 h ouvrées.',
  body: `${pageHero({ kickerText: 'Contact', title: 'Parlons de votre projet.', lead: 'Une question, un devis, une visite ? Écrivez-nous : nous vous rappelons sous 24 heures ouvrées.', crumbs: [['Contact']], actions: false })}
<section class="section" id="devis">
  <div class="wrap contact-in">
    <form class="card quote-form" data-quote novalidate>
      <h2>Demande de devis</h2>
      <p class="form-hint">Les champs marqués * sont obligatoires.</p>
      <div class="f-grid">
        <div class="field"><label for="q-name">Nom complet *</label><input id="q-name" name="name" autocomplete="name" required></div>
        <div class="field"><label for="q-phone">Téléphone *</label><input id="q-phone" name="phone" type="tel" autocomplete="tel" placeholder="77 000 00 00" required></div>
        <div class="field"><label for="q-email">E-mail</label><input id="q-email" name="email" type="email" autocomplete="email"></div>
        <div class="field"><label for="q-city">Ville / localité *</label><input id="q-city" name="city" autocomplete="address-level2" required></div>
        <div class="field f-full"><label for="q-need">Votre besoin *</label>
          <select id="q-need" name="need" required>
            ${services.map((s) => `<option value="${s.slug}">${esc(s.title)}</option>`).join('')}
            <option value="autre">Autre / je ne sais pas encore</option>
          </select>
        </div>
        <div class="field f-full"><label for="q-msg">Votre message *</label><textarea id="q-msg" name="message" rows="5" placeholder="Type de site, facture mensuelle, coupures, débit souhaité…" required></textarea></div>
      </div>
      <p class="form-error" role="alert" hidden>Merci de remplir les champs obligatoires.</p>
      <div class="btn-row">
        <button class="btn btn-primary" type="submit" data-via="whatsapp">${icon('chat')} Envoyer sur WhatsApp</button>
        <button class="btn btn-outline" type="submit" data-via="email">${icon('mail')} Envoyer par e-mail</button>
      </div>
    </form>
    <aside class="contact-side">
      <ul class="contact-list">
        <li>${icon('phone')}<div><small>Téléphone et WhatsApp</small><a href="tel:${company.phoneHref}">${company.phone}</a></div></li>
        <li>${icon('mail')}<div><small>E-mail</small><a href="mailto:${company.email}">${company.email}</a></div></li>
        <li>${icon('pin')}<div><small>Adresse</small><span>${company.address}</span></div></li>
        <li>${icon('clock')}<div><small>Horaires</small><span>${company.hours}</span></div></li>
      </ul>
      <div class="map"><iframe title="Carte : Grand Standing, Thiès" src="https://www.google.com/maps?q=Grand%20Standing%2C%20Thi%C3%A8s%2C%20S%C3%A9n%C3%A9gal&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    </aside>
  </div>
</section>`,
});

// Mentions légales
add('mentions-legales.html', {
  title: 'Mentions légales',
  description: 'Mentions légales du site de Dieye Solar Group (DSG).',
  body: `${pageHero({ title: 'Mentions légales', crumbs: [['Mentions légales']], actions: false })}
<section class="section">
  <div class="wrap prose">
    <h2>Éditeur du site</h2>
    <p>${company.legal}, société par actions simplifiée.<br>Siège : ${company.address}.<br>Téléphone : <a href="tel:${company.phoneHref}">${company.phone}</a> · E-mail : <a href="mailto:${company.email}">${company.email}</a></p>
    <p>Responsable de la publication : ${company.owner}.</p>
    <p class="todo">RCCM et NINEA : à compléter.</p>
    <h2>Hébergement</h2>
    <p class="todo">Nom et adresse de l'hébergeur cPanel : à compléter.</p>
    <h2>Propriété intellectuelle</h2>
    <p>Les textes, photographies, logos et la charte graphique de ce site appartiennent à ${company.legal} ou à leurs propriétaires respectifs. Les logos des clients, partenaires et fabricants sont reproduits pour illustrer nos références. Toute reproduction sans autorisation est interdite.</p>
    <h2>Données personnelles</h2>
    <p>Le formulaire de contact ne stocke aucune donnée sur ce site : il ouvre WhatsApp ou votre messagerie avec votre message prérempli. Les informations transmises servent uniquement à répondre à votre demande. Conformément à la loi sénégalaise n° 2008-12 sur la protection des données à caractère personnel, vous pouvez demander l'accès, la rectification ou la suppression de vos données en écrivant à <a href="mailto:${company.email}">${company.email}</a>.</p>
    <h2>Simulateur</h2>
    <p>Les résultats du simulateur sont des estimations indicatives qui ne constituent pas une offre. Seule l'étude sur site permet un dimensionnement et un chiffrage définitifs.</p>
  </div>
</section>`,
});

// 404
add('404.html', {
  title: 'Page introuvable',
  description: "Cette page n'existe pas ou a été déplacée.",
  body: `<section class="section notfound"><div class="wrap">
    ${kicker('Erreur 404')}
    <h1>Cette page s'est éclipsée.</h1>
    <p class="section-intro">Elle n'existe pas ou a été déplacée. Revenez à l'accueil ou contactez-nous.</p>
    <div class="btn-row"><a class="btn btn-dark" href="index.html">Retour à l'accueil</a><a class="btn btn-outline" href="contact.html">Contact</a></div>
  </div></section>`,
});

for (const [file, html] of out) writeFileSync(new URL(`./public/${file}`, import.meta.url), html);
console.log(`${out.length} pages générées dans public/`);
