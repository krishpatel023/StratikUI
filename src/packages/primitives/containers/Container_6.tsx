import { Background } from "@/packages/helper/Background";
import { DataDescription, ImplementationNode } from "@/utils/constants";
import { twMerge } from "tailwind-merge";

export const ContainerGlassEffect = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "bg-neutral-100/65 dark:bg-neutral-900/65 backdrop-blur supports-[backdrop-filter]:bg-neutral-100/70 dark:supports-[backdrop-filter]:bg-neutral-900/60 z-50",
        className
      )}
    >
      {children}
    </div>
  );
};

const Demo = () => {
  return (
    <div className="w-full h-[25rem] relative overflow-hidden flex justify-center items-center">
      <ContainerGlassEffect className="rounded-lg border border-neutral-300 dark:border-neutral-700">
        <div className="px-10 py-20 text-s_textPrimary flex flex-col justify-center items-start gap-2 max-w-80 @md:max-w-[30rem]">
          <h1>
            This entire component has been made with TailwindCSS and is a part
            of Stratik UI Library.
          </h1>
          <button className="text-s_accent mt-4">
            Check out other components
          </button>
        </div>
      </ContainerGlassEffect>
      <div className="absolute top-0 overflow-scroll">
        <Background />
        <h1 className="text-black dark:text-neutral-200 text-7xl w-[30rem]">
          This is a demo text to display the glass effect of the container.
        </h1>
      </div>
    </div>
  );
};

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    content: ["tailwind-css", "twMerge"],
  },
  {
    type: "code",
    content: [
      {
        name: "Container",
        content: [
          {
            language: "tsx",
            code: "",
          },
          {
            language: "jsx",
            code: "",
          },
        ],
      },
    ],
  },
];

const Data: DataDescription = {
  name: "Container With Conic Gradient Background",
  description: "Use this with buttons, divs, etc.",
  implementation: Implementation,
  component: Demo(),
  version_included: "0.1.3",
  display: true,
};
export default Data;
