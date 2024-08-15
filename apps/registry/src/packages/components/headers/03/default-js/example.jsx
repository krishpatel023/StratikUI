import { Header } from "@registry/packages/components/headers/03/default-js/Header";
import { HeroSection } from "@registry/packages/components/hero-section/03/default-js/Hero";

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
