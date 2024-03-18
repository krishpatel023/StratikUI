import { DataDescription, ImplementationNode } from "@/utils/constants";
import { useEffect } from "react";

function Button_1() {
  return (
    <>
      <button className="bg-black  py-4">Click</button>
      <div className="text-center">
        <h1>Hello</h1>
      </div>
    </>
  );
}

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    title: "Technology Used",
    content: ["Tailwind CSS"],
  },
  {
    type: "code",
    title: "Code",
    content: "",
  },
];

const ButtonData_1: DataDescription = {
  name: "Default Button",
  description: "This is a default button",
  implementation: Implementation,
  component: Button_1(),
  version_included: "0.0.1",
};
export default ButtonData_1;
