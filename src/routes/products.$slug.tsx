import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Image } from "@/components/image";
import { Link } from "@/components/link";
import { getProductBySlug, products } from "@/data/products";
import { ProjectCard } from "@/components/project-card";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const product = loaderData?.product;
    return {
      meta: product
        ? [
            { title: `${product.title} — webdevcody` },
            { name: "description", content: product.tagline },
            { property: "og:title", content: product.title },
            { property: "og:description", content: product.tagline },
            ...(product.heroImage
              ? [{ property: "og:image", content: product.heroImage }]
              : []),
          ]
        : [{ title: "Product not found" }],
    };
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { product } = Route.useLoaderData();
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 2);

  return (
    <div className="container mx-auto px-6 pb-24 pt-12 sm:pt-16">
      <Link
        href="/products"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft size={16} />
        Back to products
      </Link>

      <section className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            {product.heroEyebrow ? (
              <span className="eyebrow text-accent">{product.heroEyebrow}</span>
            ) : null}
            {product.status ? (
              <span className="rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                {product.status}
              </span>
            ) : null}
          </div>

          <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl">
            {product.title}
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {product.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:opacity-90"
            >
              {product.ctaLabel ?? "Visit site"}
              <ArrowUpRight size={16} />
            </Link>
            {product.tags && product.tags.length > 0 ? (
              <div className="flex flex-wrap items-center gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-muted/40 px-3 py-1 text-[11px] font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-muted">
          {product.heroImage ? (
            <Image src={product.heroImage} alt={product.title} fill priority />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/30 via-accent/10 to-transparent">
              <span className="font-heading text-8xl font-semibold tracking-tight text-accent/80">
                {product.title.charAt(0)}
              </span>
            </div>
          )}
        </div>
      </section>

      {product.stats && product.stats.length > 0 ? (
        <section className="mt-20 grid grid-cols-1 gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-3 sm:gap-8 sm:p-8">
          {product.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 border-border sm:[&:not(:last-child)]:border-r sm:pr-8"
            >
              <span className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
                {stat.value}
              </span>
              <span className="eyebrow">{stat.label}</span>
            </div>
          ))}
        </section>
      ) : null}

      <section className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col gap-4">
          <span className="eyebrow">About {product.title}</span>
          <h2 className="text-3xl sm:text-4xl">Why people use it</h2>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {product.longDescription}
          </p>
          {product.highlights.length > 0 ? (
            <ul className="flex flex-col gap-3">
              {product.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-base leading-relaxed text-foreground"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 flex-shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      {product.features.length > 0 ? (
        <section className="mt-24">
          <div className="flex flex-col gap-4">
            <span className="eyebrow">Features</span>
            <h2 className="text-3xl sm:text-4xl">Everything built in</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/60 hover:-translate-y-0.5"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {product.faq && product.faq.length > 0 ? (
        <section className="mt-24 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-4">
            <span className="eyebrow">FAQ</span>
            <h2 className="text-3xl sm:text-4xl">Common questions</h2>
          </div>
          <div className="flex flex-col divide-y divide-border border-y border-border">
            {product.faq.map((item) => (
              <details key={item.question} className="group py-5 transition-colors">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-foreground">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-24 overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex flex-col gap-3">
            <span className="eyebrow text-accent">Ready to try it?</span>
            <h2 className="max-w-xl text-balance text-2xl sm:text-3xl">
              Jump into {product.title} and see what you ship today.
            </h2>
          </div>
          <Link
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:opacity-90"
          >
            {product.ctaLabel ?? "Visit site"}
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="mt-24">
          <div className="flex items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <span className="eyebrow">More products</span>
              <h2 className="text-2xl sm:text-3xl">Other things I&apos;ve built</h2>
            </div>
            <Link
              href="/products"
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
            >
              View all →
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {related.map((item) => (
              <ProjectCard key={item.slug} project={item} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
