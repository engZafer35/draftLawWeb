import fs from "node:fs";

const input = process.argv[2];
const output = process.argv[3];
const html = fs.readFileSync(input, "utf8");
const text = html
  .replace(/<script[\s\S]*?<\/script>/gi, "")
  .replace(/<style[\s\S]*?<\/style>/gi, "")
  .replace(/<[^>]+>/g, "\n")
  .replace(/&nbsp;/g, " ")
  .replace(/&#8217;/g, "'")
  .replace(/\n+/g, "\n")
  .trim();
fs.writeFileSync(output, text);
console.log(`Wrote ${output} (${text.split("\n").length} lines)`);
