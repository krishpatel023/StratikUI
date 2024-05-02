import { DataDescription, ImplementationNode } from "@/utils/constants";
import Image, { StaticImageData } from "next/image";
import DummyImage1 from "@/assets/Images/Image_2.jpg";
import DummyImage2 from "@/assets/Images/Image_3.jpg";
import DummyImage3 from "@/assets/Images/Image_4.jpg";
import DummyImage4 from "@/assets/Images/Image_5.jpg";

import { twMerge } from "tailwind-merge";
import ArrowHeading from "@/components/ui/ArrowHeading";
function Avatar({
  withBorder = true,
  className,
  value,
}: {
  withBorder?: boolean;
  className?: string;
  value: StaticImageData;
}) {
  return (
    <div
      className={twMerge(
        "w-12 h-12 rounded-full",
        withBorder && "border-2 border-foreground",
        className
      )}
    >
      <Image src={value} alt="" className="rounded-[inherit] w-full h-full" />
    </div>
  );
}

function AvatarGroup({
  children,
  withAdditional,
  additionalAvatars,
}: {
  children: React.ReactNode;
  withAdditional?: boolean;
  additionalAvatars?: number;
}) {
  return (
    <div className="relative mx-auto min-w-40 min-h-12">
      {children}
      {withAdditional && (
        <div
          className={twMerge(
            "w-12 h-12 rounded-full border-2 border-foreground absolute left-[7.5rem] bg-neutral-200 dark:bg-neutral-600 flex justify-center items-center"
          )}
        >
          <h1 className="text-xl text-s_textPrimary">
            {"+"}
            {additionalAvatars}
          </h1>
        </div>
      )}
    </div>
  );
}

function Demo() {
  return (
    <div className="w-full min-h-40 flex flex-col justify-center items-center gap-10">
      <ArrowHeading text="Without Additional Avatars" />
      <AvatarGroup withAdditional={false}>
        <Avatar value={DummyImage1} className="absolute" />
        <Avatar value={DummyImage2} className="absolute left-6" />
        <Avatar value={DummyImage3} className="absolute left-12" />
        <Avatar value={DummyImage4} className="absolute left-[4.5rem]" />
        <Avatar value={DummyImage2} className="absolute left-[6rem]" />
      </AvatarGroup>
      <ArrowHeading text="With Additional Avatars" />
      <AvatarGroup withAdditional={true} additionalAvatars={6}>
        <Avatar value={DummyImage1} className="absolute" />
        <Avatar value={DummyImage2} className="absolute left-6" />
        <Avatar value={DummyImage3} className="absolute left-12" />
        <Avatar value={DummyImage4} className="absolute left-[4.5rem]" />
        <Avatar value={DummyImage2} className="absolute left-[6rem]" />
      </AvatarGroup>
    </div>
  );
}

const CodeTsx: string = `function AvatarGroup({
  children,
  withAdditional,
  additionalAvatars,
}: {
  children: React.ReactNode;
  withAdditional?: boolean;
  additionalAvatars?: number;
}) {
  return (
    <div className="relative mx-auto min-w-40 min-h-12">
      {children}
      {withAdditional && (
        <div
          className={twMerge(
            "w-12 h-12 rounded-full border-2 border-foreground absolute left-[7.5rem] bg-neutral-200 dark:bg-neutral-600 flex justify-center items-center"
          )}
        >
          <h1 className="text-xl text-s_textPrimary">
            {"+"}
            {additionalAvatars}
          </h1>
        </div>
      )}
    </div>
  );
}`;

const CodeJsx: string = `function AvatarGroup({
  children,
  withAdditional,
  additionalAvatars,
}) {
  return (
    <div className="relative mx-auto min-w-40 min-h-12">
      {children}
      {withAdditional && (
        <div
          className={twMerge(
            "w-12 h-12 rounded-full border-2 border-foreground absolute left-[7.5rem] bg-neutral-200 dark:bg-neutral-600 flex justify-center items-center"
          )}
        >
          <h1 className="text-xl text-s_textPrimary">
            {"+"}
            {additionalAvatars}
          </h1>
        </div>
      )}
    </div>
  );
}`;

const DemoString: string = `function Demo() {
  return (
    <div className="w-full min-h-40 flex flex-col justify-center items-center gap-10">
      <ArrowHeading text="Without Additional Avatars" />
      <AvatarGroup withAdditional={false}>
        <Avatar value={DummyImage1} className="absolute" />
        <Avatar value={DummyImage2} className="absolute left-6" />
        <Avatar value={DummyImage3} className="absolute left-12" />
        <Avatar value={DummyImage4} className="absolute left-[4.5rem]" />
        <Avatar value={DummyImage2} className="absolute left-[6rem]" />
      </AvatarGroup>
      <ArrowHeading text="With Additional Avatars" />
      <AvatarGroup withAdditional={true} additionalAvatars={6}>
        <Avatar value={DummyImage1} className="absolute" />
        <Avatar value={DummyImage2} className="absolute left-6" />
        <Avatar value={DummyImage3} className="absolute left-12" />
        <Avatar value={DummyImage4} className="absolute left-[4.5rem]" />
        <Avatar value={DummyImage2} className="absolute left-[6rem]" />
      </AvatarGroup>
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
  name: "Default Avatar Group",
  description: "This is a default avatar group",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.0.1",
  display: true,
};

export default Data;
