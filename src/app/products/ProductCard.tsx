"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: {
    title: string;
    description: string;
    image: string;
    link: string;
  };
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative group h-[600px]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 rounded-2xl blur-xl transform -rotate-2" />
      <div className="relative h-full bg-background dark:bg-background rounded-xl border border-border/40 overflow-hidden shadow-xl dark:shadow-2xl ring-1 ring-black/5 dark:ring-white/10 flex flex-col">
        <div className="relative h-[300px]">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            {product.title}
          </h2>
          <p className="text-muted-foreground mb-6 flex-1">
            {product.description}
          </p>
          <div>
            <Link
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Learn more about ${product.title} (opens in new tab)`}
              className="group inline-flex items-center gap-2 px-6 py-3 font-medium 
                bg-primary text-primary-foreground rounded-lg
                transition-all duration-200
                hover:bg-primary-foreground hover:text-primary
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                focus-visible:ring-offset-2 focus-visible:ring-offset-background
                active:bg-primary-foreground/90 active:scale-[0.98]
                disabled:pointer-events-none disabled:opacity-50"
            >
              <span>Learn More</span>
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
