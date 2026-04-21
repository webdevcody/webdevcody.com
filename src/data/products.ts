import type { ProjectCardData } from "@/components/project-card";

export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface ProductStat {
  label: string;
  value: string;
}

export interface ProductDetail extends ProjectCardData {
  slug: string;
  heroImage?: string;
  heroEyebrow?: string;
  longDescription: string;
  highlights: string[];
  features: ProductFeature[];
  stats?: ProductStat[];
  faq?: ProductFaq[];
  ctaLabel?: string;
}

export const products: ProductDetail[] = [
  {
    slug: "ai-clip-studio",
    title: "AI Clip Studio",
    tagline:
      "Turn a single prompt into a post-ready faceless TikTok, Reel, or YouTube Short — script, AI voiceover, B-roll, and captions included.",
    url: "https://aiclipstudio.com",
    image: "https://aiclipstudio.com/og-image.png",
    heroImage: "https://aiclipstudio.com/og-image.png",
    heroEyebrow: "Faceless short-form, on autopilot",
    tags: ["AI", "Video", "SaaS"],
    status: "Live",
    longDescription:
      "AI Clip Studio writes the script, records the AI voiceover, generates the B-roll, and bakes in captions — so you can post daily TikToks, Reels, and YouTube Shorts without filming, editing, or ever showing your face. Drop a one-line prompt and you get a 9:16 MP4 in under two minutes, ready to publish everywhere.",
    ctaLabel: "Create my first video",
    highlights: [
      "One prompt → post-ready 9:16 MP4 in under 2 minutes",
      "Narrator-grade AI voiceover with selectable voices",
      "Auto B-roll generated per scene and stitched together",
      "Burned-in captions plus SRT and styled ASS exports",
      "Commercial use included on every plan",
    ],
    stats: [
      { label: "Prompt → MP4", value: "< 2 min" },
      { label: "Output", value: "9:16 vertical" },
      { label: "Face time", value: "0 sec" },
    ],
    features: [
      {
        title: "One-prompt faceless videos",
        description:
          "Turn a topic into a narrated, captioned 9:16 MP4. No filming, no editing, no time on camera.",
      },
      {
        title: "AI script tuned for retention",
        description:
          "Hook-first narration and scene beats engineered for Shorts, Reels, and TikTok watch time.",
      },
      {
        title: "Narrator-grade AI voiceover",
        description:
          "Pick a voice — calm, energetic, documentary. It reads like a real narrator, not a robot.",
      },
      {
        title: "Auto B-roll per scene",
        description:
          "Model-generated visuals matched to each beat, stitched into a single vertical MP4.",
      },
      {
        title: "Captions baked in for sound-off",
        description:
          "Burned-in captions ready to post, plus SRT and styled ASS exports for your own editor.",
      },
      {
        title: "Built for daily posting",
        description:
          "Same look run after run. Batch a week of Shorts in one session and queue your channel.",
      },
    ],
    faq: [
      {
        question: "What is a faceless channel?",
        answer:
          "A short-form channel where you never appear on camera or record your own voice. AI Clip Studio handles the narration with AI voices and the visuals with AI-generated B-roll — perfect for niche channels like history, finance, facts, motivation, or book summaries.",
      },
      {
        question: "Do I need to film or record anything?",
        answer:
          "No. Give a one-line prompt and we generate the script, narration, visuals, and captions end-to-end. You download a 9:16 MP4 ready to upload to TikTok, Instagram Reels, and YouTube Shorts.",
      },
      {
        question: "What do I actually get to download?",
        answer:
          "A final 9:16 MP4 with captions baked in, plus separately: the plain video without captions, the AI voiceover MP3, SRT and styled ASS caption files, and a transcript.",
      },
      {
        question: "Can I use the videos commercially?",
        answer:
          "Yes. Videos you generate are yours to publish on TikTok, Reels, YouTube Shorts, in ads, or anywhere else.",
      },
    ],
  },
  {
    slug: "icon-generator-ai",
    title: "Icon Generator AI",
    tagline:
      "Stop waiting on designers. Create professional, high-resolution icons for your website, app, or brand in seconds — not days.",
    url: "https://icongeneratorai.com",
    image: "https://icongeneratorai.com/static/app.png",
    heroImage: "https://icongeneratorai.com/static/app.png",
    heroEyebrow: "Trusted by creators worldwide",
    tags: ["AI", "Design", "SaaS"],
    status: "Live",
    longDescription:
      "Icon Generator AI lets you describe an icon in plain English and get a unique, high-resolution 1024×1024 asset in seconds. Skip the back-and-forth with a designer, skip the long feedback loops, and skip the sticker-shock invoices — describe what you want, pick a style, and ship.",
    ctaLabel: "Generate an icon",
    highlights: [
      "Describe any icon in natural language and get it in seconds",
      "High-resolution 1024×1024 output ready for web, mobile, or print",
      "Dozens of style and color presets to stay on-brand",
      "Every icon stored in the cloud so you never lose a favorite",
      "Commercial use included on all generations",
    ],
    stats: [
      { label: "Happy users", value: "208,476+" },
      { label: "Icons generated", value: "232,492+" },
      { label: "Resolution", value: "1024×1024" },
    ],
    features: [
      {
        title: "Quick feedback loop",
        description:
          "Icons generate in a few seconds, so you can continuously fine-tune your prompt and options until the icon is exactly right.",
      },
      {
        title: "Manage your collection",
        description:
          "Every icon you generate is stored in the cloud, so you never need to manage your collection yourself.",
      },
      {
        title: "Variety of options",
        description:
          "Style and color presets let you diversify your icons without starting from scratch every time.",
      },
      {
        title: "Affordable pricing",
        description:
          "The most credits per dollar of any icon generator. No $10-for-10-credits gotchas.",
      },
      {
        title: "High resolution",
        description:
          "Every icon is 1024×1024, so you can resize and remix in your favorite image editor.",
      },
      {
        title: "Social sharing",
        description:
          "Share icons to social media directly and get feedback from your friends.",
      },
    ],
    faq: [
      {
        question: "How does the icon generator work?",
        answer:
          "Describe the icon you want in natural language (like 'a happy sun with sunglasses'), pick a style and color, and the AI produces a unique icon for you in seconds. Generate as many variations as you like until it's perfect.",
      },
      {
        question: "Can I use these icons commercially?",
        answer:
          "Yes. Every icon you generate is yours to use however you like, including for commercial projects — no extra licensing fees or attribution required.",
      },
      {
        question: "Do credits expire?",
        answer:
          "No. Your credits never expire. Once purchased they remain in your account until you use them.",
      },
    ],
  },
  {
    slug: "project-planner-ai",
    title: "Project Planner AI",
    tagline:
      "An intelligent home base for your side projects — tasks, resources, budgets, collaborators, and AI-generated work items in one clean dashboard.",
    url: "https://projectplannerai.com/",
    image: "https://projectplannerai.com/landing/hero1-dark.png",
    heroImage: "https://projectplannerai.com/landing/hero1-dark.png",
    heroEyebrow: "Manage your side projects in one place",
    tags: ["AI", "Productivity", "SaaS"],
    status: "Live",
    longDescription:
      "Tired of unfinished side projects? Project Planner AI replaces the chaos of juggling ten different tabs and tools with a single dashboard. Track work items, manage finances, collaborate with teammates, message in-app, and let AI break down tasks so you always know exactly what's next.",
    ctaLabel: "Get started",
    highlights: [
      "All your side projects in one intuitive dashboard",
      "Built-in work item tracking with AI-generated task breakdowns",
      "Integrated finance tracking to keep projects on budget",
      "Invite collaborators and work together in real time",
      "In-app messaging so context stays with the project",
    ],
    stats: [
      { label: "Free plan", value: "1 project" },
      { label: "Premium", value: "$5 / mo" },
      { label: "AI features", value: "Included" },
    ],
    features: [
      {
        title: "Resources",
        description:
          "Add and favorite resources so essential tools and information are always one click away.",
      },
      {
        title: "Collaboration",
        description:
          "Invite collaborators to access tasks and finances and contribute to the project together.",
      },
      {
        title: "In-app messaging",
        description:
          "Send messages, create AI-generated work items, and keep communication alongside your project.",
      },
      {
        title: "Work items",
        description:
          "Break down what needs to happen next into small, focused work items — or let AI do it for you.",
      },
      {
        title: "Finance tracking",
        description:
          "Log expenses per project so you always know the true cost of your side hustle.",
      },
      {
        title: "AI features (Premium)",
        description:
          "Use AI to generate tasks, plans, and next steps so you spend less time planning and more time shipping.",
      },
    ],
    faq: [
      {
        question: "Can I use it for free?",
        answer:
          "Yes. The Basic plan is free forever and lets you manage one project with work items, finances, and in-app messaging.",
      },
      {
        question: "What do I get with Premium?",
        answer:
          "The $5/month Premium plan unlocks unlimited projects, collaboration, and all the AI features for generating tasks and plans.",
      },
      {
        question: "Is this just for solo devs?",
        answer:
          "No — while it's optimized for side projects, teams can invite collaborators and use the shared finance and messaging tools together.",
      },
    ],
  },
];

export function getProductBySlug(slug: string): ProductDetail | undefined {
  return products.find((product) => product.slug === slug);
}
