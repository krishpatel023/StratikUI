import { Icons } from "@/utils/icons";
import { Fragment } from "react";

export type TechnologiesUsedProps =
  | "tailwind-css"
  | "framer-motion"
  | "twMerge"
  | "uuid"
  | "cuid2"
  | "react-aria";

export const TechnologyUsed = ({
  technologies,
}: {
  technologies: TechnologiesUsedProps[];
}) => {
  const TechData = {
    "tailwind-css": {
      name: "Tailwind CSS",
      link: "https://tailwindcss.com/",
      logo: <Icons.tailwindcss className="w-6 h-6" />,
    },
    "framer-motion": {
      name: "Framer Motion",
      link: "https://www.framer.com/motion/",
      logo: <Icons.framerMotion className="w-4 h-4" />,
    },
    twMerge: {
      name: "Tailwind Merge",
      link: "https://github.com/dcastil/tailwind-merge",
      logo: <Icons.twMerge className="w-8 h-8" />,
    },
    uuid: {
      name: "UUID",
      link: "https://www.npmjs.com/package/uuid",
      logo: <h1 className="font-bold text-blue-500 text-base">UUID</h1>,
    },
    cuid2: {
      name: "CUID 2",
      link: "https://www.npmjs.com/package/@paralleldrive/cuid2",
      logo: <h1 className="font-bold text-blue-500 text-base">CUID 2</h1>,
    },
    "react-aria": {
      name: "",
      link: "https://react-spectrum.adobe.com/react-aria/",
      logo: (
        <div className="flex gap-2 text-black dark:text-white">
          <Icons.reactAria className="w-6 h-6 " />
          <span className="text-base font-medium">React Aria</span>
        </div>
      ),
    },
  };
  return (
    <div>
      <h1 className="text-lg font-medium text-textPrimary">Technology Used</h1>
      <div className="flex justify-start gap-8 mt-2 flex-wrap">
        {technologies &&
          technologies.map((item, i) => (
            <Fragment key={i}>
              <a
                href={TechData[item].link}
                target="_blank"
                className="flex justify-start items-center gap-2 text-sm text-textPrimary"
                rel="nofollow"
              >
                {TechData[item].logo}
                {TechData[item].name}
              </a>
            </Fragment>
          ))}
      </div>
    </div>
  );
};
