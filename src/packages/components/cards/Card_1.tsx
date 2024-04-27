import { DataDescription, ImplementationNode } from "@/utils/constants";

function Card() {
  return (
    <div className="w-80 py-4 px-6 rounded-lg flex flex-col justify-center gap-4 dark:bg-neutral-800 bg-neutral-100 text-s_textPrimary border-[1px] shadow-sm border-neutral-300 dark:border-neutral-600">
      <div className="min-h-40 min-w-full bg-gradient-to-br from-neutral-400 to-neutral-200 dark:from-neutral-700 dark:to-neutral-600 rounded-lg"></div>
      <h1 className="text-2xl font-semibold">Title</h1>
      <h3>
        This is something great. Design this according to your needs and make it
        look great.
      </h3>
      <button className="w-full h-10 rounded-md bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-500 text-s_textPrimary">
        Get Started
      </button>
    </div>
  );
}

function Demo() {
  return (
    <div className="w-full min-h-[40rem] flex justify-center items-center">
      <Card />
    </div>
  );
}

const Code: string = `function Card() {
  return (
    <div className="w-80 py-4 px-6 rounded-lg flex flex-col justify-center gap-4 dark:bg-neutral-800 bg-neutral-100 text-s_textPrimary border-[1px] shadow-sm border-neutral-300 dark:border-neutral-600">
      <div className="min-h-40 min-w-full bg-gradient-to-br from-blue-800 to-purple-600 rounded-lg"></div>
      <h1 className="text-2xl font-semibold">Hello</h1>
      <h3>
        This is something great. Design this according to your needs and make it
        look great.
      </h3>
      <button className="w-full h-10 rounded-md bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-500 text-s_textPrimary">
        Get Started
      </button>
    </div>
  );
}`;

const DemoString: string = `function Demo() {
  return (
    <div className="w-full min-h-[40rem] flex justify-center items-center">
      <Card />
    </div>
  );
}`;

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    content: ["tailwind-css"],
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
  name: "Default Card",
  description:
    "This card can be used as product card or to display any other information.",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.0.6",
  display: true,
};

export default Data;
