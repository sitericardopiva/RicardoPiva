import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "artigos");
const LIMIT = 10;
function normalizeItem(slug, data) {
  return {
    slug,
    title: data?.title || slug,
    summary: data?.summary || "",
    date: data?.date || null,
    attachments: Array.isArray(data?.attachments) ? data.attachments : [],
    cover: data?.cover || null,
  };
}

export async function loadAllArticles() {
  let items = [];

  try {
    const entries = await fs.readdir(CONTENT_DIR, { withFileTypes: true });

    for (const entry of entries) {
      
      if (entry.isDirectory()) {
        const slug = entry.name;
        const filePath = path.join(CONTENT_DIR, slug, "index.md");
        try {
          const raw = await fs.readFile(filePath, "utf8");
          const { data } = matter(raw);
          if (!data?.title) continue;
          items.push(normalizeItem(slug, data));
        } catch {}
      }

    }
  } catch {}

 
  const map = new Map();
  for (const it of items) if (!map.has(it.slug)) map.set(it.slug, it);
  items = Array.from(map.values());


  items.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

  return items;
}

export async function loadRecentArticles(limit = LIMIT) {
  const all = await loadAllArticles();
  return all.slice(0, limit);
}

export async function loadArticleBySlug(slug) {
  
  try {
    const p = path.join(CONTENT_DIR, slug, "index.md");
    const raw = await fs.readFile(p, "utf8");
    const { data, content } = matter(raw);
    return { meta: normalizeItem(slug, data), content };
  } catch {}

  // fallback: content/artigos/<slug>.md
  try {
    const p2 = path.join(CONTENT_DIR, `${slug}.md`);
    const raw = await fs.readFile(p2, "utf8");
    const { data, content } = matter(raw);
    return { meta: normalizeItem(slug, data), content };
  } catch {}

  return null;
}
