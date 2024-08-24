"use client";

import { ThemeProvider } from "@/hooks/Theme";
import { InternalStateProvider } from "@/hooks/useInternalState";

import { useRouter } from "next/navigation";
import { RouterProvider } from "react-aria-components";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

import { env } from "@/env";

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>["push"]>[1]>;
  }
}

if (
  typeof window !== "undefined" &&
  env.NEXT_PUBLIC_NODE_ENV === "production" &&
  // !window.location.host.includes("localhost") &&
  !window.location.host.includes("127.0.0.1")
) {
  console.log("PostHog: Initializing");
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: env.NEXT_PUBLIC_POSTHOG_HOST,
  });
  console.log("PostHog: Initialized");
} else {
  console.info("PostHog: Not initializing as NEXT_PUBLIC_NODE_ENV is :", env.NEXT_PUBLIC_NODE_ENV);
}

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <RouterProvider navigate={router.push}>
      <PostHogProvider client={posthog}>
        <InternalStateProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </InternalStateProvider>
      </PostHogProvider>
    </RouterProvider>
  );
}
