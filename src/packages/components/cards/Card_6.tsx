import { DataDescription, ImplementationNode } from "@/utils/constants";

function Card() {
  return (
    <div className="w-[35rem] h-auto @md:h-[20rem] rounded-lg flex flex-col @md:flex-row py-6 px-6  bg-white dark:bg-black text-s_textPrimary border-[1px] shadow-sm border-neutral-300 dark:border-neutral-600">
      <div className="w-full h-40 @md:w-1/2 @md:h-full rounded-lg bg-gradient-to-br from-neutral-400 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700"></div>

      <div className="@md:w-1/2 px-6 py-6 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Title</h1>
        <h3>
          This is something great. Design this according to your needs and make
          it look great.
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
    <div className="w-[35rem] h-auto @md:h-[20rem] rounded-lg flex flex-col @md:flex-row py-6 px-6  bg-white dark:bg-black text-s_textPrimary border-[1px] shadow-sm border-neutral-300 dark:border-neutral-600">
      <div className="w-full h-40 @md:w-1/2 @md:h-full rounded-lg bg-gradient-to-br from-neutral-400 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700"></div>

      <div className="@md:w-1/2 px-6 py-6 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Title</h1>
        <h3>
          This is something great. Design this according to your needs and make
          it look great.
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
  name: "Banner Card",
  description:
    "This is a banner card that can be used as product card or to display any other information.",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.0.6",
  display: true,
};

export default Data;
