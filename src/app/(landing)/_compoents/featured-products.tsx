import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { products } from "@/data/products";

export default function FeaturedProducts() {
  return (
    <section className="section">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="What I'm building"
            title="Products I ship"
            description="Real SaaS products I've built and continue to maintain. Each one solves a problem I've had myself."
          />
          <Link
            href="/products"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent"
          >
            All products
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProjectCard
              key={product.slug}
              project={product}
              href={`/products/${product.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
