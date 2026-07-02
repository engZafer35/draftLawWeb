import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PracticeGrid } from "@/components/sections/practice-grid";
import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "Calisma Alanlarimiz",
  description:
    "Aile hukuku, ceza hukuku, miras, is hukuku, ticaret, icra ve gayrimenkul uyusmazliklarinda verilen hukuki hizmetler.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <PracticeGrid />
      <Container className="pb-20">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-stone-950">
            Hizmet alanlari ile blog icerikleri birbiriyle baglantili kurgulandi
          </h2>
          <p className="mt-4 text-sm leading-7 text-stone-600">
            Her hizmet alani; ilgili blog yazilari, video anlatimlari ve soru
            cevap senaryolariyla birlikte buyumeye uygun bir icerik yapisi
            icerir. Bu sayede hem kullanicilar hem de arama motorlari icin daha
            net bir uzmanlik silsilesi sunulur.
          </p>
        </div>
      </Container>
    </>
  );
}
