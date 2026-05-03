import { c as createServerRpc } from "./createServerRpc-D_-6bKnO.js";
import { z } from "zod";
import { e as env } from "./env-Bu836L_E.js";
import { c as createServerFn } from "../server.js";
import "@t3-oss/env-core";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "react";
import "@tanstack/react-router";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
async function verifyRecaptcha(token, secret) {
  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`
    }
  );
  const json = await response.json();
  if (!json.success) {
    throw new Error("invalid recaptcha token");
  }
  if (json.score < 0.5) {
    throw new Error("recaptcha score too low");
  }
}
const InputSchema = z.object({
  token: z.string().min(1),
  email: z.string().email()
});
const subscribeAction_createServerFn_handler = createServerRpc({
  id: "0d37e1c35a6b3bdafec78b478852240bf28e763acc9df8cf34fa6aa95c5ad3f5",
  name: "subscribeAction",
  filename: "src/server/subscribe.ts"
}, (opts) => subscribeAction.__executeServer(opts));
const subscribeAction = createServerFn({
  method: "POST"
}).inputValidator((d) => InputSchema.parse(d)).handler(subscribeAction_createServerFn_handler, async ({
  data
}) => {
  if (env.RECAPTCHA_SECRET) {
    await verifyRecaptcha(data.token, env.RECAPTCHA_SECRET);
  }
  if (env.MAILING_LIST_ENDPOINT && env.MAILING_LIST_PASSWORD) {
    const params = new URLSearchParams();
    params.append("email", data.email);
    await fetch(env.MAILING_LIST_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.MAILING_LIST_PASSWORD}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: params.toString()
    });
  }
});
export {
  subscribeAction_createServerFn_handler
};
