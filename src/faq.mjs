// Page FAQ DSG — regroupe 15 questions qui reviennent le plus en avant-vente.
// Rendu : accordéon HTML natif (<details>) pour accessibilité clavier + Schema.org FAQPage
// pour les snippets Google « People also ask ».

export const faqFr = {
  title: 'Questions fréquentes sur le solaire, le pompage et la formation au Sénégal',
  subtitle: 'Les 15 questions qui reviennent le plus souvent avant un chantier. Un sujet manque ? Écrivez-nous — nous mettons cette page à jour.',
  intro: "Ces réponses s'appuient sur nos chantiers réels au Sénégal depuis 2018 — villas, mosquées, usines agro-alimentaires, exploitations agricoles. Pour une étude personnalisée, écrivez-nous sur WhatsApp ou passez par la page contact.",
  groups: [
    {
      title: 'Prix et budget',
      items: [
        { q: 'Combien coûte une installation solaire moyenne au Sénégal ?', a: "Une villa standard de 11 kWc avec stockage lithium coûte entre 9 et 13 millions de FCFA, pose comprise. Un petit kit résidentiel de 3 kWc démarre à 1,8 million de FCFA. Une centrale industrielle à injection directe de 1 MWc, type Sandiara, se situe entre 550 et 750 millions de FCFA. Chaque prix dépend des panneaux (Canadian Solar, JA Solar, Longi), des batteries (Dyness, BYD, Pylontech), des onduleurs (Deye, Huawei, Sungrow) et des contraintes du site. Le détail est dans notre <a href=\"blog-prix-installation-solaire-senegal-2026.html\">guide des prix 2026</a>." },
        { q: "Combien peut-on économiser sur sa facture Senelec ?", a: "Avec un tarif Senelec autour de 125 FCFA/kWh et une production de 4,8 kWh par kWc et par jour à Thiès, une villa de 11 kWc économise environ 198 000 FCFA par mois. Une mosquée de 28 kWc comme celle d'Abdoulaye Diop (Thiès), que nous avons équipée en 2025, économise 600 000 FCFA par mois. Le retour sur investissement se situe entre 3 et 5 ans pour une installation hybride bien dimensionnée." },
        { q: "Peut-on payer en plusieurs fois ?", a: "Oui. Nous proposons un échelonnement sans intérêt en 3 à 6 versements sur 3 à 6 mois : 40 % au bon de commande, 40 % à la livraison, 20 % à la mise en service. Nous orientons aussi vers nos partenaires bancaires (BOA, Ecobank, SGBS, CBAO, Banque Agricole) qui offrent des prêts solaires 24 à 60 mois à 7-12 %/an. Pour les petits montants, Wave est utilisé pour l'acompte. Voir notre <a href=\"blog-financer-installation-solaire-senegal-wave-leasing-tontine.html\">guide du financement</a>." },
      ],
    },
    {
      title: 'Chantier et délais',
      items: [
        { q: "Quel est le délai entre le devis et la mise en service ?", a: "Pour un projet résidentiel ou commercial standard : 3 à 6 semaines après signature du devis et réception de l'acompte. Le temps inclut la commande et le transport du matériel (1 à 3 semaines selon les stocks locaux), l'installation (2 à 5 jours selon la taille) et la mise en service. Pour un projet industriel >100 kWc, comptez 2 à 4 mois : étude détaillée, demandes Senelec, génie civil, livraison du matériel conteneurisé." },
        { q: "Comment se passe la visite technique ?", a: "La visite est gratuite et dure 30 à 45 minutes sur votre site. Nos techniciens relèvent vos consommations (compteur, factures Senelec), mesurent la surface disponible (toiture, dalle, ombrière à construire), vérifient l'état du tableau électrique, repèrent les contraintes (ombrage, charge de toiture, accès). Vous recevez un devis détaillé poste par poste sous 72 heures, valide 30 jours." },
        { q: "DSG intervient-il en zones rurales isolées ?", a: "Oui. Beaucoup de nos projets de pompage solaire sont en zones rurales (Keur Madaro, villages des régions de Thiès et Kaolack). Nous dépêchons nos équipes avec le matériel et la logistique nécessaires, quelle que soit la distance au siège. Pour les sites isolés, nous installons aussi des kits 100 % autonomes (panneaux + batteries, sans Senelec)." },
      ],
    },
    {
      title: 'Garantie et SAV',
      items: [
        { q: "Quelles sont les garanties sur une installation DSG ?", a: "Panneaux : 12 ans produit et 25 ans production linéaire (85 % de puissance garantie à 25 ans). Onduleurs hybrides : 5 ans minimum, extensible à 10 ans. Batteries lithium : 10 ans ou 6 000 cycles. Main-d'œuvre DSG : 2 ans. Toutes les garanties sont écrites sur le devis, avec les numéros de série de chaque équipement sur le rapport de mise en service." },
        { q: "Que faire en cas de panne ?", a: "Appelez notre ligne SAV au +221 78 680 31 31 ou envoyez un message WhatsApp. Nos onduleurs supervisés à distance détectent souvent la panne avant vous — nous vous appelons alors directement. Nos clients sous contrat de maintenance ont un temps d'intervention garanti sous 24 à 72 heures selon la criticité du site. Pour les clients hors contrat, l'intervention est à la demande, facturée au temps passé." },
        { q: "DSG propose-t-il un contrat de maintenance ?", a: "Oui, nos contrats de maintenance démarrent à 90 000 FCFA/an pour une installation résidentielle et couvrent : nettoyage trimestriel des panneaux (brosse rotative douce), vérification annuelle des connexions et serrages, test des batteries, lecture des alarmes onduleurs, rapport signé après chaque intervention. Pour l'industrie, les contrats sont sur mesure." },
      ],
    },
    {
      title: 'Matériel et technique',
      items: [
        { q: "Quel matériel installez-vous ?", a: "Panneaux : Canadian Solar, JA Solar, Longi, Felicity Solar (bifacial 630 W pour l'injection, monocristallin 550-580 W pour le résidentiel). Onduleurs : Deye (hybrides résidentiels 3-20 kW), Huawei (industriels string), Sungrow (centrales >100 kW), Victron (sites isolés critiques). Batteries : Dyness 10 kWh (villas), BYD et Pylontech (sites critiques), GSB (sites secondaires). Le choix se fait selon le projet — voir notre <a href=\"blog-batterie-solaire-lithium-plomb-deye-victron-comparatif.html\">comparatif matériel</a>." },
        { q: "Combien de temps dure une batterie lithium ?", a: "Une batterie LiFePO4 de qualité (Dyness, BYD, Pylontech) dure 10 à 15 ans, soit 3 000 à 6 000 cycles de charge/décharge. Elle accepte des décharges profondes (90 %) sans dommage, contrairement au plomb qui lâche dès 50 %. Sur 10 ans, son coût total est équivalent au plomb — mais avec zéro remplacement à gérer." },
        { q: "L'installation nécessite-t-elle une autorisation administrative ?", a: "Pour un site isolé (sans lien Senelec), aucune démarche. Pour une installation en autoconsommation sans injection sur le réseau, une simple déclaration à Senelec suffit — DSG prépare le courrier et le schéma unifilaire. Pour une installation qui réinjecte du surplus sur le réseau, il faut un contrat d'autoconsommation avec injection et un compteur bidirectionnel Senelec. Nous gérons toutes les démarches pour nos clients. Voir le <a href=\"blog-raccordement-senelec-autoconsommation-revente-surplus-senegal.html\">guide Senelec</a>." },
      ],
    },
    {
      title: 'Formation ProSolar Academy',
      items: [
        { q: "Qui peut suivre la formation ProSolar Academy ?", a: "La formation est ouverte à tous : techniciens en activité, électriciens, étudiants, jeunes diplômés, personnes en reconversion professionnelle, entrepreneurs qui veulent se lancer dans l'installation solaire. Aucun diplôme n'est exigé — seule la motivation compte. 20 places par cohorte." },
        { q: "Combien coûte ProSolar Academy et quand commence la prochaine session ?", a: "La formation coûte 300 000 FCFA pour 6 mois (3 mois de cours + 3 mois de stage et préparation du certificat). Les frais d'inscription sont de 100 000 FCFA en plus du coût, à régler via Wave pour valider la place. La prochaine session démarre le 7 décembre 2026 à l'ISEP Abdoulaye Ly de Thiès. <a href=\"prosolar-inscription.html\">Inscription en ligne</a>." },
        { q: "Quel certificat est délivré à la fin ?", a: "Le Certificat de Compétence Professionnelle (CCP) est délivré par l'ISEP Abdoulaye Ly de Thiès, notre partenaire pédagogique officiel. Ce certificat est reconnu par les employeurs sénégalais du secteur de l'énergie et de l'électricité, et constitue un atout fort pour décrocher un emploi ou lancer son activité d'installateur. Voir le <a href=\"blog-devenir-technicien-solaire-senegal-formation-salaire.html\">parcours technicien solaire</a>." },
      ],
    },
  ],
};

