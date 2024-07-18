"use client";
import ArrowHeading from "@/components/ui/ArrowHeading";
import { Text, TextProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function GradientText({ children, className, ...props }: TextProps) {
  return (
    <Text
      className={twMerge(
        "bg-gradient-to-r inline-block text-transparent bg-clip-text from-neutral-600 to-neutral-300",
        className
      )}
      {...props}
    >
      {children}
    </Text>
  );
}

export function GradientTextImplementation() {
  return (
    <div className="w-80 @lg:w-[40rem] flex flex-col gap-4">
      <ArrowHeading text="Default" />
      <GradientText className="bg-gradient-to-br text-3xl @lg:text-7xl font-bold">
        Bring Gradients to your Text
      </GradientText>
      <ArrowHeading text="Triple Gradient" />
      <GradientText className="from-blue-600 via-green-500 to-indigo-400 text-3xl @lg:text-7xl font-bold">
        Bring Gradients to your Text
      </GradientText>
      <ArrowHeading text="In Different Direction" />
      <GradientText className="bg-gradient-to-b from-blue-700 to-indigo-400 text-3xl @lg:text-7xl font-bold">
        Bring Gradients to your Text
      </GradientText>
    </div>
  );
}
