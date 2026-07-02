import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { blogPosts } from "@/data/blog-posts";
import { getPracticeArea, practiceAreas } from "@/data/practice-areas";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);

  if (!area) {
    return {};
  }

  return {
    title: area.seoTitle,
    description: area.seoDescription,
    alternates: {
      canonical: `/calisma-alanlarimiz/${area.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export default async function PracticeAreaDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const area = getPracticeArea(slug);

  if (!area) {
    notFound();
  }

  const relatedPosts = blogPosts.filter(
    (post) =>
      post.category === area.shortTitle ||
      post.title.toLowerCase().includes(area.shortTitle.toLowerCase().split(" ")[0]),
  );

  return (
    <>
      <section className="bg-[linear-gradient(180deg,#fffbf5_0%,#ffffff_70%)] py-16 sm:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">
            Izmir
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
            {area.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-600">
            {area.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {area.highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700"
              >
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            {area.content.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-stone-700">
                {paragraph}
              </p>
            ))}

            <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8">
              <h2 className="text-2xl font-semibold text-stone-950">
                Bu alanda hangi konularda destek veriyoruz?
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {area.topics.map((topic) => (
                  <div
                    key={topic}
                    className="rounded-2xl border border-stone-200 bg-white px-4 py-4 text-sm text-stone-700"
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-stone-950">Ilgili Yazilar</h3>
              <div className="mt-5 space-y-4">
                {relatedPosts.slice(0, 3).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block rounded-2xl border border-stone-200 p-4 transition hover:border-stone-900"
                  >
                    <p className="text-sm font-semibold text-stone-950">{post.title}</p>
                    <p className="mt-2 text-sm leading-6 text-stone-600">
                      {post.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-stone-950 p-8 text-white">
              <h3 className="text-xl font-semibold">Surece uygun stratejik temsil</h3>
              <p className="mt-4 text-sm leading-7 text-stone-300">
                Dosyanin niteligine uygun delil plani, dilekce yapisi ve sure
                yonetimi ile sureci en basindan dogru kurmak hedeflenir.
              </p>
              <Link
                href="/iletisim"
                className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950"
              >
                Iletisime Gec
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
