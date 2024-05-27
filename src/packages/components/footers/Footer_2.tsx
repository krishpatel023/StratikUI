import { Mode } from "@/packages/primitives/theme_toggles/Theme_Toggle_1_Helper";
import { DataDescription, ImplementationNode } from "@/utils/constants";

function Footer() {
  return (
    <div className="w-full h-60  @md:h-40 flex flex-col @md:flex-row justify-center @md:justify-between gap-8 items-center px-16">
      <div className="flex flex-col justify-center @md:items-start items-center text-center text-black dark:text-white">
        <h1 className="text-xl font-semibold">Stratik / UI</h1>
        <span>© 2024 Stratik UI. All rights reserved.</span>
      </div>
      <div>
        <Mode />
      </div>
    </div>
  );
}

function Demo() {
  return (
    <div className="w-full flex justify-center items-center">
      <Footer />
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
