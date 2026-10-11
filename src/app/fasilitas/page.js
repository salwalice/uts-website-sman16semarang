import { dataFasilitas } from "@/data/fasilitasData";

export default function FasilitasPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-14 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          Fasilitas SMAN 16 Semarang
        </h1>
        <p className="text-blue-100 text-sm md:text-base max-w-2xl mx-auto">
          Sarana dan prasarana modern untuk mendukung proses belajar mengajar, kegiatan ekstrakurikuler, serta kenyamanan seluruh warga sekolah.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Ringkasan Keunggulan Fasilitas */}
        <div className="mb-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-800 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            Sarana & Prasarana Lengkap
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-3">
            Menunjang Kegiatan Akademik & Non-Akademik
          </h2>
        </div>

        {/* Grid Cards Fasilitas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataFasilitas.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.gambar}
                    alt={item.nama}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-blue-900/90 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow">
                    {item.kategori}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.nama}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.deskripsi}
                  </p>

                  {/* List Fitur / Spesifikasi */}
                  <div className="border-t border-slate-100 pt-3">
                    <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Fasilitas Utama:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.fitur.map((f, index) => (
                        <span
                          key={index}
                          className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium"
                        >
                          ✓ {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Tambahan di Bagian Bawah */}
        <div className="mt-14 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-blue-950 mb-2">
            Lingkungan Belajar Asri & Ramah Lingkungan
          </h3>
          <p className="text-xs md:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Sebagai Sekolah Adiwiyata Mandiri, seluruh sarana dan prasarana SMAN 16 Semarang dirancang dengan memperhatikan kebersihan, penghijauan, serta efisiensi energi untuk menciptakan suasana belajar yang nyaman.
          </p>
        </div>
      </div>
    </div>
  );
}