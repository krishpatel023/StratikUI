import { DataDescription, ImplementationNode } from "@/utils/constants";

import { Button } from "@/packages/primitives/buttons/Button_2";
import { IconProps } from "@/utils/constants";
import { twMerge } from "tailwind-merge";

export function Pricing() {
  const PricingData = [
    {
      name: "Basic",
      description: "For small teams and individuals",
      price: 10,
      features: ["10 users included", "2 GB of storage"],
      popular: false,
    },
    {
      name: "Pro",
      description: "For startups",
      price: 29,
      features: ["1000 users included", "20 GB of storage", "Community access"],
      popular: true,
    },
    {
      name: "Business",
      description: "For Enterprises",
      price: 49,
      features: [
        "Unlimited Users",
        "100 GB of storage",
        "Help center access",
        "Email support",
      ],
      popular: false,
    },
  ];

  return (
    <div className="flex flex-col @lg:flex-row justify-center items-end gap-10">
      {PricingData.map((data, index) => (
        <div
          className={twMerge(
            "rounded-lg w-80 h-[27rem] text-black dark:text-white bg-white dark:bg-neutral-900/60 border border-neutral-300 dark:border-neutral-600 shadow",
            data.popular &&
              "bg-blue-600 dark:bg-blue-600 text-white h-[30rem] border-none shadow-blue-800"
          )}
          key={index}
        >
          <div className="px-8 py-6 w-full h-full flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-medium mb-2">{data.name}</h1>
              <h2 className="text-md mb-4">{data.description}</h2>
              <div
                className={twMerge(
                  "w-full h-[1px] bg-neutral-300 dark:bg-neutral-700",
                  data.popular && "dark:bg-neutral-300"
                )}
              ></div>
              <h1 className="text-4xl font-medium mb-8 mt-6">
                $ {data.price} <span className="text-base">/ Month</span>
              </h1>
              <span className="flex flex-col gap-2">
                {data.features.map((feature, j) => (
                  <span
                    className="flex justify-start items-center gap-2"
                    key={j}
                  >
                    <Check /> {feature}
                  </span>
                ))}
              </span>
            </div>
            <Button
              className={twMerge(
                "w-full mt-auto px-4 py-2 font-medium text-black dark:text-white bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-md relative z-[100]",
                data.popular && "dark:bg-white dark:text-black"
              )}
              clickedClassName={twMerge(
                "bg-neutral-100 dark:bg-neutral-700",
                data.popular && "dark:bg-neutral-300"
              )}
            >
              Get Started
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export const Check = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.488 3.43a.75.75 0 0 1 .081 1.058l-6 7a.75.75 0 0 1-1.1.042l-3.5-3.5A.75.75 0 0 1 4.03 6.97l2.928 2.927l5.473-6.385a.75.75 0 0 1 1.057-.081Z"
      clipRule="evenodd"
    ></path>
  </svg>
);

function Demo() {
  return (
    <div className="w-full min-h-[35rem] flex justify-center items-center py-10">
      <Pricing />
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
  name: "Pricing Normal",
  description: "Component Description",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.1.1",
  display: true,
};

export default Data;
