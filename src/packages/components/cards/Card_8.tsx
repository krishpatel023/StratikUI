import { DataDescription, ImplementationNode } from "@/utils/constants";

function Card() {
  return (
    <div className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200  to-neutral-200 dark:from-sky-500 dark:to-neutral-600 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 dark:bg-neutral-800 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
      <div className="w-28 h-28 bg-neutral-400 dark:bg-neutral-600 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500 "></div>
      <div className="z-10  group-hover:-translate-y-12 transition-all duration-500 text-s_textPrimary">
        <span className="text-2xl font-semibold">John Doe</span>
        <p>Developer</p>
        <span className="hidden group-hover:block delay-300 px-4">
          This is the description of the person that you want to provide.
        </span>
      </div>
      <a
        className="bg-neutral-700 dark:bg-neutral-600 px-4 py-1 text-slate-50 rounded-md z-10 group-hover:-translate-y-4 transition-all duration-500 hover:bg-neutral-500"
        href="#"
      >
        Folow
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
    <div className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200  to-neutral-200 dark:from-sky-500 dark:to-neutral-600 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 dark:bg-neutral-800 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
      <div className="w-28 h-28 bg-neutral-400 dark:bg-neutral-600 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500 "></div>
      <div className="z-10  group-hover:-translate-y-12 transition-all duration-500 text-s_textPrimary">
        <span className="text-2xl font-semibold">John Doe</span>
        <p>Developer</p>
        <span className="hidden group-hover:block delay-300 px-4">
          This is the description of the person that you want to provide.
        </span>
      </div>
      <a
        className="bg-neutral-700 dark:bg-neutral-600 px-4 py-1 text-slate-50 rounded-md z-10 group-hover:-translate-y-4 transition-all duration-500 hover:bg-neutral-500"
        href="#"
      >
        Folow
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
  name: "Contact Card",
  description:
    "This is a contact card that can be used as workforce introduction.",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.0.6",
  display: true,
};

export default Data;
