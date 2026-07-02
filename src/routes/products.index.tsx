import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { products } from "@/data/products";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — webdevcody" },
      {
        name: "description",
        content:
          "Products and apps I've built and continue to maintain. From AI-powered video editing to developer tools, diagramming, and icon generation.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div className="container mx-auto px-6 py-20 sm:py-24">
      <SectionHeading
        eyebrow="Products"
        title="Things I've built and shipped"
        description="A growing catalog of products and apps I've built over the years. Each one started as an itch I had to scratch — and became something real."
      />
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProjectCard
            key={product.slug}
            project={product}
            href={`/products/${product.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
