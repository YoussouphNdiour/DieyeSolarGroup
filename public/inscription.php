<?php
/*
 * Inscription ProSolar Academy.
 * Enregistre la demande (CSV hors du dossier public), prévient DSG par e-mail,
 * puis renvoie le participant vers la page de paiement Wave.
 * Fichier généré par build.mjs à partir de src/inscription.php : ne pas modifier public/inscription.php.
 */

const NOTIFY_TO = 'info@dsg.sn';
const MAIL_FROM = 'no-reply@dsg.sn';
const SESSION_LABEL = '7 décembre 2026';
const AMOUNT = '100 000 FCFA';
const PAY_URL = 'https://pay.wave.com/m/M_sn_M3Cuivt2qVb3/c/sn/?amount=100000';
const WHATSAPP = '221786803131';

// Sur cPanel le site est dans ~/dsg.sn/ : le fichier est donc écrit dans ~/ (non accessible depuis le web).
define('CSV_FILE', dirname(__DIR__) . '/prosolar-inscriptions.csv');

$wantsJson = strpos($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json') !== false;

function respond($ok, $ref, $prenom, $error, $wantsJson)
{
    if ($wantsJson) {
        http_response_code($ok ? 200 : 422);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['ok' => $ok, 'ref' => $ref, 'error' => $error], JSON_UNESCAPED_UNICODE);
    } elseif ($ok) {
        header('Location: prosolar-inscription-merci.html?ref=' . rawurlencode($ref) . '&prenom=' . rawurlencode($prenom), true, 303);
    } else {
        header('Location: prosolar-inscription.html?erreur=1#inscription', true, 303);
    }
    exit;
}

function clean($value, $max, $multiline = false)
{
    $value = trim((string) $value);
    $value = $multiline
        ? preg_replace('/[^\P{C}\n]+/u', '', str_replace("\r", '', $value))
        : preg_replace('/\p{C}+/u', ' ', $value);
    return mb_substr((string) $value, 0, $max);
}

// Empêche l'interprétation de formules quand le CSV est ouvert dans Excel.
function csvSafe($value)
{
    return preg_match('/^[=+\-@\t]/', $value) ? "'" . $value : $value;
}

function encodeHeader($text)
{
    return '=?UTF-8?B?' . base64_encode($text) . '?=';
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Location: prosolar-inscription.html', true, 303);
    exit;
}

$ref = 'PSA-' . date('ymd') . '-' . strtoupper(bin2hex(random_bytes(2)));

// Anti-spam : champ piège rempli ou formulaire envoyé en moins de 3 secondes.
$ts = (int) ($_POST['ts'] ?? 0);
if (!empty($_POST['website']) || ($ts > 0 && time() - $ts < 3)) {
    respond(true, $ref, '', null, $wantsJson);
}

$limits = [
    'prenom' => 80, 'nom' => 80, 'telephone' => 30, 'email' => 120, 'ville' => 80,
    'profil' => 60, 'niveau' => 60, 'experience' => 60, 'connu' => 60, 'attentes' => 1000,
];
$data = [];
foreach ($limits as $key => $max) {
    $data[$key] = clean($_POST[$key] ?? '', $max, $key === 'attentes');
}

$errors = [];
foreach (['prenom', 'nom', 'telephone', 'ville', 'profil', 'niveau'] as $key) {
    if ($data[$key] === '') {
        $errors[] = $key;
    }
}
if ($data['telephone'] !== '' && !preg_match('/^[0-9 +().\-]{7,20}$/', $data['telephone'])) {
    $errors[] = 'telephone';
}
if ($data['email'] !== '' && !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'email';
}
if (empty($_POST['consent']) || empty($_POST['paiement'])) {
    $errors[] = 'conditions';
}
if ($errors) {
    respond(false, null, '', 'Champs invalides : ' . implode(', ', array_unique($errors)), $wantsJson);
}

