// "Steaming tonkotsu ramen, noodle lift" — food-picture-01 entry.
// Copies the bundled ramen photo to the output path, byte for byte.
// Deterministic: a plain byte copy, so every run writes identical bytes.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "ramen.jpg");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const target = join(outDir, "entry.png");

const bytes = readFileSync(source);
if (bytes.length === 0) {
  throw new Error("bundled ramen.jpg is empty");
}
if (bytes[0] !== 0xff || bytes[1] !== 0xd8 || bytes[2] !== 0xff) {
  throw new Error("bundled ramen.jpg is not a JPEG");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(target, bytes);

const written = readFileSync(target);
if (!written.equals(bytes)) {
  throw new Error("output does not match the bundled ramen.jpg");
}

console.log(`wrote ${written.length} bytes to ${target}`);
