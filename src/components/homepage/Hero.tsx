import { Button } from "@/packages/primitives/buttons/Button_6_Helper";
import { twMerge } from "tailwind-merge";
import { GradientText } from "../ui/GradientText";

export function Hero() {
  return (
    <div className="w-full h-[calc(100vh-4rem)] relative">
      <div className="w-full h-full flex flex-col justify-center items-center gap-4 text-center px-6">
        <GradientText className="p-1 text-3xl md:text-6xl font-medium ">
          Not just beautiful, but Functional
        </GradientText>
        <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-400">
          We provide a wide range of components, hooks and primitives which are
          fully functional.{" "}
          <span className="hidden lg:inline-block">
            Everything here is developed without any external dependencies. Thus
            you own the code.
          </span>
        </p>
        <Button
          className="px-3 py-2 text-sm md:text-base md:px-6 md:py-3 text-black dark:text-white bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-md mt-8 hover:opacity-90"
          clickedClassName="bg-neutral-100 dark:bg-neutral-700"
        >
          Explore Components
        </Button>
      </div>
      <Background />
    </div>
  );
}

function Background() {
  return (
    <>
      <div className="hidden lg:block absolute top-0 left-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute top-3/4 left-[1vw] w-[98vw] h-[98vw] rounded-full bg-white dark:bg-black"></div>
        <div className="absolute top-3/4 left-[1vw] w-[98vw] h-[98vw] scale-[1.002] rounded-full -z-10 bg-[linear-gradient(to_right,_rgba(255,255,255,0)_25%,_rgb(37,99,235)_50%,rgba(255,255,255,0)_75%)] dark:bg-[linear-gradient(to_right,_rgba(255,255,255,0)_25%,_rgb(37,99,235)_50%,rgba(255,255,255,0)_75%)]"></div>
        <div className="absolute top-[55%] translate-x-1/2 -z-10 w-[50vw] h-[50vw] rounded-full bg-blue-400 dark:bg-blue-600 opacity-20 blur-[100px]" />
      </div>
      {/* FOR SMALL SCREEN */}
      <div className="lg:hidden absolute top-0 left-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute top-3/4 -translate-x-[50vw] w-[200vw] h-[200vw] rounded-full bg-white dark:bg-black"></div>
        <div className="absolute top-3/4 -translate-x-[50vw] w-[200vw] h-[200vw] scale-[1.002] rounded-full -z-10 bg-[linear-gradient(to_right,_rgba(255,255,255,0)_25%,_rgb(37,99,235)_50%,rgba(255,255,255,0)_75%)] dark:bg-[linear-gradient(to_right,_rgba(255,255,255,0)_25%,_rgb(37,99,235)_50%,rgba(255,255,255,0)_75%)]"></div>
        <div className="absolute top-[55%] translate-x-0 -z-10 w-[100vw] h-[100vw] rounded-full bg-blue-400 dark:bg-blue-600 opacity-20 blur-[100px]" />
      </div>
    </>
  );
}
