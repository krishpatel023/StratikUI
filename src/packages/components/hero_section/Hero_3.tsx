import {
  DataDescription,
  IconProps,
  ImplementationNode,
} from "@/utils/constants";
import Image from "next/image";
// import Earth from "@/assets/Images/GlowingEarth.jpg";
import Earth from "@/assets/Images/Earth.png";

function Hero() {
  return (
    <div
      className={`w-full h-screen overflow-hidden flex flex-col @md:flex-row gap-10 @md:gap-0 justify-center items-center  relative`}
    >
      <div className="flex flex-col justify-center items-center text-center gap-8 z-10">
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
          <button className="text-black">Learn More</button>
        </div>
      </div>
      {/* IMAGES */}
      <div className="w-full h-full absolute top-0 left-0">
        <Image
          src={Earth}
          alt="hero"
          className="w-full absolute top-[70%] @md:top-[60%] @lg:top-[50%]"
        />
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
const Code: string = `function Hero() {
  return (
    <div
      className={\`w-full h-screen overflow-hidden flex flex-col @md:flex-row gap-10 @md:gap-0 justify-center items-center  relative\`}
    >
      <div className="flex flex-col justify-center items-center text-center gap-8 z-10">
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
          <button className="text-black">Learn More</button>
        </div>
      </div>
      {/* IMAGES */}
      <div className="w-full h-full absolute top-0 left-0">
        <Image
          src={Earth}
          alt="hero"
          className="w-full absolute top-[70%] @md:top-[60%] @lg:top-[50%]"
        />
      </div>
      <div
        className={\`w-full h-full absolute left-0 top-0 -z-10 overflow-hidden dark:hidden\`}
      >
        <BackgroundLight className={"w-full h-full object-fill"} />
      </div>
      <div
        className={\`w-full h-full absolute left-0 top-0 -z-10 overflow-hidden hidden dark:block \`}
      >
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
  name: "Hero Section",
  description: "This is a default hero section",
  implementation: Implementation,
  component: Hero(),
  version_included: "0.0.2",
  display: true,
};
export default HeroData;
