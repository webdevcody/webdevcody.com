import { and, asc, desc, eq, gt, inArray, lt, or, sql } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/db";
import {
  sponsorAccounts,
  sponsorAssets,
  sponsorSlots,
  sponsorships,
} from "@/db/schema";
import { auth } from "@/lib/auth";
import {
  ACTIVE_SPONSORSHIP_STATUSES,
  SPONSOR_NAME_PLACEHOLDER,
  SPONSOR_SLOT_DEFINITIONS,
  type SponsorSlotId,
} from "@/lib/sponsors/slots";

export class SponsorRequestError extends Error {
  constructor(
    message: string,
    public readonly status = 400
  ) {
    super(message);
  }
}

const SlotIdSchema = z.enum([
  "main",
  "secondary-1",
  "secondary-2",
  "secondary-3",
  "secondary-4",
]);

export type SponsorPublicSlot = {
  id: SponsorSlotId;
  tier: "main" | "secondary";
  title: string;
  description: string;
  position: number;
  priceMonthlyCents: number;
  width: number;
  height: number;
  availability: "available" | "reserved" | "sponsored";
  sponsor: {
    companyName: string;
    companyUrl: string | null;
    assetUrl: string | null;
  } | null;
};

export type SponsorDashboard = {
  session: {
    user: {
      id: string;
      name: string;
      email: string;
    };
  } | null;
  account: {
    companyName: string | null;
    companyUrl: string | null;
    stripeCustomerId: string | null;
  } | null;
  sponsorships: Array<{
    id: string;
    status: string;
    slotId: SponsorSlotId;
    slotTitle: string;
    priceMonthlyCents: number;
    width: number;
    height: number;
    cancelAtPeriodEnd: boolean;
    currentPeriodEnd: string | null;
    assetId: string | null;
  }>;
};

export async function ensureSponsorSlots() {
  await db
    .insert(sponsorSlots)
    .values(SPONSOR_SLOT_DEFINITIONS.map((slot) => ({ ...slot })))
    .onConflictDoUpdate({
      target: sponsorSlots.id,
      set: {
        tier: sql`excluded.tier`,
        title: sql`excluded.title`,
        description: sql`excluded.description`,
        position: sql`excluded.position`,
        priceMonthlyCents: sql`excluded.price_monthly_cents`,
        width: sql`excluded.width`,
        height: sql`excluded.height`,
        updatedAt: new Date(),
      },
    });
}

export async function releaseExpiredCheckoutHolds() {
  const now = new Date();

  await db
    .update(sponsorships)
    .set({
      status: "incomplete_expired",
      updatedAt: now,
    })
    .where(
      and(
        eq(sponsorships.status, "pending_checkout"),
        lt(sponsorships.checkoutExpiresAt, now)
      )
    );
}

export async function getSponsorPublicSlots(): Promise<SponsorPublicSlot[]> {
  await ensureSponsorSlots();
  await releaseExpiredCheckoutHolds();

  return loadSponsorSlotsWithClaims();
}

export async function getSponsorDashboardForRequest(
  request: Request
): Promise<SponsorDashboard> {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session?.user?.id) {
    return {
      session: null,
      account: null,
      sponsorships: [],
    };
  }

  await ensureSponsorSlots();
  await releaseExpiredCheckoutHolds();

  const [accountRow] = await db
    .select({
      companyName: sponsorAccounts.companyName,
      companyUrl: sponsorAccounts.companyUrl,
      stripeCustomerId: sponsorAccounts.stripeCustomerId,
    })
    .from(sponsorAccounts)
    .where(eq(sponsorAccounts.userId, session.user.id))
    .limit(1);

  const sponsorRows = await db
    .select({
      id: sponsorships.id,
      status: sponsorships.status,
      slotId: sponsorships.slotId,
      slotTitle: sponsorSlots.title,
      priceMonthlyCents: sponsorSlots.priceMonthlyCents,
      width: sponsorSlots.width,
      height: sponsorSlots.height,
      cancelAtPeriodEnd: sponsorships.cancelAtPeriodEnd,
      currentPeriodEnd: sponsorships.currentPeriodEnd,
      assetId: sponsorAssets.id,
    })
    .from(sponsorships)
    .innerJoin(sponsorSlots, eq(sponsorships.slotId, sponsorSlots.id))
    .leftJoin(sponsorAssets, eq(sponsorAssets.sponsorshipId, sponsorships.id))
    .where(eq(sponsorships.userId, session.user.id))
    .orderBy(desc(sponsorships.createdAt));

  return {
    session: {
      user: {
        id: session.user.id,
        name: session.user.name ?? "",
        email: session.user.email ?? "",
      },
    },
    account: accountRow ?? null,
    sponsorships: sponsorRows.map((row) => ({
      id: row.id,
      status: row.status,
      slotId: SlotIdSchema.parse(row.slotId),
      slotTitle: row.slotTitle,
      priceMonthlyCents: row.priceMonthlyCents,
      width: row.width,
      height: row.height,
      cancelAtPeriodEnd: row.cancelAtPeriodEnd,
      currentPeriodEnd: row.currentPeriodEnd?.toISOString() ?? null,
      assetId: row.assetId,
    })),
  };
}

