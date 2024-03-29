import {
  DataDescription,
  IconProps,
  ImplementationNode,
} from "@/utils/constants";
import Image from "next/image";
// import Earth from "@/assets/Images/GlowingEarth.jpg";
import Earth from "@/assets/Images/Image_1.jpg";
import { Carousel } from "@/packages/components/hero_section/Hero_4_Helper";
function Testimonial() {
  return (
    <div className={`w-full h-[30rem] flex  justify-center items-center `}>
      <div className="w-[90%] @md:w-3/4 flex flex-col gap-10 justify-center items-center text-center">
        <p className="text-base font-medium text-s_textPrimary text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est in ipsa
          rem tempora perferendis. Reprehenderit sed provident ducimus dolores
          voluptatem unde dolorum nisi dolorem quia commodi ex odit officia
          perspiciatis et sequi eius laudantium nulla magnam blanditiis eligendi
          aspernatur nihil, deserunt vitae accusantium! Nulla, ullam quia.
          Provident nam consectetur quasi.
        </p>
        <div className="flex gap-4">
          <Star className="text-s_accent w-6 h-6" />
          <Star className="text-s_accent w-6 h-6" />
          <Star className="text-s_accent  w-6 h-6" />
          <Star className="text-s_accent  w-6 h-6" />
          <Star className="text-s_accent  w-6 h-6" />
        </div>

        <div className="flex gap-4 items-center">
          <Image
            src={Earth}
            alt="hero"
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="text-start">
            <h1 className="text-xl font-semibold text-s_textPrimary">
              John Doe
            </h1>
            <h2 className="text-base text-s_textSecondary">
              CEO of Lorem Ipsum
            </h2>
          </span>
        </div>
      </div>

      <div
        className={`w-full h-full absolute left-0 top-0 -z-10 overflow-hidden dark:hidden`}
      >
        <BackgroundLight className={"w-full h-full object-fill"} />
      </div>
      <div
        className={`w-full h-full absolute left-0 top-0 -z-10 overflow-hidden hidden dark:block `}
      >
        <BackgroundDark className={"w-full h-full object-fill"} />
      </div>
    </div>
  );
}

export const Star = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M17.562 21.56a1.003 1.003 0 0 1-.465-.115L12 18.765l-5.097 2.68a1 1 0 0 1-1.451-1.054l.973-5.676l-4.123-4.02a1 1 0 0 1 .554-1.705l5.699-.828l2.548-5.164a1.042 1.042 0 0 1 1.794 0l2.548 5.164l5.699.828a1 1 0 0 1 .554 1.706l-4.123 4.019l.973 5.676a1 1 0 0 1-.986 1.169Z"
    ></path>
  </svg>
);

export const Quotes = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 15H6.11A9 9 0 0 1 10 8.86l1.79-1.2L10.69 6L8.9 7.2A11 11 0 0 0 4 16.35V23a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm14 0h-5.89A9 9 0 0 1 24 8.86l1.79-1.2L24.7 6l-1.8 1.2a11 11 0 0 0-4.9 9.15V23a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z"
    ></path>
  </svg>
);

const BackgroundLight = ({
  props,
  className,
}: {
  props?: IconProps;
  className?: string;
}) => {
  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-white">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
    </div>
  );
};

const BackgroundDark = ({
  props,
  className,
}: {
  props?: IconProps;
  className?: string;
}) => {
  return (
    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
    </div>
  );
};
const Code: string = `function Testimonial() {
  return (
    <div
      className={\`w-full h-[30rem] flex  justify-center items-center\`}
    >
      <div className="w-[90%] @md:w-3/4 flex flex-col gap-10 justify-center items-center text-center">
        <p className="text-base font-medium text-s_textPrimary text-wrap">
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Est in ipsa
          rem tempora perferendis. Reprehenderit sed provident ducimus dolores
          voluptatem unde dolorum nisi dolorem quia commodi ex odit officia
          perspiciatis et sequi eius laudantium nulla magnam blanditiis eligendi
          aspernatur nihil, deserunt vitae accusantium! Nulla, ullam quia.
          Provident nam consectetur quasi. "
        </p>
        <div className="flex gap-4">
          <Star className="text-s_accent w-6 h-6" />
          <Star className="text-s_accent w-6 h-6" />
          <Star className="text-s_accent  w-6 h-6" />
          <Star className="text-s_accent  w-6 h-6" />
          <Star className="text-s_accent  w-6 h-6" />
        </div>

        <div className="flex gap-4 items-center">
          <Image
            src={Earth}
            alt="hero"
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="text-start">
            <h1 className="text-xl font-semibold text-s_textPrimary">
              John Doe
            </h1>
            <h2 className="text-base text-s_textSecondary">
              CEO of Lorem Ipsum
            </h2>
          </span>
        </div>
      </div>

      <div
        className={\`w-full h-full absolute left-0 top-0 -z-10 overflow-hidden dark:hidden\`}
      >
        <BackgroundLight className={"w-full h-full object-fill"} />
      </div>
      <div
        className={\`w-full h-full absolute left-0 top-0 -z-10 overflow-hidden hidden dark:block \`}
      >
        <BackgroundDark className={"w-full h-full object-fill"} />
      </div>
    </div>
  );
}`;

const BackgroundString: string = `export const Star = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M17.562 21.56a1.003 1.003 0 0 1-.465-.115L12 18.765l-5.097 2.68a1 1 0 0 1-1.451-1.054l.973-5.676l-4.123-4.02a1 1 0 0 1 .554-1.705l5.699-.828l2.548-5.164a1.042 1.042 0 0 1 1.794 0l2.548 5.164l5.699.828a1 1 0 0 1 .554 1.706l-4.123 4.019l.973 5.676a1 1 0 0 1-.986 1.169Z"
    ></path>
  </svg>
);

const BackgroundLight = ({
  props,
  className,
}: {
  props?: IconProps;
  className?: string;
}) => {
  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-white">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
    </div>
  );
};

const BackgroundDark = ({
  props,
  className,
}: {
  props?: IconProps;
  className?: string;
}) => {
  return (
    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
    </div>
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
  {
    type: "code",
    title: "Background Used in Code",
    content: BackgroundString,
  },
];

const HeroData: DataDescription = {
  name: "Testimonial Section",
  description: "This is a default testimonial section",
  implementation: Implementation,
  component: Testimonial(),
  version_included: "0.0.3",
  display: true,
};
export default HeroData;
