import { DataDescription, ImplementationNode } from "@/utils/constants";
import { ImplementStepper } from "./Stepper_1_Helper";

function ComponentName() {
  return <div></div>;
}

function Demo() {
  return (
    <div className="w-full min-h-40 flex justify-center items-center">
      <ImplementStepper />
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
  version_included: "0.0.1",
  display: true,
};

export default Data;
