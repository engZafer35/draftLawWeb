import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/sections/page-intro";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Bosanma, nafaka, velayet, miras, ceza ve is hukuku alanlarinda guncel ve SEO odakli hukuk yazilari.",
};

export default function BlogPage() {
  return (
    <>
      <PageIntro
        eyebrow="Blog"
        title="Guncel hukuk yazilari ve uygulama rehberleri"
        description="Mevzuat, Yargitay yaklasimlari ve uygulamadaki kritik sorular etrafinda kurgulanan blog iceriklerimiz bu sayfada listelenmektedir."
      />
      <Container className="pb-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`h-56 bg-gradient-to-br ${post.coverTone}`} />
              <div className="p-7">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                  <span>{post.category}</span>
                  <span className="h-1 w-1 rounded-full bg-stone-400" />
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-stone-950">
                  {post.title}
                </h2>
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
    </>
  );
}
