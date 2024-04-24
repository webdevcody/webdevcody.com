"use client";

import { SendEventOnLoad } from "@/components/send-event-on-load";
import Link from "next/link";

export default function ByePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-8">
      <SendEventOnLoad eventKey={"user unsubscribed"} />

      <h1 className="text-2xl">You{"'"}ve been unsubscribed</h1>

      <p className="text-xl">Sorry to see you go! </p>

      <Link href="/" className="text-blue-400 hover:underline mt-4">
        To Home
      </Link>
    </main>
  );
}
