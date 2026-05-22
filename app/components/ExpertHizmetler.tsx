"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Service } from "./hizmetlerData";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

/* ── Service card ── */
function ServiceCard({
  service,
  index,
  onClick,
}: {
  service: Service;
  index: number;
  onClick: () => void;
}) {
  const isLarge = service.span === "large";
  const spanClass =
    service.span === "large"
      ? "md:col-span-2 md:row-span-2"
      : service.span === "wide"
        ? "md:col-span-2"
        : "";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease }}
      whileHover={{ y: -4 }}
      className={`${spanClass} group h-full text-left rounded-[1.5rem] bg-cream/70 border border-charcoal/6 p-6 md:p-7 flex flex-col justify-between hover:bg-white hover:border-sage/30 hover:shadow-md transition-all duration-300`}
    >
      {/* Card header */}
      <div className="flex justify-between items-start">
        <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-sage">
          {service.number}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-sage opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card body */}
      <div className={isLarge ? "mt-5 space-y-3" : "mt-4 space-y-2"}>
        <h4
          className={`font-serif text-charcoal leading-tight ${
            isLarge ? "text-2xl md:text-[2rem]" : "text-lg md:text-xl"
          }`}
        >
          {service.title}
        </h4>
        <p
          className={`font-sans text-warm-gray leading-relaxed ${
            isLarge ? "text-sm md:text-base max-w-[340px]" : "text-xs md:text-[0.8rem]"
          }`}
        >
          {service.blurb}
        </p>
        <span className="inline-flex items-center gap-1.5 mt-1 text-sm font-sans font-medium text-sage">
          <span className="border-b border-current pb-px">Detaylı Bilgi</span>
          <svg
            className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </motion.button>
  );
}

/* ── Detail modal ── */
function ServiceModal({
  service,
  onClose,
}: {
  service: Service | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!service) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [service, onClose]);

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-6 bg-charcoal/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={service.title}
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-3xl bg-white shadow-2xl overflow-hidden"
          >
            {/* Modal header */}
            <div className="flex items-start justify-between gap-4 px-7 md:px-9 pt-7 pb-5 border-b border-charcoal/6">
              <div>
                <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-sage">
                  Hizmet {service.number}
                </span>
                <h3 className="font-serif text-2xl md:text-[1.7rem] text-charcoal leading-tight mt-1.5">
                  {service.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Kapat"
                className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-warm-gray hover:text-charcoal hover:bg-cream-dark transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal body */}
            <div className="overflow-y-auto px-7 md:px-9 py-7 space-y-4">
              {service.content.map((block, i) => {
                if (block.type === "h") {
                  return (
                    <h4
                      key={i}
                      className="font-serif text-lg md:text-xl text-charcoal pt-3 first:pt-0"
                    >
                      {block.text}
                    </h4>
                  );
                }
                if (block.type === "list") {
                  return (
                    <ul key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {block.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 px-3.5 py-2.5 rounded-xl bg-cream/70 border border-charcoal/5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-sage mt-[7px] flex-shrink-0" />
                          <span className="font-sans text-sm text-charcoal/80 leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "steps") {
                  return (
                    <ul key={i} className="space-y-2.5">
                      {block.items.map((item) => (
                        <li
                          key={item.title}
                          className="flex items-start gap-3 px-4 py-3 rounded-xl bg-cream/70 border border-charcoal/5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-sage mt-[9px] flex-shrink-0" />
                          <div>
                            <p className="font-sans text-sm font-semibold text-charcoal leading-snug">
                              {item.title}
                            </p>
                            <p className="font-sans text-[0.85rem] text-charcoal/70 leading-relaxed mt-0.5">
                              {item.text}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p
                    key={i}
                    className={`font-sans leading-[1.85] text-justify ${
                      i === 0
                        ? "text-[1.02rem] text-charcoal"
                        : "text-[0.95rem] text-charcoal/80"
                    }`}
                  >
                    {block.text}
                  </p>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Hizmetler tab: bento grid + detail modal ── */
export function HizmetGrid({ services }: { services: Service[] }) {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <div>
      <p className="font-sans text-sm text-warm-gray mb-6">
        Detaylı bilgi almak için bir hizmete tıklayın.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 services-grid gap-4">
        {services.map((service, i) => (
          <ServiceCard
            key={service.number}
            service={service}
            index={i}
            onClick={() => setActive(service)}
          />
        ))}
      </div>

      <ServiceModal service={active} onClose={() => setActive(null)} />
    </div>
  );
}

/* ── Sertifikalar tab ── */
export function SertifikaGrid({ certificates }: { certificates: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
      {certificates.map((cert, i) => (
        <motion.div
          key={cert}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.04, duration: 0.3 }}
          className="flex items-start gap-3 px-4 py-3 rounded-xl bg-cream/70 border border-charcoal/5"
        >
          <span className="w-7 h-7 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
            <svg
              className="w-4 h-4 text-sage"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <span className="font-sans text-sm text-charcoal/80 leading-snug pt-1">
            {cert}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
