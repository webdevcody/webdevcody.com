import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import Image from "@/components/image";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — webdevcody" }] }),
  component: AboutPage,
});

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

function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="About"
          title={`Hi, I'm ${profile.name}`}
          description={profile.tagline}
          align="center"
          className="mx-auto"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <div className="overflow-hidden rounded-2xl border border-border">
            <Image
              src={profile.avatar}
              width="160"
              height="160"
              alt={profile.name}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 flex flex-col gap-5 text-base leading-relaxed text-muted-foreground"
        >
          <p>
            I've been building software for over a decade. Along the way I've
            shipped SaaS products, led engineering teams, and grown a YouTube
            channel of more than 265k developers who follow along as I build in
            public.
          </p>
          <p>
            I fell in love with software because of what you can make with it
            alone, in a weekend. That feeling still drives how I build, how I
            teach, and why I keep shipping new things — courses, products, and
            the occasional experimental side project that turns into something
            bigger.
          </p>
          <p>
            On this site you'll find the products I sell, the courses I teach,
            and the easiest ways to get in touch. If any of it helps you ship
            faster or learn something new, that's the whole point.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {profile.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <div className="text-2xl font-semibold text-foreground sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-8">
          <span className="eyebrow">Stack &amp; skills</span>
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
              className="flex flex-col gap-3"
            >
              <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {group.title}
              </h2>
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
