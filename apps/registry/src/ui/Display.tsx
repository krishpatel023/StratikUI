import { twMerge } from "tailwind-merge";
import ResizableDisplay from "./ResizableDisplay";

export interface DisplayProps {
  children: React.ReactNode;
  category: "primitives" | "components" | "hooks";
}

export default function Display({ children, category }: DisplayProps) {
  const resizableDisplay: DisplayProps["category"][] = ["components"];
  return (
    <>
      {resizableDisplay.find((item) => item === category) ? (
        <ResizableDisplay>{children}</ResizableDisplay>
      ) : (
        <div
          className={twMerge(
            "w-[90%] mx-auto h-max flex justify-center items-center  border border-outline-secondary rounded-lg"
          )}
        >
          {children}
        </div>
      )}
    </>
  );
}
