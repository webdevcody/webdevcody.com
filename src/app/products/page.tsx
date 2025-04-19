import ProductCard from "./ProductCard";

export default function ProductsPage() {
  const products = [
    {
      title: "Project Planner AI",
      description:
        "An intelligent AI assistant that helps you plan, organize, and manage your projects efficiently. Get smart task breakdowns, timelines, and resource allocation suggestions.",
      image: "https://projectplannerai.com/landing/hero1-dark.png",
      link: "https://projectplannerai.com/",
    },
    {
      title: "Icon Generator AI",
      description:
        "Create beautiful, custom icons instantly with AI. Generate consistent icon sets for your applications, websites, or design projects with just a few clicks.",
      image: "https://icongeneratorai.com/static/app.png",
      link: "https://icongeneratorai.com",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-foreground">
        My Products
      </h1>
      <p className="text-center mb-12 text-muted-foreground">
        Checkout some of my side projects I&apos;ve built over the years.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} index={index} />
        ))}
      </div>
    </main>
  );
}
