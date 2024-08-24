"use client";

import { usePathname } from "next/navigation";
import { usePostHog } from "posthog-js/react";

export interface UseInternalPostHogReturn {
  CopyCodeEvent: (variant: string, provider: string) => void;
  VisitedSocials: (network: "twitter" | "github", category: "stratikui" | "personal") => void;
}

export function useInternalPostHog(): UseInternalPostHogReturn {
  const posthog = usePostHog();
  const pathname = usePathname();

  const CopyCodeEvent = (variant: string, provider: string) => {
    // variant - the name of the function
    // provider - provider/language - react_aria/ts, react_aria/js, default/ts, etc

    if (posthog) {
      const url = `${window.origin}${pathname}#${variant}`;
      posthog.capture("copy_code", {
        url: url,
        variant,
        provider,
      });
    }
  };

  function VisitedSocials(network: "twitter" | "github", category: "stratikui" | "personal") {
    if (posthog) {
      posthog.capture("visited_socials", {
        network,
        category,
        url: `${window.origin}${pathname}`,
      });
    }
  }

  return {
    CopyCodeEvent,
    VisitedSocials,
  };
}
