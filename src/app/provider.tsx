"use client";

import { ThemeProvider } from "@/hooks/Theme";
import { InternalStateProvider } from "@/hooks/useInternalState";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <InternalStateProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </InternalStateProvider>
  );
}
