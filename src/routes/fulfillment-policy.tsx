import { createFileRoute, notFound } from "@tanstack/react-router";
import { Markdown } from "@/components/markdown";
import { getLegalDoc } from "@/server/legal";

export const Route = createFileRoute("/fulfillment-policy")({
  loader: async () => {
    const doc = await getLegalDoc({ data: "fulfillment-policy" });
    if (!doc) throw notFound();
    return doc;
  },
  head: () => ({ meta: [{ title: "Fulfillment Policy — webdevcody" }] }),
  component: FulfillmentPage,
});

function FulfillmentPage() {
  const { content } = Route.useLoaderData();
  return (
    <div className="container mx-auto max-w-4xl py-12 min-h-screen">
      <article className="prose max-w-2xl pb-10 w-full">
        <Markdown source={content} />
      </article>
    </div>
  );
}
