import { jsxDEV } from "react/jsx-dev-runtime";
import { e as cn } from "./router-h5hgBp3B.js";
function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}) {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      ),
      children: [
        eyebrow ? /* @__PURE__ */ jsxDEV("span", { className: "eyebrow", children: eyebrow }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/section-heading.tsx",
          lineNumber: 26,
          columnNumber: 18
        }, this) : null,
        /* @__PURE__ */ jsxDEV("h2", { className: "max-w-3xl text-balance text-4xl sm:text-5xl", children: title }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/section-heading.tsx",
          lineNumber: 27,
          columnNumber: 7
        }, this),
        description ? /* @__PURE__ */ jsxDEV(
          "p",
          {
            className: cn(
              "max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground",
              align === "center" && "mx-auto"
            ),
            children: description
          },
          void 0,
          false,
          {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/section-heading.tsx",
            lineNumber: 29,
            columnNumber: 9
          },
          this
        ) : null
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/section-heading.tsx",
      lineNumber: 19,
      columnNumber: 5
    },
    this
  );
}
export {
  SectionHeading as S
};
