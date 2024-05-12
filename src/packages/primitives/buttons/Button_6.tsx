import { DataDescription, ImplementationNode } from "@/utils/constants";
import { Button } from "./Button_6_Helper";

function Demo() {
  return (
    <div className="w-full flex justify-center items-center">
      <Button
        className="w-80 px-6 py-2 text-black dark:text-white bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-md"
        clickedClassName="bg-neutral-100 dark:bg-neutral-700"
      >
        Click Me
      </Button>
    </div>
  );
}

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
  name: "Component Name",
  description: "Component Description",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.1.1",
  display: true,
};

export default Data;
