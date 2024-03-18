import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stratik UI",
  description:
    "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Developer Friendly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} scrollbar-vertical`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
