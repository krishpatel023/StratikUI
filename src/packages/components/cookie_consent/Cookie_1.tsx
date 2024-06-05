import { DataDescription, ImplementationNode } from "@/utils/constants";
import { CookiePrompt } from "./Cookie_1_Helper";

function Demo() {
  return (
    <div className="w-full min-h-[40rem]">
      <CookiePrompt />
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
  name: "Default Cookie Consent",
  description:
    "This is paired up with useCookies hook. It uses various functionalities related to user preferences and is just a good demo for that. Click Cookie Settings to see it in action.",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.1.1",
  display: true,
};

export default Data;
