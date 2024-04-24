import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 gap-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl tracking-tight leading-10 mb-4">
          Are you looking to become a{" "}
          <span className="font-bold">web developer</span>?
        </h1>

        <p className="text-2xl font-thin">
          You&apos;re at the <strong>right place</strong>. This is my personal
          website where you can find information related to my{" "}
          <strong>youtube channel</strong>, <strong>my courses</strong>, and my
          various <strong>products</strong>
          <br />
          <br />
          Feel free to{" "}
          <Link
            className="text-red-400 font-bold hover:underline"
            href="/contact"
          >
            send me a message
          </Link>{" "}
          if you want to contact me directly about needing a{" "}
          <strong>sponsored video</strong> or subscribe to my awesome
          newsletter.
        </p>
      </div>

      <div>
        <iframe
          className="w-full h-[300px] rounded-xl"
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
