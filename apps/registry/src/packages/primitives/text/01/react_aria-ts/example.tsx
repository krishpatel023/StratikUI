import ArrowHeading from "@registry/ui/ArrowHeading";
import { GradientText } from "@registry/packages/primitives/text/01/react_aria-ts/Text";

export default function GradientTextImplementation() {
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
