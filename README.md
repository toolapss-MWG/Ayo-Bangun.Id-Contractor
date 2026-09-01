<!doctype html>
<html lang="id">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>AyoBangun Contractor</title>
<link rel="manifest" href="manifest.json"><link rel="stylesheet" href="styles.css">
</head>
<body>
<header><img src="assets/logo-ayo-bangun.jpeg"><div><h1>AyoBangun Contractor</h1><p>Construction Project Management</p></div></header>
<main>
<section class="grid">
<div class="card"><h3>Dashboard Proyek</h3><p id="project">0 Proyek Aktif</p></div>
<div class="card"><h3>Material Kritis</h3><p id="stock">Belum ada data</p></div>
<div class="card"><h3>Tenaga Hari Ini</h3><p id="worker">0 Orang</p></div>
<div class="card"><h3>Progress</h3><p id="progress">0%</p></div>
</section>
<section class="card"><h2>Menu Utama</h2>
<button onclick="addProject()">+ Project</button>
<button onclick="addMaterial()">Material Masuk/Keluar</button>
<button onclick="addAttendance()">Absensi Tukang</button>
<button onclick="reportWA()">Laporan WhatsApp</button>
</section>
<section class="card"><h2>Catatan Proyek</h2><textarea id="notes" placeholder="Kendala lapangan, target, pekerjaan harian"></textarea></section>
</main>
<nav>Dashboard | Project | Material | Pekerja | Laporan | Admin</nav>
<script src="firebase-config.js"></script><script src="app.js"></script>
</body></html>
