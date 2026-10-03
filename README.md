# raffi-portfolio

Next.js 14 (App Router), React, TypeScript, Tailwind CSS, Framer Motion, Lucide.

## Menjalankan
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # cek build produksi
npm run lint     # cek TypeScript
```
Butuh Node.js 18.17+.

## Mengedit
Semua konten ada di `data/site.ts`:
- **Info kontak & sosial**: objek `profile` (phone, whatsapp, email/Gmail, github, instagram, tiktok, linkedin). Ganti placeholder dengan data asli.
- **Statistik**: `yearsLearning` di `profile`. Projects dan Technologies dihitung otomatis.
- **Project**: tambah objek baru di array `projects`. Isi `demo` dan `source` dengan URL; jika kosong, tombol tampil nonaktif.
- **Skills**: array `skills`. Bar skill dihitung dari jumlah project yang mencantumkan teknologi itu di `tech`, jadi pastikan `tech` tiap project akurat.
- **Pendidikan & layanan**: `education` dan `services`.

## Mengganti foto
File di `public/images/` (placeholder SVG): `profile`, `about`, `project-1` sampai `project-5`.
Simpan foto barumu (mis. `profile.jpg`), lalu ubah path-nya di `sections/Hero.tsx`, `sections/About.tsx`, atau `data/site.ts`. Untuk JPG/PNG/WebP, hapus prop `unoptimized` agar dioptimasi Next.js.

## Mengganti CV
Timpa `public/cv/Raffi-Gani-Jabbaaru-CV.pdf` dengan CV-mu (nama file sama), atau ubah `profile.cv`.

## Kontak
Bagian kontak hanya menampilkan daftar kontak dari `profile` di `data/site.ts`.

## Logo skill
Logo diambil dari CDN Devicon, jadi butuh internet. Tambah skill baru di `data/site.ts` dengan nama ikon dari devicon.dev.

## Deploy
Push ke GitHub lalu import ke Vercel.
