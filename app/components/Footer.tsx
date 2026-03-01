"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const quickLinks = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Yaklaşımım", href: "#yaklasim" },
  { label: "SSS", href: "#sss" },
  { label: "Randevu Al", href: "#iletisim" },
];

const hours = [
  { day: "Pazartesi – Cuma", time: "09:00 – 18:00" },
  { day: "Cumartesi", time: "10:00 – 14:00" },
  { day: "Pazar", time: "Kapalı" },
];

export default function Footer() {
  return (
    <footer id="iletisim" className="bg-charcoal text-cream/70 pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top: CTA banner */}
        <FadeIn className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-b border-white/10 pb-20">
            <div className="space-y-3">
              <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-sage">
                Başlamaya hazır mısınız?
              </p>
              <h2 className="font-serif text-4xl md:text-5xl xl:text-6xl text-cream leading-[1.05]">
                İlk adımı
                <br />
                <em className="not-italic text-sage">birlikte</em> atalım.
              </h2>
            </div>
            <motion.a
              href="mailto:info@drayse.com"
              className="inline-flex items-center gap-3 px-8 py-4 border border-cream/20 text-cream rounded-full font-sans text-sm font-medium tracking-wide hover:bg-cream hover:text-charcoal transition-colors duration-400 self-start md:self-auto whitespace-nowrap"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              Randevu Talebi Gönder
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
          </div>
        </FadeIn>

        {/* Middle: 3-column info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <FadeIn delay={0.05}>
            <div className="space-y-4">
              <div>
                <p className="font-serif text-xl text-cream font-semibold">
                  Dr. Ayşe Kaya
                </p>
                <p className="font-sans text-xs tracking-[0.18em] uppercase text-warm-gray mt-0.5">
                  Klinik Psikolog
                </p>
              </div>
              <p className="font-sans text-sm text-cream/55 leading-relaxed max-w-[260px]">
                Ruha dokunmak bir sanattır. Bilim ve empatiyi birleştirerek, her
                danışanıma en iyi versiyonuna ulaşma yolunda eşlik ediyorum.
              </p>
              {/* Social icons */}
              <div className="flex gap-3 pt-2">
                {[
                  {
                    label: "Instagram",
                    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                  },
                  {
                    label: "LinkedIn",
                    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                  },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-cream/40 hover:text-cream hover:border-white/30 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d={s.path} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Quick links */}
          <FadeIn delay={0.1}>
            <div>
              <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-warm-gray mb-5">
                Hızlı Bağlantılar
              </p>
              <ul className="space-y-3">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="font-sans text-sm text-cream/60 hover:text-cream transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-3 h-px bg-cream/20 group-hover:bg-sage group-hover:w-5 transition-all duration-300" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Contact + hours */}
          <FadeIn delay={0.15}>
            <div className="space-y-8">
              <div>
                <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-warm-gray mb-5">
                  İletişim
                </p>
                <div className="space-y-2.5">
                  <a
                    href="tel:+905001234567"
                    className="flex items-center gap-2 font-sans text-sm text-cream/60 hover:text-cream transition-colors duration-300"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-sage flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +90 500 123 45 67
                  </a>
                  <a
                    href="mailto:info@drayse.com"
                    className="flex items-center gap-2 font-sans text-sm text-cream/60 hover:text-cream transition-colors duration-300"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-sage flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    info@drayse.com
                  </a>
                  <p className="flex items-start gap-2 font-sans text-sm text-cream/60">
                    <svg
                      className="w-3.5 h-3.5 text-sage flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Bağcılar Mah. Nişantaşı, İstanbul
                  </p>
                </div>
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-warm-gray mb-4">
                  Çalışma Saatleri
                </p>
                <ul className="space-y-2">
                  {hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between font-sans text-xs text-cream/55"
                    >
                      <span>{h.day}</span>
                      <span
                        className={
                          h.day === "Pazar" ? "text-warm-gray" : "text-cream/70"
                        }
                      >
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom bar */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/8 pt-8">
            <p className="font-sans text-xs text-cream/30 tracking-wide">
              © {new Date().getFullYear()} Dr. Ayşe Kaya. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-4">
              <p className="font-serif text-xs text-cream/25 italic hidden md:block">
                &ldquo;Ruha dokunmak bir sanattır.&rdquo;
              </p>
              <span className="hidden md:block text-cream/10">·</span>
              <a
                href="http://kerux.tr/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[11px] text-cream/25 hover:text-cream/60 transition-colors duration-300 tracking-wide flex items-center gap-1.5 group"
              >
                Powered by
                <span className="font-semibold tracking-wider group-hover:text-sage transition-colors duration-300">
                  keruX
                </span>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
