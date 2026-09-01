const data={projects:[],materials:[],workers:[]};
function show(type){
let c=document.getElementById('content');
if(type==='project') c.innerHTML='<div class="card"><h3>Manajemen Project</h3>Input proyek, target, progress, kendala dan dokumentasi.</div>';
if(type==='material') c.innerHTML='<div class="card"><h3>Inventory Material</h3>Material masuk, keluar, stok minimum, opname otomatis.</div>';
if(type==='worker') c.innerHTML='<div class="card"><h3>Tenaga Kerja</h3>Absensi tukang, mandor, upah dan laporan.</div>';
if(type==='report') c.innerHTML='<div class="card"><h3>Laporan WhatsApp</h3><button onclick="wa()">Kirim Laporan</button></div>';
}
function wa(){
let msg=encodeURIComponent('Laporan AyoBangun Contractor: Material dan progress proyek.');
window.open('https://wa.me/?text='+msg);
}
show('project');
