"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const courses = [
  {
    title:
      "React Challenges Collection - Learn React Through Mini Projects (TypeScript)",
    href: "https://webdevcody.gumroad.com/l/beginner-react-challenges-collection",
    description:
      "A course for beginners trying to learn more about React by solving real world mini challenges using TypeScript.",
    imageUrl: "https://public-files.gumroad.com/ckj5sgzi39k8farc6mq543sf3soo",
  },
  {
    title:
      "Building an AI Icon Generator using the T3 Stack (Next.js, Prisma, TailwindCSS, Typescript, Dall-E API)",
    href: "https://webdevcody.gumroad.com/l/jipjfm",
    description:
      "In this course we will be building an AI Icon Generator using the T3 Stack (Next.js, Prisma, TailwindCSS, Typescript, Dall-E API).",
    imageUrl: "https://public-files.gumroad.com/tfezbtgffzz06vbrqodzhm27czvp",
  },
];

export default function CoursesPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-4 text-foreground">
        My Courses
      </h1>
      <p className="text-xl text-center mb-12 text-muted-foreground">
        Here is a list of all of my paid courses which you can buy to help learn
        about web development.
      </p>

      <div className="grid gap-8 max-w-5xl mx-auto">
        {courses.map((course, index) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 rounded-2xl blur-xl transform -rotate-2" />
            <div className="relative bg-background dark:bg-background rounded-xl border border-border/40 overflow-hidden shadow-xl dark:shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
              <div className="flex flex-col md:flex-row gap-8 p-6">
                <div className="relative w-full md:w-[300px] h-[200px] flex-shrink-0">
                  <Image
                    fill
                    src={course.imageUrl}
                    alt={course.title}
                    className="rounded-lg object-contain"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">
                    {course.title}
                  </h2>
                  <p className="text-lg mb-6 text-muted-foreground flex-1">
                    {course.description}
                  </p>
                  <div>
                    <a
                      href={course.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View course: ${course.title} (opens in new tab)`}
                      className="group inline-flex items-center gap-2 px-6 py-3 font-medium 
                        bg-primary text-primary-foreground rounded-lg
                        transition-all duration-200
                        hover:bg-primary-foreground hover:text-primary
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                        focus-visible:ring-offset-2 focus-visible:ring-offset-background
                        active:bg-primary-foreground/90 active:scale-[0.98]
                        disabled:pointer-events-none disabled:opacity-50"
                    >
                      <span>View Course</span>
                      <ArrowRight
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
