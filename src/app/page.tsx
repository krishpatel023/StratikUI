import { BentoGrid } from "@/components/homepage/BentoGrid";
import Footer from "@/components/homepage/Footer";
import { Hero } from "@/components/homepage/Hero";
import { Stats } from "@/components/homepage/Stats";
import { TechnologiesUsed } from "@/components/homepage/TechnologiesUsed";
import { useTheme } from "@/hooks/Theme";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero />
      <TechnologiesUsed />
      <BentoGrid />
      <Stats />
      <Footer />
    </div>
  );
}
