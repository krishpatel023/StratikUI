import { BentoGrid, BentoGridItem } from "@registry/packages/primitives/bento-grid/01/default-ts/BentoGrid";

export default function BentoGridImplementation() {
  return (
    <div className="w-full flex justify-center items-center min-h-80">
      <BentoGrid span={3} className="w-[90%]">
        <BentoGridItem span={2} className="px-6 pt-7 flex flex-col  gap-4">
          <Grayscale />
          <p>
            This is the best library to exist. It contains everything you need to get started, and all at one place.
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
              "It's not just UI, its focused on making it work. Everything here doesn't just look good but does what it say."
            }
          </p>
        </BentoGridItem>
      </BentoGrid>
    </div>
  );
}

const Grayscale = () => {
  return (
    <div className="w-full h-2/3 bg-gradient-to-br from-neutral-300 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 rounded-md" />
  );
};
