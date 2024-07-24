import Image_1 from "@/assets/Images/Image_1.jpg";
import Image_2 from "@/assets/Images/Image_2.jpg";
import Image_3 from "@/assets/Images/Image_3.jpg";
import Image_4 from "@/assets/Images/Image_4.jpg";
import Image_5 from "@/assets/Images/Image_5.jpg";
import Image_6 from "@/assets/Images/Image_6.jpg";
import Image_7 from "@/assets/Images/Image_7.jpg";
import { Background } from "@/packages/helper/Background";
import { Button } from "@/packages/primitives/buttons/Button_1";
import Image from "next/image";

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