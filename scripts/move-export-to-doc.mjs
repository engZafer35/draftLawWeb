import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "out");
const docDir = path.join(root, "doc");

if (!fs.existsSync(outDir)) {
  console.error("'out' klasoru bulunamadi. Once static build olusmus olmali.");
  process.exit(1);
}

if (fs.existsSync(docDir)) {
  fs.rmSync(docDir, { recursive: true, force: true });
}

fs.renameSync(outDir, docDir);
console.log("Static export ciktilari 'doc/' klasorune tasindi.");
