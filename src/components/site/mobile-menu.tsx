"use client";

import { useState } from "react";
import Link from "@/components/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { courses } from "@/data/courses";
import { cn } from "@/lib/utils";

type NavGroup = {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
};

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const navigation: NavGroup[] = [
    { name: "Home", href: "/" },
    {
      name: "Products",
      href: "/products",
      children: products.map((product) => ({
        name: product.title,
        href: `/products/${product.slug}`,
      })),
    },
    {
      name: "Courses",
      href: "/courses",
      children: courses.map((course) => ({
        name: course.shortTitle,
        href: `/courses/${course.slug}`,
      })),
    },
    { name: "Contact", href: "/contact" },
    {
      name: "Submit Video Suggestion",
      href: "https://suggestions.webdevcody.com",
    },
  ];

  const close = () => {
    setIsOpen(false);
    setExpanded(null);
  };

  return (
    <div className="block lg:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2 h-auto"
        aria-label="Toggle Menu"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X size={20} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={20} />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={close}
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-16 left-4 right-4 z-50 bg-background border border-border rounded-xl shadow-2xl overflow-hidden"
            >
              <div className="px-4 py-4 max-h-[80vh] overflow-y-auto">
                <nav className="flex flex-col space-y-1">
                  {navigation.map((item, index) => {
                    const hasChildren =
                      item.children && item.children.length > 0;
                    const isExpanded = expanded === item.name;

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.05,
                          ease: "easeOut",
                        }}
                      >
                        {hasChildren ? (
                          <div className="rounded-lg border border-transparent hover:border-border/50">
                            <button
                              type="button"
                              onClick={() =>
                                setExpanded(isExpanded ? null : item.name)
                              }
                              className="flex w-full items-center justify-between py-3 px-4 text-base font-semibold text-foreground transition-colors"
                              aria-expanded={isExpanded}
                            >
                              {item.name}
                              <ChevronDown
                                size={18}
                                className={cn(
                                  "text-muted-foreground transition-transform duration-200",
                                  isExpanded && "rotate-180"
                                )}
                              />
                            </button>
                            <AnimatePresence initial={false}>
                              {isExpanded ? (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="flex flex-col gap-1 px-2 pb-3">
                                    <Link
                                      href={item.href}
                                      onClick={close}
                                      className="rounded-md px-3 py-2 text-sm font-medium text-accent hover:bg-muted"
                                    >
                                      View all {item.name.toLowerCase()}
                                    </Link>
                                    {item.children!.map((child) => (
                                      <Link
                                        key={child.href}
                                        href={child.href}
                                        onClick={close}
                                        className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                                      >
                                        {child.name}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              ) : null}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={close}
                            className="block py-3 px-4 rounded-lg text-base font-semibold text-foreground hover:bg-muted hover:text-primary transition-all duration-200 border border-transparent hover:border-border/50"
                          >
                            {item.name}
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
