
import Link from "next/link";
import { beritaData } from "@/data/beritaData";
import BeritaCard from "@/components/BeritaCard";

export default function BeritaPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 font-semibold uppercase tracking-widest text-blue-200">
            Informasi Sekolah
          </p>
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
            Berita Sekolah
          </h1>
          <p className="max-w-2xl leading-relaxed text-blue-100">
            Temukan informasi terbaru seputar SMA Negeri 16 Semarang,
            mulai dari prestasi siswa, kegiatan sekolah, hingga informasi
            akademik.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Semua Berita
          </h2>
          <p className="mt-2 text-gray-600">
            Informasi dan kabar terbaru dari lingkungan sekolah.
          </p>
        </div>

        {beritaData.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {beritaData.map((item) => (
              <BeritaCard key={item.id} berita={item} />
            ))}
          </div>
        ) : (
          <p className="rounded-xl bg-white p-8 text-center text-gray-600">
            Belum ada berita yang tersedia.
          </p>
        )}
      </section>

      <section className="border-t border-gray-200 bg-white px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-3">
          <Link
            href="/berita/akademik"
            className="rounded-full bg-blue-900 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Berita Akademik →
          </Link>
          <Link
            href="/berita/kegiatan"
            className="rounded-full border border-blue-900 px-5 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
          >
            Kegiatan Sekolah →
          </Link>
        </div>
      </section>
    </main>
  );
}
