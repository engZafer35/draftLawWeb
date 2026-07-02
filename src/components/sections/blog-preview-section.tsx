import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "./section-heading";

export function BlogPreviewSection() {
  const featured = blogPosts.slice(0, 6);

  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Guncel Yazilarimiz"
            title="Arama niyetine uygun, mevzuat odakli ve aciklayici hukuk icerikleri"
            description="Blog yapisinda bosanma, nafaka, velayet, miras ve ceza hukukuna iliskin soru odakli rehberler paylasiyoruz."
          />
          <Link
            href="/blog"
            className="inline-flex rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-900 transition hover:border-stone-900"
          >
            Tum Yazilari Gor
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featured.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`h-52 bg-gradient-to-br ${post.coverTone}`} />
              <div className="p-7">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                  <span>{post.category}</span>
                  <span className="h-1 w-1 rounded-full bg-stone-400" />
                  <span>{post.readingTime}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-stone-950">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">
                  {post.excerpt}
                </p>
                <span className="mt-6 inline-flex text-sm font-semibold text-stone-950 transition group-hover:text-amber-800">
                  Okumaya Devam Et
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
