import { Carousel } from "@registry/packages/primitives/carousel/01/default-js/carousel";
import { Logo } from "./Logo";

export default function CarouselImplementation() {
  return (
    <div className="w-full h-[40rem] flex flex-col justify-center items-center gap-8">
      <Carousel direction="left" className="[--gap:8rem]" pauseOnHover cornerBlur>
        {Logo.map((item, i) => (
          <item.logo key={i} className="w-10 h-10 text-primary-foreground" />
        ))}
      </Carousel>
    </div>
  );
}
