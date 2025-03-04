import Image from "next/image";

const courses = [
  {
    title:
      "React Challenges Collection - Learn React Through Mini Projects (TypeScript)",
    href: "https://webdevcody.gumroad.com/l/beginner-react-challenges-collection",
    description:
      "A course for beginners trying to learn more about React by solving real world mini challenges using TypeScript.",
    imageUrl: "https://public-files.gumroad.com/ckj5sgzi39k8farc6mq543sf3soo",
  },
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
    <div className="container mx-auto py-12 max-w-4xl px-4">
      <h1 className="text-4xl mb-8">My Courses</h1>

      <p className="text-xl mb-8">
        Here is a list of all of my paid courses which you can buy to help learn
        about web development.
      </p>

      {courses.map((course, index) => (
        <div key={course.title}>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <a
              href={course.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full md:w-[200px] h-[200px] flex-shrink-0 hover:opacity-80 transition-opacity"
            >
              <Image
                fill
                src={course.imageUrl}
                alt={course.title}
                className="rounded-lg object-contain"
                sizes="(max-width: 768px) 100vw, 200px"
              />
            </a>

            <div>
              <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
              <p className="text-lg mb-4">{course.description}</p>
              <a
                href={course.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-500 text-blue-400"
              >
                View My Course
              </a>
            </div>
          </div>
          {index < courses.length - 1 && (
            <hr className="border-gray-700 my-8" />
          )}
        </div>
      ))}
    </div>
  );
}
