import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/sponsors/assets/$assetId")({
  server: {
    handlers: {
      GET: async ({
        params,
      }: {
        params: { assetId: string };
      }) => {
        const { getPublicSponsorAsset } = await import("@/server/sponsors");
        const asset = await getPublicSponsorAsset(params.assetId);

        if (!asset) {
          return new Response("Not found", { status: 404 });
        }

        const body = asset.imageData.buffer.slice(
          asset.imageData.byteOffset,
          asset.imageData.byteOffset + asset.imageData.byteLength
        ) as ArrayBuffer;

        return new Response(body, {
          headers: {
            "Content-Type": asset.mimeType,
            "Cache-Control": "public, max-age=300",
            "Content-Disposition": `inline; filename="${sanitizeFileName(
              asset.fileName
            )}"`,
          },
        });
      },
    },
  },
});

function sanitizeFileName(fileName: string) {
  return fileName.replace(/[^a-zA-Z0-9._-]/g, "_");
}
