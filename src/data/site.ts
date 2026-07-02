type NavChild = {
  label: string;
  href: string;
};

type NavLink = {
  label: string;
  href: string;
  children?: NavChild[];
};

type FooterGroup = {
  title: string;
  links: NavChild[];
};

export const siteConfig: {
  name: string;
  title: string;
  description: string;
  url: string;
  city: string;
  phone: string;
  whatsapp: string;
  email: string;
  secondaryEmail: string;
  address: string;
  officeHours: string[];
  kep: string;
  socialLinks: NavChild[];
  navLinks: NavLink[];
  footerGroups: FooterGroup[];
} = {
  name: "Avukat Zafer Satilmis",
  title: "Izmir Avukat Zafer Satilmis",
  description:
    "Izmir merkezli aile hukuku, bosanma, ceza, miras, is hukuku ve gayrimenkul uyusmazliklarinda stratejik hukuki destek sunan Avukat Zafer Satilmis resmi internet sitesi.",
  url: "https://www.zafer-satilmis.av.tr",
  city: "Izmir",
  phone: "+90 555 000 00 00",
  whatsapp: "+90 555 000 00 00",
  email: "info@zafersatilmis.av.tr",
  secondaryEmail: "iletisim@zafersatilmis.av.tr",
  address:
    "Cumhuriyet Bulvari No:00 Kat:2 Konak / Izmir",
  officeHours: [
    "Pazartesi - Cuma: 09:00 - 19:00",
    "Cumartesi: 10:00 - 16:00",
    "Pazar: Kapali",
  ],
  kep: "zafer.satilmis@hs01.kep.tr",
  socialLinks: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "YouTube", href: "#" },
  ],
  navLinks: [
    { label: "Anasayfa", href: "/" },
    {
      label: "Kurumsal",
      href: "/kurumsal",
      children: [
        { label: "Hakkimizda", href: "/hakkimizda" },
        { label: "Ekibimiz", href: "/ekibimiz" },
        { label: "Sertifikalar", href: "/sertifikalar" },
      ],
    },
    { label: "Calisma Alanlarimiz", href: "/calisma-alanlarimiz" },
    { label: "Blog", href: "/blog" },
    { label: "Videolar", href: "/videolar" },
    { label: "Soru Cevap", href: "/soru-cevap" },
    { label: "Iletisim", href: "/iletisim" },
  ],
  footerGroups: [
    {
      title: "Kurumsal",
      links: [
        { label: "Anasayfa", href: "/" },
        { label: "Hakkimizda", href: "/hakkimizda" },
        { label: "Ekibimiz", href: "/ekibimiz" },
        { label: "Sertifikalar", href: "/sertifikalar" },
        { label: "Iletisim", href: "/iletisim" },
      ],
    },
    {
      title: "Danismanlik Alanlari",
      links: [
        { label: "Aile Hukuku", href: "/calisma-alanlarimiz/aile-hukuku" },
        { label: "Ceza Hukuku", href: "/calisma-alanlarimiz/ceza-hukuku" },
        { label: "Is Hukuku", href: "/calisma-alanlarimiz/is-hukuku" },
        {
          label: "Icra ve Iflas Hukuku",
          href: "/calisma-alanlarimiz/icra-ve-iflas-hukuku",
        },
        {
          label: "Gayrimenkul Hukuku",
          href: "/calisma-alanlarimiz/gayrimenkul-hukuku",
        },
      ],
    },
    {
      title: "Onemli Baglantilar",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Videolar", href: "/videolar" },
        { label: "Soru Cevap", href: "/soru-cevap" },
        { label: "KVKK", href: "/kvkk" },
        { label: "Gizlilik Sozlesmesi", href: "/gizlilik-sozlesmesi" },
      ],
    },
  ],
};

export const featuredStats = [
  { value: "500+", label: "Dosya ve hukuki surec tecrubesi" },
  { value: "7/24", label: "Acil hukuki ilk degerlendirme imkani" },
  { value: "12+", label: "Ana hukuk dalinda aktif hizmet" },
];

export const homeFaq = [
  {
    question: "Avukat tutmak zorunlu mudur?",
    answer:
      "Her dava icin zorunlu degildir; ancak hak kaybi yasanmamasi, delillerin dogru sunulmasi ve surelerin kacirilmamasi icin profesyonel destek almak guclu bir avantaj saglar.",
  },
  {
    question: "Bosanma davasinda ilk adim nedir?",
    answer:
      "Mevcut olayin hukuki dayanaklari, delil yapisi, nafaka, velayet ve mal rejimi boyutlari birlikte analiz edilmeli; buna gore cekismeli veya anlasmali yol haritasi belirlenmelidir.",
  },
  {
    question: "Izmir'de online danismanlik veriyor musunuz?",
    answer:
      "Evet. Ilk gorusmeler telefon, e-posta ya da video toplantisi uzerinden organize edilerek surecin cografi olarak esnek yurutulmesi hedeflenir.",
  },
];
