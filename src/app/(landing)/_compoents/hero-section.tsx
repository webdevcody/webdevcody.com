import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 gap-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold tracking-tight leading-10">
          Teaching My Subscribers How To Code
        </h1>

        <p className="text-2xl">
          Welcome to my personal site where you can find information related to
          my youtube channel, my courses, and how to buy sponsored videos.
        </p>

        <Link
          className="w-fit flex-none rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
          href="/contact"
        >
          Send me a message!
        </Link>
      </div>

      <div>
        <iframe
          className="w-full h-[300px]"
          src="https://www.youtube.com/embed/-lNpF0ACe1Y?si=nUyS2-DCZCw2qj1Z"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
