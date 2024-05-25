import { DataDescription, ImplementationNode } from "@/utils/constants";
import { NavbarGroup } from "./Header_Continuous_Dropdowns_Helper";
import { Warning } from "@/packages/ui/Warning";

function HeaderImplementation() {
  const navHeadings = [
    {
      title: "Home",
      link: "#",
      content: null,
    },
    {
      title: "Pricing",
      link: "#",
      content: null,
    },
    {
      title: "Products",
      content: (
        <div>
          <h4 className="font-semibold text-sm mb-4">Categories</h4>
          <ul className="text-sm text-neutral-950 dark:text-neutral-300 flex flex-col gap-2">
            <li className="hover:text-blue-500 hover:cursor-pointer">
              Electronics
            </li>
            <li className="hover:text-blue-500 hover:cursor-pointer">
              Clothing
            </li>
            <li className="hover:text-blue-500 hover:cursor-pointer">Books</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Services",
      content: (
        <div>
          <h4 className="font-semibold text-sm mb-4">Our Services</h4>
          <ul className="text-sm text-neutral-950 dark:text-neutral-300 flex flex-col gap-2">
            <li className="hover:text-blue-500 hover:cursor-pointer">
              Web Development
            </li>
            <li className="hover:text-blue-500 hover:cursor-pointer">
              Mobile App Development
            </li>
            <li className="hover:text-blue-500 hover:cursor-pointer">
              IT Consulting
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "About",
      content: (
        <div>
          <h4 className="font-semibold text-sm mb-4">About Our Company</h4>
          <p className="text-sm text-neutral-950 dark:text-neutral-300">
            We are a leading provider of innovative solutions for businesses of
            all sizes. Our team of experts has years of experience in nothing{" "}
            {":)"}
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="h-16 border border-neutral-400 dark:border-neutral-800 px-10 rounded-lg">
      <NavbarGroup headings={navHeadings} />
    </div>
  );
}

function Demo() {
  return (
    <div className="w-full min-h-[25rem] flex flex-col justify-center items-center">
      <Warning message="This component is made for computers and not for mobile views. Please view on a larger screen to see its functionality." />
      <HeaderImplementation />
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
  name: "Header continuous Dropdowns",
  description: "Component Description",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.1.1",
  display: true,
};

export default Data;
