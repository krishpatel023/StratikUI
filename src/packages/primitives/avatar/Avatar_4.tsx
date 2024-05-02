import { DataDescription, ImplementationNode } from "@/utils/constants";
import Image from "next/image";
import DummyImage from "@/assets/Images/Image_4.jpg";
import { twMerge } from "tailwind-merge";
import { NotionLogoIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { Background } from "@/packages/helper/Background";
import ArrowHeading from "@/components/ui/ArrowHeading";
function Avatar({
  withBorder = true,
  placeholder,
  background = "bg-neutral-300 dark:bg-neutral-600",
}: {
  withBorder?: boolean;
  placeholder: string;
  background?: string;
}) {
  const array = placeholder.split(" ");
  const firstName = array[0].charAt(0);
  const lastName = array[1].charAt(0);
  const initials = firstName + lastName;

  return (
    <div
      className={twMerge(
        "w-12 h-12 rounded-full flex justify-center items-center text-center",
        withBorder && "border-2 border-neutral-600 dark:border-neutral-200",
        background
      )}
    >
      <h1 className="text-2xl text-s_textPrimary">{initials}</h1>
    </div>
  );
}

function Demo() {
  return (
    <div className="w-full flex flex-col items-center gap-6">
      <ArrowHeading text="Krish Patel with Default Background" />
      <Avatar placeholder="Krish Patel" />
      <ArrowHeading text="Krish Patel with Gradient Background" />
      <Avatar
        placeholder="Krish Patel"
        background="bg-gradient-to-br from-blue-500 to-pink-400 "
      />
    </div>
  );
}

const CodeTsx: string = `function Avatar({
  withBorder = true,
  placeholder,
  background = "bg-neutral-300 dark:bg-neutral-600",
}: {
  withBorder?: boolean;
  placeholder: string;
  background?: string;
}) {
  const array = placeholder.split(" ");
  const firstName = array[0].charAt(0);
  const lastName = array[1].charAt(0);
  const initials = firstName + lastName;

  return (
    <div
      className={twMerge(
        "w-12 h-12 rounded-full flex justify-center items-center text-center",
        withBorder && "border-2 border-neutral-600 dark:border-neutral-200",
        background
      )}
    >
      <h1 className="text-2xl text-s_textPrimary">{initials}</h1>
    </div>
  );
}`;

const CodeJsx: string = `function Avatar({
  withBorder = true,
  placeholder,
  background = "bg-neutral-300 dark:bg-neutral-600",
) {
  const array = placeholder.split(" ");
  const firstName = array[0].charAt(0);
  const lastName = array[1].charAt(0);
  const initials = firstName + lastName;

  return (
    <div
      className={twMerge(
        "w-12 h-12 rounded-full flex justify-center items-center text-center",
        withBorder && "border-2 border-neutral-600 dark:border-neutral-200",
        background
      )}
    >
      <h1 className="text-2xl text-s_textPrimary">{initials}</h1>
    </div>
  );
}`;

const DemoString: string = `function Demo() {
  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Avatar placeholder="Krish Patel" />
      <Avatar
        placeholder="Krish Patel"
        background="bg-gradient-to-br from-blue-500 to-pink-400 "
      />
    </div>
  );
}`;

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    content: ["tailwind-css", "twMerge"],
  },
  {
    type: "code",
    content: [
      {
        name: "Avatar",
        content: [
          { language: "tsx", code: CodeTsx },
          { language: "jsx", code: CodeJsx },
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
  name: "Avatar with Initials",
  description: "This is an avatar component with initials.",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.0.1",
  display: true,
};

export default Data;
