import { Hero } from "@/components/homepage/Hero";
import { TechnologiesUsed } from "@/components/homepage/TechnologiesUsed";
import { useTheme } from "@/hooks/Theme";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero />
      <TechnologiesUsed />
    </div>
  );
}
