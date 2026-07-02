import { Container } from "@/components/layout/container";
import { SectionHeading } from "./section-heading";

const steps = [
  {
    title: "Ilk Gorusme",
    description:
      "Dosyanizi dinliyor, hedefi ve oncelikli riskleri birlikte netlestiriyoruz.",
  },
  {
    title: "Hukuki Analiz",
    description:
      "Delil yapisini ve uygulanabilir hukuki yolları degerlendirerek surec planini kuruyoruz.",
  },
  {
    title: "Strateji Gelistirme",
    description:
      "Dilekce, tanik, belge ve savunma planini somut dosya verisine gore sekillendiriyoruz.",
  },
  {
    title: "Temsil ve Takip",
    description:
      "Dava veya basvuru surecinde aktif temsil, duzenli bilgilendirme ve sure takibi sagliyoruz.",
  },
  {
    title: "Sonuc ve Itiraz",
    description:
      "Karar sonrasi hukuki sonucu yorumluyor, gerekirse istinaf ve temyiz stratejisi kuruyoruz.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-stone-950 py-20 text-white">
      <Container>
        <SectionHeading
          eyebrow="Nasil Calisiyoruz?"
          title="Dosyanizi yalnizca dava olarak degil, bir surec olarak yonetiyoruz"
          description="Her dosyada ilk gorusmeden karar sonrasi kanun yollarina kadar planli bir akis kurmaya odaklaniyoruz."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/8"
            >
              <p className="text-4xl font-semibold text-amber-300">0{index + 1}</p>
              <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-stone-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
