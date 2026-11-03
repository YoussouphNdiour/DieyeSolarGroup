// Génère les pages HTML statiques dans public/ — usage : node build.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { company, services, projects, fieldPhotos, academy, clips } from './src/data.mjs';
import { page, icon, esc, waLink } from './src/layout.mjs';
import {
  homeHero, logoTicker, servicesGrid, approach, hybridDay, projectsCarousel, simulator,
  stepsSection, partnersSection, ctaBand, pageHero, projectCard, picture, kicker, gallery,
  videosSection, videoCard, academySection, academyFacts, academyWa, clipsSection,
} from './src/components.mjs';

const out = [];
const add = (file, opts) => out.push([file, page({ file, ...opts })]);

// Accueil
add('index.html', {
  home: true,
  active: 'home',
  title: 'DSG – Dieye Solar Group | Énergie solaire, forage, irrigation, électricité et BTP au Sénégal',
  description: "Dieye Solar Group (DSG), groupe sénégalais basé à Thiès : centrales solaires, forage et pompage solaire, irrigation, électricité générale, BTP, SAV et maintenance. Centre de formation ProSolar Academy.",
  body: [homeHero(), logoTicker(), servicesGrid(), approach(), hybridDay(), projectsCarousel(), videosSection(), academySection(), simulator(), stepsSection(), partnersSection(), ctaBand()].join('\n'),
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
${s.videos ? clipsSection(s.videos, { title: 'Le chantier en vidéo.' }) : ''}
${p ? `<section class="section${s.videos ? ' section-paper' : ''}">
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
${clipsSection(Object.keys(clips))}
${ctaBand()}`,
});

// Pages projets
projects.forEach((p, i) => {
  const next = projects[(i + 1) % projects.length];
  add(`projet-${p.slug}.html`, {
    active: 'projects',
    image: p.image,
    title: p.title,
    description: `${p.title} (${p.place}${p.year ? `, ${p.year}` : ''}) : ${p.summary} Une réalisation Dieye Solar Group.`,
    body: `${pageHero({ kickerText: p.year ? `${p.category} · ${p.year}` : p.category, title: p.title, lead: `${p.place}. ${p.summary}`, image: p.image, alt: `${p.title}, ${p.place}`, crumbs: [['Réalisations', 'realisations.html'], [p.title]], actions: false })}
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
      <strong>${next.shortTitle || next.title}</strong>
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
  image: 'equipe-dsg',
  title: 'Le groupe',
  description: "Dieye Solar Group (DSG), groupe sénégalais basé à Thiès : énergie solaire, eau, électricité, BTP, SAV et maintenance réunis sous une même enseigne.",
  body: `${pageHero({ kickerText: 'Le groupe', title: 'Un groupe sénégalais, basé à Thiès.', lead: "Dieye Solar Group réunit sous une même enseigne l'énergie solaire, l'eau, l'électricité, le bâtiment et la maintenance, pour accompagner un projet du premier relevé jusqu'au suivi dans le temps.", image: 'equipe-dsg', alt: "L'équipe DSG en tenue de chantier", crumbs: [['Le groupe']] })}
<section class="section">
  <div class="wrap about-in">
    <div>
      ${kicker('Qui sommes-nous')}
      <h2>L'innovation au service de vos projets.</h2>
      <p class="section-intro">DSG est né d'un constat simple : au Sénégal, un projet d'énergie touche presque toujours l'eau, l'électricité du bâtiment et le génie civil. Plutôt que de multiplier les intervenants, nous avons réuni ces métiers dans une seule équipe.</p>
      <p>Nos techniciens, électriciens et équipes BTP travaillent ensemble sur chaque chantier : centrale de 1 MWc pour une usine, centrale hybride pour une mosquée, chambres froides solaires pour l'agro-industrie, forage et bassin pour une ferme, villa en autoconsommation.</p>
      <p>Pour former la relève, le groupe a créé <a href="prosolar-academy.html">ProSolar Academy</a>, son centre de formation professionnelle aux métiers du solaire, en partenariat avec l'${academy.partner}.</p>
    </div>
    <div class="vm">
      <div class="card" data-reveal><h3>${icon('sun')} Notre vision</h3><p>Une énergie propre, fiable et accessible pour chaque foyer, chaque entreprise et chaque communauté du Sénégal.</p></div>
      <div class="card" data-reveal><h3>${icon('bolt')} Notre mission</h3><p>Concevoir des solutions solaires et hydrauliques justes, durables et abordables, avec un service réactif après l'installation.</p></div>
      <div class="card card-dark" data-reveal><h3>Direction</h3><p class="owner">${company.owner}</p><ul class="owner-titles">${company.ownerTitles.map((t) => `<li>${t}</li>`).join('')}</ul></div>
    </div>
  </div>
</section>
${servicesGrid({ title: 'Nos six métiers.', intro: false })}
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

// ProSolar Academy (informations publiques uniquement : pas de données financières du dossier de projet)
add('prosolar-academy.html', {
  active: 'academy',
  image: 'prosolar-signature',
  title: 'ProSolar Academy – formation aux métiers du solaire',
  description: `ProSolar Academy, centre de formation de Dieye Solar Group à Thiès : installation et maintenance de systèmes solaires, 70 % de pratique, en partenariat avec l'${academy.partner}. Prochaine session le ${academy.nextSession}.`,
  body: `${pageHero({ kickerText: 'Centre de formation', title: academy.name, lead: `${academy.tagline}, porté par Dieye Solar Group en partenariat avec l'${academy.partner}.`, image: 'sandiara-techniciens', alt: 'Techniciens en tenue de chantier devant des onduleurs hybrides', crumbs: [[academy.name]], actions: false })}
<section class="section">
  <div class="wrap ac-intro">
    <div>
      ${kicker('Pourquoi ProSolar Academy')}
      <h2>Des techniciens formés sur le terrain, pas seulement en salle.</h2>
      <p class="section-intro">Le solaire se développe vite au Sénégal, mais beaucoup d'installations sont encore posées par des techniciens insuffisamment formés : systèmes mal dimensionnés, pannes à répétition, clients déçus.</p>
      <p>ProSolar Academy transmet le savoir-faire acquis par Dieye Solar Group sur ses chantiers : dimensionnement, pose d'onduleurs hybrides, stockage, pompage solaire et maintenance. La formation est ouverte à tous ceux qui veulent un métier concret dans un secteur qui recrute.</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="prosolar-inscription.html">S'inscrire en ligne ${icon('arrow')}</a>
        <a class="btn btn-outline" href="${academyWa()}" target="_blank" rel="noopener">${icon('chat')} Une question ?</a>
      </div>
    </div>
    <div class="ac-facts-wrap">${academyFacts()}</div>
  </div>
</section>
<section class="section section-paper">
  <div class="wrap">
    <div class="section-head">
      <div>
        ${kicker('Programme')}
        <h2>Quatre modules, du câble au business.</h2>
      </div>
      <p class="section-intro">Une approche 70 % pratique et 30 % théorie : chaque notion est mise en œuvre sur de vrais équipements (panneaux, onduleurs hybrides, batteries lithium, régulateurs MPPT, pompes solaires).</p>
    </div>
    <ol class="modules">
      ${academy.modules.map(([t, items], i) => `<li class="card" data-reveal><span class="mod-n">Module ${i + 1}</span><h3>${t}</h3><ul>${items.map((x) => `<li>${icon('check')}${x}</li>`).join('')}</ul></li>`).join('')}
    </ol>
  </div>
</section>
<section class="section">
  <div class="wrap">
    ${kicker('Pour qui ?')}
    <h2>Une formation ouverte.</h2>
    <ul class="aud-grid">
      ${academy.audiences.map(([t, d]) => `<li data-reveal><span class="svc-ico">${icon('cap')}</span><div><h3>${t}</h3><p>${d}</p></div></li>`).join('')}
    </ul>
  </div>
</section>
<section class="section dark">
  <div class="wrap academy-in">
    <figure class="academy-media" data-reveal>
      ${picture('prosolar-signature', "Signature de la convention de partenariat entre le directeur général de Dieye Solar Group et le directeur de l'ISEP de Thiès")}
      <figcaption><span></span>Signature de la convention entre DSG et l'ISEP de Thiès</figcaption>
    </figure>
    <div>
      ${kicker('Partenaire pédagogique', true)}
      <h2>En partenariat avec l'${academy.partner}.</h2>
      <p class="academy-lead">Dieye Solar Group et l'${academy.partner} ont signé une convention de partenariat pour la formation professionnelle aux énergies renouvelables. Le programme est construit en concertation avec l'institut.</p>
      <p class="academy-lead">À l'issue de la formation, chaque apprenant reçoit une attestation de compétences délivrée par ProSolar Academy – Dieye Solar Group, en partenariat avec l'ISEP.</p>
    </div>
  </div>
</section>
<section class="section">
  <div class="wrap ac-practical">
    <div>
      ${kicker('Infos pratiques')}
      <h2>Prochaine session : ${academy.nextSession}.</h2>
      <p class="section-intro">Les places sont limitées pour garantir à chacun un accès aux équipements. Réservez la vôtre dès maintenant.</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="prosolar-inscription.html">S'inscrire en ligne ${icon('arrow')}</a>
        <a class="btn btn-outline" href="tel:${company.phoneHref}">${icon('phone')} ${company.phone}</a>
      </div>
    </div>
    <dl class="card ac-dl">
      <div><dt>Inscription</dt><dd>Formulaire en ligne, puis paiement de ${academy.fee} via Wave pour valider la place</dd></div>
      <div><dt>Durée</dt><dd>3 mois, dont 1 mois de stage pratique</dd></div>
      <div><dt>Rythme</dt><dd>Cours intensifs le week-end, compatibles avec une activité professionnelle</dd></div>
      <div><dt>Pédagogie</dt><dd>70 % de pratique, 30 % de théorie, évaluation finale sur un projet réel</dd></div>
      <div><dt>Lieu</dt><dd>${academy.place}</dd></div>
      <div><dt>Effectif</dt><dd>20 apprenants maximum par cohorte</dd></div>
      <div><dt>Attestation</dt><dd>Délivrée par ProSolar Academy – DSG, en partenariat avec l'ISEP de Thiès</dd></div>
    </dl>
  </div>
</section>`,
});

// Inscription ProSolar Academy : formulaire → inscription.php → page de paiement Wave
const opt = (list) => list.map((v) => `<option>${esc(v)}</option>`).join('');
add('prosolar-inscription.html', {
  active: 'academy',
  image: 'prosolar-signature',
  title: 'Inscription ProSolar Academy',
  description: `Inscrivez-vous à ProSolar Academy, session du ${academy.nextSession} à Thiès : formulaire en ligne puis paiement de ${academy.fee} via Wave pour valider votre place.`,
  body: `${pageHero({ kickerText: `Session du ${academy.nextSession}`, title: 'Inscription à ProSolar Academy', lead: `Remplissez le formulaire, puis validez votre place par un paiement de ${academy.fee} via Wave.`, crumbs: [[academy.name, 'prosolar-academy.html'], ['Inscription']], actions: false })}
<section class="section" id="inscription">
  <div class="wrap reg-in">
    <form class="card quote-form reg-form" action="inscription.php" method="post" data-register novalidate>
      <ol class="reg-steps" aria-label="Étapes de l'inscription">
        <li class="is-on" aria-current="step"><span>1</span>Vos informations</li>
        <li><span>2</span>Paiement Wave</li>
        <li><span>3</span>Confirmation</li>
      </ol>
      <h2>Vos informations</h2>
      <p class="form-hint">Les champs marqués * sont obligatoires.</p>
      <div class="f-grid">
        <div class="field"><label for="r-prenom">Prénom *</label><input id="r-prenom" name="prenom" autocomplete="given-name" maxlength="80" required></div>
        <div class="field"><label for="r-nom">Nom *</label><input id="r-nom" name="nom" autocomplete="family-name" maxlength="80" required></div>
        <div class="field"><label for="r-tel">Téléphone (WhatsApp) *</label><input id="r-tel" name="telephone" type="tel" autocomplete="tel" placeholder="77 000 00 00" maxlength="20" required></div>
        <div class="field"><label for="r-email">E-mail</label><input id="r-email" name="email" type="email" autocomplete="email" maxlength="120"></div>
        <div class="field"><label for="r-ville">Ville / localité *</label><input id="r-ville" name="ville" autocomplete="address-level2" maxlength="80" required></div>
        <div class="field"><label for="r-profil">Vous êtes *</label>
          <select id="r-profil" name="profil" required><option value="">Choisir…</option>${opt(['Technicien en activité', 'Électricien', 'Étudiant / jeune diplômé', 'Entrepreneur', 'Agriculteur', 'En reconversion professionnelle', 'Autre'])}</select>
        </div>
        <div class="field"><label for="r-niveau">Niveau d'études *</label>
          <select id="r-niveau" name="niveau" required><option value="">Choisir…</option>${opt(['Sans diplôme', 'BFEM', 'CAP / BEP', 'BT', 'Baccalauréat', 'BTS / DUT', 'Licence', 'Master ou plus'])}</select>
        </div>
        <div class="field"><label for="r-exp">Expérience dans le solaire</label>
          <select id="r-exp" name="experience"><option value="">Choisir…</option>${opt(['Aucune', 'Quelques chantiers', "Plus d'un an"])}</select>
        </div>
        <div class="field f-full"><label for="r-connu">Comment avez-vous connu ProSolar Academy ?</label>
          <select id="r-connu" name="connu"><option value="">Choisir…</option>${opt(['Réseaux sociaux', 'Bouche-à-oreille', 'ISEP de Thiès', 'Site internet', 'Autre'])}</select>
        </div>
        <div class="field f-full"><label for="r-attentes">Vos attentes (facultatif)</label><textarea id="r-attentes" name="attentes" rows="4" maxlength="1000" placeholder="Votre projet, ce que vous souhaitez apprendre…"></textarea></div>
        <div class="hp" aria-hidden="true"><label for="r-website">Ne pas remplir</label><input id="r-website" name="website" tabindex="-1" autocomplete="off"></div>
        <input type="hidden" name="ts" value="">
        <label class="check f-full"><input type="checkbox" name="consent" value="1" required><span>J'accepte que Dieye Solar Group utilise ces informations pour traiter mon inscription. *</span></label>
        <label class="check f-full"><input type="checkbox" name="paiement" value="1" required><span>Je comprends que ma place n'est réservée qu'après le paiement de ${academy.fee} via Wave. *</span></label>
      </div>
      <p class="form-error" role="alert" hidden>Merci de remplir les champs obligatoires.</p>
      <div class="btn-row">
        <button class="btn btn-primary" type="submit">Valider et passer au paiement ${icon('arrow')}</button>
      </div>
    </form>
    <aside class="card card-dark reg-side">
      <h3>Récapitulatif</h3>
      <dl>
        <div><dt>Formation</dt><dd>${academy.name}</dd></div>
        <div><dt>Session</dt><dd>${academy.nextSession}</dd></div>
        <div><dt>Durée</dt><dd>3 mois, dont 1 mois de stage</dd></div>
        <div><dt>Lieu</dt><dd>${academy.place}</dd></div>
        <div class="reg-amount"><dt>À régler pour valider</dt><dd>${academy.fee}</dd></div>
      </dl>
      <p class="reg-wave">Paiement sécurisé sur la plateforme <strong>Wave</strong>, à l'étape suivante.</p>
      <a class="btn btn-ghost btn-block" href="${academyWa()}" target="_blank" rel="noopener">${icon('chat')} Une question ? WhatsApp</a>
    </aside>
  </div>
</section>`,
});

add('prosolar-inscription-merci.html', {
  active: 'academy',
  noindex: true,
  image: 'prosolar-signature',
  title: 'Paiement de votre inscription',
  description: `Validez votre inscription à ProSolar Academy par un paiement de ${academy.fee} via Wave.`,
  body: `${pageHero({ kickerText: 'Étape 2 sur 3', title: 'Dernière étape : le paiement.', lead: 'Votre demande d\'inscription est enregistrée. Votre place sera réservée dès réception de votre paiement.', crumbs: [[academy.name, 'prosolar-academy.html'], ['Paiement']], actions: false })}
<section class="section">
  <div class="wrap pay-in">
    <div class="card pay-card" data-pay data-wa="${company.whatsapp}" data-session="${esc(academy.nextSession)}">
      <ol class="reg-steps" aria-label="Étapes de l'inscription">
        <li class="is-done"><span>${icon('check')}</span>Vos informations</li>
        <li class="is-on" aria-current="step"><span>2</span>Paiement Wave</li>
        <li><span>3</span>Confirmation</li>
      </ol>
      <p class="pay-hello" data-hello hidden></p>
      <dl class="pay-sum">
        <div data-ref-row hidden><dt>Votre référence</dt><dd><strong data-ref></strong></dd></div>
        <div><dt>Montant à régler</dt><dd><strong>${academy.fee}</strong></dd></div>
      </dl>
      <a class="btn btn-primary btn-block btn-wave" href="${academy.payUrl}" target="_blank" rel="noopener">Payer ${academy.fee} avec Wave ${icon('arrow')}</a>
      <ol class="pay-steps">
        <li>Cliquez sur <strong>Payer avec Wave</strong> et confirmez le paiement dans l'application Wave.</li>
        <li>Faites une capture d'écran du reçu de paiement.</li>
        <li>Envoyez-la sur WhatsApp${''} en indiquant votre référence : notre équipe vous confirme votre place.</li>
      </ol>
      <a class="btn btn-outline btn-block" data-pay-wa href="${academyWa()}" target="_blank" rel="noopener">${icon('chat')} Envoyer mon reçu sur WhatsApp</a>
    </div>
  </div>
</section>`,
});

// Le script PHP reprend les réglages de data.mjs (une seule source de vérité)
const php = readFileSync(new URL('./src/inscription.php', import.meta.url), 'utf8')
  .replaceAll('{{EMAIL}}', company.email)
  .replaceAll('{{SESSION}}', academy.nextSession)
  .replaceAll('{{AMOUNT}}', academy.fee)
  .replaceAll('{{PAY_URL}}', academy.payUrl)
  .replaceAll('{{WHATSAPP}}', company.whatsapp);
writeFileSync(new URL('./public/inscription.php', import.meta.url), php);

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
            <option value="prosolar-academy">Formation ProSolar Academy</option>
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
    <p>Responsable de la publication : ${company.owner}, Président Directeur Général.</p>
    <p class="todo">RCCM et NINEA : à compléter.</p>
    <h2>Hébergement</h2>
    <p class="todo">Nom et adresse de l'hébergeur cPanel : à compléter.</p>
    <h2>Propriété intellectuelle</h2>
    <p>Les textes, photographies, logos et la charte graphique de ce site appartiennent à ${company.legal} ou à leurs propriétaires respectifs. Les logos des clients, partenaires et fabricants sont reproduits pour illustrer nos références. Toute reproduction sans autorisation est interdite.</p>
    <h2>Données personnelles</h2>
    <p>Le formulaire de contact et de devis ne stocke aucune donnée sur ce site : il ouvre WhatsApp ou votre messagerie avec votre message prérempli.</p>
    <p>Le formulaire d'inscription à ProSolar Academy enregistre les informations saisies (identité, coordonnées, profil) sur le serveur de ${company.legal} et les transmet par e-mail à notre équipe. Elles servent uniquement à traiter votre inscription et à vous contacter au sujet de la formation. Le paiement est réalisé sur la plateforme Wave : aucune donnée bancaire ne transite par ce site.</p>
    <p>Les informations transmises ne sont ni vendues ni cédées à des tiers. Conformément à la loi sénégalaise n° 2008-12 sur la protection des données à caractère personnel, vous pouvez demander l'accès, la rectification ou la suppression de vos données en écrivant à <a href="mailto:${company.email}">${company.email}</a>.</p>
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
