CREATE TYPE "public"."sponsor_slot_tier" AS ENUM('main', 'secondary');--> statement-breakpoint
CREATE TYPE "public"."sponsorship_status" AS ENUM('pending_checkout', 'active', 'trialing', 'payment_failed', 'canceled', 'incomplete', 'incomplete_expired', 'past_due', 'unpaid', 'paused', 'released');--> statement-breakpoint
CREATE TABLE "account" (
	"id" text PRIMARY KEY NOT NULL,
	"account_id" text NOT NULL,
	"provider_id" text NOT NULL,
	"user_id" text NOT NULL,
	"access_token" text,
	"refresh_token" text,
	"id_token" text,
	"access_token_expires_at" timestamp with time zone,
	"refresh_token_expires_at" timestamp with time zone,
	"scope" text,
	"password" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "session" (
	"id" text PRIMARY KEY NOT NULL,
	"expires_at" timestamp with time zone NOT NULL,
	"token" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"ip_address" text,
	"user_agent" text,
	"user_id" text NOT NULL,
	CONSTRAINT "session_token_unique" UNIQUE("token")
);
--> statement-breakpoint
CREATE TABLE "sponsor_accounts" (
	"user_id" text PRIMARY KEY NOT NULL,
	"company_name" text,
	"company_url" text,
	"contact_email" text,
	"stripe_customer_id" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "sponsor_accounts_stripe_customer_id_unique" UNIQUE("stripe_customer_id")
);
--> statement-breakpoint
CREATE TABLE "sponsor_assets" (
	"id" text PRIMARY KEY NOT NULL,
	"sponsorship_id" text NOT NULL,
	"user_id" text NOT NULL,
	"slot_id" text NOT NULL,
	"file_name" text NOT NULL,
	"mime_type" text NOT NULL,
	"byte_size" integer NOT NULL,
	"width" integer NOT NULL,
	"height" integer NOT NULL,
	"image_data" bytea NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "sponsor_slots" (
	"id" text PRIMARY KEY NOT NULL,
	"tier" "sponsor_slot_tier" NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"position" integer NOT NULL,
	"price_monthly_cents" integer NOT NULL,
	"width" integer NOT NULL,
	"height" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "sponsorships" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"slot_id" text NOT NULL,
	"status" "sponsorship_status" DEFAULT 'pending_checkout' NOT NULL,
	"stripe_checkout_session_id" text,
	"stripe_subscription_id" text,
	"stripe_customer_id" text,
	"current_period_start" timestamp with time zone,
	"current_period_end" timestamp with time zone,
	"cancel_at_period_end" boolean DEFAULT false NOT NULL,
	"canceled_at" timestamp with time zone,
	"checkout_expires_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "sponsorships_stripe_checkout_session_id_unique" UNIQUE("stripe_checkout_session_id"),
	CONSTRAINT "sponsorships_stripe_subscription_id_unique" UNIQUE("stripe_subscription_id")
);
--> statement-breakpoint
CREATE TABLE "stripe_events" (
	"id" text PRIMARY KEY NOT NULL,
	"type" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"email_verified" boolean DEFAULT false NOT NULL,
	"image" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "verification" (
	"id" text PRIMARY KEY NOT NULL,
	"identifier" text NOT NULL,
	"value" text NOT NULL,
	"expires_at" timestamp with time zone NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
INSERT INTO "sponsor_slots" (
	"id",
	"tier",
	"title",
	"description",
	"position",
	"price_monthly_cents",
	"width",
	"height"
) VALUES
	('main', 'main', 'Main Sponsor', 'Always displayed on live streams and featured first.', 1, 500000, 1920, 600),
	('secondary-1', 'secondary', 'Sponsor Slot 1', 'Rotates through the live stream sponsor carousel.', 2, 250000, 1200, 300),
	('secondary-2', 'secondary', 'Sponsor Slot 2', 'Rotates through the live stream sponsor carousel.', 3, 250000, 1200, 300),
	('secondary-3', 'secondary', 'Sponsor Slot 3', 'Rotates through the live stream sponsor carousel.', 4, 250000, 1200, 300),
	('secondary-4', 'secondary', 'Sponsor Slot 4', 'Rotates through the live stream sponsor carousel.', 5, 250000, 1200, 300)
ON CONFLICT ("id") DO UPDATE SET
	"tier" = excluded."tier",
	"title" = excluded."title",
	"description" = excluded."description",
	"position" = excluded."position",
	"price_monthly_cents" = excluded."price_monthly_cents",
	"width" = excluded."width",
	"height" = excluded."height",
	"updated_at" = now();
--> statement-breakpoint
ALTER TABLE "account" ADD CONSTRAINT "account_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "session" ADD CONSTRAINT "session_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sponsor_accounts" ADD CONSTRAINT "sponsor_accounts_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sponsor_assets" ADD CONSTRAINT "sponsor_assets_sponsorship_id_sponsorships_id_fk" FOREIGN KEY ("sponsorship_id") REFERENCES "public"."sponsorships"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sponsor_assets" ADD CONSTRAINT "sponsor_assets_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sponsor_assets" ADD CONSTRAINT "sponsor_assets_slot_id_sponsor_slots_id_fk" FOREIGN KEY ("slot_id") REFERENCES "public"."sponsor_slots"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sponsorships" ADD CONSTRAINT "sponsorships_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sponsorships" ADD CONSTRAINT "sponsorships_slot_id_sponsor_slots_id_fk" FOREIGN KEY ("slot_id") REFERENCES "public"."sponsor_slots"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "account_user_id_idx" ON "account" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "session_user_id_idx" ON "session" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "sponsor_accounts_stripe_customer_idx" ON "sponsor_accounts" USING btree ("stripe_customer_id");--> statement-breakpoint
CREATE UNIQUE INDEX "sponsor_assets_sponsorship_id_idx" ON "sponsor_assets" USING btree ("sponsorship_id");--> statement-breakpoint
CREATE INDEX "sponsor_assets_slot_id_idx" ON "sponsor_assets" USING btree ("slot_id");--> statement-breakpoint
CREATE UNIQUE INDEX "sponsor_slots_position_idx" ON "sponsor_slots" USING btree ("position");--> statement-breakpoint
CREATE INDEX "sponsorships_user_id_idx" ON "sponsorships" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "sponsorships_slot_id_idx" ON "sponsorships" USING btree ("slot_id");--> statement-breakpoint
CREATE INDEX "sponsorships_stripe_customer_idx" ON "sponsorships" USING btree ("stripe_customer_id");--> statement-breakpoint
CREATE UNIQUE INDEX "sponsorships_active_slot_idx" ON "sponsorships" USING btree ("slot_id") WHERE "sponsorships"."status" in ('pending_checkout', 'active', 'trialing');--> statement-breakpoint
CREATE INDEX "verification_identifier_idx" ON "verification" USING btree ("identifier");
