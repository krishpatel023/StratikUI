import {
  DataDescription,
  IconProps,
  ImplementationNode,
} from "@/utils/constants";
import Image from "next/image";
import Image_1 from "@/assets/Images/Image_1.jpg";
import Image_2 from "@/assets/Images/Image_2.jpg";
import Image_3 from "@/assets/Images/Image_3.jpg";
import Image_4 from "@/assets/Images/Image_4.jpg";
import Image_5 from "@/assets/Images/Image_5.jpg";
import Image_6 from "@/assets/Images/Image_6.jpg";
import Image_7 from "@/assets/Images/Image_7.jpg";

function Hero() {
  const imageArray = [
    Image_1,
    Image_2,
    Image_3,
    Image_4,
    Image_5,
    Image_6,
    Image_7,
  ];
  return (
    <div
      className={`w-full pt-40 @md:pt-0 @md:h-screen flex flex-col @md:flex-row gap-10 @md:gap-0 justify-center items-center  relative`}
    >
      <div className="w-full @md:w-[60%] @lg:1/2 px-10 flex flex-col justify-center items-center @lg:items-start text-center @lg:text-left gap-8">
        <h1 className="text-5xl font-bold text-s_textPrimary">
          Make the websites in lightspeed using Stratik UI
        </h1>
        <span className="text-2xl font-medium text-s_textSecondary">
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Developer Friendly.
        </span>
        <div className="flex gap-8">
          <button className="w-32 h-10 rounded-md bg-s_accent hover:bg-s_accentLight text-s_textComplementary font-semibold">
            Get Started
          </button>
          <button className="text-s_textPrimary">Learn More</button>
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

      <div
        className={`w-full h-full absolute left-0 top-0 -z-10 overflow-hidden dark:hidden`}
      >
        <BackgroundLight className={"w-full h-full object-fill"} />
      </div>
      <div
        className={`w-full h-full absolute left-0 top-0 -z-10 overflow-hidden hidden dark:block `}
      >
        <BackgroundDark className={"w-full h-full object-fill"} />
      </div>
    </div>
  );
}

const BackgroundLight = ({
  props,
  className,
}: {
  props?: IconProps;
  className?: string;
}) => {
  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-white">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
    </div>
  );
};

const BackgroundDark = ({
  props,
  className,
}: {
  props?: IconProps;
  className?: string;
}) => {
  return (
    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
    </div>
  );
};
const Code: string = `function Hero_1() {
  return (
    <div
      className={\`w-full h-screen flex flex-col justify-center items-center  relative\`}
      data-test="hero"
    >
      <div className="flex flex-col justify-center items-center text-center gap-8">
        <button className="text-s_textPrimary flex gap-2 border-2 border-s_accent rounded-full @lg:px-6 px-4 py-1 ">
          View all the latest components.
          <span className="text-s_accent hidden @lg:block">Read More</span>
        </button>
        <h1 className="text-5xl font-bold  w-[90%] @lg:w-1/2 text-s_textPrimary">
          Make the websites in lightspeed using Stratik UI
        </h1>
        <span className="text-2xl font-medium w-[90%] @lg:w-3/4 text-s_textSecondary">
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Developer Friendly.
        </span>
        <div className="flex gap-8">
          <button className="w-32 h-10 rounded-md bg-s_accent hover:bg-s_accentLight text-s_textComplementary">
            Get Started
          </button>
          <button className="text-s_textPrimary">Learn More</button>
        </div>
      </div>

      <div className=w-full h-full absolute left-0 top-0 -z-10 overflow-hidden group-data-[data-component=dark]/container:hidden">
        <BackgroundLight className={"w-full h-full object-fill"} />
      </div>
      <div className="w-full h-full absolute left-0 top-0 -z-10 overflow-hidden hidden group-data-dark/container:block ">
        <BackgroundDark className={"w-full h-full object-fill"} />
      </div>
    </div>
  );
}`;

const BackgroundString: string = `const BackgroundLight = ({
  props,
  className,
}: {
  props?: IconProps;
  className?: string;
}) => {
  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-white">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
    </div>
  );
};

const BackgroundDark = ({
  props,
  className,
}: {
  props?: IconProps;
  className?: string;
}) => {
  return (
    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
    </div>
  );
};`;

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    title: "Technology Used",
    content: ["tailwind-css"],
  },
  {
    type: "code",
    title: "Code",
    content: Code,
  },
  {
    type: "code",
    title: "Background Used in Code",
    content: BackgroundString,
  },
];

const HeroData: DataDescription = {
  name: "Default Hero Section",
  description: "This is a default hero section",
  implementation: Implementation,
  component: Hero(),
  version_included: "0.0.2",
  display: true,
};
export default HeroData;
