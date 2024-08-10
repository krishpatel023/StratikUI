import { HeaderComponent } from "@registry/components/headers/04/default-ts/Header";
import { HeroSection } from "@registry/components/hero-section/03/default-ts/Hero";

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
