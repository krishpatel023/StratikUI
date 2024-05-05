import { DataDescription, ImplementationNode } from "@/utils/constants";
import { Header } from "./Dashboard_1_Helper";

function Dashboard() {
  return (
    <div className="w-full h-full relative flex flex-col items-center bg-s_secondary">
      <Header />
      <div className="h-[38rem] w-[98%] m-4 rounded-lg border dark:border-neutral-700 border-neutral-300 bg-white dark:bg-neutral-900 p-2 mx-auto">
        <div className="min-h-full min-w-full rounded-[inherit] border dark:border-neutral-700 border-neutral-300 bg-[linear-gradient(45deg,rgba(0,0,0,.05)_7.14%,transparent_7.14%,transparent_50%,rgba(0,0,0,.05)_50%,rgba(0,0,0,.05)_57.14%,transparent_57.14%,transparent);] dark:bg-[linear-gradient(45deg,rgba(0,0,0,.4)_7.14%,transparent_7.14%,transparent_50%,rgba(0,0,0,.4)_50%,rgba(0,0,0,.4)_57.14%,transparent_57.14%,transparent);] bg-[length:10px_10px]"></div>
      </div>
    </div>
  );
}

function Demo() {
  return (
    <div className="w-full min-h-[40rem]">
      <Dashboard />
    </div>
  );
}

const Icon = {};

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
  name: "Dashboard",
  description: "Component Description",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.1.1",
  display: true,
};

export default Data;
