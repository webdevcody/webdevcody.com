"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Avatar } from "@/components/avatar";
import { SocialStrip } from "@/components/social-strip";
import { profile } from "@/data/profile";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative container mx-auto px-6 py-20 sm:py-28 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-3">
              <span className="eyebrow">
                {profile.roles.join(" · ")}
              </span>
            </div>

            <div className="flex flex-col gap-6">
              <h1 className="text-balance">
                Hi, I&apos;m{" "}
                <span className="text-accent">
                  {profile.name.split(" ")[0]}
                </span>
                .
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {profile.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={profile.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90"
              >
                <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                Watch on YouTube
              </Link>
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-accent/60 hover:text-accent"
              >
                See my work
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <SocialStrip className="pt-2" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col items-center gap-6 lg:items-end"
          >
            <Avatar
              src={profile.avatar}
              alt={`${profile.name} portrait`}
              size={320}
              className="shadow-2xl shadow-black/40"
            />

            <div className="grid w-full max-w-sm grid-cols-3 gap-3">
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-1 rounded-xl border border-border bg-card px-3 py-3 text-center"
                >
                  <span className="font-serif text-2xl leading-none text-foreground">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
