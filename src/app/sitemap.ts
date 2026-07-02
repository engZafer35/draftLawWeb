import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";
import { practiceAreas } from "@/data/practice-areas";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/kurumsal",
    "/hakkimizda",
    "/ekibimiz",
    "/sertifikalar",
    "/calisma-alanlarimiz",
    "/blog",
    "/videolar",
    "/soru-cevap",
    "/iletisim",
    "/kvkk",
    "/gizlilik-sozlesmesi",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
    })),
    ...practiceAreas.map((area) => ({
      url: `${siteConfig.url}/calisma-alanlarimiz/${area.slug}`,
      lastModified: new Date(),
    })),
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(),
    })),
  ];
}
