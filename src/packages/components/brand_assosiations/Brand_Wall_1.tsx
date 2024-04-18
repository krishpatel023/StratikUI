import Logo from "@/packages/helper/Logo";
import {
  DataDescription,
  IconProps,
  ImplementationNode,
} from "@/utils/constants";

function BrandWall() {
  return (
    <>
      <div className="w-full h-[40rem] overflow-hidden relative">
        <div className="z-10 w-full flex flex-wrap justify-center items-center gap-8 @md:gap-28 px-20">
          {LogoModified.map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-lg flex justify-center items-center bg-gray-200/10 border-2 border-border mx-auto"
            >
              <item.logo className={`w-16 h-16 text-s_primary`} />
            </div>
          ))}
        </div>
        <div className="z-30 w-full h-full absolute top-0 left-0 flex justify-center items-center">
          <div className="w-80 h-80  flex flex-col justify-center items-center text-center text-s_textPrimary gap-10">
            <h1 className="text-4xl font-bold">
              Connect with your favorite apps
            </h1>
            <h3 className="text-xl font-medium">
              We provide integration with more than 100+ apps so that your
              business can grow.
            </h3>
            <button className="border-2 border-s_primary py-2 px-8 rounded hover:bg-s_foreground hover:text-s_textComplementary">
              View All
            </button>
          </div>
          <div className="-z-20 absolute -top-[0%] -left-[0%] w-[100%] h-[100%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white dark:from-black via-white/80 dark:via-black/80 to-white/40 dark:to-black/40"></div>
        </div>
      </div>
    </>
  );
}

const LogoModified = [...Logo, ...Logo, ...Logo, ...Logo];

function Demo() {
  return (
    <div className="w-full">
      <BrandWall />
    </div>
  );
}
const Code: string = `function BrandWall() {
  return (
    <>
      <div className="w-full h-[40rem] overflow-hidden relative">
        <div className="z-10 w-full flex flex-wrap justify-center items-center gap-8 @md:gap-28 px-20">
          {LogoModified.map((item, i) => (
            <div key={i} className="p-4 rounded-lg flex justify-center items-center bg-gray-200/10 border-2 border-border mx-auto">
              <item.logo className={\`w-16 h-16 text-s_primary\`} />
            </div>
          ))}
        </div>
        <div className="z-30 w-full h-full absolute top-0 left-0 flex justify-center items-center">
          <div className="w-80 h-80  flex flex-col justify-center items-center text-center text-s_textPrimary gap-10">
            <h1 className="text-4xl font-bold">
              Connect with your favorite apps
            </h1>
            <h3 className="text-xl font-medium">
              We provide integration with more than 100+ apps so that your
              business can grow.
            </h3>
            <button className="border-2 border-s_primary py-2 px-8 rounded hover:bg-s_foreground hover:text-s_textComplementary">
              View All
            </button>
          </div>
          <div className="-z-20 absolute -top-[0%] -left-[0%] w-[100%] h-[100%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white dark:from-black via-white/80 dark:via-black/80 to-white/40 dark:to-black/40"></div>
        </div>
      </div>
    </>
  );
}`;

const BackgroundStringJsx: string = `const Logo = [
      {
        name: "Apple",
        logo: () => (
          <svg
            fill="currentColor"
            viewBox="-52.01 0 560.035 560.035"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"></path>
            </g>
          </svg>
        ),
      },
      // Add others in this format
  ]`;

const BackgroundStringTsx: string = `interface BrandLogo {
    name: string;
    logo: (props: IconProps) => JSX.Element;
  }
  
  const Logo : BrandLogo[]  = [
    {
      name: "Apple",
      logo: (props: IconProps) => (
        <svg
          fill="currentColor"
          viewBox="-52.01 0 560.035 560.035"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"></path>
          </g>
        </svg>
      ),
    },
    // Add others in this format
]`;

const DemoString: string = `function Demo() {
  return (
    <div className="w-full">
      <BrandWall />
    </div>
  );
}`;

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    content: ["tailwind-css"],
  },
  {
    type: "code",
    content: [
      {
        name: "BrandWall",
        content: [
          {
            code: Code,
            language: "tsx",
          },
          {
            code: Code,
            language: "jsx",
          },
        ],
      },
      {
        name: "Implementation",
        content: [
          {
            code: DemoString,
            language: "tsx",
          },
          {
            code: DemoString,
            language: "jsx",
          },
        ],
      },
      {
        name: "Logos",
        content: [
          {
            code: BackgroundStringTsx,
            language: "tsx",
          },
          {
            code: BackgroundStringJsx,
            language: "jsx",
          },
        ],
      },
    ],
  },
];

const Data: DataDescription = {
  name: "Brand Wall",
  description:
    "This is an brand wall that can be used for marketing by showing partners, clients or apps that are using your product.",
  implementation: Implementation,
  component: Demo(),
  version_included: "0.0.5",
  display: true,
};
export default Data;
