import { siteConfig } from "@/data/site";
import { Container } from "@/components/layout/container";

export function ContactCtaSection() {
  return (
    <section className="pb-20">
      <Container>
        <div className="overflow-hidden rounded-[2.25rem] bg-[linear-gradient(135deg,#111827_0%,#292524_55%,#f59e0b_180%)] p-10 text-white sm:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
                Iletisim
              </p>
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Izmir&#39;de hukuki destek ariyorsaniz, ilk degerlendirme icin bizimle
                iletisime gecebilirsiniz.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-stone-200">
                Bosanma, velayet, ceza, miras, alacak ve gayrimenkul
                uyusmazliklarinda dosyanizin niteligine uygun yol haritasi
                olusturuyoruz.
              </p>
            </div>
            <div className="space-y-3 rounded-[2rem] border border-white/10 bg-white/5 p-6 text-sm">
              <p>{siteConfig.address}</p>
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.email}</p>
              {siteConfig.officeHours.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
