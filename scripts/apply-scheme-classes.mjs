#!/usr/bin/env node
/**
 * Apply scheme-* section classes from sabeeapp-design export to page components.
 * Run: node scripts/apply-scheme-classes.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const designRoot = path.join(
  process.env.HOME,
  "Downloads/sabeeapp-design/react/components",
);
const pagesDir = path.join(__dirname, "../src/pages");

function kebabToPascal(name) {
  return name
    .replace(/_\d+$/, (m) => m)
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function normalizeComponentName(name) {
  return kebabToPascal(name).replace(/(\D)0+(\d)/g, "$1$2");
}

function extractSchemeClasses(content) {
  const sectionMatch = content.match(/<section[^>]*className="([^"]*)"/);
  if (!sectionMatch) return null;

  const classes = sectionMatch[1];
  const parts = [];
  const scheme = classes.match(/\bscheme-[1-4]\b/);
  if (scheme) parts.push(scheme[0]);
  if (/\bbtn-light\b/.test(classes)) parts.push("btn-light");
  if (/\balternate\b/.test(classes)) parts.push("alternate");
  if (/\blogo-alt\b/.test(classes)) parts.push("logo-alt");
  return parts.length ? parts.join(" ") : null;
}

function buildSchemeMap() {
  const map = new Map();

  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
        continue;
      }
      if (!entry.name.endsWith(".jsx")) continue;

      const content = fs.readFileSync(full, "utf8");
      const schemeClasses = extractSchemeClasses(content);
      if (!schemeClasses) continue;

      const baseName = entry.name.replace(/\.jsx$/, "");
      const componentName = normalizeComponentName(baseName);
      map.set(componentName, schemeClasses);
    }
  }

  walk(designRoot);
  return map;
}

function walkPages(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((e) => {
    const full = path.join(dir, e.name);
    return e.isDirectory() ? walkPages(full) : e.name.endsWith(".jsx") ? [full] : [];
  });
}

function addSchemeToSection(content, schemeClasses) {
  if (content.includes(schemeClasses.split(" ")[0])) {
    return content;
  }

  if (/<section id="relume">/.test(content)) {
    return content.replace(
      /<section id="relume">/,
      `<section id="relume" className="${schemeClasses}">`,
    );
  }

  return content.replace(
    /(<section[^>]*className=")([^"]*)(")/,
    (match, open, classes, close) => {
      if (classes.includes("scheme-")) {
        return match;
      }
      return `${open}${classes} ${schemeClasses}${close}`;
    },
  );
}

function applySchemeColors(content) {
  let next = content;

  next = next.replace(
    /sticky mb-8 border border-border-primary bg-background-primary p-8/g,
    "sticky mb-8 rounded-card border border-scheme-border bg-scheme-foreground p-8",
  );

  next = next.replace(
    /justify-self-center rounded-card bg-neutral-lightest/g,
    "justify-self-center rounded-card border border-scheme-border bg-scheme-foreground",
  );

  next = next.replace(
    /border-t border-border-primary bg-neutral-white/g,
    "border-t border-scheme-border bg-scheme-foreground",
  );

  return next;
}

const schemeMap = buildSchemeMap();
let schemeUpdated = 0;
let colorUpdated = 0;

for (const file of walkPages(pagesDir)) {
  const baseName = path.basename(file, ".jsx");
  let content = fs.readFileSync(file, "utf8");
  const before = content;

  const schemeClasses = schemeMap.get(baseName);
  if (schemeClasses) {
    content = addSchemeToSection(content, schemeClasses);
  }

  content = applySchemeColors(content);

  if (content !== before) {
    fs.writeFileSync(file, content);
    if (schemeClasses) schemeUpdated++;
    colorUpdated++;
    console.log("updated:", path.relative(pagesDir, file));
  }
}

console.log(`\nScheme classes applied to ${schemeUpdated} file(s).`);
console.log(`Color/card updates in ${colorUpdated} file(s).`);
