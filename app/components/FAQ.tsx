"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "Terapi sürecine nasıl başlanır?",
    a: "İlk adım, ücretsiz bir ön görüşme randevusu almaktır. Bu 20 dakikalık görüşmede beklentilerinizi ve ihtiyaçlarınızı konuşur, terapi sürecinin nasıl işleyeceğini birlikte değerlendiririz. Ardından size en uygun seans planını oluştururuz.",
  },
  {
    q: "Bir seans ne kadar sürer?",
    a: "Her seans yaklaşık 50 dakika sürer. Seanslar genellikle haftada bir kez planlanır; ancak ihtiyaca göre iki haftada bir veya daha farklı bir sıklıkta da çalışabiliriz.",
  },
  {
    q: "Kaç seans gerekebilir?",
    a: "Bu tamamen kişinin ihtiyacına ve hedeflerine bağlıdır. Spesifik bir konu için 8–12 seans yeterli olabilirken, daha derin bir çalışma için süreç uzayabilir. İlerlemenizi düzenli olarak birlikte değerlendiririz.",
  },
  {
    q: "Online terapi yüz yüze kadar etkili mi?",
    a: "Evet. Pek çok araştırma, online terapinin yüz yüze terapi ile benzer etkinlikte olduğunu göstermektedir. Önemli olan güvenli, istikrarlı bir internet bağlantısı ve kendinizi ifade edebileceğiniz rahat bir ortam. Online seanslarımızda da tam gizlilik sağlanmaktadır.",
  },
  {
    q: "Danışan gizliliği nasıl korunur?",
    a: "Seanslarınızda paylaştığınız tüm bilgiler yasal etik kurallar çerçevesinde kesinlikle gizli tutulur. Yalnızca sizin hayatınıza ya da başkalarına yönelik ciddi bir tehlike söz konusu olduğunda zorunlu bildirim yükümlülüğü doğabilir; bu durum önceden size açıklanır.",
  },
  {
    q: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
    a: "Kredi kartı, banka havalesi ve nakit ödeme kabul edilmektedir. Bazı özel sağlık sigortaları psikolog seanslarını kapsamaktadır; sigorta şirketinizle görüşerek fatura talep edebilirsiniz.",
  },
];

function AccordionItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <FadeIn delay={index * 0.07}>
      <div className="border-b border-charcoal/8 last:border-0">
        <button
          onClick={onToggle}
          className="w-full flex items-start justify-between gap-6 py-6 text-left group"
          aria-expanded={isOpen}
        >
          <span
            className={`font-sans text-sm md:text-base font-medium transition-colors duration-300 leading-snug pr-2 ${
              isOpen ? "text-sage" : "text-charcoal group-hover:text-sage"
            }`}
          >
            {faq.q}
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-colors duration-300 ${
              isOpen
                ? "border-sage bg-sage text-white"
                : "border-charcoal/20 text-charcoal group-hover:border-sage group-hover:text-sage"
            }`}
          >
            <svg
              className="w-2.5 h-2.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden"
            >
              <p className="font-sans text-sm text-warm-gray leading-relaxed pb-6 max-w-2xl">
                {faq.a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="sss" className="py-32 bg-cream-dark/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20">

          {/* Left: Header */}
          <div className="md:col-span-4">
            <FadeIn>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-charcoal/25" />
                <span className="text-[11px] font-sans font-medium tracking-[0.28em] uppercase text-warm-gray">
                  SSS
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-[1.1] mb-6">
                Merak
                <br />
                <em className="not-italic text-sage">edilenler</em>
              </h2>
              <p className="font-sans text-sm text-warm-gray leading-relaxed mb-8">
                Başka sorunuz varsa, doğrudan iletişime geçmekten çekinmeyin.
              </p>
              <motion.a
                href="#iletisim"
                className="inline-flex items-center gap-2 text-sm font-sans font-medium text-charcoal group"
                whileHover="hover"
              >
                <span className="border-b border-charcoal/30 pb-px group-hover:border-sage group-hover:text-sage transition-colors duration-300">
                  Soru sor
                </span>
                <motion.svg
                  className="w-3.5 h-3.5 text-charcoal group-hover:text-sage transition-colors duration-300"
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
            </FadeIn>
          </div>

          {/* Right: Accordion */}
          <div className="md:col-span-8">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
