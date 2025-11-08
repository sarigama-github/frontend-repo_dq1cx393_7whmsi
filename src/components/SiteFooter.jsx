import React from 'react';

const SiteFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 py-8 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <p className="text-sm">© {year} Aditiya Fauzi Akbar. Semua hak cipta dilindungi.</p>
        <nav className="hidden gap-6 text-sm sm:flex">
          <a href="#about" className="text-white/80 transition hover:text-white">Tentang</a>
          <a href="#portfolio" className="text-white/80 transition hover:text-white">Portfolio</a>
          <a href="#contact" className="text-white/80 transition hover:text-white">Kontak</a>
        </nav>
      </div>
    </footer>
  );
};

export default SiteFooter;
