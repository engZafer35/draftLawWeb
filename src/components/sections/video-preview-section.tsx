import Link from "next/link";
import { videos } from "@/data/videos";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "./section-heading";

export function VideoPreviewSection() {
  return (
    <section className="bg-stone-100 py-20">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Videolar"
            title="Kisa anlatim videolari icin hazir alanlar"
            description="Bu bolumde bilgilendirici videolarin kapak, kategori ve oynatma alanlari olusturuldu. Gercek video baglantilari sonradan kolayca eklenebilir."
          />
          <Link
            href="/videolar"
            className="inline-flex rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
          >
            Video Arsivine Git
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {videos.slice(0, 3).map((video, index) => (
            <div
              key={video.title}
              className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm"
            >
              <div
                className={`relative flex h-60 items-end justify-between p-6 text-white ${
                  index === 0
                    ? "bg-[linear-gradient(135deg,#0f172a_0%,#78350f_100%)]"
                    : index === 1
                      ? "bg-[linear-gradient(135deg,#292524_0%,#92400e_100%)]"
                      : "bg-[linear-gradient(135deg,#111827_0%,#57534e_100%)]"
                }`}
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
                    {video.category}
                  </p>
                  <p className="mt-2 text-sm text-stone-200">{video.duration}</p>
                </div>
                <div className="grid h-14 w-14 place-items-center rounded-full bg-white/15 backdrop-blur">
                  <span className="ml-1 text-2xl">▶</span>
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-semibold text-stone-950">{video.title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
