import { Fragment } from "react";
import { IconProps } from "../../utils/constants";
import React from "react";

const Icons = {
  tailwindcss: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 128 128"
      {...props}
    >
      <path
        fill="#38bdf8"
        d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602c-6.399 8.536-13.867 11.735-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597c-6.399 8.531-13.867 11.73-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
      ></path>
    </svg>
  ),
  twMerge: (props: IconProps) => (
    <svg
      viewBox="0 0 66 45"
      fill="#6366F1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.1"
        d="M39 12C31.8 12 27.3 15.6 25.5 22.8C28.2 19.2 31.35 17.85 34.95 18.75C37.004 19.263 38.472 20.754 40.097 22.403C42.744 25.09 45.808 28.2 52.5 28.2C59.7 28.2 64.2 24.6 66 17.4C63.3 21 60.15 22.35 56.55 21.45C54.496 20.937 53.028 19.446 51.403 17.797C48.756 15.11 45.692 12 39 12ZM25.5 28.2C18.3 28.2 13.8 31.8 12 39C14.7 35.4 17.85 34.05 21.45 34.95C23.504 35.464 24.972 36.954 26.597 38.603C29.244 41.29 32.308 44.4 39 44.4C46.2 44.4 50.7 40.8 52.5 33.6C49.8 37.2 46.65 38.55 43.05 37.65C40.996 37.137 39.528 35.646 37.903 33.997C35.256 31.31 32.192 28.2 25.5 28.2Z"
      />
      <path
        opacity="0.25"
        d="M35 8C27.8 8 23.3 11.6 21.5 18.8C24.2 15.2 27.35 13.85 30.95 14.75C33.004 15.263 34.472 16.754 36.097 18.403C38.744 21.09 41.808 24.2 48.5 24.2C55.7 24.2 60.2 20.6 62 13.4C59.3 17 56.15 18.35 52.55 17.45C50.496 16.937 49.028 15.446 47.403 13.797C44.756 11.11 41.692 8 35 8ZM21.5 24.2C14.3 24.2 9.8 27.8 8 35C10.7 31.4 13.85 30.05 17.45 30.95C19.504 31.464 20.972 32.954 22.597 34.603C25.244 37.29 28.308 40.4 35 40.4C42.2 40.4 46.7 36.8 48.5 29.6C45.8 33.2 42.65 34.55 39.05 33.65C36.996 33.137 35.528 31.646 33.903 29.997C31.256 27.31 28.192 24.2 21.5 24.2Z"
      />
      <path
        opacity="0.5"
        d="M31 4C23.8 4 19.3 7.6 17.5 14.8C20.2 11.2 23.35 9.85 26.95 10.75C29.004 11.263 30.472 12.754 32.097 14.403C34.744 17.09 37.808 20.2 44.5 20.2C51.7 20.2 56.2 16.6 58 9.4C55.3 13 52.15 14.35 48.55 13.45C46.496 12.937 45.028 11.446 43.403 9.797C40.756 7.11 37.692 4 31 4ZM17.5 20.2C10.3 20.2 5.8 23.8 4 31C6.7 27.4 9.85 26.05 13.45 26.95C15.504 27.464 16.972 28.954 18.597 30.603C21.244 33.29 24.308 36.4 31 36.4C38.2 36.4 42.7 32.8 44.5 25.6C41.8 29.2 38.65 30.55 35.05 29.65C32.996 29.137 31.528 27.646 29.903 25.997C27.256 23.31 24.192 20.2 17.5 20.2Z"
      />
      <path d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.464 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z" />
    </svg>
  ),
  framerMotion: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="currentColor" d="M4 0h16v8h-8zm0 8h8l8 8H4zm0 8h8v8z"></path>
    </svg>
  ),
  reactAria: (props: IconProps) => (
    <svg
      height="200"
      width="200"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 1v18.001L12.607 1H20ZM7.399 1L0 19.001V1h7.399Zm2.604 6.265L14.713 19h-3.086l-1.41-3.419H6.77l3.233-8.316Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ),
};

export interface TechProps {
  name: string;
  link: string;
  logo: React.JSX.Element;
}

export interface TECH_USED_PROPS {
  tailwindcss: TechProps;
  "framer-motion": TechProps;
  "tailwind-merge": TechProps;
  uuid: TechProps;
  "@paralleldrive/cuid2": TechProps;
  "react-aria-components": TechProps;
}

export type TechNames =
  | "tailwindcss"
  | "framer-motion"
  | "tailwind-merge"
  | "uuid"
  | "@paralleldrive/cuid2"
  | "react-aria-components";

export const TECH_USED: TECH_USED_PROPS = {
  tailwindcss: {
    name: "",
    link: "https://tailwindcss.com/",
    logo: (
      <div className="flex gap-2 text-foreground items-center">
        <Icons.tailwindcss className="w-6 h-6" />
        TailwindCSS
      </div>
    ),
  },
  "framer-motion": {
    name: "Framer Motion",
    link: "https://www.framer.com/motion/",
    logo: <Icons.framerMotion className="w-4 h-4" />,
  },
  "tailwind-merge": {
    name: "Tailwind Merge",
    link: "https://github.com/dcastil/tailwind-merge",
    logo: <Icons.twMerge className="w-8 h-8" />,
  },
  uuid: {
    name: "UUID",
    link: "https://www.npmjs.com/package/uuid",
    logo: <h1 className="font-bold text-blue-500 text-base">UUID</h1>,
  },
  "@paralleldrive/cuid2": {
    name: "CUID 2",
    link: "https://www.npmjs.com/package/@paralleldrive/cuid2",
    logo: <h1 className="font-bold text-blue-500 text-base">CUID 2</h1>,
  },
  "react-aria-components": {
    name: "React Aria",
    link: "https://react-spectrum.adobe.com/react-aria/",
    logo: (
      <div className="flex gap-2 text-black dark:text-white">
        <Icons.reactAria className="w-6 h-6 " />
      </div>
    ),
  },
};

export const TechnologyUsed = ({
  technologies,
}: {
  technologies: TechNames[];
}) => {
  const techUsed: TechNames[] = ["tailwindcss", ...technologies];
  return (
    <div>
      <h1 className="text-lg font-medium text-foreground">Technologies Used</h1>
      <div className="flex justify-start gap-8 mt-2 flex-wrap">
        {techUsed &&
          techUsed.map((item, i) => (
            <Fragment key={i}>
              <a
                href={TECH_USED[item].link}
                target="_blank"
                className="flex justify-start items-center gap-2 text-sm text-foreground"
                rel="nofollow"
              >
                {TECH_USED[item].logo}
                {TECH_USED[item].name}
              </a>
            </Fragment>
          ))}
      </div>
    </div>
  );
};
