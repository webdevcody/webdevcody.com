import { c as createServerRpc } from "./createServerRpc-D_-6bKnO.js";
import { z } from "zod";
import fs from "node:fs";
import path from "node:path";
import { c as createServerFn } from "../server.js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "react";
import "@tanstack/react-router";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
function parseFrontmatter(fileContent) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  return {
    content: fileContent.replace(frontmatterRegex, "").trim()
  };
}
const getLegalDoc_createServerFn_handler = createServerRpc({
  id: "32d72a5c57668f201fa4ed1f4d033d3d2903f14432295825535e90aa2930790f",
  name: "getLegalDoc",
  filename: "src/server/legal.ts"
}, (opts) => getLegalDoc.__executeServer(opts));
const getLegalDoc = createServerFn({
  method: "GET"
}).inputValidator((slug) => z.string().regex(/^[a-z0-9-]+$/).parse(slug)).handler(getLegalDoc_createServerFn_handler, async ({
  data
}) => {
  const file = path.join(process.cwd(), "src/content/legal", `${data}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf-8");
  return parseFrontmatter(raw);
});
export {
  getLegalDoc_createServerFn_handler
};
