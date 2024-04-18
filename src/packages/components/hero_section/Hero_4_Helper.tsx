import Logo from "@/packages/helper/Logo";
import { IconProps } from "@/utils/constants";

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
            <li key={i} className="p-4 hover:bg-s_secondary rounded-md">
              <item.logo className="w-10 h-10 text-s_primary" />
            </li>
          ))}
        </ul>
        <ul
          className={`flex items-center justify-center md:justify-start [&_li]:mx-8 @md:[&_li]:mx-16   ${animateInDirection}`}
        >
          {Logo.map((item, i) => (
            <li key={i} className="p-4 hover:bg-s_secondary rounded-md">
              <item.logo className="w-10 h-10 text-s_primary" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export const CarouselStringTsx: string = `export function Carousel({
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
          className={\`flex items-center justify-center md:justify-start [&_li]:mx-8 @md:[&_li]:mx-16  \${animateInDirection}\`}
        >
          {Logo.map((item, i) => (
            <li key={i} className="p-4 hover:bg-s_secondary rounded-md">
              <item.logo className="w-10 h-10 text-s_primary" />
            </li>
          ))}
        </ul>
        <ul
          className={\`flex items-center justify-center md:justify-start [&_li]:mx-8 @md:[&_li]:mx-16   \${animateInDirection}\`}
        >
          {Logo.map((item, i) => (
            <li key={i} className="p-4 hover:bg-s_secondary rounded-md">
              <item.logo className="w-10 h-10 text-s_primary" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}`;

export const CarouselStringJsx: string = `export function Carousel({
  direction = "left",
}) {
  const animateInDirection =
    direction === "right"
      ? "animate-infinite-scroll-right"
      : "animate-infinite-scroll-left";
  return (
    <>
      <div className="max-w-[80rem] h-28 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul
          className={\`flex items-center justify-center md:justify-start [&_li]:mx-8 @md:[&_li]:mx-16  \${animateInDirection}\`}
        >
          {Logo.map((item, i) => (
            <li key={i} className="p-4 hover:bg-s_secondary rounded-md">
              <item.logo className="w-10 h-10 text-s_primary" />
            </li>
          ))}
        </ul>
        <ul
          className={\`flex items-center justify-center md:justify-start [&_li]:mx-8 @md:[&_li]:mx-16   \${animateInDirection}\`}
        >
          {Logo.map((item, i) => (
            <li key={i} className="p-4 hover:bg-s_secondary rounded-md">
              <item.logo className="w-10 h-10 text-s_primary" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}`;
