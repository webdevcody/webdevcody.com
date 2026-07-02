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
    slug: "automaker",
    title: "Automaker",
    tagline:
      "A local, open-source agentic IDE that turns a project backlog into autonomous coding work with Kanban tasks, Auto Mode, and parallel AI agents.",
    url: "https://automaker.app",
    image: "https://automaker.app/card.png",
    heroImage: "https://automaker.app/card.png",
    heroEyebrow: "Open-source autonomous coding",
    tags: ["AI", "Developer Tools", "Open Source"],
    status: "Live",
    longDescription:
      "Automaker is a desktop AI software engineer for developers who want agents to do more than suggest snippets. It combines backlog planning, technical specs, a Kanban workflow, file-system access, terminal execution, and autonomous coding so agents can pick up approved work, write code, run tests, and recover from mistakes while you stay in control.",
    ctaLabel: "View Automaker",
    highlights: [
      "Kanban workflow for planning, approving, and tracking agent work",
      "Auto Mode lets approved tasks move into autonomous execution",
      "Parallel agents can work across multiple backlog items at once",
      "Thought-stream visibility shows plans, critiques, retries, and results",
      "Runs locally so your code stays on your machine",
    ],
    stats: [
      { label: "Mode", value: "Auto" },
      { label: "Workflow", value: "Kanban" },
      { label: "Runtime", value: "Local" },
    ],
    features: [
      {
        title: "Autonomous task execution",
        description:
          "Approved work can be picked up by AI agents that write code, run commands, check results, and move the task forward.",
      },
      {
        title: "Project management built in",
        description:
          "Use the board to capture ideas, generate specs, organize backlog items, and keep implementation status visible.",
      },
      {
        title: "Parallel agent workflows",
        description:
          "Configure concurrent agents so independent tasks can progress without waiting for one long-running session.",
      },
      {
        title: "Transparent thought stream",
        description:
          "Watch the agent reason, plan, critique, retry, and report progress instead of treating AI output like a black box.",
      },
      {
        title: "Full-stack coding surface",
        description:
          "Agents can work across frontend, backend, tests, scripts, terminal commands, and repository state from one local app.",
      },
      {
        title: "Local-first control",
        description:
          "Automaker runs as a local Electron app and connects directly to your machine instead of routing code through a hosted workspace.",
      },
    ],
    faq: [
      {
        question: "Is Automaker open source?",
        answer:
          "Yes. Automaker is positioned as a local, open-source AI coding assistant with the project and onboarding available from GitHub.",
      },
      {
        question: "What makes it different from chat-based coding tools?",
        answer:
          "Automaker is built around tasks, specs, a Kanban board, terminal access, and autonomous execution. The agent is expected to do the work in the project, not just generate text for you to copy.",
      },
      {
        question: "Can I keep control while agents run?",
        answer:
          "Yes. You can plan manually, approve work, watch the thought stream, and intervene when an agent needs direction.",
      },
    ],
  },
  {
    slug: "mission-control",
    title: "Mission Control",
    tagline:
      "A focused desktop command center for launching, organizing, and replaying the agentic workflows that help you ship software faster.",
    url: "https://agentsystem.dev",
    image: "https://agentsystem.dev/og.png",
    heroImage: "https://agentsystem.dev/marketing/mission-control-dashboard.webp",
    heroEyebrow: "AgentSystem desktop command center",
    tags: ["AI", "Developer Tools", "Desktop"],
    status: "Live",
    longDescription:
      "Mission Control is the desktop surface for AgentSystem. It collects projects, recent runs, terminal sessions, and repeatable agent workflows into one local-first app so you can stop bouncing between terminal tabs, chat windows, and scattered notes.",
    ctaLabel: "Explore Mission Control",
    highlights: [
      "Project-aware workspace switching for agentic development",
      "Run history and replay so useful workflows are easy to repeat",
      "A focused dashboard for sessions, terminals, projects, and diffs",
      "Works alongside Claude Code, Codex, and Cursor CLI",
      "Local-first desktop app with free downloads from AgentSystem",
    ],
    stats: [
      { label: "Surface", value: "Desktop" },
      { label: "Flow", value: "Local-first" },
      { label: "Cost", value: "Free" },
    ],
    features: [
      {
        title: "Desktop command center",
        description:
          "Launch and organize the agent workflows you already use from one focused app instead of rebuilding context in every terminal.",
      },
      {
        title: "Project-aware navigation",
        description:
          "Keep active projects, recent sessions, and workspace context close so the next run starts from the right place.",
      },
      {
        title: "Run history and replay",
        description:
          "Turn useful agent work into a repeatable workflow instead of a one-off command hidden in scrollback.",
      },
      {
        title: "Terminal and session views",
        description:
          "Track terminals, sessions, and diffs in the same surface that launches the work.",
      },
      {
        title: "AgentSystem skills pairing",
        description:
          "Use it alongside the AgentSystem skill pack for production-minded coding workflows, checks, and handoffs.",
      },
      {
        title: "Local-first by design",
        description:
          "Mission Control sits next to Claude Code, Codex, and Cursor CLI; it does not replace your existing agent stack.",
      },
    ],
    faq: [
      {
        question: "Is Mission Control part of AgentSystem?",
        answer:
          "Yes. Mission Control is the AgentSystem desktop app for launching, organizing, and repeating agentic development workflows.",
      },
      {
        question: "Does it replace Claude Code, Codex, or Cursor?",
        answer:
          "No. Mission Control is designed to sit next to those tools and give them a repeatable, project-aware home.",
      },
      {
        question: "Where do I get it?",
        answer:
          "The public downloads and product details live on agentsystem.dev.",
      },
    ],
  },
  {
    slug: "sketchlab",
    title: "SketchLab",
    tagline:
      "A browser-based sketching and diagramming app for mapping ideas, architecture, and layered systems on a fast canvas.",
    url: "https://sketchlab.webdevcody.com",
    image: "https://sketchlab.webdevcody.com/apple-touch-icon.png",
    heroImage: "https://sketchlab.webdevcody.com/apple-touch-icon.png",
    heroEyebrow: "Canvas sketching app",
    tags: ["App", "Diagrams", "Design"],
    status: "Live",
    longDescription:
      "SketchLab is a lightweight canvas app for turning ideas into visual structure. It gives you fast shape, text, icon, image, edge, and layer tools, plus an AI-assisted diagram generator for architecture-style boards when you want a starting point instead of a blank canvas.",
    ctaLabel: "Open SketchLab",
    highlights: [
      "Draw shapes, text, icons, images, and connected edges on a freeform canvas",
      "Use layers and floor-style depth to separate parts of a system",
      "Generate architecture diagrams from prompts with an OpenAI API key",
      "Manage multiple boards from the built-in board drawer",
      "Export board thumbnails and keep diagrams lightweight in the browser",
    ],
    stats: [
      { label: "Surface", value: "Canvas" },
      { label: "Boards", value: "Multi" },
      { label: "Assist", value: "AI" },
    ],
    features: [
      {
        title: "Freeform diagram canvas",
        description:
          "Sketch rectangles, circles, icons, labels, images, and text directly on the canvas, then arrange them into a readable system map.",
      },
      {
        title: "Connected edges",
        description:
          "Draw directed or undirected links between nodes so relationships are visible instead of buried in notes.",
      },
      {
        title: "Layered boards",
        description:
          "Use named layers, visibility controls, floor colors, and distant-layer fading to make complex diagrams easier to scan.",
      },
      {
        title: "AI diagram generation",
        description:
          "Prompt SketchLab to generate an editable architecture diagram, then refine the result with the normal drawing tools.",
      },
      {
        title: "Board drawer",
        description:
          "Create, rename, switch, copy, and delete boards without leaving the sketching surface.",
      },
      {
        title: "Fast browser workflow",
        description:
          "Open the app in a browser and start mapping ideas without a heavyweight design suite or account flow.",
      },
    ],
    faq: [
      {
        question: "What is SketchLab for?",
        answer:
          "SketchLab is for quickly mapping ideas, product flows, architecture diagrams, and layered systems on a browser canvas.",
      },
      {
        question: "Does SketchLab support AI generation?",
        answer:
          "Yes. The app includes an AI panel for generating editable diagram boards from prompts when an OpenAI API key is available.",
      },
      {
        question: "Is it a design tool or a diagramming tool?",
        answer:
          "It is closer to a fast diagramming and sketching tool: shapes, edges, text, icons, images, layers, boards, and lightweight export.",
      },
    ],
  },
];

export function getProductBySlug(slug: string): ProductDetail | undefined {
  return products.find((product) => product.slug === slug);
}
