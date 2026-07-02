import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "out");
const docsDir = path.join(root, "docs");

if (!fs.existsSync(outDir)) {
  console.error("'out' klasoru bulunamadi. Once static build olusmus olmali.");
  process.exit(1);
}

if (fs.existsSync(docsDir)) {
  fs.rmSync(docsDir, { recursive: true, force: true });
}

fs.renameSync(outDir, docsDir);

// Jekyll _next klasorunu yok saymasin diye zorunlu
fs.writeFileSync(path.join(docsDir, ".nojekyll"), "");

console.log("Static export ciktilari 'docs/' klasorune tasindi.");
