import { DataDescription, ImplementationNode } from "@/utils/constants";
import { useAnimate } from "framer-motion";
import { AnimatedButton } from "@/packages/primitives/buttons/Button_4_Helper";

function Demo() {
  return (
    <div>
      <AnimatedButton />
    </div>
  );
}

const ButtonCode: string = `export const AnimatedButton = () => {
  const [scope, animate] = useAnimate();

  const handleMouseEnter = () => {
    animate(
      scope.current,
      {
        y: ["0%", "-30%"],
      },
      {
        duration: 0.5,
        ease: "easeInOut",
      }
    );
  };

  const handleMouseLeave = () => {
    animate(
      scope.current,
      {
        y: ["-30%", "0%"],
      },
      {
        duration: 0.4,
      }
    );
  };
  return (
    <button
      className="relative bg-s_primary text-s_textComplementary @md:w-auto py-2 px-4 rounded-lg flex justify-center items-center overflow-hidden group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="text-s_textComplementary font-semibold z-20 group-hover:text-s_textPrimary">
        Join the waitlist
      </h1>
      <div
        className="min-w-60 min-h-60 absolute top-full rounded-full   bg-s_secondary"
        ref={scope}
      ></div>
    </button>
  );
};`;

const demoString: string = `function Demo() {
  return (
    <div>
      <AnimatedButton />
    </div>
  );
}`;

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    title: "Technology Used",
    content: ["tailwind-css", "framer-motion"],
  },
  {
    type: "code",
    title: "Code",
    content: ButtonCode,
  },
  {
    type: "code",
    title: "Code",
    content: demoString,
  },
];

const ButtonData_1: DataDescription = {
  name: "Disabled Button with Icon",
  description:
    "This is a disabledbutton with Icon option. The Icon can be passed as a prop and if not passed it will act as a default button",
  implementation: Implementation,
  component: Demo(),
  version_included: "0.0.1",
  display: true,
};
export default ButtonData_1;
