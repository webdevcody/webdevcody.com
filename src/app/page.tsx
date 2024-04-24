"use client";

import { SubscribeForm } from "./(landing)/_compoents/subscribe-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="grid grid-col-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl">Happy Coding!</h1>
          <p className="text-2xl">
            I{"'"}m Cody, a software engineer and content creator. My goal is to
            help teach how to code and build things on the web.
          </p>
          Subscribe to my newsletter to get updates on new content and projects.
          <SubscribeForm />
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
    </main>
  );
}
