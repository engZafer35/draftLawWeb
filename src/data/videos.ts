export type VideoItem = {
  title: string;
  description: string;
  duration: string;
  category: string;
};

export const videos: VideoItem[] = [
  {
    title: "Bosanma Davasinda Ilk 5 Stratejik Hata",
    description:
      "Bosanma dosyasinin basinda sik yapilan usul ve delil hatalarina dair bilgilendirici video alani.",
    duration: "04:10",
    category: "Aile Hukuku",
  },
  {
    title: "Nafaka Davalarinda Mahkeme Neye Bakar?",
    description:
      "Nafaka miktari, gelir analizi ve cocugun ihtiyaclari konusunda ornek anlatim videosu.",
    duration: "05:20",
    category: "Aile Hukuku",
  },
  {
    title: "Ceza Sorusturmasinda Ifade Vermeden Once",
    description:
      "Sorusturma asamasinda ifade, gozaltı ve avukat destegine dair on bilgilendirme videosu.",
    duration: "03:40",
    category: "Ceza Hukuku",
  },
  {
    title: "Muris Muvazaasi Davalarinda Delil Kurgusu",
    description:
      "Mirastan mal kacirma iddialarinda tapu ve banka kayitlarinin rolunu anlatan video yeri.",
    duration: "06:00",
    category: "Miras Hukuku",
  },
  {
    title: "Ise Iade Davasinda Sureler ve Arabuluculuk",
    description:
      "Is hukukunda hak dusurucu sureler ve arabuluculuk adimlarini anlatan tanitim videosu.",
    duration: "04:45",
    category: "Is Hukuku",
  },
  {
    title: "Tapu Iptal Davasi Oncesi Kontrol Listesi",
    description:
      "Gayrimenkul uyusmazliklarinda dava oncesi belge ve kayit kontrolune iliskin video alani.",
    duration: "05:05",
    category: "Gayrimenkul Hukuku",
  },
];
