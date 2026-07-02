export type PracticeArea = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  highlights: string[];
  topics: string[];
  content: string[];
};

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
    content: [
      "Aile hukuku uyusmazliklari, yalnizca dava acmaktan ibaret degildir. Taraflarin ekonomik gucu, cocuklarin ustun yarari, mevcut deliller ve gelecekte dogabilecek hak kayiplari birlikte degerlendirilmelidir.",
      "Avukat Zafer Satilmis; bosanma, velayet, nafaka, ziynet, mal rejimi, aile konutu ve koruyucu tedbir sureclerinde stratejik dosya yonetimi ile hukuki destek sunar.",
      "Surec boyunca dilekce kurgusu, tanik planlamasi, delil toplama ve istinaf ihtimalleri en basindan dikkate alinir.",
    ],
  },
  {
    slug: "ceza-hukuku",
    title: "Ceza Hukuku",
    shortTitle: "Ceza Hukuku",
    summary:
      "Sorusturma ve kovusturma asamalarinda ifade, savunma ve delil stratejisi odakli temsil.",
    seoTitle: "Izmir Ceza Avukati | Avukat Zafer Satilmis",
    seoDescription:
      "Izmir ceza avukati olarak sorusturma, gozaltı, tutuklama, ifade ve durusma sureclerinde etkili savunma.",
    highlights: ["Sorusturma savunmasi", "Durusma takibi", "Itiraz ve kanun yollari"],
    topics: [
      "Ifade alma ve gozaltı sureci",
      "Tutuklamaya itiraz",
      "Dolandiricilik ve bilisim suclari",
      "Taksirli ve kastli suclar",
    ],
    content: [
      "Ceza yargilamasinda ilk asama cogu zaman tum surecin kaderini belirler. Ifade oncesi hukuki hazirlik, dosyadaki teknik delillerin okunmasi ve savunmanin tek merkezden kurulmasi kritik onemdedir.",
      "Avukat Zafer Satilmis; sorusturma dosyalarinda ifade, savcilik asamasi, tutuklama degerlendirmesi, kovusturma sureci ve kanun yollarina kadar aktif temsil saglar.",
    ],
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
    content: [
      "Miras uyusmazliklari cogu zaman aile ici iliskilerin de gerildigi uzun sureclere donusebilir. Bu nedenle teknik analiz kadar iletisim dili ve delil tasnifi de onemlidir.",
      "Tapu hareketleri, banka kayitlari, bagislar ve murisin iradesine iliskin emareler birlikte degerlendirilerek davanin ana ekseni kurulur.",
    ],
  },
  {
    slug: "is-hukuku",
    title: "Is Hukuku",
    shortTitle: "Is Hukuku",
    summary:
      "Kidem, ihbar, fazla mesai, ise iade ve isçi-isveren uyusmazliklarinda cozum odakli yaklasim.",
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
    content: [
      "Is hukuku sureclerinde dava oncesi arabuluculuk, belge toplama ve tanik planlamasi sonucu dogrudan etkiler. Ucret bordrolari, puantajlar ve yazismalar dikkatle incelenmelidir.",
      "Avukat Zafer Satilmis; isçi ve isveren vekilligi tarafinda sureleri ve ispat yukunu dikkate alan planli bir temsil modeli uygular.",
    ],
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
    content: [
      "Ticari iliskilerde dogru hukuki alt yapi kurulmadiginda, uyusmazliklar hizla tahsilat ve itibar sorununa donusebilir. Bu nedenle onleyici hukuk uygulamasi da dava kadar onemlidir.",
      "Sirketlerin operasyonel sureclerine uygun, uygulanabilir ve risk azaltici bir hukuki destek hedeflenir.",
    ],
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
    content: [
      "Icra dosyalarinda dogru takip yolu secimi ve karsi tarafin muhtemel itirazlari daha en basinda hesaplanmalidir. Tahsilat hizi kadar dosyanin surdurulebilirligi de onemlidir.",
      "Avukat Zafer Satilmis; alacakli ve borclu vekilligi tarafinda sure, faiz, delil ve malvarligi verisini birlikte degerlendirir.",
    ],
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
    content: [
      "Gayrimenkul ihtilaflari, ekonomik degeri yuksek ve sonuc etkisi uzun sureli dosyalardir. Tasinmazin kaydi, fiili kullanim durumu ve taraflarin onceki islemleri ayrintili incelenmelidir.",
      "Davaya uygun strateji, hem tapu guvenligi hem de tahsilat ve kullanim hakki acisindan birlikte kurulmalidir.",
    ],
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
    content: [
      "Tuketici hukuku sureclerinde basvuru mercii secimi ve belge duzeni sonucun hizini belirler. Fatura, servis kayitlari, sozlesme metinleri ve yazismalar eksiksiz toparlanmalidir.",
      "Kucuk gibi gorunen ekonomik uyusmazliklar, dogru basvuru teknigi ile kisa surede lehine sonuclanabilir.",
    ],
  },
];

export function getPracticeArea(slug: string) {
  return practiceAreas.find((item) => item.slug === slug);
}
