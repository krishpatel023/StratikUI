import { DataDescription, ImplementationNode } from "@/utils/constants";
import Image from "next/image";
import DummyImage from "@/assets/Images/Image_4.jpg";
import { twMerge } from "tailwind-merge";
function Avatar({
  state = "active",
  withBorder = true,
}: {
  state?: "active" | "inactive" | "waiting";
  withBorder?: boolean;
}) {
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
          "absolute -right-[1px] bottom-[1px] w-4 h-4 rounded-full",
          state === "active" && "bg-s_success",
          state === "inactive" && "bg-s_error",
          state === "waiting" && "bg-yellow-500"
        )}
      ></div>
    </div>
  );
}

function Demo() {
  return (
    <div className="w-full flex justify-center gap-6">
      <Avatar state="active" />
      <Avatar state="inactive" />
      <Avatar state="waiting" />
    </div>
  );
}

const CodeTsx: string = `function Avatar({
  state = "active",
  withBorder = true,
}: {
  state?: "active" | "inactive" | "waiting";
  withBorder?: boolean;
}) {
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
          "absolute -right-[1px] bottom-[1px] w-4 h-4 rounded-full",
          state === "active" && "bg-s_success",
          state === "inactive" && "bg-s_error",
          state === "waiting" && "bg-yellow-500"
        )}
      ></div>
    </div>
  );
}`;

const CodeJsx: string = `function Avatar({
  state = "active",
  withBorder = true,
}) {
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
          "absolute -right-[1px] bottom-[1px] w-4 h-4 rounded-full",
          state === "active" && "bg-s_success",
          state === "inactive" && "bg-s_error",
          state === "waiting" && "bg-yellow-500"
        )}
      ></div>
    </div>
  );
}`;

const DemoString: string = `function Demo() {
  return (
    <div className="w-full flex justify-center gap-6">
      <Avatar state="active" />
      <Avatar state="inactive" />
      <Avatar state="waiting" />
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
  name: "Avatar with Active State",
  description: "This is an avatar component with active state.",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.0.1",
  display: true,
};

export default Data;
