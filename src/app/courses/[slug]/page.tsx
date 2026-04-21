import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import { getCourseBySlug, courses } from "@/data/courses";
import { CourseCard } from "@/components/course-card";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const course = getCourseBySlug(params.slug);
  if (!course) return { title: "Course not found" };
  return {
    title: course.shortTitle,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      images: course.heroImage ? [course.heroImage] : undefined,
    },
  };
}

export default function CourseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const course = getCourseBySlug(params.slug);
  if (!course) notFound();

  const related = courses.filter((c) => c.slug !== course.slug).slice(0, 2);

  return (
    <main className="container mx-auto px-6 pb-24 pt-12 sm:pt-16">
      <Link
        href="/courses"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft size={16} />
        Back to courses
      </Link>

      <section className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            {course.heroEyebrow ? (
              <span className="eyebrow text-accent">{course.heroEyebrow}</span>
            ) : null}
            {course.platform ? (
              <span className="rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                {course.platform}
              </span>
            ) : null}
            {course.featured ? (
              <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-accent">
                Featured
              </span>
            ) : null}
          </div>

          <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl">
            {course.shortTitle}
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {course.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:opacity-90"
            >
              {course.ctaLabel ?? "Enroll"}
              <ArrowUpRight size={16} />
            </Link>
            {course.price ? (
              <span className="text-sm font-medium text-muted-foreground">
                {course.price}
              </span>
            ) : null}
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-muted">
          {course.heroImage ? (
            <Image
              src={course.heroImage}
              alt={course.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/30 via-accent/10 to-transparent">
              <span className="font-heading text-8xl font-semibold tracking-tight text-accent/80">
                {course.shortTitle.charAt(0)}
              </span>
            </div>
          )}
        </div>
      </section>

      {course.stats && course.stats.length > 0 ? (
        <section className="mt-20 grid grid-cols-1 gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-3 sm:gap-8 sm:p-8">
          {course.stats.map((stat) => (
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
          <span className="eyebrow">About the course</span>
          <h2 className="text-3xl sm:text-4xl">What you&apos;ll get</h2>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {course.longDescription}
          </p>
          {course.highlights.length > 0 ? (
            <ul className="flex flex-col gap-3">
              {course.highlights.map((highlight) => (
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

      {course.outcomes.length > 0 ? (
        <section className="mt-24">
          <div className="flex flex-col gap-4">
            <span className="eyebrow">Outcomes</span>
            <h2 className="text-3xl sm:text-4xl">
              What you&apos;ll be able to do
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {course.outcomes.map((outcome, index) => (
              <div
                key={outcome.title}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/60 hover:-translate-y-0.5"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  {outcome.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {course.faq && course.faq.length > 0 ? (
        <section className="mt-24 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-4">
            <span className="eyebrow">FAQ</span>
            <h2 className="text-3xl sm:text-4xl">Common questions</h2>
          </div>
          <div className="flex flex-col divide-y divide-border border-y border-border">
            {course.faq.map((item) => (
              <details
                key={item.question}
                className="group py-5 transition-colors"
              >
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
            <span className="eyebrow text-accent">Ready to level up?</span>
            <h2 className="max-w-xl text-balance text-2xl sm:text-3xl">
              Start {course.shortTitle} and build the skill that pays rent.
            </h2>
          </div>
          <Link
            href={course.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:opacity-90"
          >
            {course.ctaLabel ?? "Enroll"}
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="mt-24">
          <div className="flex items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <span className="eyebrow">More courses</span>
              <h2 className="text-2xl sm:text-3xl">Keep learning</h2>
            </div>
            <Link
              href="/courses"
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
            >
              View all →
            </Link>
          </div>
          <div className="mt-8 flex flex-col gap-6">
            {related.map((item) => (
              <CourseCard key={item.slug} course={item} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
