"use client";

import { useState } from "react";

export default function KontakPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    subjek: "Informasi Umum",
    pesan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset formulir setelah dikirim
    setFormData({
      nama: "",
      email: "",
      telepon: "",
      subjek: "Informasi Umum",
      pesan: "",
    });
  };

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-14 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          Hubungi SMAN 16 Semarang
        </h1>
        <p className="text-blue-100 text-sm md:text-base max-w-2xl mx-auto">
          Punya pertanyaan seputar PPDB, kegiatan akademik, atau informasi sekolah? Tim kami siap membantu Anda.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Kartu Ringkasan Informasi Kontak */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Alamat */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center font-bold text-lg mb-4 border border-blue-100">
              📍
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Alamat Sekolah</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Jl. Raya Ngadirgo (Jl. Ngadirgo Tengah), Kelurahan Ngadirgo, Kecamatan Mijen, Kota Semarang, Jawa Tengah
            </p>
          </div>

          {/* Telepon & WhatsApp */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center font-bold text-lg mb-4 border border-blue-100">
              📞
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Kontak & Whatsapp</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-1">
              Telepon: (081) 1274 0409
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              WhatsApp Humas: +62 811-2740-409
            </p>
          </div>

          {/* Email & Jam Layanan */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center font-bold text-lg mb-4 border border-blue-100">
              ✉️
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Email & Jam Kerja</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-1">
              sman16smg@gmail.com
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Senin - Jumat: 07.00 - 15.30 WIB
            </p>
          </div>
        </div>

        {/* Section Formulir & Peta */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Kirim Pesan */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Kirim Pesan
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Isi formulir di bawah ini dan kami akan membalas pertanyaan Anda melalui email atau telepon.
            </p>

            {submitted && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs md:text-sm rounded-xl font-medium flex items-center gap-2">
                <span>✓</span> Pesan Anda berhasil terkirim! Terima kasih telah menghubungi SMAN 16 Semarang.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nama"
                    required
                    value={formData.nama}
                    onChange={handleChange}
                    placeholder="Masukkan nama Anda"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nomor Telepon / WA <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="telepon"
                    required
                    value={formData.telepon}
                    onChange={handleChange}
                    placeholder="08xxxxxxxxxx"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Alamat Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="contoh@email.com"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Kategori Pertanyaan
                </label>
                <select
                  name="subjek"
                  value={formData.subjek}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800 transition"
                >
                  <option value="Informasi Umum">Informasi Umum</option>
                  <option value="Informasi PPDB">Informasi PPDB (Penerimaan Siswa Baru)</option>
                  <option value="Akademik & Kurikulum">Akademik & Kurikulum</option>
                  <option value="Kerja Sama & Kemitraan">Kerja Sama & Kemitraan</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Pesan Anda <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="pesan"
                  rows={4}
                  required
                  value={formData.pesan}
                  onChange={handleChange}
                  placeholder="Tuliskan pertanyaan atau pesan Anda di sini..."
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white font-bold text-xs py-3 rounded-xl hover:bg-blue-800 transition shadow-md"
              >
                Kirim Pesan Sekarang
              </button>
            </form>
          </div>

          {/* Lokasi Google Maps */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                Peta Lokasi SMAN 16 Semarang
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Terhubung langsung dengan Google Maps untuk navigasi lokasi ke sekolah.
              </p>

              <div className="w-full h-80 rounded-xl overflow-hidden border border-slate-200 shadow-inner">
                <iframe
                  title="Peta SMAN 16 Semarang"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.1172828607144!2d110.3242080758832!3d-7.054178392948135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708af043bd5ed3%3A0x6b8014baaa23b208!2sSMA%20Negeri%2016%20Semarang!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}