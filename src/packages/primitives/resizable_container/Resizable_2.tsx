import { DataDescription, ImplementationNode } from "@/utils/constants";
import {
  ExampleStringJsx,
  ExampleStringTsx,
  ResizeExample2,
} from "./Resizable_2_Helper";
import { HelperFunctionsJsx, HelperFunctionsTsx } from "./Resizable_Helper";
import {
  useResizableCodeJsx,
  useResizableCodeTsx,
} from "@/packages/hooks/docs/useResizable/useResizable";

function Demo() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <ResizeExample2 />
    </div>
  );
}

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    content: ["tailwind-css", "twMerge"],
  },
  {
    type: "code",
    content: [
      {
        name: "Implementation",
        content: [
          { language: "tsx", code: ExampleStringTsx },
          { language: "jsx", code: ExampleStringJsx },
        ],
      },
      {
        name: "Helper",
        content: [
          { language: "tsx", code: HelperFunctionsTsx },
          { language: "jsx", code: HelperFunctionsJsx },
        ],
      },
      {
        name: "useResizable",
        content: [
          { language: "tsx", code: useResizableCodeTsx },
          { language: "jsx", code: useResizableCodeJsx },
        ],
      },
    ],
  },
];

const Data: DataDescription = {
  name: "Resizable Partition in a Container",
  description:
    "This way you can use Resizable component as a partition resizer. This is just an example of the use cases for this hook. The individual code is available in the useResizable hook section.",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.1.5",
  display: true,
};

export default Data;
