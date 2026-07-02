export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  seoTitle: string;
  seoDescription: string;
  coverTone: string;
  sections: { heading: string; body: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "bosanma-davasi-nasil-acilir-2026",
    title: "Bosanma Davasi Nasil Acilir? Izmir Uygulama Rehberi 2026",
    excerpt:
      "Bosanma davasinda gorevli mahkeme, gerekli belgeler, dilekce kurgusu ve ilk durusma surecine dair pratik rehber.",
    category: "Aile Hukuku",
    readingTime: "8 dk",
    seoTitle: "Bosanma Davasi Nasil Acilir? | Avukat Zafer Satilmis",
    seoDescription:
      "Bosanma davasinin acilis sureci, gerekli belgeler ve Izmir aile mahkemesi uygulamasina dair kapsamli rehber.",
    coverTone: "from-amber-200 via-stone-100 to-white",
    sections: [
      {
        heading: "Bosanma davasi acmadan once ne degerlendirilmelidir?",
        body: [
          "Bosanma davasinin cekismeli mi yoksa anlasmali mi acilacagi, taraflarin taleplerini ve davanin suresini dogrudan etkiler. Velayet, nafaka, tazminat ve mal rejimi talepleri tek merkezde ele alinmalidir.",
          "Dava acilmadan once mevcut deliller, mesajlar, banka kayitlari, taniklar ve taraflarin ekonomik durumuna iliskin veriler sistematik bicimde toparlanmalidir.",
        ],
      },
      {
        heading: "Hangi mahkeme gorevlidir?",
        body: [
          "Bosanma davalarinda gorevli mahkeme aile mahkemesidir. Yetkili mahkeme ise eslerden birinin yerlesim yeri veya davadan once son alti ay birlikte oturulan yer mahkemesi olabilir.",
        ],
      },
      {
        heading: "Surec neden profesyonel planlama gerektirir?",
        body: [
          "Ilk dilekce dili, dava sebebinin hukuki cercevesi ve delillerin sunus sekli; yargilamanin temposunu ve sonraki taleplerin basarisini etkiler. Bu nedenle dava acilisi yalnizca formel bir adim olarak gorulmemelidir.",
        ],
      },
    ],
  },
  {
    slug: "nafaka-artirim-davasi-sartlari",
    title: "Nafaka Artirim Davasi: Sartlar, Deliller ve Guncel Yaklasim",
    excerpt:
      "Degisen ekonomik kosullar, gelir durumlari ve cocugun ihtiyaclari nafaka artirim davasinda nasil degerlendirilir?",
    category: "Aile Hukuku",
    readingTime: "7 dk",
    seoTitle: "Nafaka Artirim Davasi Sartlari | Avukat Zafer Satilmis",
    seoDescription:
      "Nafaka artirim davasi ne zaman acilir, hangi deliller kullanilir, mahkeme neye bakar sorularina guncel rehber.",
    coverTone: "from-zinc-200 via-white to-amber-50",
    sections: [
      {
        heading: "Nafaka artirimi hangi durumda istenebilir?",
        body: [
          "Ekonomik kosullarin degismesi, enflasyon, cocugun egitim ve saglik giderlerinin artmasi veya nafaka borclusunun gelirindeki yukselme; artirim talebine dayanak olabilecek baslica sebeplerdir.",
        ],
      },
      {
        heading: "Mahkeme hangi delillere bakar?",
        body: [
          "Banka hareketleri, maas bordrolari, SGK kayitlari, okul giderleri, kira ve yasam maliyetleri birlikte degerlendirilir. Talebin yalnizca genel enflasyon soylemiyle degil, somut veriyle desteklenmesi onemlidir.",
        ],
      },
    ],
  },
  {
    slug: "velayet-ve-sehir-degisikligi",
    title: "Velayet ve Sehir Degisikligi: Cocuk Yararina Gore Hukuki Sinirlar",
    excerpt:
      "Velayet sahibi ebeveynin baska sehre tasinmasi halinde mahkeme hangi olcutleri dikkate alir?",
    category: "Aile Hukuku",
    readingTime: "6 dk",
    seoTitle: "Velayet ve Sehir Degisikligi | Avukat Zafer Satilmis",
    seoDescription:
      "Velayet ve sehir degisikligi konusunda cocugun ustun yarari, gorus gunleri ve dava stratejisine dair detayli aciklama.",
    coverTone: "from-sky-100 via-white to-amber-100",
    sections: [
      {
        heading: "Temel olcut cocugun ustun yararidir",
        body: [
          "Velayet uyusmazliklarinda esas olan, anne ya da babanin tercihi degil; cocugun psikolojik, sosyal ve egitsel dengesidir. Tasinmanin cocuk uzerindeki etkileri ayrintili degerlendirilir.",
        ],
      },
      {
        heading: "Kisisel iliski duzeni nasil etkilenir?",
        body: [
          "Farkli sehirde yasam basladiginda gorus gunleri, tatil dagilimi ve ulasim masraflari gibi basliklar yeniden duzenlenebilir. Bu nedenle talebin yalnızca tasinma iradesiyle degil, uygulanabilir plan ile sunulmasi gerekir.",
        ],
      },
    ],
  },
  {
    slug: "bosanmada-mal-paylasimi-davasi",
    title: "Bosanmada Mal Paylasimi Davasi: Edinilmis Mal Rejimi Rehberi",
    excerpt:
      "Evlilik icinde edinilen mallarin tasfiyesi, katilma alacagi ve katkı payi iddialari nasil hesaplanir?",
    category: "Mal Rejimi",
    readingTime: "9 dk",
    seoTitle: "Bosanmada Mal Paylasimi Davasi | Avukat Zafer Satilmis",
    seoDescription:
      "Edinilmis mallara katilma rejimi, katkı payi ve tasfiye surecine dair detayli mal paylasimi rehberi.",
    coverTone: "from-stone-200 via-white to-zinc-100",
    sections: [
      {
        heading: "Hangi mallar paylasima dahil olabilir?",
        body: [
          "Genel kural olarak evlilik suresince edinilen mallar tasfiyeye konu olur. Bununla birlikte kisisel mallar, miras kalan degerler ve belirli bagislar farkli degerlendirilir.",
        ],
      },
      {
        heading: "Banka kayitlari ve tapu verisi neden onemlidir?",
        body: [
          "Mal rejimi davalarinda kaynağı belirsiz para transferleri, kredi odemeleri, tapu edinim tarihleri ve sirket paylari davanin ekonomik omurgasini olusturur. Bu veriler erken donemde toparlanmalidir.",
        ],
      },
    ],
  },
  {
    slug: "banka-hesabini-kullandirma-cezasi",
    title: "Banka Hesabini Baskasina Kullandirma Cezasi 2026",
    excerpt:
      "IBAN kiralama, hesap kullandirma ve bu eylemlerin ceza hukuku ile bilisim suclari acisindan sonuclari.",
    category: "Ceza Hukuku",
    readingTime: "6 dk",
    seoTitle: "Banka Hesabini Baskasina Kullandirma Cezasi | Avukat Zafer Satilmis",
    seoDescription:
      "IBAN kullandirma fiilinin ceza hukuku yonunden riskleri, sorusturma sureci ve savunma basliklari.",
    coverTone: "from-emerald-100 via-white to-zinc-100",
    sections: [
      {
        heading: "Hesabi baskasina kullandirmak neden risklidir?",
        body: [
          "Kisi kendi hesabi uzerinden gercek ticari dayanak olmadan para transferine izin verdiginde, dolandiricilik veya kara para aklama supheleriyle sorusturma konusu olabilir.",
        ],
      },
      {
        heading: "Savunmada hangi unsurlar incelenir?",
        body: [
          "Para akisinin kaynagi, hesap sahibinin bilgisi ve kastin varligi, iletisim kayitlari ve islem yogunlugu detayli bicimde incelenir. Her dosya kendi teknik verisiyle degerlendirilmelidir.",
        ],
      },
    ],
  },
  {
    slug: "muris-muvazaasi-nedir",
    title: "Muris Muvazaasi Nedir? Mirastan Mal Kacirma ve Tapu Iptal Davasi",
    excerpt:
      "Miras birakanin gercekte bagis amacli islemleri satis gibi gostermesi halinde hangi dava yolu izlenir?",
    category: "Miras Hukuku",
    readingTime: "7 dk",
    seoTitle: "Muris Muvazaasi Nedir? | Avukat Zafer Satilmis",
    seoDescription:
      "Muris muvazaasi, tapu iptal ve tescil davasinda deliller ve uygulamaya dair aciklayici rehber.",
    coverTone: "from-rose-100 via-white to-amber-50",
    sections: [
      {
        heading: "Muris muvazaasi neyi ifade eder?",
        body: [
          "Muris muvazaasi, miras birakanin gercekte bagislamak istedigi malvarligini gorunuste satis gibi gostermesidir. Amaç genellikle belli mirascilarin haklarini bertaraf etmektir.",
        ],
      },
      {
        heading: "Davada ne ispatlanir?",
        body: [
          "Taraflarin ekonomik gucu, satis bedelinin gercekligi, murisin yasam tecrubesi ve aile ici iliskiler dahil olmak uzere bircok emare birlikte okunur. Tek bir delil yerine kuvvetli bir olgu butunu aranir.",
        ],
      },
    ],
  },
  {
    slug: "ise-iade-davasi-surec",
    title: "Ise Iade Davasi Sureci: Fesih Sonrasi Hangi Adimlar Izlenir?",
    excerpt:
      "Ise iade davasinda arabuluculuk, dava suresi, ise baslatmama tazminati ve bos gecen sure ucreti nasil ilerler?",
    category: "Is Hukuku",
    readingTime: "6 dk",
    seoTitle: "Ise Iade Davasi Sureci | Avukat Zafer Satilmis",
    seoDescription:
      "Ise iade davasinda arabuluculuk, dava takvimi ve tazminat basliklarina dair temel rehber.",
    coverTone: "from-indigo-100 via-white to-zinc-100",
    sections: [
      {
        heading: "Ilk adim zorunlu arabuluculuktur",
        body: [
          "Ise iade taleplerinde dava oncesi zorunlu arabuluculuk basvurusu yapilir. Basvuru suresinin kacirilmasi hak kaybi yaratabilir.",
        ],
      },
      {
        heading: "Mahkeme neyi degerlendirir?",
        body: [
          "Fesih bildiriminin gerekcesi, performans iddialari, savunma alinip alinmadigi ve isverenin isletmesel kararlari birlikte incelenir. Delil duzeni burada belirleyicidir.",
        ],
      },
    ],
  },
  {
    slug: "aile-konutu-serhi-tmk-194",
    title: "Aile Konutu Serhi Nedir? TMK 194 Kapsaminda Koruma Yollari",
    excerpt:
      "Aile konutu serhi ne ise yarar, nasil konulur ve eslerden biri digerinden habersiz satis yaparsa ne olur?",
    category: "Aile Hukuku",
    readingTime: "5 dk",
    seoTitle: "Aile Konutu Serhi Nedir? | Avukat Zafer Satilmis",
    seoDescription:
      "TMK 194 kapsaminda aile konutu serhi, satis riski ve tasarrufun sinirlanmasina dair pratik bilgiler.",
    coverTone: "from-orange-100 via-white to-stone-100",
    sections: [
      {
        heading: "Aile konutu neden korunur?",
        body: [
          "Aile konutu, yalnizca bir tasinmaz degil, aile yasaminin merkezidir. Bu nedenle eslerden birinin digerinin acik rizasi olmadan tasarrufta bulunmasi belirli kosullarda sinirlandirilir.",
        ],
      },
      {
        heading: "Serh ne saglar?",
        body: [
          "Tapuya islenen aile konutu serhi, ucuncu kisilerin iyi niyet iddialarinin degerlendirilmesinde ciddi onem tasir ve koruyucu bir hukuki bariyer olusturur.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
