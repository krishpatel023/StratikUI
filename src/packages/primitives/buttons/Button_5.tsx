import { DataDescription, ImplementationNode } from "@/utils/constants";
import { ButtonHTMLAttributes } from "react";

function Demo() {
  return (
    <div>
      <Button />
    </div>
  );
}

function Button() {
  return (
    <button className="bg-slate-950 text-slate-400 border border-slate-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
      <span className="bg-slate-400 shadow-slate-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
      Hover Me
    </button>
  );
}

const ButtonCode: string = `function Button() {
  return (
    <button
      className="bg-slate-950 text-slate-400 border border-slate-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
    >
      <span className="bg-slate-400 shadow-slate-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
      Hover Me
    </button>
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
        name: "Button",
        content: [
          {
            language: "tsx",
            code: ButtonCode,
          },
          {
            language: "jsx",
            code: ButtonCode,
          },
        ],
      },
    ],
  },
  {
    type: "inspiration",
    content: {
      link: "https://portfolio-catraco.vercel.app/",
      message: "Inspired from ",
      name: "Catraco",
    },
  },
];

const ButtonData_1: DataDescription = {
  name: "Animated Button using Tailwind CSS",
  description:
    "This is an animated button with hover animation that can be used on catchy locations.",
  implementation: Implementation,
  component: Demo(),
  version_included: "0.0.3",
  display: true,
};
export default ButtonData_1;
