"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

type Block =
  | { type: "h"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] };

type Service = {
  number: string;
  title: string;
  blurb: string;
  large?: boolean;
  content: Block[];
};

// Hizmet içerikleri aciklama.txt kaynağından türetilmiştir.
const services: Service[] = [
  {
    number: "01",
    title: "Online & Yüz yüze Bireysel Terapi",
    blurb:
      "Hayatınızın zorlu dönemlerinde duygusal sıkıntılarınızı anlamak ve aşmak için birebir, kişiye özel terapi süreci.",
    large: true,
    content: [
      {
        type: "p",
        text: "Hayatınızın zorlu dönemlerinde duygusal sıkıntılarınızı anlamak ve aşmak için birebir çalışıyoruz.",
      },
      {
        type: "p",
        text: "Kişiselleştirilmiş bir yaklaşımla içsel gücünüzü birlikte keşfediyor; hem evinizin konforunda online hem de yüz yüze seans seçenekleriyle ihtiyaçlarınıza uygun bir terapi süreci planlıyoruz.",
      },
    ],
  },
  {
    number: "02",
    title: "EMDR Terapisi",
    blurb:
      "Travmatik yaşantıların yeniden işlenmesini sağlayan, bilimsel temellere dayanan etkili bir psikoterapi yaklaşımıdır.",
    content: [
      {
        type: "p",
        text: "Travmatik yaşantıların yeniden işlenmesini sağlayan, bilimsel temellere dayanan etkili bir psikoterapi yaklaşımıdır.",
      },
      {
        type: "p",
        text: "EMDR (Göz Hareketleriyle Duyarsızlaştırma ve Yeniden İşleme), 1987 yılında Dr. Francine Shapiro tarafından geliştirilmiş; günümüzde Dünya Sağlık Örgütü (WHO) ve Amerikan Psikiyatri Birliği (APA) tarafından travma tedavisinde öncelikli yöntemlerden biri olarak kabul edilen kanıta dayalı bir terapi modelidir.",
      },
      { type: "h", text: "EMDR Nasıl Etkili Olmaktadır?" },
      {
        type: "p",
        text: "Beyin, günlük deneyimleri doğal süreçlerle işler ve anlamlı bir şekilde depolar. Ancak travmatik ya da yoğun stres içeren yaşantılar bu süreci sekteye uğratabilir. Bu durumda anılar; görüntüler, duygular ve bedensel duyumlarla birlikte işlenmeden kalır.",
      },
      {
        type: "p",
        text: "EMDR terapisi sırasında danışan, rahatsız edici anıya odaklanırken terapist eş zamanlı olarak çift yönlü uyarım (göz hareketleri, dokunsal ya da işitsel uyaranlar) uygular. Bu süreç, beynin doğal işleme mekanizmasını yeniden aktive ederek anının daha sağlıklı bir şekilde yeniden yapılandırılmasına ve duygusal yoğunluğunun azalmasına yardımcı olur.",
      },
      { type: "h", text: "Kullanılan Alanlar" },
      {
        type: "list",
        items: [
          "Çocukluk Çağı Travmaları",
          "Depresyon",
          "Panik Bozukluk",
          "Sınav Kaygısı / Performans Kaygısı",
          "Öfke ve Duygu Düzenleme Güçlükleri",
          "Stres, Tükenmişlik ve Uyum Sorunları",
          "Kaygı Problemleri",
          "Obsesif Kompulsif Bozukluk",
          "Duygusal Yeme Davranışları ve Yeme ile İlgili Duygusal Zorlanmalar",
          "Kronik Ağrılar",
        ],
      },
      { type: "h", text: "Deneyim" },
      {
        type: "p",
        text: "EMDR 1. ve 2. düzey ile ileri düzey teknikler eğitimlerimi tamamladım. 6 Şubat Kahramanmaraş depreminin ardından yaklaşık üç yıl boyunca afetten etkilenmiş 11 yaş ve üzeri bireylerle çalışarak EMDR terapi ve tekniklerini uyguladım. Bu süreçte travma alanındaki deneyimimi güçlendirdim.",
      },
    ],
  },
  {
    number: "03",
    title: "Bilişsel Davranışçı Terapi",
    blurb:
      "Düşünce, duygu ve davranış arasındaki ilişkiye odaklanan, bilimsel temelli ve yapılandırılmış bir psikoterapi yaklaşımıdır.",
    content: [
      {
        type: "p",
        text: "Düşünce, duygu ve davranış arasındaki ilişkiye odaklanan, bilimsel temelli ve yapılandırılmış bir psikoterapi yaklaşımıdır.",
      },
      {
        type: "p",
        text: "Bilişsel Davranışçı Terapi (BDT), bireyin yaşadığı psikolojik zorlukların; olayların kendisinden çok, bu olaylara yüklenen anlam ve geliştirilen düşünce kalıplarıyla ilişkili olduğunu kabul eder. Olumsuz ve işlevsiz düşünce biçimleri zamanla duygusal zorlanmalara ve uyumsuz davranışlara yol açabilir. BDT, bu düşünce kalıplarını fark etmeyi, sorgulamayı ve daha gerçekçi alternatiflerle yeniden yapılandırmayı hedefler.",
      },
      { type: "h", text: "BDT Nasıl Etkili Olmaktadır?" },
      {
        type: "p",
        text: "BDT, “şu an ve burada” odaklı bir yaklaşımdır. Terapi sürecinde bireyin günlük yaşamında karşılaştığı durumlar ele alınır ve bu durumlara eşlik eden otomatik düşünceler, duygular ve davranışlar birlikte incelenir.",
      },
      { type: "p", text: "Danışan;" },
      {
        type: "list",
        items: [
          "Olumsuz düşünce kalıplarını fark etmeyi",
          "Bu düşünceleri test etmeyi ve alternatifler geliştirmeyi",
          "Daha işlevsel davranışlar geliştirmeyi öğrenir",
        ],
      },
      {
        type: "p",
        text: "Bu süreç, bireyin hem duygusal hem de davranışsal olarak daha dengeli tepkiler vermesine yardımcı olur.",
      },
      { type: "h", text: "Hangi Durumlarda Kullanılır?" },
      {
        type: "p",
        text: "BDT, birçok psikolojik güçlükte etkili bir şekilde kullanılmaktadır:",
      },
      {
        type: "list",
        items: [
          "Kaygı bozuklukları ve panik atak",
          "Depresyon",
          "Obsesif kompulsif bozukluk (OKB)",
          "Fobiler",
          "Travma sonrası stres belirtileri",
          "Yeme bozuklukları",
          "Öfke kontrolü ve stres yönetimi",
        ],
      },
      { type: "h", text: "BDT Süreci Nasıl İlerler?" },
      {
        type: "p",
        text: "BDT yapılandırılmış ve iş birliğine dayalı bir süreçtir. Terapi sürecinde:",
      },
      {
        type: "list",
        items: [
          "Danışanın ihtiyaçlarına uygun hedefler belirlenir",
          "Seanslarda belirli konular üzerine çalışılır",
          "Düşünce ve davranış kalıpları birlikte ele alınır",
          "Seanslar arası küçük uygulamalar (ev ödevleri) verilebilir",
        ],
      },
      {
        type: "p",
        text: "Seanslar genellikle haftada bir gerçekleştirilir ve ortalama 45–60 dakika sürer. Süreç, kişinin ihtiyaçlarına göre değişiklik gösterebilir.",
      },
    ],
  },
  {
    number: "04",
    title: "Aile ve Çift Danışmanlığı",
    blurb:
      "İlişkilerde yaşanan iletişim sorunları, çatışmalar ve duygusal zorlanmalara yönelik profesyonel psikolojik destek.",
    content: [
      {
        type: "p",
        text: "İlişkilerde yaşanan iletişim sorunları, çatışmalar ve duygusal zorlanmalara yönelik profesyonel psikolojik destek sunan bir danışmanlık hizmetidir.",
      },
      {
        type: "p",
        text: "Aile ve çift ilişkileri, bireylerin yaşam kalitesini doğrudan etkileyen en önemli alanlardan biridir. Zaman zaman iletişim problemleri, anlaşmazlıklar, güven sorunları ya da duygusal uzaklaşma yaşanabilir. Bu tür durumlar, ilişki içinde tekrarlayan döngülere ve çözümsüzlük hissine yol açabilir.",
      },
      {
        type: "p",
        text: "Aile ve Çift Danışmanlığı sürecinde, tarafların birbirini daha iyi anlaması, sağlıklı iletişim kurabilmesi ve ilişkide dengeyi yeniden oluşturabilmesi hedeflenir.",
      },
      { type: "h", text: "Aile ve Çift Danışmanlığında Neler Çalışılır?" },
      {
        type: "list",
        items: [
          "İletişim problemleri ve yanlış anlaşılmalar",
          "Çatışma çözme becerileri",
          "Güven sorunları ve duygusal kopukluk",
          "Kıskançlık ve sınır problemleri",
          "Aile içi roller ve sorumluluklar",
          "Ebeveynlik süreçleri ve çocukla ilişkiler",
          "Ayrılık, boşanma süreci ve sonrası uyum",
        ],
      },
      { type: "h", text: "Kimler İçin Uygundur?" },
      {
        type: "list",
        items: [
          "İlişkisinde iletişim sorunları yaşayan çiftler",
          "Sık tartışma yaşayan ya da çözümsüzlük hisseden bireyler",
          "Güven ve bağlanma problemleri yaşayanlar",
          "Aile içi ilişkilerini güçlendirmek isteyenler",
          "Boşanma sürecinde ya da sonrasında destek arayan bireyler",
        ],
      },
      { type: "h", text: "Süreç Nasıl İlerler?" },
      {
        type: "p",
        text: "Danışmanlık süreci, çiftin veya ailenin ihtiyaçlarına göre yapılandırılır. İlk görüşmelerde mevcut sorunlar, ilişki dinamikleri ve beklentiler ele alınır. Süreç boyunca tarafların duygu, düşünce ve ihtiyaçlarını daha açık ifade edebilmesi desteklenir.",
      },
    ],
  },
  {
    number: "05",
    title: "Sınav Kaygısı ve Performans Danışmanlığı",
    blurb:
      "Sınav sürecinde yaşanan kaygı, odaklanma sorunları ve performans baskısına yönelik yapılandırılmış danışmanlık.",
    content: [
      {
        type: "p",
        text: "Sınav sürecinde yaşanan kaygı, odaklanma sorunları ve performans baskısına yönelik psikolojik destek sunan yapılandırılmış bir danışmanlık hizmetidir.",
      },
      {
        type: "p",
        text: "Sınava hazırlık süreci; yalnızca akademik bilgiyle değil, aynı zamanda dikkat, motivasyon ve duygusal denge ile yakından ilişkilidir. Yoğun sınav kaygısı, erteleme davranışı ve başarısızlık korkusu, bireyin potansiyelini tam olarak ortaya koymasını zorlaştırabilir.",
      },
      { type: "p", text: "Sınav Kaygısı ve Performans Danışmanlığı sürecinde;" },
      {
        type: "list",
        items: [
          "Sınav kaygısı ile baş etme becerileri geliştirilir",
          "Dikkat ve odaklanma süreçleri güçlendirilir",
          "Erteleme alışkanlıkları üzerine çalışılır",
          "Motivasyon ve sürdürülebilir çalışma düzeni desteklenir",
          "Performans baskısı ve olumsuz düşünce kalıpları ele alınır",
        ],
      },
      {
        type: "p",
        text: "Bu süreçte amaç, yalnızca sınav başarısını artırmak değil; bireyin kendine güvenini güçlendirmek ve süreci daha sağlıklı bir şekilde yönetmesini sağlamaktır.",
      },
      { type: "h", text: "Kimler İçin Uygundur?" },
      {
        type: "list",
        items: [
          "LGS, YKS, üniversite ve diğer sınavlara hazırlanan öğrenciler",
          "Sınav anında yoğun kaygı yaşayanlar",
          "Ders çalışmakta zorlanan veya erteleme davranışı gösterenler",
          "Dikkat ve odaklanma problemi yaşayan bireyler",
          "Performansını yeterince yansıtamadığını düşünen öğrenciler",
        ],
      },
      { type: "h", text: "Süreç Nasıl İlerler?" },
      {
        type: "p",
        text: "Danışmanlık süreci, bireyin ihtiyaçlarına göre planlanır. İlk görüşmede yaşanan zorluklar ve hedefler belirlenir. Sonraki seanslarda, hem düşünce hem davranış düzeyinde çalışılarak daha işlevsel baş etme becerileri geliştirilir.",
      },
      {
        type: "p",
        text: "Seanslar genellikle haftada bir gerçekleştirilir ve 45–60 dakika sürer.",
      },
    ],
  },
  {
    number: "06",
    title: "Çözüm Odaklı Terapi",
    blurb:
      "Değişimin küçük adımlarla başlayabileceğini temel alan, kısa süreli ve hedef odaklı bir terapi yaklaşımıdır.",
    content: [
      { type: "h", text: "Çözüm Odaklı Terapi Nasıl Çalışır?" },
      {
        type: "p",
        text: "Terapi sürecinde danışanın yaşadığı sorunlar kısaca ele alınır, ardından dikkat çözüm anlarına ve istisnalara yönlendirilir. Yani, problemin daha az hissedildiği ya da hiç yaşanmadığı zamanlar keşfedilir.",
      },
      { type: "p", text: "Danışan;" },
      {
        type: "list",
        items: [
          "Güçlü yönlerini ve sahip olduğu kaynakları fark eder",
          "Küçük ama etkili değişim adımları belirler",
          "İşe yarayan davranışları artırmayı öğrenir",
        ],
      },
      {
        type: "p",
        text: "Bu yaklaşım, değişimin küçük adımlarla başlayabileceğini ve zamanla büyüyebileceğini temel alır.",
      },
      { type: "h", text: "Çözüm Odaklı Terapi Süreci Nasıl İlerler?" },
      {
        type: "p",
        text: "Bu terapi yaklaşımı genellikle kısa süreli ve hedef odaklıdır. İlk görüşmelerde danışanın ulaşmak istediği hedefler netleştirilir. Seanslarda, bu hedeflere ulaşmayı destekleyecek somut ve uygulanabilir adımlar üzerinde durulur.",
      },
      {
        type: "p",
        text: "Terapist, danışanın güçlü yönlerini görünür kılmasına yardımcı olur ve süreci iş birliği içinde yürütür. Seanslar genellikle haftada bir yapılır ve 45–60 dakika sürer.",
      },
      { type: "h", text: "Hangi Durumlarda Kullanılır?" },
      {
        type: "p",
        text: "Çözüm Odaklı Terapi, farklı yaşam alanlarında etkili bir şekilde kullanılabilir:",
      },
      {
        type: "list",
        items: [
          "Günlük yaşam sorunları",
          "İlişki problemleri",
          "Kaygı ve stres",
          "Özgüven sorunları",
          "Karar verme süreçleri",
          "Motivasyon eksikliği",
          "Ergenlik dönemi zorlukları",
        ],
      },
    ],
  },
];

