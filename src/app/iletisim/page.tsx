import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/sections/page-intro";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Iletisim",
  description:
    "Avukat Zafer Satilmis ile iletisim, ofis bilgileri, calisma saatleri ve ilk gorusme bilgileri.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Iletisim"
        title="Hukuki surecinizi degerlendirmek icin iletisime gecin"
        description="Telefon, e-posta ve ofis bilgileri su an placeholder olarak kurgulandi. Gercek iletisim verileri daha sonra kolayca guncellenebilir."
      />
      <Container className="pb-20">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-stone-200 bg-stone-950 p-8 text-white">
            <h2 className="text-2xl font-semibold">Iletisim Bilgileri</h2>
            <div className="mt-6 space-y-3 text-sm leading-7 text-stone-300">
              <p>{siteConfig.address}</p>
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.email}</p>
              <p>{siteConfig.secondaryEmail}</p>
              <p>KEP: {siteConfig.kep}</p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-950">Calisma Saatleri</h2>
            <div className="mt-6 space-y-3 text-sm leading-7 text-stone-600">
              {siteConfig.officeHours.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <div className="mt-8 rounded-[1.5rem] bg-[linear-gradient(135deg,#e7e5e4_0%,#fff7ed_100%)] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
                Lokasyon
              </p>
              <p className="mt-4 text-base leading-8 text-stone-700">
                Harita/yol tarifi alani icin hazir tasarim bolumu. Gercek konum
                baglantisi sonradan eklenebilir.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
