import { IconProps } from "@/utils/constants";
import { twMerge } from "tailwind-merge";
import { HighlightGroup, HighlighterItem } from "../ui/Gradient";
import { GradientText } from "../ui/GradientText";

export function BentoGrid() {
  const content = [
    {
      title: "Own your components",
      description:
        "You can copy and paste any component you like, and then customize it as you wish. It's as easy as that!",
      icon: (
        <Icons.copy className="w-12 h-12 group-hover/bento-card:text-black dark:group-hover/bento-card:text-white " />
      ),
      span: 1,
    },
    {
      title: "No External Libraries",
      description:
        "Everything is built from scratch, thus eleminating the need for external libraries.",
      icon: "library",
      span: 2,
    },
    {
      title: "Fully Accessible",
      description:
        "We use Radix UI under the hood for all our components and so they are fully accessible.",
      icon: "accessible",
      span: 1,
    },
    {
      title: "JSX and TSX Support",
      description:
        "We provide code for both JSX and TSX. Whatever you use, we support it.",
      icon: "jsx",
      span: 1,
    },
    {
      title: "Everything is free",
      description: "No need to pay anything. Everything is free to use.",
      icon: "free",
      span: 1,
    },
    {
      title: "Effortless Dark Mode",
      description:
        "Switch between modes and everything will be automatically adjusted.",
      icon: "developer",
      span: 2,
    },
    {
      title: "Stop worrying about responsive design",
      description: "Everything is responsive out of the box.",
      icon: "responsive",
      span: 1,
    },
    {
      title: "Seamless Design Language",
      description: "Everything is in a single design language.",
      icon: "sealess",
      span: 3,
    },
  ];
  return (
    <>
      <GradientText className="w-full text-center text-5xl font-bold mx-auto mt-40 mb-28">
        What we offer
      </GradientText>
      <HighlightGroup className="grid grid-cols-3 gap-4 w-[80%] mx-auto">
        {content.map((item) => (
          <BentoCard key={item.title} span={item.span}>
            {item.icon}
            <h1 className="text-2xl font-medium">{item.title}</h1>
            <p>{item.description}</p>
          </BentoCard>
        ))}
      </HighlightGroup>
    </>
  );
}

function BentoCard({
  children,
  span = 1,
}: {
  children: React.ReactNode;
  span?: number;
}) {
  const style = {
    "--span-col": `span ${span} / span ${span}`,
  } as React.CSSProperties;
  return (
    <HighlighterItem
      className={twMerge(
        "min-h-80 border dark:border-neutral-800 group/bento-card",
        span > 1
          ? "col-span-3 md:[grid-column:var(--span-col)]"
          : "col-span-3 md:col-span-1"
      )}
      style={style}
    >
      <div className="w-full h-full p-8 text-neutral-800 dark:text-neutral-400 flex flex-col gap-4 border dark:border-neutral-800 rounded-[inherit]">
        {children}
      </div>
    </HighlighterItem>
  );
}

const Icons = {
  copy: (props: IconProps) => (
    <svg
      height="200"
      width="200"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        id="galaCopy0"
        fill="none"
        stroke="currentColor"
        strokeDasharray="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeWidth="16"
      >
        <rect height="144" id="galaCopy1" width="144" ry="32" x="16" y="16" />
        <path
          id="galaCopy2"
          d="M 95.999712,127.9996 A 31.999891,31.999891 0 0 1 127.9996,95.999712"
        />
        <path
          id="galaCopy3"
          d="m -239.99922,127.9996 a 31.999891,31.999891 0 0 1 31.99989,-31.999888"
          transform="scale(-1 1)"
        />
        <path
          id="galaCopy4"
          d="m -239.99922,-207.99933 a 31.999891,31.999891 0 0 1 31.99989,-31.99989"
          transform="scale(-1)"
        />
        <path
          id="galaCopy5"
          d="M 95.999712,-207.99933 A 31.999891,31.999891 0 0 1 127.9996,-239.99922"
          transform="scale(1 -1)"
        />
        <path
          id="galaCopy6"
          d="m 159.99949,239.99923 h 15.99995"
          strokeOpacity="1"
        />
        <path
          id="galaCopy7"
          d="m 159.99949,95.9997 h 15.99995"
          strokeOpacity="1"
        />
        <path
          id="galaCopy8"
          d="m 95.999709,159.99949 v 15.99995"
          strokeOpacity="1"
        />
        <path
          id="galaCopy9"
          d="m 239.99923,159.99949 v 15.99995"
          strokeOpacity="1"
        />
      </g>
    </svg>
  ),
};
