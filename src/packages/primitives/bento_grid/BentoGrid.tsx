import { DataDescription, ImplementationNode } from "@/utils/constants";
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
        "min-h-80 border border-neutral-400 dark:border-neutral-800 rounded-md [grid-column:var(--sm-grid)] @md:[grid-column:var(--md-grid)] hover:scale-[1.03] transition-all duration-300 dark:text-neutral-300",
        className
      )}
      style={styles}
    >
      {children}
    </div>
  );
}

function Demo() {
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

const Grayscale = () => {
  return (
    <div className="w-full h-2/3 bg-gradient-to-br from-neutral-300 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 rounded-md"></div>
  );
};
const Code: string = `
// Add your code snippet here
`;

const DemoString: string = `
// Add your demo code snippet here
`;

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    content: ["tailwind-css", "twMerge"],
  },
  {
    type: "code",
    content: [
      {
        name: "Name",
        content: [
          { language: "tsx", code: Code },
          { language: "jsx", code: Code },
        ],
      },
      {
        name: "Implementation",
        content: [
          { language: "tsx", code: DemoString },
          { language: "jsx", code: DemoString },
        ],
      },
    ],
  },
];

const Data: DataDescription = {
  name: "Default Bento Grid",
  description: "Component Description",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.11",
  display: true,
};

export default Data;