import { jsxDEV } from "react/jsx-dev-runtime";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { i as Route, c as courses, L as Link, I as Image } from "./router-h5hgBp3B.js";
import { C as CourseCard } from "./course-card-BKUbD3jv.js";
import "@tanstack/react-router";
import "@tanstack/react-query";
import "next-themes";
import "clsx";
import "tailwind-merge";
import "react";
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
function CourseDetailPage() {
  const {
    course
  } = Route.useLoaderData();
  const related = courses.filter((c) => c.slug !== course.slug).slice(0, 2);
  return /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-6 pb-24 pt-12 sm:pt-16", children: [
    /* @__PURE__ */ jsxDEV(Link, { href: "/courses", className: "inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground", children: [
      /* @__PURE__ */ jsxDEV(ArrowLeft, { size: 16 }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      "Back to courses"
    ] }, void 0, true, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap items-center gap-3", children: [
          course.heroEyebrow ? /* @__PURE__ */ jsxDEV("span", { className: "eyebrow text-accent", children: course.heroEyebrow }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
            lineNumber: 21,
            columnNumber: 35
          }, this) : null,
          course.platform ? /* @__PURE__ */ jsxDEV("span", { className: "rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground", children: course.platform }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
            lineNumber: 22,
            columnNumber: 32
          }, this) : null,
          course.featured ? /* @__PURE__ */ jsxDEV("span", { className: "rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-accent", children: "Featured" }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
            lineNumber: 25,
            columnNumber: 32
          }, this) : null
        ] }, void 0, true, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
          lineNumber: 20,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("h1", { className: "text-balance text-4xl sm:text-5xl lg:text-6xl", children: course.shortTitle }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "max-w-2xl text-lg leading-relaxed text-muted-foreground", children: course.description }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap items-center gap-4 pt-2", children: [
          /* @__PURE__ */ jsxDEV(Link, { href: course.url, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:opacity-90", children: [
            course.ctaLabel ?? "Enroll",
            /* @__PURE__ */ jsxDEV(ArrowUpRight, { size: 16 }, void 0, false, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
              lineNumber: 41,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
            lineNumber: 39,
            columnNumber: 13
          }, this),
          course.price ? /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-medium text-muted-foreground", children: course.price }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
            lineNumber: 43,
            columnNumber: 29
          }, this) : null
        ] }, void 0, true, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
          lineNumber: 38,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-muted", children: course.heroImage ? /* @__PURE__ */ jsxDEV(Image, { src: course.heroImage, alt: course.title, fill: true, priority: true }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
        lineNumber: 50,
        columnNumber: 31
      }, this) : /* @__PURE__ */ jsxDEV("div", { className: "flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/30 via-accent/10 to-transparent", children: /* @__PURE__ */ jsxDEV("span", { className: "font-heading text-8xl font-semibold tracking-tight text-accent/80", children: course.shortTitle.charAt(0) }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
        lineNumber: 51,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
        lineNumber: 50,
        columnNumber: 99
      }, this) }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    course.stats && course.stats.length > 0 ? /* @__PURE__ */ jsxDEV("section", { className: "mt-20 grid grid-cols-1 gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-3 sm:gap-8 sm:p-8", children: course.stats.map((stat) => /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-1 border-border sm:[&:not(:last-child)]:border-r sm:pr-8", children: [
      /* @__PURE__ */ jsxDEV("span", { className: "font-heading text-3xl font-semibold text-foreground sm:text-4xl", children: stat.value }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
        lineNumber: 60,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV("span", { className: "eyebrow", children: stat.label }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
        lineNumber: 63,
        columnNumber: 15
      }, this)
    ] }, stat.label, true, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
      lineNumber: 59,
      columnNumber: 37
    }, this)) }, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
      lineNumber: 58,
      columnNumber: 50
    }, this) : null,
    /* @__PURE__ */ jsxDEV("section", { className: "mt-20 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr]", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "eyebrow", children: "About the course" }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
          lineNumber: 69,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl sm:text-4xl", children: "What you'll get" }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
          lineNumber: 70,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-base leading-relaxed text-muted-foreground sm:text-lg", children: course.longDescription }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
          lineNumber: 73,
          columnNumber: 11
        }, this),
        course.highlights.length > 0 ? /* @__PURE__ */ jsxDEV("ul", { className: "flex flex-col gap-3", children: course.highlights.map((highlight) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3 text-base leading-relaxed text-foreground", children: [
          /* @__PURE__ */ jsxDEV(CheckCircle2, { size: 20, className: "mt-0.5 flex-shrink-0 text-accent", "aria-hidden": "true" }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
            lineNumber: 78,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: highlight }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
            lineNumber: 79,
            columnNumber: 19
          }, this)
        ] }, highlight, true, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
          lineNumber: 77,
          columnNumber: 51
        }, this)) }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
          lineNumber: 76,
          columnNumber: 43
        }, this) : null
      ] }, void 0, true, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    course.outcomes.length > 0 ? /* @__PURE__ */ jsxDEV("section", { className: "mt-24", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "eyebrow", children: "Outcomes" }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
          lineNumber: 87,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl sm:text-4xl", children: "What you'll be able to do" }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
          lineNumber: 88,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
        lineNumber: 86,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3", children: course.outcomes.map((outcome, index) => /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/60 hover:-translate-y-0.5", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "font-mono text-xs text-muted-foreground", children: String(index + 1).padStart(2, "0") }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
          lineNumber: 92,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold text-foreground", children: outcome.title }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
          lineNumber: 95,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm leading-relaxed text-muted-foreground", children: outcome.description }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
          lineNumber: 98,
          columnNumber: 17
        }, this)
      ] }, outcome.title, true, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
        lineNumber: 91,
        columnNumber: 54
      }, this)) }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
        lineNumber: 90,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
      lineNumber: 85,
      columnNumber: 37
    }, this) : null,
    course.faq && course.faq.length > 0 ? /* @__PURE__ */ jsxDEV("section", { className: "mt-24 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "eyebrow", children: "FAQ" }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
          lineNumber: 107,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl sm:text-4xl", children: "Common questions" }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
          lineNumber: 108,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
        lineNumber: 106,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col divide-y divide-border border-y border-border", children: course.faq.map((item) => /* @__PURE__ */ jsxDEV("details", { className: "group py-5 transition-colors", children: [
        /* @__PURE__ */ jsxDEV("summary", { className: "flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-foreground", children: [
          item.question,
          /* @__PURE__ */ jsxDEV("span", { "aria-hidden": "true", className: "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-transform group-open:rotate-45", children: "+" }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
            lineNumber: 114,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
          lineNumber: 112,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base", children: item.answer }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
          lineNumber: 118,
          columnNumber: 17
        }, this)
      ] }, item.question, true, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
        lineNumber: 111,
        columnNumber: 37
      }, this)) }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
        lineNumber: 110,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
      lineNumber: 105,
      columnNumber: 46
    }, this) : null,
    /* @__PURE__ */ jsxDEV("section", { className: "mt-24 overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-12", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-center", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "eyebrow text-accent", children: "Ready to level up?" }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
          lineNumber: 128,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "max-w-xl text-balance text-2xl sm:text-3xl", children: [
          "Start ",
          course.shortTitle,
          " and build the skill that pays rent."
        ] }, void 0, true, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
          lineNumber: 129,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
        lineNumber: 127,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Link, { href: course.url, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:opacity-90", children: [
        course.ctaLabel ?? "Enroll",
        /* @__PURE__ */ jsxDEV(ArrowUpRight, { size: 16 }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
          lineNumber: 135,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
        lineNumber: 133,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
      lineNumber: 126,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    related.length > 0 ? /* @__PURE__ */ jsxDEV("section", { className: "mt-24", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "eyebrow", children: "More courses" }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
            lineNumber: 143,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-2xl sm:text-3xl", children: "Keep learning" }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
            lineNumber: 144,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
          lineNumber: 142,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { href: "/courses", className: "hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex", children: "View all →" }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
          lineNumber: 146,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
        lineNumber: 141,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex flex-col gap-6", children: related.map((item) => /* @__PURE__ */ jsxDEV(CourseCard, { course: item }, item.slug, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
        lineNumber: 151,
        columnNumber: 34
      }, this)) }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
        lineNumber: 150,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
      lineNumber: 140,
      columnNumber: 29
    }, this) : null
  ] }, void 0, true, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/courses.$slug.tsx?tsr-split=component",
    lineNumber: 12,
    columnNumber: 10
  }, this);
}
export {
  CourseDetailPage as component
};
