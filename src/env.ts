import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    TABLE_NAME: z.string().min(1),
    RECAPTCHA_SECRET: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z.string().min(1),
    NEXT_PUBLIC_PLANNER_ID: z.string().min(1),
    NEXT_PUBLIC_IS_LOCAL: z.string().optional(),
  },
  runtimeEnv: {
    RECAPTCHA_SECRET: process.env.RECAPTCHA_SECRET,
    TABLE_NAME: process.env.TABLE_NAME,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    NEXT_PUBLIC_PLANNER_ID: process.env.NEXT_PUBLIC_PLANNER_ID,
    NEXT_PUBLIC_IS_LOCAL: process.env.NEXT_PUBLIC_IS_LOCAL,
  },
});
