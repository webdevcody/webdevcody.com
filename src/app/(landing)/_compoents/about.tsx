"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: "🚀" },
      { name: "Next.js", icon: "🔥" },
      { name: "TailwindCSS", icon: "🎨" },
      { name: "TypeScript", icon: "📘" },
      { name: "JavaScript", icon: "💛" },
      { name: "HTML/CSS", icon: "🎯" },
    ],
  },
  {
    title: "Backend & Infrastructure",
    skills: [
      { name: "Node.js", icon: "🔧" },
      { name: "AWS", icon: "☁️" },
      { name: "Serverless", icon: "⚡" },
      { name: "Terraform", icon: "🌍" },
      { name: "IaC Tooling", icon: "🛠️" },
      { name: "Docker", icon: "🐳" },
    ],
  },
  {
    title: "Development Practices",
    skills: [
      { name: "CI/CD", icon: "🚦" },
      { name: "Automated Testing", icon: "🧪" },
      { name: "Agile Development", icon: "🏃" },
      { name: "Git Flow", icon: "🌳" },
      { name: "Code Reviews", icon: "👀" },
      { name: "Documentation", icon: "📚" },
    ],
  },
  {
    title: "Business & Development",
    skills: [
      { name: "Full Stack Development", icon: "💻" },
      { name: "Product Development", icon: "🔨" },
      { name: "Entrepreneurship", icon: "📈" },
      { name: "Project Management", icon: "📋" },
      { name: "Technical Writing", icon: "✍️" },
      { name: "Team Leadership", icon: "👥" },
    ],
  },
];

export function AboutSection() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-6 text-foreground">
          About Me <span className="wave">👋</span>
        </h1>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 rounded-2xl blur-xl transform -rotate-2" />
          <div className="relative bg-background/80 backdrop-blur-sm rounded-xl border border-border/40 p-6 shadow-xl">
            <p className="text-lg leading-8 text-muted-foreground">
              I&apos;m Cody and I&apos;ve been working as a web developer in
              this industry for over{" "}
              <strong className="text-foreground">10 years</strong>. When I get
              time, I publish tutorial videos on my youtube channel to help
              teach others about web development and how to code, but I will say
              my heart is in entrepreneurship; I&apos;m often thinking of new
              application ideas I could build and turn into a successful SaaS
              business.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl font-semibold mb-2 text-foreground">
          My Tech Stack & Skills
        </h2>
        <p className="text-lg text-muted-foreground">
          Technologies and processes I work with daily
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.3 }}
            className="relative group h-[320px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 rounded-2xl blur-xl transform -rotate-2" />
            <div className="relative h-full bg-background dark:bg-background rounded-xl border border-border/40 overflow-hidden shadow-xl dark:shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-3 flex-1">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200"
                    >
                      <span
                        className="text-2xl"
                        role="img"
                        aria-label={skill.name}
                      >
                        {skill.icon}
                      </span>
                      <span className="font-medium text-foreground text-sm">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Add this to your global CSS file
const styles = `
.wave {
  animation: wave 2.5s infinite;
  display: inline-block;
  transform-origin: 70% 70%;
}

@keyframes wave {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}
`;
