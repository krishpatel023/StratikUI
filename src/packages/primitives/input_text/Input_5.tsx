import { DataDescription, ImplementationNode } from "@/utils/constants";
function InputText({
  label,
  placeholder,
  props,
  icon,
}: {
  label: string;
  placeholder: string;
  props?: any;
  icon?: any;
}) {
  return (
    <div>
      <span className="text-s_textPrimary font-medium text-sm">{label}</span>
      <div className="relative text-s_primary">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5">
          {icon ? icon : null}
        </div>
        <input
          type="text"
          className="my-1 w-full bg-transparent bg-opacity-30 text-s_textPrimary placeholder:text-s_textSecondary py-2 pl-10 rounded-md border-[1px] border-s_primary focus:border-s_accent focus:outline-none focus:ring-2 shadow-sm"
          //ADD FOR DISABLED
          // className="disabled:cursor-not-allowed"

          //ADD FOR ERROR
          // className="border-s_error focus:border-s_error focus:ring-red-400/90"

          //ADD FOR SUCCESS
          // className="border-s_success focus:border-s_success focus:ring-green-400/90"
          placeholder={placeholder}
          {...props}
        />
      </div>
    </div>
  );
}

function Demo() {
  return (
    <div className="w-80">
      <InputText placeholder="you@example.com" label="Email" icon={<Icon />} />
    </div>
  );
}
export const Icon = (props: { props?: any }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.2em"
    height="1.2em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.95 3.684L8.637 8.912a1 1 0 0 1-1.276 0l-6.31-5.228A.999.999 0 0 0 1 4v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a.999.999 0 0 0-.05-.316M2 2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m-.21 1l5.576 4.603a1 1 0 0 0 1.27.003L14.268 3z"
    ></path>
  </svg>
);

const ButtonCode: string = `function Demo() {
  return (
    <div className="w-80">
      <InputText
        placeholder="you@example.com"
        label="Email"
        icon={<Icon />}
      />
    </div>
  );
}
// --------------------------------------------------------------
// THIS IS THE BUTTON LOGIC (IF WANT THE RAW COMPONENT COPY THIS)
// --------------------------------------------------------------

function InputText({
  label,
  placeholder,
  props,
  icon,
}) {
  return (
    <div>
      <span className="text-s_textPrimary font-medium text-sm">{label}</span>
      <div className="relative text-s_primary">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5">
          {icon ? icon : null}
        </div>
        <input
          type="text"
          className="my-1 w-full bg-transparent bg-opacity-30 text-s_textPrimary placeholder:text-s_textSecondary py-2 pl-10 rounded-md border-[1px] border-s_primary focus:border-s_accent focus:outline-none focus:ring-2 shadow-sm"
          //ADD FOR DISABLED
          // className="disabled:cursor-not-allowed"

          //ADD FOR ERROR
          // className="border-s_error focus:border-s_error focus:ring-red-400/90"

          //ADD FOR SUCCESS
          // className="border-s_success focus:border-s_success focus:ring-green-400/90"
          placeholder={placeholder}
          {...props}
        />
      </div>
    </div>
  );
}`;

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

const Data: DataDescription = {
  name: "Text Input with Left Icon",
  description: "This is a text input with label and Left Icon",
  implementation: Implementation,
  component: Demo(),
  version_included: "0.0.1",
  display: true,
};
export default Data;
