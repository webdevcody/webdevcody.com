import { jsxDEV } from "react/jsx-dev-runtime";
import { L as Link, I as Image, e as cn } from "./router-h5hgBp3B.js";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
function ProjectCard({ project, className, href }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = project.image && !imageFailed;
  const initial = project.title.charAt(0).toUpperCase();
  const isInternal = Boolean(href);
  const linkHref = href ?? project.url;
  return /* @__PURE__ */ jsxDEV(
    Link,
    {
      href: linkHref,
      target: isInternal ? void 0 : "_blank",
      rel: isInternal ? void 0 : "noopener noreferrer",
      className: cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-accent/60 hover:-translate-y-0.5",
        className
      ),
      "aria-label": `${project.title} — ${project.tagline}${isInternal ? "" : " (opens in new tab)"}`,
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "relative aspect-[16/10] w-full overflow-hidden bg-muted", children: [
          showImage ? /* @__PURE__ */ jsxDEV(
            Image,
            {
              src: project.image,
              alt: project.title,
              fill: true,
              sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
              className: "object-cover transition-transform duration-500 group-hover:scale-105",
              onError: () => setImageFailed(true)
            },
            void 0,
            false,
            {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/project-card.tsx",
              lineNumber: 44,
              columnNumber: 11
            },
            this
          ) : /* @__PURE__ */ jsxDEV("div", { className: "relative flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/30 via-accent/10 to-transparent", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 dot-backdrop opacity-50" }, void 0, false, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/project-card.tsx",
              lineNumber: 54,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "relative font-heading text-7xl font-semibold tracking-tight text-accent/80", children: initial }, void 0, false, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/project-card.tsx",
              lineNumber: 55,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/project-card.tsx",
            lineNumber: 53,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent" }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/project-card.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, this),
          project.status ? /* @__PURE__ */ jsxDEV("span", { className: "absolute left-4 top-4 rounded-full border border-border bg-background/80 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground backdrop-blur", children: project.status }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/project-card.tsx",
            lineNumber: 62,
            columnNumber: 11
          }, this) : null
        ] }, void 0, true, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/project-card.tsx",
          lineNumber: 42,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-1 flex-col gap-4 p-6", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-semibold text-foreground", children: project.title }, void 0, false, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/project-card.tsx",
              lineNumber: 70,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV(
              ArrowUpRight,
              {
                className: "h-5 w-5 flex-shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent",
                "aria-hidden": "true"
              },
              void 0,
              false,
              {
                fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/project-card.tsx",
                lineNumber: 73,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/project-card.tsx",
            lineNumber: 69,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm leading-relaxed text-muted-foreground", children: project.tagline }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/project-card.tsx",
            lineNumber: 78,
            columnNumber: 9
          }, this),
          project.tags && project.tags.length > 0 ? /* @__PURE__ */ jsxDEV("div", { className: "mt-auto flex flex-wrap gap-2 pt-2", children: project.tags.map((tag) => /* @__PURE__ */ jsxDEV(
            "span",
            {
              className: "rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground",
              children: tag
            },
            tag,
            false,
            {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/project-card.tsx",
              lineNumber: 84,
              columnNumber: 15
            },
            this
          )) }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/project-card.tsx",
            lineNumber: 82,
            columnNumber: 11
          }, this) : null
        ] }, void 0, true, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/project-card.tsx",
          lineNumber: 68,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/project-card.tsx",
      lineNumber: 32,
      columnNumber: 5
    },
    this
  );
}
export {
  ProjectCard as P
};
