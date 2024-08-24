import { GradientBackground } from "@registry/packages/primitives/containers/02/default-js/Container";
import ArrowHeading from "@registry/ui/ArrowHeading";

export default function ContainerImplementation() {
  return (
    <div className="flex flex-col items-center w-full">
      <ArrowHeading text="Button (Default Background)" className="mb-4" />
      <GradientBackground>
        <button type="button" className="px-6 py-3 text-foreground rounded-lg bg-background max-w-80 md:max-w-[30rem]">
          Visit the latest collection now. | Developed With Tailwind
        </button>
      </GradientBackground>

      <ArrowHeading text="Div" className="mb-4 mt-10" />
      <GradientBackground className="from-pink-500 to-purple-500">
        <div className="px-6 py-3 text-foreground rounded-lg bg-background flex justify-evenly items-center gap-6 max-w-80 md:max-w-[30rem]">
          <TailwindcssIcon className="w-20 h-20" />
          <div className="w-[20rem]">
            <h1>This entire component has been made with TailwindCSS and is a part of Stratik UI Library.</h1>
            <button type="button" className="text-accent-secondary mt-4">
              Check out other components
            </button>
          </div>
        </div>
      </GradientBackground>

      <ArrowHeading text="Button with Solo Color" className="mb-4 mt-10" />
      <GradientBackground className="from-blue-500 to-blue-500 ">
        <button type="button" className="px-6 py-3 text-foreground rounded-lg bg-background max-w-80 md:max-w-[30rem]">
          Visit the latest collection now. | Developed With Tailwind
        </button>
      </GradientBackground>

      <ArrowHeading text="Button with Solo Color And Transparent Border Effect" className="mb-4 mt-10" />
      <GradientBackground className="from-gray-600/30 to-gray-500/10 border-gray-300/10 border-[1px]">
        <button
          type="button"
          className="px-6 py-3 text-foreground rounded-lg bg-background max-w-80 md:max-w-[30rem] border-gray-200/30 border-[1px]"
        >
          Visit the latest collection now. | Developed With Tailwind
        </button>
      </GradientBackground>
    </div>
  );
}

const TailwindcssIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128" {...props}>
    <title>Tailwind CSS</title>
    <path
      fill="#38bdf8"
      d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602c-6.399 8.536-13.867 11.735-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597c-6.399 8.531-13.867 11.73-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
    />
  </svg>
);
