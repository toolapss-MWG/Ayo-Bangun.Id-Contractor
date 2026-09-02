import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore,collection,addDoc,getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const appFirebase=initializeApp(firebaseConfig);
const db=getFirestore(appFirebase);
let role='';

window.login=()=>{
 let u=document.getElementById('username').value;
 let p=document.getElementById('password').value;
 if((u==='owner'&&p==='owner123')||(u==='admin'&&p==='0000')||u.startsWith('mandor')){
 role=u==='owner'?'OWNER':u==='admin'?'ADMIN':'MANDOR';
 document.querySelector('.login').style.display='none';
 document.getElementById('app').style.display='block';
 show('project');
 }else document.getElementById('loginStatus').innerHTML='Login tidak sesuai';
}

window.show=async(type)=>{
 const c=document.getElementById('content');
 if(type==='project') c.innerHTML=`<div class="item"><h3>Project Management</h3><p>Tambah project, target pekerjaan, nilai proyek, lokasi dan dokumentasi.</p><button onclick="addProject()">Tambah Project</button></div>`;
 if(type==='material') c.innerHTML=`<div class="item"><h3>Master Material</h3><p>Semen, pasir, split, besi, bata, hebel, keramik, cat, plumbing, electrical dan finishing.</p><button onclick="addMaterial()">Input Material</button></div>`;
 if(type==='attendance') c.innerHTML=`<div class="item"><h3>Absensi Tenaga Kerja</h3><p>Mandor dapat input dan seluruh user dapat edit sesuai hak akses.</p></div>`;
 if(type==='progress') c.innerHTML=`<div class="item"><h3>Progress Pekerjaan</h3><p>Target harian, realisasi, kendala dan foto lapangan.</p></div>`;
 if(type==='report') c.innerHTML=`<div class="item"><h3>Laporan WhatsApp</h3><button onclick="wa()">Kirim WhatsApp</button></div>`;
}
window.addProject=async()=>{await addDoc(collection(db,'projects'),{name:'Project Baru',created:new Date()});alert('Project tersimpan Firebase')}
window.addMaterial=async()=>{await addDoc(collection(db,'materials'),{name:'Semen',unit:'Zak',volume:0});alert('Material tersimpan')}
window.wa=()=>window.open('https://wa.me/?text=Laporan%20Ayo%20Bangun.ID%20Contractor');
