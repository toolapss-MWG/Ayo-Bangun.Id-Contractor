
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

let db=null;
try{
 const appFirebase=initializeApp(firebaseConfig);
 db=getFirestore(appFirebase);
}catch(e){console.log("Firebase belum dikonfigurasi");}

let role="";

window.login=()=>{
 const u=document.getElementById("username").value;
 const p=document.getElementById("password").value;

 if((u==="owner"&&p==="owner123")||
    (u==="admin"&&p==="0000")||
    u.startsWith("mandor")){
   role=u==="owner"?"OWNER":u==="admin"?"ADMIN":"MANDOR";
   document.querySelector(".login").style.display="none";
   document.getElementById("app").style.display="block";
   document.getElementById("roleInfo").innerText="Role: "+role;
   show("project");
 }else{
   document.getElementById("loginStatus").innerText="Login tidak sesuai";
 }
}

window.show=(type)=>{
 const c=document.getElementById("content");
 const modules={
 project:["Project Management","Kelola proyek, progres, lokasi"],
 material:["Material Inventory","Stok material masuk dan keluar"],
 worker:["Tenaga Kerja","Absensi pekerja"],
 finance:["Keuangan","Pemasukan dan pengeluaran"],
 report:["Laporan","Rekap pekerjaan"]
 };
 c.innerHTML=`<div class="item"><h2>${modules[type][0]}</h2><p>${modules[type][1]}</p>
 <button onclick="addData('${type}')">Tambah Data</button></div>`;
}

window.addData=async(type)=>{
 if(db){
   await addDoc(collection(db,type),{
    created:new Date().toISOString(),
    role
   });
   alert("Data tersimpan Firebase");
 }else{
   alert("Firebase belum aktif. Konfigurasi firebase-config.js terlebih dahulu.");
 }
}
