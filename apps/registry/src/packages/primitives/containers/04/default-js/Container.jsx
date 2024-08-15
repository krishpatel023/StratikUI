import { twMerge } from "tailwind-merge";

export function ConicGradientContainer({ children, direction = "clockwise" }) {
  return (
    <div className="p-[2px] relative overflow-hidden rounded-2xl bg-primary text-secondary-foreground  -z-10">
      <span
        className={twMerge(
          "bg-[conic-gradient(var(--tw-gradient-stops))] absolute left-[-25%] top-[-25%] min-h-[150%] min-w-[150%] animate-border-spin-anticlockwise -z-[5]",
          direction === "clockwise"
            ? "from-transparent via-transparent to-blue-600/70 dark:to-blue-400/30 animate-border-spin-clockwise"
            : "from-blue-600/70 dark:from-blue-400/30 via-transparent to-transparent animate-border-spin-anticlockwise"
        )}
      ></span>
      <div className="min-w-full min-h-full z-20 rounded-[inherit] bg-background">
        {children}
      </div>
    </div>
  );
}
