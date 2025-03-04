"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2"
        aria-label="Toggle Menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={`w-full h-0.5 bg-black transform transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-black transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-black transform transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-yellow-100"
          >
            <div className="relative w-full h-full flex flex-col items-center">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-8 p-2"
                aria-label="Close Menu"
              >
                <span className="text-2xl font-bold">×</span>
              </button>

              <div className="py-8 flex flex-col items-center w-full space-y-8 bg-yellow-100">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="hover:underline text-sm"
                >
                  HOME
                </Link>
                <Link
                  href="/courses"
                  onClick={() => setIsOpen(false)}
                  className="hover:underline text-sm"
                >
                  COURSES
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="hover:underline text-sm"
                >
                  CONTACT
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
