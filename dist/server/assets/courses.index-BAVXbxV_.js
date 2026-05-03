import { jsxDEV } from "react/jsx-dev-runtime";
import { C as CourseCard } from "./course-card-BKUbD3jv.js";
import { S as SectionHeading } from "./section-heading-3rrSPIgw.js";
import { c as courses } from "./router-h5hgBp3B.js";
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
function CoursesPage() {
  const [featured, ...rest] = courses;
  return /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-6 py-20 sm:py-24", children: [
    /* @__PURE__ */ jsxDEV(SectionHeading, { eyebrow: "Courses", title: "Learn by building something real", description: "I only make courses I wish existed when I was learning. Practical, opinionated, and focused on shipping." }, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.index.tsx?tsr-split=component",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-16 flex flex-col gap-8", children: [
      featured ? /* @__PURE__ */ jsxDEV(CourseCard, { course: featured, variant: "featured", href: `/courses/${featured.slug}` }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.index.tsx?tsr-split=component",
        lineNumber: 9,
        columnNumber: 21
      }, this) : null,
      rest.length > 0 ? /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: rest.map((course) => /* @__PURE__ */ jsxDEV(CourseCard, { course, href: `/courses/${course.slug}` }, course.slug, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.index.tsx?tsr-split=component",
        lineNumber: 11,
        columnNumber: 33
      }, this)) }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.index.tsx?tsr-split=component",
        lineNumber: 10,
        columnNumber: 28
      }, this) : null
    ] }, void 0, true, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.index.tsx?tsr-split=component",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.index.tsx?tsr-split=component",
    lineNumber: 6,
    columnNumber: 10
  }, this);
}
export {
  CoursesPage as component
};