$date = date('Y-m-d H:i');
$row = [$date, $ref, SESSION_LABEL, $data['prenom'], $data['nom'], $data['telephone'], $data['email'], $data['ville'],
    $data['profil'], $data['niveau'], $data['experience'], $data['connu'], $data['attentes'], 'En attente du paiement Wave'];

$saved = false;
$isNew = !file_exists(CSV_FILE);
$fh = @fopen(CSV_FILE, 'a');
if ($fh && flock($fh, LOCK_EX)) {
    if ($isNew) {
        fwrite($fh, "\xEF\xBB\xBF");
        fputcsv($fh, ['Date', 'Référence', 'Session', 'Prénom', 'Nom', 'Téléphone', 'E-mail', 'Ville', 'Profil',
            'Niveau', 'Expérience solaire', 'Connu par', 'Attentes', 'Statut'], ';', '"', '');
    }
    $saved = fputcsv($fh, array_map('csvSafe', $row), ';', '"', '') !== false;
    flock($fh, LOCK_UN);
}
if ($fh) {
    fclose($fh);
}
if (!$saved) {
    error_log('ProSolar Academy : impossible d\'écrire ' . CSV_FILE);
}

$lines = [
    'Nouvelle demande d\'inscription à ProSolar Academy',
    '',
    'Référence : ' . $ref,
    'Session : ' . SESSION_LABEL,
    'Date : ' . $date,
    '',
    'Prénom : ' . $data['prenom'],
    'Nom : ' . $data['nom'],
    'Téléphone : ' . $data['telephone'],
    'E-mail : ' . ($data['email'] ?: '-'),
    'Ville : ' . $data['ville'],
    'Profil : ' . $data['profil'],
    'Niveau d\'études : ' . $data['niveau'],
    'Expérience solaire : ' . ($data['experience'] ?: '-'),
    'Connu par : ' . ($data['connu'] ?: '-'),
    'Attentes : ' . ($data['attentes'] ?: '-'),
    '',
    'Statut : en attente du paiement de ' . AMOUNT . ' via Wave.',
    'Le participant doit envoyer son reçu Wave sur WhatsApp en indiquant sa référence.',
];
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'From: ' . encodeHeader('ProSolar Academy') . ' <' . MAIL_FROM . '>',
];
if ($data['email'] !== '') {
    $headers[] = 'Reply-To: ' . $data['email'];
}
$mailed = @mail(NOTIFY_TO, encodeHeader('Inscription ProSolar Academy ' . $ref . ' – ' . $data['prenom'] . ' ' . $data['nom']),
    implode("\n", $lines), implode("\r\n", $headers));

if ($data['email'] !== '') {
    $confirm = [
        'Bonjour ' . $data['prenom'] . ',',
        '',
        'Nous avons bien reçu votre demande d\'inscription à ProSolar Academy (session du ' . SESSION_LABEL . ').',
        'Votre référence : ' . $ref,
        '',
        'Pour valider votre place, réglez ' . AMOUNT . ' via Wave :',
        PAY_URL,
        '',
        'Envoyez ensuite la capture de votre reçu sur WhatsApp au +' . WHATSAPP . ' en indiquant votre référence.',
        '',
        'À bientôt,',
        'ProSolar Academy – Dieye Solar Group',
    ];
    @mail($data['email'], encodeHeader('Votre inscription à ProSolar Academy – ' . $ref), implode("\n", $confirm),
        implode("\r\n", ['MIME-Version: 1.0', 'Content-Type: text/plain; charset=UTF-8', 'Content-Transfer-Encoding: 8bit',
            'From: ' . encodeHeader('ProSolar Academy') . ' <' . MAIL_FROM . '>', 'Reply-To: ' . NOTIFY_TO]));
}

if (!$saved && !$mailed) {
    respond(false, null, '', 'Enregistrement impossible pour le moment.', $wantsJson);
}
respond(true, $ref, $data['prenom'], null, $wantsJson);
