"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import { HizmetGrid, SertifikaGrid } from "./ExpertHizmetler";
import { hizmetlerByExpert } from "./hizmetlerData";

const experts = [
  {
    id: "ada",
    image: "/assets/Adafoto.JPG",
    name: "Psikolog Ada Uyan",
    title: "Psikolog / II.Düzey EMDR Terapisti",
    location: "Konya · Yüz yüze & Online",
    shortDesc:
      "Bilimsel temellere dayalı, etik ilkelere bağlı ve danışan odaklı bir klinik anlayışla çalışmaktadır.",
    tags: ["EMDR", "BDT", "Travma Odaklı Terapi", "Çözüm Odaklı"],
    about: [
      "Psikolog Ada Uyan, mesleki çalışmalarını bilimsel temellere dayalı, etik ilkelere bağlı ve danışan odaklı bir klinik anlayış çerçevesinde sürdürmektedir.",
      "Konya merkezli olarak yüz yüze ve online terapi hizmeti sunan Psikolog Ada Uyan; ergenler, yetişkinler, çiftler ve ailelerle çalışmakta, farklı terapi ekollerini bütüncül bir yaklaşımla kullanarak danışanlarının ihtiyaçlarına özel terapi süreçleri planlamaktadır.",
      "Klinik çalışmalarında travma odaklı terapi yöntemlerinin yanı sıra kaygı, depresyon, duygu düzenleme ve ilişki sorunları gibi farklı alanlarda da aktif olarak çalışmaktadır. EMDR 2. Düzey, EMDR 2.0, Bilişsel Davranışçı Terapi (BDT), Aile Danışmanlığı, Çözüm Odaklı Terapi ve Travma Odaklı Çocuk–Ergen BDT alanlarında çeşitli mesleki eğitimler almıştır.",
      "Meslek hayatı boyunca hem klinik hem de saha deneyimi kazanmıştır. Konya Gıda ve Tarım Üniversitesi Psikolojik Danışmanlık ve Araştırma Merkezi'nde görev almış; 6 Şubat Kahramanmaraş depremlerinin ardından Hatay ve Adıyaman'da uzun süre afet sonrası psikolojik destek, travma terapisi ve kriz müdahalesi çalışmalarında aktif rol almıştır.",
      "Afet sonrası dönemde edindiği yoğun klinik deneyim, özellikle travma terapisi ve EMDR terapisi alanındaki uzmanlığını derinleştirmiştir. Terapilerinde; travmatik yaşantıların işlenmesi, duygu düzenleme becerilerinin geliştirilmesi ve güven duygusunun yeniden inşası üzerine çalışmaktadır.",
    ],
    services: [
      "Kaygı bozuklukları",
      "Depresyon",
      "Travma sonrası stres bozukluğu (TSSB)",
      "Obsesif kompulsif bozukluk (OKB)",
      "Panik bozukluk",
      "Sınav ve performans kaygısı (özellikle ergenlerle)",
      "Öfke ve duygu düzenleme güçlükleri",
      "İlişki ve iletişim sorunları",
      "Travma ve yas süreçleri",
      "Stres ve tükenmişlik",
      "Uyum sorunları",
      "Benlik algısı ve benlik saygısı",
      "Duygusal yeme davranışı",
    ],
    initials: "AU",
    color: "from-sage to-sage-dark",
  },
  {
    id: "aybuke",
    image: "/assets/tuce.JPG",
    name: "Psikolog Aybüke Tuçe Esen",
    title: "Psikolog / Floortime Terapisti",
    location: "Konya · Yüz yüze & Online",
    shortDesc:
      "Gelişimsel ve ruhsal alanları birlikte ele alan bütüncül bir yaklaşımla, özellikle özel gereksinimli bireylerle çalışmaktadır.",
    tags: ["DIR/Floortime", "DEHB", "OSB", "SOS Beslenme"],
    about: [
      "Psikolog Aybüke Tuçe Esen, gelişimsel ve ruhsal alanları birlikte ele alan bütüncül bir yaklaşımla çalışmalarını sürdürmektedir. Danışanlarının duygusal dünyasını, içsel süreçlerini ve psikolojik dayanıklılıklarını merkeze alan bir anlayışla; bilimsel temellere dayalı, etik ilkelere bağlı ve danışan odaklı bir hizmet sunmaktadır.",
      "Mesleki çalışmalarını ağırlıklı olarak özel gereksinimli bireyler üzerine yoğunlaştıran Psikolog Aybüke Tuçe Esen; Otizm Spektrum Bozukluğu, Dikkat Eksikliği ve Hiperaktivite Bozukluğu (DEHB), özgül öğrenme güçlüğü (disleksi), zihinsel yetersizlik ve üstün zeka alanlarında değerlendirme ve müdahale süreçlerinde aktif olarak hizmet vermektedir.",
      "Antalya/Manavgat'ta kurucusu olduğu merkezde uzun yıllar çalışmalar yürütmüş; şu anda Konya'da kurucusu olduğu Özde Rehberlik ve Psikolojik Danışmanlık Merkezi bünyesinde danışan kabul etmektedir.",
      "DIR/Floortime İleri Düzey Terapisti ve SOS Beslenme Terapisi İleri Düzey Uygulayıcısı olan Psikolog Aybüke Tuçe Esen; bebek, çocuk ve ergenlerle yürütülen terapötik süreçlerde gelişimsel, bilişsel, davranışsal ve duygusal alanları bütüncül bir çerçevede ele almaktadır.",
      "Klinik çalışmalarında her çocuğun bireysel gelişim özelliklerini, duygusal ihtiyaçlarını ve aile dinamiklerini dikkate alarak yapılandırılmış, kişiye özel müdahale planları oluşturmaktadır.",
    ],
    services: [
      "Otizm Spektrum Bozukluğu (OSB)",
      "Dikkat Eksikliği ve Hiperaktivite Bozukluğu (DEHB)",
      "Özgül Öğrenme Güçlüğü (Disleksi)",
      "Zihinsel Yetersizlik",
      "Üstün Zeka",
      "Selektif Mutizmde Danışmanlık",
      "Gelişimsel Değerlendirme ve Takip",
      "Gelişim Testleri",
      "Zeka Testleri",
      "Resim Analizi",
      "Çocuk ve Ergen Danışmanlığı (Kaygı, Depresyon, Okula Uyum vb.)",
      "Davranış Problemleri",
      "Öfke Problemleri",
      "Tuvalet Alışkanlığı Sorunları",
      "Duygu Düzenleme Güçlükleri",
      "Sosyal Becerilerin Geliştirilmesi",
      "Çocukluk Çağı Korkuları ve Travmaları",
      "Obsesif Kompulsif Belirtiler (OKB)",
      "Travma Sonrası Stres Bozukluğu (TSSB)",
      "Aile & Ebeveyn Danışmanlığı",
      "DIR/Floortime Temelli Müdahaleler (İleri Düzey)",
      "SOS Beslenme Terapisi (İleri Düzey)",
      "Oyun Terapisi",
      "Bilişsel Davranışçı Terapi (BDT)",
      "COGENT",
      "MEGA-DIS",
      "Zihin Kuramı Becerileri",
    ],
    initials: "AE",
    color: "from-mink to-[#b8906a]",
  },
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

type Tab = "hakkinda" | "hizmetler" | "sertifikalar";

const tabLabels: Record<Tab, string> = {
  hakkinda: "Hakkında",
  hizmetler: "Hizmetler",
  sertifikalar: "Sertifikalar",
};

export default function Experts() {
  const [activeId, setActiveId] = useState("ada");
  const [activeTab, setActiveTab] = useState<Tab>("hakkinda");

  const expert = experts.find((e) => e.id === activeId)!;
  const hizmet = hizmetlerByExpert[expert.id];
  const tabs: Tab[] = ["hakkinda", "hizmetler", "sertifikalar"];

  return (
    <section
      id="uzman-kadro"
      className="py-28 md:py-36 bg-cream overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-sage" />
            <span className="text-[11px] font-sans font-medium tracking-[0.28em] uppercase text-sage">
              Uzman Kadromuz
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-serif text-[2.4rem] md:text-[3rem] leading-[1.1] text-charcoal mb-12">
            Ekibimizle
            <br />
            <em className="not-italic text-sage">Tanışın</em>
          </h2>
        </FadeIn>

        {/* Expert selector tabs */}
        <FadeIn delay={0.15}>
          <div className="flex flex-wrap gap-3 mb-12">
            {experts.map((e) => (
              <button
                key={e.id}
                onClick={() => {
                  setActiveId(e.id);
                  setActiveTab("hakkinda");
                }}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl border transition-all duration-300 font-sans text-sm font-medium ${
                  activeId === e.id
                    ? "bg-charcoal text-cream border-charcoal shadow-lg"
                    : "bg-white text-warm-gray border-charcoal/10 hover:border-charcoal/25 hover:text-charcoal"
                }`}
              >
                {/* Avatar */}
                <span className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 relative">
                  <Image
                    src={e.image}
                    alt={e.name}
                    fill
                    className="object-cover object-top"
                  />
                </span>
                <span className="hidden sm:inline">{e.name}</span>
                <span className="sm:hidden">
                  {e.initials === "AU" ? "Ada Uyan" : "Aybüke Esen"}
                </span>
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Profile card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
          >
            {/* ── Left: Profile panel ── */}
            <div className="lg:col-span-4 space-y-5">
              {/* Profile card */}
              <div className="rounded-3xl bg-white border border-charcoal/6 shadow-sm overflow-hidden">
                {/* Photo */}
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>

                {/* Minimal info */}
                <div className="px-6 pt-5 pb-5">
                  <p className="font-sans text-[10px] font-semibold tracking-[0.22em] uppercase text-warm-gray mb-1">
                    {expert.title.split("·")[0].trim()}
                  </p>
                  <h3 className="font-serif text-xl text-charcoal leading-tight mb-3">
                    {expert.name.replace("Psikolog ", "")}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-xs font-sans text-warm-gray mb-4">
                    <svg
                      className="w-3.5 h-3.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
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
                    {expert.location}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {expert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-sans font-medium tracking-wide text-sage bg-sage-light/35 px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="px-6 pb-6 space-y-3">
                  <a
                    href="#iletisim"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-charcoal text-cream rounded-xl font-sans text-sm font-medium tracking-wide hover:bg-sage transition-colors duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Randevu Al
                  </a>
                  <a
                    href="#iletisim"
                    className="flex items-center justify-center gap-2 w-full py-3.5 border border-charcoal/12 text-charcoal rounded-xl font-sans text-sm font-medium tracking-wide hover:bg-charcoal/5 transition-colors duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
                      />
                    </svg>
                    İletişime Geç
                  </a>
                </div>
              </div>

              {/* Online / Yüz yüze badge */}
              <div className="rounded-2xl bg-white border border-charcoal/6 px-6 py-4 flex items-center gap-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sage" />
                  </span>
                  <span className="font-sans text-xs font-medium text-charcoal">
                    Seans Müsait
                  </span>
                </div>
                <span className="h-4 w-px bg-charcoal/10" />
                <div className="flex items-center gap-1.5 text-xs font-sans text-warm-gray">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Yüz yüze & Online
                </div>
              </div>
            </div>

            {/* ── Right: Detail panel ── */}
            <div className="lg:col-span-8">
              <div className="rounded-3xl bg-white border border-charcoal/6 shadow-sm overflow-hidden">
                {/* Tab header */}
                <div className="flex border-b border-charcoal/6 px-8">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`relative py-5 mr-8 font-sans text-sm font-medium tracking-wide transition-colors duration-300 ${
                        activeTab === tab
                          ? "text-charcoal"
                          : "text-warm-gray hover:text-charcoal"
                      }`}
                    >
                      {tabLabels[tab]}
                      {activeTab === tab && (
                        <motion.span
                          layoutId="expert-tab-indicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-sage rounded-full"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Tab content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeId}-${activeTab}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease }}
                    className="p-8"
                  >
                    {activeTab === "hakkinda" ? (
                      <div className="space-y-5">
                        <div className="flex items-center gap-2 mb-6">
                          <span className="text-[10px] font-sans font-bold tracking-[0.22em] text-sage uppercase bg-sage-light/40 px-3 py-1 rounded-full">
                            Mesleki Deneyim
                          </span>
                        </div>
                        {expert.about.map((para, i) => (
                          <p
                            key={i}
                            className="font-sans text-[0.95rem] text-charcoal/80 leading-[1.9] text-justify"
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    ) : activeTab === "sertifikalar" ? (
                      <SertifikaGrid certificates={hizmet.certificates} />
                    ) : (
                      <HizmetGrid services={hizmet.services} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
