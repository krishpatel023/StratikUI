import { DataDescription, ImplementationNode } from "@/utils/constants";
import { CodeJsx, CodeTsx, Pagination } from "./Pagination_1_Helper";

function Demo() {
  return (
    <div className="w-full flex justify-center">
      <Pagination initialPage={1} totalPage={10} />
    </div>
  );
}

const DemoString: string = `function Demo() {
  return (
    <div className="w-full flex justify-center">
      <Pagination initialPage={1} totalPage={10} />
    </div>
  );
}`;

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    content: ["tailwind-css"],
  },
  {
    type: "code",
    content: [
      {
        name: "Name",
        content: [
          { language: "tsx", code: CodeTsx },
          { language: "jsx", code: CodeJsx },
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
  name: "Default Pagination",
  description:
    "This is a simple pagination that is fully functional and ready to use.",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.0.7",
  display: true,
};

export default Data;
