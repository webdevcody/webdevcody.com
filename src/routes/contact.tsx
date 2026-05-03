import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Github, Youtube, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — webdevcody" }] }),
  component: ContactPage,
});

function ContactPage() {
  const contactLinks = [
    {
      title: "Discord Community",
      description:
        "Join the community to chat, learn, and build alongside other developers.",
      icon: MessageCircleHeart,
      href: profile.social.discord,
    },
    {
      title: "YouTube Channel",
      description:
        "Subscribe for weekly web-development tutorials, project walkthroughs, and deep dives.",
      icon: Youtube,
      href: profile.social.youtube,
    },
    {
      title: "GitHub",
      description:
        "Check out my open-source projects, examples, and experiments.",
      icon: Github,
      href: profile.social.github,
    },
    {
      title: "Email",
      description:
        "Best for business inquiries, sponsorships, or longer questions.",
      icon: Mail,
      href: `mailto:${profile.email}`,
    },
  ];

  return (
    <div className="container mx-auto px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Say hi"
          title="Get in touch"
          description="Have a question, an idea for a collaboration, or just want to say hello? Here are the best ways to reach me."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group relative flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/60 hover:-translate-y-0.5"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-border bg-muted text-muted-foreground transition-colors group-hover:text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                    {link.title}
                    <ArrowUpRight
                      className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {link.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </div>
  );
}
