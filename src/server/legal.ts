import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import fs from "node:fs";
import path from "node:path";

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  return { content: fileContent.replace(frontmatterRegex, "").trim() };
}

export const getLegalDoc = createServerFn({ method: "GET" })
  .inputValidator((slug: unknown) => z.string().regex(/^[a-z0-9-]+$/).parse(slug))
  .handler(async ({ data }): Promise<{ content: string } | null> => {
    const file = path.join(process.cwd(), "src/content/legal", `${data}.mdx`);
    if (!fs.existsSync(file)) return null;
    const raw = fs.readFileSync(file, "utf-8");
    return parseFrontmatter(raw);
  });
