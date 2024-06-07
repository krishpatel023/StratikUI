import { DataDescription, ImplementationNode } from "@/utils/constants";
import OTPInput, { Demo } from "./Helper";

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
  name: "OTP",
  description:
    "The OTPInput component is a customizable and user-friendly input field for entering one-time passwords (OTP) in a React application. It provides a seamless experience by automatically focusing on the next input, allowing pasting of the complete OTP, and enforcing sequential input filling while handling edge cases gracefully.",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.1.1",
  display: true,
};

export default Data;
