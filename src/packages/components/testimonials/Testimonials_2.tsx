import {
  DataDescription,
  IconProps,
  ImplementationNode,
} from "@/utils/constants";
import Logo from "@/packages/helper/Logo";
function ComponentName() {
  return (
    <div className="w-full h-[60rem] overflow-hidden flex justify-center items-center gap-10 text-s_textPrimary">
      <div className="flex flex-col gap-10">
        <EmptyCard />
        <EmptyCard />
        <EmptyCard />
      </div>
      <div className="flex-col gap-10 hidden @md:flex">
        <EmptyCard />
        <Card LogoNumber={2} Name="John Doe" Position="Co-Founder" />
        <Card LogoNumber={4} Name="Erin Joseph" Position="Product Manager" />
        <EmptyCard />
      </div>
      <div className="flex flex-col gap-10">
        <EmptyCard />
        <Card LogoNumber={0} Name="John Doe" Position="CEO" />
        <div className="w-80 py-8 px-10 rounded-xl bg-s_accent bg-gradient-to-tr from-blue-900  to-blue-400">
          <h1 className="text-xl text-s_textComplementary font-semibold">
            Want to see what others are saying about us?
          </h1>
          <button className="bg-s_foreground text-s_textComplementary py-2 px-4 rounded-xl mt-4">
            See more
          </button>
        </div>
        <Card LogoNumber={1} Name="John Doe" Position="CEO" />
        <EmptyCard />
      </div>{" "}
      <div className="flex-col gap-10 hidden @md:flex">
        <EmptyCard />
        <Card LogoNumber={3} Name="Jane Doe" Position="CEO" />
        <Card LogoNumber={5} Name="John Doe" Position="CEO" />
        <EmptyCard />
      </div>
      <div className="flex flex-col gap-10">
        <EmptyCard />
        <EmptyCard />
        <EmptyCard />
      </div>
    </div>
  );
}

const Card = ({
  LogoNumber,
  Name,
  Position,
}: {
  LogoNumber: number;
  Name: string;
  Position: string;
}) => {
  const MyLogo = Logo[LogoNumber].logo;

  return (
    <div className="w-80 rounded-xl border-2 border-blue-300 px-8 py-6">
      <MyLogo className="w-8 h-8" />
      <p className="font-medium text-s_textSecondary mt-6">
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
        harum esse libero con."
      </p>
      <h1 className="text-xl font-semibold text-s_textPrimary mt-6">{Name}</h1>
      <h2 className="font-medium text-s_textSecondary">{Position}</h2>
    </div>
  );
};

const EmptyCard = () => {
  return (
    <div className="min-w-80 min-h-80 rounded-xl border-2 border-blue-200 dark:border-blue-300/20 border-dashed"></div>
  );
};
const Code: string = `function ComponentName() {
  return (
    <div className="w-full h-[60rem] overflow-hidden flex justify-center items-center gap-10 text-s_textPrimary">
      <div className="flex flex-col gap-10">
        <EmptyCard />
        <EmptyCard />
        <EmptyCard />
      </div>
      <div className="flex-col gap-10 hidden @md:flex">
        <EmptyCard />
        <Card Name="John Doe" Position="Co-Founder" />
        <Card Name="Erin Joseph" Position="Product Manager" />
        <EmptyCard />
      </div>
      <div className="flex flex-col gap-10">
        <EmptyCard />
        <Card Name="John Doe" Position="CEO" />
        <div className="w-80 py-8 px-10 rounded-xl bg-s_accent bg-gradient-to-tr from-blue-900  to-blue-400">
          <h1 className="text-xl text-s_textComplementary font-semibold">
            Want to see what others are saying about us?
          </h1>
          <button className="bg-s_foreground text-s_textComplementary py-2 px-4 rounded-xl mt-4">
            See more
          </button>
        </div>
        <Card Name="John Doe" Position="CEO" />
        <EmptyCard />
      </div>{" "}
      <div className="flex-col gap-10 hidden @md:flex">
        <EmptyCard />
        <Card Name="Jane Doe" Position="CEO" />
        <Card Name="John Doe" Position="CEO" />
        <EmptyCard />
      </div>
      <div className="flex flex-col gap-10">
        <EmptyCard />
        <EmptyCard />
        <EmptyCard />
      </div>
    </div>
  );
}

const Card = ({
  Name,
  Position,
}: {
  Name: string;
  Position: string;
}) => {

  return (
    <div className="w-80 rounded-xl border-2 border-blue-300 px-8 py-6">
      //As you like
      <Logo className="w-8 h-8" />
      <p className="font-medium text-s_textSecondary mt-6">
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
        harum esse libero con."
      </p>
      <h1 className="text-xl font-semibold text-s_textPrimary mt-6">{Name}</h1>
      <h2 className="font-medium text-s_textSecondary">{Position}</h2>
    </div>
  );
};

const EmptyCard = () => {
  return (
    <div className="min-w-80 min-h-80 rounded-xl border-2 border-blue-200 dark:border-blue-300/20 border-dashed"></div>
  );
};`;

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    title: "Technology Used",
    content: ["tailwind-css"],
  },
  {
    type: "code",
    title: "Code",
    content: Code,
  },
];

const Data: DataDescription = {
  name: "Testimonial Section",
  description: "This is a default testimonial section",
  implementation: Implementation,
  component: ComponentName(),
  version_included: "0.0.3",
  display: true,
};
export default Data;
