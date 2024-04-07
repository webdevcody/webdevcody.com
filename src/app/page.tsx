"use client";

import { useMutation } from "@tanstack/react-query";
import { useReCaptcha } from "next-recaptcha-v3";

function subscribe({ email, token }: { email: string; token: string }) {
  return fetch("/api/subscriptions", {
    method: "POST",
    body: JSON.stringify({
      email,
      token,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default function Home() {
  const { executeRecaptcha } = useReCaptcha();
  const subscribeMutation = useMutation({
    mutationFn: subscribe,
  });

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
          <form
            className="flex gap-2 mt-8"
            onSubmit={async (e) => {
              e.preventDefault();

              const form = e.target as HTMLFormElement;
              const formData = new FormData(form);

              const token = await executeRecaptcha("form_submit");
              const email = formData.get("email");

              subscribeMutation
                .mutateAsync({
                  email: email as string,
                  token,
                })
                .then(() => {
                  form.reset();
                });
            }}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                className="text-black p-2 rounded w-[320px] placeholder:text-gray-400"
                id="email"
                name="email"
                type="email"
                required
              />
            </div>
            <button
              disabled={subscribeMutation.isPending}
              className="bg-cyan-400 rounded p-2 text-black h-fit self-end"
            >
              {subscribeMutation.isPending ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
          {subscribeMutation.isSuccess && (
            <p className="text-green-500">Thank you for subscribing!</p>
          )}
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
