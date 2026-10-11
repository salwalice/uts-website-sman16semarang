import { dataGuru } from "@/data/guruData";

export default function GuruPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-14 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          Guru & Tenaga Kependidikan
        </h1>
        <p className="text-blue-100 text-sm md:text-base max-w-2xl mx-auto">
          Mengenal para pendidik berdedikasi dan staff kependidikan SMAN 16 Semarang yang siap membimbing serta melayani proses pembelajaran.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Ringkasan Header */}
        <div className="mb-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-800 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            SDM Unggul & Profesional
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-3">
            Civitas Akademika SMAN 16 Semarang
          </h2>
        </div>

        {/* Grid Card Guru & Staff */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dataGuru.map((guru) => (
            <div
              key={guru.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition p-5 text-center flex flex-col items-center justify-between"
            >
              <div className="flex flex-col items-center w-full">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-blue-50 shadow-sm mb-4">
                  <img
                    src={guru.foto}
                    alt={guru.nama}
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full mb-2">
                  {guru.jabatan}
                </span>

                <h3 className="font-bold text-slate-900 text-base mb-1 leading-snug">
                  {guru.nama}
                </h3>

                <p className="text-xs text-slate-600 mb-4 font-medium">
                  {guru.materi}
                </p>
              </div>

              <div className="w-full border-t border-slate-100 pt-3 text-center">
                <p className="text-[11px] text-slate-400 truncate">
                  {guru.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}