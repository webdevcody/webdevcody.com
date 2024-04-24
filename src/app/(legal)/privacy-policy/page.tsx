import React from "react";

import { notFound } from "next/navigation";

import { CustomMDX } from "@/components/mdx";
import { getLegal } from "@/lib/posts";

export default function PrivacyPolicyPage() {
  const post = getLegal().find((post) => post.slug === "privacy-policy");

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl py-12">
      <article className="prose max-w-2xl pb-10 w-full">
        <CustomMDX source={post.content} />
      </article>
    </div>
  );
}
