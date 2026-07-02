import Link from "next/link";
import { homeFaq } from "@/data/site";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "./section-heading";

export function FaqSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            eyebrow="Sik Sorulan Sorular"
            title="Avukatlik meslegi ve bosanma surecine dair temel sorular"
            description="Kullanici aramalarinda en sik karsilasilan temel hukuki sorulara aciklayici bir giris sagliyoruz. Daha detayli sorular icin Soru Cevap sayfamizi da kullanabilirsiniz."
          />
          <div className="space-y-4">
            {homeFaq.map((item) => (
              <div
                key={item.question}
                className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-stone-950">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">{item.answer}</p>
              </div>
            ))}
            <Link
              href="/soru-cevap"
              className="inline-flex rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-900 transition hover:border-stone-900"
            >
              Tum Soru ve Cevaplari Gor
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
