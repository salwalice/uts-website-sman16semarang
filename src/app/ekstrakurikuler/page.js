import { dataEkstra } from "@/data/ekstraData";

export default function EkstrakurikulerPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-14 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          Ekstrakurikuler SMAN 16 Semarang
        </h1>
        <p className="text-blue-100 text-sm md:text-base max-w-2xl mx-auto">
          Wadah pengembangan minat, bakat, kepemimpinan, dan potensi diri siswa di luar kegiatan akademis.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Ringkasan Jumlah */}
        <div className="mb-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-800 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            5+ Ekstrakurikuler Aktif
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-3">
            Pilih Kegiatan Sesuai Minat & Talentamu
          </h2>
        </div>

        {/* Grid Card Ekstrakurikuler */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataEkstra.map((ekstra) => (
            <div
              key={ekstra.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={ekstra.gambar}
                    alt={ekstra.nama}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-blue-900/90 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow">
                    {ekstra.kategori}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {ekstra.nama}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {ekstra.deskripsi}
                  </p>

                  <div className="space-y-2 border-t border-slate-100 pt-3 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-700">Jadwal:</span>
                      <span>{ekstra.jadwal}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-700">Pembina:</span>
                      <span>{ekstra.pembina}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  type="button"
                  className="w-full text-center bg-slate-50 border border-slate-200 text-blue-900 font-semibold text-xs py-2.5 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition"
                >
                  Informasi Pendaftaran
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}