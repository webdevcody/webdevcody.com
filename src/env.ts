import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

const isServer = typeof window === "undefined";

export const env = createEnv({
  server: {
    RECAPTCHA_SECRET: z.string().min(1).optional(),
    MAILING_LIST_ENDPOINT: z.string().min(1).optional(),
    MAILING_LIST_PASSWORD: z.string().min(1).optional(),
    TABLE_NAME: z.string().min(1).optional(),
  },
  clientPrefix: "VITE_",
  client: {
    VITE_RECAPTCHA_SITE_KEY: z.string().min(1).optional(),
    VITE_IS_LOCAL: z.string().optional(),
  },
  runtimeEnv: isServer
    ? (process.env as Record<string, string | undefined>)
    : (import.meta.env as unknown as Record<string, string | undefined>),
  emptyStringAsUndefined: true,
  skipValidation: true,
});
