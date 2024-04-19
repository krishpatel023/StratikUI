import { DataDescription, ImplementationNode } from "@/utils/constants";
import {
  AnimatedButton,
  ButtonString,
} from "@/packages/primitives/buttons/Button_2_Helper";

function Demo() {
  return (
    <div>
      <AnimatedButton />
    </div>
  );
}

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
    content: ["tailwind-css", "framer-motion"],
  },
  {
    type: "code",
    content: [
      {
        name: "Button",
        content: [
          {
            language: "tsx",
            code: ButtonString,
          },
          {
            language: "jsx",
            code: ButtonString,
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
  name: "Animated Button for Call to Action",
  description:
    "This is animated button that can be used in marketing sites where there is a need of a cool call to action button.",
  implementation: Implementation,
  component: Demo(),
  version_included: "0.0.1",
  display: true,
};
export default ButtonData_1;
