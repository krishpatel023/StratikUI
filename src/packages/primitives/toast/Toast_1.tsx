import { DataDescription, ImplementationNode } from "@/utils/constants";
import ToastProvider from "./Toast_1_Context_Helper";
import {
  ToastAnimationsJsx,
  ToastAnimationsTsx,
  ToastComponentsStringJsx,
  ToastComponentsStringTsx,
  ToastContextJsx,
  ToastContextTsx,
  ToastImplementation,
  ToastImplementationString,
  ToastStylingComponentStringJsx,
  ToastStylingComponentStringTsx,
} from "./Toast_1_Helper";

function Demo() {
  return (
    <div className="w-full min-h-[35rem] flex justify-center items-center">
      <ToastProvider>
        <ToastImplementation />
      </ToastProvider>
    </div>
  );
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
      {
        name: "Implementation",
        content: [
          { language: "tsx", code: ToastImplementationString },
          { language: "jsx", code: ToastImplementationString },
        ],
      },
      {
        name: "ToastContext",
        content: [
          { language: "tsx", code: ToastContextTsx },
          { language: "jsx", code: ToastContextJsx },
        ],
      },
      {
        name: "ToastComponents",
        content: [
          { language: "tsx", code: ToastComponentsStringTsx },
          { language: "jsx", code: ToastComponentsStringJsx },
        ],
      },
      {
        name: "ToastStyling",
        content: [
          { language: "tsx", code: ToastStylingComponentStringTsx },
          { language: "jsx", code: ToastStylingComponentStringJsx },
        ],
      },
      {
        name: "tailwind.config",
        content: [
          { language: "tsx", code: ToastAnimationsTsx },
          { language: "jsx", code: ToastAnimationsJsx },
        ],
      },
    ],
  },
];

const Data: DataDescription = {
  name: "Toast Architecture",
  description:
    "The combination of all the components here allow a way to create dynamic toasts without any worry. It covers both stacked and unstacked toasts. It has four direction options and along with that the looks can be controled by only changing the ToastStyling file. This iwill enable anyone to create custom toast that closes and opens either manually or automatically with only one command - addToast.",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.0.1",
  display: true,
};

export default Data;
