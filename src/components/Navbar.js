"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeHover, setActiveHover] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown((current) => (current === menu ? null : menu));
  };

  const pillTransition = {
    type: "spring",
    stiffness: 220,
    damping: 28,
    mass: 0.8,
  };

  return (
    <nav className="sticky top-0 z-50 bg-blue-900 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3">

        {/* 1. Logo dan Nama Sekolah */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/logo-16.png"
            alt="Logo SMAN 16 Semarang"
            width={45}
            height={45}
            className="object-contain md:w-[55px] md:h-[55px]"
            priority
          />

          <span className="flex flex-col font-bold tracking-wide">
            <span className="text-base sm:text-xl">SMAN 16 SEMARANG</span>
            <span className="text-xs sm:text-sm font-normal hidden sm:inline">
              Kreasi, Kolaborasi, Religi, Seni
            </span>
          </span>
        </Link>

        {/* 2. Menu Navigasi Utama (Layar Besar / Laptop) */}
        <div
          className="hidden items-center gap-1 lg:gap-2 font-medium md:flex"
          onMouseLeave={() => setActiveHover(null)}
        >
          {/* Home */}
          <Link
            href="/"
            onMouseEnter={() => setActiveHover("home")}
            className={`relative isolate rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
              activeHover === "home" ? "text-blue-900" : "text-white"
            }`}
          >
            {activeHover === "home" && (
              <motion.span
                layoutId="navbar-pill"
                className="absolute inset-0 -z-10 rounded-full bg-white"
                transition={pillTransition}
              />
            )}
            Home
          </Link>

          {/* Dropdown Tentang */}
          <div
            className="relative"
            onMouseEnter={() => setActiveHover("tentang")}
          >
            <button
              type="button"
              onClick={() => toggleDropdown("tentang")}
              aria-expanded={openDropdown === "tentang"}
              className={`relative isolate flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                activeHover === "tentang" ? "text-blue-900" : "text-white"
              }`}
            >
              {activeHover === "tentang" && (
                <motion.span
                  layoutId="navbar-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-white"
                  transition={pillTransition}
                />
              )}
              Tentang
              <span
                className={`text-[10px] transition-transform duration-300 ${
                  openDropdown === "tentang" ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {openDropdown === "tentang" && (
              <div className="absolute left-0 top-full z-50 mt-2 w-52 rounded-xl border border-gray-100 bg-white p-2 text-gray-900 shadow-lg">
                <Link
                  href="/about"
                  onClick={() => setOpenDropdown(null)}
                  className="block rounded-lg px-4 py-2.5 text-sm transition-colors duration-200 hover:bg-blue-50 hover:text-blue-800"
                >
                  Profil Sekolah
                </Link>

                <Link
                  href="/fasilitas"
                  onClick={() => setOpenDropdown(null)}
                  className="block rounded-lg px-4 py-2.5 text-sm transition-colors duration-200 hover:bg-blue-50 hover:text-blue-800"
                >
                  Fasilitas
                </Link>
              </div>
            )}
          </div>

          {/* Guru & Staff */}
          <Link
            href="/guru"
            onMouseEnter={() => setActiveHover("guru")}
            className={`relative isolate rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
              activeHover === "guru" ? "text-blue-900" : "text-white"
            }`}
          >
            {activeHover === "guru" && (
              <motion.span
                layoutId="navbar-pill"
                className="absolute inset-0 -z-10 rounded-full bg-white"
                transition={pillTransition}
              />
            )}
            Guru & Staff
          </Link>

          {/* Ekstrakurikuler */}
          <Link
            href="/ekstrakurikuler"
            onMouseEnter={() => setActiveHover("ekstrakurikuler")}
            className={`relative isolate rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
              activeHover === "ekstrakurikuler" ? "text-blue-900" : "text-white"
            }`}
          >
            {activeHover === "ekstrakurikuler" && (
              <motion.span
                layoutId="navbar-pill"
                className="absolute inset-0 -z-10 rounded-full bg-white"
                transition={pillTransition}
              />
            )}
            Ekstrakurikuler
          </Link>

          {/* Prestasi */}
          <Link
            href="/prestasi"
            onMouseEnter={() => setActiveHover("prestasi")}
            className={`relative isolate rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
              activeHover === "prestasi" ? "text-blue-900" : "text-white"
            }`}
          >
            {activeHover === "prestasi" && (
              <motion.span
                layoutId="navbar-pill"
                className="absolute inset-0 -z-10 rounded-full bg-white"
                transition={pillTransition}
              />
            )}
            Prestasi
          </Link>

          {/* Dropdown Berita */}
          <div
            className="relative"
            onMouseEnter={() => setActiveHover("berita")}
          >
            <button
              type="button"
              onClick={() => toggleDropdown("berita")}
              aria-expanded={openDropdown === "berita"}
              className={`relative isolate flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                activeHover === "berita" ? "text-blue-900" : "text-white"
              }`}
            >
              {activeHover === "berita" && (
                <motion.span
                  layoutId="navbar-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-white"
                  transition={pillTransition}
                />
              )}
              Berita
              <span
                className={`text-[10px] transition-transform duration-300 ${
                  openDropdown === "berita" ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {openDropdown === "berita" && (
              <div className="absolute left-0 top-full z-50 mt-2 w-52 rounded-xl border border-gray-100 bg-white p-2 text-gray-900 shadow-lg">
                <Link
                  href="/berita"
                  onClick={() => setOpenDropdown(null)}
                  className="block rounded-lg px-4 py-2.5 text-sm transition-colors duration-200 hover:bg-blue-50 hover:text-blue-800"
                >
                  Semua Berita
                </Link>

                <Link
                  href="/berita/akademik"
                  onClick={() => setOpenDropdown(null)}
                  className="block rounded-lg px-4 py-2.5 text-sm transition-colors duration-200 hover:bg-blue-50 hover:text-blue-800"
                >
                  Berita Akademik
                </Link>

                <Link
                  href="/berita/kegiatan"
                  onClick={() => setOpenDropdown(null)}
                  className="block rounded-lg px-4 py-2.5 text-sm transition-colors duration-200 hover:bg-blue-50 hover:text-blue-800"
                >
                  Kegiatan Sekolah
                </Link>
              </div>
            )}
          </div>

          {/* Hubungi Kami */}
          <Link
            href="/kontak"
            className="ml-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-900 transition-colors duration-300 hover:bg-blue-100"
          >
            Hubungi Kami
          </Link>
        </div>

        {/* 3. Tombol Hamburger (Layar HP) */}
        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Navigation"
          className="md:hidden p-2 rounded-xl bg-blue-800/80 hover:bg-blue-700 text-white focus:outline-none border border-blue-700"
        >
          {isMobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* 4. Menu Navigasi Mobile (Tampilan HP) */}
      {isMobileOpen && (
        <div className="md:hidden border-t border-blue-800/60 bg-blue-900/95 backdrop-blur-md px-6 py-4 space-y-3 font-medium text-sm">
          <Link
            href="/"
            onClick={() => setIsMobileOpen(false)}
            className="block py-2 text-white hover:text-blue-200 border-b border-blue-800/50"
          >
            Home
          </Link>

          {/* Submenu Tentang di HP */}
          <div className="py-2 border-b border-blue-800/50 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block">Tentang</span>
            <Link
              href="/about"
              onClick={() => setIsMobileOpen(false)}
              className="block pl-3 text-slate-100 hover:text-white"
            >
              • Profil Sekolah
            </Link>
            <Link
              href="/fasilitas"
              onClick={() => setIsMobileOpen(false)}
              className="block pl-3 text-slate-100 hover:text-white"
            >
              • Fasilitas
            </Link>
          </div>

          <Link
            href="/guru"
            onClick={() => setIsMobileOpen(false)}
            className="block py-2 text-white hover:text-blue-200 border-b border-blue-800/50"
          >
            Guru & Staff
          </Link>

          <Link
            href="/ekstrakurikuler"
            onClick={() => setIsMobileOpen(false)}
            className="block py-2 text-white hover:text-blue-200 border-b border-blue-800/50"
          >
            Ekstrakurikuler
          </Link>

          <Link
            href="/prestasi"
            onClick={() => setIsMobileOpen(false)}
            className="block py-2 text-white hover:text-blue-200 border-b border-blue-800/50"
          >
            Prestasi
          </Link>

          {/* Submenu Berita di HP */}
          <div className="py-2 border-b border-blue-800/50 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block">Berita</span>
            <Link
              href="/berita"
              onClick={() => setIsMobileOpen(false)}
              className="block pl-3 text-slate-100 hover:text-white"
            >
              • Semua Berita
            </Link>
            <Link
              href="/berita/akademik"
              onClick={() => setIsMobileOpen(false)}
              className="block pl-3 text-slate-100 hover:text-white"
            >
              • Berita Akademik
            </Link>
            <Link
              href="/berita/kegiatan"
              onClick={() => setIsMobileOpen(false)}
              className="block pl-3 text-slate-100 hover:text-white"
            >
              • Kegiatan Sekolah
            </Link>
          </div>

          <Link
            href="/kontak"
            onClick={() => setIsMobileOpen(false)}
            className="block w-full text-center mt-4 rounded-full bg-white py-2.5 font-bold text-blue-900 shadow-sm"
          >
            Hubungi Kami
          </Link>
        </div>
      )}
    </nav>
  );
}