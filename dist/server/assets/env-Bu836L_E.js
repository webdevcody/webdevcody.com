import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";
const __vite_import_meta_env__ = { "BASE_URL": "/", "DEV": true, "MODE": "production", "PROD": false, "SSR": true, "TSS_DEV_SERVER": "false", "TSS_DEV_SSR_STYLES_BASEPATH": "/", "TSS_DEV_SSR_STYLES_ENABLED": "true", "TSS_INLINE_CSS_ENABLED": "false", "TSS_ROUTER_BASEPATH": "", "TSS_SERVER_FN_BASE": "/_serverFn/" };
const isServer = typeof window === "undefined";
const env = createEnv({
  server: {
    RECAPTCHA_SECRET: z.string().min(1).optional(),
    MAILING_LIST_ENDPOINT: z.string().min(1).optional(),
    MAILING_LIST_PASSWORD: z.string().min(1).optional(),
    TABLE_NAME: z.string().min(1).optional()
  },
  clientPrefix: "VITE_",
  client: {
    VITE_RECAPTCHA_SITE_KEY: z.string().min(1).optional(),
    VITE_PLANNER_ID: z.string().min(1).optional(),
    VITE_IS_LOCAL: z.string().optional()
  },
  runtimeEnv: isServer ? process.env : __vite_import_meta_env__,
  emptyStringAsUndefined: true,
  skipValidation: true
});
export {
  env as e
};
