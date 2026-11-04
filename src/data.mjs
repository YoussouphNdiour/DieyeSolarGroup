// Toutes les informations éditables du site DSG sont centralisées ici (version française).
// Les traductions anglaises sont dans data.en.mjs ; setLang() choisit la langue avant chaque page.
import { en } from './data.en.mjs';

const companyFr = {
  name: 'Dieye Solar Group',
  short: 'DSG',
  legal: 'DIEYE SOLAR GROUP SAS',
  slogan: "L'innovation au service de vos projets",
  tagline: 'Une vision globale, des solutions durables.',
  owner: 'Cheikh Mohamed Dieye',
  ownerTitles: [
    'Président Directeur Général de Dieye Solar Group SAS',
    'Enseignant formateur à l\'ISEP de Thiès',
    'Auditeur de centrales photovoltaïques',
  ],
  phone: '+221 78 680 31 31',
  phoneHref: '+221786803131',
  whatsapp: '221786803131',
  email: 'info@dsg.sn',
  address: 'Grand Standing, Thiès, Sénégal',
  city: 'Thiès',
  hours: 'Lundi au vendredi, 8 h – 17 h',
  url: 'https://www.dsg.sn',
};

const servicesFr = [
  {
    slug: 'energie-solaire',
    icon: 'sun',
    title: 'Énergie solaire',
    short: 'Centrales en toiture ou au sol, hybrides avec stockage lithium et bascule automatique en cas de coupure.',
    image: 'mosquee-rangees',
    imageAlt: 'Rangées de panneaux solaires posés par DSG sur le toit de la mosquée Abdoulaye Diop',
    lead: "Produisez votre propre électricité, réduisez durablement votre facture Senelec et ne subissez plus les coupures. Nous concevons des centrales adaptées à votre consommation réelle, pas à un catalogue.",
    offers: [
      ['Centrales en autoconsommation', 'En toiture, au sol ou en ombrière, raccordées à votre installation existante.'],
      ['Systèmes hybrides avec stockage', 'Onduleurs hybrides et batteries lithium : le site reste alimenté pendant les coupures.'],
      ['Sites isolés', 'Solutions autonomes pour les zones sans réseau ou mal desservies.'],
      ['Supervision à distance', 'Suivi de la production et alertes, pour réagir avant la panne.'],
    ],
    audiences: ['Entreprises et industries', 'Agro-industrie et chambres froides', 'Lieux de culte et écoles', 'Villas et résidences'],
    gallery: ['mosquee-panneaux', 'local-batteries', 'mamelles-toiture', 'onduleur-batterie', 'petit-champ-sol', 'local-technique'],
    project: 'centrale-1mwc-sandiara',
  },
  {
    slug: 'forage-pompage-solaire',
    icon: 'drop',
    title: 'Forage et pompage solaire',
    short: "De l'eau fiable, sans gasoil : forage, pompe solaire et stockage pour exploitations, villages et industries.",
    image: 'keur-madaro-pompe',
    imageAlt: 'Pompe solaire installée par DSG au bord du bassin agricole de Keur Madaro',
    lead: "Le soleil pompe votre eau à la place du groupe électrogène. Nous réalisons le forage, dimensionnons la pompe selon votre débit et votre profondeur, et posons le champ solaire qui l'alimente.",
    offers: [
      ['Forage', 'Implantation, foration, équipement et essais de débit.'],
      ['Pompes solaires immergées et de surface', 'Variateurs solaires, protection contre la marche à sec, démarrage progressif.'],
      ['Stockage de l\'eau', 'Bassins, citernes et châteaux d\'eau dimensionnés pour vos besoins.'],
      ['Maintenance', 'Contrôle des pompes, nettoyage des panneaux, suivi du débit.'],
    ],
    audiences: ['Exploitations agricoles', 'Villages et communautés', 'Élevages', 'Sites industriels'],
    gallery: ['forage-jet', 'forage-eau', 'forage-jet-2', 'forage-jet-3', 'pompage-champ-panneaux', 'keur-madaro-bassin'],
    videos: ['forage-foration-1', 'forage-foration-2', 'forage-foration-3', 'pompage-debit', 'pompage-pose-panneaux'],
    project: 'pompage-keur-madaro',
  },
  {
    slug: 'irrigation',
    icon: 'sprout',
    title: "Systèmes d'irrigation",
    short: "Goutte-à-goutte, aspersion et bassins : chaque litre pompé au soleil arrive jusqu'à la plante.",
    image: 'keur-madaro-bassin',
    imageAlt: 'Bassin agricole rempli par une pompe solaire DSG à Keur Madaro',
    lead: "Un bon pompage ne suffit pas : l'eau doit être répartie au bon endroit, au bon moment. Nous concevons le réseau d'irrigation qui va avec votre pompage solaire, de la parcelle familiale au périmètre maraîcher.",
    offers: [
      ['Goutte-à-goutte', 'Économe en eau, adapté au maraîchage et à l\'arboriculture.'],
      ['Aspersion', 'Pour les grandes surfaces et les cultures fourragères.'],
      ['Bassins et réservoirs', 'Bassins bâchés ou maçonnés, citernes et réseaux de distribution.'],
      ['Programmation', 'Vannes et programmateurs pour irriguer aux heures utiles.'],
    ],
    audiences: ['Maraîchers', 'Arboriculteurs', 'Fermes et GIE', 'Projets agricoles'],
    gallery: ['irrigation-raccords', 'irrigation-vannes', 'irrigation-collecteur', 'keur-madaro-pompe', 'keur-madaro-chantier', 'pompage-champ-panneaux'],
    videos: ['pompage-debit'],
    project: 'pompage-keur-madaro',
  },
  {
    slug: 'electricite-generale',
    icon: 'bolt',
    title: 'Électricité générale',
    short: 'Tableaux, câblage, mise à la terre et protections, pour les maisons comme pour les sites industriels.',
    image: 'cablage-tableau',
    imageAlt: 'Technicien DSG en train de câbler un tableau électrique',
    lead: "Une installation solaire n'est fiable que si l'installation électrique qui la reçoit l'est aussi. Nos électriciens réalisent, mettent aux normes et dépannent vos installations, du logement à l'usine.",
    offers: [
      ['Installations neuves', 'Tableaux, distribution, prises, éclairage intérieur et extérieur.'],
      ['Mise aux normes', 'Mise à la terre, protections différentielles et parafoudres.'],
      ['Courant fort industriel', 'Armoires, départs moteurs, compensation et automatismes.'],
      ['Dépannage et diagnostic', 'Recherche de défauts, thermographie et remise en service.'],
    ],
    audiences: ['Particuliers', 'Commerces et bureaux', 'Industries', 'Bâtiments publics'],
    gallery: ['technicienne-onduleur', 'onduleurs-mur', 'sandiara-onduleurs'],
    project: 'chambres-froides-sandiara',
  },
  {
    slug: 'btp',
    icon: 'building',
    title: 'BTP et infrastructures',
    short: "Châteaux d'eau, réseaux, structures et ombrières solaires, locaux techniques.",
    image: 'chateau-eau',
    imageAlt: "Château d'eau construit pour un réseau de distribution",
    lead: "Nos équipes génie civil construisent les ouvrages qui accompagnent l'énergie et l'eau : supports de panneaux, châteaux d'eau, réseaux et locaux techniques. Un seul interlocuteur, du terrassement à la mise en service.",
    offers: [
      ["Châteaux d'eau et réservoirs", 'Ouvrages de stockage et réseaux de distribution d\'eau.'],
      ['Structures et ombrières', 'Charpentes métalliques pour panneaux, au sol ou en ombrière.'],
      ['Locaux techniques', 'Bâtiments pour onduleurs, batteries et équipements.'],
      ['Génie civil', 'Terrassement, fondations, dalles et voiries de chantier.'],
    ],
    audiences: ['Collectivités', 'Agro-industrie', 'Entreprises', 'Projets d\'hydraulique'],
    gallery: ['sandiara-charpente', 'sandiara-ombriere', 'sandiara-site'],
    project: 'chambres-froides-sandiara',
  },
  {
    slug: 'sav-maintenance',
    icon: 'wrench',
    title: 'SAV et maintenance',
    short: 'Nettoyage des panneaux à la brosse, maintenance préventive et curative, entretien de vos installations.',
    image: 'sav-brosse',
    imageAlt: 'Nettoyage de panneaux solaires avec une brosse rotative par un technicien DSG',
    lead: "Une centrale encrassée ou mal entretenue perd de la production chaque jour. Nos techniciens nettoient, contrôlent et dépannent vos installations pour qu'elles gardent leurs performances dans la durée.",
    offers: [
      ['Nettoyage des panneaux', 'Brosse rotative et eau, sans abîmer les modules : la poussière et le sable partent, la production remonte.'],
      ['Maintenance préventive', 'Visites programmées : contrôle des onduleurs, des batteries, des protections et des serrages.'],
      ['Maintenance curative', 'Diagnostic et dépannage rapide en cas de panne, remplacement des équipements défectueux.'],
      ["Contrats d'entretien", 'Un calendrier de passages adapté à votre site, avec un rapport après chaque intervention.'],
    ],
    audiences: ['Centrales solaires et hybrides', 'Entreprises et industries', 'Lieux de culte et écoles', 'Villas et résidences', 'Pompages solaires'],
    gallery: ['sav-nettoyage', 'sav-brosse-toiture', 'sav-nettoyage-mosquee', 'onduleurs-mur', 'local-technique', 'technicienne-onduleur'],
    videos: ['sav-nettoyage-brosse'],
    project: 'mosquee-abdoulaye-diop',
  },
];

