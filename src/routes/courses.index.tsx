import { createFileRoute } from "@tanstack/react-router";
import { CourseCard } from "@/components/course-card";
import { SectionHeading } from "@/components/section-heading";
import { courses } from "@/data/courses";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title: "Courses — webdevcody" },
      {
        name: "description",
        content:
          "Hands-on, practical courses that take you from zero to shipping — covering AI agents, React, and building real products with modern stacks.",
      },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  const [featured, ...rest] = courses;
  return (
    <div className="container mx-auto px-6 py-20 sm:py-24">
      <SectionHeading
        eyebrow="Courses"
        title="Learn by building something real"
        description="I only make courses I wish existed when I was learning. Practical, opinionated, and focused on shipping."
      />
      <div className="mt-16 flex flex-col gap-8">
        {featured ? (
          <CourseCard
            course={featured}
            variant="featured"
            href={`/courses/${featured.slug}`}
          />
        ) : null}
        {rest.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {rest.map((course) => (
              <CourseCard
                key={course.slug}
                course={course}
                href={`/courses/${course.slug}`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
