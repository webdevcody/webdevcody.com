import type { CourseCardData } from "@/components/course-card";

export interface CourseOutcome {
  title: string;
  description: string;
}

export interface CourseFaq {
  question: string;
  answer: string;
}

export interface CourseStat {
  label: string;
  value: string;
}

export interface CourseDetail extends CourseCardData {
  slug: string;
  shortTitle: string;
  heroImage?: string;
  heroEyebrow?: string;
  longDescription: string;
  highlights: string[];
  outcomes: CourseOutcome[];
  stats?: CourseStat[];
  faq?: CourseFaq[];
  price?: string;
  ctaLabel?: string;
}

export const courses: CourseDetail[] = [
  {
    slug: "agentic-jumpstart",
    title: "AgenticJumpstart — Build AI agents from zero",
    shortTitle: "AgenticJumpstart",
    description:
      "A hands-on course teaching you how to design, build, and ship AI agents that actually work. From fundamentals to production patterns.",
    longDescription:
      "Coding is evolving — and AgenticJumpstart teaches you how to stop typing every character manually and start directing AI instead. You'll master Cursor IDE, Claude Code CLI, and modern agentic workflows to build production-ready apps 10x faster. Become the architect, not just the typist.",
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
      "Lifetime updates included",
    ],
    stats: [
      { label: "Productivity boost", value: "10x" },
      { label: "Instructor experience", value: "12+ yrs" },
      { label: "YouTube subscribers", value: "260k+" },
    ],
    outcomes: [
      {
        title: "Think in agents and systems",
        description:
          "Stop thinking line-by-line. Learn to design tasks the way AI agents work best and let them handle the implementation.",
      },
      {
        title: "Ship entire apps in a sitting",
        description:
          "Build full applications in the time it used to take to write a single component — by delegating the grunt work to AI.",
      },
      {
        title: "Master the modern AI toolbox",
        description:
          "Go deep on Cursor IDE, Cursor CLI, Claude Code CLI, and ChatGPT — the tools powering the agentic coding revolution.",
      },
      {
        title: "Level up your prompts",
        description:
          "Learn battle-tested prompting patterns for Claude Sonnet and Opus that dramatically improve output quality.",
      },
      {
        title: "Production-ready workflows",
        description:
          "Go beyond demos: structure projects, configs, and agent workflows that survive real production pressure.",
      },
      {
        title: "Lifetime updates",
        description:
          "The tools evolve fast. Your access evolves with them — new lessons, patterns, and configs as the space matures.",
      },
    ],
    faq: [
      {
        question: "What AI tools will I learn to use?",
        answer:
          "You'll master Cursor IDE, Cursor CLI, Claude Code CLI, ChatGPT, and other cutting-edge AI development tools — with lessons on how to maximize productivity with each one.",
      },
      {
        question: "Do I need prior experience with AI tools?",
        answer:
          "No prior AI tool experience is required. The course is designed for developers new to AI-assisted development, starting with basics and building to advanced techniques.",
      },
      {
        question: "Can I apply these skills to any programming language?",
        answer:
          "Yes. While some examples use JavaScript/TypeScript, the AI development principles and techniques work across any stack.",
      },
      {
        question: "How do I get support if I need help?",
        answer:
          "Join the Discord community or email Cody directly — he typically responds within 24 hours with personalized help.",
      },
    ],
  },
  {
    slug: "react-challenges-collection",
    title:
      "React Challenges Collection — Learn React through mini projects (TypeScript)",
    shortTitle: "React Challenges Collection",
    description:
      "A course for beginners learning React by solving real-world mini challenges in TypeScript. Each challenge builds a skill you'll use every day.",
    longDescription:
      "Learn React the way it actually gets used at work — by shipping things. You'll solve 20 beginner-to-intermediate interview-style challenges in TypeScript, each one isolated around a specific skill: state, effects, forms, async, lists, routing, and more. By the end, the patterns are muscle memory.",
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
      "Lifetime access via Gumroad",
    ],
    stats: [
      { label: "Challenges", value: "20" },
      { label: "Stack", value: "React + TS" },
      { label: "Level", value: "Beginner" },
    ],
    outcomes: [
      {
        title: "Core React fluency",
        description:
          "Components, props, state, effects, and event handling — drilled until they're automatic.",
      },
      {
        title: "TypeScript for React",
        description:
          "Typing components, props, and hooks the way modern teams actually do it.",
      },
      {
        title: "Real interview patterns",
        description:
          "Solve the exact kind of mini-problem you'll be asked to build live in a React interview.",
      },
      {
        title: "Build, don't just watch",
        description:
          "Every challenge is hands-on — you build it, break it, and fix it yourself.",
      },
    ],
    faq: [
      {
        question: "Who is this course for?",
        answer:
          "Developers who know some JavaScript and want to get fluent at React fast — especially folks prepping for a React-focused interview.",
      },
      {
        question: "Do I need TypeScript experience?",
        answer:
          "Basic familiarity helps, but the challenges are simple enough to pick up TypeScript along the way.",
      },
      {
        question: "How long do I have access?",
        answer:
          "Forever. It's a one-time purchase on Gumroad with lifetime access.",
      },
    ],
  },
  {
    slug: "ai-icon-generator-t3",
    title: "Building an AI Icon Generator with the T3 Stack",
    shortTitle: "AI Icon Generator with T3",
    description:
      "Learn Next.js, Prisma, TailwindCSS, TypeScript, and the DALL·E API by building a real AI Icon Generator app from scratch.",
    longDescription:
      "Learn a modern full-stack by actually building something cool. You'll build an AI Icon Generator from scratch using the T3 Stack — Next.js, Prisma, TailwindCSS, and TypeScript — and wire it up to OpenAI's DALL·E API. By the end, you'll have a real product under your belt and a playbook for shipping AI-powered apps.",
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
      "Lifetime access via Gumroad",
    ],
    stats: [
      { label: "Stack", value: "T3" },
      { label: "API", value: "DALL·E" },
      { label: "Project", value: "Full app" },
    ],
    outcomes: [
      {
        title: "Full-stack Next.js",
        description:
          "Pages, API routes, server actions, and data fetching the modern way.",
      },
      {
        title: "Database with Prisma",
        description:
          "Model your schema, migrate, and query — the standard ORM approach for TS apps.",
      },
      {
        title: "Design with Tailwind",
        description:
          "Build a polished, responsive UI using utility-first CSS the way real apps are styled.",
      },
      {
        title: "Integrate OpenAI",
        description:
          "Call the DALL·E API safely from the server, manage keys, and handle usage and errors.",
      },
      {
        title: "Type safety end-to-end",
        description:
          "Use TypeScript across the whole stack so refactors stay safe as the app grows.",
      },
    ],
    faq: [
      {
        question: "Do I need prior Next.js experience?",
        answer:
          "Some basic React and Next.js knowledge helps, but the course walks through each layer so you can follow along even if you're new.",
      },
      {
        question: "Will I need an OpenAI account?",
        answer:
          "Yes — to run the generator you'll need an OpenAI API key. Pay-as-you-go usage is typically just cents per icon.",
      },
      {
        question: "How long do I have access?",
        answer:
          "Forever. Lifetime access via your Gumroad account.",
      },
    ],
  },
];

export function getCourseBySlug(slug: string): CourseDetail | undefined {
  return courses.find((course) => course.slug === slug);
}
