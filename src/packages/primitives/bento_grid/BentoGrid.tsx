import { twMerge } from "tailwind-merge";

function BentoGrid({
  children,
  span,
  className,
}: {
  children: React.ReactNode;
  span: number;
  className?: string;
}) {
  const styles = {
    "--sm-grid": `repeat(1, minmax(0, 1fr))`,
    "--md-grid": `repeat(${span}, minmax(0, 1fr))`,
  } as React.CSSProperties;

  return (
    <div
      className={twMerge(
        "grid gap-4 [grid-template-columns:var(--sm-grid)] @md:[grid-template-columns:var(--md-grid)] transition-all duration-300",
        className
      )}
      role="grid"
      style={styles}
    >
      {children}
    </div>
  );
}

function BentoGridItem({
  children,
  span,
  className,
}: {
  children: React.ReactNode;
  span: number;
  className?: string;
}) {
  const styles = {
    "--sm-grid": `span 1 / span 1`,
    "--md-grid": `span ${span} / span ${span}`,
  } as React.CSSProperties;
  return (
    <div
      className={twMerge(
        "min-h-80 border border-outline rounded-md [grid-column:var(--sm-grid)] @md:[grid-column:var(--md-grid)] hover:scale-[1.03] transition-all duration-300 text-secondary-foreground",
        className
      )}
      aria-label="bento grid item"
      role="gridcell"
      style={styles}
    >
      {children}
    </div>
  );
}

const Grayscale = () => {
  return (
    <div className="w-full h-2/3 bg-gradient-to-br from-neutral-300 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 rounded-md"></div>
  );
};

export function BentoGridImplementation() {
  return (
    <div className="w-full flex justify-center items-center min-h-80">
      <BentoGrid span={3} className="w-[90%]">
        <BentoGridItem span={2} className="px-6 pt-7 flex flex-col  gap-4">
          <Grayscale />
          <p>
            This is the best library to exist. It contains everything you need
            to get started, and all at one place.
          </p>
        </BentoGridItem>
        <BentoGridItem span={1} className="px-6 pt-7 flex flex-col  gap-4">
          <Grayscale />
          <p>All the things that you see here is free to use.</p>
        </BentoGridItem>
        <BentoGridItem span={1} className="px-6 pt-7 flex flex-col  gap-4">
          <Grayscale />
          <p>Copy and Paste. That is all.</p>
        </BentoGridItem>
        <BentoGridItem span={2} className="px-6 pt-7 flex flex-col  gap-4">
          <Grayscale />
          <p>
            {
              "It's not just UI, its focused on making it work. Everyting here dosn't just look good but does what it say."
            }
          </p>
        </BentoGridItem>
      </BentoGrid>
    </div>
  );
}
