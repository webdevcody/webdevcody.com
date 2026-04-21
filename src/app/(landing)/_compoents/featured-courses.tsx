import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CourseCard } from "@/components/course-card";
import { SectionHeading } from "@/components/section-heading";
import { courses } from "@/data/courses";

export default function FeaturedCourses() {
  const [featured, ...rest] = courses;

  return (
    <section className="section">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Learn with me"
            title="Courses"
            description="In-depth courses that take you from idea to shipped. Hands-on, practical, and focused on what actually matters."
          />
          <Link
            href="/courses"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent"
          >
            All courses
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="mt-12 flex flex-col gap-6">
          {featured ? <CourseCard course={featured} variant="featured" /> : null}
          {rest.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {rest.map((course) => (
                <CourseCard key={course.title} course={course} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
