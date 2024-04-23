import ArrowHeading from "@/components/ui/ArrowHeading";
import { DataDescription, ImplementationNode } from "@/utils/constants";
import { twMerge } from "tailwind-merge";
function GradientText({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <h1
      className={twMerge(
        "bg-gradient-to-r inline-block text-transparent bg-clip-text from-neutral-600 to-neutral-300",
        className
      )}
    >
      {children}
    </h1>
  );
}

function Demo() {
  return (
    <div className="w-80 @lg:w-[40rem] flex flex-col gap-4">
      <ArrowHeading text="Default" />
      <GradientText className="bg-gradient-to-br text-3xl @lg:text-7xl font-bold">
        Bring Gradients to your Text
      </GradientText>
      <ArrowHeading text="Triple Gradient" />
      <GradientText className="from-blue-600 via-green-500 to-indigo-400 text-3xl @lg:text-7xl font-bold">
        Bring Gradients to your Text
      </GradientText>
      <ArrowHeading text="In Different Direction" />
      <GradientText className="bg-gradient-to-b from-blue-700 to-indigo-400 text-3xl @lg:text-7xl font-bold">
        Bring Gradients to your Text
      </GradientText>
    </div>
  );
}

const DemoString: string = `function Demo() {
  return (
    <div className="w-80 @lg:w-[40rem] flex flex-col gap-4">
      <ArrowHeading text="Default" />
      <GradientText className="bg-gradient-to-br text-3xl @lg:text-7xl font-bold">
        Bring Gradients to your Text
      </GradientText>
      <ArrowHeading text="Triple Gradient" />
      <GradientText className="from-blue-600 via-green-500 to-indigo-400 text-3xl @lg:text-7xl font-bold">
        Bring Gradients to your Text
      </GradientText>
      <ArrowHeading text="In Different Direction" />
      <GradientText className="bg-gradient-to-b from-blue-700 to-indigo-400 text-3xl @lg:text-7xl font-bold">
        Bring Gradients to your Text
      </GradientText>
    </div>
  );
}`;

const CodeTsx: string = `function GradientText({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <h1
      className={twMerge(
        "bg-gradient-to-r inline-block text-transparent bg-clip-text from-neutral-600 to-neutral-300",
        className
      )}
    >
      {children}
    </h1>
  );
}`;

const CodeJsx: string = `function GradientText({
    children,
    className,
  }) {
    return (
      <h1
        className={twMerge(
          "bg-gradient-to-r inline-block text-transparent bg-clip-text from-neutral-600 to-neutral-300",
          className
        )}
      >
        {children}
      </h1>
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
            code: CodeTsx,
          },
          {
            language: "jsx",
            code: CodeJsx,
          },
        ],
      },
      {
        name: "Implementation",
        content: [
          {
            language: "tsx",
            code: DemoString,
          },
          {
            language: "jsx",
            code: DemoString,
          },
        ],
      },
    ],
  },
];

const Data: DataDescription = {
  name: "Gradient Text",
  description:
    "This is a gradient text. Use your creativity and make it unique.",
  implementation: Implementation,
  component: Demo(),
  version_included: "0.0.1",
  display: true,
};
export default Data;
