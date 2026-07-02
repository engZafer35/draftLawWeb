import { Container } from "@/components/layout/container";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="bg-[linear-gradient(180deg,#fffbf5_0%,#ffffff_70%)] py-16 sm:py-20">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-stone-600">
          {description}
        </p>
      </Container>
    </section>
  );
}
