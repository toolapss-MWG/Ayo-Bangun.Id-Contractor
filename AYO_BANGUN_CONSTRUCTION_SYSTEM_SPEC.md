# Ayo Bangun.ID Contractor

Construction Management System berbasis Flutter Android dan Firebase untuk perusahaan kontraktor.

## 1. Gambaran Umum Sistem
Ayo Bangun.ID Contractor mengintegrasikan manajemen proyek konstruksi, sumber daya manusia, material, keuangan, dokumentasi, dan komunikasi stakeholder dalam satu platform.

Tujuan:
- Meningkatkan kontrol proyek
- Mengurangi kesalahan administrasi
- Mempercepat komunikasi lapangan dan kantor
- Menyediakan data real-time untuk keputusan

## 2. User Role dan Hak Akses
- Owner / Direktur: seluruh proyek, laporan keuangan, KPI, keputusan strategis.
- Administrator: user, role, permission, master data.
- Project Manager: proyek, timeline, progress, tim.
- Engineer / Site Supervisor: progress lapangan, laporan, checklist, foto.
- Worker: tugas dan checklist aktivitas.
- Client: progress, dokumen, approval.

## 3. Flow Awal Sistem
User membuka aplikasi -> Firebase Authentication -> membaca profil -> cek role dan permission -> dashboard sesuai hak akses.

## 4. Dashboard Utama
Menampilkan proyek aktif, progress, status pekerjaan, budget, penggunaan material, tenaga kerja, dan notifikasi masalah.

## 5. Project Management
Membuat proyek -> input nama, client, lokasi, kontrak, timeline, tim -> assign PM dan Engineer -> task -> monitoring -> selesai.

## 6. Daily Construction Operation
Supervisor melihat pekerjaan -> inspeksi -> update progress -> upload foto -> checklist kualitas/keselamatan -> Firebase -> PM melihat laporan.

## 7. Inventory Management
Permintaan material -> cek stok -> approval -> warehouse keluar -> digunakan proyek -> stok otomatis berkurang.

Data: material, stok, supplier, harga, lokasi penyimpanan, transaksi.

## 8. Workforce Management
Input pekerja -> assign proyek -> absensi -> monitoring supervisor -> laporan produktivitas.

## 9. Finance Management
Budget -> expense -> approval -> invoice -> payment -> cash flow.

## 10. Document Management
Upload dokumen -> Firebase Storage -> permission -> akses sesuai role.

Dokumen: kontrak, drawing, foto, laporan, sertifikat, invoice.

## 11. Client Portal
Client login -> melihat progress -> dokumentasi -> review -> approval/comment -> feedback kontraktor.

## 12. Database Architecture
Flutter App -> Firebase Authentication -> Firestore Database -> Firebase Storage -> Cloud Messaging.

Collection:
companies, users, roles, projects, tasks, materials, inventory, employees, attendance, expenses, invoices, documents, notifications, audit_logs.

## 13. Security Flow
Login -> authentication verification -> role checking -> permission validation -> company data isolation -> access.

## 14. Overall Business Flow
Marketing mendapatkan proyek -> Admin membuat proyek -> PM mengatur pekerjaan -> Engineer mengontrol lapangan -> Worker bekerja -> Inventory menyediakan material -> Finance mengontrol biaya -> Client memonitor -> selesai -> handover.

## 15. Kesimpulan
Ayo Bangun.ID Contractor adalah Construction ERP ringan yang menghubungkan Project Management, Field Operation, Inventory, Workforce, Finance, Document Control, dan Client Collaboration dalam satu ekosistem digital berbasis Flutter dan Firebase.
