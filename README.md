# Rbot Blockchain Academy 🚀

Platform pembelajaran interaktif yang dirancang untuk mengajarkan dasar-dasar Kriptografi dan Blockchain dengan pendekatan praktik langsung (*hands-on*). Dibangun dengan teknologi web modern, proyek ini mengusung pengalaman belajar yang *gamified*, lengkap dengan simulasi *coding* interaktif, sistem level, dan antarmuka *glassmorphism* yang elegan.

Berdasarkan inspirasi dari **"Hacking Secret Ciphers with Python - Rbot"**.

***

## ✨ Fitur Utama

- **Modul Pembelajaran Interaktif**: Pelajari berbagai teknik kriptografi mulai dari Reverse Cipher, Caesar Cipher, hingga RSA dan Hashing secara terstruktur.
- **Advanced Coding Lab**: Fitur unggulan berupa terminal/editor simulasi di dalam browser. Pengguna dapat menulis logika, melakukan enkripsi/dekripsi, hingga simulasi serangan *brute-force*.
- **Sistem Gamifikasi & Progres**:
  - **Leveling System**: Naikkan pangkat Anda dari *Script Kiddie* hingga menjadi *Crypto Master*.
  - **Milestone Badges**: Kumpulkan lencana penghargaan (*Recruit*, *Pythonista*, *Code Breaker*, dll) setiap kali menyelesaikan tantangan krusial.
- **Dark / Light Mode**: Tampilan UI modern yang dilengkapi sistem tema dinamis. Didesain secara spesifik menggunakan standar *Eye-Care* (kontras lembut) agar nyaman dibaca berjam-jam.
- **Persistent State**: Progres pembelajaran dan pencapaian lencana Anda tidak akan hilang meskipun halaman di-*refresh* berkat integrasi manajemen *state* lokal.

***

## 🛠️ Teknologi yang Digunakan (Tech Stack)

Proyek ini dikembangkan menggunakan *stack* Full-Stack TypeScript modern:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library UI**: React 19
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) dengan kustomisasi *Glassmorphism*
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Database & ORM**: [Prisma ORM](https://www.prisma.io/) (dengan SQLite untuk *development*)
- **Theme Management**: `next-themes`

***

## 🚀 Memulai Proyek (Getting Started)

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di mesin lokal Anda.

### Persyaratan Sistem

- Node.js (versi 18.x atau yang lebih baru direkomendasikan)
- npm / yarn / pnpm

### Instalasi & Menjalankan

1. **Clone repository** (atau arahkan terminal ke direktori proyek):
   ```bash
   cd rbot-academy
   ```
2. **Install semua dependensi**:
   ```bash
   npm install
   ```
3. **Inisialisasi Database (Prisma)**:
   Pastikan Anda sudah memiliki file `.env` dengan konfigurasi `DATABASE_URL="file:./dev.db"`. Lalu jalankan perintah berikut untuk mensinkronkan skema dan men-generate *client*:
   ```bash
   npx prisma generate
   npx prisma db push
   ```
4. **Jalankan Development Server**:
   ```bash
   npm run dev
   ```
5. **Akses Aplikasi**:
   Buka browser Anda dan navigasikan ke <http://localhost:3000>

***

## 📂 Struktur Direktori Utama

```text
rbot-academy/
├── prisma/                # Konfigurasi skema database Prisma & file SQLite
├── src/
│   ├── app/               # Struktur App Router Next.js (Pages, Layout, API Routes)
│   ├── components/        # Komponen UI Reusable (Sidebar, Header, CodingLab, dll)
│   └── store/             # Global state management menggunakan Zustand
├── public/                # Aset statis (gambar, ikon, dll)
└── package.json           # Konfigurasi dependensi NPM
```

***

## 📜 Kredit

Dikembangkan secara khusus sebagai platform edukasi.
*Kredit referensi materi: "Hacking Secret Ciphers with Python - Rbot"*

