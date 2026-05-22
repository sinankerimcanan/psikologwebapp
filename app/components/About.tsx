"use client";

import FadeIn from "./FadeIn";

const paragraphs = [
  {
    text: "Özel Özde Rehberlik ve Psikolojik Danışmanlık Merkezi, 2026 yılında kurulmuş olup Milli Eğitim Bakanlığı'na bağlı olarak faaliyet göstermektedir. 29 Mart 2025 tarihinde yürürlüğe giren güncel düzenlemeler doğrultusunda, fiziki koşullardan uzman kadro yeterliliklerine kadar tüm mevzuat gereklilikleri titizlikle yerine getirilmiş ve merkezimiz resmî olarak ruhsatlandırılmıştır.",
    accent: "Kuruluş & Lisans",
  },
  {
    text: "Merkezimiz; etik ilkelere bağlı, bilimsel temelli ve güvenilir hizmet anlayışıyla hareket ederek, her bireyin kendini anlaşılmış, kabul edilmiş ve güvende hissedebileceği profesyonel bir danışmanlık ortamı sunmayı amaçlamaktadır.",
    accent: "Misyonumuz",
  },
  {
    text: "Danışanlarımızın ihtiyaçlarını bütüncül bir bakış açısıyla ele alarak, bireysel farklılıkları gözeten, gizlilik ilkesine duyarlı ve sürdürülebilir iyilik halini destekleyen bir yaklaşım benimsemekteyiz. Bu doğrultuda, sadece mevcut sorunlara odaklanan değil; aynı zamanda bireyin potansiyelini ortaya çıkarmayı ve yaşam kalitesini artırmayı hedefleyen bir çalışma anlayışıyla hizmet vermekteyiz.",
    accent: "Yaklaşımımız",
  },
];

const hizmetler = [
  {
    title: "Bireysel Terapi",
    desc: "Duygusal sıkıntıları anlamak ve aşmak için kişiye özel, birebir terapi süreci.",
  },
  {
    title: "Çift Terapisi",
    desc: "İletişim sorunlarını aşmak ve birlikteliği güçlendirmek için çiftlere yönelik destek.",
  },
  {
    title: "Kaygı Bozukluğu",
    desc: "Anksiyete ve panik ataklarla başa çıkmak için kanıta dayalı yöntemler.",
  },
  {
    title: "Online Seans",
    desc: "Evinizin konforunda, güvenli ve etkin online terapi seansları.",
  },
  {
    title: "Depresyon",
    desc: "Depresyon belirtilerini anlamak ve hayata yeniden bağlanmak için destek.",
  },
  {
    title: "Travma & EMDR",
    desc: "Geçmiş travmaların iyileşmesi için EMDR ve kanıtlanmış terapi yöntemleri.",
  },
];

export default function About() {
  return (
    <section id="hakkimizda" className="py-28 md:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section label */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-16">
            <span className="w-10 h-px bg-sage" />
            <span className="text-[11px] font-sans font-medium tracking-[0.28em] uppercase text-sage">
              Hakkımızda
            </span>
          </div>
        </FadeIn>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left sticky heading */}
          <FadeIn className="lg:col-span-4" direction="left" duration={1.0}>
            <div className="lg:sticky lg:top-28">
              <h2 className="font-serif text-[2.6rem] md:text-[3.2rem] leading-[1.1] text-charcoal mb-6">
                Biz
                <br />
                <em className="not-italic text-sage">Kimiz?</em>
              </h2>
              <p className="font-sans text-sm text-warm-gray leading-relaxed mb-8 max-w-xs">
                Bilimsel temelli yaklaşımla bireyin potansiyelini ortaya çıkarmayı ve yaşam kalitesini artırmayı hedefliyoruz.
              </p>
              {/* Trust badges */}
              <div className="space-y-3">
                {[
                  { label: "MEB Onaylı", sublabel: "Millî Eğitim Bakanlığı" },
                  { label: "Resmî Ruhsatlı", sublabel: "2026 Yılından İtibaren" },
                  { label: "Gizlilik Güvencesi", sublabel: "Etik İlkelere Bağlı" },
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-cream border border-cream-dark"
                  >
                    <div className="w-7 h-7 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold text-charcoal leading-tight">{badge.label}</p>
                      <p className="font-sans text-[10px] text-warm-gray leading-tight">{badge.sublabel}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right: Paragraphs */}
          <div className="lg:col-span-8 space-y-6">
            {paragraphs.map((para, i) => (
              <FadeIn key={para.accent} delay={0.1 + i * 0.12} direction="up">
                <div className="group rounded-3xl border border-charcoal/6 bg-cream/60 px-8 py-8 hover:bg-white hover:border-sage/20 hover:shadow-md transition-all duration-400">
                  {/* Accent label */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="inline-block text-[10px] font-sans font-bold tracking-[0.22em] text-sage uppercase bg-sage-light/40 px-3 py-1 rounded-full">
                      {para.accent}
                    </span>
                  </div>
                  {/* Paragraph text */}
                  <p className="font-sans text-base md:text-[1.05rem] text-charcoal/80 leading-[1.85] text-justify">
                    {para.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* ── Hizmetlerimiz ── */}
        <div id="hizmetler" className="mt-24 md:mt-32 scroll-mt-28">
          <FadeIn>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-sage" />
              <span className="text-[11px] font-sans font-medium tracking-[0.28em] uppercase text-sage">
                Neler Sunuyoruz
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="font-serif text-[2.2rem] md:text-[2.9rem] leading-[1.1] text-charcoal mb-10">
              Hizmetlerimiz
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {hizmetler.map((h, i) => (
              <FadeIn key={h.title} className="h-full" delay={0.06 * i} distance={24}>
                <div className="flex items-start gap-4 h-full rounded-2xl border border-charcoal/6 bg-cream/60 px-5 py-4 hover:bg-white hover:border-sage/20 hover:shadow-md transition-all duration-300">
                  <span className="w-9 h-9 rounded-xl bg-sage/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  <div>
                    <h3 className="font-serif text-lg text-charcoal leading-tight mb-1">
                      {h.title}
                    </h3>
                    <p className="font-sans text-[0.83rem] text-warm-gray leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Bottom decorative watermark */}
        <FadeIn className="mt-24 overflow-hidden" delay={0.1}>
          <p
            className="font-serif leading-none text-[5rem] md:text-[8rem] xl:text-[10rem] text-charcoal/[0.035] select-none pointer-events-none tracking-tight whitespace-nowrap"
            aria-hidden
          >
            Güven · Bilim · İyilik
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
