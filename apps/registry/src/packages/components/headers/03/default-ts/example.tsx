import { Header } from "@/packages/components/headers/03/default-ts/Header";
import { HeroSection } from "@/packages/components/hero-section/03/default-ts/Hero";

export default function HeaderImplementation() {
  return (
    <div className="w-full">
      <Header />
      <div className="min-h-[80rem] w-full">
        <HeroSection />
      </div>
    </div>
  );
}