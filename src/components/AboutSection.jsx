import React from 'react';

const skills = [
  { name: 'Video Editing', value: 90 },
  { name: 'Copy Editing', value: 85 },
  { name: 'Photo Retouch', value: 75 },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">Tentang Saya</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Berpengalaman mengerjakan proyek komersial dan personal, saya menikmati proses merangkai
            visual dan kata menjadi cerita yang utuh. Ketertarikan pada teknologi dan estetika membuat
            saya selalu mengeksplor workflow, color grading, dan pendekatan editorial yang efisien
            namun tetap berkarakter.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Saya percaya bahwa pengeditan yang baik bukan hanya soal teknik, tetapi juga rasa, ritme,
            dan empati terhadap penonton. Karena itu, saya berfokus pada detail kecil yang berdampak
            besar.
          </p>

          <div className="mt-8">
            <h3 className="mb-4 text-lg font-medium text-gray-900">Keahlian</h3>
            <ul className="space-y-4">
              {skills.map((s) => (
                <li key={s.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-gray-800">{s.name}</span>
                    <span className="font-medium text-slate-700">{s.value}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100">
                    <div
                      className="h-2 rounded-full bg-slate-700 transition-[width] duration-700"
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-square max-w-sm overflow-hidden rounded-2xl bg-slate-100 shadow">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop"
              alt="Profil Aditiya Fauzi Akbar"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
