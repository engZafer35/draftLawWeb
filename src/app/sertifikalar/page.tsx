import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "Sertifikalar",
  description:
    "Mesleki gelisim, seminer ve egitim katilimlari icin hazir sertifika tanitim alani.",
};

export default function CertificatesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Sertifikalar"
        title="Mesleki gelisim ve uzmanlik alanlari icin tanitim bolumu"
        description="Bu sayfa, ileride eklenecek mesleki egitimler, sertifikalar ve seminer katilimlari icin hazirlanmistir."
      />
      <Container className="pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {["Aile Hukuku Egitimi", "Arabuluculuk Semineri", "Ceza Yargisi Uygulamasi"].map(
            (item) => (
              <div
                key={item}
                className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm"
              >
                <div className="h-40 rounded-[1.5rem] bg-[linear-gradient(135deg,#f5f5f4_0%,#fde68a_100%)]" />
                <h2 className="mt-6 text-xl font-semibold text-stone-950">{item}</h2>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  Ornek sertifika/aciklama alani. Gercek belge gorselleri ve aciklamalar
                  daha sonra eklenebilir.
                </p>
              </div>
            ),
          )}
        </div>
      </Container>
    </>
  );
}
