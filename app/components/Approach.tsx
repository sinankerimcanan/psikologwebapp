"use client";

import FadeIn from "./FadeIn";

const methods = [
  {
    code: "BDT",
    name: "Bilişsel Davranışçı Terapi",
    desc: "Düşünce ve davranış kalıplarını yeniden şekillendirme.",
  },
  {
    code: "EMDR",
    name: "EMDR",
    desc: "Travma ve zorlayıcı anıların işlenmesi için kanıtlanmış yöntem.",
  },
  {
    code: "ŞT",
    name: "Şema Terapi",
    desc: "Köklü kalıpları ve savunma mekanizmalarını keşfetme.",
  },
  {
    code: "FT",
    name: "Farkındalık Temelli",
    desc: "An'a dönme ve iç gözlem kapasitesini güçlendirme.",
  },
];

export default function Approach() {
  return (
    <section id="yaklasim" className="py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top label */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-16">
            <span className="w-10 h-px bg-charcoal/25" />
            <span className="text-[11px] font-sans font-medium tracking-[0.28em] uppercase text-warm-gray">
              Yaklaşımımız
            </span>
          </div>
        </FadeIn>

        {/* Split layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
          {/* Left: Massive quote */}
          <FadeIn className="md:col-span-7" direction="left" duration={1.0}>
            <blockquote className="space-y-6">
              <p className="font-serif text-[2.1rem] md:text-[2.6rem] xl:text-[3.2rem] leading-[1.2] text-charcoal">
                &ldquo;Her insan, kendi hikayesinin en önemli kahramanıdır.
                Terapide yaptığımız şey, o hikayenin{" "}
                <em className="not-italic text-sage">daha sağlıklı</em> ve güçlü
                bir versiyonunu birlikte yazmaktır.&rdquo;
              </p>
              <footer className="flex items-center gap-3 pt-2">
                <span className="w-8 h-px bg-sage" />
                <cite className="not-italic font-sans text-sm text-warm-gray tracking-wide">
                  Özde Rehberlik Psikolojik Danışmanlık Merkezi
                </cite>
              </footer>
            </blockquote>
          </FadeIn>

          {/* Right: Methods + paragraph */}
          <div className="md:col-span-5 space-y-10">
            <FadeIn direction="right" delay={0.15}>
              <p className="font-sans text-base text-warm-gray leading-relaxed">
                Danışanlarımla kurduğum ilişki; yargılamayan, güvenli ve şeffaf
                bir zemine dayanır. Her bireyin benzersiz olduğuna inanarak,
                size özel bir terapi planı oluştururum.
              </p>
            </FadeIn>

            {/* Method grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {methods.map((m, i) => (
                <FadeIn key={m.code} delay={0.15 + i * 0.1} direction="up">
                  <div className="group rounded-2xl border border-charcoal/8 bg-white/60 px-5 py-4 hover:bg-white hover:border-sage/25 hover:shadow-sm transition-all duration-300 cursor-default">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="inline-block text-[10px] font-sans font-bold tracking-[0.2em] text-sage uppercase bg-sage-light/40 px-2 py-0.5 rounded-full">
                        {m.code}
                      </span>
                    </div>
                    <p className="font-sans text-xs font-semibold text-charcoal leading-snug mb-1">
                      {m.name}
                    </p>
                    <p className="font-sans text-xs text-warm-gray leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom large decorative text */}
        {/* <FadeIn className="mt-24 md:mt-32 overflow-hidden" delay={0.1}>
          <p
            className="font-serif leading-none text-[5rem] md:text-[8rem] xl:text-[10rem] text-charcoal/[0.04] select-none pointer-events-none tracking-tight whitespace-nowrap"
            aria-hidden
          >
            Güven · Empati · İyileşme
          </p>
        </FadeIn> */}
      </div>
    </section>
  );
}
