import Link from "next/link";
import { beritaData } from "@/data/beritaData";
import BeritaCard from "@/components/BeritaCard";

export default function HomePage() {
  const latestBerita = beritaData.slice(0, 3);

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* 1. Top Mini Announcement Bar (Mirip Baris Atas Referensi) */}
      <div className="border-b border-slate-100 bg-white py-2 text-center text-xs font-medium text-slate-600 px-4">
        <span className="inline-flex items-center gap-2">
          <span className="text-blue-700 font-bold">✓ Akreditasi A (Unggul)</span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-600">Terdaftar di Kemendikbudristek</span>
          <span className="text-slate-300">|</span>
          <span className="text-blue-700 font-bold">★ Sekolah Penggerak</span>
        </span>
      </div>

      {/* 2. Hero Section dengan Side Photos (Mirip Layout Hero Referensi) */}
      <section className="bg-white py-12 md:py-16 px-4 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sisi Kiri: Foto Kegiatan (2 Stacked Cards) */}
          <div className="hidden lg:flex flex-col gap-4 lg:col-span-3">
            <div className="bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src="/logo-16.png"
                alt="Kegiatan Belajar"
                className="w-full h-40 object-cover"
              />
              <p className="p-2 text-xs font-semibold text-center text-slate-600">Pembelajaran Interaktif</p>
            </div>
            <div className="bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src="/logo-16.png"
                alt="Praktikum Lab"
                className="w-full h-40 object-cover"
              />
              <p className="p-2 text-xs font-semibold text-center text-slate-600">Laboratorium Modern</p>
            </div>
          </div>

          {/* Tengah: Konten Utama Hero */}
          <div className="lg:col-span-6 text-center flex flex-col items-center">
            {/* Pill/Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-900 text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="bg-blue-800 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">Info PPDB</span>
              <span>Pendaftaran Tahun Ajaran 2026/2027 Telah Dibuka</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
              Pendidikan Berkualitas untuk{" "}
              <span className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                Masa Depan Unggul
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl mb-8">
              SMA Negeri 16 Semarang berkomitmen menyelenggarakan pendidikan inovatif untuk mencetak generasi yang berkarakter, berprestasi, dan berwawasan global.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center mb-10">
              <Link
                href="/about"
                className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:from-blue-800 hover:to-indigo-800 transition text-sm flex items-center justify-center gap-2"
              >
                Jelajahi Profil Sekolah
                <span>&rarr;</span>
              </Link>
              <Link
                href="/berita"
                className="bg-white border border-slate-300 text-slate-700 font-bold px-7 py-3.5 rounded-xl hover:bg-slate-50 transition text-sm flex items-center justify-center"
              >
                Kabar Terbaru
              </Link>
            </div>

            {/* Stats Bar (Mirip Baris Logos/Trustpilot) */}
            <div className="pt-6 border-t border-slate-100 w-full grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xl md:text-2xl font-black text-blue-900">500+</p>
                <p className="text-xs text-slate-500 font-medium">Siswa Aktif</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-black text-blue-900">20+</p>
                <p className="text-xs text-slate-500 font-medium">Guru Sertifikasi</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-black text-blue-900">100%</p>
                <p className="text-xs text-slate-500 font-medium">Kelulusan</p>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Foto Kegiatan (2 Stacked Cards) */}
          <div className="hidden lg:flex flex-col gap-4 lg:col-span-3">
            <div className="bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src="/logo-16.png"
                alt="Prestasi Siswa"
                className="w-full h-40 object-cover"
              />
              <p className="p-2 text-xs font-semibold text-center text-slate-600">Ekstrakurikuler & Olahraga</p>
            </div>
            <div className="bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src="/logo-16.png"
                alt="Perpustakaan"
                className="w-full h-40 object-cover"
              />
              <p className="p-2 text-xs font-semibold text-center text-slate-600">Perpustakaan Digital</p>
            </div>
          </div>
        </div>

        {/* 3. Floating Step Box (Mirip Card "Step 1 - Step 2 - Step 3" di Bagian Bawah Gambar) */}
        <div className="max-w-4xl mx-auto mt-12 bg-white rounded-2xl border border-slate-200 shadow-xl p-6">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-blue-800 mb-6">
            Alur Penerimaan Peserta Didik Baru (PPDB)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-900 font-bold flex items-center justify-center mb-3 text-sm">
                1
              </div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">Pendaftaran Online</h4>
              <p className="text-xs text-slate-500">Mengisi formulir data diri & berkas calon siswa.</p>
            </div>
            <div className="flex flex-col items-center relative">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-900 font-bold flex items-center justify-center mb-3 text-sm">
                2
              </div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">Verifikasi Berkas</h4>
              <p className="text-xs text-slate-500">Pemeriksaan kelengkapan dokumen oleh tim seleksi.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-900 font-bold flex items-center justify-center mb-3 text-sm">
                3
              </div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">Hasil & Daftar Ulang</h4>
              <p className="text-xs text-slate-500">Pengumuman kelulusan dan registrasi ulang siswa baru.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sambutan & Informasi Singkat */}
      <section className="py-16 max-w-6xl mx-auto px-4 bg-white">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-blue-800 font-bold text-xs uppercase tracking-widest">Tentang Kami</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 mb-4">
              Membangun Karakter & Potensi Siswa secara Optimal
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4 text-sm">
              SMA Negeri 16 Semarang adalah sekolah menengah atas unggulan di Jawa Tengah yang berdedikasi menciptakan lingkungan belajar kondusif, inovatif, dan berorientasi pada pembentukan karakter peserta didik.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              Didukung oleh tenaga pengajar profesional dan fasilitas pembelajaran modern, kami siap membimbing siswa meraih prestasi akademik maupun non-akademik.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900 mb-4 pb-2 border-b border-slate-100">
              Keunggulan Sekolah
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-bold">✓</span>
                Kurikulum Merdeka Berbasis Projek (P5)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-bold">✓</span>
                Fasilitas Laboratorium IPA, Komputer, & Bahasa Lengkap
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-bold">✓</span>
                Pengembangan Bakat melalui 15+ Ekstrakurikuler
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-bold">✓</span>
                Program Bimbingan Intensif Masuk Perguruan Tinggi
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Berita Terbaru Section */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-blue-800 font-bold text-xs uppercase tracking-widest">Informasi Terbaru</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Kabar & Artikel Sekolah</h2>
            </div>
            <Link href="/berita" className="text-blue-800 font-bold hover:underline text-sm flex items-center gap-1">
              Lihat Semua Berita &rarr;
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {latestBerita.map((item) => (
              <BeritaCard key={item.id} berita={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}