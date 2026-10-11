import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-14 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Profil SMA Negeri 16 Semarang</h1>
        <p className="text-blue-100 text-sm md:text-base max-w-2xl mx-auto">
          Mengenal lebih dekat sejarah, visi-misi, serta komitmen pendidikan SMA Negeri 16 Semarang.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Ringkasan Status & Akreditasi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
            <span className="text-xs uppercase font-bold text-blue-800 tracking-wider">Akreditasi</span>
            <p className="text-3xl font-black text-blue-950 mt-1">A (Unggul)</p>
            <p className="text-xs text-slate-500 mt-1">Berdasarkan Keputusan BAN-S/M</p>
          </div>

          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 text-center">
            <span className="text-xs uppercase font-bold text-emerald-800 tracking-wider">Status Sekolah</span>
            <p className="text-2xl font-black text-emerald-950 mt-1">Adiwiyata Mandiri</p>
            <p className="text-xs text-slate-500 mt-1">Sekolah Peduli & Berbudaya Lingkungan</p>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 text-center">
            <span className="text-xs uppercase font-bold text-amber-800 tracking-wider">Tahun Berdiri</span>
            <p className="text-3xl font-black text-amber-950 mt-1">1999</p>
            <p className="text-xs text-slate-500 mt-1">Melayani Lebih dari 25 Tahun</p>
          </div>
        </div>

        {/* Sambutan Kepala Sekolah */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-40 h-40 relative shrink-0 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image
              src="/logo-16.png"
              alt="Kepala Sekolah"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">Sambutan</span>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Kepala Sekolah SMAN 16 Semarang</h2>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Tarisno,S.Pd., M. Pd.</h2>
            <p className="text-slate-600 leading-relaxed text-sm mb-3">
              Assalamu'alaikum Warahmatullahi Wabarakatuh, Salam Sejahtera bagi Kita Semua, Om Swastiastu, Namo Buddhaya, Salam Kebajikan, Rahayu. Selamat datang di situs web resmi SMA Negeri 16 Semarang. Puji syukur kami panjatkan ke hadirat Tuhan Yang Maha Esa, karena atas rahmat dan karunia-Nya, kami dapat menghadirkan situs web ini sebagai salah satu jembatan komunikasi dan informasi antara sekolah dengan seluruh warga sekolah, orang tua/wali murid, alumni, dan masyarakat luas. Di era digital yang terus berkembang pesat, teknologi informasi menjadi kebutuhan mutlak dalam mendukung proses pendidikan. SMA Negeri 16 Semarang berkomitmen untuk tidak hanya menyelenggarakan pendidikan yang berkualitas secara akademik, tetapi juga membentuk generasi muda yang berkarakter mulia, berakhlak, kreatif, inovatif, dan siap menghadapi tantangan global. Kami percaya bahwa pendidikan adalah usaha kolaboratif. Keberhasilan siswa kami adalah hasil kerja keras bersama antara guru yang berdedikasi, siswa yang bersemangat, serta dukungan penuh dari orang tua dan masyarakat. Kami terus berupaya menciptakan lingkungan belajar yang aman, nyaman, dan kondusif bagi seluruh warga sekolah untuk mengembangkan potensi diri, baik di bidang akademik maupun non-akademik. Melalui situs web ini, kami berharap Anda dapat memperoleh informasi yang lengkap mengenai profil sekolah, visi dan misi, program akademik, kegiatan kesiswaan, prestasi, serta berita terbaru dari SMA Negeri 16 Semarang. Situs ini juga kami harapkan dapat menjadi sarana untuk menjalin silaturahmi dan berbagi inspirasi. Kami mengundang Anda untuk menjelajahi setiap bagian dari situs web ini. Kritik dan saran yang membangun sangat kami harapkan demi kemajuan SMA Negeri 16 Semarang di masa mendatang. Terima kasih atas kunjungan Anda. Maju terus pendidikan Indonesia! Wassalamu'alaikum Warahmatullahi Wabarakatuh. 
              Hormat kami, Kepala Sekolah SMA Negeri 16 Semarang</p>
            <p className="font-semibold text-slate-800 text-sm">Tarisno,S.Pd., M.Pd.</p>
          </div>
        </section>

        {/* Sejarah Sekolah */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2">Sejarah Singkat</h2>
          <p className="text-slate-600 leading-relaxed text-sm">
            SMA Negeri 16 Semarang resmi berdiri pada tanggal 1 Juli 1999 berdasarkan Surat Keputusan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 0291/O/1999. Pada masa awal operasionalnya, sekolah ini belum memiliki fasilitas fisik sendiri, sehingga kegiatan belajar mengajar harus menumpang di gedung SMA Negeri 13 Semarang dengan jadwal masuk pada siang atau sore hari. Kondisi ini berubah ketika pembangunan gedung mandiri selesai, dan mulai 14 Maret 2000, seluruh civitas akademika resmi menempati kompleks bangunan baru yang berlokasi di Desa Ngadirgo, Kecamatan Mijen, Kota Semarang. Fasilitas baru tersebut diresmikan secara langsung oleh Wali Kota Semarang saat itu, H. Sukawi Sutarip, S.H. Dalam perkembangannya, sekolah yang kini telah meraih akreditasi A tersebut dipimpin oleh Kepala Sekolah Dr. Sri Wahyuni, S.Pd., M.Pd. dan terus berfokus pada peningkatan mutu serta kualitas pendidikan bagi para siswanya.
          </p>
        </section>

        {/* Visi dan Misi */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Visi Sekolah</h3>
            <p className="text-slate-700 font-medium leading-relaxed italic">
              "Menjadi sekolah yang unggul dalam prestasi, berkarakter, dan peduli terhadap lingkungan."
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Misi Sekolah</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
              <li>Menyelenggarakan pendidikan yang berkualitas dan berbasis teknologi.</li>
              <li>Menciptakan lingkungan sekolah yang kondusif untuk belajar dan berkembang.</li>
              <li>Membentuk peserta didik yang berkarakter, berakhlak mulia, dan memiliki jiwa kepemimpinan.</li>
              <li>Mengembangkan potensi siswa dalam bidang akademik, seni, dan olahraga.</li>
              <li>Mengimplementasikan program Adiwiyata untuk membangun kesadaran akan pentingnya pelestarian lingkungan.</li>
            </ul>
          </div>
        </section>

        {/* Alamat & Maps Terhubung */}
        <section className="space-y-4 pt-4 border-t border-slate-200">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Lokasi & Alamat Sekolah</h2>
            <p className="text-slate-600 text-sm mt-1">
              Jl. Raya Ngadirgo (Jl. Ngadirgo Tengah), Kelurahan Ngadirgo, Kecamatan Mijen, Kota Semarang, Jawa Tengah
            </p>
          </div>

          {/* Embedded Google Maps */}
          <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-300 shadow-sm relative">
            <iframe
              title="Lokasi SMAN 16 Semarang"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0123456789!2d110.33!3d-7.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b123456789%3A0x123456789!2sSMA%20Negeri%2016%20Semarang!5e0!3m2!1sid!2sid!4v1600000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}