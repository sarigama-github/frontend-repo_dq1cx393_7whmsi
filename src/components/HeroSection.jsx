import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const handleScrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white"></div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start px-6 pt-28 pb-16 sm:pt-36">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Aditiya Fauzi Akbar – <span className="text-slate-600">Editor & Kreator</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
          Saya seorang editor profesional yang fokus pada kualitas visual dan narasi. Dari penyuntingan
          video sinematik, copy editing yang rapi, hingga retouch foto yang presisi—saya membantu brand
          dan individu menyampaikan cerita dengan cara yang modern dan minimalis.
        </p>
        <button
          onClick={handleScrollToPortfolio}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-800 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          Lihat Karya Saya
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
