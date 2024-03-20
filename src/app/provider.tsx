"use client";

import { ThemeProvider } from "@/hooks/Theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