const projectsFr = [
  {
    slug: 'centrale-1mwc-sandiara',
    title: 'Centrale solaire photovoltaïque de 1\u00a0MWc à Sandiara',
    shortTitle: 'Centrale de 1\u00a0MWc à Sandiara',
    place: 'Sandiara, région de Thiès',
    year: 2026,
    category: 'Industrie',
    figure: '1',
    unit: 'MWc',
    summary: 'Centrale en injection directe, 7 onduleurs Sungrow de 115 kW, 100 % des besoins journaliers de l\'usine couverts.',
    image: 'centrale-1mwc-aerien',
    gallery: ['hero-centrale-1mwc', 'centrale-1mwc-aerien'],
    specs: [
      ['Puissance', '1 MWc'],
      ['Onduleurs', '7 × Sungrow 115 kW'],
      ['Raccordement', 'Injection directe'],
      ['Autonomie', '100 % des besoins journaliers'],
    ],
    challenge: "Une usine à forte consommation électrique, qui voulait maîtriser ses coûts énergétiques et gagner en autonomie.",
    solution: "Installation d'une centrale solaire photovoltaïque de 1 MWc en injection directe, équipée de 7 onduleurs Sungrow de 115 kW chacun, destinée à couvrir 100 % des besoins énergétiques journaliers de l'usine.",
    result: "Ce projet illustre notre expertise dans la conception et la réalisation de solutions solaires industrielles performantes, qui optimisent les coûts énergétiques et renforcent l'autonomie énergétique de nos clients.",
  },
  {
    slug: 'mosquee-abdoulaye-diop',
    title: 'Mosquée Abdoulaye Diop',
    place: 'ZAC de Thiès',
    year: 2025,
    category: 'Lieu de culte',
    figure: '28,32',
    unit: 'kWc',
    summary: 'Centrale hybride en toiture, 40 kWh de batteries, 70 % d\'autonomie.',
    image: 'mosquee-aerien',
    video: { file: 'mosquee-abdoulaye-diop', poster: 'video-mosquee', duration: '1 min 47 s' },
    gallery: ['mosquee-toiture', 'mosquee-panneaux', 'mosquee-rangees'],
    specs: [
      ['Puissance', '28,32 kWc'],
      ['Panneaux', '48 bifaciaux'],
      ['Stockage', '40 kWh lithium'],
      ['Autonomie', '70 %'],
      ['Économies', '600 000 FCFA / mois'],
    ],
    challenge: "Une mosquée très fréquentée, avec éclairage, ventilation et sonorisation qui tournent à toute heure, et une facture d'électricité qui pesait lourd sur le comité de gestion.",
    solution: '48 panneaux bifaciaux en toiture, des onduleurs hybrides et 40 kWh de batteries lithium. Le soleil couvre la journée, les batteries prennent le relais le soir et pendant les coupures.',
    result: "70 % de l'énergie consommée est désormais produite sur place, soit environ 600 000 FCFA d'économies chaque mois.",
  },
  {
    slug: 'chambres-froides-sandiara',
    title: 'Chambres froides de Sandiara',
    place: 'Sandiara, région de Thiès',
    year: 2026,
    category: 'Agro-industrie',
    figure: '35,5',
    unit: 'kWc',
    summary: 'Deux conteneurs frigorifiques de 40 pieds alimentés au solaire, 60 kWh de stockage.',
    image: 'sandiara-aerien',
    video: { file: 'chambres-froides-sandiara', poster: 'sandiara-conteneurs', duration: '2 min 18 s' },
    gallery: ['sandiara-conteneurs', 'sandiara-charpente', 'sandiara-ombriere', 'sandiara-batteries', 'sandiara-techniciens', 'sandiara-onduleurs'],
    specs: [
      ['Puissance', '35,5 kWc'],
      ['Stockage', '60 kWh lithium'],
      ['Ouvrage', 'Ombrière métallique'],
      ['Équipement', '2 conteneurs de 40 pieds'],
    ],
    challenge: "Garder des produits frais au froid jour et nuit, sur un site où le réseau est instable. Une coupure de quelques heures peut faire perdre une marchandise entière.",
    solution: "Une ombrière métallique construite par nos équipes BTP abrite les deux conteneurs et porte 35,5 kWc de panneaux. Les onduleurs hybrides et 60 kWh de batteries lithium assurent le froid la nuit et pendant les coupures.",
    result: 'Une chaîne du froid alimentée par le soleil, avec un ouvrage qui protège en plus les conteneurs de la chaleur directe.',
  },
  {
    slug: 'villa-mamelles',
    title: 'Villa des Mamelles',
    place: 'Les Mamelles, Dakar',
    year: 2025,
    category: 'Résidentiel',
    figure: '9,99',
    unit: 'kWc',
    summary: 'Installation résidentielle hybride, 30 kWh de batteries, 65 % d\'autonomie.',
    image: 'mamelles-villa',
    gallery: ['mamelles-toiture', 'mamelles-vue'],
    specs: [
      ['Puissance', '9,99 kWc'],
      ['Stockage', '30 kWh lithium'],
      ['Autonomie', '65 %'],
    ],
    challenge: 'Une grande villa avec piscine et climatisation : une consommation élevée et une facture qui ne cessait de grimper.',
    solution: 'Une centrale de 9,99 kWc intégrée à la toiture terrasse, couplée à 30 kWh de batteries lithium pour la soirée et les coupures.',
    result: "65 % d'autonomie : la consommation sur le réseau a fortement baissé et l'installation se rembourse plus vite que prévu.",
  },
  {
    slug: 'pompage-keur-madaro',
    title: 'Pompage solaire de Keur Madaro',
    place: 'Keur Madaro, Thiès',
    year: 2026,
    category: 'Agriculture',
    figure: '2,2',
    unit: 'kW',
    summary: 'Forage et pompe solaire pour le bassin d\'une exploitation agricole.',
    image: 'keur-madaro-bassin',
    gallery: ['keur-madaro-pompe', 'keur-madaro-chantier'],
    specs: [
      ['Pompe', '2,2 kW solaire'],
      ['Ouvrage', 'Forage + bassin'],
      ['Carburant', 'Zéro'],
    ],
    challenge: "Remplir le bassin d'irrigation d'une ferme sans dépendre du gasoil ni d'un raccordement au réseau.",
    solution: 'Un forage équipé d\'une pompe solaire de 2,2 kW et de son variateur, alimentés directement par un champ de panneaux.',
    result: "Le bassin se remplit chaque jour au soleil, sans frais de carburant, et alimente l'irrigation de l'exploitation.",
  },
];

