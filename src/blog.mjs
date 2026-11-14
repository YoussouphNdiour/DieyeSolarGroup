// Pages blog DSG — contenu éditorial pour le SEO et les LLM (Claude, ChatGPT, Perplexity).
// Les pages existent sur dsg.sn mais ne sont pas liées depuis le menu principal : elles ramènent
// du trafic organique sans alourdir la navigation. Chaque article porte un Schema.org Article
// + FAQPage et vise un gros gap identifié sur les concurrents sénégalais (voir Lot 2 SEO).

// Les 8 articles sont pensés pour couvrir les 4 principaux gaps :
//   1. Prix détaillé par usage (gap #1)
//   2. Financement (Wave, tontines, leasing)
//   3. Comparatifs matériel (batteries, onduleurs)
//   4. Raccordement Senelec et revente du surplus
// Plus 4 angles où DSG a un avantage différenciant.

export const AUTHOR = {
  name: 'Cheikh Mohamed Dieye',
  role: 'Président Directeur Général · Dieye Solar Group',
  url: 'https://www.dsg.sn/groupe.html',
};

export const articlesFr = [
  // ==========================================================================
  // 1 · PRIX — le roi du trafic organique
  // ==========================================================================
  {
    slug: 'prix-installation-solaire-senegal-2026',
    title: "Combien coûte une installation solaire au Sénégal en 2026 ?",
    excerpt: "Prix réels par type d'usage : maison 3 kWc, villa 11 kWc, entreprise 50 kWc, usine 1 MWc. Avec le coût au kWc, les économies mensuelles et le retour sur investissement.",
    image: 'centrale-1mwc-aerien',
    imageAlt: 'Centrale solaire de 1 MWc installée par Dieye Solar Group à Sandiara, région de Thiès',
    date: '2026-11-15',
    keyword: 'prix installation solaire Sénégal',
    tags: ['tarifs', 'résidentiel', 'industriel', 'guide'],
    related: ['financer-installation-solaire-senegal-wave-leasing-tontine', 'solaire-vs-groupe-electrogene-senegal-comparatif-10-ans', 'batterie-solaire-lithium-plomb-deye-victron-comparatif'],
    sections: [
      { h: "Combien coûte une installation solaire au Sénégal ?", body: "En 2026, le coût d'une installation solaire au Sénégal varie entre <strong>800 000 FCFA pour un petit kit domestique</strong> et <strong>plus de 700 millions de FCFA pour une centrale industrielle de 1 MWc</strong>. Le prix au kWc installé baisse à mesure que la puissance augmente, grâce aux économies d'échelle sur le matériel, le câblage et la main-d'œuvre. Chez Dieye Solar Group, nos devis récents se situent dans ces fourchettes, hors conditions particulières (toiture complexe, site isolé, imports spéciaux)." },
      { h: "Prix par type de projet (fourchettes 2026)", body: "<ul><li><strong>Kit maison 3 kWc + 5 kWh de batterie</strong> : 1,8 à 2,5 millions de FCFA. Couvre éclairage, ventilateurs, télé, frigo moyen.</li><li><strong>Villa 11 kWc + 30 kWh de stockage</strong> : 9 à 13 millions de FCFA. Autonomie quasi-totale, climatisation et piscine comprises.</li><li><strong>Centrale hybride 28 kWc (type mosquée)</strong> : 22 à 28 millions de FCFA. 70 % d'autonomie, 600 000 FCFA d'économies/mois sur Senelec.</li><li><strong>Site agro-industriel 35 kWc avec chambre froide</strong> : 35 à 45 millions de FCFA, ombrière BTP comprise.</li><li><strong>Centrale injection directe 1 MWc</strong> : 550 à 750 millions de FCFA (sans stockage, 7 onduleurs Sungrow 115 kW, raccordement direct).</li></ul>" },
      { h: "Ce qui fait varier le prix", body: "Quatre postes expliquent 80 % des écarts entre devis au Sénégal. <strong>Les panneaux</strong> comptent pour 25-35 % du total : un Canadian Solar bifacial de 630 W coûte plus cher mais produit 8 à 12 % de plus qu'un panneau classique. <strong>Les batteries</strong> pèsent 30-45 % quand on les installe ; une Dyness 10 kWh est deux fois plus chère qu'une batterie plomb équivalente, mais dure 3 à 5 fois plus longtemps. <strong>Les onduleurs</strong> représentent 10-15 % : les hybrides Deye et Sungrow justifient leur prix par la bascule automatique. Enfin, <strong>la main-d'œuvre, le câblage et la structure</strong> représentent 15-25 % — souvent sous-estimés par les installateurs bas de gamme, ce qui se voit après 2 ans." },
      { h: "Combien d'économies sur la facture Senelec ?", body: "Avec un tarif Senelec moyen de 125 FCFA/kWh et une production de 4,8 kWh par kWc et par jour à Thiès, on calcule facilement. Une maison de 3 kWc produit ~14 kWh/jour, soit 420 kWh/mois et <strong>52 500 FCFA économisés chaque mois</strong>. Une villa de 11 kWc produit 1 584 kWh/mois et économise <strong>198 000 FCFA/mois</strong>. La centrale de 28 kWc de la mosquée Abdoulaye Diop à Thiès, posée par DSG en 2025, génère 600 000 FCFA d'économies mensuelles." },
      { h: "Retour sur investissement : 3 à 5 ans", body: "Pour une installation hybride bien dimensionnée au Sénégal, le ROI se situe entre <strong>3 et 5 ans</strong>. Au-delà, la production est quasi gratuite pendant 15 à 20 ans (durée de vie panneaux + onduleur remplacé une fois). Les sites 100 % en autoconsommation sans batterie — comme la centrale de 1 MWc de Sandiara — ont un ROI encore plus court, autour de 3 ans, parce que l'investissement batterie disparaît." },
      { h: "Comment obtenir un prix précis pour votre projet ?", body: "Un prix sérieux ne se donne qu'après une visite technique sur site. Chez DSG, cette visite est gratuite et prend 30 à 45 minutes : relevé des consommations, mesure des surfaces disponibles, vérification du tableau électrique, repérage des contraintes (ombrage, toiture, charges). Nous rédigeons un devis détaillé poste par poste sous 72 heures, valide 30 jours. <a href=\"contact.html#devis\">Demandez votre étude gratuite</a> ou appelez le +221 78 680 31 31." },
    ],
    faq: [
      { q: "Quel est le prix d'un kit solaire pour une maison au Sénégal ?", a: "Un kit solaire résidentiel de 3 kWc avec 5 kWh de stockage coûte entre 1,8 et 2,5 millions de FCFA, pose comprise. Il couvre éclairage, ventilation, télévision, un réfrigérateur et quelques prises. Pour une climatisation, il faut passer à 5-6 kWc minimum." },
      { q: "Combien coûte un panneau solaire au Sénégal ?", a: "Un panneau monocristallin de 550-630 W coûte entre 55 000 et 90 000 FCFA selon la marque et la technologie (bifacial, demi-cellules). Les meilleures marques (Canadian Solar, JA Solar, Longi) sont au-dessus, mais produisent plus et durent 25 ans." },
      { q: "Est-ce rentable d'installer du solaire au Sénégal ?", a: "Oui. Avec un ensoleillement moyen de 5,5 kWh/m²/jour et un tarif Senelec autour de 125 FCFA/kWh, le retour sur investissement se situe entre 3 et 5 ans pour une installation hybride bien dimensionnée, et autour de 3 ans pour l'injection directe industrielle." },
      { q: "Le prix comprend-il la pose et la mise en service ?", a: "Chez Dieye Solar Group oui : nos devis incluent la fourniture, l'installation, le câblage, les protections, la mise à la terre, la mise en service et la formation à l'utilisation. Chaque intervention fait l'objet d'un rapport signé." },
    ],
  },

  // ==========================================================================
  // 2 · FINANCEMENT — Wave, tontines, leasing
  // ==========================================================================
  {
    slug: 'financer-installation-solaire-senegal-wave-leasing-tontine',
    title: 'Comment financer son installation solaire au Sénégal : Wave, leasing, prêt, tontine',
    excerpt: 'Les 5 solutions concrètes pour financer une installation solaire au Sénégal en 2026, avec mensualités réelles, taux et pièces à fournir.',
    image: 'equipe-dsg',
    imageAlt: "L'équipe de Dieye Solar Group en tenue de chantier à Thiès",
    date: '2026-11-15',
    keyword: 'financement installation solaire Sénégal',
    tags: ['financement', 'Wave', 'leasing', 'guide'],
    related: ['prix-installation-solaire-senegal-2026', 'solaire-vs-groupe-electrogene-senegal-comparatif-10-ans', 'devenir-technicien-solaire-senegal-formation-salaire'],
    sections: [
      { h: 'Pourquoi financer plutôt que payer comptant ?', body: "Une installation solaire de 2 à 10 millions de FCFA représente une somme importante à sortir en une fois. Le financement permet de <strong>payer l'installation avec les économies qu'elle génère</strong> : votre ancienne facture Senelec disparaît et finance la mensualité du crédit. Dans la plupart des cas, la mensualité du prêt est inférieure à l'ancienne facture — vous économisez dès le premier mois. Au Sénégal, cinq voies existent." },
      { h: '1. Paiement échelonné chez Dieye Solar Group', body: "Pour les projets de 2 à 15 millions de FCFA, DSG propose un échelonnement en <strong>3 à 6 versements sur 3 à 6 mois</strong> : 40 % au bon de commande, 40 % à la livraison matériel, 20 % à la mise en service. Aucun intérêt, aucun organisme de crédit à solliciter. Cette formule convient aux villas, aux commerces et aux PME qui ont les fonds mais préfèrent ne pas tout immobiliser." },
      { h: '2. Wave — le premier versement pour réserver', body: "Pour les petits kits (moins de 2 millions de FCFA) et les frais d'inscription à ProSolar Academy, <strong>Wave accepte des transferts jusqu'à 1 million FCFA/jour</strong>. Vous payez en plusieurs transferts si besoin, sans frais côté client. C'est la méthode que DSG utilise pour valider les commandes et formaliser un acompte." },
      { h: '3. Prêt bancaire vert', body: "Plusieurs banques sénégalaises proposent des <strong>prêts à l'équipement solaire</strong> à des taux préférentiels : BOA, Ecobank, SGBS, CBAO. Les durées vont de 24 à 60 mois, avec des taux effectifs globaux entre 7 et 12 %/an. Pour une installation de 5 M FCFA sur 36 mois à 9 %, la mensualité est d'environ <strong>159 000 FCFA</strong> — à comparer aux 150 000 à 300 000 FCFA de facture Senelec qu'elle fait disparaître. La Banque Agricole (ex-CNCAS) propose des prêts dédiés aux projets agricoles (pompage solaire, irrigation) à des conditions encore plus favorables." },
      { h: '4. Leasing solaire', body: "Quelques opérateurs proposent un contrat où ils installent et restent propriétaires du matériel pendant 3 à 7 ans. Vous payez un loyer mensuel légèrement inférieur à votre facture Senelec, puis récupérez l'installation en pleine propriété à la fin du contrat. Formule intéressante pour les PME et les lieux de culte qui ne veulent pas porter l'investissement initial. DSG travaille avec plusieurs partenaires leasing — demandez-nous une mise en relation." },
      { h: '5. Tontine solaire et financement collectif', body: "Pour les petites installations rurales et les villages, des <strong>tontines spécifiques</strong> existent : 10 à 20 foyers cotisent chaque mois et chacun à son tour reçoit son kit solaire. La tontine solaire s'inscrit dans la tradition sénégalaise de l'épargne communautaire. Elle est souvent couplée à une formation de techniciens locaux qui assurent la maintenance — ce que ProSolar Academy prépare dès la prochaine session de décembre 2026." },
      { h: 'Quels justificatifs pour obtenir un financement ?', body: "Pour un prêt bancaire : <strong>pièce d'identité, 3 derniers bulletins de salaire ou relevés de compte, 3 derniers relevés Senelec, devis daté et signé par DSG</strong>. La banque veut vérifier que votre mensualité reste inférieure à 33 % de vos revenus. Pour un leasing : seuls le devis et un contrat d'abonnement d'électricité suffisent souvent, sans analyse de solvabilité lourde. Pour l'échelonnement DSG : un simple acompte et une signature de bon de commande." },
    ],
    faq: [
      { q: "Peut-on payer son installation solaire en plusieurs fois au Sénégal ?", a: "Oui. Dieye Solar Group propose un échelonnement en 3 à 6 versements sans intérêt. Les banques sénégalaises proposent aussi des prêts à l'équipement solaire sur 24 à 60 mois à 7-12 %/an. Wave accepte les versements jusqu'à 1 million FCFA/jour." },
      { q: "Quelle banque fait des prêts solaires au Sénégal ?", a: "BOA, Ecobank, SGBS, CBAO et la Banque Agricole (ex-CNCAS) proposent des prêts solaires. La Banque Agricole est particulièrement adaptée aux projets agricoles (pompage, irrigation). DSG peut vous mettre en relation avec un conseiller." },
      { q: "Combien coûte une mensualité de prêt solaire ?", a: "Pour une installation de 5 millions de FCFA sur 36 mois à 9 %/an, la mensualité est d'environ 159 000 FCFA. Comparez-la à votre facture Senelec actuelle : la mensualité est souvent égale ou inférieure, et vous êtes propriétaire au bout de 3 ans." },
    ],
  },

  // ==========================================================================
  // 3 · COMPARATIFS MATÉRIEL
  // ==========================================================================
  {
    slug: 'batterie-solaire-lithium-plomb-deye-victron-comparatif',
    title: 'Batteries lithium vs plomb, onduleurs Deye vs Victron : quel matériel pour votre installation solaire ?',
    excerpt: 'Le vrai comparatif entre les technologies et les marques installées au Sénégal : prix, durée de vie, performances, cas d\'usage. Sans publicité.',
    image: 'local-batteries',
    imageAlt: 'Local technique avec batteries lithium et onduleurs hybrides installés par DSG',
    date: '2026-11-15',
    keyword: 'batterie solaire lithium plomb Sénégal',
    tags: ['matériel', 'batteries', 'onduleurs', 'comparatif'],
    related: ['prix-installation-solaire-senegal-2026', 'solaire-vs-groupe-electrogene-senegal-comparatif-10-ans', 'raccordement-senelec-autoconsommation-revente-surplus-senegal'],
    sections: [
      { h: "Lithium ou plomb : la question qui change tout", body: "Entre une batterie plomb-acide à 400 000 FCFA et une batterie lithium LiFePO4 à 900 000 FCFA pour une capacité équivalente, le choix semble évident. Il ne l'est pas. Une batterie plomb dure <strong>400 à 800 cycles</strong>, soit 2 à 4 ans en usage quotidien. Une batterie lithium LiFePO4 dure <strong>3 000 à 6 000 cycles</strong>, soit 10 à 15 ans. Sur 10 ans, vous remplacez une batterie plomb 3 à 4 fois, contre zéro fois pour une lithium. Le coût total devient équivalent — et le lithium gagne sur la fiabilité, la profondeur de décharge (90 % contre 50 %) et l'encombrement." },
      { h: "Dyness, Pylontech, GSB, BYD : quelle marque lithium ?", body: "Les marques installées au Sénégal se partagent en trois niveaux. <strong>Premium</strong> : BYD, Pylontech, Huawei LUNA2000 — fiables, bien supportées, SAV mondial, 10 ans de garantie. <strong>Équilibré</strong> : Dyness, GSB — très bon rapport qualité/prix, retours terrain positifs après 3 ans d'installations DSG. <strong>Entrée de gamme</strong> : marques génériques chinoises — à éviter sauf pour des usages non critiques. Notre expérience : <strong>Dyness 10 kWh pour les villas</strong> (bon compromis), <strong>BYD pour les sites critiques</strong> (chambres froides, data), <strong>GSB pour les sites secondaires</strong>." },
      { h: "Deye vs Huawei vs Sungrow vs Victron : l'onduleur qui fait la différence", body: "Un onduleur solaire pilote toute l'installation : la bascule réseau/batterie, la régulation de charge, la protection. Une mauvaise marque gâche un bon panneau. <strong>Deye</strong> domine le marché sénégalais résidentiel : hybride, monophasé ou triphasé, 3 à 20 kW, excellent rapport qualité/prix, interface claire, SAV présent. <strong>Huawei</strong> brille sur les installations commerciales et industrielles : onduleurs string SUN2000 très fiables, supervision cloud native. <strong>Sungrow</strong> est le choix industriel par excellence : nos 7 onduleurs 115 kW de la centrale de 1 MWc à Sandiara tournent sans faille. <strong>Victron</strong> reste la référence sites isolés et marine : cher mais ultra-fiable et modulaire." },
      { h: "Panneaux : Canadian Solar, JA Solar, Longi, Felicity", body: "Les trois géants mondiaux — Canadian Solar, JA Solar, Longi — sont largement distribués au Sénégal. Ce sont des références sûres, garanties 12 ans produit et 25 ans production linéaire. Les technologies <strong>monocristalline PERC</strong> et <strong>TOPCon</strong> dominent, avec des rendements de 20 à 22 %. Les panneaux <strong>bifaciaux</strong> (Canadian Solar 630 W par exemple) ajoutent 5 à 15 % de production grâce à la face arrière qui capte la lumière réfléchie — utile en ombrière ou au sol. Felicity Solar est une marque africaine fiable et bien adaptée aux conditions locales (chaleur, poussière). Évitez les marques inconnues avec garanties opaques : la fiabilité à 10 ans n'est pas vérifiable à l'achat." },
      { h: "Le bon réflexe : adapter le matériel au projet", body: "Il n'y a pas de meilleure marque dans l'absolu. Chez DSG, nous combinons : Deye + Dyness + Canadian Solar pour les villas (90 % des cas), Huawei + BYD + Longi pour les sites industriels, Sungrow + Felicity bifaciaux pour les grandes centrales d'injection. Le choix dépend de 4 critères : <strong>criticité du site</strong>, <strong>budget</strong>, <strong>disponibilité du SAV</strong>, <strong>intégration future</strong> (extension prévue, supervision)." },
      { h: "Garanties : ce qu'il faut vérifier", body: "<ul><li>Panneaux : 12 ans produit, 25 ans production linéaire (85 % de puissance garantie à 25 ans).</li><li>Onduleurs hybrides : 5 ans minimum, extensible à 10 ans.</li><li>Batteries lithium : 10 ans ou 6 000 cycles, selon le premier terme atteint.</li><li>Installation DSG : 2 ans main-d'œuvre, pièces d'usure (câbles, protections) couvertes.</li></ul>Exigez des garanties par écrit sur le devis. Les installateurs sérieux documentent chaque pièce avec son numéro de série pour la garantie." },
    ],
    faq: [
      { q: 'Combien de temps dure une batterie lithium solaire ?', a: "Une batterie lithium LiFePO4 de qualité (Dyness, BYD, Pylontech) dure entre 10 et 15 ans, soit 3 000 à 6 000 cycles de charge/décharge. Elle accepte des décharges profondes (jusqu'à 90 %) sans dommage, contrairement au plomb (50 % maximum)." },
      { q: 'Quel est le meilleur onduleur solaire au Sénégal ?', a: "Il n'y a pas de meilleur onduleur universel. Pour le résidentiel : Deye (hybride, 3-12 kW, excellent rapport qualité/prix). Pour l'industriel : Sungrow ou Huawei. Pour les sites isolés critiques : Victron. Chaque marque a ses forces." },
      { q: 'Pourquoi choisir le lithium plutôt que le plomb ?', a: "Le lithium dure 4 à 10 fois plus longtemps, supporte des décharges profondes (90 % vs 50 %), prend 3 à 4 fois moins de place et accepte des courants de charge plus élevés. Sur 10 ans, son coût total devient inférieur au plomb." },
      { q: 'Quelle garantie exiger pour une installation solaire ?', a: "Exigez 12 ans produit et 25 ans production linéaire sur les panneaux, 5 à 10 ans sur l'onduleur, 10 ans sur les batteries lithium, et 2 ans minimum sur la main-d'œuvre. Les numéros de série doivent figurer sur le rapport de mise en service." },
    ],
  },

  // ==========================================================================
  // 4 · SENELEC — raccordement, démarches
  // ==========================================================================
  {
    slug: 'raccordement-senelec-autoconsommation-revente-surplus-senegal',
    title: 'Raccorder son installation solaire à Senelec au Sénégal : autorisations, démarches et revente du surplus',
    excerpt: "Le guide complet 2026 : autoconsommation, injection, démarches Senelec, revente du surplus. Textes de référence et procédures à jour.",
    image: 'hero-centrale-1mwc',
    imageAlt: "Centrale solaire de 1 MWc raccordée en injection directe au réseau Senelec par DSG à Sandiara",
    date: '2026-11-15',
    keyword: 'raccordement Senelec autoconsommation Sénégal',
    tags: ['réglementation', 'Senelec', 'autoconsommation', 'guide'],
    related: ['prix-installation-solaire-senegal-2026', 'batterie-solaire-lithium-plomb-deye-victron-comparatif', 'solaire-vs-groupe-electrogene-senegal-comparatif-10-ans'],
    sections: [
      { h: 'Trois façons de connecter une installation solaire au Sénégal', body: "Au Sénégal, trois configurations existent : <strong>le site isolé</strong> (aucun lien avec Senelec, 100 % solaire + batteries), <strong>l'autoconsommation</strong> (le solaire alimente en priorité, Senelec complète), et <strong>l'injection</strong> (surplus renvoyé sur le réseau). Les démarches administratives ne sont pas les mêmes. Un site isolé ne demande aucune autorisation Senelec. L'autoconsommation et l'injection, oui." },
      { h: "Autoconsommation sans injection : ce qu'il faut faire", body: "C'est 90 % des installations résidentielles et commerciales que DSG pose. Vous consommez l'énergie solaire quand elle est disponible et Senelec prend le relais le reste du temps. La batterie stocke le surplus pour la nuit. Aucun surplus n'est renvoyé au réseau. <strong>Démarches</strong> : une simple <strong>déclaration à Senelec</strong> avec le schéma de l'installation suffit en pratique. L'installation doit respecter les normes CEI (protections différentielles, mise à la terre, anti-îlotage). Pas de contrat spécifique." },
      { h: 'Injection du surplus : la nouvelle donne', body: "Depuis la <strong>loi n° 2021-31</strong> sur le secteur de l'électricité et ses décrets d'application, le Sénégal reconnaît le principe du <em>net metering</em> (compensation de la consommation par la production injectée). La <strong>CRSE</strong> (Commission de Régulation du Secteur de l'Électricité) et <strong>Senelec</strong> encadrent les conditions. Pour injecter, il faut : (1) un <strong>compteur bidirectionnel</strong> fourni par Senelec, (2) un <strong>onduleur certifié</strong> avec fonction anti-îlotage, (3) un <strong>contrat d'autoconsommation avec injection</strong> signé avec Senelec, (4) le <strong>respect des limites de puissance</strong> fixées par la CRSE. Les tarifs de rachat sont en cours d'évolution ; interrogez votre agence Senelec locale." },
      { h: 'Injection directe industrielle : le modèle 1 MWc', body: "Pour les projets industriels à partir de quelques centaines de kWc, l'<strong>injection directe</strong> (sans batterie) est souvent la solution la plus rentable. Toute l'énergie produite est consommée immédiatement par le site, qui réduit d'autant sa consommation Senelec. C'est le modèle de la centrale de 1 MWc de Sandiara posée par DSG en 2026 : 7 onduleurs Sungrow 115 kW, injection directe dans le tableau industriel, 100 % des besoins journaliers de l'usine couverts sans batterie. Le ROI est de l'ordre de 3 ans contre 5 ans avec stockage." },
      { h: 'Autorisations et pièces à fournir', body: "<ul><li><strong>Déclaration Senelec</strong> : courrier à l'agence locale avec schéma unifilaire et puissance installée.</li><li><strong>Attestation de conformité CEI</strong> : délivrée par l'installateur (DSG le fait pour chacun de ses chantiers, avec rapport signé).</li><li><strong>Contrat d'autoconsommation</strong> (si injection) : formulaire Senelec + numéro de compteur + copie CNI du propriétaire.</li><li><strong>Compteur bidirectionnel</strong> : commandé à Senelec, installé sous 2 à 6 semaines selon l'agence.</li></ul>Les projets de forte puissance (>500 kWc) relèvent en plus de l'<strong>ANER</strong> et de la CRSE pour l'instruction technique." },
      { h: 'Qui fait quoi dans votre projet ?', body: "Chez DSG, nous prenons en charge <strong>la totalité du dossier administratif</strong> pour nos clients : rédaction du courrier Senelec, schéma unifilaire, attestation de conformité, dépôt et suivi auprès de l'agence. Nos projets livrés en 2025-2026 ont tous été raccordés sans contentieux. Nous travaillons régulièrement avec les agences Senelec de Thiès, Dakar et Mbour." },
    ],
    faq: [
      { q: "Faut-il une autorisation Senelec pour installer des panneaux solaires ?", a: "Pour un site 100 % isolé (sans lien Senelec), aucune. Pour l'autoconsommation sans injection, une simple déclaration à Senelec avec schéma d'installation suffit. Pour l'injection du surplus, il faut un contrat d'autoconsommation avec injection et un compteur bidirectionnel." },
      { q: "Peut-on revendre son surplus solaire au Sénégal ?", a: "Oui, depuis la loi n° 2021-31 sur le secteur de l'électricité. Le net metering est reconnu : le surplus injecté compense votre consommation sur le réseau. Les conditions pratiques (tarif de rachat, démarche) se négocient avec Senelec via un contrat d'autoconsommation avec injection." },
      { q: "Qu'est-ce que l'anti-îlotage et pourquoi c'est obligatoire ?", a: "L'anti-îlotage est une fonction de sécurité qui coupe l'onduleur solaire si le réseau Senelec tombe. Elle évite qu'une installation solaire continue à injecter sur une ligne Senelec en panne, ce qui tuerait les techniciens intervenant dessus. Tous les onduleurs certifiés CEI 62116 ont cette fonction." },
    ],
  },

  // ==========================================================================
  // 5 · POMPAGE AGRICOLE
  // ==========================================================================
  {
    slug: 'pompage-solaire-agricole-senegal-dimensionnement-cout',
    title: "Pompage solaire agricole au Sénégal : dimensionner, choisir une pompe, coût par hectare",
    excerpt: "Guide pratique pour agriculteurs et maraîchers : volume d'eau nécessaire, type de pompe, puissance solaire, coût au m³ et au hectare.",
    image: 'keur-madaro-pompe',
    imageAlt: 'Pompe solaire 2,2 kW installée par DSG au bord du bassin agricole de Keur Madaro, Thiès',
    date: '2026-11-15',
    keyword: 'pompage solaire agricole Sénégal',
    tags: ['agriculture', 'pompage', 'irrigation', 'guide'],
    related: ['chambre-froide-solaire-senegal-agro-industrie-cout-rentabilite', 'prix-installation-solaire-senegal-2026', 'financer-installation-solaire-senegal-wave-leasing-tontine'],
    sections: [
      { h: "Pourquoi le pompage solaire s'impose au Sénégal", body: "Pour un maraîcher à Keur Madaro, un fermier à Kaolack ou un éleveur en Casamance, le pompage au gasoil représente <strong>20 à 40 % des charges d'exploitation</strong> : 600 à 900 litres de gasoil par mois selon la surface, soit 400 000 à 700 000 FCFA. Le pompage solaire supprime cette dépense. Une fois posé, il ne consomme que le soleil — gratuit et abondant au Sénégal (5,5 kWh/m²/jour en moyenne). Les projets de pompage solaire que DSG pose chaque année dans la région de Thiès ont un retour sur investissement de <strong>2 à 4 ans</strong>, parmi les plus rapides de tous les usages solaires." },
      { h: "Combien d'eau pompe-t-on avec le solaire ?", body: "La production dépend de trois paramètres : la <strong>puissance solaire installée</strong>, la <strong>profondeur de pompage</strong> et le <strong>type de pompe</strong>. Quelques repères utiles au Sénégal : <ul><li><strong>Pompe 1,5 kW à 30 m de profondeur</strong> : 40 à 60 m³/jour. Suffisant pour 1 à 1,5 hectare de maraîchage goutte-à-goutte.</li><li><strong>Pompe 2,2 kW à 40 m (type Keur Madaro)</strong> : 60 à 100 m³/jour. Couvre 2 à 3 hectares ou un bassin de 100 m³.</li><li><strong>Pompe 4 kW à 60 m</strong> : 100 à 160 m³/jour. Petite exploitation de 3 à 5 hectares.</li><li><strong>Pompe 7,5 kW à 80 m</strong> : 200 à 300 m³/jour. Grande exploitation, élevage, forage villageois.</li></ul>Attention : ces volumes correspondent à des journées ensoleillées. Hors saison, comptez 70 à 85 % de ces valeurs." },
      { h: "Les 3 types de pompe solaire", body: "<strong>La pompe immergée centrifuge</strong> est la plus répandue au Sénégal pour les forages de 20 à 100 m : fiable, simple, peu d'entretien. <strong>La pompe de surface</strong> sert pour les puits ouverts et les bassins jusqu'à 7 m de profondeur : installation facile, prix bas. <strong>La pompe à membrane</strong> (ou vis d'Archimède) est utile sur les forages à faible débit et sur les eaux chargées en sable : plus chère, mais plus tolérante aux conditions difficiles." },
      { h: "Dimensionnement : la méthode DSG", body: "Pour dimensionner correctement, on part toujours du <strong>besoin en eau par jour et par culture</strong> : <ul><li>Maraîchage goutte-à-goutte : 30 à 50 m³/ha/jour</li><li>Arboriculture adulte : 20 à 40 m³/ha/jour</li><li>Fourrage irrigué par aspersion : 50 à 80 m³/ha/jour</li><li>Abreuvement de 100 bovins : 5 à 8 m³/jour</li></ul>On ajoute 30 % pour les pertes et les jours moins ensoleillés. On adapte ensuite la puissance de la pompe et du champ solaire. Chez DSG, nous faisons systématiquement un <strong>essai de débit</strong> sur le forage avant de poser la pompe : sans ça, on surdimensionne (gaspillage) ou on sous-dimensionne (sous-production)." },
      { h: "Coût au m³ et au hectare", body: "Un système complet (forage + pompe + variateur + panneaux + structure) coûte entre <strong>3 et 15 millions de FCFA</strong> selon la puissance. Sur 15 ans de durée de vie, le coût au m³ d'eau produite tombe à <strong>10 à 30 FCFA</strong>, contre 150 à 300 FCFA/m³ avec un groupe électrogène (gasoil + entretien + usure). À l'hectare irrigué, l'investissement solaire se situe entre <strong>1,5 et 4 millions de FCFA</strong>, amorti en 2 à 4 saisons." },
      { h: "Stockage de l'eau ou stockage électrique ?", body: "Pour le pompage, nous recommandons presque toujours de <strong>stocker l'eau plutôt que l'électricité</strong> : un réservoir de 20 m³ coûte 10 fois moins cher qu'un banc de batteries équivalent en énergie utile. On pompe la journée, on stocke dans un bassin ou un château d'eau, on distribue à la demande. C'est le principe appliqué à Keur Madaro : pompe + bassin, zéro batterie." },
      { h: "Entretien : quelques heures par an", body: "Une installation de pompage solaire bien posée demande très peu d'entretien : <strong>nettoyage trimestriel des panneaux</strong>, <strong>vérification annuelle du variateur et des protections</strong>, <strong>contrôle biennal de la pompe</strong>. DSG propose des contrats de maintenance pompage à partir de 90 000 FCFA/an, visites et rapports signés inclus." },
    ],
    faq: [
      { q: "Quelle puissance de pompe solaire pour 1 hectare ?", a: "Pour 1 hectare de maraîchage en goutte-à-goutte, comptez 30 à 50 m³/jour, soit une pompe solaire de 1,5 à 2,2 kW à 30-40 m de profondeur, avec un champ solaire de 2 à 3 kWc. Pour l'aspersion ou l'arboriculture, adaptez selon le besoin en eau de la culture." },
      { q: "Combien coûte un pompage solaire au Sénégal ?", a: "Un système complet (forage + pompe + variateur + panneaux + structure) coûte entre 3 et 15 millions de FCFA selon la puissance et la profondeur. Un pompage de 2,2 kW type Keur Madaro revient à environ 5 à 7 millions de FCFA tout compris." },
      { q: "Faut-il des batteries pour un pompage solaire ?", a: "Non, c'est contre-productif. Il est 10 fois plus économique de stocker l'eau dans un bassin ou un château d'eau que de stocker l'électricité dans des batteries. On pompe la journée, on distribue à la demande." },
      { q: "Combien de temps dure une pompe solaire ?", a: "Une pompe immergée de qualité (Lorentz, Grundfos SQF, Mono) dure 10 à 15 ans en usage agricole avec un entretien annuel. Les panneaux dépassent 20 ans. Le variateur se change une fois sur la durée de vie." },
    ],
  },

  // ==========================================================================
  // 6 · CHAMBRES FROIDES SOLAIRES
  // ==========================================================================
  {
    slug: 'chambre-froide-solaire-senegal-agro-industrie-cout-rentabilite',
    title: "Chambre froide solaire au Sénégal : technologie, coût et rentabilité pour l'agro-industrie",
    excerpt: "Alimenter une chambre froide 100 % au solaire est possible et rentable. Le vrai coût, la technologie et le retour sur investissement d'après une installation industrielle réelle à Sandiara.",
    image: 'sandiara-conteneurs',
    imageAlt: 'Chambres froides autonomes alimentées au solaire par DSG à Sandiara, région de Thiès',
    date: '2026-11-15',
    keyword: 'chambre froide solaire Sénégal',
    tags: ['agro-industrie', 'chambre froide', 'rentabilité', 'étude de cas'],
    related: ['pompage-solaire-agricole-senegal-dimensionnement-cout', 'prix-installation-solaire-senegal-2026', 'solaire-vs-groupe-electrogene-senegal-comparatif-10-ans'],
    sections: [
      { h: "Le défi de la chaîne du froid au Sénégal", body: "Au Sénégal, perdre une chambre froide pendant 6 heures suffit à <strong>perdre une marchandise entière</strong> — poisson, viande, légumes, produits laitiers. Or le réseau Senelec subit encore des coupures régulières, particulièrement en zones rurales et péri-urbaines. Beaucoup d'exploitants complètent avec un groupe électrogène, mais le coût du gasoil peut représenter <strong>400 000 à 1 500 000 FCFA par mois</strong> en fonctionnement continu. Le solaire hybride règle les deux problèmes : il sécurise la chaîne du froid et supprime la facture énergétique." },
      { h: "Une installation réelle : Sandiara, 35,5 kWc + 60 kWh", body: "En 2026, DSG a équipé une unité de transformation agro-alimentaire à Sandiara avec deux conteneurs frigorifiques de 40 pieds. Les besoins : maintenir le froid 24 h/24, même en coupure réseau. La solution : une <strong>centrale hybride de 35,5 kWc</strong> posée sur une ombrière métallique construite par les équipes BTP de DSG, couplée à <strong>60 kWh de stockage lithium</strong> et à des onduleurs hybrides. Le site tourne depuis la mise en service sans interruption. La production solaire couvre la journée, les batteries assurent la nuit et les coupures Senelec ne sont plus un sujet." },
      { h: "Comment on calcule le dimensionnement", body: "Pour une chambre froide, on part de la <strong>puissance frigorifique installée</strong> (en kW froid) et du taux d'utilisation des compresseurs. Une chambre froide positive (0 à 5 °C) de 20 m³ consomme en moyenne <strong>3 à 5 kWh/jour par m³</strong>, soit 60 à 100 kWh/jour. Une chambre négative (-18 °C) en consomme 2 à 3 fois plus. On dimensionne le champ solaire pour couvrir 80 à 90 % de la consommation annuelle en autoconsommation, et les batteries pour 10 à 15 heures de secours (une nuit de coupure sans compromettre la chaîne du froid)." },
      { h: "Le coût d'un projet type", body: "Les fourchettes observées sur les projets DSG : <ul><li><strong>Chambre froide positive 20 m³ (restaurant, boucherie)</strong> : 15 à 22 millions de FCFA tout compris.</li><li><strong>Chambre froide 40 m³ pour une unité de transformation</strong> : 25 à 35 millions de FCFA.</li><li><strong>Deux conteneurs 40 pieds (Sandiara, 35,5 kWc + 60 kWh + ombrière BTP)</strong> : 42 à 55 millions de FCFA.</li><li><strong>Site industriel >100 m³ de chambre froide</strong> : à partir de 70 millions de FCFA.</li></ul>" },
      { h: "Retour sur investissement : 3 à 5 ans selon le profil d'usage", body: "Pour un opérateur qui payait 500 000 FCFA/mois en Senelec + gasoil, l'économie est immédiate et totale après installation. À 12 mois de 500 000 FCFA, soit 6 M FCFA/an, une installation de 30 M FCFA est <strong>amortie en 5 ans</strong>. Au-delà, la production est quasi gratuite pour 10 à 15 ans supplémentaires. Pour un site soumis à des coupures fréquentes, le ROI est encore plus court parce qu'on ajoute la valeur de la marchandise sauvée." },
      { h: "Au-delà de l'économie : la qualité de la chaîne du froid", body: "Un bénéfice souvent sous-estimé : le solaire hybride offre une <strong>stabilité de température qu'aucun groupe électrogène ne peut égaler</strong>. Pas de démarrage à froid, pas de coupure même brève, pas de montée de température qui dégrade la marchandise. Pour l'export (crevettes, mangues, poissons fumés), cette stabilité facilite l'obtention des certifications sanitaires et ouvre l'accès aux marchés premium." },
      { h: "DSG, un seul interlocuteur pour tout le projet", body: "Une chambre froide solaire combine <strong>5 métiers</strong> : étude énergétique, panneaux solaires, stockage lithium, électricité industrielle et <strong>BTP</strong> (ombrière, dalle, local technique). DSG réunit ces métiers dans une seule équipe — c'est le principe du projet de Sandiara. Un seul contrat, un seul interlocuteur, un seul chantier." },
    ],
    faq: [
      { q: "Peut-on alimenter une chambre froide 100 % au solaire au Sénégal ?", a: "Oui, à condition de dimensionner correctement le stockage batterie (10 à 15 heures d'autonomie) et de choisir des compresseurs modernes à variateur de vitesse qui lissent la consommation. L'installation de Sandiara posée par DSG en 2026 tourne ainsi sans interruption." },
      { q: "Combien coûte une chambre froide solaire au Sénégal ?", a: "Une petite chambre positive de 20 m³ complète (froid + solaire + batteries) coûte 15 à 22 millions de FCFA. Une unité industrielle avec deux conteneurs 40 pieds est à 42-55 M FCFA tout compris. Le ROI est de 3 à 5 ans selon le profil d'usage." },
      { q: "Quelle autonomie prévoir en cas de coupure réseau ?", a: "Pour une chambre froide critique, nous dimensionnons 10 à 15 heures de secours batterie, soit plus qu'une nuit entière. Au-delà, la production solaire du lendemain prend le relais. Ça couvre 99 % des coupures observées au Sénégal." },
    ],
  },

  // ==========================================================================
  // 7 · DEVENIR TECHNICIEN SOLAIRE (pour ProSolar Academy)
  // ==========================================================================
  {
    slug: 'devenir-technicien-solaire-senegal-formation-salaire',
    title: 'Devenir technicien solaire au Sénégal : parcours, formations certifiantes, salaires 2026',
    excerpt: "Le marché de l'énergie solaire sénégalais recrute. Quelles formations, quelles compétences, quels salaires attendre, et comment décrocher un emploi stable.",
    image: 'formation-prosolar',
    imageAlt: "Apprenants de ProSolar Academy sur une centrale solaire pendant leur formation pratique",
    date: '2026-11-15',
    keyword: 'formation technicien solaire Sénégal',
    tags: ['formation', 'carrière', 'ProSolar Academy', 'emploi'],
    related: ['prix-installation-solaire-senegal-2026', 'financer-installation-solaire-senegal-wave-leasing-tontine', 'batterie-solaire-lithium-plomb-deye-victron-comparatif'],
    sections: [
      { h: "Un métier en pleine croissance au Sénégal", body: "Le marché sénégalais de l'énergie solaire double tous les 3 à 4 ans depuis 2019. Centrales photovoltaïques industrielles, forages agricoles, kits résidentiels, chambres froides agro-alimentaires : la demande explose, mais <strong>la main-d'œuvre qualifiée manque cruellement</strong>. Beaucoup de chantiers sont encore réalisés par des techniciens autodidactes, ce qui explique les pannes à répétition et les sous-performances constatées. Pour les jeunes techniciens et les reconvertis, c'est une opportunité directe : un marché en croissance, peu saturé, et des rémunérations correctes." },
      { h: "Quels profils sont recherchés ?", body: "Deux profils dominent la demande : <strong>le technicien polyvalent</strong> (installation, câblage, mise en service, dépannage), et <strong>l'ingénieur ou technicien supérieur</strong> en charge du dimensionnement, de la supervision et des audits. Entre les deux, le <strong>chef d'équipe chantier</strong> (3 à 5 ans d'expérience) est particulièrement demandé — c'est lui qui transforme un chantier moyen en chantier excellent. Les femmes sont encore peu nombreuses dans le métier : les équipes qui en recrutent (comme DSG) y trouvent un avantage à la fois opérationnel et commercial." },
      { h: "Compétences techniques indispensables", body: "<ul><li>Bases d'électricité (loi d'Ohm, puissance, mise à la terre)</li><li>Lecture de schémas électriques et d'un plan d'installation</li><li>Câblage DC et AC, serrages au couple, protections</li><li>Dimensionnement d'un champ solaire selon la consommation et l'ensoleillement</li><li>Choix de la batterie (lithium vs plomb, capacité utile, profondeur de décharge)</li><li>Configuration d'un onduleur hybride (Deye, Huawei, Sungrow, Victron)</li><li>Mesures à la pince ampèremétrique et au multimètre</li><li>Diagnostic de pannes et lecture d'alarmes onduleurs</li><li>Sécurité : risque électrique, travail en hauteur</li></ul>" },
      { h: "Les formations certifiantes au Sénégal", body: "Trois voies principales : <strong>Les formations initiales</strong> (BTS/DUT énergétique à l'ISEP de Thiès, EPT Thiès, UCAD) — très complètes mais longues (2-3 ans) et difficiles d'accès. <strong>Les formations continues professionnelles</strong> : ProSolar Academy (6 mois, CCP délivré par l'ISEP de Thiès, 300 000 FCFA, 70 % pratique), QualiSolaire Sénégal (6 mois, CFPT Yoff). Ces formations sont accessibles sans diplôme particulier et débouchent sur un certificat reconnu par les employeurs. <strong>La formation sur le terrain</strong>, en alternance ou en stage : utile en complément, insuffisante seule." },
      { h: "Salaires et perspectives en 2026", body: "Les fourchettes observées au Sénégal (hors primes et heures sup) : <ul><li><strong>Technicien junior (0-2 ans)</strong> : 150 000 à 250 000 FCFA/mois</li><li><strong>Technicien confirmé (2-5 ans)</strong> : 250 000 à 400 000 FCFA/mois</li><li><strong>Chef d'équipe chantier</strong> : 400 000 à 600 000 FCFA/mois</li><li><strong>Ingénieur dimensionnement ou chef de projet</strong> : 600 000 à 1 500 000 FCFA/mois</li><li><strong>Entrepreneur installateur (reconversion, après formation)</strong> : revenus variables, souvent au-dessus de l'emploi salarié dès la 2ᵉ année</li></ul>" },
      { h: "Et l'entrepreneuriat solaire ?", body: "C'est l'autre voie, en pleine expansion. Beaucoup d'anciens techniciens créent leur propre entreprise d'installation, souvent en commençant par les villages de leur région d'origine. La demande est là, les clients préfèrent travailler avec des installateurs locaux, les marges sont correctes. ProSolar Academy intègre explicitement un module <strong>Incubation et entrepreneuriat</strong> pour préparer cette voie : business model, offre commerciale, gestion de projet, relation client." },
      { h: "Comment entrer dans le métier maintenant ?", body: "Trois étapes concrètes : <strong>(1) Choisissez une formation sérieuse</strong> — certifiante, avec une part importante de pratique sur vrais équipements. ProSolar Academy fait 70 % de pratique avec panneaux, onduleurs hybrides, batteries lithium, pompes solaires. <strong>(2) Soignez le stage</strong> — 3 mois minimum, idéalement sur plusieurs types de chantiers (résidentiel, industriel, pompage). <strong>(3) Construisez votre portfolio</strong> — photos de vos installations, rapports de mise en service signés, témoignages clients. La prochaine session de ProSolar Academy démarre le <strong>7 décembre 2026</strong> à l'ISEP Abdoulaye Ly de Thiès. <a href=\"prosolar-inscription.html\">Inscription en ligne.</a>" },
    ],
    faq: [
      { q: 'Quelle formation suivre pour devenir installateur solaire au Sénégal ?', a: "Les formations certifiantes reconnues incluent ProSolar Academy (6 mois, CCP délivré par l'ISEP de Thiès, 70 % de pratique, 300 000 FCFA), QualiSolaire Sénégal (6 mois au CFPT Yoff), et les BTS énergétiques de l'ISEP Thiès et de l'EPT. Pour une entrée rapide dans le métier, les formations continues 6 mois sont le meilleur compromis." },
      { q: 'Combien gagne un technicien solaire au Sénégal ?', a: "Un technicien junior débute entre 150 000 et 250 000 FCFA/mois. Après 2-5 ans, un confirmé gagne 250 000 à 400 000 FCFA. Un chef d'équipe atteint 400 000 à 600 000 FCFA. Les ingénieurs dimensionnement ou chefs de projet dépassent souvent le million de FCFA mensuel." },
      { q: "Faut-il un diplôme pour devenir installateur solaire ?", a: "Non, les formations continues comme ProSolar Academy sont accessibles sans prérequis académique. Un BFEM ou une motivation forte suffisent. Les formations techniques initiales (BTS, DUT) sont plus longues mais ouvrent sur des postes d'ingénieur ou de chef de projet." },
      { q: 'Quand commence la prochaine session de ProSolar Academy ?', a: "La prochaine session de ProSolar Academy démarre le 7 décembre 2026 à l'ISEP Abdoulaye Ly de Thiès. 20 places maximum. Inscription en ligne sur dsg.sn/prosolar-inscription.html, frais 100 000 FCFA via Wave, coût de la formation 300 000 FCFA." },
    ],
  },

  // ==========================================================================
  // 8 · SOLAIRE VS GROUPE ÉLECTROGÈNE
  // ==========================================================================
  {
    slug: 'solaire-vs-groupe-electrogene-senegal-comparatif-10-ans',
    title: 'Solaire ou groupe électrogène ? Le vrai comparatif sur 10 ans au Sénégal',
    excerpt: "Investissement, carburant, entretien, bruit, fiabilité. Le calcul complet qui donne tort au groupe électrogène dans 95 % des cas.",
    image: 'mamelles-villa',
    imageAlt: "Villa aux Mamelles à Dakar équipée d'une centrale solaire hybride DSG remplaçant le groupe électrogène",
    date: '2026-11-15',
    keyword: 'solaire vs groupe électrogène Sénégal',
    tags: ['comparatif', 'rentabilité', 'guide'],
    related: ['prix-installation-solaire-senegal-2026', 'financer-installation-solaire-senegal-wave-leasing-tontine', 'batterie-solaire-lithium-plomb-deye-victron-comparatif'],
    sections: [
      { h: "Pourquoi cette comparaison est cruciale au Sénégal", body: "Au Sénégal, des milliers de villas, de PME et d'exploitations fonctionnent avec un groupe électrogène qui démarre à chaque coupure Senelec — plusieurs heures par jour parfois. La facture gasoil représente 30 à 60 % des charges énergétiques totales. Depuis 2022, le solaire hybride avec stockage lithium permet de remplacer complètement le groupe électrogène pour la plupart des usages. Le calcul sur 10 ans donne systématiquement l'avantage au solaire — même en incluant l'investissement initial." },
      { h: "Investissement initial", body: "Pour alimenter une villa consommant 50 kWh/jour pendant les coupures : <ul><li><strong>Groupe électrogène diesel 15 kVA avec coffret de bascule</strong> : 2,5 à 4 millions de FCFA</li><li><strong>Installation solaire hybride 11 kWc avec 30 kWh batteries (villa Mamelles DSG)</strong> : 10 à 13 millions de FCFA</li></ul>Le groupe électrogène semble 3 fois moins cher à l'achat. C'est son seul avantage." },
      { h: "Coût d'exploitation sur 10 ans", body: "Groupe électrogène : <ul><li>Gasoil : 500 à 1 500 L/mois selon usage, soit 400 000 à 1 200 000 FCFA/mois au prix sénégalais (environ 800 FCFA/L)</li><li>Vidanges et pièces : 300 000 à 500 000 FCFA/an</li><li>Réparations majeures : alternateur, culasse, démarreur — comptez 1 à 2 millions FCFA sur 10 ans</li><li>Facture Senelec en complément : non diminuée (le groupe sert seulement en secours)</li></ul>Total 10 ans : <strong>80 à 180 millions de FCFA</strong>. Solaire hybride : <ul><li>Électricité : gratuite (le soleil, 15-20 ans de production)</li><li>Entretien : 100 000 à 200 000 FCFA/an (contrat DSG)</li><li>Remplacement onduleur à l'année 8-10 : 1 à 2 millions FCFA</li><li>Facture Senelec résiduelle : divisée par 5 à 10</li></ul>Total 10 ans : <strong>12 à 18 millions de FCFA</strong>, investissement initial compris." },
      { h: "Le calcul net : 60 à 160 millions FCFA économisés", body: "Sur une période de 10 ans, remplacer un groupe électrogène par une installation solaire hybride économise <strong>60 à 160 millions de FCFA</strong> à l'échelle d'une villa haut de gamme ou d'une petite entreprise. Pour une industrie qui tourne au gasoil 24/7, les économies annuelles peuvent dépasser 100 millions FCFA — c'est ce qui justifie le modèle d'injection directe de la centrale de 1 MWc de Sandiara posée par DSG." },
      { h: "Au-delà du coût : bruit, pollution, fiabilité", body: "Le groupe électrogène a d'autres coûts cachés : <strong>bruit</strong> (90 dB à 7 mètres pour un 15 kVA — insupportable en zone résidentielle), <strong>fumées</strong> (particules fines, NOₓ, dioxyde de soufre), <strong>vibrations</strong>, <strong>risque incendie</strong> (stockage gasoil), <strong>temps de démarrage</strong> (5 à 30 secondes sans transfert automatique), <strong>dépendance au ravitaillement gasoil</strong> en zone rurale. Le solaire hybride est silencieux, propre, démarre instantanément (bascule <20 ms sur les onduleurs modernes) et ne dépend d'aucun approvisionnement." },
      { h: "Dans quels cas garder un groupe électrogène ?", body: "Il reste quelques cas minoritaires : <ul><li><strong>Site industriel >100 kW critique</strong> avec charge très inégale et longue autonomie exigée (24 h+) : le solaire reste pertinent en couverture principale, le groupe en secours ultime.</li><li><strong>Chantier mobile temporaire</strong> : le groupe reste plus pratique pour des durées courtes et des déplacements fréquents.</li><li><strong>Petits besoins ponctuels</strong> (fête, mariage, événement) : location de groupe reste plus simple qu'une installation dédiée.</li></ul>Pour la grande majorité des usages résidentiels et commerciaux sénégalais, le solaire hybride est devenu la bonne réponse." },
      { h: "Faire la transition : par où commencer", body: "Chez DSG, nous accompagnons régulièrement cette transition. La démarche : <strong>audit énergétique</strong> du site (1 heure sur place, gratuit), <strong>dimensionnement</strong> adapté à la consommation réelle, <strong>installation parallèle</strong> (le groupe reste branché pendant les premiers mois comme assurance), puis <strong>démontage définitif</strong> du groupe après 6 mois de confiance. <a href=\"contact.html#devis\">Demandez votre audit.</a>" },
    ],
    faq: [
      { q: "Est-ce que le solaire remplace vraiment le groupe électrogène ?", a: "Oui, dans 95 % des cas. Une installation solaire hybride avec stockage lithium alimente un site même pendant les coupures Senelec, sans bruit ni gasoil. Les 5 % de cas restants concernent des sites industriels très critiques avec longue autonomie exigée (24 h+)." },
      { q: "Combien économise-t-on en remplaçant son groupe par du solaire au Sénégal ?", a: "Sur 10 ans, l'économie se situe entre 60 et 160 millions de FCFA pour une villa haut de gamme ou une petite entreprise, investissement solaire inclus. Pour une industrie qui tourne au gasoil 24/7, les économies annuelles peuvent dépasser 100 M FCFA." },
      { q: "Le solaire est-il aussi fiable qu'un groupe électrogène ?", a: "Il est plus fiable. Un onduleur hybride bascule du réseau à la batterie en moins de 20 millisecondes, imperceptible pour vos équipements. Un groupe met 5 à 30 secondes à démarrer et peut tomber en panne en pleine coupure si la batterie de démarrage est faible." },
      { q: "Faut-il garder son groupe électrogène en complément ?", a: "Non dans la plupart des cas. Pour un usage résidentiel ou PME, le solaire hybride suffit. Pour un site industriel critique, on peut garder le groupe en secours ultime, mais l'utilisation descend à quelques heures par an." },
    ],
  },
];

// Catégories utilisées pour le filtrage du blog
export const categoriesFr = [
  { slug: 'guide', label: 'Guides pratiques' },
  { slug: 'tarifs', label: 'Prix et financement' },
  { slug: 'materiel', label: 'Matériel et marques' },
  { slug: 'reglementation', label: 'Réglementation' },
  { slug: 'agriculture', label: 'Agriculture' },
  { slug: 'formation', label: 'Formation et métier' },
];
