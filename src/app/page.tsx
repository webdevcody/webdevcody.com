"use client";

import { useReCaptcha } from "next-recaptcha-v3";

export default function Home() {
  const { executeRecaptcha } = useReCaptcha();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>WebDevCody</h1>
      <p>
        TODO: fix all of this; this is the website of a professional, subscribe
        below
      </p>
      Subscribe below yo
      <form
        className="flex gap-2"
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const formData = new FormData(form);

          const token = await executeRecaptcha("form_submit");
          const email = formData.get("email");
          console.log({ email });

          fetch("https://newsletter-api.webdevcody.com/subscriptions", {
            method: "POST",
            body: JSON.stringify({
              email,
              token,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((response) => {
            console.log(response.status);
          });
        }}
      >
        <input
          className="text-black p-2 rounded"
          name="email"
          type="email"
          placeholder="email address"
        />
        <button className="bg-blue-600 rounded p-2">SUBSCRIBE</button>
      </form>
    </main>
  );
}