const stepsFr = [
  ['Visite et étude', 'Un technicien vient sur place, relève vos consommations, vos factures et vos contraintes.'],
  ['Dimensionnement et devis', 'Nous calculons la solution juste nécessaire et vous remettons un devis détaillé.'],
  ['Fourniture et installation', 'Matériel de marques reconnues, posé par nos propres équipes.'],
  ['Mise en service et formation', 'Tests, réglages et prise en main de votre installation.'],
  ['Suivi et maintenance', 'Supervision, visites préventives et dépannage rapide.'],
];

const partnersFr = {
  clients: [
    ['senico', 'Senico'],
    ['patisen', 'Patisen'],
    ['terranga-farms', 'Terranga Farms Sénégal'],
    ['grips', 'GRIPS'],
    ['mp-energy', 'MP Energy'],
    ['tumiqui', 'Tumiqui Japon'],
  ],
  partners: [
    ['eranove', 'Eranove'],
    ['felicity', 'Felicity Solar'],
    ['solarx', 'SolarX'],
    ['solarig', 'Solarig'],
    ['infraenergy', 'Infranergy'],
    ['afreenergy', 'Afreenergy'],
    ['deye', 'Deye'],
    ['senelec', 'Senelec'],
    ['aner', 'ANER'],
    ['isep-thies', 'ISEP Thiès'],
  ],
  brands: [
    ['felicity', 'Felicity Solar'],
    ['solarig', 'Solarig'],
    ['deye', 'Deye'],
  ],
};

