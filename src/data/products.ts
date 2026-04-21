import type { ProjectCardData } from "@/components/project-card";

export const products: ProjectCardData[] = [
  {
    title: "AI Clip Studio",
    tagline:
      "Turn long-form videos into short, shareable clips automatically with AI-powered highlight detection and captioning.",
    url: "https://aiclipstudio.com",
    tags: ["AI", "Video", "SaaS"],
    status: "Live",
  },
  {
    title: "Icon Generator AI",
    tagline:
      "Generate beautiful, consistent icon sets for your apps and websites in seconds using AI image generation.",
    url: "https://icongeneratorai.com",
    image: "https://icongeneratorai.com/static/app.png",
    tags: ["AI", "Design", "SaaS"],
    status: "Live",
  },
  {
    title: "Project Planner AI",
    tagline:
      "An intelligent assistant that breaks down projects into tasks, timelines, and resources so you can ship faster.",
    url: "https://projectplannerai.com/",
    image: "https://projectplannerai.com/landing/hero1-dark.png",
    tags: ["AI", "Productivity", "SaaS"],
    status: "Live",
  },
];
