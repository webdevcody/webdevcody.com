import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { env } from "@/env";
import { verifyRecaptcha } from "@/services/captcha";

const InputSchema = z.object({
  token: z.string().min(1).optional(),
  email: z.string().email(),
});

export const subscribeAction = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => InputSchema.parse(d))
  .handler(async ({ data }) => {
    if (env.RECAPTCHA_SECRET) {
      if (!data.token) {
        throw new Error("recaptcha token missing");
      }
      await verifyRecaptcha(data.token, env.RECAPTCHA_SECRET);
    }
    if (env.MAILING_LIST_ENDPOINT && env.MAILING_LIST_PASSWORD) {
      const params = new URLSearchParams();
      params.append("email", data.email);
      await fetch(env.MAILING_LIST_ENDPOINT, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.MAILING_LIST_PASSWORD}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });
    }
  });
