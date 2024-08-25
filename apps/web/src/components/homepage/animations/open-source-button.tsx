"use client";

import ShineLink from "@/components/ui/Link-Shine";
import { useInternalPostHog } from "@/hooks/useInternalPostHog";
import { Links } from "@/utils/utils";

export default function OpenSourceButton() {
  const { VisitedSocials } = useInternalPostHog();
  return (
    <ShineLink
      className="w-max"
      href={Links.stratikui.github}
      target="_blank"
      rel="noreferrer noopener"
      onPress={() => VisitedSocials("github", "stratikui", "bento-grid-button")}
    >
      View on Github
    </ShineLink>
  );
}