const academyFr = {
  name: 'ProSolar Academy',
  tagline: 'Centre de formation professionnelle en installation et maintenance de systèmes solaires',
  partner: 'ISEP Abdoulaye Ly de Thiès',
  nextSession: '7 décembre 2026',
  // Frais d'inscription payés via Wave pour valider la place, en plus du coût de la formation (le lien Wave est réglé sur ce montant)
  fee: '100\u00a0000\u00a0FCFA',
  cost: '300\u00a0000\u00a0FCFA',
  // Lien de paiement Wave (montant fixé dans l'URL)
  payUrl: 'https://pay.wave.com/m/M_sn_M3Cuivt2qVb3/c/sn/?amount=100000',
  place: 'ISEP Abdoulaye Ly de Thiès',
  facts: [
    ['6 mois', 'dont 3 mois de cours et 3 mois de stage'],
    ['CCP', "Certificat de Compétence Professionnelle délivré par l'ISEP de Thiès"],
    ['70 %', 'de pratique sur de vrais équipements'],
    ['7 déc.', 'début de la prochaine session'],
  ],
  modules: [
    ['Électricité appliquée', ['Bases de l\'électricité, courant continu et alternatif', 'Tension, courant, puissance et énergie', 'Protections électriques et mise à la terre', 'Câblage, raccordement et lecture de schémas', 'Mesures électriques et multimètre']],
    ['Technologie des systèmes solaires', ['Principe du photovoltaïque, panneaux et caractéristiques', 'Régulateurs MPPT / PWM', 'Batteries et systèmes de stockage', 'Onduleurs off-grid et systèmes hybrides', 'Installation, configuration et mise en service']],
    ['Dimensionnement optimal', ['Analyse des besoins énergétiques', 'Champ photovoltaïque, batteries, onduleurs et protections', 'Câbles et chutes de tension', 'Systèmes de pompage solaire', 'Études de cas et conception complète d\'une installation']],
    ['Incubation et entrepreneuriat', ['Créer et structurer une activité solaire', 'Élaborer une offre commerciale et un devis', 'Gestion de projet et relation client', 'Business model et présentation de projet']],
  ],
  audiences: [
    ['Techniciens en activité', 'qui veulent se spécialiser ou se perfectionner dans le solaire.'],
    ['Électriciens', 'qui souhaitent élargir leurs compétences au photovoltaïque.'],
    ['Étudiants et jeunes diplômés', 'des filières techniques, à la recherche d\'une spécialisation concrète.'],
    ['Entrepreneurs', 'qui veulent se lancer dans la vente ou l\'installation de systèmes solaires.'],
    ['Agriculteurs', 'pour gagner en autonomie sur le diagnostic et l\'entretien de leurs pompes solaires.'],
    ['Personnes en reconversion', 'qui cherchent un métier porteur et générateur de revenus.'],
  ],
};

