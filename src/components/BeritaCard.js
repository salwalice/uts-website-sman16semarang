import Link from "next/link";

export default function BeritaCard({ berita }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col justify-between hover:shadow-lg transition-shadow">
      <div>
        <img
          src={berita.gambar}
          alt={berita.judul}
          className="w-full h-48 object-cover"
        />
        <div className="p-5">
          <span className="text-xs text-blue-600 font-semibold">{berita.tanggal}</span>
          <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3 line-clamp-2">
            {berita.judul}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
            {berita.ringkasan}
          </p>
        </div>
      </div>
      <div className="px-5 pb-5">
        <Link
          href={`/berita/${berita.id}`}
          className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded font-medium hover:bg-blue-700 transition-colors"
        >
          Baca Selengkapnya
        </Link>
      </div>
    </div>
  );
}