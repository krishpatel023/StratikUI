import { GradientText } from "../ui/GradientText";
import { Counter } from "../ui/TextTicker";

export function Stats() {
  return (
    <>
      <GradientText className="w-full text-center text-5xl font-medium mx-auto mt-40 mb-28 py-1">
        Total components available in the library.
      </GradientText>
      <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-evenly items-center gap-12">
        <StatGroup title="Primitives" value={50} />
        <StatGroup title="Components" value={40} />
        <StatGroup title="Hooks" value={15} />
      </div>
    </>
  );
}

function StatGroup({ title, value }: { title: string; value: number }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Counter
        value={value}
        direction="up"
        className="text-5xl font-semibold text-neutral-700 dark:text-neutral-400 "
      />
      <h1 className="text-2xl text-neutral-700 dark:text-neutral-400">{title}</h1>
    </div>
  );
}
