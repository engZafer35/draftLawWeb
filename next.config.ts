import type { NextConfig } from "next";
import path from "path";

// GitHub Pages proje sitesi: https://kullanici.github.io/draftLawWeb/
// Yerel gelistirmede basePath bos kalir; GitHub icin: GITHUB_PAGES=true npm run build:gh-pages
const basePath = process.env.GITHUB_PAGES === "true" ? "/draftLawWeb" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
