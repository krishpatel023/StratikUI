import { IconProps } from "@/utils/types";

type LinkColProps = {
  title: string;
  links: { title: string; link: string }[];
};

export function Footer() {
  const LinksData: LinkColProps[] = [
    {
      title: "Links",
      links: [
        { title: "Home", link: "/" },
        { title: "About", link: "/" },
        { title: "Careers", link: "/" },
        { title: "Pricing", link: "/" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Documentation", link: "/" },
        { title: "Support", link: "/" },
        { title: "Feedback", link: "/" },
        { title: "Roadmap", link: "/" },
        { title: "Blog", link: "/" },
      ],
    },
    {
      title: "Legal",
      links: [
        { title: "Terms of Service", link: "/" },
        { title: "Privacy Policy", link: "/" },
        { title: "Cookie Policy", link: "/" },
      ],
    },
  ];
  return (
    <div className="w-full px-6 py-12  text-foreground grid grid-cols-6 gap-10">
      <div className="col-span-6 @md:col-span-3 px-10 flex flex-col gap-4 items-center text-center @md:items-start @md:text-start">
        <h1 className="text-2xl font-semibold">Stratik / UI</h1>
        <span className="text-secondary-foreground">
          This is the best UI library in the world. This claim is backed by the
          community and John Doe. Build something awesome.
        </span>
        <SocialMedia />
      </div>
      {LinksData.map((data) => (
        <div
          className="flex flex-col gap-2 col-span-6 items-center @md:items-start @md:col-span-1"
          key={data.title}
        >
          <h1 className="font-semibold mb-1">{data.title}</h1>
          {data.links.map((link) => (
            <a
              href={link.link}
              className="text-secondary-foreground hover:text-accent cursor-pointer text-sm transition-all duration-300 hover:translate-x-1"
              key={link.title}
            >
              {link.title}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="flex gap-2">
      <div className="w-8 h-8 p-1 rounded-lg hover:bg-secondary text-foreground flex justify-center items-center  cursor-pointer transition-all duration-300 hover:-translate-y-1">
        <Icons.Instagram className="w-6 h-6" />
      </div>
      <div className="w-8 h-8 p-1 rounded-lg hover:bg-secondary text-foreground flex justify-center items-center cursor-pointer transition-all duration-300 hover:-translate-y-1">
        <Icons.Facebook className="w-6 h-6" />
      </div>
      <div className="w-8 h-8 p-1 rounded-lg hover:bg-secondary text-foreground flex justify-center items-center cursor-pointer transition-all duration-300 hover:-translate-y-1">
        <Icons.X className="w-5 h-5" />
      </div>{" "}
      <div className="w-8 h-8 p-1 rounded-lg hover:bg-secondary text-foreground flex justify-center items-center cursor-pointer transition-all duration-300 hover:-translate-y-1">
        <Icons.Mail className="w-6 h-6" />
      </div>
      <div className="w-8 h-8 p-1 rounded-lg hover:bg-secondary text-foreground flex justify-center items-center cursor-pointer transition-all duration-300 hover:-translate-y-1">
        <Icons.Github className="w-5 h-5" />
      </div>
    </div>
  );
}

const Icons = {
  Instagram: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z"
      ></path>
    </svg>
  ),
  Facebook: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M9.602 21.026v-7.274H6.818a.545.545 0 0 1-.545-.545V10.33a.545.545 0 0 1 .545-.545h2.773V7a4.547 4.547 0 0 1 4.86-4.989h2.32a.556.556 0 0 1 .557.546v2.436a.557.557 0 0 1-.557.545h-1.45c-1.566 0-1.867.742-1.867 1.833v2.413h3.723a.533.533 0 0 1 .546.603l-.337 2.888a.545.545 0 0 1-.545.476h-3.364v7.274a.962.962 0 0 1-.975.974h-1.937a.961.961 0 0 1-.963-.974"
      ></path>
    </svg>
  ),
  X: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      ></path>
    </svg>
  ),
  Mail: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"></path>
        <path d="m3 7l9 6l9-6"></path>
      </g>
    </svg>
  ),
  Github: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 432 416"
      {...props}
    >
      <path
        fill="currentColor"
        d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"
      ></path>
    </svg>
  ),
};
