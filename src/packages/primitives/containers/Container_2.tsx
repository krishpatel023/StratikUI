import ArrowHeading from "@/components/ui/ArrowHeading";
import {
  DataDescription,
  IconProps,
  ImplementationNode,
} from "@/utils/constants";
import { twMerge } from "tailwind-merge";

function Demo() {
  return (
    <div className="flex flex-col">
      <ArrowHeading text="Button (Default Background)" className="mb-4" />
      <GradientBackground>
        <button className="px-6 py-3 text-s_textPrimary rounded-lg bg-s_background">
          Visit the latest collection now. | Developed With Tailwind
        </button>
      </GradientBackground>

      <ArrowHeading text="Div" className="mb-4 mt-10" />
      <GradientBackground className="from-pink-500 to-purple-500">
        <div className="px-6 py-3 text-s_textPrimary rounded-lg bg-s_background flex justify-evenly items-center gap-6">
          <TailwindcssIcon className="w-20 h-20" />
          <div className="w-[20rem]">
            <h1>
              This entire component has been made with TailwindCSS and is a part
              of Stratik UI Library.
            </h1>
            <button className="text-s_accent mt-4">
              Check out other components
            </button>
          </div>
        </div>
      </GradientBackground>

      <ArrowHeading text="Button with Solo Color" className="mb-4 mt-10" />
      <GradientBackground className="from-blue-500 to-blue-500">
        <button className="px-6 py-3 text-s_textPrimary rounded-lg bg-s_background">
          Visit the latest collection now. | Developed With Tailwind
        </button>
      </GradientBackground>
    </div>
  );
}

function GradientBackground({
  children,
  className,
  borderSize = 0.25,
}: {
  children: React.ReactNode;
  className?: string;
  borderSize?: number;
}) {
  return (
    <div className="relative group/gradient_bg">
      {children}
      <div
        className={twMerge(
          "absolute bg-gradient-to-r  from-blue-500 to-red-500 -z-[5] rounded-xl",
          className
        )}
        style={{
          top: `-${borderSize}rem`,
          left: `-${borderSize}rem`,
          minHeight: `calc(100% + ${2 * borderSize}rem)`,
          minWidth: `calc(100% + ${2 * borderSize}rem)`,
        }}
      ></div>
    </div>
  );
}

const TailwindcssIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 128 128"
    {...props}
  >
    <path
      fill="#38bdf8"
      d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602c-6.399 8.536-13.867 11.735-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597c-6.399 8.531-13.867 11.73-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
    ></path>
  </svg>
);

const ButtonCode: string = `function gradientBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="relative group/gradient_bg">
      {children}
      <div
        className={twMerge(
          "absolute -z-[5] -inset-0.5 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg blur opacity-75 group-hover/gradient_bg:opacity-100 duration-200 transition-all",
          className
        )}
      ></div>
    </div>
  );
}`;

const demoString: string = `function Demo() {
  return (
    <div className="flex flex-col">
      <ArrowHeading text="Button (Default Background)" className="mb-4" />
      <gradientBackground>
        <button className="px-6 py-3 text-s_textPrimary rounded-lg bg-s_background">
          Visit the latest collection now. | Developed With Tailwind
        </button>
      </gradientBackground>

      <ArrowHeading text="Div" className="mb-4 mt-10" />
      <gradientBackground className="from-pink-500 to-purple-500">
        <div className="px-6 py-3 text-s_textPrimary rounded-lg bg-s_background flex justify-evenly items-center gap-6">
          <TailwindcssIcon className="w-20 h-20" />
          <div className="w-[20rem]">
            <h1>
              This entire component has been made with TailwindCSS and is a part
              of Stratik UI Library.
            </h1>
            <button className="text-s_accent mt-4">
              Check out other components
            </button>
          </div>
        </div>
      </gradientBackground>

      <ArrowHeading text="Button with Solo Color" className="mb-4 mt-10" />
      <gradientBackground className="from-blue-500 to-blue-500">
        <button className="px-6 py-3 text-s_textPrimary rounded-lg bg-s_background">
          Visit the latest collection now. | Developed With Tailwind
        </button>
      </gradientBackground>
    </div>
  );
}`;

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    title: "Technology Used",
    content: ["tailwind-css", "twMerge"],
  },
  {
    type: "code",
    title: "Code",
    content: ButtonCode,
  },
  {
    type: "code",
    title: "Code",
    content: demoString,
  },
];

const ButtonData_1: DataDescription = {
  name: "Container With Gradient Background",
  description: "This is a Container with Gradient Background",
  implementation: Implementation,
  component: Demo(),
  version_included: "0.0.4",
  display: true,
};
export default ButtonData_1;
