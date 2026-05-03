import { jsxDEV } from "react/jsx-dev-runtime";
import { motion } from "framer-motion";
import { S as SectionHeading } from "./section-heading-3rrSPIgw.js";
import { c as courses, L as Link, d as products, I as Image, e as cn, p as profile, f as SocialStrip, g as createSsrRpc, u as useToast, s as sendEvent } from "./router-h5hgBp3B.js";
import { ArrowRight, Play, Lightbulb } from "lucide-react";
import { C as CourseCard } from "./course-card-BKUbD3jv.js";
import { P as ProjectCard } from "./project-card-DfNr-eYn.js";
import { useRef, useEffect, createContext, useContext, useTransition } from "react";
import { z } from "zod";
import { c as createServerFn } from "../server.js";
import { e as env } from "./env-Bu836L_E.js";
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
import "@radix-ui/react-toast";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
import "@t3-oss/env-core";
const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "HTML / CSS"
    ]
  },
  {
    title: "Backend & Cloud",
    skills: [
      "Node.js",
      "AWS",
      "Serverless",
      "Terraform",
      "Docker",
      "PostgreSQL"
    ]
  },
  {
    title: "Craft",
    skills: [
      "Full-stack delivery",
      "Product building",
      "CI / CD",
      "Automated testing",
      "Technical writing",
      "Mentorship"
    ]
  }
];
function AboutSection() {
  return /* @__PURE__ */ jsxDEV("section", { className: "section", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20", children: [
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.5 },
        className: "flex flex-col gap-6",
        children: [
          /* @__PURE__ */ jsxDEV(
            SectionHeading,
            {
              eyebrow: "About",
              title: "A bit about me",
              description: "I'm Cody. I've been building software for over a decade. When I'm not shipping products or recording videos, you'll find me tinkering with the next thing I might turn into a business."
            },
            void 0,
            false,
            {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/about.tsx",
              lineNumber: 54,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("p", { className: "text-base leading-relaxed text-muted-foreground", children: "I fell in love with software because of what you can make with it alone, in a weekend. That feeling still drives how I build, how I teach, and why I keep shipping new things." }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/about.tsx",
            lineNumber: 59,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/about.tsx",
        lineNumber: 47,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.5, delay: 0.1 },
        className: "flex flex-col gap-6",
        children: [
          /* @__PURE__ */ jsxDEV("span", { className: "eyebrow", children: "Stack & skills" }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/about.tsx",
            lineNumber: 73,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-8", children: skillGroups.map((group) => /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-3", children: [
            /* @__PURE__ */ jsxDEV("h4", { className: "text-sm font-semibold uppercase tracking-wider text-foreground", children: group.title }, void 0, false, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/about.tsx",
              lineNumber: 77,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-2", children: group.skills.map((skill) => /* @__PURE__ */ jsxDEV(
              "span",
              {
                className: "rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground",
                children: skill
              },
              skill,
              false,
              {
                fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/about.tsx",
                lineNumber: 82,
                columnNumber: 23
              },
              this
            )) }, void 0, false, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/about.tsx",
              lineNumber: 80,
              columnNumber: 19
            }, this)
          ] }, group.title, true, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/about.tsx",
            lineNumber: 76,
            columnNumber: 17
          }, this)) }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/about.tsx",
            lineNumber: 74,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/about.tsx",
        lineNumber: 66,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/about.tsx",
    lineNumber: 46,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/about.tsx",
    lineNumber: 45,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/about.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
