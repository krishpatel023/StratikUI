import { DataDescription, ImplementationNode } from "@/utils/constants";

function Demo() {
  return (
    <div>
      <Button />
    </div>
  );
}

function Button() {
  return (
    <div className="relative w-40 h-10 group">
      <button className="absolute w-full h-full bg-s_secondary z-20 group-hover:top-1 group-hover:left-1 rounded text-s_textPrimary font-medium">
        Click
      </button>
      <div className="absolute top-1 left-1 bg-s_primary  w-full h-full z-0 rounded"></div>
    </div>
  );
}

const ButtonCode: string = `function Button() {
  return (
    <div className="relative w-40 h-10 group">
      <button className="absolute w-full h-full bg-s_secondary z-20 group-hover:top-1 group-hover:left-1 rounded text-s_textPrimary font-medium">
        Click
      </button>
      <div className="absolute top-1 left-1 bg-s_primary  w-full h-full z-0 rounded"></div>
    </div>
  );
}`;

const demoString: string = `function Demo() {
  return (
    <div>
      <Button />
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
      {
        name: "Implementation",
        content: [
          {
            language: "tsx",
            code: demoString,
          },
          {
            language: "jsx",
            code: demoString,
          },
        ],
      },
    ],
  },
];

const ButtonData_1: DataDescription = {
  name: "Animated Button with Tailwind CSS",
  description:
    "This is an animated button that can be used on catchy locations. You can also replace the button with other buttons from the library.",
  implementation: Implementation,
  component: Demo(),
  version_included: "0.0.3",
  display: true,
};
export default ButtonData_1;
