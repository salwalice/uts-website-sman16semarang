import Link from "next/link";
import { beritaData } from "@/data/beritaData";

export default async function DetailBeritaPage({ params }) {
  const { id } = await params;
  const berita = beritaData.find((item) => item.id === id);

  if (!berita) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-red-600">Berita tidak ditemukan</h1>
        <Link href="/berita" className="mt-4 inline-block text-blue-600 hover:underline">
          &larr; Kembali ke Daftar Berita
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/berita" className="text-blue-600 font-semibold hover:underline inline-block mb-6">
        &larr; Kembali ke Berita
      </Link>
      
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{berita.judul}</h1>
      <p className="text-sm text-gray-500 mb-6">{berita.tanggal}</p>
      
      <img
        src={berita.gambar}
        alt={berita.judul}
        className="w-full h-80 md:h-96 object-cover rounded-xl mb-8 shadow-md"
      />
      
      <div className="prose max-w-none text-gray-700 leading-relaxed text-lg mb-8">
        <p>{berita.isi}</p>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <Link
          href="/berita"
          className="bg-gray-200 text-gray-800 px-5 py-2.5 rounded-lg font-medium hover:bg-gray-300 transition"
        >
          Kembali ke Daftar Berita
        </Link>
      </div>
    </div>
  );
}