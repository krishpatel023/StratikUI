import Logo from "@/packages/helper/Logo";

export function Carousel({
  direction = "left",
}: {
  direction?: "left" | "right";
}) {
  const animateInDirection =
    direction === "right"
      ? "animate-infinite-scroll-right"
      : "animate-infinite-scroll-left";
  return (
    <>
      <div className="max-w-[80rem] h-28 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul
          className={`flex items-center justify-center md:justify-start [&_li]:mx-8 @md:[&_li]:mx-16  ${animateInDirection}`}
        >
          {Logo.map((item, i) => (
            <li key={i} className="p-4 hover:bg-secondary rounded-md">
              <item.logo className="w-10 h-10 text-primary-foreground" />
            </li>
          ))}
        </ul>
        <ul
          className={`flex items-center justify-center md:justify-start [&_li]:mx-8 @md:[&_li]:mx-16   ${animateInDirection}`}
        >
          {Logo.map((item, i) => (
            <li key={i} className="p-4 hover:bg-secondary rounded-md">
              <item.logo className="w-10 h-10 text-primary-foreground" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function CarouselImplementation() {
  return (
    <div className="w-full h-[40rem] flex flex-col justify-center items-center gap-8">
      <Carousel direction="left" />
      <Carousel direction="right" />
    </div>
  );
}

const TailwindConfigString: string = `import type { Config } from "tailwindcss";
const config: Config = {
  //...
  theme: {
    extend: {
      //...
      animation: {
        "infinite-scroll-left": "infinite-scroll-left 50s linear infinite",
        "infinite-scroll-right": "infinite-scroll-right 50s linear infinite",
      },
      keyframes: {
        "infinite-scroll-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0%)" },
        },
      },
    },
  },
};
export default config;`;

const TailwindConfigStringJsx: string = `const config = {
  //...
  theme: {
    extend: {
      //...
      animation: {
        "infinite-scroll-left": "infinite-scroll-left 50s linear infinite",
        "infinite-scroll-right": "infinite-scroll-right 50s linear infinite",
      },
      keyframes: {
        "infinite-scroll-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0%)" },
        },
      },
    },
  },
};
export default config;`;
