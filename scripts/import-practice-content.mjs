import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceDir = path.join(root, "scripts", "practice-sources");
const outDir = path.join(root, "src", "data", "practice-areas");

const REPLACEMENTS = [
  [/Melisa Ezgi (Aslan|Şimşek|Simsek)/gi, "Zafer Satılmış"],
  [/Avukat Melisa Ezgi Aslan/gi, "Avukat Zafer Satılmış"],
  [/İzmir Boşanma Avukatı/gi, "Avukat Zafer Satılmış"],
  [/İzmir Ceza Hukuku Avukatı/gi, "Avukat Zafer Satılmış"],
  [/İzmir Miras Avukatı/gi, "Avukat Zafer Satılmış"],
  [/İzmir İş Hukuku Avukatı/gi, "Avukat Zafer Satılmış"],
  [/İzmir Ticaret Hukuku Avukatı/gi, "Avukat Zafer Satılmış"],
  [/İzmir Tüketici Hukuku Avukatı/gi, "Avukat Zafer Satılmış"],
  [/İzmir İcra Avukatı/gi, "Avukat Zafer Satılmış"],
  [/İzmir İcra ve İflas Hukuku Avukatı/gi, "Avukat Zafer Satılmış"],
  [/İzmir Gayrimenkul Avukatı/gi, "Avukat Zafer Satılmış"],
  [/Boşanma Avukatı/gi, "Avukat Zafer Satılmış"],
  [/İzmir'de ceza davalarında avukatlık/gi, "İzmir'de ceza davalarında Avukat Zafer Satılmış"],
  [/İzmir miras hukuku davalarında/gi, "İzmir miras hukuku davalarında Avukat Zafer Satılmış"],
  [/İzmir'de iş davası süreçlerinde/gi, "İzmir'de iş davası süreçlerinde Avukat Zafer Satılmış"],
  [/İzmir'de ticari uyuşmazlıklarda avukatlık/gi, "İzmir'de ticari uyuşmazlıklarda Avukat Zafer Satılmış"],
  [/İzmir'de icra ve iflas hukuku alanında avukatlık/gi, "İzmir'de icra ve iflas hukuku alanında Avukat Zafer Satılmış"],
  [/İzmir'de gayrimenkul hukuku alanında avukatlık/gi, "İzmir'de gayrimenkul hukuku alanında Avukat Zafer Satılmış"],
  [/Aslan Hukuk Bürosu/gi, "Avukat Zafer Satılmış"],
];

function replaceNames(text) {
  return REPLACEMENTS.reduce((r, [p, rep]) => r.replace(p, rep), text);
}

function esc(str) {
  return str.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function parseContent(raw) {
  const lines = raw.split("\n");
  let i = 0;
  while (i < lines.length && !lines[i].startsWith("# ")) i++;
  i++;

  const infoCards = [];
  let disclaimer = "";
  const sections = [];
  let steps = [];
  const faqs = [];
  let closingNote = "";

  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line || line.startsWith("Skip to")) {
      i++;
      continue;
    }
    if (line.startsWith("Bilgilendirme:") && !disclaimer) {
      disclaimer = replaceNames(line.replace(/^Bilgilendirme:\s*/, ""));
      i++;
      continue;
    }
    if (line.startsWith("Bilgilendirme Notu:")) {
      disclaimer = replaceNames(line);
      i++;
      continue;
    }
    if (line === "## Hızlı Bilgi Kartları") {
      i++;
      while (i < lines.length && !lines[i].startsWith("## ")) {
        if (lines[i].startsWith("### ")) {
          const title = replaceNames(lines[i].replace(/^### /, ""));
          i++;
          const desc = [];
          while (i < lines.length && lines[i].trim() && !lines[i].startsWith("#")) {
            desc.push(replaceNames(lines[i].trim()));
            i++;
          }
          infoCards.push({ title, description: desc.join(" ") });
        } else i++;
      }
      continue;
    }
    if (line.startsWith("### ") && infoCards.length < 4 && !line.includes("?")) {
      const maybeTitle = line.replace(/^### /, "");
      const nextIdx = lines.slice(i + 1).findIndex((l) => l.trim());
      const next = nextIdx >= 0 ? lines[i + 1 + nextIdx].trim() : "";
      if (next && !next.startsWith("#") && maybeTitle.length < 60) {
        const title = replaceNames(maybeTitle);
        i++;
        const desc = [];
        while (i < lines.length && !lines[i].startsWith("#")) {
          const chunk = lines[i].trim();
          if (chunk) desc.push(replaceNames(chunk));
          i++;
        }
        if (desc.length && infoCards.length < 4) {
          infoCards.push({ title, description: desc.join(" ") });
          continue;
        }
        i--;
      }
    }
    if (line.includes("Süreç Adımları") || line.includes("Süreç Adımları:") || line.match(/## .+Süreç Adımları/)) {
      i++;
      const stepItems = [];
      while (i < lines.length) {
        const l = lines[i].trim();
        if (l.startsWith("## ")) break;
        if (/^\d+$/.test(l)) {
          i++;
          while (i < lines.length && !lines[i].trim()) i++;
          const title = replaceNames(lines[i]?.trim() ?? "");
          i++;
          const desc = [];
          while (i < lines.length && !lines[i].startsWith("#") && !/^\d+$/.test(lines[i].trim())) {
            const chunk = lines[i].trim();
            if (chunk) desc.push(replaceNames(chunk));
            i++;
          }
          stepItems.push({ title, description: desc.join(" ") });
        } else i++;
      }
      steps = stepItems;
      continue;
    }
    if (line.includes("Sık Sorulan Sorular") || line.includes("(FAQ)") || line.includes("(SSS)")) {
      i++;
      while (i < lines.length) {
        const l = lines[i].trim();
        if (l.startsWith("## Bilgilendirme") || l.startsWith("## Sonuç")) break;
        if (l && !l.startsWith("#") && l.endsWith("?")) {
          const question = replaceNames(l);
          i++;
          const ans = [];
          while (i < lines.length && lines[i].trim() && !lines[i].startsWith("#") && !lines[i].trim().endsWith("?")) {
            ans.push(replaceNames(lines[i].trim()));
            i++;
          }
          faqs.push({ question, answer: ans.join(" ") });
        } else if (l.startsWith("## ")) break;
        else i++;
      }
      continue;
    }
    if (line.startsWith("## Bilgilendirme") || line.startsWith("## Sonuç")) {
      i++;
      const paras = [];
      while (i < lines.length) {
        const l = lines[i].trim();
        if (l.startsWith("Yasal Uyarı") || l.startsWith("©")) break;
        if (l) paras.push(replaceNames(l));
        i++;
      }
      closingNote = paras.join("\n\n");
      continue;
    }
    if (line.startsWith("## ")) {
      const title = replaceNames(line.replace(/^## /, ""));
      i++;
      const section = { title, paragraphs: [], bullets: [], subsections: [] };
      while (i < lines.length) {
        const l = lines[i].trim();
        if (l.startsWith("## ")) break;
        if (l.startsWith("### ")) {
          const st = replaceNames(l.replace(/^### /, ""));
          i++;
          const paras = [];
          while (i < lines.length && !lines[i].startsWith("#")) {
            const chunk = lines[i].trim();
            if (chunk) paras.push(replaceNames(chunk));
            i++;
          }
          section.subsections.push({ title: st, paragraphs: paras });
        } else if (l.startsWith("- ")) {
          section.bullets.push(replaceNames(l.replace(/^- /, "")));
          i++;
        } else if (l) {
          section.paragraphs.push(replaceNames(l));
          i++;
        } else i++;
      }
      if (!section.paragraphs.length) delete section.paragraphs;
      if (!section.bullets.length) delete section.bullets;
      if (!section.subsections.length) delete section.subsections;
      sections.push(section);
      continue;
    }
    i++;
  }

  return { infoCards, disclaimer, sections, steps, faqs, closingNote };
}

function toTs(slug, detail) {
  const obj = JSON.stringify(detail, null, 2)
    .replace(/"([^"]+)":/g, "$1:")
    .replace(/"/g, '"');
  return `import type { PracticeAreaDetail } from "@/data/practice-area-types";\n\nexport const ${slug.replace(/-/g, "_")}Detail: PracticeAreaDetail = ${obj};\n`;
}

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(sourceDir).filter((f) => f.endsWith(".txt"));
for (const file of files) {
  const slug = file.replace(".txt", "");
  const raw = fs.readFileSync(path.join(sourceDir, file), "utf8");
  const detail = parseContent(raw);
  fs.writeFileSync(path.join(outDir, `${slug}.ts`), toTs(slug, detail));
  console.log(`Imported ${slug}: ${detail.sections.length} sections, ${detail.faqs.length} faqs`);
}
