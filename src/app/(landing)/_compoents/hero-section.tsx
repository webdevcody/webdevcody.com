import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative min-h-[calc(100vh-6rem)] flex items-center py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:opacity-20 opacity-10" />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Are you looking to become a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                web developer
              </span>
              ?
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              You&apos;re at the{" "}
              <strong className="text-gray-900 dark:text-white">
                right place
              </strong>
              . This is my personal website where you can find information
              related to my{" "}
              <strong className="text-gray-900 dark:text-white">
                youtube channel
              </strong>
              ,{" "}
              <strong className="text-gray-900 dark:text-white">
                my courses
              </strong>
              , and my various{" "}
              <strong className="text-gray-900 dark:text-white">
                products
              </strong>
              .
            </p>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Feel free to{" "}
              <Link
                className="relative inline-block text-blue-600 dark:text-blue-400 font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-purple-600 dark:after:bg-purple-400 after:bottom-0 after:left-0 after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                href="/contact"
              >
                send me a message
              </Link>{" "}
              if you want to contact me directly about needing a{" "}
              <strong className="text-gray-900 dark:text-white">
                sponsored video
              </strong>{" "}
              or subscribe to my awesome newsletter.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 rounded-2xl blur-xl transform -rotate-2" />
            <div className="relative bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-xl dark:shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/-lNpF0ACe1Y?si=nUyS2-DCZCw2qj1Z"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
