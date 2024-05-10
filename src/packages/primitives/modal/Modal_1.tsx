import { DataDescription, ImplementationNode } from "@/utils/constants";
import { ModalImplementation } from "./Modal_1_Helper";

function Demo() {
  return <ModalImplementation />;
}

const ToastProviderWrapping: string = `function Demo() {
  return (
    <div className="w-full min-h-[35rem] flex justify-center items-center">
      <ToastProvider>
        <ToastImplementation />
      </ToastProvider>
    </div>
  );
}`;

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    content: ["tailwind-css", "twMerge", "uuid"],
  },
  {
    type: "code",
    content: [
      {
        name: "ToastProviderWrapping",
        content: [
          { language: "tsx", code: ToastProviderWrapping },
          { language: "jsx", code: ToastProviderWrapping },
        ],
      },
    ],
  },
];

const Data: DataDescription = {
  name: "Modal",
  description: "Description",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.1.1",
  display: true,
};

export default Data;
