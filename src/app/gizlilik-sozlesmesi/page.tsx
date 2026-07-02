import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "Gizlilik Sozlesmesi",
  description:
    "Site kullanimina iliskin temel gizlilik ilkeleri ve bilgi guvenligi bildirimi.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Gizlilik"
        title="Gizlilik sozlesmesi ve bilgi guvenligi ilkeleri"
        description="Site ziyaretcilerine yonelik gizlilik prensipleri bu alanda ozetlenir. Canliya cikmadan once operasyonel metinle guncellenmesi gerekir."
      />
      <Container className="pb-20">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
          <div className="space-y-4 text-base leading-8 text-stone-700">
            <p>
              Site icerisinde paylasilan iletisim ve soru verileri, kullaniciya
              geri donus amaci disinda kullanilmamalidir. Ucuncu kisilerle
              paylasim, yasal zorunluluklar disinda yapilmamalidir.
            </p>
            <p>
              Bu metin demo surumde ornek olarak sunulmaktadir. Gercek yayin
              oncesinde hosting, loglama ve form akislarina uygun son metin
              hazirlanmalidir.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
