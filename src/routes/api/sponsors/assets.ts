import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const SponsorAssetInputSchema = z.object({
  sponsorshipId: z.string().min(1),
  companyName: z.string().trim().min(1).max(120),
  companyUrl: z.string().trim().url().max(300),
});

export const Route = createFileRoute("/api/sponsors/assets")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        const {
          getOwnedActiveSponsorship,
          requireSponsorSession,
          SponsorRequestError,
          updateSponsorProfile,
          upsertSponsorAsset,
        } = await import("@/server/sponsors");
        const { assertImageSize, getImageDimensions } = await import(
          "@/lib/sponsors/image-dimensions"
        );

        try {
          const user = await requireSponsorSession(request);
          const formData = await request.formData();
          const input = SponsorAssetInputSchema.parse({
            sponsorshipId: formData.get("sponsorshipId"),
            companyName: formData.get("companyName"),
            companyUrl: formData.get("companyUrl"),
          });

          const sponsorship = await getOwnedActiveSponsorship({
            sponsorshipId: input.sponsorshipId,
            userId: user.id,
          });

          await updateSponsorProfile({
            userId: user.id,
            companyName: input.companyName,
            companyUrl: input.companyUrl,
          });

          const image = formData.get("image");
          if (image instanceof File && image.size > 0) {
            assertImageSize(image.size);

            const buffer = Buffer.from(await image.arrayBuffer());
            const dimensions = getImageDimensions(buffer, image.type);

            if (
              dimensions.width !== sponsorship.width ||
              dimensions.height !== sponsorship.height
            ) {
              throw new SponsorRequestError(
                `${sponsorship.slotTitle} requires a ${sponsorship.width}x${sponsorship.height} image.`,
                400
              );
            }

            await upsertSponsorAsset({
              sponsorshipId: sponsorship.sponsorshipId,
              userId: user.id,
              slotId: sponsorship.slotId,
              fileName: image.name || "sponsor-image",
              mimeType: image.type,
              byteSize: image.size,
              width: dimensions.width,
              height: dimensions.height,
              imageData: buffer,
            });
          }

          return Response.json({ ok: true });
        } catch (error) {
          if (isSponsorRequestError(error)) {
            return Response.json(
              { error: error.message },
              { status: error.status }
            );
          }

          if (error instanceof z.ZodError) {
            return Response.json(
              { error: "Enter a company name and valid company URL." },
              { status: 400 }
            );
          }

          if (error instanceof Error) {
            return Response.json({ error: error.message }, { status: 400 });
          }

          return Response.json(
            { error: "Could not save sponsor details." },
            { status: 500 }
          );
        }
      },
    },
  },
});

function isSponsorRequestError(
  error: unknown
): error is Error & { status: number } {
  return (
    error instanceof Error &&
    "status" in error &&
    typeof error.status === "number"
  );
}
