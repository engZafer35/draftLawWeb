import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "Hakkimizda",
  description:
    "Avukat Zafer Satilmis'in hukuk hizmeti yaklasimi, uzmanlik odaklari ve calisma prensipleri.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Hakkimizda"
        title="Avukat Zafer Satilmis"
        description="Aile hukuku, bosanma, ceza, miras, is hukuku ve gayrimenkul uyusmazliklarinda surec odakli hukuki destek sunan, Izmir merkezli bir avukatlik sitesi."
      />
      <Container className="pb-20">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-10 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2rem] bg-[linear-gradient(135deg,#111827_0%,#44403c_60%,#f59e0b_160%)] p-8 text-white">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
                Izmir Avukat
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                Guven veren, planli ve acik bir temsil anlayisi
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-stone-700">
              <p>
                Bu internet sitesi, hukuki sureclerin yalnizca dava acma asamasina
                indirgenmeden; strateji, zamanlama, delil ve iletisim boyutlariyla
                bir butun olarak ele alinmasi anlayisiyla tasarlanmistir.
              </p>
              <p>
                Avukat Zafer Satilmis; ozellikle aile hukuku, bosanma, miras,
                ceza, is hukuku ve tasinmaz kaynakli uyusmazliklarda etkili bir
                yol haritasi kurmayi hedefler.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
