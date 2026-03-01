"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Yıl Deneyim" },
  { value: "500+", label: "Danışan" },
  { value: "%98", label: "Memnuniyet" },
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-sage-light/25 blur-[140px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] rounded-full bg-mink-light/35 blur-[110px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full bg-sage-light/10 blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20 md:py-0 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center w-full">

        {/* ── Left: Text ── */}
        <div className="space-y-8">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="flex items-center gap-3"
          >
            <span className="w-10 h-px bg-sage" />
            <span className="text-[11px] font-sans font-medium tracking-[0.28em] uppercase text-sage">
              İstanbul · Klinik Psikoloji
            </span>
          </motion.div>

          {/* Main heading */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.35, ease }}
              className="font-serif text-[4.5rem] md:text-[5.5rem] xl:text-[7rem] leading-[0.88] text-charcoal"
            >
              Ruhunuza
              <br />
              <em className="not-italic text-sage">Alan</em> Açın.
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease }}
            className="font-sans text-base md:text-lg text-warm-gray max-w-[420px] leading-relaxed"
          >
            Düşüncelerinizin, duygularınızın ve ilişkilerinizin daha sağlıklı
            bir denge bulması için güvenli, yargılamayan bir alan yaratıyorum.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease }}
            className="flex gap-10 pt-2"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <span className="font-serif text-2xl font-semibold text-charcoal">
                  {s.value}
                </span>
                <span className="font-sans text-xs text-warm-gray tracking-wide">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05, ease }}
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

        {/* ── Right: Portrait placeholder ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.5, ease }}
          className="relative hidden md:flex justify-center"
        >
          {/* Portrait frame */}
          <div className="relative w-full max-w-[380px] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-charcoal/10">
            {/* Gradient background (placeholder) */}
            <div className="absolute inset-0 bg-gradient-to-br from-sage-light via-[#d4c4b5] to-[#a8bfa8]" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-white/20" />
            {/* Abstract silhouette hint */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-52 h-80 rounded-full bg-charcoal/10 blur-sm" />
            {/* Decorative ring */}
            <div className="absolute top-8 right-8 w-20 h-20 rounded-full border border-white/35" />
            <div className="absolute top-12 right-12 w-10 h-10 rounded-full border border-white/25" />
            {/* Info card inside portrait */}
            <div className="absolute bottom-6 left-5 right-5">
              <div
                className="rounded-2xl px-4 py-3.5 border border-white/40"
                style={{
                  background: "rgba(255,255,255,0.22)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
              >
                <p className="font-serif text-white text-sm font-medium">
                  Dr. Ayşe Kaya
                </p>
                <p className="font-sans text-white/75 text-xs tracking-wider mt-0.5">
                  Ph.D. · Klinik Psikolog
                </p>
              </div>
            </div>
          </div>

          {/* Floating badge — certified */}
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-8 top-[28%] bg-white rounded-2xl shadow-lg shadow-charcoal/8 px-4 py-3 border border-cream-dark"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-sage-light flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-sage-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-sans text-xs font-semibold text-charcoal">
                  Lisanslı Uzman
                </p>
                <p className="font-sans text-[10px] text-warm-gray leading-tight">
                  Türk Psikologlar Derneği
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating badge — available */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
            className="absolute -right-6 bottom-[28%] bg-white rounded-2xl shadow-lg shadow-charcoal/8 px-4 py-3 border border-cream-dark"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sage" />
              </span>
              <p className="font-sans text-xs font-medium text-charcoal">
                Seans Müsait
              </p>
            </div>
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
