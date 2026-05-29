#!/usr/bin/env node
/**
 * Apply SabeeApp border-radius utility classes to page components.
 * Run: node scripts/apply-border-radius.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pagesDir = path.join(__dirname, "../src/pages");

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((e) => {
    const full = path.join(dir, e.name);
    return e.isDirectory() ? walk(full) : e.name.endsWith(".jsx") ? [full] : [];
  });
}

function hasRoundedImage(className) {
  return /\brounded-image\b/.test(className);
}

function transformContent(filePath, content) {
  let next = content;
  const rel = path.relative(pagesDir, filePath);

  // Logo4 grid cells
  next = next.replace(
    /justify-self-center bg-neutral-lightest/g,
    "justify-self-center rounded-card bg-neutral-lightest",
  );

  // Pricing27 comparison rows
  next = next.replace(
    /grid grid-cols-3 odd:bg-background-secondary/g,
    "grid grid-cols-3 rounded-card odd:bg-background-secondary",
  );

  // Layout356 hero images
  next = next.replace(
    /h-\[25rem\] w-full object-cover/g,
    "h-[25rem] w-full rounded-image object-cover",
  );

  // size-full object-cover (skip if rounded-image already present on same className)
  next = next.replace(
    /className="([^"]*)"/g,
    (match, classes) => {
      if (!classes.includes("object-cover") || !classes.includes("size-full")) {
        return match;
      }
      if (hasRoundedImage(classes)) {
        return match;
      }
      return `className="rounded-image ${classes}"`;
    },
  );

  // Header139: sticky hero container + video thumbnail button
  if (rel === "home/components/Header139.jsx") {
    next = next.replace(
      "sticky top-[5vh] z-10 mb-[-5vh] mt-[5vh] flex h-[90vh] w-[90%] flex-col items-start justify-center overflow-hidden",
      "sticky top-[5vh] z-10 mb-[-5vh] mt-[5vh] flex h-[90vh] w-[90%] flex-col items-start justify-center overflow-hidden rounded-image",
    );
    next = next.replace(
      'className="absolute bottom-[5%] right-[5%] flex w-full items-center justify-center md:max-w-[14rem] lg:max-w-xxs"',
      'className="absolute bottom-[5%] right-[5%] flex w-full items-center justify-center overflow-hidden rounded-image md:max-w-[14rem] lg:max-w-xxs"',
    );
  }

  return next;
}

let changed = 0;
for (const file of walk(pagesDir)) {
  const before = fs.readFileSync(file, "utf8");
  const after = transformContent(file, before);
  if (after !== before) {
    fs.writeFileSync(file, after);
    changed++;
    console.log("updated:", path.relative(pagesDir, file));
  }
}
console.log(`\n${changed} file(s) updated.`);
