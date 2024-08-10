import { Carousel } from "@registry/components/carousel/01/default-js/Carousel";

export default function CarouselImplementation() {
  return (
    <div className="w-full h-[40rem] flex flex-col justify-center items-center gap-8">
      <Carousel direction="left" />
      <Carousel direction="right" />
    </div>
  );
}
