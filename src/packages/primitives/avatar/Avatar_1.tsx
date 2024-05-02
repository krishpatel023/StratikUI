import { DataDescription, ImplementationNode } from "@/utils/constants";
import Image from "next/image";
import DummyImage from "@/assets/Images/Image_2.jpg";
import { twMerge } from "tailwind-merge";
import ArrowHeading from "@/components/ui/ArrowHeading";
function Avatar({ withBorder = true }: { withBorder?: boolean }) {
  return (
    <div
      className={twMerge(
        "w-12 h-12 rounded-full",
        withBorder && "border-2 border-foreground"
      )}
    >
      <Image
        src={DummyImage}
        alt=""
        className="rounded-[inherit] w-full h-full"
      />
    </div>
  );
}

function Demo() {
  return (
    <div className="w-full flex flex-col items-center gap-6">
      <ArrowHeading text="With Border" />
      <Avatar />
      <ArrowHeading text="Without Border" />
      <Avatar withBorder={false} />
    </div>
  );
}

const CodeTsx: string = `function Avatar({ withBorder = true }: { withBorder?: boolean }) {
  return (
    <div
      className={twMerge(
        "w-12 h-12 rounded-full",
        withBorder && "border-2 border-foreground"
      )}
    >
      <Image
        src={DummyImage}
        alt=""
        className="rounded-[inherit] w-full h-full"
      />
    </div>
  );
}`;

const CodeJsx: string = `function Avatar({ withBorder = true }) {
  return (
    <div
      className={twMerge(
        "w-12 h-12 rounded-full",
        withBorder && "border-2 border-foreground"
      )}
    >
      <Image
        src={DummyImage}
        alt=""
        className="rounded-[inherit] w-full h-full"
      />
    </div>
  );
}`;

const DemoString: string = `function Demo() {
  return (
    <div className="w-full flex flex-col items-center gap-6">
      <ArrowHeading text="With Border" />
      <Avatar />
      <ArrowHeading text="Without Border" />
      <Avatar withBorder={false} />
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
  name: "Default Avatar",
  description: "This is a default avatar",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.0.1",
  display: true,
};

export default Data;
