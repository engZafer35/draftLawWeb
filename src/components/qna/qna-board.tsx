"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type QaEntry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  question: string;
  answer: string;
  topic: string;
  createdAt: string;
};

const storageKey = "zafer-satilmis-qna";

const seedData: QaEntry[] = [
  {
    id: "seed-1",
    name: "Merve K.",
    email: "",
    phone: "",
    topic: "Bosanma",
    question: "Cekismeli bosanma davasinda ilk durusma ne kadar surede olur?",
    answer:
      "Mahkemenin is yukune gore degisebilir. Ancak dilekce asamalari, tensip islemleri ve tebligat surecinin dogru yonetilmesi ilk durusmanin zamanini etkiler.",
    createdAt: "2026-07-02",
  },
  {
    id: "seed-2",
    name: "Ahmet T.",
    email: "",
    phone: "",
    topic: "Miras",
    question: "Babam evi kardesime devretti. Miras hakki acisindan ne yapabilirim?",
    answer:
      "Devrin niteligine gore muris muvazaasi, tenkis veya diger miras davalari gundeme gelebilir. Tapu ve para hareketleri birlikte incelenmelidir.",
    createdAt: "2026-07-01",
  },
];

export function QnaBoard() {
  const [entries, setEntries] = useState<QaEntry[]>(() => {
    if (typeof window === "undefined") {
      return seedData;
    }

    const raw = window.localStorage.getItem(storageKey);

    if (!raw) {
      return seedData;
    }

    try {
      return JSON.parse(raw) as QaEntry[];
    } catch {
      return seedData;
    }
  });
  const [error, setError] = useState("");

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(entries));
  }, [entries]);

  const sortedEntries = useMemo(
    () =>
      [...entries].sort((a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      ),
    [entries],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const topic = String(formData.get("topic") || "").trim();
    const question = String(formData.get("question") || "").trim();

    if (!name || !topic || !question) {
      setError("Lutfen ad, konu ve soru alanlarini doldurun.");
      return;
    }

    if (!email && !phone) {
      setError("Soru gondermek icin e-posta veya telefon alanlarindan biri zorunludur.");
      return;
    }

    const nextEntry: QaEntry = {
      id: crypto.randomUUID(),
      name,
      email,
      phone,
      topic,
      question,
      answer:
        "Sorunuz alinmistir. Bu demo surumde cevaplar frontend tarafinda tutulur; panel aktif oldugunda bu alana resmi yanit eklenebilir.",
      createdAt: new Date().toISOString(),
    };

    const updatedEntries = [nextEntry, ...entries];
    setEntries(updatedEntries);
    event.currentTarget.reset();
    setError("");
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <form
        onSubmit={handleSubmit}
        className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm"
      >
        <h2 className="text-2xl font-semibold text-stone-950">Soru Sor</h2>
        <p className="mt-3 text-sm leading-7 text-stone-600">
          Konu, soru metni ve e-posta ya da telefon bilgisinden en az biri ile
          formu gonderebilirsiniz.
        </p>

        <div className="mt-6 space-y-4">
          {[
            { name: "name", label: "Ad Soyad", type: "text", placeholder: "Ad Soyad" },
            { name: "topic", label: "Konu", type: "text", placeholder: "Orn. Nafaka" },
            { name: "email", label: "E-posta", type: "email", placeholder: "ornek@mail.com" },
            { name: "phone", label: "Telefon", type: "text", placeholder: "05xx xxx xx xx" },
          ].map((field) => (
            <label key={field.name} className="block">
              <span className="mb-2 block text-sm font-medium text-stone-800">
                {field.label}
              </span>
              <input
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                className="w-full rounded-2xl border border-stone-300 px-4 py-3 text-sm outline-none transition focus:border-stone-900"
              />
            </label>
          ))}

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-stone-800">Soru</span>
            <textarea
              name="question"
              rows={6}
              placeholder="Sorunuzu detayli sekilde yazin"
              className="w-full rounded-2xl border border-stone-300 px-4 py-3 text-sm outline-none transition focus:border-stone-900"
            />
          </label>
        </div>

        {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}

        <button
          type="submit"
          className="mt-6 rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
        >
          Soruyu Gonder
        </button>
      </form>

      <div className="space-y-5">
        {sortedEntries.map((entry) => (
          <article
            key={entry.id}
            className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
              <span>{entry.topic}</span>
              <span className="h-1 w-1 rounded-full bg-stone-400" />
              <span>{entry.name}</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-stone-950">
              {entry.question}
            </h3>
            <p className="mt-4 text-sm leading-7 text-stone-600">{entry.answer}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
