"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/data/site";
import { Container } from "./container";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <Link href="/" className="group">
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">
                Izmir Avukat
              </span>
              <span className="text-lg font-semibold text-stone-900 transition group-hover:text-amber-800">
                {siteConfig.name}
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {siteConfig.navLinks.map((item) => (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="text-sm font-medium text-stone-700 transition hover:text-stone-950"
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="invisible absolute left-0 top-full mt-4 w-56 translate-y-2 rounded-2xl border border-stone-200 bg-white p-3 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-4 py-3 text-sm text-stone-700 transition hover:bg-stone-50 hover:text-stone-950"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
              className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-800 transition hover:border-stone-900"
            >
              Hemen Ara
            </a>
            <Link
              href="/iletisim"
              className="rounded-full bg-stone-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-stone-800"
            >
              Randevu Al
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-800 lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            Menu
          </button>
        </div>
      </Container>

      {menuOpen ? (
        <div className="border-t border-stone-200 bg-white lg:hidden">
          <Container className="py-4">
            <div className="flex flex-col gap-2">
              {siteConfig.navLinks.map((item) => (
                <div key={item.href} className="rounded-2xl border border-stone-200 p-2">
                  <Link
                    href={item.href}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-stone-800"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <div className="ml-2 mt-1 border-l border-stone-200 pl-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-3 py-2 text-sm text-stone-600"
                          onClick={() => setMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
