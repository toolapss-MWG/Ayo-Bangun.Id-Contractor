
const users={owner:{p:"owner123",r:"OWNER"},admin:{p:"0000",r:"ADMIN"},mandor1:{p:"1111",r:"MANDOR"}};
let state=JSON.parse(localStorage.ayoBangun||'{"projects":[{"name":"Proyek Utama","lokasi":"","wa":""}],"materials":[],"absensi":[],"progress":[],"kendala":[],"role":null}');
let project=0;
const save=()=>localStorage.ayoBangun=JSON.stringify(state);
window.login=()=>{let u=username.value,p=password.value;if(users[u]&&users[u].p==p){state.role=users[u].r;save();document.querySelector("#login").hidden=true;app.hidden=false;loadProjects();show("project")}else loginStatus.innerText="Login gagal"};
window.logout=()=>location.reload();
function loadProjects(){projectSelect.innerHTML=state.projects.map((x,i)=>`<option value="${i}">${x.name}</option>`).join("")}
window.changeProject=()=>{project=+projectSelect.value};
function canEdit(){return state.role!="MANDOR"}
window.show=(x)=>{let c=document.querySelector("#content");
if(x=="project") c.innerHTML=`<div class=box><h3>Multi Proyek</h3>${state.projects.map((p,i)=>`<p>${p.name} - ${p.lokasi||'-'}</p>`).join("")}<button onclick=addProject()>Tambah</button></div>`;
if(x=="material") c.innerHTML=`<div class=box><h3>Katalog Material</h3><p>Material konstruksi tersimpan lokal: semen, beton, pasir, split, bata, besi, baja ringan, kayu, atap, keramik, sanitair, PVC, listrik, cat dan alat.</p><button onclick=addMaterial()>Tambah Material</button>${state.materials.map(m=>`<p>${m.n} ${m.u}: ${m.v}</p>`).join("")}</div>`;
if(x=="field") c.innerHTML=`<div class=box><h3>Lapangan</h3><button onclick=addAbsensi()>Absensi</button><button onclick=addProgress()>Progress</button><button onclick=addKendala()>Kendala</button></div>`;
if(x=="report") c.innerHTML=`<div class=box><h3>Laporan Harian</h3><button onclick=wa()>Kirim WhatsApp</button></div>`;
if(x=="settings") c.innerHTML=`<div class=box><h3>User & Firebase</h3><p>Role aktif: ${state.role}. Firebase config dapat ditempel pada firebase-config.js.</p></div>`;
};
window.addProject=()=>{state.projects.push({name:"Proyek Baru"});save();loadProjects()};
window.addMaterial=()=>{state.materials.push({n:"Semen",u:"Zak",v:0});save();show("material")};
window.addAbsensi=()=>{state.absensi.push({tgl:new Date().toISOString(),status:"Hadir"});save();alert("Absensi tersimpan")};
window.addProgress=()=>{state.progress.push({target:"",realisasi:"",persen:0});save()};
window.addKendala=()=>{state.kendala.push({status:"Baru",solusi:""});save()};
window.wa=()=>window.open("https://wa.me/?text="+encodeURIComponent("Laporan Ayo Bangun.ID"));
