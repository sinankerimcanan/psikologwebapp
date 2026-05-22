// Uzman hizmet içerikleri — aciklama.txt kaynağından türetilmiştir.

export type Block =
  | { type: "h"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: { title: string; text: string }[] };

export type Service = {
  number: string;
  title: string;
  blurb: string;
  span?: "large" | "wide";
  content: Block[];
};

export type ExpertHizmet = {
  services: Service[];
  certificates: string[];
};

/* ───────────── Psikolog Ada Uyan ───────────── */

const adaServices: Service[] = [
  {
    number: "01",
    title: "Online & Yüz yüze Bireysel Terapi",
    blurb:
      "Hayatınızın zorlu dönemlerinde duygusal sıkıntılarınızı anlamak ve aşmak için birebir, kişiye özel terapi süreci.",
    span: "large",
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

const adaCertificates = [
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

/* ───────────── Psikolog Aybüke Tuçe Esen ───────────── */

const aybukeServices: Service[] = [
  {
    number: "01",
    title: "Floortime Terapisi",
    blurb:
      "Çocukların duygusal, sosyal ve bilişsel gelişimini destekleyen, ilişki ve oyun temelli bir gelişim yaklaşımı.",
    span: "large",
    content: [
      {
        type: "p",
        text: "DIR/Floortime, çocukların duygusal, sosyal ve bilişsel gelişimini desteklemek amacıyla geliştirilmiş, ilişki ve oyun temelli bir yaklaşımdır.",
      },
      {
        type: "p",
        text: "Bu modelde temel hedef; çocuğun bireysel özelliklerini dikkate alarak onunla güçlü bir duygusal bağ kurmak ve gelişimini bu ilişki üzerinden desteklemektir.",
      },
      {
        type: "p",
        text: "“Floortime” yaklaşımı, adını yetişkinin çocuğun seviyesine inerek onunla birebir etkileşim kurmasından alır. Bu süreçte çocuk yönlendirilen değil, süreci yönlendiren taraftır.",
      },
      { type: "h", text: "Floortime Yaklaşımında Neler Yapılır?" },
      {
        type: "p",
        text: "Floortime uygulamalarında çocukla kurulan etkileşim, tamamen onun ilgileri ve ihtiyaçları doğrultusunda şekillenir. Temel uygulama prensipleri şunlardır:",
      },
      {
        type: "steps",
        items: [
          {
            title: "Çocuğun liderliğini takip etme",
            text: "Çocuğun ilgisini çeken oyun veya etkinlik üzerinden iletişim başlatılır.",
          },
          {
            title: "Karşılıklı etkileşim kurma",
            text: "Göz teması, jestler, mimikler ve sesler kullanılarak karşılıklı iletişim desteklenir.",
          },
          {
            title: "Oyunu geliştirme ve genişletme",
            text: "Çocuğun başlattığı oyun, yeni fikirler ve küçük eklemelerle zenginleştirilir.",
          },
          {
            title: "Duygusal bağ kurma",
            text: "Etkileşim sürecinde çocuğun duygularını fark etmek ve paylaşmak ön plandadır.",
          },
          {
            title: "Gelişimsel basamakları destekleme",
            text: "Dikkat, iletişim, problem çözme ve sembolik oyun becerileri aşamalı olarak desteklenir.",
          },
        ],
      },
      { type: "h", text: "Hangi Tanılarda Kullanılır?" },
      {
        type: "p",
        text: "Floortime yaklaşımı özellikle aşağıdaki durumlarda destekleyici bir yöntem olarak kullanılmaktadır:",
      },
      {
        type: "list",
        items: [
          "Otizm Spektrum Bozukluğu",
          "Dikkat Eksikliği ve Hiperaktivite Bozukluğu",
          "Selektif Mutizm",
          "Gelişimsel Gecikme",
          "Sosyal iletişim güçlükleri",
          "Dil ve konuşma gecikmeleri",
          "Duyusal işlemleme farklılıkları",
        ],
      },
      { type: "h", text: "Floortime Yaklaşımının Temel Amacı" },
      {
        type: "list",
        items: [
          "Çocuğun iletişim kurma becerilerini artırmak",
          "Duygusal farkındalık ve bağlanmayı güçlendirmek",
          "Sosyal etkileşim becerilerini geliştirmek",
          "Problem çözme ve düşünme becerilerini desteklemek",
        ],
      },
      {
        type: "p",
        text: "Bu süreçte çocuk, kendi potansiyelini keşfederken aynı zamanda güvenli ve destekleyici bir ilişki ortamında gelişim gösterir.",
      },
    ],
  },
  {
    number: "02",
    title: "Oyun Terapisi",
    blurb:
      "Çocukların duygularını oyun aracılığıyla ifade etmelerine alan açan gelişimsel ve terapötik bir yaklaşım.",
    content: [
      {
        type: "p",
        text: "Oyun terapisi, çocukların duygularını, düşüncelerini ve yaşantılarını oyun aracılığıyla ifade etmelerine imkân tanıyan, gelişimsel ve terapötik bir yaklaşımdır.",
      },
      {
        type: "p",
        text: "Çocuklar çoğu zaman duygularını sözcüklerle ifade etmekte zorlanır; bu noktada oyun, onların en doğal iletişim dili haline gelir.",
      },
      {
        type: "p",
        text: "Bu yaklaşımda temel hedef; çocuğun iç dünyasını anlamak, duygusal ihtiyaçlarını fark etmek ve güvenli bir ilişki ortamında iyileşme sürecini desteklemektir.",
      },
      {
        type: "p",
        text: "“Oyun terapisi” sürecinde çocuk yönlendirilmekten ziyade, kendini özgürce ifade edebileceği bir alan bulur. Terapist ise bu sürece eşlik eden, anlayan ve yansıtan bir rol üstlenir.",
      },
      { type: "h", text: "Oyun Terapisinde Neler Yapılır?" },
      {
        type: "p",
        text: "Oyun terapisi sürecinde kullanılan oyunlar ve materyaller, çocuğun duygusal ihtiyaçlarına ve gelişim düzeyine göre şekillenir. Temel uygulama prensipleri şunlardır:",
      },
      {
        type: "steps",
        items: [
          {
            title: "Çocuğun kendini ifade etmesine alan açma",
            text: "Oyuncaklar, hikâyeler ve sembolik oyunlar aracılığıyla çocuk duygularını yansıtır.",
          },
          {
            title: "Güvenli bir ilişki kurma",
            text: "Terapist, yargılamadan kabul eden bir tutumla çocuğun kendini güvende hissetmesini sağlar.",
          },
          {
            title: "Duyguları fark etme ve yansıtma",
            text: "Çocuğun oyun içinde ifade ettiği duygular fark edilir ve uygun şekilde yansıtılır.",
          },
          {
            title: "Sembolik oyunları destekleme",
            text: "Çocuk, yaşadığı deneyimleri oyun yoluyla yeniden canlandırarak anlamlandırır.",
          },
          {
            title: "Problem çözme becerilerini geliştirme",
            text: "Oyun içinde karşılaşılan durumlar üzerinden alternatif çözümler deneyimlenir.",
          },
        ],
      },
      { type: "h", text: "Hangi Durumlarda Kullanılır?" },
      {
        type: "p",
        text: "Oyun terapisi özellikle aşağıdaki durumlarda destekleyici bir yöntem olarak kullanılmaktadır:",
      },
      {
        type: "list",
        items: [
          "Kaygı ve korkular",
          "Travmatik yaşantılar",
          "Davranış problemleri",
          "Aile içi değişimler (boşanma, taşınma vb.)",
          "Sosyal uyum güçlükleri",
          "Öfke kontrolü sorunları",
          "Kardeş kıskançlığı",
          "Duygusal ifade güçlükleri",
        ],
      },
      { type: "h", text: "Oyun Terapisinin Temel Amacı" },
      {
        type: "list",
        items: [
          "Çocuğun duygularını sağlıklı şekilde ifade etmesini desteklemek",
          "Özgüven ve benlik algısını güçlendirmek",
          "Duygusal düzenleme becerilerini geliştirmek",
          "Sosyal becerileri artırmak",
          "Yaşanan zorlayıcı deneyimlerle baş etmesine yardımcı olmak",
        ],
      },
      {
        type: "p",
        text: "Bu süreçte çocuk, oyun aracılığıyla kendini keşfederken aynı zamanda anlaşılmış ve kabul edilmiş hissettiği güvenli bir ortamda iyileşme fırsatı bulur.",
      },
    ],
  },
  {
    number: "03",
    title: "SOS Beslenme Terapisi",
    blurb:
      "Çocuklarda görülen yeme güçlüklerini duyusal ve davranışsal yönleriyle ele alan yapılandırılmış terapi.",
    content: [
      {
        type: "p",
        text: "SOS (Sequential Oral Sensory) Beslenme Terapisi, çocuklarda görülen yeme güçlüklerini çok yönlü ele alan; duyusal, motor, davranışsal ve çevresel faktörleri birlikte değerlendiren yapılandırılmış bir yaklaşımdır.",
      },
      {
        type: "p",
        text: "Bu modelde temel hedef; çocuğun yemekle kurduğu ilişkiyi güvenli hale getirmek, yeme sürecine dair kaygıyı azaltmak ve yeni besinleri kabul etmesini adım adım desteklemektir.",
      },
      {
        type: "p",
        text: "“SOS” yaklaşımı, çocuğun yiyeceklerle tanışmasını sadece tatma üzerinden değil; görme, koklama, dokunma ve oyun yoluyla keşfetmesini esas alır. Bu süreçte çocuk zorlanmaz, kendi hızında ilerlemesi desteklenir.",
      },
      { type: "h", text: "SOS Beslenme Terapisinde Neler Yapılır?" },
      {
        type: "p",
        text: "SOS yaklaşımında yemek süreci, çocuğun toleransına ve hazır oluşuna göre kademeli olarak ilerletilir. Temel uygulama prensipleri şunlardır:",
      },
      {
        type: "steps",
        items: [
          {
            title: "Adım adım ilerleme (hiyerarşik yaklaşım)",
            text: "Çocuk önce yiyeceğe bakma, sonra dokunma, koklama ve en son tatma aşamalarına geçer.",
          },
          {
            title: "Duyusal toleransı artırma",
            text: "Farklı dokular, kokular ve tatlara karşı hassasiyet yavaş yavaş azaltılır.",
          },
          {
            title: "Zorlamadan destekleme",
            text: "Çocuğun yemek yemesi için baskı uygulanmaz; güvenli bir ortam oluşturulur.",
          },
          {
            title: "Oyun temelli yaklaşım",
            text: "Yiyecekler oyun içinde keşfedilir, böylece yemek süreci daha keyifli hale gelir.",
          },
          {
            title: "Aileyi sürece dahil etme",
            text: "Aileye, ev ortamında nasıl destekleyici olunacağı konusunda rehberlik edilir.",
          },
        ],
      },
      { type: "h", text: "Hangi Durumlarda Kullanılır?" },
      {
        type: "p",
        text: "SOS Beslenme Terapisi özellikle aşağıdaki durumlarda destekleyici bir yöntem olarak kullanılmaktadır:",
      },
      {
        type: "list",
        items: [
          "Seçici yeme (sınırlı besin kabulü)",
          "Yemek reddi",
          "Duyusal hassasiyetler",
          "Oral-motor güçlükler",
          "Otizm Spektrum Bozukluğu",
          "Gelişimsel gecikmeler",
          "Prematüre doğum öyküsü",
          "Yemek sırasında yoğun kaygı veya stres",
        ],
      },
      { type: "h", text: "SOS Beslenme Terapisinin Temel Amacı" },
      {
        type: "list",
        items: [
          "Çocuğun yemekle ilgili kaygısını azaltmak",
          "Yeni besinleri kabul etme becerisini artırmak",
          "Duyusal toleransı geliştirmek",
          "Sağlıklı yeme alışkanlıkları kazandırmak",
          "Aile-çocuk yemek etkileşimini güçlendirmek",
        ],
      },
    ],
  },
  {
    number: "04",
    title: "Çocuk-Ergen Bilişsel Davranışçı Terapi",
    blurb:
      "Düşünce, duygu ve davranış ilişkisini ele alan; çocuk ve ergenlere yönelik yapılandırılmış terapi.",
    span: "wide",
    content: [
      {
        type: "p",
        text: "Çocuk ve ergenlerde uygulanan Bilişsel Davranışçı Terapi (BDT), düşünce, duygu ve davranışlar arasındaki ilişkiyi ele alan, yapılandırılmış ve bilimsel temelli bir psikoterapi yaklaşımıdır.",
      },
      {
        type: "p",
        text: "Bu modelde temel hedef; çocuğun/ergenin işlevsel olmayan düşünce kalıplarını fark etmesini sağlamak, bu düşünceleri daha gerçekçi ve sağlıklı olanlarla değiştirmek ve buna bağlı olarak davranışlarını düzenlemektir.",
      },
      {
        type: "p",
        text: "Çocuk ve ergenlerle yapılan BDT sürecinde, yaşa uygun teknikler, oyunlar ve somut örnekler kullanılarak terapi daha anlaşılır ve uygulanabilir hale getirilir.",
      },
      { type: "h", text: "Çocuk ve Ergen BDT’de Neler Yapılır?" },
      {
        type: "p",
        text: "BDT süreci, çocuğun/ergenin ihtiyaçlarına göre planlanan yapılandırılmış oturumlar şeklinde ilerler. Temel uygulama prensipleri şunlardır:",
      },
      {
        type: "steps",
        items: [
          {
            title: "Düşünce-duygu-davranış bağlantısını fark etme",
            text: "Çocuğun yaşadığı durumlarda aklından geçen düşünceler, hissettiği duygular ve verdiği tepkiler birlikte ele alınır.",
          },
          {
            title: "Olumsuz düşünceleri yeniden yapılandırma",
            text: "Gerçekçi olmayan, abartılı ya da işlevsiz düşünceler fark edilerek daha dengeli düşünceler geliştirilir.",
          },
          {
            title: "Davranışsal beceriler kazandırma",
            text: "Kaçınma davranışları yerine baş etme becerileri, problem çözme ve maruz bırakma teknikleri uygulanır.",
          },
          {
            title: "Duygu düzenleme becerilerini geliştirme",
            text: "Kaygı, öfke ve üzüntü gibi duygularla baş etmeye yönelik teknikler öğretilir.",
          },
          {
            title: "Ev ödevleri ve uygulamalar",
            text: "Seans dışında da kazanımların pekişmesi için küçük görevler ve pratikler verilir.",
          },
        ],
      },
      { type: "h", text: "Hangi Durumlarda Kullanılır?" },
      {
        type: "p",
        text: "Çocuk ve ergen BDT özellikle aşağıdaki durumlarda etkili bir yöntem olarak kullanılmaktadır:",
      },
      {
        type: "list",
        items: [
          "Kaygı bozuklukları",
          "Depresyon",
          "Obsesif Kompulsif Bozukluk (OKB)",
          "Fobiler",
          "Sınav kaygısı",
          "Davranış problemleri",
          "Öfke kontrol güçlükleri",
          "Sosyal kaygı",
          "Travma sonrası belirtiler",
        ],
      },
      { type: "h", text: "Çocuk ve Ergen BDT’nin Temel Amacı" },
      {
        type: "list",
        items: [
          "İşlevsel olmayan düşünce kalıplarını fark etmek ve değiştirmek",
          "Duygusal farkındalık ve düzenleme becerilerini geliştirmek",
          "Baş etme becerilerini güçlendirmek",
          "Davranışları daha sağlıklı şekilde düzenlemek",
          "Günlük yaşam işlevselliğini artırmak",
        ],
      },
    ],
  },
  {
    number: "05",
    title: "Gelişim, Zeka ve Dikkat Testleri",
    blurb:
      "Çocukların bilişsel, duygusal ve dikkat becerilerini objektif biçimde değerlendiren bilimsel testler.",
    content: [
      {
        type: "p",
        text: "Gelişim, zekâ ve dikkat testleri; çocukların bilişsel, duygusal, sosyal ve dikkat becerilerini objektif bir şekilde değerlendirmek amacıyla kullanılan bilimsel ölçme araçlarıdır.",
      },
      {
        type: "p",
        text: "Bu değerlendirmelerin temel amacı; çocuğun güçlü yönlerini ve desteklenmesi gereken alanlarını belirlemek, gelişim sürecini izlemek ve ihtiyaç duyduğu desteği doğru şekilde planlamaktır.",
      },
      {
        type: "p",
        text: "Her çocuk kendine özgü bir gelişim gösterir. Bu testler, çocuğun yaşına ve gelişim düzeyine uygun olarak seçilir ve uzman tarafından uygulanır.",
      },
      { type: "h", text: "Gelişim, Zekâ ve Dikkat Testlerinde Neler Yapılır?" },
      {
        type: "p",
        text: "Değerlendirme süreci çocuğun yaşına, ihtiyaçlarına ve başvuru nedenine göre planlanır. Temel uygulama prensipleri şunlardır:",
      },
      {
        type: "steps",
        items: [
          {
            title: "Gelişim alanlarının değerlendirilmesi",
            text: "Dil, motor beceriler, sosyal-duygusal gelişim ve öz bakım becerileri incelenir.",
          },
          {
            title: "Bilişsel (zekâ) değerlendirme",
            text: "Çocuğun öğrenme, akıl yürütme, problem çözme ve bilgi işleme becerileri ölçülür.",
          },
          {
            title: "Dikkat ve yürütücü işlevlerin incelenmesi",
            text: "Dikkat süresi, odaklanma, dürtü kontrolü ve planlama becerileri değerlendirilir.",
          },
          {
            title: "Gözlem ve klinik görüşme",
            text: "Test sürecine ek olarak çocuğun davranışları gözlemlenir ve aileden detaylı bilgi alınır.",
          },
          {
            title: "Sonuçların raporlanması ve geri bildirim",
            text: "Elde edilen bulgular anlaşılır şekilde aile ile paylaşılır ve gerekli yönlendirmeler yapılır.",
          },
        ],
      },
      { type: "h", text: "Hangi Durumlarda Kullanılır?" },
      {
        type: "p",
        text: "Gelişim, zekâ ve dikkat testleri özellikle aşağıdaki durumlarda uygulanmaktadır:",
      },
      {
        type: "list",
        items: [
          "Gelişimsel gecikme şüphesi",
          "Dikkat eksikliği ve odaklanma sorunları",
          "Öğrenme güçlükleri",
          "Okul başarısında düşüş",
          "Üstün yetenek / üstün potansiyel değerlendirmesi",
          "Dil ve konuşma gecikmeleri",
          "Davranışsal ve uyum sorunları",
          "Okula hazır bulunuşluk değerlendirmesi",
        ],
      },
      { type: "h", text: "Gelişim, Zekâ ve Dikkat Testlerinin Temel Amacı" },
      {
        type: "list",
        items: [
          "Çocuğun gelişim düzeyini objektif şekilde belirlemek",
          "Güçlü ve desteklenmesi gereken alanları ortaya koymak",
          "Eğitsel ve terapötik planlamaya rehberlik etmek",
          "Erken müdahale ihtiyacını belirlemek",
          "Aileyi doğru şekilde bilgilendirmek ve yönlendirmek",
        ],
      },
    ],
  },
];

const aybukeCertificates = [
  "Floortime Terapisi (İleri Düzey)",
  "Oyun Terapisi",
  "SOS Beslenme Terapisi (İleri Düzey)",
  "Çocuk-Ergen Bilişsel Davranışçı Terapi",
  "COGENT (Akademi Disleksi)",
  "MEGA-DIS (Disleksi)",
  "Zihin Kuramı Becerilerinin Desteklenmesi",
  "Bilişsel Davranışçı Terapi",
  "Gelişim, Zeka ve Dikkat Testleri",
];

export const hizmetlerByExpert: Record<string, ExpertHizmet> = {
  ada: { services: adaServices, certificates: adaCertificates },
  aybuke: { services: aybukeServices, certificates: aybukeCertificates },
};
