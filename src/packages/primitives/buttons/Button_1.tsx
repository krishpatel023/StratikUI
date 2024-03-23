import { DataDescription, ImplementationNode } from "@/utils/constants";
import { useEffect } from "react";

function Button() {
  return (
    <>
      <button className="bg-s_accent rounded text-s_textComplementary py-1 px-4">
        Click
      </button>
    </>
  );
}

const ButtonCode: string = `function Button() {
  return (
    <>
      <button className="bg-s_accent rounded text-s_textComplementary py-1 px-4">
        Click
      </button>
    </>
  );
}`;

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    title: "Technology Used",
    content: ["tailwind-css"],
  },
  {
    type: "code",
    title: "Code",
    content: ButtonCode,
  },
];

const ButtonData_1: DataDescription = {
  name: "Default Button",
  description: "This is a default button",
  implementation: Implementation,
  component: Button(),
  version_included: "0.0.1",
  display: true,
};
export default ButtonData_1;
