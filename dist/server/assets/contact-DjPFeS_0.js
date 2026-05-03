import { jsxDEV } from "react/jsx-dev-runtime";
import { motion } from "framer-motion";
import { MessageCircleHeart, Youtube, Github, Mail, ArrowUpRight } from "lucide-react";
import { p as profile, F as FeedbackButton } from "./router-h5hgBp3B.js";
import { S as SectionHeading } from "./section-heading-3rrSPIgw.js";
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
function ContactPage() {
  const contactLinks = [{
    title: "Discord Community",
    description: "Join the community to chat, learn, and build alongside other developers.",
    icon: MessageCircleHeart,
    href: profile.social.discord
  }, {
    title: "YouTube Channel",
    description: "Subscribe for weekly web-development tutorials, project walkthroughs, and deep dives.",
    icon: Youtube,
    href: profile.social.youtube
  }, {
    title: "GitHub",
    description: "Check out my open-source projects, examples, and experiments.",
    icon: Github,
    href: profile.social.github
  }, {
    title: "Email",
    description: "Best for business inquiries, sponsorships, or longer questions.",
    icon: Mail,
    href: `mailto:${profile.email}`
  }];
  return /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-6 py-20 sm:py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "mx-auto max-w-4xl", children: [
    /* @__PURE__ */ jsxDEV(SectionHeading, { eyebrow: "Say hi", title: "Get in touch", description: "Have a question, an idea for a collaboration, or just want to say hello? Here are the best ways to reach me.", align: "center", className: "mx-auto" }, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/contact.tsx?tsr-split=component",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-16 grid grid-cols-1 gap-4 md:grid-cols-2", children: contactLinks.map((link, index) => {
      const Icon = link.icon;
      return /* @__PURE__ */ jsxDEV(motion.a, { href: link.href, target: "_blank", rel: "noopener noreferrer", initial: {
        opacity: 0,
        y: 12
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.4,
        delay: index * 0.06
      }, className: "group relative flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/60 hover:-translate-y-0.5", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-border bg-muted text-muted-foreground transition-colors group-hover:text-accent", children: /* @__PURE__ */ jsxDEV(Icon, { className: "h-5 w-5" }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/contact.tsx?tsr-split=component",
          lineNumber: 46,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/contact.tsx?tsr-split=component",
          lineNumber: 45,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "flex items-center gap-2 text-lg font-semibold text-foreground", children: [
            link.title,
            /* @__PURE__ */ jsxDEV(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent", "aria-hidden": "true" }, void 0, false, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/contact.tsx?tsr-split=component",
              lineNumber: 51,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/contact.tsx?tsr-split=component",
            lineNumber: 49,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "mt-1 text-sm leading-relaxed text-muted-foreground", children: link.description }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/contact.tsx?tsr-split=component",
            lineNumber: 53,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/contact.tsx?tsr-split=component",
          lineNumber: 48,
          columnNumber: 17
        }, this)
      ] }, link.title, true, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/contact.tsx?tsr-split=component",
        lineNumber: 35,
        columnNumber: 18
      }, this);
    }) }, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/contact.tsx?tsr-split=component",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsxDEV(FeedbackButton, { triggerContent: /* @__PURE__ */ jsxDEV("button", { className: "group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-accent/60 hover:text-accent", children: [
      /* @__PURE__ */ jsxDEV(MessageCircleHeart, { className: "h-4 w-4" }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/contact.tsx?tsr-split=component",
        lineNumber: 63,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("span", { children: "Leave a video suggestion" }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/contact.tsx?tsr-split=component",
        lineNumber: 64,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV(ArrowUpRight, { className: "h-4 w-4 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/contact.tsx?tsr-split=component",
        lineNumber: 65,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/contact.tsx?tsr-split=component",
      lineNumber: 62,
      columnNumber: 43
    }, this) }, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/contact.tsx?tsr-split=component",
      lineNumber: 62,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/contact.tsx?tsr-split=component",
      lineNumber: 61,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/contact.tsx?tsr-split=component",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/contact.tsx?tsr-split=component",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
export {
  ContactPage as component
};
