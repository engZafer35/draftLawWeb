import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "Ekibimiz",
  description:
    "Hukuki sureclerde calisma modeli, destek yapisi ve muvekkil iletisim prensipleri.",
};

export default function TeamPage() {
  return (
    <>
      <PageIntro
        eyebrow="Ekibimiz"
        title="Dosya odakli ve koordineli bir calisma duzeni"
        description="Ilk surumde ekip yapisi tanitim amacli duzenlenmistir. Gercek ekip bilgileri daha sonra kolayca guncellenebilir."
      />
      <Container className="pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Avukat Zafer Satilmis",
              text: "Ana dava stratejisi, hukuki analiz ve muvekkil surec yonetimi.",
            },
            {
              title: "Hukuki Operasyon Destegi",
              text: "Belge akisi, randevu koordinasyonu ve icerik yonetimi icin ayrilan tanitim alani.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-stone-950">{card.title}</h2>
              <p className="mt-4 text-base leading-8 text-stone-600">{card.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
