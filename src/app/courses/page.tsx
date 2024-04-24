import Image from "next/image";

const courses = [
  {
    title:
      "Building an AI Icon Generator using the T3 Stack (Next.js, Prisma, TailwindCSS, Typescript, Dall-E API)",
    href: "https://webdevcody.gumroad.com/l/jipjfm",
    description:
      "In this course we will be building an AI Icon Generator using the T3 Stack (Next.js, Prisma, TailwindCSS, Typescript, Dall-E API).",
    imageUrl: "https://public-files.gumroad.com/tfezbtgffzz06vbrqodzhm27czvp",
  },
];

export default function CoursesPage() {
  return (
    <div className="container mx-auto h-screen py-12 max-w-4xl">
      <h1 className="text-4xl mb-8">My Courses</h1>

      <p className="text-xl mb-8">
        Here is a list of all of my paid courses which you can buy to help learn
        about web development.
      </p>

      {courses.map((course) => (
        <div key={course.title} className="flex gap-8 mb-8">
          <Image
            width="200"
            height="200"
            src={course.imageUrl}
            alt={course.title}
            className="rounded-lg"
          />

          <div>
            <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
            <p className="text-lg mb-4">{course.description}</p>
            <a
              href={course.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-300 text-blue-200"
            >
              View My Course
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
