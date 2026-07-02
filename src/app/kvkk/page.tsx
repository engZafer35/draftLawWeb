import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "KVKK",
  description:
    "6698 sayili Kisisel Verilerin Korunmasi Kanunu kapsaminda aydinlatma ve veri isleme bilgilendirmesi.",
};

export default function KvkkPage() {
  return (
    <>
      <PageIntro
        eyebrow="KVKK"
        title="Kisisel verilerin korunmasi ve aydinlatma metni"
        description="Bu metin tanitim amacli bir yer tutucudur. Gercek veri isleme surecleri ve hukuki metinler daha sonra netlestirilmelidir."
      />
      <Container className="pb-20">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
          <div className="space-y-4 text-base leading-8 text-stone-700">
            <p>
              Bu sayfada, iletisim formlari ve soru cevap bolumu uzerinden
              paylasilan kisisel verilerin hangi amaclarla alinacagi ve nasil
              korunacagi anlatilacaktir.
            </p>
            <p>
              Ilk surumde sistem yalnizca frontend/local saklama mantigi ile
              calisacak sekilde tasarlanmistir. Canliya cikmadan once nihai KVKK
              metninin hukuk burosunun gercek operasyonuna gore revize edilmesi
              gerekir.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