export async function requireSponsorSession(request: Request) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session?.user?.id) {
    throw new SponsorRequestError("Sign in before buying a sponsor slot.", 401);
  }

  return {
    id: session.user.id,
    name: session.user.name ?? "",
    email: session.user.email ?? "",
  };
}

export async function ensureSponsorAccountForUser(userData: {
  id: string;
  email: string;
}) {
  const now = new Date();

  await db
    .insert(sponsorAccounts)
    .values({
      userId: userData.id,
      contactEmail: userData.email,
      updatedAt: now,
    })
    .onConflictDoUpdate({
      target: sponsorAccounts.userId,
      set: {
        contactEmail: userData.email,
        updatedAt: now,
      },
    });
}

export async function getSponsorStripeCustomerId(userId: string) {
  const [accountRow] = await db
    .select({
      stripeCustomerId: sponsorAccounts.stripeCustomerId,
    })
    .from(sponsorAccounts)
    .where(eq(sponsorAccounts.userId, userId))
    .limit(1);

  return accountRow?.stripeCustomerId ?? null;
}

export async function setSponsorStripeCustomerId(
  userId: string,
  stripeCustomerId: string
) {
  await db
    .update(sponsorAccounts)
    .set({
      stripeCustomerId,
      updatedAt: new Date(),
    })
    .where(eq(sponsorAccounts.userId, userId));
}

export async function createPendingSponsorship(input: {
  slotId: string;
  userId: string;
  sponsorAgreementVersion: string;
  sponsorAgreementAcceptedAt: Date;
}) {
  const slotId = SlotIdSchema.parse(input.slotId);

  await ensureSponsorSlots();
  await releaseExpiredCheckoutHolds();

  const now = new Date();
  const checkoutExpiresAt = new Date(now.getTime() + 31 * 60 * 1000);
  const sponsorshipId = crypto.randomUUID();

  try {
    return await db.transaction(async (tx) => {
      const [slot] = await tx
        .select()
        .from(sponsorSlots)
        .where(eq(sponsorSlots.id, slotId))
        .limit(1);

      if (!slot) {
        throw new SponsorRequestError("Sponsor slot not found.", 404);
      }

      const [blocking] = await tx
        .select({ id: sponsorships.id })
        .from(sponsorships)
        .where(
          and(
            eq(sponsorships.slotId, slotId),
            or(
              inArray(sponsorships.status, [...ACTIVE_SPONSORSHIP_STATUSES]),
              and(
                eq(sponsorships.status, "pending_checkout"),
                gt(sponsorships.checkoutExpiresAt, now)
              )
            )
          )
        )
        .limit(1);

      if (blocking) {
        throw new SponsorRequestError(
          "That sponsor slot is already claimed.",
          409
        );
      }

      await tx.insert(sponsorships).values({
        id: sponsorshipId,
        userId: input.userId,
        slotId,
        status: "pending_checkout",
        checkoutExpiresAt,
        sponsorAgreementVersion: input.sponsorAgreementVersion,
        sponsorAgreementAcceptedAt: input.sponsorAgreementAcceptedAt,
        updatedAt: now,
      });

      return {
        sponsorshipId,
        checkoutExpiresAt,
        slot,
      };
    });
  } catch (error) {
    if (error instanceof SponsorRequestError) {
      throw error;
    }

    if (isUniqueConstraintError(error)) {
      throw new SponsorRequestError("That sponsor slot is already claimed.", 409);
    }

    throw error;
  }
}

export async function attachCheckoutSession(input: {
  sponsorshipId: string;
  checkoutSessionId: string;
  userId: string;
}) {
  await db
    .update(sponsorships)
    .set({
      stripeCheckoutSessionId: input.checkoutSessionId,
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(sponsorships.id, input.sponsorshipId),
        eq(sponsorships.userId, input.userId)
      )
    );
}

export async function clearPendingSponsorship(sponsorshipId: string) {
  await db
    .update(sponsorships)
    .set({
      status: "released",
      updatedAt: new Date(),
    })
    .where(eq(sponsorships.id, sponsorshipId));
}

export async function getOwnedActiveSponsorship(input: {
  sponsorshipId: string;
  userId: string;
}) {
  const [row] = await db
    .select({
      sponsorshipId: sponsorships.id,
      slotId: sponsorships.slotId,
      slotTitle: sponsorSlots.title,
      width: sponsorSlots.width,
      height: sponsorSlots.height,
      status: sponsorships.status,
    })
    .from(sponsorships)
    .innerJoin(sponsorSlots, eq(sponsorships.slotId, sponsorSlots.id))
    .where(
      and(
        eq(sponsorships.id, input.sponsorshipId),
        eq(sponsorships.userId, input.userId),
        inArray(sponsorships.status, [...ACTIVE_SPONSORSHIP_STATUSES])
      )
    )
    .limit(1);

  if (!row) {
    throw new SponsorRequestError(
      "Active sponsorship not found for this account.",
      404
    );
  }

  return {
    ...row,
    slotId: SlotIdSchema.parse(row.slotId),
  };
}

