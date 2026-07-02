import Link from "next/link";
import { practiceAreas } from "@/data/practice-areas";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "./section-heading";

export function PracticeGrid() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Calisma Alanlarimiz"
          title="Izmir'de avukat arayanlar icin kapsamli hukuki hizmet alanlari"
          description="Dava takibi, danismanlik ve stratejik surec yonetimini acik bir iletisim dili ile yurutuyoruz. Asagidaki hizmet alanlarindan detaylara ulasabilirsiniz."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {practiceAreas.map((area, index) => (
            <Link
              key={area.slug}
              href={`/calisma-alanlarimiz/${area.slug}`}
              className="group rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`inline-flex rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] ${
                  index % 2 === 0
                    ? "bg-amber-100 text-amber-800"
                    : "bg-stone-100 text-stone-700"
                }`}
              >
                Izmir
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-stone-950">
                {area.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">{area.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {area.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-stone-200 px-3 py-1 text-xs text-stone-600"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
              <span className="mt-8 inline-flex text-sm font-semibold text-stone-950 transition group-hover:text-amber-800">
                Devamini Oku
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
