import { DataDescription, ImplementationNode } from "@/utils/constants";

function Card() {
  return (
    <div className="w-80 py-4 px-6 rounded-lg flex flex-col justify-center gap-3 dark:bg-neutral-800 bg-neutral-100 text-s_textPrimary border-[1px] shadow-sm border-neutral-300 dark:border-neutral-600">
      <h1 className="text-2xl font-semibold">Title</h1>
      <h2>Subtitle Text</h2>
      <h3>
        This is something great. Design this according to your needs and make it
        look great.
      </h3>
      <a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 dark:text-blue-500 font-semibold mt-4 flex gap-2 hover:gap-4 transition-all duration-200"
      >
        Get Started <span>&rarr;</span>
      </a>
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
    <div className="w-80 py-4 px-6 rounded-lg flex flex-col justify-center gap-3 dark:bg-neutral-800 bg-neutral-100 text-s_textPrimary border-[1px] shadow-sm border-neutral-300 dark:border-neutral-600">
      <h1 className="text-2xl font-semibold">Title</h1>
      <h2>Subtitle Text</h2>
      <h3>
        This is something great. Design this according to your needs and make it
        look great.
      </h3>
      <a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 dark:text-blue-500 font-semibold mt-4 flex gap-2 hover:gap-4 transition-all duration-200"
      >
        Get Started <span>&rarr;</span>
      </a>
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
  name: "Simple Card with Link",
  description:
    "This is a simple card with link that can be used as product card or to display any other information.",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.0.6",
  display: true,
};

export default Data;