export async function updateSponsorProfile(input: {
  userId: string;
  companyName: string;
  companyUrl: string;
}) {
  await db
    .insert(sponsorAccounts)
    .values({
      userId: input.userId,
      companyName: input.companyName,
      companyUrl: input.companyUrl,
      updatedAt: new Date(),
    })
    .onConflictDoUpdate({
      target: sponsorAccounts.userId,
      set: {
        companyName: input.companyName,
        companyUrl: input.companyUrl,
        updatedAt: new Date(),
      },
    });
}

export async function upsertSponsorAsset(input: {
  sponsorshipId: string;
  userId: string;
  slotId: SponsorSlotId;
  fileName: string;
  mimeType: string;
  byteSize: number;
  width: number;
  height: number;
  imageData: Buffer;
}) {
  const assetId = crypto.randomUUID();
  const now = new Date();

  await db
    .insert(sponsorAssets)
    .values({
      id: assetId,
      sponsorshipId: input.sponsorshipId,
      userId: input.userId,
      slotId: input.slotId,
      fileName: input.fileName,
      mimeType: input.mimeType,
      byteSize: input.byteSize,
      width: input.width,
      height: input.height,
      imageData: input.imageData,
      updatedAt: now,
    })
    .onConflictDoUpdate({
      target: sponsorAssets.sponsorshipId,
      set: {
        fileName: input.fileName,
        mimeType: input.mimeType,
        byteSize: input.byteSize,
        width: input.width,
        height: input.height,
        imageData: input.imageData,
        updatedAt: now,
      },
    });
}

export async function getPublicSponsorAsset(assetId: string) {
  const [asset] = await db
    .select({
      imageData: sponsorAssets.imageData,
      mimeType: sponsorAssets.mimeType,
      fileName: sponsorAssets.fileName,
    })
    .from(sponsorAssets)
    .innerJoin(sponsorships, eq(sponsorAssets.sponsorshipId, sponsorships.id))
    .where(
      and(
        eq(sponsorAssets.id, assetId),
        inArray(sponsorships.status, [...ACTIVE_SPONSORSHIP_STATUSES])
      )
    )
    .limit(1);

  return asset ?? null;
}

async function loadSponsorSlotsWithClaims(): Promise<SponsorPublicSlot[]> {
  const now = new Date();
  const slotRows = await db
    .select()
    .from(sponsorSlots)
    .orderBy(asc(sponsorSlots.position));

  const claimRows = await db
    .select({
      sponsorshipId: sponsorships.id,
      slotId: sponsorships.slotId,
      status: sponsorships.status,
      companyName: sponsorAccounts.companyName,
      companyUrl: sponsorAccounts.companyUrl,
      assetId: sponsorAssets.id,
    })
    .from(sponsorships)
    .leftJoin(sponsorAccounts, eq(sponsorAccounts.userId, sponsorships.userId))
    .leftJoin(sponsorAssets, eq(sponsorAssets.sponsorshipId, sponsorships.id))
    .where(
      or(
        inArray(sponsorships.status, [...ACTIVE_SPONSORSHIP_STATUSES]),
        and(
          eq(sponsorships.status, "pending_checkout"),
          gt(sponsorships.checkoutExpiresAt, now)
        )
      )
    );

  const claimBySlot = new Map<string, (typeof claimRows)[number]>();
  for (const claim of claimRows) {
    const existing = claimBySlot.get(claim.slotId);
    if (!existing || isActiveStatus(claim.status)) {
      claimBySlot.set(claim.slotId, claim);
    }
  }

  return slotRows.map((slot) => {
    const claim = claimBySlot.get(slot.id);
    const active = claim ? isActiveStatus(claim.status) : false;

    return {
      id: SlotIdSchema.parse(slot.id),
      tier: slot.tier,
      title: slot.title,
      description: slot.description,
      position: slot.position,
      priceMonthlyCents: slot.priceMonthlyCents,
      width: slot.width,
      height: slot.height,
      availability: !claim ? "available" : active ? "sponsored" : "reserved",
      sponsor:
        claim && active
          ? {
              companyName: claim.companyName || SPONSOR_NAME_PLACEHOLDER,
              companyUrl: claim.companyUrl,
              assetUrl: claim.assetId
                ? `/api/sponsors/assets/${claim.assetId}`
                : null,
            }
          : null,
    };
  });
}

function isActiveStatus(status: string) {
  return (ACTIVE_SPONSORSHIP_STATUSES as readonly string[]).includes(status);
}

function isUniqueConstraintError(error: unknown) {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "23505"
  );
}
