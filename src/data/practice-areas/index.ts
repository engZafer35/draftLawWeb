import type { PracticeArea } from "@/data/practice-area-types";
import { aile_hukukuDetail } from "./aile-hukuku";
import { ceza_hukukuDetail } from "./ceza-hukuku";
import { miras_hukukuDetail } from "./miras-hukuku";
import { is_hukukuDetail } from "./is-hukuku";
import { ticaret_hukukuDetail } from "./ticaret-hukuku";
import { icra_ve_iflas_hukukuDetail } from "./icra-ve-iflas-hukuku";
import { gayrimenkul_hukukuDetail } from "./gayrimenkul-hukuku";
import { tuketici_hukukuDetail } from "./tuketici-hukuku";

export const practiceAreas: PracticeArea[] = [
  {
    slug: "aile-hukuku",
    title: "Aile Hukuku",
    shortTitle: "Aile Hukuku",
    summary:
      "Bosanma, velayet, nafaka, mal paylasimi ve aile ici korunma tedbirlerinde kapsamli hukuki destek.",
    seoTitle: "Izmir Aile Hukuku Avukati | Avukat Zafer Satilmis",
    seoDescription:
      "Izmir aile hukuku avukati olarak bosanma, velayet, nafaka ve mal rejimi uyusmazliklarinda surec odakli temsil.",
    highlights: ["Bosanma davalari", "Velayet ve kisisel iliski", "Nafaka ve tazminat"],
    topics: [
      "Anlasmali ve cekismeli bosanma",
      "Tedbir, istirak ve yoksulluk nafakasi",
      "Aile konutu serhi",
      "6284 sayili Kanun kapsaminda tedbirler",
    ],
    detail: aile_hukukuDetail,
  },
  {
    slug: "ceza-hukuku",
    title: "Ceza Hukuku",
    shortTitle: "Ceza Hukuku",
    summary:
      "Sorusturma ve kovusturma asamalarinda ifade, savunma ve delil stratejisi odakli temsil.",
    seoTitle: "Izmir Ceza Avukati | Avukat Zafer Satilmis",
    seoDescription:
      "Izmir ceza avukati olarak sorusturma, gozalti, tutuklama, ifade ve durusma sureclerinde etkili savunma.",
    highlights: ["Sorusturma savunmasi", "Durusma takibi", "Itiraz ve kanun yollari"],
    topics: [
      "Ifade alma ve gozalti sureci",
      "Tutuklamaya itiraz",
      "Dolandiricilik ve bilisim suclari",
      "Taksirli ve kastli suclar",
    ],
    detail: ceza_hukukuDetail,
  },
  {
    slug: "miras-hukuku",
    title: "Miras Hukuku",
    shortTitle: "Miras Hukuku",
    summary:
      "Miras paylasimi, muris muvazaasi, tenkis ve ortakligin giderilmesi sureclerinde temsil.",
    seoTitle: "Izmir Miras Avukati | Avukat Zafer Satilmis",
    seoDescription:
      "Izmir miras hukuku avukati olarak mirastan mal kacirma, tenkis, vasiyetname ve miras paylasiminda danismanlik.",
    highlights: ["Muris muvazaasi", "Tenkis davalari", "Miras paylasimi"],
    topics: [
      "Tapu iptal ve tescil",
      "Vasiyetname ihtilaflari",
      "Sakli pay ihlalleri",
      "Veraset planlamasi",
    ],
    detail: miras_hukukuDetail,
  },
  {
    slug: "is-hukuku",
    title: "Is Hukuku",
    shortTitle: "Is Hukuku",
    summary:
      "Kidem, ihbar, fazla mesai, ise iade ve isci-isveren uyusmazliklarinda cozum odakli yaklasim.",
    seoTitle: "Izmir Is Hukuku Avukati | Avukat Zafer Satilmis",
    seoDescription:
      "Is hukuku uyusmazliklarinda kidem, ihbar, ise iade, mobbing ve is kazasi sureclerinde hukuki destek.",
    highlights: ["Kidem ve ihbar alacaklari", "Ise iade", "Mobbing ve fesih ihtilaflari"],
    topics: [
      "Arabuluculuk basvurusu",
      "Haksiz fesih",
      "Fazla mesai ve ucret alacaklari",
      "Is kazasi tazminati",
    ],
    detail: is_hukukuDetail,
  },
  {
    slug: "ticaret-hukuku",
    title: "Ticaret Hukuku",
    shortTitle: "Ticaret Hukuku",
    summary:
      "Sirketler hukuku, ticari alacak, sozlesme ihtilaflari ve kurumsal danismanlikta profesyonel destek.",
    seoTitle: "Izmir Ticaret Hukuku Avukati | Avukat Zafer Satilmis",
    seoDescription:
      "Izmir ticaret hukuku avukati olarak sozlesme, ticari alacak ve sirket uyusmazliklarinda hukuki cozum.",
    highlights: ["Sozlesme denetimi", "Ticari alacak", "Sirket ihtilaflari"],
    topics: [
      "Hisse devri ve ortaklik sorunlari",
      "Cari hesap ve fatura uyusmazliklari",
      "Ticari sozlesmeler",
      "Kurumsal hukuki danismanlik",
    ],
    detail: ticaret_hukukuDetail,
  },
  {
    slug: "icra-ve-iflas-hukuku",
    title: "Icra ve Iflas Hukuku",
    shortTitle: "Icra ve Iflas Hukuku",
    summary:
      "Alacak takibi, itirazin iptali, haciz ve iflas sureclerinde etkin tahsilat odakli temsil.",
    seoTitle: "Izmir Icra Avukati | Avukat Zafer Satilmis",
    seoDescription:
      "Icra takipleri, alacak tahsili, itirazin iptali ve haciz sureclerinde izmir merkezli hukuki destek.",
    highlights: ["Ilamli ve ilamsiz takip", "Itirazin iptali", "Tahsilat stratejisi"],
    topics: [
      "Kambiyo senetlerine dayali takip",
      "Haciz islemleri",
      "Menfi tespit ve istirdat",
      "Konkordato ve iflas baglantili surecler",
    ],
    detail: icra_ve_iflas_hukukuDetail,
  },
  {
    slug: "gayrimenkul-hukuku",
    title: "Gayrimenkul Hukuku",
    shortTitle: "Gayrimenkul Hukuku",
    summary:
      "Tapu iptali, kira, tahliye, ortakligin giderilmesi ve tasinmaz ihtilaflarinda hukuki temsil.",
    seoTitle: "Izmir Gayrimenkul Avukati | Avukat Zafer Satilmis",
    seoDescription:
      "Izmir gayrimenkul hukuku avukati olarak tapu, kira, tahliye ve tasinmaz uyusmazliklarinda hukuki destek.",
    highlights: ["Tapu davalari", "Kira ve tahliye", "Ortakligin giderilmesi"],
    topics: [
      "Tapu iptal ve tescil",
      "Kira uyarlama ve tahliye",
      "Ecrimisil",
      "Aile konutu ve tasinmaz tasarruflari",
    ],
    detail: gayrimenkul_hukukuDetail,
  },
  {
    slug: "tuketici-hukuku",
    title: "Tuketici Hukuku",
    shortTitle: "Tuketici Hukuku",
    summary:
      "Ayipli mal, iade, mesafeli satis ve tuketici hakem heyeti basvurularinda etkili basvuru takibi.",
    seoTitle: "Izmir Tuketici Avukati | Avukat Zafer Satilmis",
    seoDescription:
      "Ayipli mal, iade, mesafeli satis ve tuketici uyusmazliklarinda hukuki cozum.",
    highlights: ["Ayipli mal ve hizmet", "Iade surecleri", "Hakem heyeti ve dava"],
    topics: [
      "Tuketici hakem heyeti basvurulari",
      "Garanti ve iade ihtilaflari",
      "Abonelik ve hizmet feshi",
      "Mesafeli satis uyusmazliklari",
    ],
    detail: tuketici_hukukuDetail,
  },
];

export function getPracticeArea(slug: string) {
  return practiceAreas.find((item) => item.slug === slug);
}
