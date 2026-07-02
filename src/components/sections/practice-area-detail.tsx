import type {
  PracticeAreaDetail,
  PracticeAreaFaq,
  PracticeAreaSection,
} from "@/data/practice-area-types";

function SectionBlock({ section }: { section: PracticeAreaSection }) {
  return (
    <section className="space-y-5">
      <h2 className="text-2xl font-semibold tracking-tight text-stone-950 sm:text-3xl">
        {section.title}
      </h2>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="text-base leading-8 text-stone-700">
          {paragraph}
        </p>
      ))}
      {section.bullets ? (
        <ul className="list-disc space-y-2 pl-5 text-base leading-8 text-stone-700">
          {section.bullets
            .filter((item) => item !== "İletişim")
            .map((item) => (
              <li key={item}>{item}</li>
            ))}
        </ul>
      ) : null}
      {section.subsections?.map((subsection) => (
        <div key={subsection.title} className="space-y-3 pt-2">
          <h3 className="text-xl font-semibold text-stone-950">{subsection.title}</h3>
          {subsection.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-stone-700">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </section>
  );
}

function FaqBlock({ faqs }: { faqs: PracticeAreaFaq[] }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight text-stone-950 sm:text-3xl">
        Sik Sorulan Sorular (FAQ)
      </h2>
      {faqs.map((faq) => (
        <div
          key={faq.question}
          className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-stone-950">{faq.question}</h3>
          <p className="mt-3 text-sm leading-7 text-stone-600">{faq.answer}</p>
        </div>
      ))}
    </section>
  );
}

export function PracticeAreaDetailContent({ detail }: { detail: PracticeAreaDetail }) {
  return (
    <div className="space-y-12">
      <div className="grid gap-4 sm:grid-cols-2">
        {detail.infoCards.map((card) => (
          <div
            key={card.title}
            className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-stone-950">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-stone-600">{card.description}</p>
          </div>
        ))}
      </div>

      <p className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-7 text-stone-700">
        {detail.disclaimer}
      </p>

      {detail.sections.map((section) => (
        <SectionBlock key={section.title} section={section} />
      ))}

      {detail.steps ? (
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-950 sm:text-3xl">
            Surec Adimlari
          </h2>
          <div className="grid gap-4 lg:grid-cols-5">
            {detail.steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6"
              >
                <p className="text-4xl font-semibold text-amber-700">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-stone-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {detail.faqs ? <FaqBlock faqs={detail.faqs} /> : null}

      {detail.closingNote ? (
        <section className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8">
          <h2 className="text-xl font-semibold text-stone-950">Bilgilendirme</h2>
          <p className="mt-4 text-sm leading-7 text-stone-600">{detail.closingNote}</p>
        </section>
      ) : null}
    </div>
  );
}
