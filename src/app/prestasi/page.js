import { dataPrestasi } from "@/data/prestasiData";

export default function PrestasiPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-14 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          Prestasi SMAN 16 Semarang
        </h1>
        <p className="text-blue-100 text-sm md:text-base max-w-2xl mx-auto">
          Catatan kebanggaan, piala, dan penghargaan yang berhasil diraih oleh siswa-siswi serta civitas akademika SMAN 16 Semarang.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Ringkasan Statistik Capaian */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-blue-50 border border-blue-100 p-5 rounded-2xl text-center">
            <p className="text-3xl font-black text-blue-950">50+</p>
            <p className="text-xs text-slate-600 font-medium mt-1">Total Penghargaan</p>
          </div>
          <div className="bg-amber-50 border border-amber-100 p-5 rounded-2xl text-center">
            <p className="text-3xl font-black text-amber-900">12</p>
            <p className="text-xs text-slate-600 font-medium mt-1">Tingkat Nasional</p>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 p-5 rounded-2xl text-center">
            <p className="text-3xl font-black text-emerald-900">28</p>
            <p className="text-xs text-slate-600 font-medium mt-1">Tingkat Provinsi</p>
          </div>
          <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-2xl text-center">
            <p className="text-3xl font-black text-indigo-900">15+</p>
            <p className="text-xs text-slate-600 font-medium mt-1">Tingkat Kota</p>
          </div>
        </div>

        {/* Title Section */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-800">
              Daftar Kejuaraan
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              Raihan Prestasi Terbaru
            </h2>
          </div>
          <p className="text-xs text-slate-500">
            Diperbarui berkala oleh Tim Kesiswaan
          </p>
        </div>

        {/* Grid Cards Prestasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataPrestasi.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.gambar}
                    alt={item.judul}
                    className="w-full h-full object-cover"
                  />
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-blue-900/90 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full shadow">
                      {item.tingkat}
                    </span>
                    <span className="bg-amber-500/90 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full shadow">
                      {item.kategori}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <span className="text-[11px] font-semibold text-blue-800">
                    Tahun {item.tahun}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-1 mb-2 leading-snug">
                    {item.judul}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.deskripsi}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 text-xs text-slate-500 space-y-1 mt-auto">
                <p>
                  <strong className="text-slate-700">Peraih:</strong> {item.peraih}
                </p>
                <p className="truncate">
                  <strong className="text-slate-700">Penyelenggara:</strong> {item.penyelenggara}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Motivasional Banner */}
        <div className="mt-14 bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-8 text-center max-w-4xl mx-auto shadow-lg">
          <h3 className="text-xl font-bold mb-2">
            Ingin Mengukir Prestasi Bersama SMAN 16 Semarang?
          </h3>
          <p className="text-xs md:text-sm text-blue-100 max-w-2xl mx-auto leading-relaxed mb-6">
            Sekolah menyediakan pembinaan intensif, beasiswa apresiasi, serta fasilitas penuh bagi para siswa yang berkomitmen mengembangkan bakat akademis dan non-akademis.
          </p>
          <a
            href="/ekstrakurikuler"
            className="inline-block bg-white text-blue-900 text-xs font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            Lihat Program Ekstrakurikuler & Pembinaan &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}