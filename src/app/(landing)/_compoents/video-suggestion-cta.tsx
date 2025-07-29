import Link from "next/link";
import { motion } from "framer-motion";

export default function VideoSuggestionCTA() {
  return (
    <section className="mb-16 py-16 px-4 border-t border-b border-dashed">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have a Video Idea?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I&apos;m always looking for new content ideas! If you have a
            suggestion for a video topic, tutorial, or project you&apos;d like
            to see covered, let me know.
          </p>
          <Link
            href="https://suggestions.webdevcody.com"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Submit Video Suggestion
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
