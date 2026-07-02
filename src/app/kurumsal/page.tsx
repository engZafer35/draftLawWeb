import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "Kurumsal",
  description:
    "Avukat Zafer Satilmis hukuk ofisinin calisma modeli, ekip yapisi ve kurumsal yaklasimi.",
};

export default function CorporatePage() {
  return (
    <>
      <PageIntro
        eyebrow="Kurumsal"
        title="Acik iletisim, olculu strateji ve duzenli surec takibi"
        description="Hukuki hizmet modelimiz; dosya analizi, delil planlamasi, sure yonetimi ve duzenli bilgilendirme ilkeleri etrafinda sekillenmektedir."
      />
      <Container className="pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            "Her dosyada once hukuki risk haritasi cikarilir.",
            "Mumkun olan durumlarda onleyici ve uzlasmaci cozumler de degerlendirilir.",
            "Muvekkilin surec boyunca neyle karsilasacagi acik dille aktarilir.",
          ].map((text) => (
            <div
              key={text}
              className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm"
            >
              <p className="text-base leading-8 text-stone-700">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
