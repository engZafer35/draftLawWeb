import Link from "next/link";
import { featuredStats, siteConfig } from "@/data/site";
import { Container } from "@/components/layout/container";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_28%),linear-gradient(180deg,#fffbf5_0%,#ffffff_45%,#f7f7f5_100%)] py-20 sm:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(120,113,108,0.04)_1px,transparent_1px),linear-gradient(rgba(120,113,108,0.04)_1px,transparent_1px)] bg-[size:36px_36px]" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="animate-[fadeUp_.8s_ease-out]">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-amber-700">
              Izmir Avukatlik Burosu
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
              Avukat Zafer Satilmis ile bosanma, ceza, miras ve ticari
              uyusmazliklarda guclu hukuki destek.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
              Dava takibi, hukuki danismanlik ve surec yonetimini acik, anlasilir
              ve sonuc odakli bir yaklasimla yuruten bir dijital hukuk ofisi
              deneyimi sunuyoruz.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                className="rounded-full bg-stone-950 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-stone-800"
              >
                Hemen Ara
              </a>
              <Link
                href="/calisma-alanlarimiz"
                className="rounded-full border border-stone-300 px-6 py-3 text-center text-sm font-semibold text-stone-900 transition hover:border-stone-900"
              >
                Hizmet Alanlarini Incele
              </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {featuredStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-stone-200 bg-white/80 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-2xl font-semibold text-stone-950">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-[fadeIn_1s_ease-out]">
            <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-2xl shadow-amber-100/30">
              <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,#111827_0%,#44403c_55%,#f59e0b_160%)] p-8 text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
                  Hizli Ilk Degerlendirme
                </p>
                <h2 className="mt-4 text-3xl font-semibold">
                  Dosyanizi anlatin, yol haritasini birlikte kuralim.
                </h2>
                <div className="mt-8 space-y-4">
                  {[
                    "Dosya ve olay analizi",
                    "Dilekce ve delil stratejisi",
                    "Surec boyunca duzenli bilgilendirme",
                    "Risk ve olasilik degerlendirmesi",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-stone-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <Link
                  href="/iletisim"
                  className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-50"
                >
                  Randevu Talebi Olustur
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
