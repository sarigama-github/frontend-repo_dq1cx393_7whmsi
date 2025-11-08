import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import SiteFooter from './components/SiteFooter';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Header / Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-semibold tracking-tight text-slate-900">AFA</a>
          <nav className="hidden gap-6 text-sm text-slate-700 sm:flex">
            <a href="#about" className="transition hover:text-slate-900">Tentang</a>
            <a href="#portfolio" className="transition hover:text-slate-900">Portfolio</a>
            <a href="#contact" className="transition hover:text-slate-900">Kontak</a>
          </nav>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <HeroSection />

      {/* About */}
      <AboutSection />

      {/* Portfolio */}
      <PortfolioSection />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <SiteFooter />
    </div>
  );
};

export default App;
