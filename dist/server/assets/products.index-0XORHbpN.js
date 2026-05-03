import { jsxDEV } from "react/jsx-dev-runtime";
import { P as ProjectCard } from "./project-card-DfNr-eYn.js";
import { S as SectionHeading } from "./section-heading-3rrSPIgw.js";
import { d as products } from "./router-h5hgBp3B.js";
import "lucide-react";
import "react";
import "@tanstack/react-router";
import "@tanstack/react-query";
import "next-themes";
import "clsx";
import "tailwind-merge";
import "react-dom";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-dialog";
import "vaul";
import "@radix-ui/react-label";
import "@hookform/resolvers/zod";
import "react-hook-form";
import "zod";
import "framer-motion";
import "@radix-ui/react-toast";
import "./env-Bu836L_E.js";
import "@t3-oss/env-core";
import "../server.js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
function ProductsPage() {
  return /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-6 py-20 sm:py-24", children: [
    /* @__PURE__ */ jsxDEV(SectionHeading, { eyebrow: "Products", title: "Things I've built and shipped", description: "A growing catalog of SaaS products I've built over the years. Each one started as an itch I had to scratch — and became a real business." }, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/products.index.tsx?tsr-split=component",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3", children: products.map((product) => /* @__PURE__ */ jsxDEV(ProjectCard, { project: product, href: `/products/${product.slug}` }, product.slug, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/products.index.tsx?tsr-split=component",
      lineNumber: 8,
      columnNumber: 34
    }, this)) }, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/products.index.tsx?tsr-split=component",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/products.index.tsx?tsr-split=component",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
export {
  ProductsPage as component
};
