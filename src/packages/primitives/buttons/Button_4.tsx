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
    <button className="group relative h-10 w-40 font-medium text-s_textPrimary transition-colors duration-[400ms] hover:text-s_accent">
      <span>Hover</span>

      <span className="absolute left-0 top-0 h-[2px] w-0 bg-s_accent transition-all duration-100 group-hover:w-full" />
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-s_accent transition-all delay-100 duration-100 group-hover:h-full" />
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-s_accent transition-all delay-200 duration-100 group-hover:w-full" />
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-s_accent transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
}

const ButtonCode: string = `function Button() {
  return (
    <button className="group relative h-10 w-40 font-medium text-s_textPrimary transition-colors duration-[400ms] hover:text-s_accent">
      <span>Hover</span>

      <span className="absolute left-0 top-0 h-[2px] w-0 bg-s_accent transition-all duration-100 group-hover:w-full" />
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-s_accent transition-all delay-100 duration-100 group-hover:h-full" />
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-s_accent transition-all delay-200 duration-100 group-hover:w-full" />
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-s_accent transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
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
  name: "Animated Button using Tailwind Css",
  description:
    "This is an animated button that can be used on catchy locations.",
  implementation: Implementation,
  component: Demo(),
  version_included: "0.0.3",
  display: true,
};
export default ButtonData_1;
