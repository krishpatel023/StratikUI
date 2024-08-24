import { Button } from "@registry/packages/primitives/buttons/02/default-ts/Button";
import type { IconProps } from "@registry/utils/types";
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
      features: ["Unlimited Users", "100 GB of storage", "Help center access", "Email support"],
      popular: false,
    },
  ];

  return (
    <div className="flex flex-col @lg:flex-row justify-center items-end gap-10">
      {PricingData.map((data, index) => (
        <div
          className={twMerge(
            "rounded-lg w-80 h-[27rem] text-primary-foreground bg-primary border border-outline-secondary shadow",
            data.popular && "bg-accent text-accent-foreground h-[30rem] border-none shadow-accent-secondary",
          )}
          key={index}
        >
          <div className="px-8 py-6 w-full h-full flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-medium mb-2">{data.name}</h1>
              <h2 className="text-md mb-4">{data.description}</h2>
              <div className={twMerge("w-full h-[1px] bg-outline", data.popular && "bg-accent-foreground")} />
              <h1 className="text-4xl font-medium mb-8 mt-6">
                $ {data.price} <span className="text-base">/ Month</span>
              </h1>
              <span className="flex flex-col gap-2">
                {data.features.map((feature, j) => (
                  <span className="flex justify-start items-center gap-2" key={j}>
                    <Check /> {feature}
                  </span>
                ))}
              </span>
            </div>
            <Button variant={data.popular ? "complementary" : "primary"}>Get Started</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export const Check = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
    <title>Tick Mark</title>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.488 3.43a.75.75 0 0 1 .081 1.058l-6 7a.75.75 0 0 1-1.1.042l-3.5-3.5A.75.75 0 0 1 4.03 6.97l2.928 2.927l5.473-6.385a.75.75 0 0 1 1.057-.081Z"
      clipRule="evenodd"
    />
  </svg>
);
