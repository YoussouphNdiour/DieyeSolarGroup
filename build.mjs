// Génère les pages HTML statiques : français dans public/, anglais dans public/en/ — usage : node build.mjs
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { company, services, projects, fieldPhotos, academy, clips, lang, t, setLang } from './src/data.mjs';
import { page, icon, esc, waLink, base, img } from './src/layout.mjs';
import {
  homeHero, logoTicker, servicesGrid, approach, hybridDay, projectsCarousel, simulator,
  stepsSection, partnersSection, ctaBand, pageHero, projectCard, picture, kicker, gallery,
  videosSection, videoCard, academySection, academyFacts, academyWa, clipsSection,
} from './src/components.mjs';

function buildPages() {
  const out = [];
  const add = (file, opts) => out.push([file, page({ file, ...opts })]);

  // Accueil
  add('index.html', {
    home: true,
    active: 'home',
    title: t('DSG – Dieye Solar Group | Énergie solaire, forage, irrigation, électricité et BTP au Sénégal', 'DSG – Dieye Solar Group | Solar energy, boreholes, irrigation, electrical work and construction in Senegal'),
    description: t(
      'Dieye Solar Group (DSG), groupe sénégalais basé à Thiès : centrales solaires, forage et pompage solaire, irrigation, électricité générale, BTP, SAV et maintenance. Centre de formation ProSolar Academy.',
      'Dieye Solar Group (DSG), a Senegalese group based in Thiès: solar plants, boreholes and solar pumping, irrigation, electrical work, construction, after-sales service and maintenance. ProSolar Academy training centre.'
    ),
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
      description: t(`${s.title} au Sénégal par Dieye Solar Group (DSG) : ${s.short}`, `${s.title} in Senegal by Dieye Solar Group (DSG): ${s.short}`),
      body: `${pageHero({ kickerText: `${t('Activité', 'Service')} 0${i + 1}`, title: s.title, lead: s.lead, image: s.image, alt: s.imageAlt, crumbs: [[t('Activités', 'Services'), 'index.html#activites'], [s.title]] })}
<section class="section">
  <div class="wrap svc-detail">
    <div>
      ${kicker(t('Ce que nous faisons', 'What we do'))}
      <h2>${t('Nos prestations', 'Our services')}</h2>
      <ul class="offer-list">
        ${s.offers.map(([h, d]) => `<li data-reveal><span class="ol-ico">${icon('check')}</span><div><h3>${h}</h3><p>${d}</p></div></li>`).join('')}
      </ul>
    </div>
    <aside class="card side-card">
      <h3>${t('Pour qui ?', 'Who is it for?')}</h3>
      <ul class="check-list">${s.audiences.map((a) => `<li>${icon('check')}${a}</li>`).join('')}</ul>
      <a class="btn btn-primary btn-block" href="contact.html?besoin=${s.slug}#devis">${t('Demander un devis', 'Request a quote')} ${icon('arrow')}</a>
      <a class="btn btn-outline btn-block" href="${waLink(t(`Bonjour DSG, je suis intéressé(e) par : ${s.title}.`, `Hello DSG, I am interested in: ${s.title}.`))}" target="_blank" rel="noopener">${icon('chat')} WhatsApp</a>
    </aside>
  </div>
</section>
<section class="section section-paper">
  <div class="wrap">
    ${kicker(t('Sur le terrain', 'On site'))}
    <h2>${t("Nos équipes à l'œuvre.", 'Our teams at work.')}</h2>
    ${gallery(s.gallery.map((g) => [g, t(`${s.title} : chantier DSG`, `${s.title}: DSG site`)]))}
  </div>
</section>
${s.videos ? clipsSection(s.videos, { title: t('Le chantier en vidéo.', 'The site on video.') }) : ''}
${p ? `<section class="section${s.videos ? ' section-paper' : ''}">
  <div class="wrap feat-proj">
    <div>
      ${kicker(t('Référence', 'Reference project'))}
      <h2>${p.title}</h2>
      <p class="section-intro">${p.result}</p>
      <a class="link-arrow" href="projet-${p.slug}.html">${t('Voir le projet', 'View the project')} ${icon('arrow')}</a>
    </div>
    ${projectCard(p, 'proj-static')}
  </div>
</section>` : ''}
${s.slug === 'energie-solaire' ? hybridDay() + simulator() : ''}
<section class="section section-paper">
  <div class="wrap">
    ${kicker(t('Nos autres activités', 'Our other services'))}
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
    title: t('Nos réalisations', 'Our projects'),
    description: t(
      'Centrales solaires, chambres froides solaires, pompage solaire : les réalisations de Dieye Solar Group (DSG) au Sénégal.',
      'Solar plants, solar-powered cold rooms, solar pumping: projects completed by Dieye Solar Group (DSG) in Senegal.'
    ),
    body: `${pageHero({ kickerText: t('Réalisations', 'Projects'), title: t('Des installations qui tournent déjà.', 'Installations already up and running.'), lead: t('Industrie, lieux de culte, agro-industrie, résidences, agriculture : chaque projet est étudié, installé et suivi par nos équipes.', 'Industry, places of worship, agro-industry, homes, agriculture: every project is studied, installed and followed up by our teams.'), image: 'sandiara-aerien', alt: t('Vue aérienne des chambres froides solaires de Sandiara', 'Aerial view of the solar-powered cold rooms in Sandiara'), crumbs: [[t('Réalisations', 'Projects')]], actions: false })}
<section class="section">
  <div class="wrap">
    <div class="proj-grid">${projects.map((p) => projectCard(p, 'proj-static')).join('')}</div>
  </div>
</section>
<section class="section section-paper">
  <div class="wrap">
    ${kicker(t('Sur le terrain', 'On site'))}
    <h2>${t("D'autres chantiers.", 'More of our sites.')}</h2>
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
      description: t(
        `${p.title} (${p.place}${p.year ? `, ${p.year}` : ''}) : ${p.summary} Une réalisation Dieye Solar Group.`,
        `${p.title} (${p.place}${p.year ? `, ${p.year}` : ''}): ${p.summary} A Dieye Solar Group project.`
      ),
      body: `${pageHero({ kickerText: p.year ? `${p.category} · ${p.year}` : p.category, title: p.title, lead: `${p.place}. ${p.summary}`, image: p.image, alt: `${p.title}, ${p.place}`, crumbs: [[t('Réalisations', 'Projects'), 'realisations.html'], [p.title]], actions: false })}
<section class="section">
  <div class="wrap">
    <dl class="spec-bar">${p.specs.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
    <div class="story">
      <div data-reveal><h2>${t('Le besoin', 'The need')}</h2><p>${p.challenge}</p></div>
      <div data-reveal><h2>${t('Notre solution', 'Our solution')}</h2><p>${p.solution}</p></div>
      <div data-reveal class="story-res"><h2>${t('Le résultat', 'The result')}</h2><p>${p.result}</p></div>
    </div>
  </div>
</section>
${p.video ? `<section class="section section-paper videos-sec">
  <div class="wrap">
    ${kicker(t('En vidéo', 'On video'))}
    <h2>${t('Le chantier, filmé.', 'The site, on film.')}</h2>
    <div class="videos videos-single">${videoCard(p)}</div>
  </div>
</section>` : ''}
<section class="section${p.video ? '' : ' section-paper'}">
  <div class="wrap">
    ${kicker(t('En images', 'In pictures'))}
    <h2>${t('Le chantier.', 'The site.')}</h2>
    ${gallery(p.gallery.map((g) => [g, t(`${p.title} : photo du chantier`, `${p.title}: site photo`)]))}
  </div>
</section>
<section class="section">
  <div class="wrap next-proj">
    <a href="projet-${next.slug}.html">
      <small>${t('Projet suivant', 'Next project')}</small>
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
    title: t('Le groupe', 'About us'),
    description: t(
      'Dieye Solar Group (DSG), groupe sénégalais basé à Thiès : énergie solaire, eau, électricité, BTP, SAV et maintenance réunis sous une même enseigne.',
      'Dieye Solar Group (DSG), a Senegalese group based in Thiès: solar energy, water, electrical work, construction, after-sales service and maintenance under one roof.'
    ),
    body: `${pageHero({ kickerText: t('Le groupe', 'About us'), title: t('Un groupe sénégalais, basé à Thiès.', 'A Senegalese group based in Thiès.'), lead: t("Dieye Solar Group réunit sous une même enseigne l'énergie solaire, l'eau, l'électricité, le bâtiment et la maintenance, pour accompagner un projet du premier relevé jusqu'au suivi dans le temps.", 'Dieye Solar Group brings solar energy, water, electrical work, construction and maintenance under one roof, to support a project from the first site survey to long-term follow-up.'), image: 'equipe-dsg', alt: t("L'équipe DSG en tenue de chantier", 'The DSG team in work gear'), crumbs: [[t('Le groupe', 'About us')]] })}
<section class="section">
  <div class="wrap about-in">
    <div>
      ${kicker(t('Qui sommes-nous', 'Who we are'))}
      <h2>${t("L'innovation au service de vos projets.", 'Innovation serving your projects.')}</h2>
      <p class="section-intro">${t("DSG est né d'un constat simple : au Sénégal, un projet d'énergie touche presque toujours l'eau, l'électricité du bâtiment et le génie civil. Plutôt que de multiplier les intervenants, nous avons réuni ces métiers dans une seule équipe.", 'DSG was born from a simple observation: in Senegal, an energy project almost always involves water, the building’s electrical installation and civil engineering. Rather than multiplying contractors, we brought these trades together in a single team.')}</p>
      <p>${t("Nos techniciens, électriciens et équipes BTP travaillent ensemble sur chaque chantier : centrale de 1 MWc pour une usine, centrale hybride pour une mosquée, chambres froides solaires pour l'agro-industrie, forage et bassin pour une ferme, villa en autoconsommation.", 'Our technicians, electricians and construction teams work together on every site: a 1 MWp plant for a factory, a hybrid plant for a mosque, solar-powered cold rooms for agro-industry, a borehole and pond for a farm, a self-consumption system for a villa.')}</p>
      <p>${t(`Pour former la relève, le groupe a créé <a href="prosolar-academy.html">ProSolar Academy</a>, son centre de formation professionnelle aux métiers du solaire, en partenariat avec l'${academy.partner}.`, `To train the next generation, the group created <a href="prosolar-academy.html">ProSolar Academy</a>, its vocational training centre for solar careers, in partnership with ${academy.partner}.`)}</p>
    </div>
    <div class="vm">
      <div class="card" data-reveal><h3>${icon('sun')} ${t('Notre vision', 'Our vision')}</h3><p>${t('Une énergie propre, fiable et accessible pour chaque foyer, chaque entreprise et chaque communauté du Sénégal.', 'Clean, reliable and affordable energy for every home, every business and every community in Senegal.')}</p></div>
      <div class="card" data-reveal><h3>${icon('bolt')} ${t('Notre mission', 'Our mission')}</h3><p>${t("Concevoir des solutions solaires et hydrauliques justes, durables et abordables, avec un service réactif après l'installation.", 'Designing well-sized, durable and affordable solar and water solutions, with responsive service after installation.')}</p></div>
      <div class="card card-dark owner-card" data-reveal>
        <img class="owner-photo" src="${img('cheikh-mohamed-dieye')}" alt="${company.owner}, ${t('Président Directeur Général de Dieye Solar Group', 'Chairman and CEO of Dieye Solar Group')}" width="160" height="160" loading="lazy">
        <div><h3>${t('Direction', 'Management')}</h3><p class="owner">${company.owner}</p><ul class="owner-titles">${company.ownerTitles.map((x) => `<li>${x}</li>`).join('')}</ul></div>
      </div>
    </div>
  </div>
</section>
${servicesGrid({ title: t('Nos six métiers.', 'Our six services.'), intro: false })}
<section class="section section-paper">
  <div class="wrap">
    ${kicker(t('Sur le terrain', 'On site'))}
    <h2>${t('Nos équipes, nos chantiers.', 'Our teams, our sites.')}</h2>
    ${gallery(fieldPhotos)}
  </div>
</section>
${stepsSection()}
${partnersSection()}
${ctaBand()}`,
  });

  // ProSolar Academy (informations publiques uniquement : pas de données financières du dossier de projet)
  const isep = t(`l'${academy.partner}`, academy.partner);
  add('prosolar-academy.html', {
    active: 'academy',
    image: 'formation-prosolar',
    title: t('ProSolar Academy – formation aux métiers du solaire', 'ProSolar Academy – training for solar careers'),
    description: t(
      `ProSolar Academy, centre de formation de Dieye Solar Group à Thiès : installation et maintenance de systèmes solaires, 70 % de pratique, en partenariat avec ${isep}. Prochaine session le ${academy.nextSession}.`,
      `ProSolar Academy, the Dieye Solar Group training centre in Thiès: installation and maintenance of solar systems, 70% hands-on, in partnership with ${isep}. Next session starts ${academy.nextSession}.`
    ),
    body: `${pageHero({ kickerText: t('Centre de formation', 'Training centre'), title: academy.name, lead: t(`${academy.tagline}, porté par Dieye Solar Group en partenariat avec ${isep}.`, `${academy.tagline}, run by Dieye Solar Group in partnership with ${isep}.`), image: 'formation-prosolar', alt: t('Apprenants de ProSolar Academy en casque bleu sur une centrale solaire', 'ProSolar Academy trainees in blue helmets at a solar plant'), badge: 'logo-prosolar', badgeAlt: t('Logo ProSolar Academy', 'ProSolar Academy logo'), crumbs: [[academy.name]], actions: false })}
<section class="section">
  <div class="wrap ac-intro">
    <div>
      ${kicker(t('Pourquoi ProSolar Academy', 'Why ProSolar Academy'))}
      <h2>${t('Des techniciens formés sur le terrain, pas seulement en salle.', 'Technicians trained in the field, not just in the classroom.')}</h2>
      <p class="section-intro">${t("Le solaire se développe vite au Sénégal, mais beaucoup d'installations sont encore posées par des techniciens insuffisamment formés : systèmes mal dimensionnés, pannes à répétition, clients déçus.", 'Solar is growing fast in Senegal, but many installations are still carried out by under-trained technicians: badly sized systems, repeated breakdowns, disappointed customers.')}</p>
      <p>${t("ProSolar Academy transmet le savoir-faire acquis par Dieye Solar Group sur ses chantiers : dimensionnement, pose d'onduleurs hybrides, stockage, pompage solaire et maintenance. La formation est ouverte à tous ceux qui veulent un métier concret dans un secteur qui recrute.", 'ProSolar Academy passes on the know-how Dieye Solar Group has built on its sites: sizing, installing hybrid inverters, storage, solar pumping and maintenance. The programme is open to anyone who wants a practical trade in a sector that is hiring.')}</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="prosolar-inscription.html">${t("S'inscrire en ligne", 'Enrol online')} ${icon('arrow')}</a>
        <a class="btn btn-outline" href="${academyWa()}" target="_blank" rel="noopener">${icon('chat')} ${t('Une question ?', 'Any questions?')}</a>
      </div>
    </div>
    <div class="ac-facts-wrap">${academyFacts()}</div>
  </div>
</section>
<section class="section section-paper">
  <div class="wrap">
    <div class="section-head">
      <div>
        ${kicker(t('Programme', 'Curriculum'))}
        <h2>${t('Quatre modules, du câble au business.', 'Four modules, from wiring to business.')}</h2>
      </div>
      <p class="section-intro">${t('Une approche 70 % pratique et 30 % théorie : chaque notion est mise en œuvre sur de vrais équipements (panneaux, onduleurs hybrides, batteries lithium, régulateurs MPPT, pompes solaires).', '70% practice and 30% theory: every topic is put into practice on real equipment (panels, hybrid inverters, lithium batteries, MPPT charge controllers, solar pumps).')}</p>
    </div>
    <ol class="modules">
      ${academy.modules.map(([h, items], i) => `<li class="card" data-reveal><span class="mod-n">Module ${i + 1}</span><h3>${h}</h3><ul>${items.map((x) => `<li>${icon('check')}${x}</li>`).join('')}</ul></li>`).join('')}
    </ol>
  </div>
</section>
<section class="section">
  <div class="wrap">
    ${kicker(t('Pour qui ?', 'Who is it for?'))}
    <h2>${t('Une formation ouverte.', 'A programme open to all.')}</h2>
    <ul class="aud-grid">
      ${academy.audiences.map(([h, d]) => `<li data-reveal><span class="svc-ico">${icon('cap')}</span><div><h3>${h}</h3><p>${d}</p></div></li>`).join('')}
    </ul>
  </div>
</section>
<section class="section dark">
  <div class="wrap academy-in">
    <figure class="academy-media" data-reveal>
      ${picture('prosolar-signature', t("Signature de la convention de partenariat entre le directeur général de Dieye Solar Group et le directeur de l'ISEP de Thiès", 'Signing of the partnership agreement between the CEO of Dieye Solar Group and the director of ISEP Thiès'))}
      <figcaption><span></span>${t("Signature de la convention entre DSG et l'ISEP de Thiès", 'Signing of the agreement between DSG and ISEP Thiès')}</figcaption>
    </figure>
    <div>
      ${kicker(t('Partenaire pédagogique', 'Academic partner'), true)}
      <h2>${t(`En partenariat avec ${isep}.`, `In partnership with ${isep}.`)}</h2>
      <p class="academy-lead">${t(`Dieye Solar Group et ${isep} ont signé une convention de partenariat pour la formation professionnelle aux énergies renouvelables. Le programme est construit en concertation avec l'institut.`, `Dieye Solar Group and ${isep} have signed a partnership agreement for vocational training in renewable energy. The curriculum is designed in consultation with the institute.`)}</p>
      <p class="academy-lead">${t(`Les cours ont lieu à ${isep}. À l'issue des 3 mois de cours et des 3 mois de stage, l'apprenant obtient le Certificat de Compétence Professionnelle (CCP), délivré par ${isep}.`, `Classes take place at ${isep}. After the 3 months of classes and the 3-month internship, trainees obtain the Certificate of Professional Competence (CCP), issued by ${isep}.`)}</p>
    </div>
  </div>
</section>
<section class="section">
  <div class="wrap ac-practical">
    <div>
      ${kicker(t('Infos pratiques', 'Practical information'))}
      <h2>${t(`Prochaine session : ${academy.nextSession}.`, `Next session: ${academy.nextSession}.`)}</h2>
      <p class="section-intro">${t('Les places sont limitées pour garantir à chacun un accès aux équipements. Réservez la vôtre dès maintenant.', 'Places are limited so that everyone gets hands-on time with the equipment. Book yours now.')}</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="prosolar-inscription.html">${t("S'inscrire en ligne", 'Enrol online')} ${icon('arrow')}</a>
        <a class="btn btn-outline" href="tel:${company.phoneHref}">${icon('phone')} ${company.phone}</a>
      </div>
    </div>
    <dl class="card ac-dl">
      <div><dt>${t('Durée', 'Duration')}</dt><dd>${t('6 mois : 3 mois de cours, puis 3 mois de stage', '6 months: 3 months of classes, then a 3-month internship')}</dd></div>
      <div><dt>${t('Coût', 'Cost')}</dt><dd>${t(`${academy.cost} pour la formation complète`, `${academy.cost} for the full programme`)}</dd></div>
      <div><dt>${t('Inscription', 'Enrolment')}</dt><dd>${t(`Formulaire en ligne, puis frais d'inscription de ${academy.fee} réglés via Wave pour valider la place (en plus du coût de la formation)`, `Online form, then a registration fee of ${academy.fee} paid via Wave to confirm your place (on top of the programme cost)`)}</dd></div>
      <div><dt>${t('Rythme', 'Schedule')}</dt><dd>${t('Cours intensifs le week-end, compatibles avec une activité professionnelle', 'Intensive weekend classes, compatible with a job')}</dd></div>
      <div><dt>${t('Pédagogie', 'Teaching')}</dt><dd>${t('70 % de pratique, 30 % de théorie, évaluation finale sur un projet réel', '70% practice, 30% theory, final assessment on a real project')}</dd></div>
      <div><dt>${t('Lieu', 'Location')}</dt><dd>${academy.place}</dd></div>
      <div><dt>${t('Effectif', 'Class size')}</dt><dd>${t('20 apprenants maximum par cohorte', '20 trainees maximum per cohort')}</dd></div>
      <div><dt>${t('Certification', 'Certification')}</dt><dd>${t("Certificat de Compétence Professionnelle (CCP), délivré par l'ISEP Abdoulaye Ly de Thiès", 'Certificate of Professional Competence (CCP), issued by ISEP Abdoulaye Ly, Thiès')}</dd></div>
    </dl>
  </div>
</section>`,
  });

  // Inscription ProSolar Academy : formulaire → inscription.php → page de paiement Wave
  const opt = (list) => list.map((v) => `<option>${esc(v)}</option>`).join('');
  const choose = `<option value="">${t('Choisir…', 'Select…')}</option>`;
  add('prosolar-inscription.html', {
    active: 'academy',
    image: 'prosolar-signature',
    title: t('Inscription ProSolar Academy', 'ProSolar Academy enrolment'),
    description: t(
      `Inscrivez-vous à ProSolar Academy, session du ${academy.nextSession} à Thiès : formulaire en ligne puis frais d'inscription de ${academy.fee} via Wave pour valider votre place.`,
      `Enrol in ProSolar Academy, session starting ${academy.nextSession} in Thiès: online form, then a registration fee of ${academy.fee} via Wave to confirm your place.`
    ),
    body: `${pageHero({ kickerText: t(`Session du ${academy.nextSession}`, `Session starting ${academy.nextSession}`), title: t('Inscription à ProSolar Academy', 'Enrol in ProSolar Academy'), lead: t(`Remplissez le formulaire, puis validez votre place en réglant les frais d'inscription de ${academy.fee} via Wave. Le coût de la formation (${academy.cost}) s'y ajoute.`, `Fill in the form, then confirm your place by paying the ${academy.fee} registration fee via Wave. The programme cost (${academy.cost}) comes on top of this fee.`), crumbs: [[academy.name, 'prosolar-academy.html'], [t('Inscription', 'Enrolment')]], actions: false })}
<section class="section" id="inscription">
  <div class="wrap reg-in">
    <form class="card quote-form reg-form" action="${base()}inscription.php" method="post" data-register novalidate>
      <ol class="reg-steps" aria-label="${t("Étapes de l'inscription", 'Enrolment steps')}">
        <li class="is-on" aria-current="step"><span>1</span>${t('Vos informations', 'Your details')}</li>
        <li><span>2</span>${t('Paiement Wave', 'Wave payment')}</li>
        <li><span>3</span>${t('Confirmation', 'Confirmation')}</li>
      </ol>
      <h2>${t('Vos informations', 'Your details')}</h2>
      <p class="form-hint">${t('Les champs marqués * sont obligatoires.', 'Fields marked * are required.')}</p>
      <div class="f-grid">
        <div class="field"><label for="r-prenom">${t('Prénom', 'First name')} *</label><input id="r-prenom" name="prenom" autocomplete="given-name" maxlength="80" required></div>
        <div class="field"><label for="r-nom">${t('Nom', 'Last name')} *</label><input id="r-nom" name="nom" autocomplete="family-name" maxlength="80" required></div>
        <div class="field"><label for="r-tel">${t('Téléphone (WhatsApp)', 'Phone (WhatsApp)')} *</label><input id="r-tel" name="telephone" type="tel" autocomplete="tel" placeholder="77 000 00 00" maxlength="20" required></div>
        <div class="field"><label for="r-email">E-mail</label><input id="r-email" name="email" type="email" autocomplete="email" maxlength="120"></div>
        <div class="field"><label for="r-ville">${t('Ville / localité', 'City / town')} *</label><input id="r-ville" name="ville" autocomplete="address-level2" maxlength="80" required></div>
        <div class="field"><label for="r-profil">${t('Vous êtes', 'You are')} *</label>
          <select id="r-profil" name="profil" required>${choose}${opt(t(['Technicien en activité', 'Électricien', 'Étudiant / jeune diplômé', 'Entrepreneur', 'Agriculteur', 'En reconversion professionnelle'], ['Working technician', 'Electrician', 'Student / recent graduate', 'Entrepreneur', 'Farmer', 'Changing careers']))}<option value="${t('Autre', 'Other')}" data-other>${t('Autre', 'Other')}</option></select>
        </div>
        <div class="field f-full" data-other-field="r-profil"><label for="r-profil-autre">${t('Précisez votre profil', 'Please specify')} *</label><input id="r-profil-autre" name="profil_autre" maxlength="80" placeholder="${t('Ex. : plombier, enseignant, commerçant…', 'E.g. plumber, teacher, shopkeeper…')}"></div>
        <div class="field"><label for="r-niveau">${t("Niveau d'études", 'Education level')} *</label>
          <select id="r-niveau" name="niveau" required>${choose}${opt(t(['Sans diplôme', 'BFEM', 'CAP / BEP', 'BT', 'Baccalauréat', 'BTS / DUT', 'Licence', 'Master ou plus'], ['No diploma', 'BFEM (lower secondary)', 'CAP / BEP (vocational)', 'BT (technical)', 'Baccalaureate', 'BTS / DUT (2-year degree)', "Bachelor's degree", "Master's degree or higher"]))}</select>
        </div>
        <div class="field"><label for="r-exp">${t('Expérience dans le solaire', 'Solar experience')}</label>
          <select id="r-exp" name="experience">${choose}${opt(t(['Aucune', 'Quelques chantiers', "Plus d'un an"], ['None', 'A few sites', 'More than a year']))}</select>
        </div>
        <fieldset class="field f-full day-group" data-required-group>
          <legend>${t('Vos disponibilités dans la semaine', 'Your availability during the week')} *</legend>
          <div class="chips">${t(['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'], ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']).map((d) => `<label class="chip"><input type="checkbox" name="dispo[]" value="${d}"><span>${d}</span></label>`).join('')}</div>
        </fieldset>
        <div class="field"><label for="r-creneau">${t('Moment de la journée', 'Time of day')}</label>
          <select id="r-creneau" name="creneau">${choose}${opt(t(['Matin', 'Après-midi', 'Soir', 'Journée entière', 'Indifférent'], ['Morning', 'Afternoon', 'Evening', 'Full day', 'No preference']))}</select>
        </div>
        <div class="field"><label for="r-deplacement">${t('Déplacement / hébergement à Thiès', 'Travel / accommodation in Thiès')} *</label>
          <select id="r-deplacement" name="deplacement" required>${choose}${opt(t(["J'habite à Thiès ou à proximité", 'Je peux me déplacer chaque jour à Thiès', "J'ai un hébergement à Thiès", "J'aurai besoin d'un hébergement à Thiès", 'Pas encore sûr(e)'], ['I live in or near Thiès', 'I can travel to Thiès every day', 'I have accommodation in Thiès', 'I will need accommodation in Thiès', 'Not sure yet']))}</select>
        </div>
        <div class="field f-full"><label for="r-connu">${t('Comment avez-vous connu ProSolar Academy ?', 'How did you hear about ProSolar Academy?')}</label>
          <select id="r-connu" name="connu">${choose}${opt(t(['Réseaux sociaux', 'Bouche-à-oreille', 'ISEP de Thiès', 'Site internet', 'Autre'], ['Social media', 'Word of mouth', 'ISEP Thiès', 'Website', 'Other']))}</select>
        </div>
        <div class="field f-full"><label for="r-attentes">${t('Vos attentes (facultatif)', 'Your expectations (optional)')}</label><textarea id="r-attentes" name="attentes" rows="4" maxlength="1000" placeholder="${t('Votre projet, ce que vous souhaitez apprendre…', 'Your project, what you want to learn…')}"></textarea></div>
        <div class="hp" aria-hidden="true"><label for="r-website">${t('Ne pas remplir', 'Leave empty')}</label><input id="r-website" name="website" tabindex="-1" autocomplete="off"></div>
        <input type="hidden" name="ts" value="">
        <input type="hidden" name="lang" value="${lang}">
        <label class="check f-full"><input type="checkbox" name="consent" value="1" required><span>${t("J'accepte que Dieye Solar Group utilise ces informations pour traiter mon inscription.", 'I agree that Dieye Solar Group may use this information to process my enrolment.')} *</span></label>
        <label class="check f-full"><input type="checkbox" name="paiement" value="1" required><span>${t(`Je comprends que ma place n'est réservée qu'après le paiement des frais d'inscription de ${academy.fee} via Wave, et que le coût de la formation (${academy.cost}) s'y ajoute.`, `I understand that my place is only reserved once I have paid the ${academy.fee} registration fee via Wave, and that the programme cost (${academy.cost}) comes on top of it.`)} *</span></label>
      </div>
      <p class="form-error" role="alert" hidden>${t('Merci de remplir les champs obligatoires.', 'Please fill in the required fields.')}</p>
      <div class="btn-row">
        <button class="btn btn-primary" type="submit">${t('Valider et passer au paiement', 'Continue to payment')} ${icon('arrow')}</button>
      </div>
    </form>
    <aside class="card card-dark reg-side">
      <img class="ac-logo" src="${img('logo-prosolar')}" alt="${t('Logo ProSolar Academy', 'ProSolar Academy logo')}" width="120" height="100" loading="lazy">
      <h3>${t('Récapitulatif', 'Summary')}</h3>
      <dl>
        <div><dt>${t('Formation', 'Programme')}</dt><dd>${academy.name}</dd></div>
        <div><dt>Session</dt><dd>${academy.nextSession}</dd></div>
        <div><dt>${t('Durée', 'Duration')}</dt><dd>${t('6 mois : 3 mois de cours + 3 mois de stage', '6 months: 3 months of classes + 3-month internship')}</dd></div>
        <div><dt>Certification</dt><dd>${t("CCP délivré par l'ISEP de Thiès", 'CCP issued by ISEP Thiès')}</dd></div>
        <div><dt>${t('Lieu', 'Location')}</dt><dd>${academy.place}</dd></div>
        <div><dt>${t('Coût de la formation', 'Programme cost')}</dt><dd>${academy.cost}</dd></div>
        <div class="reg-amount"><dt>${t('Frais d’inscription à régler maintenant', 'Registration fee to pay now')}</dt><dd>${academy.fee}</dd></div>
      </dl>
      <p class="reg-wave">${t("Paiement sécurisé sur la plateforme <strong>Wave</strong>, à l'étape suivante.", 'Secure payment on the <strong>Wave</strong> platform, at the next step.')}</p>
      <a class="btn btn-ghost btn-block" href="${academyWa()}" target="_blank" rel="noopener">${icon('chat')} ${t('Une question ? WhatsApp', 'Questions? WhatsApp')}</a>
    </aside>
  </div>
</section>`,
  });

  add('prosolar-inscription-merci.html', {
    active: 'academy',
    noindex: true,
    image: 'prosolar-signature',
    title: t('Paiement de votre inscription', 'Pay for your enrolment'),
    description: t(`Validez votre inscription à ProSolar Academy en réglant les frais d'inscription de ${academy.fee} via Wave.`, `Confirm your ProSolar Academy enrolment by paying the ${academy.fee} registration fee via Wave.`),
    body: `${pageHero({ kickerText: t('Étape 2 sur 3', 'Step 2 of 3'), title: t('Dernière étape : le paiement.', 'Last step: payment.'), lead: t("Votre demande d'inscription est enregistrée. Votre place sera réservée dès réception de votre paiement.", 'Your enrolment request has been recorded. Your place will be reserved as soon as we receive your payment.'), crumbs: [[academy.name, 'prosolar-academy.html'], [t('Paiement', 'Payment')]], actions: false })}
<section class="section">
  <div class="wrap pay-in">
    <div class="card pay-card" data-pay data-wa="${company.whatsapp}" data-session="${esc(academy.nextSession)}">
      <ol class="reg-steps" aria-label="${t("Étapes de l'inscription", 'Enrolment steps')}">
        <li class="is-done"><span>${icon('check')}</span>${t('Vos informations', 'Your details')}</li>
        <li class="is-on" aria-current="step"><span>2</span>${t('Paiement Wave', 'Wave payment')}</li>
        <li><span>3</span>${t('Confirmation', 'Confirmation')}</li>
      </ol>
      <p class="pay-hello" data-hello hidden></p>
      <dl class="pay-sum">
        <div data-ref-row hidden><dt>${t('Votre référence', 'Your reference')}</dt><dd><strong data-ref></strong></dd></div>
        <div><dt>${t('Frais d’inscription à régler', 'Registration fee to pay')}</dt><dd><strong>${academy.fee}</strong></dd></div>
        <div><dt>${t('Coût de la formation (en plus)', 'Programme cost (on top)')}</dt><dd>${academy.cost}</dd></div>
      </dl>
      <a class="btn btn-primary btn-block btn-wave" href="${academy.payUrl}" target="_blank" rel="noopener">${t(`Payer ${academy.fee} avec Wave`, `Pay ${academy.fee} with Wave`)} ${icon('arrow')}</a>
      <ol class="pay-steps">
        <li><span>${t("Cliquez sur <strong>Payer avec Wave</strong> et confirmez le paiement dans l'application Wave.", 'Click <strong>Pay with Wave</strong> and confirm the payment in the Wave app.')}</span></li>
        <li><span>${t("Faites une capture d'écran du reçu de paiement.", 'Take a screenshot of the payment receipt.')}</span></li>
        <li><span>${t('Envoyez-la sur WhatsApp en indiquant votre référence : notre équipe vous confirme votre place.', 'Send it to us on WhatsApp with your reference: our team will confirm your place.')}</span></li>
      </ol>
      <a class="btn btn-outline btn-block" data-pay-wa href="${academyWa()}" target="_blank" rel="noopener">${icon('chat')} ${t('Envoyer mon reçu sur WhatsApp', 'Send my receipt on WhatsApp')}</a>
    </div>
  </div>
</section>`,
  });

  // Contact
  add('contact.html', {
    active: 'contact',
    title: t('Contact et devis', 'Contact and quotes'),
    description: t(
      'Contactez Dieye Solar Group (DSG) à Thiès : devis gratuit pour votre projet solaire, forage, irrigation, électricité ou BTP. Réponse sous 24 h ouvrées.',
      'Contact Dieye Solar Group (DSG) in Thiès: free quote for your solar, borehole, irrigation, electrical or construction project. Reply within 24 working hours.'
    ),
    body: `${pageHero({ kickerText: 'Contact', title: t('Parlons de votre projet.', "Let's talk about your project."), lead: t('Une question, un devis, une visite ? Écrivez-nous : nous vous rappelons sous 24 heures ouvrées.', 'A question, a quote, a site visit? Write to us: we will call you back within 24 working hours.'), crumbs: [['Contact']], actions: false })}
<section class="section" id="devis">
  <div class="wrap contact-in">
    <form class="card quote-form" data-quote novalidate>
      <h2>${t('Demande de devis', 'Quote request')}</h2>
      <p class="form-hint">${t('Les champs marqués * sont obligatoires.', 'Fields marked * are required.')}</p>
      <div class="f-grid">
        <div class="field"><label for="q-name">${t('Nom complet', 'Full name')} *</label><input id="q-name" name="name" autocomplete="name" required></div>
        <div class="field"><label for="q-phone">${t('Téléphone', 'Phone')} *</label><input id="q-phone" name="phone" type="tel" autocomplete="tel" placeholder="77 000 00 00" required></div>
        <div class="field"><label for="q-email">E-mail</label><input id="q-email" name="email" type="email" autocomplete="email"></div>
        <div class="field"><label for="q-city">${t('Ville / localité', 'City / town')} *</label><input id="q-city" name="city" autocomplete="address-level2" required></div>
        <div class="field f-full"><label for="q-need">${t('Votre besoin', 'What you need')} *</label>
          <select id="q-need" name="need" required>
            ${services.map((s) => `<option value="${s.slug}">${esc(s.title)}</option>`).join('')}
            <option value="prosolar-academy">${t('Formation ProSolar Academy', 'ProSolar Academy training')}</option>
            <option value="autre">${t('Autre / je ne sais pas encore', "Other / I'm not sure yet")}</option>
          </select>
        </div>
        <div class="field f-full"><label for="q-msg">${t('Votre message', 'Your message')} *</label><textarea id="q-msg" name="message" rows="5" placeholder="${t('Type de site, facture mensuelle, coupures, débit souhaité…', 'Type of site, monthly bill, power cuts, required flow rate…')}" required></textarea></div>
      </div>
      <p class="form-error" role="alert" hidden>${t('Merci de remplir les champs obligatoires.', 'Please fill in the required fields.')}</p>
      <div class="btn-row">
        <button class="btn btn-primary" type="submit" data-via="whatsapp">${icon('chat')} ${t('Envoyer sur WhatsApp', 'Send via WhatsApp')}</button>
        <button class="btn btn-outline" type="submit" data-via="email">${icon('mail')} ${t('Envoyer par e-mail', 'Send by email')}</button>
      </div>
    </form>
    <aside class="contact-side">
      <ul class="contact-list">
        <li>${icon('phone')}<div><small>${t('Téléphone et WhatsApp', 'Phone and WhatsApp')}</small><a href="tel:${company.phoneHref}">${company.phone}</a></div></li>
        <li>${icon('mail')}<div><small>E-mail</small><a href="mailto:${company.email}">${company.email}</a></div></li>
        <li>${icon('pin')}<div><small>${t('Adresse', 'Address')}</small><span>${company.address}</span></div></li>
        <li>${icon('clock')}<div><small>${t('Horaires', 'Opening hours')}</small><span>${company.hours}</span></div></li>
      </ul>
      <div class="map"><iframe title="${t('Carte : Grand Standing, Thiès', 'Map: Grand Standing, Thiès')}" src="https://www.google.com/maps?q=Grand%20Standing%2C%20Thi%C3%A8s%2C%20S%C3%A9n%C3%A9gal&output=embed&hl=${lang}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    </aside>
  </div>
</section>`,
  });

  // Mentions légales
  add('mentions-legales.html', {
    title: t('Mentions légales', 'Legal notice'),
    description: t('Mentions légales du site de Dieye Solar Group (DSG).', 'Legal notice for the Dieye Solar Group (DSG) website.'),
    body: lang === 'en'
      ? `${pageHero({ title: 'Legal notice', crumbs: [['Legal notice']], actions: false })}
<section class="section">
  <div class="wrap prose">
    <p class="todo">This is a translation provided for information. The <a href="../mentions-legales.html">French version</a> is the reference text.</p>
    <h2>Website publisher</h2>
    <p>${company.legal}, simplified joint-stock company (SAS).<br>Registered office: ${company.address}.<br>Phone: <a href="tel:${company.phoneHref}">${company.phone}</a> · Email: <a href="mailto:${company.email}">${company.email}</a></p>
    <p>Publication director: ${company.owner}, Chairman and CEO.</p>
    <p class="todo">RCCM and NINEA: to be completed.</p>
    <h2>Hosting</h2>
    <p class="todo">Name and address of the cPanel hosting provider: to be completed.</p>
    <h2>Intellectual property</h2>
    <p>The texts, photographs, logos and visual identity of this website belong to ${company.legal} or to their respective owners. The logos of clients, partners and manufacturers are shown to illustrate our references. Any reproduction without permission is prohibited.</p>
    <h2>Personal data</h2>
    <p>The contact and quote form does not store any data on this website: it opens WhatsApp or your email app with your message pre-filled.</p>
    <p>The ProSolar Academy enrolment form stores the information you enter (identity, contact details, profile) on the ${company.legal} server and sends it by email to our team. It is used only to process your enrolment and to contact you about the programme. Payment is made on the Wave platform: no banking data passes through this website.</p>
    <p>The information you send is never sold or passed on to third parties. In accordance with Senegalese law no. 2008-12 on the protection of personal data, you may request access to, correction or deletion of your data by writing to <a href="mailto:${company.email}">${company.email}</a>.</p>
    <h2>Simulator</h2>
    <p>The simulator results are indicative estimates and do not constitute an offer. Only an on-site study allows final sizing and pricing.</p>
  </div>
</section>`
      : `${pageHero({ title: 'Mentions légales', crumbs: [['Mentions légales']], actions: false })}
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
    title: t('Page introuvable', 'Page not found'),
    description: t("Cette page n'existe pas ou a été déplacée.", 'This page does not exist or has been moved.'),
    body: `<section class="section notfound"><div class="wrap">
    ${kicker(t('Erreur 404', 'Error 404'))}
    <h1>${t("Cette page s'est éclipsée.", 'This page has been eclipsed.')}</h1>
    <p class="section-intro">${t("Elle n'existe pas ou a été déplacée. Revenez à l'accueil ou contactez-nous.", 'It does not exist or has been moved. Go back to the home page or contact us.')}</p>
    <div class="btn-row"><a class="btn btn-dark" href="index.html">${t("Retour à l'accueil", 'Back to home')}</a><a class="btn btn-outline" href="contact.html">Contact</a></div>
  </div></section>`,
  });

  return out;
}

let total = 0;
for (const l of ['fr', 'en']) {
  setLang(l);
  const dir = new URL(l === 'fr' ? './public/' : './public/en/', import.meta.url);
  mkdirSync(dir, { recursive: true });
  const pages = buildPages();
  for (const [file, html] of pages) writeFileSync(new URL(file, dir), html);
  total += pages.length;
}

// Le script PHP reprend les réglages de data.mjs (une seule source de vérité)
setLang('fr');
const sessionFr = academy.nextSession;
const amountFr = academy.fee;
const costFr = academy.cost;
setLang('en');
const sessionEn = academy.nextSession;
const amountEn = academy.fee;
const costEn = academy.cost;
setLang('fr');
const php = readFileSync(new URL('./src/inscription.php', import.meta.url), 'utf8')
  .replaceAll('{{EMAIL}}', company.email)
  .replaceAll('{{SESSION}}', sessionFr)
  .replaceAll('{{SESSION_EN}}', sessionEn)
  .replaceAll('{{AMOUNT}}', amountFr)
  .replaceAll('{{AMOUNT_EN}}', amountEn)
  .replaceAll('{{COST}}', costFr)
  .replaceAll('{{COST_EN}}', costEn)
  .replaceAll('{{PAY_URL}}', academy.payUrl)
  .replaceAll('{{WHATSAPP}}', company.whatsapp);
writeFileSync(new URL('./public/inscription.php', import.meta.url), php);

console.log(`${total} pages générées (français dans public/, anglais dans public/en/)`);
