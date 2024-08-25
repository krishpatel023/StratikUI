import { GradientText } from "../ui/GradientText";
import { Counter } from "../ui/TextTicker";

export function Stats() {
  return (
    <>
      <GradientText className="w-full text-center text-5xl font-medium mx-auto mt-40 mb-28 py-1 px-6">
        Total components available in the library.
      </GradientText>
      <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-evenly items-center gap-12">
        <StatGroup title="Primitives" value={50} />
        <StatGroup title="Components" value={40} />
        <StatGroup title="Hooks" value={15} />
      </div>
      <div className="relative h-80 md:h-[30rem] overflow-hidden w-full -z-20 mt-10">
        <Background />
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

function Background() {
  return (
    <>
      <div className="hidden lg:block absolute top-0 left-0 -z-10 h-[60rem] w-full overflow-hidden  rotate-180">
        <div className="absolute top-3/4 left-[1vw] w-[98vw] h-[98vw] rounded-full bg-white dark:bg-black" />
        <div className="absolute top-3/4 left-[1vw] w-[98vw] h-[98vw] scale-[1.002] rounded-full -z-10 bg-[linear-gradient(to_right,_rgba(255,255,255,0)_25%,_rgb(37,99,235)_50%,rgba(255,255,255,0)_75%)] dark:bg-[linear-gradient(to_right,_rgba(255,255,255,0)_25%,_rgb(37,99,235)_50%,rgba(255,255,255,0)_75%)]" />
        <div className="absolute top-[55%] translate-x-1/2 -z-10 w-[50vw]  h-[50vw] rounded-full bg-blue-400 dark:bg-blue-600 opacity-20 blur-[100px]" />
      </div>
      {/* FOR SMALL SCREEN */}
      <div className="lg:hidden absolute top-0 left-0 -z-10 h-[40rem] w-full overflow-hidden rotate-180">
        <div className="absolute top-3/4 -translate-x-[50vw] w-[200vw] h-[200vw] rounded-full bg-white dark:bg-black" />
        <div className="absolute top-3/4 -translate-x-[50vw] w-[200vw] h-[200vw] scale-[1.002] rounded-full -z-10 bg-[linear-gradient(to_right,_rgba(255,255,255,0)_25%,_rgb(37,99,235)_50%,rgba(255,255,255,0)_75%)] dark:bg-[linear-gradient(to_right,_rgba(255,255,255,0)_25%,_rgb(37,99,235)_50%,rgba(255,255,255,0)_75%)]" />
        <div className="absolute top-[55%] translate-x-0 -z-10 w-[100vw] h-[100vw] rounded-full bg-blue-400 dark:bg-blue-600 opacity-20 blur-[100px]" />
      </div>
    </>
  );
}
