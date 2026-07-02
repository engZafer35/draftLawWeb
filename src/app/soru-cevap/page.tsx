import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { QnaBoard } from "@/components/qna/qna-board";
import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "Soru Cevap",
  description:
    "Kullanicilarin hukuki sorularini birakabildigi ve yanitlarin frontend tarafinda tutuldugu soru cevap sayfasi.",
};

export default function QnaPage() {
  return (
    <>
      <PageIntro
        eyebrow="Soru Cevap"
        title="Herkes konu acabilir, sorusunu birakabilir"
        description="Blog sitelerindeki soru-cevap mantigina benzer bir yapi kuruldu. Kullanici, adini ve e-posta ya da telefon bilgisini birakarak hukuki soru gonderebilir."
      />
      <Container className="pb-20">
        <QnaBoard />
      </Container>
    </>
  );
}
