import { HeaderComponent } from "@/packages/components/headers/04/default-js/Header";
import { HeroSection } from "@/packages/components/hero-section/03/default-js/Hero";

export default function HeaderImplementation() {
  return (
    <div
      className="w-full max-h-[698px] overflow-auto scrollbar-y relative"
      id="targetElemForScroll"
    >
      <HeaderComponent />
      <div className="min-h-[80rem] w-full">
        <HeroSection />
      </div>
    </div>
  );
}
