import React from 'react';

const items = [
  {
    title: 'Color Grade Teaser',
    desc: 'Eksperimen grading dengan mood teal & orange yang halus.',
    image: 'https://images.unsplash.com/photo-1515706886582-54c73c5eaf41?q=80&w=1200&auto=format&fit=crop',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Short Film Cut',
    desc: 'Pace ritmis dan transisi match-cut untuk storytelling ringkas.',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1200&auto=format&fit=crop',
    link: 'https://www.youtube.com',
  },
  {
    title: 'Product Promo',
    desc: 'Motion subtle dan typographic timing untuk brand tech.',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    link: 'https://www.behance.net/',
  },
  {
    title: 'Copy Edit Artikel',
    desc: 'Struktur ulang artikel panjang agar ringkas dan jelas.',
    image: 'https://images.unsplash.com/photo-1642543492524-fa0e22fa25f9?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI1NjMwMTF8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    link: 'https://medium.com/',
  },
  {
    title: 'Retouch Editorial',
    desc: 'Skin retouch natural dengan dodging & burning.',
    image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop',
    link: 'https://dribbble.com/',
  },
  {
    title: 'Music Video Cut',
    desc: 'Cutting on beat dan gelombang emosi untuk energi maksimal.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
    link: 'https://vimeo.com/',
  },
  {
    title: 'Before/After Retouch',
    desc: 'Perbandingan workflow retouch untuk campaign fashion.',
    image: 'https://images.unsplash.com/photo-1520975728316-8066b19776bd?q=80&w=1200&auto=format&fit=crop',
    link: 'https://www.instagram.com/',
  },
  {
    title: 'Brand Guideline Edit',
    desc: 'Menjaga konsistensi tone of voice dan visual.',
    image: 'https://images.unsplash.com/photo-1581019055756-93b5361f9536?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCcmFuZCUyMEd1aWRlbGluZSUyMEVkaXR8ZW58MHwwfHx8MTc2MjU2MzAxM3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    link: 'https://www.notion.so/',
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">Portfolio</h2>
            <p className="mt-2 text-gray-600">Beberapa karya pilihan yang mewakili gaya dan pendekatan saya.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-gray-600">{item.desc}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/0 via-slate-900/0 to-slate-900/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
