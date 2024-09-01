import { twMerge } from "tailwind-merge";

export function Carousel({
  direction = "left",
  className,
  pauseOnHover = false,
  cornerBlur = false,
  children,
  repeat = 3,
}) {
  return (
    <div
      className={twMerge(
        "group flex overflow-hidden p-4 w-full [gap:var(--gap)]",
        cornerBlur &&
          "[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]",
        className,
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={twMerge(
            "w-max flex shrink-0 [gap:var(--gap)]",
            direction === "left" ? "animate-infinite-scroll-left" : "animate-infinite-scroll-right",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
