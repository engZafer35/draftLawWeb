import fs from "node:fs";
import path from "node:path";

const url = "https://www.melisaezgisimsek.av.tr/calisma-alanlarimiz/tuketici-hukuku/";
const out = path.join(process.cwd(), "scripts/practice-sources/tuketici-hukuku.txt");

const res = await fetch(url);
const html = await res.text();
const text = html
  .replace(/<script[\s\S]*?<\/script>/gi, "")
  .replace(/<style[\s\S]*?<\/style>/gi, "")
  .replace(/<[^>]+>/g, "\n")
  .replace(/&nbsp;/g, " ")
  .replace(/&#8217;/g, "'")
  .replace(/&amp;/g, "&")
  .replace(/\n+/g, "\n")
  .trim();

const start = text.indexOf("# Tüketici Hukuku");
const end = text.indexOf("© Aslan Hukuk Bürosu");
const article = start >= 0 ? text.slice(start, end > start ? end : undefined).trim() : text;

fs.writeFileSync(out, article);
console.log(`Saved ${article.split("\n").length} lines to ${out}`);
