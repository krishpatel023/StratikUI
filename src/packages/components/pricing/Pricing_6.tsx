import { Button } from "@/packages/primitives/buttons/Button_2";
import {
  DataDescription,
  IconProps,
  ImplementationNode,
} from "@/utils/constants";
import { twMerge } from "tailwind-merge";
import { Pricing } from "./Pricing_5";

function PricingGrid() {
  const PricingData = [
    {
      name: "Content",
      value: null,
    },
    {
      name: "Number of Users",
      value: ["100", "10,000", "Unlimited"],
    },
    {
      name: "Storage",
      value: ["10 GB", "100 GB", "500 GB"],
    },
    {
      name: "Requests per month",
      value: ["10,000", "10,00,000", "Unlimited"],
    },
    {
      name: "Team members",
      value: ["Just You", "Upto 10", "Unlimited"],
    },
    {
      name: "Early Access",
      value: [false, true, true],
    },
    {
      name: "Support",
      value: null,
    },
    {
      name: "Email Support",
      value: [false, true, true],
    },
    {
      name: "Phone Support",
      value: [false, true, true],
    },
    {
      name: "24/7 Support",
      value: [false, false, true],
    },
  ];

  return (
    <table className="w-full text-black dark:text-white">
      <colgroup>
        <col className="w-1/4" />
        <col className="w-1/4" />
        <col className="w-1/4" />
        <col className="w-1/4" />
      </colgroup>
      <thead>
        <td></td>
        <TableHead
          name="Basic"
          targetAudience="For individuals"
          Amount="0"
          ButtonText="Get Started"
          popular={false}
        />

        <TableHead
          name="Pro"
          targetAudience="For Startups"
          Amount="29"
          ButtonText="Purchase Now"
          popular={true}
        />

        <TableHead
          name="Enterprise"
          targetAudience="For Enterprises"
          Amount="49"
          ButtonText="Contact Sales"
          popular={false}
        />
      </thead>

      <tbody>
        {PricingData.map((data, index) => (
          <TableRow key={index} name={data.name} value={data.value} />
        ))}
      </tbody>
    </table>
  );
}

function TableHead({
  name,
  targetAudience,
  Amount,
  ButtonText,
  popular,
}: {
  name: string;
  targetAudience: string;
  Amount: string;
  ButtonText: string;
  popular: boolean;
}) {
  return (
    <td className="px-2 rounded-t-2xl py-6">
      <h1 className="text-2xl font-medium mb-2">{name}</h1>
      <h2 className="text-md mb-4 text-neutral-700 dark:text-neutral-400">
        {targetAudience}
      </h2>
      <h1 className="text-4xl font-medium mb-8 mt-6 flex gap-2 items-end">
        ${Amount}
        <span className="text-neutral-700 dark:text-neutral-400 font-medium text-base">
          / Month
        </span>
      </h1>
      <Button
        className={twMerge(
          "w-full mt-auto px-4 py-2 text-black dark:text-white bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl relative z-[100]",
          popular &&
            "bg-blue-600 border-blue-700 text-white dark:bg-blue-800 dark:border-blue-950"
        )}
        clickedClassName={twMerge(
          "bg-neutral-100 dark:bg-neutral-700",
          popular && "bg-blue-300 dark:bg-blue-400"
        )}
      >
        {ButtonText}
      </Button>
    </td>
  );
}

function TableRow({
  name,
  value,
}: {
  name: string;
  value: Array<string | boolean> | null;
}) {
  return (
    <>
      {value ? (
        <tr className="h-16 text-neutral-700 dark:text-neutral-400">
          <td>{name}</td>
          {value.map((value, index) => (
            // Values of the row
            <td className="text-center" key={index}>
              {typeof value === "string" ? (
                // Incase of string Values
                value
              ) : // In case of boolean values
              value ? (
                <Check className="text-blue-700 dark:text-blue-600 mx-auto w-6 h-6" />
              ) : (
                <Cross className="text-neutral-700/70 dark:text-neutral-600 mx-auto w-5 h-5" />
              )}
            </td>
          ))}
        </tr>
      ) : (
        <>
          <tr className="h-20 border-b border-neutral-800 ">
            <td className="font-semibold">
              <div className="w-full min-h-12 "></div>
              {name}

              <div className="w-full min-h-6 "></div>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </>
      )}
    </>
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

export const Cross = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 15 15"
    {...props}
  >
    <path
      fill="currentColor"
      d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"
    ></path>
  </svg>
);

function Demo() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="hidden @lg:block w-[90%] mt-40 mb-20">
        <PricingGrid />
      </div>
      <div className="@lg:hidden w-[90%] mt-40 mb-20">
        <Pricing />
      </div>
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
  name: "Pricing Grid",
  description: "Component Description",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.1.1",
  display: true,
};

export default Data;