function FeaturedCourses() {
  const [featured, ...rest] = courses;
  return /* @__PURE__ */ jsxDEV("section", { className: "section", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between", children: [
      /* @__PURE__ */ jsxDEV(
        SectionHeading,
        {
          eyebrow: "Learn with me",
          title: "Courses",
          description: "In-depth courses that take you from idea to shipped. Hands-on, practical, and focused on what actually matters."
        },
        void 0,
        false,
        {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/featured-courses.tsx",
          lineNumber: 14,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Link,
        {
          href: "/courses",
          className: "group inline-flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent",
          children: [
            "All courses",
            /* @__PURE__ */ jsxDEV(
              ArrowRight,
              {
                className: "h-4 w-4 transition-transform group-hover:translate-x-0.5",
                "aria-hidden": "true"
              },
              void 0,
              false,
              {
                fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/featured-courses.tsx",
                lineNumber: 24,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/featured-courses.tsx",
          lineNumber: 19,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/featured-courses.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-12 flex flex-col gap-6", children: [
      featured ? /* @__PURE__ */ jsxDEV(
        CourseCard,
        {
          course: featured,
          variant: "featured",
          href: `/courses/${featured.slug}`
        },
        void 0,
        false,
        {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/featured-courses.tsx",
          lineNumber: 33,
          columnNumber: 13
        },
        this
      ) : null,
      rest.length > 0 ? /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: rest.map((course) => /* @__PURE__ */ jsxDEV(
        CourseCard,
        {
          course,
          href: `/courses/${course.slug}`
        },
        course.slug,
        false,
        {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/featured-courses.tsx",
          lineNumber: 42,
          columnNumber: 17
        },
        this
      )) }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/featured-courses.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this) : null
    ] }, void 0, true, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/featured-courses.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/featured-courses.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/featured-courses.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
function FeaturedProducts() {
  return /* @__PURE__ */ jsxDEV("section", { className: "section", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between", children: [
      /* @__PURE__ */ jsxDEV(
        SectionHeading,
        {
          eyebrow: "What I'm building",
          title: "Products I ship",
          description: "Real SaaS products I've built and continue to maintain. Each one solves a problem I've had myself."
        },
        void 0,
        false,
        {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/featured-products.tsx",
          lineNumber: 12,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Link,
        {
          href: "/products",
          className: "group inline-flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent",
          children: [
            "All products",
            /* @__PURE__ */ jsxDEV(
              ArrowRight,
              {
                className: "h-4 w-4 transition-transform group-hover:translate-x-0.5",
                "aria-hidden": "true"
              },
              void 0,
              false,
              {
                fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/featured-products.tsx",
                lineNumber: 22,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/featured-products.tsx",
          lineNumber: 17,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/featured-products.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", children: products.map((product) => /* @__PURE__ */ jsxDEV(
      ProjectCard,
      {
        project: product,
        href: `/products/${product.slug}`
      },
      product.slug,
      false,
      {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/featured-products.tsx",
        lineNumber: 31,
        columnNumber: 13
      },
      this
    )) }, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/featured-products.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/featured-products.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/featured-products.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
function Avatar({
  src = "/wdc.jpeg",
  alt,
  size = 320,
  className
}) {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: cn(
        "relative inline-block overflow-hidden rounded-2xl border border-border",
        className
      ),
      style: { width: size, height: size, maxWidth: "100%" },
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/avatar.tsx",
          lineNumber: 25,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(
          Image,
          {
            src,
            alt,
            fill: true,
            sizes: `${size}px`,
            priority: true,
            className: "relative object-cover"
          },
          void 0,
          false,
          {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/avatar.tsx",
            lineNumber: 26,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "pointer-events-none absolute inset-0 ring-1 ring-inset ring-accent/20" }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/avatar.tsx",
          lineNumber: 34,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/avatar.tsx",
      lineNumber: 18,
      columnNumber: 5
    },
    this
  );
}
function HeroSection() {
  return /* @__PURE__ */ jsxDEV("section", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "pointer-events-none absolute inset-0 grid-backdrop opacity-60" }, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/hero-section.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" }, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/hero-section.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "relative container mx-auto px-6 py-20 sm:py-28 lg:py-32", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: "easeOut" },
          className: "flex flex-col gap-8",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxDEV("span", { className: "eyebrow", children: profile.roles.join(" · ") }, void 0, false, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/hero-section.tsx",
              lineNumber: 25,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/hero-section.tsx",
              lineNumber: 24,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-6", children: [
              /* @__PURE__ */ jsxDEV("h1", { className: "text-balance", children: [
                "Hi, I'm",
                " ",
                /* @__PURE__ */ jsxDEV("span", { className: "text-accent", children: profile.name.split(" ")[0] }, void 0, false, {
                  fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/hero-section.tsx",
                  lineNumber: 33,
                  columnNumber: 17
                }, this),
                "."
              ] }, void 0, true, {
                fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/hero-section.tsx",
                lineNumber: 31,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl", children: profile.tagline }, void 0, false, {
                fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/hero-section.tsx",
                lineNumber: 38,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/hero-section.tsx",
              lineNumber: 30,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap items-center gap-3", children: [
              /* @__PURE__ */ jsxDEV(
                Link,
                {
                  href: profile.social.youtube,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90",
                  children: [
                    /* @__PURE__ */ jsxDEV(Play, { className: "h-4 w-4 fill-current", "aria-hidden": "true" }, void 0, false, {
                      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/hero-section.tsx",
                      lineNumber: 50,
                      columnNumber: 17
                    }, this),
                    "Watch on YouTube"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/hero-section.tsx",
                  lineNumber: 44,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                Link,
                {
                  href: "/products",
                  className: "group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-accent/60 hover:text-accent",
                  children: [
                    "See my work",
                    /* @__PURE__ */ jsxDEV(
                      ArrowRight,
                      {
                        className: "h-4 w-4 transition-transform group-hover:translate-x-0.5",
                        "aria-hidden": "true"
                      },
                      void 0,
                      false,
                      {
                        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/hero-section.tsx",
                        lineNumber: 58,
                        columnNumber: 17
                      },
                      this
                    )
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/hero-section.tsx",
                  lineNumber: 53,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/hero-section.tsx",
              lineNumber: 43,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(SocialStrip, { className: "pt-2" }, void 0, false, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/hero-section.tsx",
              lineNumber: 65,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/hero-section.tsx",
          lineNumber: 18,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.96 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.7, ease: "easeOut", delay: 0.1 },
          className: "flex flex-col items-center gap-6 lg:items-end",
          children: [
            /* @__PURE__ */ jsxDEV(
              Avatar,
              {
                src: profile.avatar,
                alt: `${profile.name} portrait`,
                size: 320,
                className: "shadow-2xl shadow-black/40"
              },
              void 0,
              false,
              {
                fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/hero-section.tsx",
                lineNumber: 74,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "grid w-full max-w-sm grid-cols-3 gap-3", children: profile.stats.map((stat) => /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: "flex flex-col gap-1 rounded-xl border border-border bg-card px-3 py-3 text-center",
                children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "font-heading text-2xl font-semibold leading-none tracking-tight text-foreground", children: stat.value }, void 0, false, {
                    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/hero-section.tsx",
                    lineNumber: 87,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground", children: stat.label }, void 0, false, {
                    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/hero-section.tsx",
                    lineNumber: 90,
                    columnNumber: 19
                  }, this)
                ]
              },
              stat.label,
              true,
              {
                fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/hero-section.tsx",
                lineNumber: 83,
                columnNumber: 17
              },
              this
            )) }, void 0, false, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/hero-section.tsx",
              lineNumber: 81,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/hero-section.tsx",
          lineNumber: 68,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/hero-section.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/hero-section.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/hero-section.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
function LatestVideo() {
  return /* @__PURE__ */ jsxDEV("section", { className: "section", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-6", children: [
      /* @__PURE__ */ jsxDEV(
        SectionHeading,
        {
          eyebrow: "On the channel",
          title: "Latest video",
          description: "I publish deep-dive tutorials and project walkthroughs on web development, AI, and shipping software. New videos weekly."
        },
        void 0,
        false,
        {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/latest-video.tsx",
          lineNumber: 12,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Link,
        {
          href: profile.social.youtube,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "group inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90",
          children: [
            /* @__PURE__ */ jsxDEV(Play, { className: "h-4 w-4 fill-current", "aria-hidden": "true" }, void 0, false, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/latest-video.tsx",
              lineNumber: 23,
              columnNumber: 15
            }, this),
            "Subscribe on YouTube"
          ]
        },
        void 0,
        true,
        {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/latest-video.tsx",
          lineNumber: 17,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/latest-video.tsx",
      lineNumber: 11,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "relative overflow-hidden rounded-2xl border border-border bg-card p-2", children: /* @__PURE__ */ jsxDEV("div", { className: "relative aspect-video overflow-hidden rounded-xl", children: /* @__PURE__ */ jsxDEV(
      "iframe",
      {
        className: "h-full w-full",
        src: `https://www.youtube.com/embed/${profile.featuredVideoId}?si=nUyS2-DCZCw2qj1Z`,
        title: "YouTube video player",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        referrerPolicy: "strict-origin-when-cross-origin",
        allowFullScreen: true
      },
      void 0,
      false,
      {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/latest-video.tsx",
        lineNumber: 30,
        columnNumber: 15
      },
      this
    ) }, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/latest-video.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/latest-video.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/latest-video.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/latest-video.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/latest-video.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
const ReCaptchaContext = createContext(null);
function ReCaptchaProvider({
  reCaptchaKey,
  children
}) {
  const loaded = useRef(false);
  useEffect(() => {
    if (!reCaptchaKey || loaded.current) return;
    if (document.querySelector(`script[data-recaptcha]`)) {
      loaded.current = true;
      return;
    }
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${reCaptchaKey}`;
    script.async = true;
    script.defer = true;
    script.dataset.recaptcha = "true";
    document.body.appendChild(script);
    loaded.current = true;
  }, [reCaptchaKey]);
  return /* @__PURE__ */ jsxDEV(ReCaptchaContext.Provider, { value: { siteKey: reCaptchaKey }, children }, void 0, false, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/lib/recaptcha.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
function useReCaptcha() {
  const ctx = useContext(ReCaptchaContext);
  const executeRecaptcha = async (action) => {
    if (!ctx) throw new Error("ReCaptchaProvider missing");
    const { siteKey } = ctx;
    return new Promise((resolve, reject) => {
      const tryExec = (attempt = 0) => {
        if (typeof window === "undefined") return reject("no window");
        const grecaptcha = window.grecaptcha;
        if (!grecaptcha) {
          if (attempt > 50) return reject(new Error("recaptcha not loaded"));
          return setTimeout(() => tryExec(attempt + 1), 100);
        }
        grecaptcha.ready(() => {
          grecaptcha.execute(siteKey, { action }).then(resolve, reject);
        });
      };
      tryExec();
    });
  };
  return { executeRecaptcha };
}
const InputSchema = z.object({
  token: z.string().min(1),
  email: z.string().email()
});
const subscribeAction = createServerFn({
  method: "POST"
}).inputValidator((d) => InputSchema.parse(d)).handler(createSsrRpc("0d37e1c35a6b3bdafec78b478852240bf28e763acc9df8cf34fa6aa95c5ad3f5"));
function SubscribeForm() {
  const [isPending, startTransition] = useTransition();
  const { executeRecaptcha } = useReCaptcha();
  const { toast } = useToast();
  return /* @__PURE__ */ jsxDEV(
    "form",
    {
      className: "flex w-full max-w-md flex-col gap-3 sm:flex-row",
      onSubmit: async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const token = await executeRecaptcha("form_submit");
        const email = formData.get("email");
        startTransition(() => {
          subscribeAction({
            data: {
              email,
              token
            }
          }).then(() => {
            sendEvent("user subscribed");
            form.reset();
            toast({
              title: "Subscribed!",
              description: "You are now subscribed to the newsletter.",
              variant: "success"
            });
          });
        });
      },
      children: [
        /* @__PURE__ */ jsxDEV("label", { htmlFor: "email", className: "sr-only", children: "Email address" }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/subscribe-form.tsx",
          lineNumber: 38,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            className: "flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-offset-background placeholder:text-muted-foreground/70 transition-colors focus-visible:border-accent/60 focus-visible:ring-2 focus-visible:ring-accent/30",
            id: "email",
            name: "email",
            type: "email",
            placeholder: "you@example.com",
            required: true
          },
          void 0,
          false,
          {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/subscribe-form.tsx",
            lineNumber: 41,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            type: "submit",
            disabled: isPending,
            className: "inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50",
            children: isPending ? "Subscribing..." : "Subscribe"
          },
          void 0,
          false,
          {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/subscribe-form.tsx",
            lineNumber: 49,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/subscribe-form.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
}
function NewsletterSection() {
  return /* @__PURE__ */ jsxDEV("section", { className: "section", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxDEV("div", { className: "relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "pointer-events-none absolute inset-0 dot-backdrop opacity-40" }, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/newsletter-section.tsx",
      lineNumber: 10,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" }, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/newsletter-section.tsx",
      lineNumber: 11,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "relative flex flex-col items-center gap-6 text-center", children: [
      /* @__PURE__ */ jsxDEV("span", { className: "eyebrow", children: "The newsletter" }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/newsletter-section.tsx",
        lineNumber: 14,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("h2", { className: "text-balance text-3xl sm:text-4xl", children: "Coding tips, delivered." }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/newsletter-section.tsx",
        lineNumber: 15,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "max-w-md text-base leading-relaxed text-muted-foreground", children: "Occasional emails with practical tips, new course announcements, and behind-the-scenes on the products I'm building. No spam, unsubscribe anytime." }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/newsletter-section.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(
        ReCaptchaProvider,
        {
          reCaptchaKey: env.VITE_RECAPTCHA_SITE_KEY,
          children: [
            /* @__PURE__ */ jsxDEV("div", { id: "recaptcha-container" }, void 0, false, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/newsletter-section.tsx",
              lineNumber: 27,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(SubscribeForm, {}, void 0, false, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/newsletter-section.tsx",
              lineNumber: 28,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/newsletter-section.tsx",
          lineNumber: 24,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("p", { className: "max-w-md text-xs text-muted-foreground/70", children: "This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply." }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/newsletter-section.tsx",
        lineNumber: 30,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/newsletter-section.tsx",
      lineNumber: 13,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/newsletter-section.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/newsletter-section.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/newsletter-section.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
function VideoSuggestionCTA() {
  return /* @__PURE__ */ jsxDEV("section", { className: "pb-16 pt-4", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxDEV(
    Link,
    {
      href: "https://suggestions.webdevcody.com",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "group mx-auto flex w-fit items-center gap-3 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm text-muted-foreground transition-all hover:border-accent/60 hover:text-foreground",
      children: [
        /* @__PURE__ */ jsxDEV(Lightbulb, { className: "h-4 w-4 text-accent", "aria-hidden": "true" }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/video-suggestion-cta.tsx",
          lineNumber: 14,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { children: [
          "Have a video idea?",
          " ",
          /* @__PURE__ */ jsxDEV("span", { className: "text-foreground group-hover:text-accent", children: "Submit a suggestion" }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/video-suggestion-cta.tsx",
            lineNumber: 17,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/video-suggestion-cta.tsx",
          lineNumber: 15,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(
          ArrowRight,
          {
            className: "h-4 w-4 transition-transform group-hover:translate-x-0.5",
            "aria-hidden": "true"
          },
          void 0,
          false,
          {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/video-suggestion-cta.tsx",
            lineNumber: 21,
            columnNumber: 11
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/video-suggestion-cta.tsx",
      lineNumber: 8,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/video-suggestion-cta.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/landing/video-suggestion-cta.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
function Home() {
  return /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxDEV(HeroSection, {}, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/index.tsx?tsr-split=component",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(NewsletterSection, {}, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/index.tsx?tsr-split=component",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(FeaturedProducts, {}, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/index.tsx?tsr-split=component",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(FeaturedCourses, {}, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/index.tsx?tsr-split=component",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(LatestVideo, {}, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/index.tsx?tsr-split=component",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AboutSection, {}, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/index.tsx?tsr-split=component",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(VideoSuggestionCTA, {}, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/index.tsx?tsr-split=component",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/index.tsx?tsr-split=component",
    lineNumber: 9,
    columnNumber: 10
  }, this);
}
export {
  Home as component
};
