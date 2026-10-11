
import Link from "next/link";
import { beritaData } from "@/data/beritaData";
import BeritaCard from "@/components/BeritaCard";

export default function KegiatanSekolahPage() {
  const beritaKegiatan = beritaData.filter(
    (item) =>
      item.kategori?.toLowerCase() === "kegiatan"
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 font-semibold uppercase tracking-widest text-blue-200">
            Aktivitas Sekolah
          </p>
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
            Kegiatan Sekolah
          </h1>
          <p className="max-w-2xl leading-relaxed text-blue-100">
            Kenali berbagai kegiatan SMA Negeri 16 Semarang,
            mulai dari kegiatan siswa, ekstrakurikuler, acara sekolah,
            hingga program pengembangan karakter.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Kabar Kegiatan
          </h2>
          <p className="mt-2 text-gray-600">
            Dokumentasi dan informasi aktivitas sekolah.
          </p>
        </div>

        {beritaKegiatan.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {beritaKegiatan.map((item) => (
              <BeritaCard key={item.id} berita={item} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-blue-100 bg-white px-6 py-12 text-center">
            <h3 className="mb-2 text-xl font-bold text-blue-900">
              Belum Ada Berita Kegiatan
            </h3>
            <p className="text-gray-600">
              Informasi kegiatan sekolah akan ditampilkan
              di halaman ini setelah tersedia dalam data berita.
            </p>
          </div>
        )}

        <Link
          href="/berita"
          className="mt-8 inline-block font-semibold text-blue-700 hover:underline"
        >
          ← Kembali ke Semua Berita
        </Link>
      </section>
    </main>
  );
}
