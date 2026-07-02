import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/sections/page-intro";
import { videos } from "@/data/videos";

export const metadata: Metadata = {
  title: "Videolar",
  description:
    "Bosanma, nafaka, ceza ve miras hukuku gibi basliklarda bilgilendirici video alanlari.",
};

export default function VideosPage() {
  return (
    <>
      <PageIntro
        eyebrow="Videolar"
        title="Bilgilendirici hukuk videolari icin hazir alanlar"
        description="Video kartlari, kategori yapisi ve oynatma yerleri olusturuldu. Gercek video kaynaklari eklendiginde bu sayfa dogrudan kullanilabilir."
      />
      <Container className="pb-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {videos.map((video, index) => (
            <article
              key={video.title}
              className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm"
            >
              <div
                className={`flex h-72 items-end justify-between p-8 text-white ${
                  index % 3 === 0
                    ? "bg-[linear-gradient(135deg,#111827_0%,#78350f_100%)]"
                    : index % 3 === 1
                      ? "bg-[linear-gradient(135deg,#1c1917_0%,#a16207_100%)]"
                      : "bg-[linear-gradient(135deg,#292524_0%,#57534e_55%,#f59e0b_170%)]"
                }`}
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
                    {video.category}
                  </p>
                  <h2 className="mt-4 max-w-md text-3xl font-semibold">{video.title}</h2>
                  <p className="mt-3 text-sm text-stone-200">{video.duration}</p>
                </div>
                <div className="grid h-16 w-16 place-items-center rounded-full bg-white/15 backdrop-blur">
                  <span className="ml-1 text-3xl">▶</span>
                </div>
              </div>
              <div className="p-7">
                <p className="text-sm leading-7 text-stone-600">{video.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}
