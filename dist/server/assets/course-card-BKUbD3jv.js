import { jsxDEV } from "react/jsx-dev-runtime";
import { L as Link, I as Image, e as cn } from "./router-h5hgBp3B.js";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
function CourseCard({
  course,
  variant = "horizontal",
  className,
  href
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = course.image && !imageFailed;
  const initial = course.title.charAt(0).toUpperCase();
  const isInternal = Boolean(href);
  const linkHref = href ?? course.url;
  const ariaLabel = `${course.title}${isInternal ? "" : " (opens in new tab)"}`;
  if (variant === "featured") {
    return /* @__PURE__ */ jsxDEV(
      Link,
      {
        href: linkHref,
        target: isInternal ? void 0 : "_blank",
        rel: isInternal ? void 0 : "noopener noreferrer",
        className: cn(
          "group relative grid grid-cols-1 gap-6 overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/60 hover:-translate-y-0.5 md:grid-cols-[1.1fr_1fr] md:gap-10 md:p-8",
          className
        ),
        "aria-label": ariaLabel,
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col justify-between gap-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-3", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "eyebrow text-accent", children: "Featured course" }, void 0, false, {
                  fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/course-card.tsx",
                  lineNumber: 53,
                  columnNumber: 15
                }, this),
                course.platform ? /* @__PURE__ */ jsxDEV("span", { className: "rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground", children: course.platform }, void 0, false, {
                  fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/course-card.tsx",
                  lineNumber: 55,
                  columnNumber: 17
                }, this) : null
              ] }, void 0, true, {
                fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/course-card.tsx",
                lineNumber: 52,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("h3", { className: "font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl", children: course.title }, void 0, false, {
                fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/course-card.tsx",
                lineNumber: 60,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-base leading-relaxed text-muted-foreground", children: course.description }, void 0, false, {
                fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/course-card.tsx",
                lineNumber: 63,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/course-card.tsx",
              lineNumber: 51,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 text-sm font-medium text-accent", children: [
              "View course",
              /* @__PURE__ */ jsxDEV(
                ArrowUpRight,
                {
                  className: "h-4 w-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                  "aria-hidden": "true"
                },
                void 0,
                false,
                {
                  fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/course-card.tsx",
                  lineNumber: 69,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/course-card.tsx",
              lineNumber: 67,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/course-card.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "relative aspect-video overflow-hidden rounded-xl border border-border bg-muted", children: showImage ? /* @__PURE__ */ jsxDEV(
            Image,
            {
              src: course.image,
              alt: course.title,
              fill: true,
              sizes: "(max-width: 768px) 100vw, 50vw",
              className: "object-cover transition-transform duration-500 group-hover:scale-105",
              onError: () => setImageFailed(true)
            },
            void 0,
            false,
            {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/course-card.tsx",
              lineNumber: 77,
              columnNumber: 13
            },
            this
          ) : /* @__PURE__ */ jsxDEV("div", { className: "flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/30 via-accent/10 to-transparent", children: /* @__PURE__ */ jsxDEV("span", { className: "font-heading text-7xl font-semibold tracking-tight text-accent/80", children: initial }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/course-card.tsx",
            lineNumber: 87,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/course-card.tsx",
            lineNumber: 86,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/course-card.tsx",
            lineNumber: 75,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/course-card.tsx",
        lineNumber: 40,
        columnNumber: 7
      },
      this
    );
  }
  return /* @__PURE__ */ jsxDEV(
    Link,
    {
      href: linkHref,
      target: isInternal ? void 0 : "_blank",
      rel: isInternal ? void 0 : "noopener noreferrer",
      className: cn(
        "group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/60 hover:-translate-y-0.5 sm:flex-row sm:items-center sm:p-6",
        className
      ),
      "aria-label": ariaLabel,
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "relative aspect-video w-full flex-shrink-0 overflow-hidden rounded-lg border border-border bg-muted sm:h-32 sm:w-56", children: showImage ? /* @__PURE__ */ jsxDEV(
          Image,
          {
            src: course.image,
            alt: course.title,
            fill: true,
            sizes: "(max-width: 640px) 100vw, 224px",
            className: "object-cover transition-transform duration-500 group-hover:scale-105",
            onError: () => setImageFailed(true)
          },
          void 0,
          false,
          {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/course-card.tsx",
            lineNumber: 110,
            columnNumber: 11
          },
          this
        ) : /* @__PURE__ */ jsxDEV("div", { className: "flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/30 via-accent/10 to-transparent", children: /* @__PURE__ */ jsxDEV("span", { className: "font-heading text-5xl font-semibold tracking-tight text-accent/80", children: initial }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/course-card.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/course-card.tsx",
          lineNumber: 119,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/course-card.tsx",
          lineNumber: 108,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-1 flex-col gap-2", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-semibold leading-snug text-foreground sm:text-xl", children: course.title }, void 0, false, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/course-card.tsx",
              lineNumber: 128,
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
                fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/course-card.tsx",
                lineNumber: 131,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/course-card.tsx",
            lineNumber: 127,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm leading-relaxed text-muted-foreground", children: course.description }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/course-card.tsx",
            lineNumber: 136,
            columnNumber: 9
          }, this),
          course.platform ? /* @__PURE__ */ jsxDEV("span", { className: "mt-1 inline-flex w-fit rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground", children: course.platform }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/course-card.tsx",
            lineNumber: 140,
            columnNumber: 11
          }, this) : null
        ] }, void 0, true, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/course-card.tsx",
          lineNumber: 126,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/course-card.tsx",
      lineNumber: 98,
      columnNumber: 5
    },
    this
  );
}
export {
  CourseCard as C
};
