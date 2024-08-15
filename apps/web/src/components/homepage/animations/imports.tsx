import { IconProps } from "@/utils/constants";

export default function Imports() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex justify-center items-center relative w-max ">
        <div className="flex gap-2 items-center justify-center text-sm md:text-xl">
          <span className="text-red-400 ">import</span>
          <span className="">Everything</span>
          <span className="text-red-400 ">from</span>
          <span className="text-blue-300">{"'something'"}</span>
        </div>
        <div className="absolute flex justify-start items-center h-full bg-background -right-6 w-6 group-data-[visible=true]/bento-card:w-[calc(100%+2rem)] group-hover/bento-card:w-[calc(100%+2rem)] transition-all duration-[2000ms]">
          <Cursor className="w-6 h-6 group-data-[visible=true]/bento-card:scale-150  group-hover/bento-card:scale-150 transition-all duration-300" />
        </div>
      </div>
    </div>
  );
}

export const Cursor = (props: IconProps) => (
  <svg
    height="200"
    width="200"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 12h4M9 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3m6-16a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);
