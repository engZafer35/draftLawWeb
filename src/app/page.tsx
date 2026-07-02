import { BlogPreviewSection } from "@/components/sections/blog-preview-section";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PracticeGrid } from "@/components/sections/practice-grid";
import { ProcessSection } from "@/components/sections/process-section";
import { VideoPreviewSection } from "@/components/sections/video-preview-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Izmir Avukat Zafer Satilmis",
  description:
    "Izmir bosanma, aile, ceza, miras, is hukuku ve gayrimenkul alanlarinda hukuki danismanlik ve dava takibi hizmetleri.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PracticeGrid />
      <ProcessSection />
      <BlogPreviewSection />
      <VideoPreviewSection />
      <FaqSection />
      <ContactCtaSection />
    </>
  );
}
