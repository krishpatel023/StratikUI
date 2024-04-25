import ArrowHeading from "@/components/ui/ArrowHeading";
import { DataDescription, ImplementationNode } from "@/utils/constants";
import { twMerge } from "tailwind-merge";
function Banner() {
  return (
    <div className="w-full flex justify-center items-center py-2 px-6 bg-s_foreground gap-8">
      <h1 className="font-semibold">
        Checkout the latest release of the components that are available for
        free.
      </h1>
      <GradientBackground>
        <button className="py-2 px-4 rounded-md bg-s_background text-s_textPrimary z-10 relative">
          Get Started
        </button>
      </GradientBackground>
    </div>
  );
}

function GradientBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="relative group/gradient_bg w-max">
      <div
        className={twMerge(
          "absolute z-0 -inset-0.5 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg blur opacity-75 group-hover/gradient_bg:opacity-100 duration-200 transition-all",
          className
        )}
      ></div>
      {children}
    </div>
  );
}

function Demo() {
  return (
    <div className="w-full">
      <Banner />
      <div className="min-w-full min-h-[40rem]"></div>
    </div>
  );
}

const Code: string = `function Banner() {
  return (
    <div className="w-full flex justify-center items-center py-2 px-6 bg-s_foreground gap-8">
      <h1 className="font-semibold">
        Checkout the latest release of the components that are available for
        free.
      </h1>

      {/* CAN FIND IT IN THE CONTAINER SECTION OF THE LIBRARY */}
      <GradientBackground>
        <button className="py-2 px-4 rounded-md bg-s_background text-s_textPrimary z-10 relative">
          Get Started
        </button>
      </GradientBackground>
    </div>
  );
}`;

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    content: ["tailwind-css", "twMerge"],
  },
  {
    type: "code",
    content: [
      {
        name: "InputText",
        content: [
          {
            language: "tsx",
            code: Code,
          },
          {
            language: "jsx",
            code: Code,
          },
        ],
      },
    ],
  },
];

const Data: DataDescription = {
  name: "This is the default banner",
  description: "This is a default banner.",
  implementation: Implementation,
  component: Demo(),
  version_included: "0.0.1",
  display: true,
};
export default Data;
