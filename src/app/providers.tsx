"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { env } from "@/env";
import { ThemeProvider } from "@/components/theme-provider";

const queryClient = new QueryClient();

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <ReCaptchaProvider reCaptchaKey={env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ReCaptchaProvider>
    </ThemeProvider>
  );
}