export const faqEn = {
  title: 'Frequently asked questions about solar, pumping and training in Senegal',
  subtitle: 'The 15 questions that come up most often before a project. Something missing? Write to us — we keep this page updated.',
  intro: "These answers are based on our real projects in Senegal since 2018 — villas, mosques, agri-food factories, farms. For a tailored study, message us on WhatsApp or use the contact page.",
  groups: [
    {
      title: 'Price and budget',
      items: [
        { q: 'How much does an average solar installation cost in Senegal?', a: "A standard 11 kWc villa with lithium storage costs between USD 15,000 and 22,000 all-in. A small 3 kWc residential kit starts around USD 3,000. An industrial 1 MWc direct-injection plant, like Sandiara, sits between USD 920,000 and 1,250,000. Each price depends on panels (Canadian Solar, JA Solar, Longi), batteries (Dyness, BYD, Pylontech), inverters (Deye, Huawei, Sungrow) and site constraints. Details in our <a href=\"blog-solar-installation-cost-senegal-2026.html\">2026 pricing guide</a>." },
        { q: "How much can you save on your Senelec bill?", a: "With Senelec rates around 125 FCFA/kWh (~USD 0.21) and 4.8 kWh produced per kWc per day in Thiès, an 11 kWc villa saves about USD 335/month. A 28 kWc mosque like Abdoulaye Diop (Thiès), which we equipped in 2025, saves USD 1,000/month. ROI sits between 3 and 5 years for a well-sized hybrid installation." },
        { q: "Can you pay in instalments?", a: "Yes. We offer interest-free 3- to 6-instalment plans over 3-6 months: 40 % on order, 40 % on equipment delivery, 20 % at commissioning. We also refer clients to banking partners (BOA, Ecobank, SGBS, CBAO, Banque Agricole) that offer 24-60 month solar loans at 7-12 %/year. For small amounts, Wave is used for the deposit. See our <a href=\"blog-financing-solar-installation-senegal-wave-leasing.html\">financing guide</a>." },
      ],
    },
    {
      title: 'Project timeline',
      items: [
        { q: "How long between quote and commissioning?", a: "Standard residential or commercial projects: 3-6 weeks after quote signature and deposit. This includes equipment order and transport (1-3 weeks depending on local stock), installation (2-5 days depending on size) and commissioning. For industrial projects >100 kWc, count 2-4 months: detailed study, Senelec requests, civil works, containerised equipment delivery." },
        { q: "How does the site survey work?", a: "The survey is free and takes 30-45 minutes on site. Our technicians check consumption (meter, Senelec bills), measure available area (roof, slab, canopy to build), verify the breaker panel, scout constraints (shade, roof load, access). You get a detailed line-by-line quote within 72 hours, valid 30 days." },
        { q: "Does DSG operate in remote rural areas?", a: "Yes. Many of our solar pumping projects are in rural zones (Keur Madaro, villages across Thiès and Kaolack regions). We deploy teams with the required equipment and logistics, regardless of distance from HQ. For remote sites we also install 100 % off-grid kits (panels + batteries, no Senelec)." },
      ],
    },
    {
      title: 'Warranty and after-sales',
      items: [
        { q: "What warranties come with a DSG installation?", a: "Panels: 12 years product and 25 years linear production (85 % power guaranteed at 25 years). Hybrid inverters: 5 years minimum, extensible to 10 years. Lithium batteries: 10 years or 6,000 cycles. DSG labour: 2 years. All warranties are written on the quote, with equipment serial numbers listed on the commissioning report." },
        { q: "What should I do if something breaks?", a: "Call our service line at +221 78 680 31 31 or send a WhatsApp message. Remotely supervised inverters often detect a fault before you do — we call you directly then. Maintenance-contract clients have guaranteed response times of 24-72 hours depending on site criticality. Clients without a contract get on-demand service, billed per time spent." },
        { q: "Does DSG offer a maintenance contract?", a: "Yes, our maintenance contracts start at USD 150/year for a residential install and cover: quarterly panel cleaning (soft rotary brush), annual connection and torque checks, battery testing, inverter alarm review, signed report after every visit. Industrial contracts are tailored case by case." },
      ],
    },
    {
      title: 'Equipment and technical',
      items: [
        { q: "What equipment do you install?", a: "Panels: Canadian Solar, JA Solar, Longi, Felicity Solar (bifacial 630 W for injection, monocrystalline 550-580 W for residential). Inverters: Deye (residential hybrids 3-20 kW), Huawei (industrial string), Sungrow (plants >100 kW), Victron (critical off-grid). Batteries: Dyness 10 kWh (villas), BYD and Pylontech (critical sites), GSB (secondary sites). Selection is project-specific — see our <a href=\"blog-solar-battery-lithium-vs-lead-deye-vs-victron-comparison.html\">equipment comparison</a>." },
        { q: "How long does a lithium battery last?", a: "A quality LiFePO4 battery (Dyness, BYD, Pylontech) lasts 10-15 years, i.e. 3,000-6,000 charge/discharge cycles. It accepts deep discharges (90 %) without damage, unlike lead-acid which fails at 50 %. Over 10 years, total cost is equivalent to lead — but with zero replacements to manage." },
        { q: "Do you need administrative approval for a solar installation?", a: "For an off-grid site (no Senelec link), none. For self-consumption without grid injection, a simple Senelec declaration is enough — DSG prepares the letter and single-line diagram. For installations that inject surplus into the grid, you need a self-consumption-with-injection contract and a bidirectional Senelec meter. We handle all admin for our clients. See the <a href=\"blog-senelec-grid-connection-self-consumption-surplus-feed-in-senegal.html\">Senelec guide</a>." },
      ],
    },
    {
      title: 'ProSolar Academy training',
      items: [
        { q: "Who can enrol in ProSolar Academy?", a: "The programme is open to everyone: active technicians, electricians, students, recent graduates, career-switchers, entrepreneurs wanting to launch a solar installation business. No prior degree required — motivation is what counts. 20 seats per cohort." },
        { q: "How much is ProSolar Academy and when is the next session?", a: "The programme costs USD 500 for 6 months (3 months of classes + 3-month internship and certificate preparation). An enrollment fee of USD 170 is payable via Wave on top of the programme cost, to confirm your seat. The next cohort starts 7 December 2026 at ISEP Abdoulaye Ly, Thiès. <a href=\"prosolar-inscription.html\">Enrol online</a>." },
        { q: "What certificate do graduates receive?", a: "The Certificate of Professional Competence (CCP) is issued by ISEP Abdoulaye Ly, Thiès, our official academic partner. It is recognised by Senegalese employers in the energy and electricity sector, and it is a strong asset for landing a job or launching your own installation business. See the <a href=\"blog-become-solar-technician-senegal-training-salary.html\">solar technician path</a>." },
      ],
    },
  ],
};