const certificates = [
  "EMDR 1. Düzey",
  "EMDR 2. Düzey",
  "EMDR İleri Düzey Teknikler 2.0",
  "EMDR Perspektifinden Kompleks Travma",
  "Anksiyete ve Panik Bozuklukta EMDR Müdahaleleri",
  "Bilişsel Davranışçı Terapi",
  "Çözüm Odaklı Terapi",
  "Aile/Çift Danışmanlığı",
  "Travma Odaklı Çocuk Ergen Bilişsel Davranışçı Terapi",
];

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
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease }}
      whileHover={{ y: -4 }}
      className={`${
        service.large ? "md:col-span-2 md:row-span-2" : ""
      } group h-full text-left rounded-[1.5rem] bg-cream/70 border border-charcoal/6 p-6 md:p-7 flex flex-col justify-between hover:bg-white hover:border-sage/30 hover:shadow-md transition-all duration-300`}
    >
      {/* Card header */}
      <div className="flex justify-between items-start">
        <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-sage">
          {service.number}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-sage opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card body */}
      <div className={service.large ? "mt-5 space-y-3" : "mt-4 space-y-2"}>
        <h4
          className={`font-serif text-charcoal leading-tight ${
            service.large ? "text-2xl md:text-[2rem]" : "text-lg md:text-xl"
          }`}
        >
          {service.title}
        </h4>
        <p
          className={`font-sans text-warm-gray leading-relaxed ${
            service.large ? "text-sm md:text-base max-w-[340px]" : "text-xs md:text-[0.8rem]"
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
export default function AdaHizmetler() {
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
export function AdaSertifikalar() {
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
