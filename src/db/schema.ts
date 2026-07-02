import { relations, sql } from "drizzle-orm";
import {
  boolean,
  customType,
  index,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

const bytea = customType<{ data: Buffer; driverData: Buffer }>({
  dataType() {
    return "bytea";
  },
});

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull().default(false),
  image: text("image"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const session = pgTable(
  "session",
  {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
  },
  (table) => ({
    userIdIdx: index("session_user_id_idx").on(table.userId),
  })
);

export const account = pgTable(
  "account",
  {
    id: text("id").primaryKey(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at", {
      withTimezone: true,
    }),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at", {
      withTimezone: true,
    }),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    userIdIdx: index("account_user_id_idx").on(table.userId),
  })
);

export const verification = pgTable(
  "verification",
  {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    identifierIdx: index("verification_identifier_idx").on(table.identifier),
  })
);

export const sponsorSlotTier = pgEnum("sponsor_slot_tier", [
  "main",
  "secondary",
]);

export const sponsorshipStatus = pgEnum("sponsorship_status", [
  "pending_checkout",
  "active",
  "trialing",
  "payment_failed",
  "canceled",
  "incomplete",
  "incomplete_expired",
  "past_due",
  "unpaid",
  "paused",
  "released",
]);

export const sponsorSlots = pgTable(
  "sponsor_slots",
  {
    id: text("id").primaryKey(),
    tier: sponsorSlotTier("tier").notNull(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    position: integer("position").notNull(),
    priceMonthlyCents: integer("price_monthly_cents").notNull(),
    width: integer("width").notNull(),
    height: integer("height").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    positionIdx: uniqueIndex("sponsor_slots_position_idx").on(table.position),
  })
);

export const sponsorAccounts = pgTable(
  "sponsor_accounts",
  {
    userId: text("user_id")
      .primaryKey()
      .references(() => user.id, { onDelete: "cascade" }),
    companyName: text("company_name"),
    companyUrl: text("company_url"),
    contactEmail: text("contact_email"),
    stripeCustomerId: text("stripe_customer_id").unique(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    stripeCustomerIdx: index("sponsor_accounts_stripe_customer_idx").on(
      table.stripeCustomerId
    ),
  })
);

export const sponsorships = pgTable(
  "sponsorships",
  {
    id: text("id").primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    slotId: text("slot_id")
      .notNull()
      .references(() => sponsorSlots.id, { onDelete: "restrict" }),
    status: sponsorshipStatus("status").notNull().default("pending_checkout"),
    stripeCheckoutSessionId: text("stripe_checkout_session_id").unique(),
    stripeSubscriptionId: text("stripe_subscription_id").unique(),
    stripeCustomerId: text("stripe_customer_id"),
    currentPeriodStart: timestamp("current_period_start", { withTimezone: true }),
    currentPeriodEnd: timestamp("current_period_end", { withTimezone: true }),
    cancelAtPeriodEnd: boolean("cancel_at_period_end")
      .notNull()
      .default(false),
    canceledAt: timestamp("canceled_at", { withTimezone: true }),
    checkoutExpiresAt: timestamp("checkout_expires_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    userIdx: index("sponsorships_user_id_idx").on(table.userId),
    slotIdx: index("sponsorships_slot_id_idx").on(table.slotId),
    stripeCustomerIdx: index("sponsorships_stripe_customer_idx").on(
      table.stripeCustomerId
    ),
    activeSlotIdx: uniqueIndex("sponsorships_active_slot_idx")
      .on(table.slotId)
      .where(
        sql`${table.status} in ('pending_checkout', 'active', 'trialing')`
      ),
  })
);

export const sponsorAssets = pgTable(
  "sponsor_assets",
  {
    id: text("id").primaryKey(),
    sponsorshipId: text("sponsorship_id")
      .notNull()
      .references(() => sponsorships.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    slotId: text("slot_id")
      .notNull()
      .references(() => sponsorSlots.id, { onDelete: "restrict" }),
    fileName: text("file_name").notNull(),
    mimeType: text("mime_type").notNull(),
    byteSize: integer("byte_size").notNull(),
    width: integer("width").notNull(),
    height: integer("height").notNull(),
    imageData: bytea("image_data").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    sponsorshipIdx: uniqueIndex("sponsor_assets_sponsorship_id_idx").on(
      table.sponsorshipId
    ),
    slotIdx: index("sponsor_assets_slot_id_idx").on(table.slotId),
  })
);

export const stripeEvents = pgTable("stripe_events", {
  id: text("id").primaryKey(),
  type: text("type").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const userRelations = relations(user, ({ many, one }) => ({
  sessions: many(session),
  accounts: many(account),
  sponsorAccount: one(sponsorAccounts),
  sponsorships: many(sponsorships),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));

export const sponsorAccountRelations = relations(sponsorAccounts, ({ one }) => ({
  user: one(user, {
    fields: [sponsorAccounts.userId],
    references: [user.id],
  }),
}));

export const sponsorSlotRelations = relations(sponsorSlots, ({ many }) => ({
  sponsorships: many(sponsorships),
  assets: many(sponsorAssets),
}));

export const sponsorshipRelations = relations(
  sponsorships,
  ({ one, many }) => ({
    user: one(user, {
      fields: [sponsorships.userId],
      references: [user.id],
    }),
    slot: one(sponsorSlots, {
      fields: [sponsorships.slotId],
      references: [sponsorSlots.id],
    }),
    assets: many(sponsorAssets),
  })
);

export const sponsorAssetRelations = relations(sponsorAssets, ({ one }) => ({
  sponsorship: one(sponsorships, {
    fields: [sponsorAssets.sponsorshipId],
    references: [sponsorships.id],
  }),
  slot: one(sponsorSlots, {
    fields: [sponsorAssets.slotId],
    references: [sponsorSlots.id],
  }),
}));
