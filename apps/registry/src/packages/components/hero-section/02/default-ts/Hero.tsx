import Image_1 from "@registry/assets/Images/Image_1.jpg";
import Image_2 from "@registry/assets/Images/Image_2.jpg";
import Image_3 from "@registry/assets/Images/Image_3.jpg";
import Image_4 from "@registry/assets/Images/Image_4.jpg";
import Image_5 from "@registry/assets/Images/Image_5.jpg";
import Image_6 from "@registry/assets/Images/Image_6.jpg";
import Image_7 from "@registry/assets/Images/Image_7.jpg";
import { Button } from "@registry/packages/primitives/buttons/02/default-ts/Button";
import Image from "next/image";

export function Background() {
  return (
    <div className="absolute top-0 left-0 -z-10 h-full w-full bg-white dark:bg-black">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] dark:bg-[rgba(73,89,123,0.5)] opacity-50 blur-[80px]"></div>
    </div>
  );
}

export function HeroSection() {
  return (
    <div className="w-full pt-40 @md:pt-0 @md:h-screen flex flex-col @md:flex-row gap-10 @md:gap-0 justify-center items-center  relative">
      <div className="w-full @md:w-[60%] @lg:1/2 px-10 flex flex-col justify-center items-center @lg:items-start text-center @lg:text-left gap-8">
        <h1 className="text-5xl font-bold text-primary-foreground">
          This is the best library for functional components.
        </h1>
        <span className="text-2xl font-medium text-secondary-foreground">
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Developer Friendly.
        </span>
        <div className="flex gap-8">
          <Button variant="accent" className="w-32">
            Get Started
          </Button>
          <Button variant="ghost" className="w-32 h-full">
            Learn More
          </Button>
        </div>
      </div>
      {/* IMAGES */}
      <div className="w-full h-[40rem] @md:h-full justify-center @md:justify-start @md:items-center overflow-hidden @md:w-[40%] @lg:w-1/2 flex gap-8">
        <div className="mt-20 @md:mt-0 flex flex-col gap-8 relative">
          <div className="w-48 h-68 rounded-md">
            <Image
              src={Image_1}
              alt="hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-48 h-68 rounded-md">
            <Image
              src={Image_2}
              alt="hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 relative">
          <div className="w-48 h-68 rounded-md">
            <Image
              src={Image_3}
              alt="hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-48 h-68 rounded-md">
            <Image
              src={Image_4}
              alt="hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-48 h-68 rounded-md">
            <Image
              src={Image_5}
              alt="hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="mt-14 @md:mt-0 flex flex-col gap-8 relative">
          <div className="w-48 h-68 rounded-md">
            <Image
              src={Image_6}
              alt="hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-48 h-68 rounded-md">
            <Image
              src={Image_7}
              alt="hero"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <Background />
    </div>
  );
}
