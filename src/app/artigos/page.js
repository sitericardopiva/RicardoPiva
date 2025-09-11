import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Artigos from "@/components/artigos";
export const runtime = "nodejs";


const CONTENT_DIR = path.join(process.cwd(), "content", "artigos");

export default async function ArtigosPage() {
  let items = [];

  try {
    const dirs = await fs.readdir(CONTENT_DIR, { withFileTypes: true });
    
    for (const entry of dirs) {
      if (!entry.isDirectory()) continue;
      const slug = entry.name;
      const filePath = path.join(CONTENT_DIR, slug, "index.md");

      try {
        const raw = await fs.readFile(filePath, "utf8");
        const { data } = matter(raw);

        if (!data?.title) continue;

        items.push({
          slug,
          title: data.title,
          summary: data.summary || "",
          date: data.date || null,
          attachments: Array.isArray(data.attachments) ? data.attachments : [],
        });
      } catch {}
    }
  } catch {console.log('foi?');}

  
  items.sort((a, b) => (new Date(b.date || 0)) - (new Date(a.date || 0)));

  return <Artigos items={items} />;
}
