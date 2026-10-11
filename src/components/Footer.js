export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center md:text-left md:flex md:justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold text-white">SMA Negeri 16 Semarang</h3>
          <p className="text-sm mt-1">Jl. Raya Ngadirgo, Kelurahan Ngadirgo, Kecamatan Mijen, Kota Semarang, Jawa Tengah 50213</p>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} SMA Negeri 16 Semarang. All rights reserved.
        </div>
      </div>
    </footer>
  );
}