const fieldPhotosFr = [
  ['equipe-pose', 'Pose de panneaux en toiture par l\'équipe DSG'],
  ['sandiara-techniciens', 'Mise en service des onduleurs à Sandiara'],
  ['champ-solaire', 'Champ solaire au sol vu du ciel'],
  ['technicienne-onduleur', 'Raccordement d\'un onduleur hybride'],
  ['sandiara-charpente', 'Montage de la charpente de l\'ombrière de Sandiara'],
  ['local-onduleurs', 'Local technique : onduleurs et batteries lithium'],
  ['sav-nettoyage-mosquee', 'Nettoyage des panneaux de la mosquée Abdoulaye Diop'],
  ['forage-jet-3', 'Arrivée de l\'eau lors de la foration d\'un forage'],
  ['petit-champ-sol', 'Champ de panneaux au sol'],
];

// Vidéos courtes filmées au téléphone (format vertical)
const clipsFr = {
  'forage-foration-1': { title: 'Foration d\'un forage', duration: '39 s' },
  'forage-foration-2': { title: 'Foration : l\'eau jaillit', duration: '28 s' },
  'forage-foration-3': { title: 'Foration : le forage débite', duration: '16 s' },
  'pompage-debit': { title: 'Pompage : sortie de l\'eau', duration: '18 s' },
  'pompage-pose-panneaux': { title: 'Pose de panneaux au sol', duration: '9 s' },
  'sav-nettoyage-brosse': { title: 'Nettoyage des panneaux à la brosse rotative', duration: '24 s' },
};

