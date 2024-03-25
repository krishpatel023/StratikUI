import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//FOR COMPONENTS
import "./components.css";
import Header from "@/components/Header";
import { Providers } from "./provider";
import { DEFAULT_MODE } from "@/utils/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stratik UI",
  description:
    "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Developer Friendly.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} scrollbar-vertical bg-background ${DEFAULT_MODE ? "dark" : null}`}
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
