"use client";

import { motion } from "framer-motion";
import {
  MessageCircleHeart,
  Mail,
  Github,
  Youtube,
  ArrowRight,
} from "lucide-react";
import FeedbackButton from "@/app/_components/feedback-button";

export default function ContactPage() {
  const contactLinks = [
    {
      title: "Discord Community",
      description:
        "Join our Discord community to chat, learn, and grow together",
      icon: MessageCircleHeart,
      href: "https://discord.gg/webdevcody",
      color: "bg-[#5865F2]",
    },
    {
      title: "YouTube Channel",
      description:
        "Subscribe to my channel for web development tutorials and tips",
      icon: Youtube,
      href: "https://youtube.com/@webdevcody",
      color: "bg-red-500",
    },
    {
      title: "GitHub Profile",
      description: "Check out my open source projects and contributions",
      icon: Github,
      href: "https://github.com/webdevcody",
      color: "bg-gray-900 dark:bg-white dark:text-gray-900",
    },
    {
      title: "Email Me",
      description: "Send me an email for business inquiries or questions",
      icon: Mail,
      href: "mailto:webdevcody@gmail.com",
      color: "bg-blue-500",
    },
  ];

  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground">
            Have a question or want to work together? I&apos;d love to hear from
            you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 rounded-2xl blur-xl transform -rotate-2" />
              <div className="relative p-6 bg-background dark:bg-background rounded-xl border border-border/40 overflow-hidden shadow-xl dark:shadow-2xl ring-1 ring-black/5 dark:ring-white/10 flex items-center gap-4 group-hover:border-border/80 transition-all duration-200">
                <div className={`p-3 rounded-lg ${link.color} text-white`}>
                  <link.icon size={24} />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-1 text-foreground flex items-center gap-2">
                    {link.title}
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </h2>
                  <p className="text-muted-foreground">{link.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block">
            <FeedbackButton
              triggerContent={
                <button
                  className="group inline-flex items-center gap-2 px-6 py-3 font-medium 
                  bg-primary text-primary-foreground rounded-lg
                  transition-all duration-200
                  hover:bg-primary-foreground hover:text-primary
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  focus-visible:ring-offset-2 focus-visible:ring-offset-background
                  active:bg-primary-foreground/90 active:scale-[0.98]"
                >
                  <MessageCircleHeart className="w-5 h-5" />
                  <span>Leave a Suggestion</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              }
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