// ---------- Langue courante ----------
// Les exports « let » sont des liaisons vivantes : les modules qui les importent voient la langue active.
export let lang = 'fr';
export let company = companyFr;
export let services = servicesFr;
export let projects = projectsFr;
export let steps = stepsFr;
export let partners = partnersFr;
export let academy = academyFr;
export let fieldPhotos = fieldPhotosFr;
export let clips = clipsFr;

/** Texte selon la langue active : t('Bonjour', 'Hello'). */
export const t = (fr, enText) => (lang === 'en' ? enText : fr);

export function setLang(l) {
  lang = l;
  const isEn = l === 'en';
  const pick = (base, tr) => (isEn && tr ? { ...base, ...tr } : base);
  company = pick(companyFr, en.company);
  services = servicesFr.map((s) => pick(s, en.services[s.slug]));
  projects = projectsFr.map((p) => {
    const out = pick(p, en.projects[p.slug]);
    if (isEn && p.video && en.projects[p.slug]?.video) out.video = { ...p.video, ...en.projects[p.slug].video };
    return out;
  });
  steps = isEn ? en.steps : stepsFr;
  partners = isEn
    ? Object.fromEntries(Object.entries(partnersFr).map(([k, list]) => [k, list.map(([f, n]) => [f, en.partnerNames[f] || n])]))
    : partnersFr;
  academy = pick(academyFr, en.academy);
  fieldPhotos = isEn ? fieldPhotosFr.map(([k, a]) => [k, en.fieldPhotos[k] || a]) : fieldPhotosFr;
  clips = isEn ? Object.fromEntries(Object.entries(clipsFr).map(([k, c]) => [k, { ...c, ...en.clips[k] }])) : clipsFr;
}
