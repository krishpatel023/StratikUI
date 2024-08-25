"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { usePostHog } from "posthog-js/react";

export default function PostHogPageView(): null {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();

  function PostHogRecordRefs(searchParams: URLSearchParams) {
    const val = searchParams.toString();
    if (val) {
      const ref = val.split("ref=")[1];
      posthog.capture("refs", {
        url: window.origin + pathname,
        referrer: ref,
      });
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: PostHog is not used in this component
  useEffect(() => {
    // Track pageviews
    if (pathname && posthog) {
      const url = window.origin + pathname;
      PostHogRecordRefs(searchParams);
      posthog.capture("$pageview", {
        $current_url: url,
      });
    }
  }, [pathname, searchParams, posthog]);

  return null;
}
