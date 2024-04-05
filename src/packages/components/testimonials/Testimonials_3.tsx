import {
  BackgroundDark,
  Background,
  BackgroundString,
} from "@/packages/helper/Background";
import Logo from "@/packages/helper/Logo";
import {
  DataDescription,
  IconProps,
  ImplementationNode,
} from "@/utils/constants";
function Testimonial() {
  const MyLogo = Logo[6].logo;
  return (
    <div className="w-full relative px-10 py-10">
      <h1 className="text-3xl font-semibold text-s_textPrimary text-center mb-2">
        Testimonials
      </h1>
      <h2 className="text-base font-medium text-s_textSecondary text-center mb-8">
        Look what our customers have to say about us.
      </h2>
      <div className="w-full grid grid-cols-1 @md:grid-cols-3 @lg:grid-cols-4 gap-4 text-s_textPrimary">
        <Card LogoNumber={0} Name="John Doe" Position="CEO" />

        <div className="@md:col-span-2 rounded-xl border-2  border-slate-400 px-8 py-6 bg-gradient-to-b bg-slate-400/10 hover:scale-105 hover:cursor-pointer transition-all duration-300">
          <MyLogo className="w-8 h-8" />
          <p className="font-medium text-s_textSecondary mt-6">
            {`"Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos harum esse libero con Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Aperiam, debitis Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Facere, explicabo.."`}
          </p>
          <h1 className="text-xl font-semibold text-s_textPrimary mt-6">
            Hello
          </h1>
          <h2 className="font-medium text-s_textSecondary">CEO</h2>
        </div>

        <Card LogoNumber={1} Name="Jane Doe" Position="CEO" />
        <Card LogoNumber={5} Name="John Doe" Position="CEO" />
        <Card LogoNumber={3} Name="John Doe" Position="CEO" />
        <Card LogoNumber={4} Name="John Doe" Position="CEO" />
        <Card LogoNumber={2} Name="John Doe" Position="CEO" />
      </div>

      <Background />
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
    <div className="rounded-xl border-2 border-slate-400 px-8 py-6 bg-gradient-to-b bg-slate-400/10 hover:scale-105 hover:cursor-pointer transition-all duration-300">
      <MyLogo className="w-8 h-8" />
      <p className="font-medium text-s_textSecondary mt-6">
        {`"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
        harum esse libero con."`}
      </p>
      <h1 className="text-xl font-semibold text-s_textPrimary mt-6">{Name}</h1>
      <h2 className="font-medium text-s_textSecondary">{Position}</h2>
    </div>
  );
};

const Code: string = ``;

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
  {
    type: "code",
    title: "Background Used in Code",
    content: BackgroundString,
  },
];

const Data: DataDescription = {
  name: "Testimonial",
  description: "Description",
  implementation: Implementation,
  component: Testimonial(),
  version_included: "0.0.3",
  display: true,
};
export default Data;
