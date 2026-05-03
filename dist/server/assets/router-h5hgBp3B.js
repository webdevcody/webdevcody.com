import { Link as Link$1, createRootRouteWithContext, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, notFound, createRouter } from "@tanstack/react-router";
import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider as ThemeProvider$1, useTheme } from "next-themes";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as React from "react";
import React__default, { useState, useEffect, useRef } from "react";
import { ChevronRight, Check, Circle, Sun, Moon, X, Loader2, Menu, ChevronDown, ArrowRight, MessageCircleHeart } from "lucide-react";
import { flushSync } from "react-dom";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Drawer as Drawer$1 } from "vaul";
import * as LabelPrimitive from "@radix-ui/react-label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { e as env } from "./env-Bu836L_E.js";
import { T as TSS_SERVER_FUNCTION, g as getServerFnById, c as createServerFn } from "../server.js";
const appCss = "/assets/app-C6vDsctG.css";
function ThemeProvider({ children, ...props }) {
  return /* @__PURE__ */ jsxDEV(
    ThemeProvider$1,
    {
      attribute: "class",
      defaultTheme: "system",
      enableSystem: true,
      disableTransitionOnChange: true,
      ...props,
      children
    },
    void 0,
    false,
    {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/theme-provider.tsx",
      lineNumber: 9,
      columnNumber: 5
    },
    this
  );
}
function YoutubeIcon({ className }) {
  return /* @__PURE__ */ jsxDEV(
    "svg",
    {
      className,
      role: "img",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsxDEV("title", { children: "YouTube" }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/icons.tsx",
          lineNumber: 9,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/icons.tsx",
          lineNumber: 10,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/icons.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}
function GithubIcon({ className }) {
  return /* @__PURE__ */ jsxDEV(
    "svg",
    {
      className,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsxDEV("title", { children: "Github" }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/icons.tsx",
          lineNumber: 23,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("path", { d: "M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z" }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/icons.tsx",
          lineNumber: 24,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/icons.tsx",
      lineNumber: 17,
      columnNumber: 5
    },
    this
  );
}
function XIcon({ className }) {
  return /* @__PURE__ */ jsxDEV(
    "svg",
    {
      className,
      role: "img",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsxDEV("title", { children: "X" }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/icons.tsx",
          lineNumber: 37,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("path", { d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/icons.tsx",
          lineNumber: 38,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/icons.tsx",
      lineNumber: 31,
      columnNumber: 5
    },
    this
  );
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Image({
  src,
  alt,
  width,
  height,
  fill,
  className,
  priority,
  sizes: _sizes,
  ...rest
}) {
  if (fill) {
    return /* @__PURE__ */ jsxDEV(
      "img",
      {
        src,
        alt,
        loading: priority ? "eager" : "lazy",
        decoding: "async",
        className: cn("absolute inset-0 h-full w-full object-cover", className),
        ...rest
      },
      void 0,
      false,
      {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/image.tsx",
        lineNumber: 28,
        columnNumber: 7
      },
      this
    );
  }
  return /* @__PURE__ */ jsxDEV(
    "img",
    {
      src,
      alt,
      width,
      height,
      loading: priority ? "eager" : "lazy",
      decoding: "async",
      className,
      ...rest
    },
    void 0,
    false,
    {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/image.tsx",
      lineNumber: 39,
      columnNumber: 5
    },
    this
  );
}
function isExternal(href) {
  return /^(https?:|mailto:|tel:|#)/i.test(href) || href.startsWith("//");
}
function Link({ href, children, ...rest }) {
  if (isExternal(href)) {
    return /* @__PURE__ */ jsxDEV("a", { href, ...rest, children }, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/link.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV(Link$1, { to: href, ...rest, children }, void 0, false, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/link.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
const profile = {
  siteTitle: "webdevcody",
  name: "Cody Seibert",
  roles: ["Software engineer", "Creator", "Founder"],
  tagline: "I build SaaS products, teach web development on YouTube, and publish courses that help developers ship faster.",
  avatar: "/wdc.jpeg",
  email: "webdevcody@gmail.com",
  social: {
    youtube: "https://youtube.com/@webdevcody",
    github: "https://github.com/webdevcody",
    discord: "https://discord.gg/N2uEyp7Rfu"
  },
  stats: [
    { label: "Years shipping software", value: "10+" },
    { label: "YouTube subscribers", value: "200k+" },
    { label: "SaaS products live", value: "3" }
  ],
  featuredVideoId: "-lNpF0ACe1Y"
};
const products = [
  {
    slug: "ai-clip-studio",
    title: "AI Clip Studio",
    tagline: "Turn a single prompt into a post-ready faceless TikTok, Reel, or YouTube Short — script, AI voiceover, B-roll, and captions included.",
    url: "https://aiclipstudio.com",
    image: "https://aiclipstudio.com/og-image.png",
    heroImage: "https://aiclipstudio.com/og-image.png",
    heroEyebrow: "Faceless short-form, on autopilot",
    tags: ["AI", "Video", "SaaS"],
    status: "Live",
    longDescription: "AI Clip Studio writes the script, records the AI voiceover, generates the B-roll, and bakes in captions — so you can post daily TikToks, Reels, and YouTube Shorts without filming, editing, or ever showing your face. Drop a one-line prompt and you get a 9:16 MP4 in under two minutes, ready to publish everywhere.",
    ctaLabel: "Create my first video",
    highlights: [
      "One prompt → post-ready 9:16 MP4 in under 2 minutes",
      "Narrator-grade AI voiceover with selectable voices",
      "Auto B-roll generated per scene and stitched together",
      "Burned-in captions plus SRT and styled ASS exports",
      "Commercial use included on every plan"
    ],
    stats: [
      { label: "Prompt → MP4", value: "< 2 min" },
      { label: "Output", value: "9:16 vertical" },
      { label: "Face time", value: "0 sec" }
    ],
    features: [
      {
        title: "One-prompt faceless videos",
        description: "Turn a topic into a narrated, captioned 9:16 MP4. No filming, no editing, no time on camera."
      },
      {
        title: "AI script tuned for retention",
        description: "Hook-first narration and scene beats engineered for Shorts, Reels, and TikTok watch time."
      },
      {
        title: "Narrator-grade AI voiceover",
        description: "Pick a voice — calm, energetic, documentary. It reads like a real narrator, not a robot."
      },
      {
        title: "Auto B-roll per scene",
        description: "Model-generated visuals matched to each beat, stitched into a single vertical MP4."
      },
      {
        title: "Captions baked in for sound-off",
        description: "Burned-in captions ready to post, plus SRT and styled ASS exports for your own editor."
      },
      {
        title: "Built for daily posting",
        description: "Same look run after run. Batch a week of Shorts in one session and queue your channel."
      }
    ],
    faq: [
      {
        question: "What is a faceless channel?",
        answer: "A short-form channel where you never appear on camera or record your own voice. AI Clip Studio handles the narration with AI voices and the visuals with AI-generated B-roll — perfect for niche channels like history, finance, facts, motivation, or book summaries."
      },
      {
        question: "Do I need to film or record anything?",
        answer: "No. Give a one-line prompt and we generate the script, narration, visuals, and captions end-to-end. You download a 9:16 MP4 ready to upload to TikTok, Instagram Reels, and YouTube Shorts."
      },
      {
        question: "What do I actually get to download?",
        answer: "A final 9:16 MP4 with captions baked in, plus separately: the plain video without captions, the AI voiceover MP3, SRT and styled ASS caption files, and a transcript."
      },
      {
        question: "Can I use the videos commercially?",
        answer: "Yes. Videos you generate are yours to publish on TikTok, Reels, YouTube Shorts, in ads, or anywhere else."
      }
    ]
  },
  {
    slug: "icon-generator-ai",
    title: "Icon Generator AI",
    tagline: "Stop waiting on designers. Create professional, high-resolution icons for your website, app, or brand in seconds — not days.",
    url: "https://icongeneratorai.com",
    image: "https://icongeneratorai.com/static/app.png",
    heroImage: "https://icongeneratorai.com/static/app.png",
    heroEyebrow: "Trusted by creators worldwide",
    tags: ["AI", "Design", "SaaS"],
    status: "Live",
    longDescription: "Icon Generator AI lets you describe an icon in plain English and get a unique, high-resolution 1024×1024 asset in seconds. Skip the back-and-forth with a designer, skip the long feedback loops, and skip the sticker-shock invoices — describe what you want, pick a style, and ship.",
    ctaLabel: "Generate an icon",
    highlights: [
      "Describe any icon in natural language and get it in seconds",
      "High-resolution 1024×1024 output ready for web, mobile, or print",
      "Dozens of style and color presets to stay on-brand",
      "Every icon stored in the cloud so you never lose a favorite",
      "Commercial use included on all generations"
    ],
    stats: [
      { label: "Happy users", value: "208,476+" },
      { label: "Icons generated", value: "232,492+" },
      { label: "Resolution", value: "1024×1024" }
    ],
    features: [
      {
        title: "Quick feedback loop",
        description: "Icons generate in a few seconds, so you can continuously fine-tune your prompt and options until the icon is exactly right."
      },
      {
        title: "Manage your collection",
        description: "Every icon you generate is stored in the cloud, so you never need to manage your collection yourself."
      },
      {
        title: "Variety of options",
        description: "Style and color presets let you diversify your icons without starting from scratch every time."
      },
      {
        title: "Affordable pricing",
        description: "The most credits per dollar of any icon generator. No $10-for-10-credits gotchas."
      },
      {
        title: "High resolution",
        description: "Every icon is 1024×1024, so you can resize and remix in your favorite image editor."
      },
      {
        title: "Social sharing",
        description: "Share icons to social media directly and get feedback from your friends."
      }
    ],
    faq: [
      {
        question: "How does the icon generator work?",
        answer: "Describe the icon you want in natural language (like 'a happy sun with sunglasses'), pick a style and color, and the AI produces a unique icon for you in seconds. Generate as many variations as you like until it's perfect."
      },
      {
        question: "Can I use these icons commercially?",
        answer: "Yes. Every icon you generate is yours to use however you like, including for commercial projects — no extra licensing fees or attribution required."
      },
      {
        question: "Do credits expire?",
        answer: "No. Your credits never expire. Once purchased they remain in your account until you use them."
      }
    ]
  },
  {
    slug: "project-planner-ai",
    title: "Project Planner AI",
    tagline: "An intelligent home base for your side projects — tasks, resources, budgets, collaborators, and AI-generated work items in one clean dashboard.",
    url: "https://projectplannerai.com/",
    image: "https://projectplannerai.com/landing/hero1-dark.png",
    heroImage: "https://projectplannerai.com/landing/hero1-dark.png",
    heroEyebrow: "Manage your side projects in one place",
    tags: ["AI", "Productivity", "SaaS"],
    status: "Live",
    longDescription: "Tired of unfinished side projects? Project Planner AI replaces the chaos of juggling ten different tabs and tools with a single dashboard. Track work items, manage finances, collaborate with teammates, message in-app, and let AI break down tasks so you always know exactly what's next.",
    ctaLabel: "Get started",
    highlights: [
      "All your side projects in one intuitive dashboard",
      "Built-in work item tracking with AI-generated task breakdowns",
      "Integrated finance tracking to keep projects on budget",
      "Invite collaborators and work together in real time",
      "In-app messaging so context stays with the project"
    ],
    stats: [
      { label: "Free plan", value: "1 project" },
      { label: "Premium", value: "$5 / mo" },
      { label: "AI features", value: "Included" }
    ],
    features: [
      {
        title: "Resources",
        description: "Add and favorite resources so essential tools and information are always one click away."
      },
      {
        title: "Collaboration",
        description: "Invite collaborators to access tasks and finances and contribute to the project together."
      },
      {
        title: "In-app messaging",
        description: "Send messages, create AI-generated work items, and keep communication alongside your project."
      },
      {
        title: "Work items",
        description: "Break down what needs to happen next into small, focused work items — or let AI do it for you."
      },
      {
        title: "Finance tracking",
        description: "Log expenses per project so you always know the true cost of your side hustle."
      },
      {
        title: "AI features (Premium)",
        description: "Use AI to generate tasks, plans, and next steps so you spend less time planning and more time shipping."
      }
    ],
    faq: [
      {
        question: "Can I use it for free?",
        answer: "Yes. The Basic plan is free forever and lets you manage one project with work items, finances, and in-app messaging."
      },
      {
        question: "What do I get with Premium?",
        answer: "The $5/month Premium plan unlocks unlimited projects, collaboration, and all the AI features for generating tasks and plans."
      },
      {
        question: "Is this just for solo devs?",
        answer: "No — while it's optimized for side projects, teams can invite collaborators and use the shared finance and messaging tools together."
      }
    ]
  }
];
function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}
const courses = [
  {
    slug: "agentic-jumpstart",
    title: "AgenticJumpstart — Build AI agents from zero",
    shortTitle: "AgenticJumpstart",
    description: "A hands-on course teaching you how to design, build, and ship AI agents that actually work. From fundamentals to production patterns.",
    longDescription: "Coding is evolving — and AgenticJumpstart teaches you how to stop typing every character manually and start directing AI instead. You'll master Cursor IDE, Claude Code CLI, and modern agentic workflows to build production-ready apps 10x faster. Become the architect, not just the typist.",
    url: "https://agenticjumpstart.com",
    platform: "AgenticJumpstart",
    image: "https://agenticjumpstart.com/marketing.png",
    heroImage: "https://agenticjumpstart.com/marketing.png",
    heroEyebrow: "Don't write code. Direct it.",
    featured: true,
    price: "$129 lifetime",
    ctaLabel: "Enroll now",
    highlights: [
      "Master Cursor IDE with AI pair programming and multi-file edits",
      "Learn Claude Code CLI for seamless AI-assisted development",
      "Advanced prompting for Claude Sonnet and Opus",
      "Build real-world projects using AI agents and automation",
      "Lifetime updates included"
    ],
    stats: [
      { label: "Productivity boost", value: "10x" },
      { label: "Instructor experience", value: "12+ yrs" },
      { label: "YouTube subscribers", value: "260k+" }
    ],
    outcomes: [
      {
        title: "Think in agents and systems",
        description: "Stop thinking line-by-line. Learn to design tasks the way AI agents work best and let them handle the implementation."
      },
      {
        title: "Ship entire apps in a sitting",
        description: "Build full applications in the time it used to take to write a single component — by delegating the grunt work to AI."
      },
      {
        title: "Master the modern AI toolbox",
        description: "Go deep on Cursor IDE, Cursor CLI, Claude Code CLI, and ChatGPT — the tools powering the agentic coding revolution."
      },
      {
        title: "Level up your prompts",
        description: "Learn battle-tested prompting patterns for Claude Sonnet and Opus that dramatically improve output quality."
      },
      {
        title: "Production-ready workflows",
        description: "Go beyond demos: structure projects, configs, and agent workflows that survive real production pressure."
      },
      {
        title: "Lifetime updates",
        description: "The tools evolve fast. Your access evolves with them — new lessons, patterns, and configs as the space matures."
      }
    ],
    faq: [
      {
        question: "What AI tools will I learn to use?",
        answer: "You'll master Cursor IDE, Cursor CLI, Claude Code CLI, ChatGPT, and other cutting-edge AI development tools — with lessons on how to maximize productivity with each one."
      },
      {
        question: "Do I need prior experience with AI tools?",
        answer: "No prior AI tool experience is required. The course is designed for developers new to AI-assisted development, starting with basics and building to advanced techniques."
      },
      {
        question: "Can I apply these skills to any programming language?",
        answer: "Yes. While some examples use JavaScript/TypeScript, the AI development principles and techniques work across any stack."
      },
      {
        question: "How do I get support if I need help?",
        answer: "Join the Discord community or email Cody directly — he typically responds within 24 hours with personalized help."
      }
    ]
  },
  {
    slug: "react-challenges-collection",
    title: "React Challenges Collection — Learn React through mini projects (TypeScript)",
    shortTitle: "React Challenges Collection",
    description: "A course for beginners learning React by solving real-world mini challenges in TypeScript. Each challenge builds a skill you'll use every day.",
    longDescription: "Learn React the way it actually gets used at work — by shipping things. You'll solve 20 beginner-to-intermediate interview-style challenges in TypeScript, each one isolated around a specific skill: state, effects, forms, async, lists, routing, and more. By the end, the patterns are muscle memory.",
    url: "https://webdevcody.gumroad.com/l/beginner-react-challenges-collection",
    platform: "Gumroad",
    image: "https://public-files.gumroad.com/ckj5sgzi39k8farc6mq543sf3soo",
    heroImage: "https://public-files.gumroad.com/4gw42ujs37ne7lwrl73zkvaer7zk",
    heroEyebrow: "20 hands-on React challenges",
    ctaLabel: "Buy on Gumroad",
    highlights: [
      "20 beginner-friendly React challenges in TypeScript",
      "Each challenge isolates a single skill or pattern",
      "Interview-style problems you'll actually see on the job",
      "Short, focused lessons — perfect for learning on the side",
      "Lifetime access via Gumroad"
    ],
    stats: [
      { label: "Challenges", value: "20" },
      { label: "Stack", value: "React + TS" },
      { label: "Level", value: "Beginner" }
    ],
    outcomes: [
      {
        title: "Core React fluency",
        description: "Components, props, state, effects, and event handling — drilled until they're automatic."
      },
      {
        title: "TypeScript for React",
        description: "Typing components, props, and hooks the way modern teams actually do it."
      },
      {
        title: "Real interview patterns",
        description: "Solve the exact kind of mini-problem you'll be asked to build live in a React interview."
      },
      {
        title: "Build, don't just watch",
        description: "Every challenge is hands-on — you build it, break it, and fix it yourself."
      }
    ],
    faq: [
      {
        question: "Who is this course for?",
        answer: "Developers who know some JavaScript and want to get fluent at React fast — especially folks prepping for a React-focused interview."
      },
      {
        question: "Do I need TypeScript experience?",
        answer: "Basic familiarity helps, but the challenges are simple enough to pick up TypeScript along the way."
      },
      {
        question: "How long do I have access?",
        answer: "Forever. It's a one-time purchase on Gumroad with lifetime access."
      }
    ]
  },
  {
    slug: "ai-icon-generator-t3",
    title: "Building an AI Icon Generator with the T3 Stack",
    shortTitle: "AI Icon Generator with T3",
    description: "Learn Next.js, Prisma, TailwindCSS, TypeScript, and the DALL·E API by building a real AI Icon Generator app from scratch.",
    longDescription: "Learn a modern full-stack by actually building something cool. You'll build an AI Icon Generator from scratch using the T3 Stack — Next.js, Prisma, TailwindCSS, and TypeScript — and wire it up to OpenAI's DALL·E API. By the end, you'll have a real product under your belt and a playbook for shipping AI-powered apps.",
    url: "https://webdevcody.gumroad.com/l/jipjfm",
    platform: "Gumroad",
    image: "https://public-files.gumroad.com/tfezbtgffzz06vbrqodzhm27czvp",
    heroImage: "https://public-files.gumroad.com/4gn5a32sztwcbzqog91lv9t8zueb",
    heroEyebrow: "Ship a real AI product",
    ctaLabel: "Buy on Gumroad",
    highlights: [
      "Build a real AI Icon Generator app end-to-end",
      "Full T3 Stack: Next.js, Prisma, Tailwind, TypeScript",
      "Integrate OpenAI's DALL·E API for image generation",
      "Auth, database, billing-style credits — the real architecture",
      "Lifetime access via Gumroad"
    ],
    stats: [
      { label: "Stack", value: "T3" },
      { label: "API", value: "DALL·E" },
      { label: "Project", value: "Full app" }
    ],
    outcomes: [
      {
        title: "Full-stack Next.js",
        description: "Pages, API routes, server actions, and data fetching the modern way."
      },
      {
        title: "Database with Prisma",
        description: "Model your schema, migrate, and query — the standard ORM approach for TS apps."
      },
      {
        title: "Design with Tailwind",
        description: "Build a polished, responsive UI using utility-first CSS the way real apps are styled."
      },
      {
        title: "Integrate OpenAI",
        description: "Call the DALL·E API safely from the server, manage keys, and handle usage and errors."
      },
      {
        title: "Type safety end-to-end",
        description: "Use TypeScript across the whole stack so refactors stay safe as the app grows."
      }
    ],
    faq: [
      {
        question: "Do I need prior Next.js experience?",
        answer: "Some basic React and Next.js knowledge helps, but the course walks through each layer so you can follow along even if you're new."
      },
      {
        question: "Will I need an OpenAI account?",
        answer: "Yes — to run the generator you'll need an OpenAI API key. Pay-as-you-go usage is typically just cents per icon."
      },
      {
        question: "How long do I have access?",
        answer: "Forever. Lifetime access via your Gumroad account."
      }
    ]
  }
];
function getCourseBySlug(slug) {
  return courses.find((course) => course.slug === slug);
}
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxDEV(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      },
      void 0,
      false,
      {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
      },
      void 0
    );
  }
);
Button.displayName = "Button";
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxDEV(ChevronRight, { className: "ml-auto h-4 w-4" }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/dropdown-menu.tsx",
        lineNumber: 37,
        columnNumber: 5
      }, void 0)
    ]
  },
  void 0,
  true,
  {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/dropdown-menu.tsx",
    lineNumber: 27,
    columnNumber: 3
  },
  void 0
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/dropdown-menu.tsx",
    lineNumber: 47,
    columnNumber: 3
  },
  void 0
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxDEV(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/dropdown-menu.tsx",
    lineNumber: 64,
    columnNumber: 5
  },
  void 0
) }, void 0, false, {
  fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/dropdown-menu.tsx",
  lineNumber: 63,
  columnNumber: 3
}, void 0));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/dropdown-menu.tsx",
    lineNumber: 83,
    columnNumber: 3
  },
  void 0
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV(Check, { className: "h-4 w-4" }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/dropdown-menu.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/dropdown-menu.tsx",
        lineNumber: 109,
        columnNumber: 7
      }, void 0) }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/dropdown-menu.tsx",
        lineNumber: 108,
        columnNumber: 5
      }, void 0),
      children
    ]
  },
  void 0,
  true,
  {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/dropdown-menu.tsx",
    lineNumber: 99,
    columnNumber: 3
  },
  void 0
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV(Circle, { className: "h-2 w-2 fill-current" }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/dropdown-menu.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/dropdown-menu.tsx",
        lineNumber: 132,
        columnNumber: 7
      }, void 0) }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/dropdown-menu.tsx",
        lineNumber: 131,
        columnNumber: 5
      }, void 0),
      children
    ]
  },
  void 0,
  true,
  {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/dropdown-menu.tsx",
    lineNumber: 123,
    columnNumber: 3
  },
  void 0
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/dropdown-menu.tsx",
    lineNumber: 147,
    columnNumber: 3
  },
  void 0
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/dropdown-menu.tsx",
    lineNumber: 163,
    columnNumber: 3
  },
  void 0
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const buttonRef = React.useRef(null);
  const changeTheme = React.useCallback(
    (nextTheme) => {
      const doc = document;
      const resolvedNext = nextTheme === "system" ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : nextTheme;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (!doc.startViewTransition || prefersReducedMotion || resolvedNext === resolvedTheme) {
        setTheme(nextTheme);
        return;
      }
      const trigger = buttonRef.current;
      const rect = trigger?.getBoundingClientRect();
      const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
      const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );
      const root = document.documentElement;
      root.style.setProperty("--theme-x", `${x}px`);
      root.style.setProperty("--theme-y", `${y}px`);
      root.style.setProperty("--theme-r", `${endRadius}px`);
      root.dataset.themeAnimating = "true";
      const transition = doc.startViewTransition(() => {
        flushSync(() => {
          setTheme(nextTheme);
        });
      });
      transition.finished.finally(() => {
        delete root.dataset.themeAnimating;
      });
    },
    [resolvedTheme, setTheme]
  );
  return /* @__PURE__ */ jsxDEV(DropdownMenu, { children: [
    /* @__PURE__ */ jsxDEV(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxDEV(
      Button,
      {
        ref: buttonRef,
        variant: "ghost",
        size: "icon",
        className: "relative h-8 w-8 hover:bg-white/5",
        children: [
          /* @__PURE__ */ jsxDEV(
            Sun,
            {
              className: `h-[1.1rem] w-[1.1rem] rotate-0 scale-100 text-muted-foreground transition-all dark:-rotate-90 dark:scale-0`
            },
            void 0,
            false,
            {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mode-toggle.tsx",
              lineNumber: 88,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Moon,
            {
              className: `absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 text-muted-foreground transition-all dark:rotate-0 dark:scale-100`
            },
            void 0,
            false,
            {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mode-toggle.tsx",
              lineNumber: 91,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("span", { className: "sr-only", children: "Toggle theme" }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mode-toggle.tsx",
            lineNumber: 94,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mode-toggle.tsx",
        lineNumber: 82,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mode-toggle.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(DropdownMenuContent, { align: "end", className: "bg-white/10 backdrop-blur-xl", children: [
      /* @__PURE__ */ jsxDEV(
        DropdownMenuItem,
        {
          onClick: () => changeTheme("light"),
          className: "hover:bg-white/10",
          children: "Light"
        },
        void 0,
        false,
        {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mode-toggle.tsx",
          lineNumber: 98,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        DropdownMenuItem,
        {
          onClick: () => changeTheme("dark"),
          className: "hover:bg-white/10",
          children: "Dark"
        },
        void 0,
        false,
        {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mode-toggle.tsx",
          lineNumber: 104,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        DropdownMenuItem,
        {
          onClick: () => changeTheme("system"),
          className: "hover:bg-white/10",
          children: "System"
        },
        void 0,
        false,
        {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mode-toggle.tsx",
          lineNumber: 110,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mode-toggle.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mode-toggle.tsx",
    lineNumber: 80,
    columnNumber: 5
  }, this);
}
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/dialog.tsx",
    lineNumber: 21,
    columnNumber: 3
  },
  void 0
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV(DialogPortal, { children: [
  /* @__PURE__ */ jsxDEV(DialogOverlay, {}, void 0, false, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/dialog.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxDEV(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxDEV(X, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/dialog.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "sr-only", children: "Close" }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/dialog.tsx",
            lineNumber: 49,
            columnNumber: 9
          }, void 0)
        ] }, void 0, true, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/dialog.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/dialog.tsx",
      lineNumber: 38,
      columnNumber: 5
    },
    void 0
  )
] }, void 0, true, {
  fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/dialog.tsx",
  lineNumber: 36,
  columnNumber: 3
}, void 0));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxDEV(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/dialog.tsx",
    lineNumber: 60,
    columnNumber: 3
  },
  void 0
);
DialogHeader.displayName = "DialogHeader";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/dialog.tsx",
    lineNumber: 88,
    columnNumber: 3
  },
  void 0
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/dialog.tsx",
    lineNumber: 103,
    columnNumber: 3
  },
  void 0
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
const Drawer = ({
  shouldScaleBackground = true,
  ...props
}) => /* @__PURE__ */ jsxDEV(
  Drawer$1.Root,
  {
    shouldScaleBackground,
    ...props
  },
  void 0,
  false,
  {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/drawer.tsx",
    lineNumber: 12,
    columnNumber: 3
  },
  void 0
);
Drawer.displayName = "Drawer";
const DrawerTrigger = Drawer$1.Trigger;
const DrawerPortal = Drawer$1.Portal;
const DrawerClose = Drawer$1.Close;
const DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  Drawer$1.Overlay,
  {
    ref,
    className: cn("fixed inset-0 z-50 bg-black/80", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/drawer.tsx",
    lineNumber: 29,
    columnNumber: 3
  },
  void 0
));
DrawerOverlay.displayName = Drawer$1.Overlay.displayName;
const DrawerContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV(DrawerPortal, { children: [
  /* @__PURE__ */ jsxDEV(DrawerOverlay, {}, void 0, false, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/drawer.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, void 0),
  /* @__PURE__ */ jsxDEV(
    Drawer$1.Content,
    {
      ref,
      className: cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/drawer.tsx",
          lineNumber: 51,
          columnNumber: 7
        }, void 0),
        children
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/drawer.tsx",
      lineNumber: 43,
      columnNumber: 5
    },
    void 0
  )
] }, void 0, true, {
  fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/drawer.tsx",
  lineNumber: 41,
  columnNumber: 3
}, void 0));
DrawerContent.displayName = "DrawerContent";
const DrawerHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxDEV(
  "div",
  {
    className: cn("grid gap-1.5 p-4 text-center sm:text-left", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/drawer.tsx",
    lineNumber: 62,
    columnNumber: 3
  },
  void 0
);
DrawerHeader.displayName = "DrawerHeader";
const DrawerFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxDEV(
  "div",
  {
    className: cn("mt-auto flex flex-col gap-2 p-4", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/drawer.tsx",
    lineNumber: 73,
    columnNumber: 3
  },
  void 0
);
DrawerFooter.displayName = "DrawerFooter";
const DrawerTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  Drawer$1.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/drawer.tsx",
    lineNumber: 84,
    columnNumber: 3
  },
  void 0
));
DrawerTitle.displayName = Drawer$1.Title.displayName;
const DrawerDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  Drawer$1.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/drawer.tsx",
    lineNumber: 99,
    columnNumber: 3
  },
  void 0
));
DrawerDescription.displayName = Drawer$1.Description.displayName;
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxDEV(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      },
      void 0,
      false,
      {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/input.tsx",
        lineNumber: 11,
        columnNumber: 7
      },
      void 0
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/label.tsx",
    lineNumber: 18,
    columnNumber: 3
  },
  void 0
));
Label.displayName = LabelPrimitive.Root.displayName;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
function useMediaQuery() {
  const [device, setDevice] = useState(
    null
  );
  const [dimensions, setDimensions] = useState(null);
  useEffect(() => {
    const checkDevice = () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        setDevice("mobile");
      } else if (window.matchMedia("(min-width: 641px) and (max-width: 1024px)").matches) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);
  return {
    device,
    width: dimensions?.width,
    height: dimensions?.height,
    isMobile: device === "mobile",
    isTablet: device === "tablet",
    isDesktop: device === "desktop"
  };
}
const feedbackSchema = z.object({
  name: z.string().min(2, {
    message: "Name is required"
  }),
  feedback: z.string().min(1, { message: "Feedback is required" })
});
function FeedbackButton({ triggerContent }) {
  const [open, setOpen] = React__default.useState(false);
  const { isMobile } = useMediaQuery();
  const description = "Want me to make a video?  Leave a suggestions for me below.";
  if (isMobile) {
    return /* @__PURE__ */ jsxDEV(Drawer, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxDEV(DrawerTrigger, { asChild: true, children: triggerContent }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(DrawerContent, { children: [
        /* @__PURE__ */ jsxDEV(DrawerHeader, { className: "text-left", children: [
          /* @__PURE__ */ jsxDEV(DrawerTitle, { children: "Feedback" }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
            lineNumber: 64,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(DrawerDescription, { children: description }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(FeedbackForm, { setOpen }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(DrawerFooter, { className: "pt-2", children: /* @__PURE__ */ jsxDEV(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsxDEV(Button, { variant: "outline", children: "Cancel" }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxDEV(DialogTrigger, { asChild: true, children: triggerContent }, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(DialogContent, { className: "sm:max-w-[425px]", children: [
      /* @__PURE__ */ jsxDEV(DialogHeader, { children: [
        /* @__PURE__ */ jsxDEV(DialogTitle, { className: "text-red-400 mb-4", children: "Video Suggestions" }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(DialogDescription, { children: description }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(FeedbackForm, { setOpen }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
    lineNumber: 79,
    columnNumber: 5
  }, this);
}
function FeedbackForm({ setOpen }) {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: "",
      feedback: ""
    }
  });
  const { toast: toast2 } = useToast();
  const onSubmit = async (values) => {
    try {
      await fetch("https://projectplannerai.com/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: values.name,
          feedback: values.feedback,
          projectId: "j57erz441swf2tr45mb52mte3h6pke5n"
        })
      });
      setOpen(false);
      toast2({
        title: "Feedback submitted",
        description: "Thank you for your feedback"
      });
    } catch (error) {
      console.error("Failed to send feedback:", error);
    }
  };
  return /* @__PURE__ */ jsxDEV(
    "form",
    {
      onSubmit: handleSubmit(onSubmit),
      className: cn("grid items-start gap-4 px-4 sm:px-0"),
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsxDEV(Label, { htmlFor: "name", children: [
            "Your name ",
            /* @__PURE__ */ jsxDEV("span", { className: "text-red-600", children: "*" }, void 0, false, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
              lineNumber: 137,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
            lineNumber: 136,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(
            Controller,
            {
              name: "name",
              control,
              render: ({ field }) => /* @__PURE__ */ jsxDEV(Input, { ...field, type: "name", id: "name", placeholder: "Jane Doe" }, void 0, false, {
                fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
                lineNumber: 143,
                columnNumber: 13
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
              lineNumber: 139,
              columnNumber: 9
            },
            this
          ),
          errors.name && typeof errors.name.message === "string" && /* @__PURE__ */ jsxDEV("p", { className: "text-red-600", children: errors.name.message }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
            lineNumber: 147,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
          lineNumber: 135,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsxDEV(Label, { htmlFor: "feedback", children: [
            "Your feedback ",
            /* @__PURE__ */ jsxDEV("span", { className: "text-red-600", children: "*" }, void 0, false, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
              lineNumber: 152,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
            lineNumber: 151,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV(
            Controller,
            {
              name: "feedback",
              control,
              render: ({ field }) => /* @__PURE__ */ jsxDEV(
                "textarea",
                {
                  ...field,
                  className: "w-full h-32 text-sm border rounded-lg flex border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
                  placeholder: "Tell us how we can improve our product"
                },
                void 0,
                false,
                {
                  fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
                  lineNumber: 158,
                  columnNumber: 13
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
              lineNumber: 154,
              columnNumber: 9
            },
            this
          ),
          errors.feedback && typeof errors.feedback.message === "string" && /* @__PURE__ */ jsxDEV("p", { className: "text-red-600", children: errors.feedback.message }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
            lineNumber: 166,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
          lineNumber: 150,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxDEV(
          Button,
          {
            type: "submit",
            className: "flex-none rounded-md bg-white border-red-400 border px-3.5 py-2.5 text-sm font-semibold hover:text-white text-red-400 shadow-sm hover:bg-red-400 ",
            disabled: isSubmitting,
            children: isSubmitting ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
              /* @__PURE__ */ jsxDEV(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, false, {
                fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
                lineNumber: 177,
                columnNumber: 15
              }, this),
              "Sending Suggestion..."
            ] }, void 0, true, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
              lineNumber: 176,
              columnNumber: 13
            }, this) : "Leave Suggestion"
          },
          void 0,
          false,
          {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
            lineNumber: 170,
            columnNumber: 9
          },
          this
        ) }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
          lineNumber: 169,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/feedback-button.tsx",
      lineNumber: 131,
      columnNumber: 5
    },
    this
  );
}
function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Products",
      href: "/products",
      children: products.map((product) => ({
        name: product.title,
        href: `/products/${product.slug}`
      }))
    },
    {
      name: "Courses",
      href: "/courses",
      children: courses.map((course) => ({
        name: course.shortTitle,
        href: `/courses/${course.slug}`
      }))
    },
    { name: "Contact", href: "/contact" },
    {
      name: "Submit Video Suggestion",
      href: "https://suggestions.webdevcody.com"
    }
  ];
  const close = () => {
    setIsOpen(false);
    setExpanded(null);
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "block lg:hidden", children: [
    /* @__PURE__ */ jsxDEV(
      Button,
      {
        variant: "ghost",
        size: "sm",
        onClick: () => setIsOpen(!isOpen),
        className: "relative z-50 p-2 h-auto",
        "aria-label": "Toggle Menu",
        children: /* @__PURE__ */ jsxDEV(AnimatePresence, { mode: "wait", children: isOpen ? /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, rotate: -90 },
            animate: { opacity: 1, rotate: 0 },
            exit: { opacity: 0, rotate: 90 },
            transition: { duration: 0.2 },
            children: /* @__PURE__ */ jsxDEV(X, { size: 20 }, void 0, false, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mobile-menu.tsx",
              lineNumber: 70,
              columnNumber: 15
            }, this)
          },
          "close",
          false,
          {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mobile-menu.tsx",
            lineNumber: 63,
            columnNumber: 13
          },
          this
        ) : /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, rotate: 90 },
            animate: { opacity: 1, rotate: 0 },
            exit: { opacity: 0, rotate: -90 },
            transition: { duration: 0.2 },
            children: /* @__PURE__ */ jsxDEV(Menu, { size: 20 }, void 0, false, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mobile-menu.tsx",
              lineNumber: 80,
              columnNumber: 15
            }, this)
          },
          "menu",
          false,
          {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mobile-menu.tsx",
            lineNumber: 73,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mobile-menu.tsx",
          lineNumber: 61,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mobile-menu.tsx",
        lineNumber: 54,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.2 },
          className: "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm",
          onClick: close
        },
        void 0,
        false,
        {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mobile-menu.tsx",
          lineNumber: 89,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: { duration: 0.3, ease: "easeOut" },
          className: "fixed top-16 left-4 right-4 z-50 bg-background border border-border rounded-xl shadow-2xl overflow-hidden",
          children: /* @__PURE__ */ jsxDEV("div", { className: "px-4 py-4 max-h-[80vh] overflow-y-auto", children: /* @__PURE__ */ jsxDEV("nav", { className: "flex flex-col space-y-1", children: navigation.map((item, index) => {
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = expanded === item.name;
            return /* @__PURE__ */ jsxDEV(
              motion.div,
              {
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 },
                transition: {
                  duration: 0.3,
                  delay: index * 0.05,
                  ease: "easeOut"
                },
                children: hasChildren ? /* @__PURE__ */ jsxDEV("div", { className: "rounded-lg border border-transparent hover:border-border/50", children: [
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      type: "button",
                      onClick: () => setExpanded(isExpanded ? null : item.name),
                      className: "flex w-full items-center justify-between py-3 px-4 text-base font-semibold text-foreground transition-colors",
                      "aria-expanded": isExpanded,
                      children: [
                        item.name,
                        /* @__PURE__ */ jsxDEV(
                          ChevronDown,
                          {
                            size: 18,
                            className: cn(
                              "text-muted-foreground transition-transform duration-200",
                              isExpanded && "rotate-180"
                            )
                          },
                          void 0,
                          false,
                          {
                            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mobile-menu.tsx",
                            lineNumber: 134,
                            columnNumber: 31
                          },
                          this
                        )
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mobile-menu.tsx",
                      lineNumber: 125,
                      columnNumber: 29
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV(AnimatePresence, { initial: false, children: isExpanded ? /* @__PURE__ */ jsxDEV(
                    motion.div,
                    {
                      initial: { height: 0, opacity: 0 },
                      animate: { height: "auto", opacity: 1 },
                      exit: { height: 0, opacity: 0 },
                      transition: { duration: 0.2 },
                      className: "overflow-hidden",
                      children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-1 px-2 pb-3", children: [
                        /* @__PURE__ */ jsxDEV(
                          Link,
                          {
                            href: item.href,
                            onClick: close,
                            className: "rounded-md px-3 py-2 text-sm font-medium text-accent hover:bg-muted",
                            children: [
                              "View all ",
                              item.name.toLowerCase()
                            ]
                          },
                          void 0,
                          true,
                          {
                            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mobile-menu.tsx",
                            lineNumber: 152,
                            columnNumber: 37
                          },
                          this
                        ),
                        item.children.map((child) => /* @__PURE__ */ jsxDEV(
                          Link,
                          {
                            href: child.href,
                            onClick: close,
                            className: "rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground",
                            children: child.name
                          },
                          child.href,
                          false,
                          {
                            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mobile-menu.tsx",
                            lineNumber: 160,
                            columnNumber: 39
                          },
                          this
                        ))
                      ] }, void 0, true, {
                        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mobile-menu.tsx",
                        lineNumber: 151,
                        columnNumber: 35
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mobile-menu.tsx",
                      lineNumber: 144,
                      columnNumber: 33
                    },
                    this
                  ) : null }, void 0, false, {
                    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mobile-menu.tsx",
                    lineNumber: 142,
                    columnNumber: 29
                  }, this)
                ] }, void 0, true, {
                  fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mobile-menu.tsx",
                  lineNumber: 124,
                  columnNumber: 27
                }, this) : /* @__PURE__ */ jsxDEV(
                  Link,
                  {
                    href: item.href,
                    onClick: close,
                    className: "block py-3 px-4 rounded-lg text-base font-semibold text-foreground hover:bg-muted hover:text-primary transition-all duration-200 border border-transparent hover:border-border/50",
                    children: item.name
                  },
                  void 0,
                  false,
                  {
                    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mobile-menu.tsx",
                    lineNumber: 175,
                    columnNumber: 27
                  },
                  this
                )
              },
              item.name,
              false,
              {
                fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mobile-menu.tsx",
                lineNumber: 113,
                columnNumber: 23
              },
              this
            );
          }) }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mobile-menu.tsx",
            lineNumber: 106,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mobile-menu.tsx",
            lineNumber: 105,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mobile-menu.tsx",
          lineNumber: 98,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mobile-menu.tsx",
      lineNumber: 88,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mobile-menu.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/mobile-menu.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
function NavDropdown({
  label,
  items,
  viewAllHref,
  viewAllLabel = "View all"
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const closeTimer = useRef(null);
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const handleOpen = () => {
    cancelClose();
    setOpen(true);
  };
  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      ref: containerRef,
      className: "relative",
      onMouseEnter: handleOpen,
      onMouseLeave: scheduleClose,
      children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            type: "button",
            onClick: () => setOpen((value) => !value),
            "aria-expanded": open,
            "aria-haspopup": "menu",
            className: cn(
              "inline-flex items-center gap-1 text-sm font-medium transition-colors",
              open ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            ),
            children: [
              label,
              /* @__PURE__ */ jsxDEV(
                ChevronDown,
                {
                  size: 14,
                  className: cn(
                    "transition-transform duration-200",
                    open && "rotate-180"
                  )
                },
                void 0,
                false,
                {
                  fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/nav-dropdown.tsx",
                  lineNumber: 90,
                  columnNumber: 9
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/nav-dropdown.tsx",
            lineNumber: 77,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(AnimatePresence, { children: open ? /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0, y: 6 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 6 },
            transition: { duration: 0.15, ease: "easeOut" },
            className: "absolute left-0 top-full z-50 mt-3 w-[min(20rem,calc(100vw-2rem))]",
            role: "menu",
            children: /* @__PURE__ */ jsxDEV("div", { className: "overflow-hidden rounded-xl border border-border bg-background/95 shadow-xl backdrop-blur-xl", children: [
              /* @__PURE__ */ jsxDEV("ul", { className: "flex flex-col p-2", children: items.map((item) => /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
                Link,
                {
                  href: item.href,
                  onClick: () => setOpen(false),
                  className: "group flex flex-col gap-0.5 rounded-lg px-3 py-2.5 transition-colors hover:bg-muted",
                  role: "menuitem",
                  children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-medium text-foreground group-hover:text-accent", children: item.title }, void 0, false, {
                      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/nav-dropdown.tsx",
                      lineNumber: 120,
                      columnNumber: 23
                    }, this),
                    item.description ? /* @__PURE__ */ jsxDEV("span", { className: "line-clamp-2 text-xs leading-relaxed text-muted-foreground", children: item.description }, void 0, false, {
                      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/nav-dropdown.tsx",
                      lineNumber: 124,
                      columnNumber: 25
                    }, this) : null
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/nav-dropdown.tsx",
                  lineNumber: 114,
                  columnNumber: 21
                },
                this
              ) }, item.href, false, {
                fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/nav-dropdown.tsx",
                lineNumber: 113,
                columnNumber: 19
              }, this)) }, void 0, false, {
                fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/nav-dropdown.tsx",
                lineNumber: 111,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "border-t border-border bg-muted/40", children: /* @__PURE__ */ jsxDEV(
                Link,
                {
                  href: viewAllHref,
                  onClick: () => setOpen(false),
                  className: "flex items-center justify-between px-4 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground",
                  role: "menuitem",
                  children: [
                    viewAllLabel,
                    /* @__PURE__ */ jsxDEV(
                      ArrowRight,
                      {
                        size: 14,
                        className: "transition-transform duration-200 group-hover:translate-x-0.5"
                      },
                      void 0,
                      false,
                      {
                        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/nav-dropdown.tsx",
                        lineNumber: 140,
                        columnNumber: 19
                      },
                      this
                    )
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/nav-dropdown.tsx",
                  lineNumber: 133,
                  columnNumber: 17
                },
                this
              ) }, void 0, false, {
                fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/nav-dropdown.tsx",
                lineNumber: 132,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/nav-dropdown.tsx",
              lineNumber: 110,
              columnNumber: 13
            }, this)
          },
          "menu",
          false,
          {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/nav-dropdown.tsx",
            lineNumber: 101,
            columnNumber: 11
          },
          this
        ) : null }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/nav-dropdown.tsx",
          lineNumber: 99,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/nav-dropdown.tsx",
      lineNumber: 71,
      columnNumber: 5
    },
    this
  );
}
function Header() {
  const productItems = products.map((product) => ({
    title: product.title,
    description: product.tagline,
    href: `/products/${product.slug}`
  }));
  const courseItems = courses.map((course) => ({
    title: course.shortTitle,
    description: course.description,
    href: `/courses/${course.slug}`
  }));
  return /* @__PURE__ */ jsxDEV("header", { className: "sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto flex h-16 items-center justify-between px-6", children: [
    /* @__PURE__ */ jsxDEV(
      Link,
      {
        href: "/",
        className: "flex items-center gap-3 transition-opacity hover:opacity-90",
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "overflow-hidden rounded-lg border border-border", children: /* @__PURE__ */ jsxDEV(
            Image,
            {
              src: "/wdc.jpeg",
              width: "32",
              height: "32",
              alt: "Web Dev Cody logo"
            },
            void 0,
            false,
            {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/header.tsx",
              lineNumber: 34,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/header.tsx",
            lineNumber: 33,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-foreground", children: profile.siteTitle }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/header.tsx",
            lineNumber: 41,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/header.tsx",
        lineNumber: 29,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("nav", { className: "hidden items-center gap-8 lg:flex", children: [
      /* @__PURE__ */ jsxDEV(
        Link,
        {
          href: "/",
          className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
          children: "Home"
        },
        void 0,
        false,
        {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/header.tsx",
          lineNumber: 47,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        NavDropdown,
        {
          label: "Products",
          items: productItems,
          viewAllHref: "/products",
          viewAllLabel: "View all products"
        },
        void 0,
        false,
        {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/header.tsx",
          lineNumber: 53,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        NavDropdown,
        {
          label: "Courses",
          items: courseItems,
          viewAllHref: "/courses",
          viewAllLabel: "View all courses"
        },
        void 0,
        false,
        {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/header.tsx",
          lineNumber: 59,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Link,
        {
          href: "/contact",
          className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
          children: "Contact"
        },
        void 0,
        false,
        {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/header.tsx",
          lineNumber: 65,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/header.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxDEV(
        FeedbackButton,
        {
          triggerContent: /* @__PURE__ */ jsxDEV(
            "button",
            {
              title: "Leave Suggestion",
              className: "rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
              children: /* @__PURE__ */ jsxDEV(MessageCircleHeart, { size: 18 }, void 0, false, {
                fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/header.tsx",
                lineNumber: 80,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/header.tsx",
              lineNumber: 76,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/header.tsx",
          lineNumber: 74,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Link,
        {
          href: "https://youtube.com/@webdevcody",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "hidden rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:inline-flex",
          "aria-label": "YouTube",
          children: /* @__PURE__ */ jsxDEV(YoutubeIcon, { className: "h-[18px] w-[18px] fill-current" }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/header.tsx",
            lineNumber: 92,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/header.tsx",
          lineNumber: 85,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Link,
        {
          href: "https://github.com/webdevcody",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "hidden rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:inline-flex",
          "aria-label": "GitHub",
          children: /* @__PURE__ */ jsxDEV(GithubIcon, { className: "h-[18px] w-[18px] fill-current" }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/header.tsx",
            lineNumber: 102,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/header.tsx",
          lineNumber: 95,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { className: "rounded-full", children: /* @__PURE__ */ jsxDEV(ModeToggle, {}, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/header.tsx",
        lineNumber: 106,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/header.tsx",
        lineNumber: 105,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(MobileMenu, {}, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/header.tsx",
        lineNumber: 109,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/header.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/header.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/header.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
const defaultLinks = [
  {
    label: "YouTube",
    href: "https://youtube.com/@webdevcody",
    icon: YoutubeIcon
  },
  {
    label: "GitHub",
    href: "https://github.com/webdevcody",
    icon: GithubIcon
  },
  {
    label: "X",
    href: "https://x.com/webdevcody",
    icon: XIcon
  }
];
function SocialStrip({
  links = defaultLinks,
  className,
  size = "md"
}) {
  const iconSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  const buttonSize = size === "sm" ? "h-9 w-9" : "h-10 w-10";
  return /* @__PURE__ */ jsxDEV("div", { className: cn("flex items-center gap-2", className), children: links.map((link) => {
    const Icon = link.icon;
    return /* @__PURE__ */ jsxDEV(
      Link,
      {
        href: link.href,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": link.label,
        className: cn(
          "inline-flex items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-accent/60 hover:text-accent",
          buttonSize
        ),
        children: /* @__PURE__ */ jsxDEV(Icon, { className: cn(iconSize, "fill-current") }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/social-strip.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this)
      },
      link.label,
      false,
      {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/social-strip.tsx",
        lineNumber: 48,
        columnNumber: 11
      },
      this
    );
  }) }, void 0, false, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/social-strip.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
function Footer() {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxDEV("footer", { className: "mt-24 border-t border-border bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-6 pb-10 pt-16", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 gap-12 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxDEV(Link, { href: "/", className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "overflow-hidden rounded-lg border border-border", children: /* @__PURE__ */ jsxDEV(
            Image,
            {
              src: "/wdc.jpeg",
              width: "36",
              height: "36",
              alt: "Web Dev Cody logo"
            },
            void 0,
            false,
            {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
              lineNumber: 18,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
            lineNumber: 17,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-foreground", children: profile.siteTitle }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
            lineNumber: 25,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
          lineNumber: 16,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground", children: profile.tagline }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(SocialStrip, { className: "mt-6", size: "sm" }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Products" }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
            lineNumber: 37,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { className: "mt-4 space-y-3", children: [
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
              Link,
              {
                href: "/products",
                className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
                children: "All products"
              },
              void 0,
              false,
              {
                fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
                lineNumber: 42,
                columnNumber: 19
              },
              this
            ) }, void 0, false, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
              lineNumber: 41,
              columnNumber: 17
            }, this),
            products.map((product) => /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
              Link,
              {
                href: `/products/${product.slug}`,
                className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
                children: product.title
              },
              void 0,
              false,
              {
                fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
                lineNumber: 51,
                columnNumber: 21
              },
              this
            ) }, product.slug, false, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
              lineNumber: 50,
              columnNumber: 19
            }, this))
          ] }, void 0, true, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
            lineNumber: 40,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Courses" }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
            lineNumber: 63,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { className: "mt-4 space-y-3", children: [
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
              Link,
              {
                href: "/courses",
                className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
                children: "All courses"
              },
              void 0,
              false,
              {
                fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
                lineNumber: 68,
                columnNumber: 19
              },
              this
            ) }, void 0, false, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
              lineNumber: 67,
              columnNumber: 17
            }, this),
            courses.map((course) => /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
              Link,
              {
                href: `/courses/${course.slug}`,
                className: "line-clamp-1 text-sm text-muted-foreground transition-colors hover:text-foreground",
                children: course.shortTitle
              },
              void 0,
              false,
              {
                fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
                lineNumber: 77,
                columnNumber: 21
              },
              this
            ) }, course.slug, false, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
              lineNumber: 76,
              columnNumber: 19
            }, this))
          ] }, void 0, true, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
            lineNumber: 66,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xs font-semibold uppercase tracking-wider text-foreground", children: "Legal" }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
            lineNumber: 89,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { className: "mt-4 space-y-3", children: [
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
              Link,
              {
                href: "/terms-of-service",
                className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
                children: "Terms of Service"
              },
              void 0,
              false,
              {
                fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
                lineNumber: 94,
                columnNumber: 19
              },
              this
            ) }, void 0, false, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
              lineNumber: 93,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
              Link,
              {
                href: "/privacy-policy",
                className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
                children: "Privacy Policy"
              },
              void 0,
              false,
              {
                fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
                lineNumber: 102,
                columnNumber: 19
              },
              this
            ) }, void 0, false, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
              lineNumber: 101,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
              Link,
              {
                href: "/fulfillment-policy",
                className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
                children: "Fulfillment Policy"
              },
              void 0,
              false,
              {
                fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
                lineNumber: 110,
                columnNumber: 19
              },
              this
            ) }, void 0, false, {
              fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
              lineNumber: 109,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
            lineNumber: 92,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
          lineNumber: 88,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 md:flex-row md:items-center", children: [
      /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: [
        "© ",
        currentYear,
        " Seibert Software Solutions, LLC. All rights reserved."
      ] }, void 0, true, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
        lineNumber: 123,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsxDEV(
          Link,
          {
            href: "/contact",
            className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
            children: "Contact"
          },
          void 0,
          false,
          {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
            lineNumber: 128,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "a",
          {
            href: `mailto:${profile.email}`,
            className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
            children: profile.email
          },
          void 0,
          false,
          {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
            lineNumber: 134,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
        lineNumber: 127,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
      lineNumber: 122,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/site/footer.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/toast.tsx",
    lineNumber: 16,
    columnNumber: 3
  },
  void 0
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        success: "border-success bg-success text-success-foreground",
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsxDEV(
    ToastPrimitives.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/toast.tsx",
      lineNumber: 50,
      columnNumber: 5
    },
    void 0
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/toast.tsx",
    lineNumber: 63,
    columnNumber: 3
  },
  void 0
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsxDEV(X, { className: "h-4 w-4" }, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/toast.tsx",
      lineNumber: 87,
      columnNumber: 5
    }, void 0)
  },
  void 0,
  false,
  {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/toast.tsx",
    lineNumber: 78,
    columnNumber: 3
  },
  void 0
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/toast.tsx",
    lineNumber: 96,
    columnNumber: 3
  },
  void 0
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/toast.tsx",
    lineNumber: 108,
    columnNumber: 3
  },
  void 0
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
function Toaster() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxDEV(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxDEV(Toast, { ...props, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsxDEV(ToastTitle, { children: title }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/toaster.tsx",
            lineNumber: 22,
            columnNumber: 25
          }, this),
          description && /* @__PURE__ */ jsxDEV(ToastDescription, { children: description }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/toaster.tsx",
            lineNumber: 24,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/toaster.tsx",
          lineNumber: 21,
          columnNumber: 13
        }, this),
        action,
        /* @__PURE__ */ jsxDEV(ToastClose, {}, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/toaster.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this)
      ] }, id, true, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/toaster.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this);
    }),
    /* @__PURE__ */ jsxDEV(ToastViewport, {}, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/toaster.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/components/ui/toaster.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
async function sendEvent(key) {
  if (env.VITE_IS_LOCAL) return;
  await fetch("https://projectplannerai.com/api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      key,
      projectId: env.VITE_PLANNER_ID
    })
  });
}
function SendEventOnLoad({ eventKey }) {
  useEffect(() => {
    sendEvent(eventKey);
  }, [eventKey]);
  return null;
}
const queryClient = new QueryClient();
const Route$a = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: `${profile.siteTitle} — Software engineer, creator, founder`
      },
      {
        name: "description",
        content: "I'm Cody Seibert. I build SaaS products, teach web development on YouTube, and publish courses that help developers level up faster."
      },
      {
        property: "og:title",
        content: `${profile.siteTitle} — Software engineer, creator, founder`
      },
      {
        property: "og:description",
        content: "Software engineer building SaaS products, teaching on YouTube, and shipping courses for developers."
      },
      { property: "og:url", content: "https://webdevcody.com" },
      { property: "og:site_name", content: profile.siteTitle },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: `${profile.siteTitle} — Software engineer, creator, founder`
      },
      {
        name: "twitter:description",
        content: "Software engineer building SaaS products, teaching on YouTube, and shipping courses for developers."
      }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600&family=Geist:wght@400;500;600;700&family=Oxanium:wght@200;300;400;500;600;700;800&display=swap"
      }
    ]
  }),
  component: RootComponent,
  notFoundComponent: NotFound
});
function NotFound() {
  return /* @__PURE__ */ jsxDEV("section", { className: "container mx-auto flex flex-col items-center gap-6 px-6 py-32 text-center", children: [
    /* @__PURE__ */ jsxDEV("span", { className: "eyebrow", children: "404" }, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/__root.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("h1", { children: "Page not found" }, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/__root.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("p", { className: "max-w-md text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/__root.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      Link$1,
      {
        to: "/",
        className: "inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90",
        children: "Back home"
      },
      void 0,
      false,
      {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/__root.tsx",
        lineNumber: 85,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/__root.tsx",
    lineNumber: 79,
    columnNumber: 5
  }, this);
}
function RootComponent() {
  return /* @__PURE__ */ jsxDEV(RootDocument, { children: /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, false, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/__root.tsx",
    lineNumber: 98,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/__root.tsx",
    lineNumber: 97,
    columnNumber: 5
  }, this);
}
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxDEV("html", { lang: "en", suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsxDEV("head", { children: /* @__PURE__ */ jsxDEV(HeadContent, {}, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/__root.tsx",
      lineNumber: 107,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/__root.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("body", { className: "min-h-screen bg-background font-sans antialiased", children: [
      /* @__PURE__ */ jsxDEV(ThemeProvider, { children: /* @__PURE__ */ jsxDEV(QueryClientProvider, { client: queryClient, children: [
        /* @__PURE__ */ jsxDEV(SendEventOnLoad, { eventKey: "page load" }, void 0, false, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/__root.tsx",
          lineNumber: 112,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex min-h-screen flex-col", children: [
          /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/__root.tsx",
            lineNumber: 114,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("main", { className: "flex-1 bg-background", children }, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/__root.tsx",
            lineNumber: 115,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
            fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/__root.tsx",
            lineNumber: 116,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/__root.tsx",
          lineNumber: 113,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/__root.tsx",
        lineNumber: 111,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/__root.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Toaster, {}, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/__root.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Scripts, {}, void 0, false, {
        fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/__root.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/__root.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/webdevcody/Workspace/webdevcody.com/src/routes/__root.tsx",
    lineNumber: 105,
    columnNumber: 5
  }, this);
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const getLegalDoc = createServerFn({
  method: "GET"
}).inputValidator((slug) => z.string().regex(/^[a-z0-9-]+$/).parse(slug)).handler(createSsrRpc("32d72a5c57668f201fa4ed1f4d033d3d2903f14432295825535e90aa2930790f"));
const $$splitComponentImporter$9 = () => import("./terms-of-service-DJSWejEj.js");
const Route$9 = createFileRoute("/terms-of-service")({
  loader: async () => {
    const doc = await getLegalDoc({
      data: "terms-of-service"
    });
    if (!doc) throw notFound();
    return doc;
  },
  head: () => ({
    meta: [{
      title: "Terms of Service — webdevcody"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./privacy-policy-D0piIN2H.js");
const Route$8 = createFileRoute("/privacy-policy")({
  loader: async () => {
    const doc = await getLegalDoc({
      data: "privacy-policy"
    });
    if (!doc) throw notFound();
    return doc;
  },
  head: () => ({
    meta: [{
      title: "Privacy Policy — webdevcody"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./fulfillment-policy-Iemggbo4.js");
const Route$7 = createFileRoute("/fulfillment-policy")({
  loader: async () => {
    const doc = await getLegalDoc({
      data: "fulfillment-policy"
    });
    if (!doc) throw notFound();
    return doc;
  },
  head: () => ({
    meta: [{
      title: "Fulfillment Policy — webdevcody"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./contact-DjPFeS_0.js");
const Route$6 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — webdevcody"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./bye-By0Wum2h.js");
const Route$5 = createFileRoute("/bye")({
  head: () => ({
    meta: [{
      title: "Unsubscribed — webdevcody"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./index-C67UW-e7.js");
const Route$4 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./products.index-0XORHbpN.js");
const Route$3 = createFileRoute("/products/")({
  head: () => ({
    meta: [{
      title: "Products — webdevcody"
    }, {
      name: "description",
      content: "SaaS products I've built and continue to maintain. From AI-powered video editing to icon generation and project planning."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./courses.index-BAVXbxV_.js");
const Route$2 = createFileRoute("/courses/")({
  head: () => ({
    meta: [{
      title: "Courses — webdevcody"
    }, {
      name: "description",
      content: "Hands-on, practical courses that take you from zero to shipping — covering AI agents, React, and building real products with modern stacks."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./products._slug-B-RVP7q3.js");
const Route$1 = createFileRoute("/products/$slug")({
  loader: ({
    params
  }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return {
      product
    };
  },
  head: ({
    loaderData
  }) => {
    const product = loaderData?.product;
    return {
      meta: product ? [{
        title: `${product.title} — webdevcody`
      }, {
        name: "description",
        content: product.tagline
      }, {
        property: "og:title",
        content: product.title
      }, {
        property: "og:description",
        content: product.tagline
      }, ...product.heroImage ? [{
        property: "og:image",
        content: product.heroImage
      }] : []] : [{
        title: "Product not found"
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./courses._slug-D1QtjZs6.js");
const Route = createFileRoute("/courses/$slug")({
  loader: ({
    params
  }) => {
    const course = getCourseBySlug(params.slug);
    if (!course) throw notFound();
    return {
      course
    };
  },
  head: ({
    loaderData
  }) => {
    const course = loaderData?.course;
    return {
      meta: course ? [{
        title: `${course.shortTitle} — webdevcody`
      }, {
        name: "description",
        content: course.description
      }, {
        property: "og:title",
        content: course.title
      }, {
        property: "og:description",
        content: course.description
      }, ...course.heroImage ? [{
        property: "og:image",
        content: course.heroImage
      }] : []] : [{
        title: "Course not found"
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TermsOfServiceRoute = Route$9.update({
  id: "/terms-of-service",
  path: "/terms-of-service",
  getParentRoute: () => Route$a
});
const PrivacyPolicyRoute = Route$8.update({
  id: "/privacy-policy",
  path: "/privacy-policy",
  getParentRoute: () => Route$a
});
const FulfillmentPolicyRoute = Route$7.update({
  id: "/fulfillment-policy",
  path: "/fulfillment-policy",
  getParentRoute: () => Route$a
});
const ContactRoute = Route$6.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$a
});
const ByeRoute = Route$5.update({
  id: "/bye",
  path: "/bye",
  getParentRoute: () => Route$a
});
const IndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$a
});
const ProductsIndexRoute = Route$3.update({
  id: "/products/",
  path: "/products/",
  getParentRoute: () => Route$a
});
const CoursesIndexRoute = Route$2.update({
  id: "/courses/",
  path: "/courses/",
  getParentRoute: () => Route$a
});
const ProductsSlugRoute = Route$1.update({
  id: "/products/$slug",
  path: "/products/$slug",
  getParentRoute: () => Route$a
});
const CoursesSlugRoute = Route.update({
  id: "/courses/$slug",
  path: "/courses/$slug",
  getParentRoute: () => Route$a
});
const rootRouteChildren = {
  IndexRoute,
  ByeRoute,
  ContactRoute,
  FulfillmentPolicyRoute,
  PrivacyPolicyRoute,
  TermsOfServiceRoute,
  CoursesSlugRoute,
  ProductsSlugRoute,
  CoursesIndexRoute,
  ProductsIndexRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  return createRouter({
    routeTree,
    defaultPreload: "intent",
    scrollRestoration: true
  });
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  FeedbackButton as F,
  Image as I,
  Link as L,
  Route$9 as R,
  SendEventOnLoad as S,
  Route$8 as a,
  Route$7 as b,
  courses as c,
  products as d,
  cn as e,
  SocialStrip as f,
  createSsrRpc as g,
  Route$1 as h,
  Route as i,
  profile as p,
  router as r,
  sendEvent as s,
  useToast as u
};
