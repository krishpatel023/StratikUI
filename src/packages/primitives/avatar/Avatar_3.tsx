import { DataDescription, ImplementationNode } from "@/utils/constants";
import Image from "next/image";
import DummyImage from "@/assets/Images/Image_4.jpg";
import { twMerge } from "tailwind-merge";
import { NotionLogoIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
function Avatar({ withBorder = true }: { withBorder?: boolean }) {
  return (
    <div
      className={twMerge(
        "w-12 h-12 rounded-full relative",
        withBorder && "border-2 border-foreground"
      )}
    >
      <Image
        src={DummyImage}
        alt=""
        className="rounded-[inherit] w-full h-full"
      />
      <div
        className={twMerge(
          "absolute -right-1 bottom-0 w-6 h-6 rounded-full flex justify-center items-center bg-foreground text-s_textComplementary"
        )}
      >
        <Icon className="w-3/4 h-3/4 rounded-[inherit]" />
      </div>
    </div>
  );
}
const Icon = (props: IconProps) => {
  return <NotionLogoIcon {...props} />;
};
function Demo() {
  return (
    <div className="w-full flex justify-center gap-6">
      <Avatar />
    </div>
  );
}

const CodeTsx: string = `function Avatar({ withBorder = true }: { withBorder?: boolean }) {
  return (
    <div
      className={twMerge(
        "w-12 h-12 rounded-full relative",
        withBorder && "border-2 border-foreground"
      )}
    >
      <Image
        src={DummyImage}
        alt=""
        className="rounded-[inherit] w-full h-full"
      />
      <div
        className={twMerge(
          "absolute -right-1 bottom-0 w-6 h-6 rounded-full flex justify-center items-center bg-foreground"
        )}
      >
        <Icon className="w-3/4 h-3/4 rounded-[inherit]" />
      </div>
    </div>
  );
}`;

const CodeJsx: string = `function Avatar({ withBorder = true }) {
  return (
    <div
      className={twMerge(
        "w-12 h-12 rounded-full relative",
        withBorder && "border-2 border-foreground"
      )}
    >
      <Image
        src={DummyImage}
        alt=""
        className="rounded-[inherit] w-full h-full"
      />
      <div
        className={twMerge(
          "absolute -right-1 bottom-0 w-6 h-6 rounded-full flex justify-center items-center bg-foreground"
        )}
      >
        <Icon className="w-3/4 h-3/4 rounded-[inherit]" />
      </div>
    </div>
  );
}`;

const DemoString: string = `function Demo() {
  return (
    <div className="w-full flex justify-center gap-6">
      <Avatar/>
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
  name: "Avatar with Company Logo",
  description: "This is an avatar component with company logo.",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.0.1",
  display: true,
};

export default Data;
