import { Button } from "@registry/packages/primitives/buttons/02/default-js/Button";

export function PricingGrid() {
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
    <table className="w-full text-foreground">
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

function TableHead({ name, targetAudience, Amount, ButtonText, popular }) {
  return (
    <td className="px-2 rounded-t-2xl py-6">
      <h1 className="text-2xl font-medium mb-2">{name}</h1>
      <h2 className="text-md mb-4 text-secondary-foreground">
        {targetAudience}
      </h2>
      <h1 className="text-4xl font-medium mb-8 mt-6 flex gap-2 items-end">
        ${Amount}
        <span className="text-secondary-foreground font-medium text-base">
          / Month
        </span>
      </h1>
      <Button variant={popular ? "accent" : "primary"} className="w-full">
        {ButtonText}
      </Button>
    </td>
  );
}

function TableRow({ name, value }) {
  return (
    <>
      {value ? (
        <tr className="h-16 text-secondary-foreground">
          <td>{name}</td>
          {value.map((value, index) => (
            // Values of the row
            <td className="text-center" key={index}>
              {typeof value === "string" ? (
                // Incase of string Values
                value
              ) : // In case of boolean values
              value ? (
                <Check className="text-accent mx-auto w-6 h-6" />
              ) : (
                <Cross className="text-secondary-foreground opacity-50 mx-auto w-5 h-5" />
              )}
            </td>
          ))}
        </tr>
      ) : (
        <>
          <tr className="h-20 border-b border-outline-secondary ">
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

export const Check = (props) => (
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

export const Cross = (props) => (
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
