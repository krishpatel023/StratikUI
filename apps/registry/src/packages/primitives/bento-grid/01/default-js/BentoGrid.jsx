import { twMerge } from "tailwind-merge";

export function BentoGrid({ children, span, className }) {
  const styles = {
    "--sm-grid": `repeat(1, minmax(0, 1fr))`,
    "--md-grid": `repeat(${span}, minmax(0, 1fr))`,
  };

  return (
    <div
      className={twMerge(
        "grid gap-4 [grid-template-columns:var(--sm-grid)] md:[grid-template-columns:var(--md-grid)] transition-all duration-300",
        className
      )}
      role="grid"
      style={styles}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({ children, span, className }) {
  const styles = {
    "--sm-grid": `span 1 / span 1`,
    "--md-grid": `span ${span} / span ${span}`,
  };
  return (
    <div
      className={twMerge(
        "min-h-80 border border-outline-secondary rounded-md [grid-column:var(--sm-grid)] md:[grid-column:var(--md-grid)] hover:scale-[1.03] transition-all duration-300 text-secondary-foreground",
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
