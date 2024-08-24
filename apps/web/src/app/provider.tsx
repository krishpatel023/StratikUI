"use client";

import { ThemeProvider } from "@/hooks/Theme";
import { InternalStateProvider } from "@/hooks/useInternalState";

import { useRouter } from "next/navigation";
import { RouterProvider } from "react-aria-components";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

import { env } from "@/env";
import dynamic from "next/dynamic";
const PostHogPageView = dynamic(() => import("../utils/PosthogPageView"), {
  ssr: false,
});

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>["push"]>[1]>;
  }
}

if (
  typeof window !== "undefined" &&
  env.NEXT_PUBLIC_NODE_ENV === "production" &&
  !window.location.host.includes("localhost") &&
  !window.location.host.includes("127.0.0.1")
) {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: env.NEXT_PUBLIC_POSTHOG_HOST,
    capture_pageview: false, // Disable automatic pageview capture, as we capture manually
  });
  // If you want to debug, uncomment the following line
  // posthog.debug();
} else {
  console.info("PostHog: Not initializing as we are in development mode");
}

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <RouterProvider navigate={router.push}>
      <PostHogProvider client={posthog}>
        <PostHogPageView />
        <InternalStateProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </InternalStateProvider>
      </PostHogProvider>
    </RouterProvider>
  );
}
