import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Providers } from "./provider";
import { DEFAULT_MODE } from "@/utils/utils";
import { flattenData } from "@/scripts/FlattenData";

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
  const data = flattenData();
  return (
    <html lang="en">
      <body
        className={`${inter.className} scrollbar-vertical bg-white dark:bg-black ${DEFAULT_MODE ? "dark" : null}`}
        id="theme-toggle"
      >
        <Providers>
          <Header data={data} />
          {children}
        </Providers>
      </body>
    </html>
  );
}