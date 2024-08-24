import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { DEFAULT_THEME } from "@/utils/controllers";
import { Providers } from "./providers";
import Header from "@/ui/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StratikUI Registry",
  description:
    "This is a registry for StratikUI components. It contains all components that are available on the website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge("bg-background dark scrollbar-y", DEFAULT_THEME ? "dark" : null, inter.className)}
        id="theme-toggle"
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
