import React from 'react';
import { Instagram, Youtube, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    alert(`Terima kasih, ${name}! Pesan kamu sudah terkirim.`);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">Kontak</h2>
            <p className="mt-2 text-gray-600">Ada proyek atau ide? Saya siap berdiskusi.</p>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Nama</label>
                <input name="name" type="text" required className="w-full rounded-lg border border-slate-300 px-3 py-2 text-gray-900 outline-none ring-slate-400 placeholder:text-slate-400 focus:ring-2" placeholder="Nama lengkap" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                <input name="email" type="email" required className="w-full rounded-lg border border-slate-300 px-3 py-2 text-gray-900 outline-none ring-slate-400 placeholder:text-slate-400 focus:ring-2" placeholder="email@contoh.com" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Pesan</label>
                <textarea name="message" rows="4" required className="w-full rounded-lg border border-slate-300 px-3 py-2 text-gray-900 outline-none ring-slate-400 placeholder:text-slate-400 focus:ring-2" placeholder="Ceritakan kebutuhanmu" />
              </div>
              <button type="submit" className="mt-2 inline-flex w-fit items-center rounded-full bg-slate-800 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400">
                Kirim Pesan
              </button>
            </div>
          </form>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Terhubung</h3>
            <p className="mt-2 text-gray-600">Ikuti karya terbaru dan behind-the-scenes.</p>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-gray-800 transition hover:bg-slate-50">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-gray-800 transition hover:bg-slate-50">
                <Youtube className="h-4 w-4" /> YouTube
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-gray-800 transition hover:bg-slate-50">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
