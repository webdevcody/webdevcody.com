import { CalendarIcon, HandIcon } from "lucide-react";
import Image from "next/image";

export default function NewsletterSection() {
  return (
    <div className="border-2 border-dotted border-gray-900 mt-28 relative bg-cyan-300 drop-shadow-md isolate py-16 sm:py-24 lg:py-16 rounded-2xl">
      <Image
        src="/arrow.png"
        width={100}
        height={100}
        alt="Arrow"
        className="rotate-[160deg] absolute -top-[200px] left-44 z-10"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              Subscribe to my newsletter.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-950">
              If you are interested in getting updates when I publish new
              courses or wanting useful coding tips and tricks, be sure to
              subscribe to my newsletter below!
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-white border-red-400 border px-3.5 py-2.5 text-sm font-semibold hover:text-white text-red-400 shadow-sm hover:bg-red-400 "
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md p-2 ring-1 ring-white/10">
                <CalendarIcon
                  className="h-6 w-6 text-gray-900"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-gray-900">
                Coding Advice
              </dt>
              <dd className="mt-2 leading-7 text-gray-900">
                Periodic emails with coding tips, tricks, and advice you
                won&apos;t find anywhere else
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md p-2 ring-1 ring-white/10">
                <HandIcon
                  className="h-6 w-6 text-gray-900"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-gray-900">Updates</dt>
              <dd className="mt-2 leading-7 text-gray-900">
                When I launch a new course or something important, I can update
                you via email
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
