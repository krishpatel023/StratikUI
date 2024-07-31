import { Button } from "@/packages/primitives/buttons/02/default-ts/Button";
import { IconProps } from "@/utils/types";
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
    <div className="flex flex-col @lg:flex-row justify-center items-center gap-10">
      {PricingData.map((data, index) => (
        <div
          className={twMerge(
            "rounded-lg w-80 h-[27rem] bg-primary border border-outline-secondary shadow"
          )}
          key={index}
        >
          <div className="text-primary-foreground px-8 py-6 w-full h-full flex flex-col justify-between">
            <div>
              <span className="text-3xl font-medium mb-2 flex justify-between">
                {data.name}
                {data.popular && (
                  <h1 className="px-4 text-sm font-semibold rounded-full bg-blue-200 dark:bg-blue-600/40 text-blue-800 dark:text-blue-400 flex  items-center">
                    Most Popular
                  </h1>
                )}
              </span>
              <h2 className="text-md mb-4">{data.description}</h2>
              <div className="w-full h-[1px] bg-outline"></div>
              <h1 className="text-4xl font-medium mb-8 mt-6">
                $ {data.price}{" "}
                <span className="text-secondary-foreground text-base">
                  / Month
                </span>
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
            <Button variant={data.popular ? "accent" : "primary"}>
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
