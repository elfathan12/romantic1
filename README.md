# Romantic Digital Love Letter / Gift Website

Website hadiah digital romantis berbasis React + Vite, Tailwind CSS, Framer Motion, dan React Icons. Semua data menggunakan file lokal/dummy data, tanpa database, backend, atau API eksternal.

## Edit Tampilan via Claude

Landing page utama sudah dirangkum ke `src/App.jsx`. Jika ingin meminta Claude AI mengubah tampilan, copy isi `src/App.jsx` sebagai konteks utama. File asset lokal di `src/assets/` dan konfigurasi Tailwind tetap dipakai oleh project.

## Struktur Folder

```txt
src/
  assets/
    images/
      cover.jpg
      photo-1.jpg
      photo-2.jpg
      photo-3.jpg
      photo-4.jpg
    music/
      song.mp3
  components/
    Navbar.jsx
    MusicPlayer.jsx
    FloatingPetals.jsx
    GiftIntro.jsx
    FlowerCard.jsx
    PhotoCard.jsx
    ReasonCard.jsx
  sections/
    Hero.jsx
    LoveLetter.jsx
    FlowerMeaning.jsx
    Gallery.jsx
    Reasons.jsx
    Closing.jsx
  data/
    flowers.js
    gallery.js
    reasons.js
  App.jsx
  main.jsx
  index.css
```

## Install Project

```bash
npm install
```

Dependency utama:

```bash
npm install react react-dom framer-motion react-icons
npm install -D vite @vitejs/plugin-react tailwindcss postcss autoprefixer
```

## Jalankan Project

```bash
npm run dev
```

Lalu buka URL yang muncul di terminal, biasanya `http://localhost:5173`.

## Ganti Gambar

Ganti file di folder `src/assets/images/` dengan nama yang sama:

```txt
cover.jpg
photo-1.jpg
photo-2.jpg
photo-3.jpg
photo-4.jpg
```

Jika ingin menambah foto, tambahkan file baru ke folder tersebut, lalu update `src/data/gallery.js`.

## Ganti Musik

Masukkan file audio kamu ke:

```txt
src/assets/music/song.mp3
```

Gunakan nama file yang sama agar `MusicPlayer.jsx` langsung membaca musik baru. Browser biasanya hanya mengizinkan autoplay setelah user melakukan klik, jadi musik dicoba mulai setelah gift dibuka.

## Build Production

```bash
npm run build
```

Hasil build akan ada di folder `dist/`.

## Preview Build

```bash
npm run preview
```

## Deploy ke Netlify

1. Push project ke GitHub.
2. Di Netlify pilih **Add new site** lalu **Import an existing project**.
3. Build command: `npm run build`.
4. Publish directory: `dist`.
5. Deploy.

## Deploy ke Vercel

1. Push project ke GitHub.
2. Import repository di Vercel.
3. Framework preset: `Vite`.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.
