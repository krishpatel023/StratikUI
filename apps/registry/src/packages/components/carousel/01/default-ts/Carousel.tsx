import { twMerge } from "tailwind-merge";
import { Logo } from "./Logo";

export function Carousel({
  direction = "left",
}: {
  direction?: "left" | "right";
}) {
  return (
    <>
      <div className="max-w-[80rem] h-28 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul
          className={twMerge(
            "flex items-center justify-center md:justify-start [&_li]:mx-8 @md:[&_li]:mx-16",
            direction === "left" ? "animate-infinite-scroll-left" : "animate-infinite-scroll-right",
          )}
        >
          {Logo.map((item, i) => (
            <li key={i} className="p-4 hover:bg-secondary rounded-md">
              <item.logo className="w-10 h-10 text-primary-foreground" />
            </li>
          ))}
        </ul>
        <ul
          className={twMerge(
            "flex items-center justify-center md:justify-start [&_li]:mx-8 @md:[&_li]:mx-16",
            direction === "left" ? "animate-infinite-scroll-left" : "animate-infinite-scroll-right",
          )}
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
