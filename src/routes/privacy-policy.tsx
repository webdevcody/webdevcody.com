import { createFileRoute, notFound } from "@tanstack/react-router";
import { Markdown } from "@/components/markdown";
import { getLegalDoc } from "@/server/legal";

export const Route = createFileRoute("/privacy-policy")({
  loader: async () => {
    const doc = await getLegalDoc({ data: "privacy-policy" });
    if (!doc) throw notFound();
    return doc;
  },
  head: () => ({ meta: [{ title: "Privacy Policy — webdevcody" }] }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  const { content } = Route.useLoaderData();
  return (
    <div className="container mx-auto max-w-4xl py-12">
      <article className="prose max-w-2xl pb-10 w-full">
        <Markdown source={content} />
      </article>
    </div>
  );
}
