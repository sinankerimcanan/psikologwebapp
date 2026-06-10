"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-sage-light/25 blur-[140px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] rounded-full bg-mink-light/35 blur-[110px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full bg-sage-light/10 blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20 md:py-0 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center w-full min-h-screen">

        {/* ── Left: Location + Description ── */}
        <div className="space-y-8">
          {/* Location eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="flex items-center gap-3"
          >
            <span className="w-10 h-px bg-sage" />
            <span className="text-[11px] font-sans font-medium tracking-[0.28em] uppercase text-sage">
              Konya · Psikolojik Destek
            </span>
          </motion.div>

          {/* Description block — styled like reference site */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.4, ease }}
            className="relative"
          >
            {/* Dark card like reference site */}
            <div
              className="rounded-3xl px-8 py-10 md:px-10 md:py-12"
              style={{
                background: "rgba(44,44,44,0.92)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <p className="font-sans text-lg md:text-xl text-white/90 leading-relaxed">
                Bilim Temelli ve Bireye Özel Kanıta dayalı yöntemlerle; çocuk,
                ergen ve yetişkinlere yönelik psikolojik danışmanlık
                hizmetlerini, bireysel farklılıkları gözeterek sunuyoruz.
              </p>

              {/* Subtle bottom accent */}
              <div className="mt-8 flex items-center gap-3">
                <span className="w-8 h-px bg-sage-light/60" />
                <span className="text-[10px] font-sans text-white/40 tracking-[0.22em] uppercase">
                  MEB Onaylı · Resmî Ruhsatlı
                </span>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease }}
            className="flex flex-wrap gap-3 pt-1"
          >
            <motion.a
              href="#iletisim"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-charcoal text-cream rounded-full font-sans text-sm font-medium tracking-wide hover:bg-sage transition-colors duration-400"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              İlk Görüşmeyi Planla
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
            <motion.a
              href="#hizmetler"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-charcoal/18 text-charcoal rounded-full font-sans text-sm font-medium tracking-wide hover:bg-charcoal/5 transition-colors duration-300"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              Hizmetleri Keşfet
            </motion.a>
          </motion.div>
        </div>

        {/* ── Right: Center Name ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease }}
          className="flex flex-col justify-center"
        >
          {/* Logo placeholder circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.6, ease }}
            className="mb-8 flex items-center gap-4"
          >
            <div className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center shadow-lg shadow-sage/20 flex-shrink-0 overflow-hidden">
              <Image
                src="/assets/meblogo.png"
                alt="MEB logo"
                width={70}
                height={70}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="text-[20px] font-sans font-medium tracking-[0.22em] uppercase text-warm-gray block">
                Milli Eğitim Bakanlığı       Onaylı Kurum
              </span>
              <span className="text-[10px] font-sans text-sage tracking-wide">
                2026'dan itibaren hizmetinizde
              </span>
            </div>
          </motion.div>

          {/* Center name — large serif like reference */}
          <div className="space-y-1">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.65, ease }}
              className="font-serif leading-[1.05] text-charcoal"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 5rem)" }}
            >
              <span className="block text-sage font-semibold" style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)", fontFamily: "var(--font-sans)", letterSpacing: "0.08em", fontWeight: 500 }}>Özel Özde</span>
              Rehberlik ve
              <br />
              Psikolojik
              <br />
              <em className="not-italic text-sage">Danışmanlık</em>
              <br />
              Merkezi
            </motion.h1>
          </div>

          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 1.1, ease }}
            className="mt-8 w-20 h-px bg-gradient-to-r from-sage to-transparent origin-left"
          />

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {[
              { icon: "✓", text: "Çocuk & Ergen" },
              { icon: "✓", text: "Yetişkin" },
              { icon: "✓", text: "Aile Danışmanlığı" },
            ].map((item) => (
              <span
                key={item.text}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/70 border border-cream-dark text-xs font-sans text-charcoal shadow-sm"
                style={{ backdropFilter: "blur(8px)" }}
              >
                <span className="text-sage font-bold">{item.icon}</span>
                {item.text}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-warm-gray/35 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-warm-gray/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
