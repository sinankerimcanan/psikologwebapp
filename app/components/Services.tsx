"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const services = [
  {
    number: "01",
    title: "Bireysel Terapi",
    description:
      "Hayatınızın zorlu dönemlerinde duygusal sıkıntılarınızı anlamak ve aşmak için birebir çalışıyoruz. Kişiselleştirilmiş bir yaklaşımla içsel gücünüzü birlikte keşfediyoruz.",
    accent: "sage" as const,
    colSpan: "md:col-span-2 md:row-span-2",
    large: true,
  },
  {
    number: "02",
    title: "Çift Terapisi",
    description:
      "İletişim sorunlarını aşmak ve birlikteliği güçlendirmek için çiftlerle çalışıyorum.",
    accent: "mink" as const,
    colSpan: "",
    large: false,
  },
  {
    number: "03",
    title: "Kaygı Bozukluğu",
    description:
      "Anksiyete ve panik ataklarla başa çıkmak için kanıta dayalı yöntemler.",
    accent: "sage" as const,
    colSpan: "",
    large: false,
  },
  {
    number: "04",
    title: "Online Seans",
    description:
      "Evinizin konforunda, güvenli ve etkin online terapi seansları.",
    accent: "mink" as const,
    colSpan: "",
    large: false,
  },
  {
    number: "05",
    title: "Depresyon",
    description:
      "Depresyon belirtilerini anlamak ve hayata yeniden bağlanmak için destek.",
    accent: "sage" as const,
    colSpan: "",
    large: false,
  },
  {
    number: "06",
    title: "Travma & EMDR",
    description:
      "Geçmiş travmaların iyileşmesi için EMDR ve kanıtlanmış terapi yöntemleri.",
    accent: "mink" as const,
    colSpan: "",
    large: false,
  },
];

const accentMap = {
  sage: {
    number: "text-sage",
    dot: "bg-sage",
    hover: "hover:border-sage/30",
    arrow: "text-sage",
  },
  mink: {
    number: "text-mink",
    dot: "bg-mink",
    hover: "hover:border-mink/30",
    arrow: "text-mink",
  },
};

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const colors = accentMap[service.accent];
  return (
    <motion.div
      className={`${service.colSpan} h-full`}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      <motion.div
        className={`glass-card h-full rounded-[1.75rem] p-7 md:p-8 flex flex-col justify-between cursor-default transition-colors duration-300 ${colors.hover} ${service.large ? "min-h-[280px]" : ""}`}
        whileHover={{
          scale: 1.015,
          boxShadow:
            "0 24px 60px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)",
        }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
      >
        {/* Card header */}
        <div className="flex justify-between items-start">
          <span
            className={`font-sans text-[10px] font-bold tracking-[0.25em] uppercase ${colors.number}`}
          >
            {service.number}
          </span>
          <div className={`w-1.5 h-1.5 rounded-full ${colors.dot} opacity-50`} />
        </div>

        {/* Card body */}
        <div className={`${service.large ? "space-y-4" : "mt-4 space-y-2.5"}`}>
          <h3
            className={`font-serif text-charcoal leading-tight ${
              service.large
                ? "text-3xl md:text-4xl xl:text-[2.75rem]"
                : "text-xl md:text-2xl"
            }`}
          >
            {service.title}
          </h3>
          <p
            className={`font-sans text-warm-gray leading-relaxed ${
              service.large ? "text-sm md:text-base max-w-[340px]" : "text-xs md:text-sm"
            }`}
          >
            {service.description}
          </p>

          {service.large && (
            <motion.a
              href="#iletisim"
              className={`inline-flex items-center gap-2 mt-3 text-sm font-sans font-medium ${colors.arrow} group`}
              whileHover="hover"
            >
              <span className="border-b border-current pb-px">
                Detaylı Bilgi
              </span>
              <motion.svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                variants={{ hover: { x: 4 } }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="hizmetler" className="py-28 relative overflow-hidden">
      {/* Gradient background — needed for glassmorphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#b8ccb0] via-[#d4c4b2] to-[#a8c0a8]" />
      {/* Ambient light blobs */}
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] rounded-full bg-white/20 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[380px] h-[380px] rounded-full bg-mink/20 blur-[80px] pointer-events-none" />
      <div className="absolute top-3/4 left-1/3 w-[300px] h-[300px] rounded-full bg-sage/15 blur-[70px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <FadeIn className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-charcoal/30" />
            <span className="text-[11px] font-sans font-medium tracking-[0.28em] uppercase text-charcoal/55">
              Uzmanlık Alanlarım
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl xl:text-6xl text-charcoal max-w-xl leading-[1.1]">
            Size nasıl yardımcı
            <br />
            <em className="not-italic text-charcoal/55">olabilirim?</em>
          </h2>
        </FadeIn>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 services-grid gap-4 overflow-visible">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
