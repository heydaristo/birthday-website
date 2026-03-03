# 🎀 Happy Birthday Website — Nabilla Dwi Aprillia

> Website ulang tahun interaktif yang dibuat dengan penuh cinta, khusus untuk orang tersayang 💕

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![No Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen?style=for-the-badge)

---

## ✨ Preview

Website ini dibuat sebagai hadiah digital kejutan untuk **Nabilla Dwi Aprillia** di hari ulang tahunnya yang ke-22, 2 April 2026. Dibuat dalam satu file HTML murni tanpa framework atau library eksternal.

---

## 🎯 Fitur-Fitur Utama

| Fitur | Deskripsi |
|---|---|
| 🔒 **Lock Screen + Countdown** | Halaman terkunci dengan hitung mundur otomatis menuju 2 April 2026 |
| 🔑 **Password Owner** | Akses awal dengan password khusus sebelum tanggal tiba |
| 🎊 **Surprise Screen + Confetti** | Layar kejutan dengan animasi konfeti saat halaman dibuka |
| 🎂 **Interactive Birthday Cake** | 22 lilin yang bisa ditiup satu per satu dengan progress bar |
| 💕 **22 Flip Cards** | Kartu berisi 22 alasan sayang yang bisa di-flip |
| ❤️ **Love Meter** | Tombol hati interaktif dengan pesan spesial tiap milestone |
| 🔮 **Love Oracle (Crystal Ball)** | Bola kristal interaktif + deteksi goyangan HP untuk ramalan cinta |
| 📸 **Polaroid Memory Swiper** | Kartu kenangan bergaya polaroid yang bisa di-swipe |
| 🎁 **Gift Box Unboxing** | Hadiah-hadiah kecil yang dibuka satu per satu |
| 🌸 **Sakura Petal Rain** | Hujan kelopak sakura animasi dengan tombol aktivasi |
| ⌨️ **Typewriter Love Letter** | Surat cinta dengan efek ketik otomatis saat di-scroll |
| 🌠 **Wish Wall** | Dinding ucapan yang bisa diisi pengunjung |
| 📅 **Timeline 22 Tahun** | Perjalanan hidup dalam bentuk timeline interaktif |
| 🎵 **Music Player** | Pemutar musik YouTube tersembunyi dengan kontrol play/pause |
| ✨ **Sparkle Trail** | Efek sparkle mengikuti kursor / sentuhan jari |
| 💖 **Floating Hearts** | Hati melayang saat tap/klik layar |

---

## 🚀 Cara Penggunaan

### 1. Clone atau Download

```bash
git clone https://github.com/username/happy-birthday-nabilla.git
```

atau langsung download file `index.html`.

### 2. Buka di Browser

```bash
# Cukup buka file HTML-nya langsung
open index.html
```

> Tidak perlu server, tidak perlu instalasi apapun. Cukup buka di browser modern.

### 3. Kustomisasi

Edit bagian-bagian berikut di dalam file `index.html`:

#### 🔑 Ganti Password Owner
```javascript
const OWNER_PASSWORD = 'nabilla0204'; // Ganti dengan passwordmu
```

#### 📅 Ganti Tanggal Target
```javascript
var target = new Date(2026, 3, 2, 0, 0, 0, 0).getTime(); // Bulan dimulai dari 0 (Januari=0)
```

#### 🖼️ Ganti Foto di Gallery
Cari bagian `.ph-wrap` dan ganti emoji placeholder dengan tag gambar asli:
```html
<!-- Sebelum -->
<div class="ph-wrap">
  <div class="ph-emoji">🤳</div>
</div>

<!-- Sesudah -->
<div class="ph-wrap">
  <img src="foto-kamu.jpg" style="width:100%;height:100%;object-fit:cover">
</div>
```

#### 🎵 Ganti Lagu
Cari YouTube video ID di fungsi `loadYT()` dan ganti dengan ID video pilihanmu:
```javascript
f.src = 'https://www.youtube.com/embed/VIDEO_ID_DISINI?autoplay=1&loop=1&playlist=VIDEO_ID_DISINI';
```

#### 💌 Ganti Isi Surat Cinta
```javascript
var letterContent = [
  '"Tulisan surat cintamu di sini...',
  // dst
];
```

#### 📸 Ganti Kenangan di Memory Swiper
```javascript
var memories = [
  { emoji:'🌅', label:'Deskripsi foto', caption:'Caption romantis', date:'Tanggal / Label' },
  // tambah lebih banyak...
];
```

---

## 🛠️ Teknologi

- **HTML5** — Struktur halaman
- **CSS3** — Animasi, layout, dan desain (Flexbox, Grid, Custom Properties)
- **Vanilla JavaScript** — Semua logika interaktif tanpa framework
- **Google Fonts** — `Playfair Display` & `Quicksand`
- **YouTube IFrame API** — Untuk pemutar musik latar
- **Canvas API** — Konfeti & animasi kelopak sakura
- **Web Vibration API** — Haptic feedback di perangkat mobile
- **DeviceMotion API** — Deteksi goyangan HP untuk Love Oracle
- **IntersectionObserver API** — Scroll reveal & trigger typewriter

---

## 📁 Struktur File

```
happy-birthday-nabilla/
│
├── index.html          # File utama (semua-dalam-satu)
├── README.md           # Dokumentasi ini
└── assets/             # (Opsional) folder foto & aset tambahan
    ├── foto-1.jpg
    ├── foto-2.jpg
    └── ...
```

---

## 📱 Kompatibilitas

| Platform | Status |
|---|---|
| Chrome (Desktop) | ✅ Full support |
| Firefox (Desktop) | ✅ Full support |
| Safari (Desktop) | ✅ Full support |
| Chrome (Android) | ✅ Full support + haptic |
| Safari (iOS) | ✅ Full support |
| Samsung Internet | ✅ Full support |

> ⚠️ **Catatan:** Autoplay musik mungkin diblokir browser tanpa interaksi pengguna terlebih dahulu. Ini adalah batasan browser, bukan bug.

---

## 🎨 Kustomisasi Warna

Ubah variabel CSS di bagian `:root` untuk mengganti tema warna:

```css
:root {
  --pink: #f472b6;        /* Warna utama pink */
  --light-pink: #fce7f3;  /* Pink muda untuk background */
  --lavender: #e9d5ff;    /* Ungu lavender */
  --purple: #c084fc;      /* Ungu utama */
  --dark-pink: #db2777;   /* Pink gelap untuk teks */
  --text: #5b2333;        /* Warna teks utama */
}
```

---

## 💡 Tips

- **Deploy ke GitHub Pages** untuk berbagi link yang mudah: `Settings → Pages → Deploy from branch`
- **Tambah foto asli** untuk membuat website jauh lebih personal dan berkesan
- **Gunakan Netlify / Vercel** untuk deploy yang lebih cepat dan mendukung HTTPS
- **Test di HP terlebih dahulu** — website ini dioptimalkan untuk mobile

---

## 📄 Lisensi

Dibuat dengan 💕 untuk keperluan pribadi. Bebas dimodifikasi dan digunakan untuk membuat website ulang tahun untuk orang tersayangmu sendiri.

---

<p align="center">Made with ❤️ and a lot of love · 2 April 2026</p>
