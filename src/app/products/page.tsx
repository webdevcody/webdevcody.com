import Image from "next/image";
import Link from "next/link";

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
      <h1 className="text-4xl font-bold text-center mb-12">My Products</h1>
      <p className="text-center mb-12">
        Checkout some of my side projects I&apos;ve built over the years.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-64">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <Link
                href={product.link}
                target="_blank"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
