"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";

const skillGroups: { title: string; skills: string[] }[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "HTML / CSS",
    ],
  },
  {
    title: "Backend & Cloud",
    skills: [
      "Node.js",
      "AWS",
      "Serverless",
      "Terraform",
      "Docker",
      "PostgreSQL",
    ],
  },
  {
    title: "Craft",
    skills: [
      "Full-stack delivery",
      "Product building",
      "CI / CD",
      "Automated testing",
      "Technical writing",
      "Mentorship",
    ],
  },
];

export function AboutSection() {
  return (
    <section className="section">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <SectionHeading
              eyebrow="About"
              title="A bit about me"
              description="I'm Cody. I've been building software for over a decade. When I'm not shipping products or recording videos, you'll find me tinkering with the next thing I might turn into a business."
            />
            <p className="text-base leading-relaxed text-muted-foreground">
              I fell in love with software because of what you can make with it
              alone, in a weekend. That feeling still drives how I build, how I
              teach, and why I keep shipping new things.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <span className="eyebrow">Stack &amp; skills</span>
            <div className="flex flex-col gap-8">
              {skillGroups.map((group) => (
                <div key={group.title} className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    {group.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
