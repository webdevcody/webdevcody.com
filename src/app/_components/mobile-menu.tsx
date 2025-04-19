"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "My Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="block lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2"
        aria-label="Toggle Menu"
      >
        <div className="w-5 h-4 flex flex-col justify-between">
          <span
            className={`w-full h-0.5 bg-foreground transform transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-foreground transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-foreground transform transition-all duration-300 ${
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
            className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-background"
          >
            <div className="relative w-full h-full flex flex-col items-center">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-8 p-2 text-foreground"
                aria-label="Close Menu"
              >
                <span className="text-2xl font-bold">×</span>
              </button>

              <div className="py-8 flex flex-col items-center w-full space-y-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-foreground hover:text-red-400 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
