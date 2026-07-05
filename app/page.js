'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, ArrowDown, ArrowUpRight, ListChecks, MessageCircle } from 'lucide-react';
import { templates } from './components/templates-data';

const WA = 'https://wa.me/6281339908765?text=Halo%2C%20saya%20tertarik%20aplikasi%20to-do%20di%20PortalTodo';

const HERO_TODO = [
  { t: 'Bangun pagi', done: true },
  { t: 'Cari aplikasi to-do yang pas', done: true },
  { t: 'Mulai hari yang produktif', done: false },
];

export default function PortalTodo() {
  return (
    <div className="ruled min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b-[2.5px] border-inktd bg-papertd/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#" className="flex items-center gap-2 font-display text-lg font-extrabold">
            <span className="cek"><ListChecks size={14} /></span> PortalTodo
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="rounded-full border-[2.5px] border-inktd bg-ceklis px-5 py-2 text-sm font-bold text-white shadow-[3px_3px_0_var(--color-inktd)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_var(--color-inktd)]">
            Pesan Aplikasi
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-4 pt-16 pb-14 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block rounded-full border-[2.5px] border-inktd bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide shadow-[3px_3px_0_var(--color-inktd)]">
              3 aplikasi · 3 paradigma
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.06] sm:text-6xl">
              Selesaikan tugasmu, <span className="stabilo">apapun gayamu</span>.
            </h1>
            <p className="mt-5 max-w-md text-lg font-light text-mutedtd">
              Checklist sederhana, papan kanban, atau task manager lengkap — pilih cara kerjamu, kami siapkan aplikasinya.
            </p>
            <a href="#koleksi" className="mt-8 inline-flex items-center gap-2 rounded-full border-[2.5px] border-inktd bg-inktd px-7 py-3.5 font-display text-sm font-bold text-papertd shadow-[4px_4px_0_rgba(22,163,74,0.5)] transition hover:translate-y-0.5">
              Lihat Ketiganya <ArrowDown size={16} />
            </a>
          </motion.div>

          {/* Kartu to-do hidup */}
          <motion.div initial={{ opacity: 0, y: 24, rotate: 1 }} animate={{ opacity: 1, y: 0, rotate: 1 }} transition={{ delay: 0.15, duration: 0.6 }} className="window max-w-sm justify-self-center md:justify-self-end">
            <div className="window-bar">
              <span className="h-3 w-3 rounded-full border-2 border-inktd bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full border-2 border-inktd bg-stabilo" />
              <span className="h-3 w-3 rounded-full border-2 border-inktd bg-ceklis" />
              <span className="ml-2 text-xs font-semibold text-mutedtd">hari-ini.todo</span>
            </div>
            <ul className="space-y-3 p-5">
              {HERO_TODO.map((t, i) => (
                <motion.li key={t.t} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.2 }} className="flex items-center gap-3">
                  <span className={`grid h-6 w-6 place-items-center rounded-md border-[2.5px] border-inktd ${t.done ? 'bg-ceklis text-white' : 'bg-white'}`}>
                    {t.done && <Check size={14} strokeWidth={3.5} />}
                  </span>
                  <span className={`font-semibold ${t.done ? 'text-mutedtd line-through' : ''}`}>{t.t}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Showcase rows */}
      <section id="koleksi" className="scroll-mt-20 px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl space-y-16">
          {templates.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`grid items-center gap-8 md:grid-cols-2 ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              {/* Window preview */}
              <a href={t.url} className="window group block" aria-label={`Demo ${t.name}`}>
                <div className="window-bar">
                  <span className="h-3 w-3 rounded-full border-2 border-inktd bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full border-2 border-inktd bg-stabilo" />
                  <span className="h-3 w-3 rounded-full border-2 border-inktd bg-ceklis" />
                  <span className="ml-2 text-xs font-semibold text-mutedtd">{t.name.toLowerCase().replace(/\s/g, '-')}.app</span>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={t.image} alt={`Preview ${t.name}`} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover object-top transition duration-500 group-hover:scale-[1.02]" priority={i === 0} />
                </div>
              </a>
              {/* Info */}
              <div className={i % 2 ? 'md:pr-6' : 'md:pl-6'}>
                <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-ceklis">0{i + 1} — {t.cocok}</p>
                <h2 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">{t.name}</h2>
                <p className="mt-1 text-lg font-semibold text-mutedtd">{t.tagline}</p>
                <p className="mt-3 font-light leading-relaxed text-inktd/80">{t.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {t.fitur.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm font-semibold">
                      <span className="cek mt-0.5 !h-5 !w-5 shrink-0"><Check size={11} strokeWidth={4} /></span> {f}
                    </li>
                  ))}
                </ul>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-bold text-ceklis underline-offset-4 hover:underline">
                  Pesan versi ini <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t-[2.5px] border-inktd bg-inktd px-4 py-16 text-center text-papertd sm:px-6">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mx-auto max-w-xl">
          <p className="font-display text-2xl font-extrabold leading-snug md:text-4xl">
            <span className="text-ceklis">✓</span> Pilih gaya &nbsp; <span className="text-ceklis">✓</span> Chat kami &nbsp; <span className="text-stabilo">☐</span> Mulai produktif
          </p>
          <p className="mt-4 text-papertd/60">Satu langkah lagi. Centang sendiri yang terakhir.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ceklis px-8 py-4 font-display text-sm font-bold text-white transition hover:scale-[1.03] active:scale-95">
            <MessageCircle size={17} /> Chat WhatsApp
          </a>
        </motion.div>
      </section>

      <footer className="bg-inktd px-4 py-5 text-center text-xs text-papertd/40">
        © {new Date().getFullYear()} PortalTodo · Sanzystore Dev
      </footer>
    </div>
  );
}
