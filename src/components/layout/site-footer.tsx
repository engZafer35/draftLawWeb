import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-950 text-stone-200">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
              {siteConfig.title}
            </p>
            <h2 className="max-w-md text-2xl font-semibold text-white">
              Hukuki sureclerde guvenilir, acik ve stratejik destek.
            </h2>
            <p className="max-w-xl text-sm leading-7 text-stone-300">
              {siteConfig.city} merkezli olarak aile hukuku, bosanma, ceza,
              miras, is hukuku ve gayrimenkul uyusmazliklarinda cozum odakli
              hukuki hizmet sunuyoruz.
            </p>
          </div>

          {siteConfig.footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-stone-300 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-2">
          <div className="space-y-2 text-sm text-stone-300">
            <p>{siteConfig.address}</p>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
          </div>
          <div className="space-y-2 text-sm text-stone-300 lg:text-right">
            <Link href="/kvkk" className="mr-4 hover:text-white">
              KVKK
            </Link>
            <Link href="/gizlilik-sozlesmesi" className="hover:text-white">
              Gizlilik Sozlesmesi
            </Link>
            <p className="pt-2">
              © 2026 {siteConfig.name}. Tum haklari saklidir.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
