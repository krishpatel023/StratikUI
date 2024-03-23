import { DataDescription, ImplementationNode } from "@/utils/constants";
function Button({ icon, text }: { icon: any; text: string }) {
  return (
    <>
      <button className="bg-s_accent rounded text-s_textComplementary py-2 px-4 flex gap-4 justify-center items-center">
        {icon}
        <span>{text}</span>
      </button>
    </>
  );
}

function Demo() {
  return (
    <div>
      <Button icon={<IonHome />} text="Button with Icon" />
    </div>
  );
}
// Icons from https://iconbuddy.app/
// Do check them out
export const IonHome = (props: { props?: any }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="currentColor"
      d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z"
    ></path>
    <path
      fill="currentColor"
      d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97Z"
    ></path>
  </svg>
);

const ButtonCode: string = `function Demo() {
    return (
        <div>
        <Button icon={<IonHome />} text="Button with Icon" />
        </div>
    );
}

// THIS IS THE BUTTON LOGIC (IF WANT THE RAW COMPONENT COPY THIS)
function Button({ icon, text }) {
    return (
        <>
        <button className="bg-s_accent rounded text-s_textComplementary py-2 px-4 flex gap-4 justify-center items-center">
            {icon}
            <span>{text}</span>
        </button>
        </>
    );
}

// Icons from https://iconbuddy.app/
// Do check them out
export const IonHome = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 512 512"
        {...props}
    >
        <path
        fill="currentColor"
        d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z"
        ></path>
        <path
        fill="currentColor"
        d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97Z"
        ></path>
    </svg>
);`;

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    title: "Technology Used",
    content: ["tailwind-css"],
  },
  {
    type: "code",
    title: "Code",
    content: ButtonCode,
  },
];

const ButtonData_1: DataDescription = {
  name: "Button with Icon",
  description:
    "This is a button with Icon option. The Icon can be passed as a prop and if not passed it will act as a default button",
  implementation: Implementation,
  component: Demo(),
  version_included: "0.0.1",
  display: true,
};
export default ButtonData_1;
