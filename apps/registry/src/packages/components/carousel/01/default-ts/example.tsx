import { Carousel } from "@registry/packages/components/carousel/01/default-ts/Carousel";

export default function CarouselImplementation() {
	return (
		<div className="w-full h-[40rem] flex flex-col justify-center items-center gap-8">
			<Carousel direction="left" />
			<Carousel direction="right" />
		</div>
	);
}
