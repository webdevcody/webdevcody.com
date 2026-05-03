import { createFileRoute, notFound } from "@tanstack/react-router";
import { Markdown } from "@/components/markdown";
import { getLegalDoc } from "@/server/legal";

export const Route = createFileRoute("/terms-of-service")({
  loader: async () => {
    const doc = await getLegalDoc({ data: "terms-of-service" });
    if (!doc) throw notFound();
    return doc;
  },
  head: () => ({ meta: [{ title: "Terms of Service — webdevcody" }] }),
  component: TermsPage,
});

function TermsPage() {
  const { content } = Route.useLoaderData();
  return (
    <div className="container mx-auto max-w-4xl py-12">
      <article className="prose max-w-2xl pb-10 w-full">
        <Markdown source={content} />
      </article>
    </div>
  );
}
