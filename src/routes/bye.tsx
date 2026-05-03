import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@/components/link";

export const Route = createFileRoute("/bye")({
  head: () => ({ meta: [{ title: "Unsubscribed — webdevcody" }] }),
  component: ByePage,
});

function ByePage() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24 gap-8">
      <h1 className="text-2xl">You{"'"}ve been unsubscribed</h1>
      <p className="text-xl">Sorry to see you go!</p>
      <Link href="/" className="text-blue-400 hover:underline mt-4">
        To Home
      </Link>
    </div>
  );
}
