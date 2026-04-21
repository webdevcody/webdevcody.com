import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { products } from "@/data/products";

export const metadata = {
  title: "Products",
  description:
    "SaaS products I've built and continue to maintain. From AI-powered video editing to icon generation and project planning.",
};

export default function ProductsPage() {
  return (
    <main className="container mx-auto px-6 py-20 sm:py-24">
      <SectionHeading
        eyebrow="Products"
        title="Things I've built and shipped"
        description="A growing catalog of SaaS products I've built over the years. Each one started as an itch I had to scratch — and became a real business."
      />

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProjectCard key={product.title} project={product} />
        ))}
      </div>
    </main>
  );
}
