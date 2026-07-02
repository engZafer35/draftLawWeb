import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { blogPosts, getBlogPost } from "@/data/blog-posts";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <section className="bg-[linear-gradient(180deg,#fffbf5_0%,#ffffff_70%)] py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
            <span>{post.category}</span>
            <span className="h-1 w-1 rounded-full bg-stone-400" />
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-600">
            {post.excerpt}
          </p>
        </Container>
      </section>

      <Container className="py-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold text-stone-950">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-stone-700">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </article>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-stone-950">
                Benzer Yazilar
              </h3>
              <div className="mt-5 space-y-4">
                {relatedPosts.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="block rounded-2xl border border-stone-200 p-4 transition hover:border-stone-900"
                  >
                    <p className="text-sm font-semibold text-stone-950">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-stone-600">
                      {item.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-stone-200 bg-stone-950 p-8 text-white">
              <h3 className="text-xl font-semibold">Dosyanizi birlikte degerlendirelim</h3>
              <p className="mt-4 text-sm leading-7 text-stone-300">
                Yazidaki konu sizin hukuki surecinizle benzerlik tasiyorsa, somut
                veriler uzerinden ayrica degerlendirme yapmak gerekir.
              </p>
              <Link
                href="/iletisim"
                className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950"
              >
                Iletisime Gec
              </Link>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
