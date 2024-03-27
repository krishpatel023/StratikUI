import { DataDescription, ImplementationNode } from "@/utils/constants";
function InputText({
  label,
  placeholder,
  props,
}: {
  label: string;
  placeholder: string;
  props?: any;
}) {
  // Don't change the formating. ONLY CHANGE THE COLOR !!!
  const darkBackground = "peer-focus:dark:bg-slate-950";
  const lightBackground = "peer-focus:bg-[#f1f7ff]";

  return (
    <div>
      <div className="relative text-s_primary">
        <input
          type="text"
          className="peer placeholder:text-transparent focus:placeholder:text-s_textSecondary my-1 w-full bg-transparent bg-opacity-30 text-s_textPrimary  py-2 pr-10 pl-4 rounded-md border-[1px] border-s_primary focus:border-s_accent focus:outline-none focus:ring-2 shadow-sm"
          //ADD FOR DISABLED
          // className="disabled:cursor-not-allowed"

          //ADD FOR ERROR
          // className="border-s_error focus:border-s_error focus:ring-red-400/90"

          //ADD FOR SUCCESS
          // className="border-s_success focus:border-s_success focus:ring-green-400/90"
          placeholder={placeholder}
          {...props}
        />

        <label
          className={`peer-focus:base absolute left-2  z-10  transform px-2 text-xs text-s_textSecondary transition-all duration-300 peer-placeholder-shown:translate-y-[0.90rem] peer-placeholder-shown:text-sm peer-focus:-translate-y-1 ${darkBackground} ${lightBackground} peer-focus:text-xs peer-disabled:bg-transparent`}
        >
          {label}
        </label>
      </div>
    </div>
  );
}

function Demo() {
  return (
    <div className="w-80">
      <InputText placeholder="you@example.com" label="Email" />
    </div>
  );
}

const ButtonCode: string = `function InputText({
  label,
  placeholder,
  props,
}: {
  label: string;
  placeholder: string;
  props?: any;
}) {

  // Don't change the formating. ONLY CHANGE THE COLOR !!!
  const darkBackground = "peer-focus:dark:bg-slate-950";
  const lightBackground = "peer-focus:bg-[#f1f7ff]";

  return (
    <div>
      <div className="relative text-s_primary">
        <input
          type="text"
          className="peer placeholder:text-transparent focus:placeholder:text-s_textSecondary my-1 w-full bg-transparent bg-opacity-30 text-s_textPrimary  py-2 pr-10 pl-4 rounded-md border-[1px] border-s_primary focus:border-s_accent focus:outline-none focus:ring-2 shadow-sm"
          //ADD FOR DISABLED
          // className="disabled:cursor-not-allowed"

          //ADD FOR ERROR
          // className="border-s_error focus:border-s_error focus:ring-red-400/90"

          //ADD FOR SUCCESS
          // className="border-s_success focus:border-s_success focus:ring-green-400/90"
          placeholder={placeholder}
          {...props}
        />

        <label
          className={\`peer-focus:base absolute left-2  z-10  transform px-2 text-xs text-s_textSecondary transition-all duration-300 peer-placeholder-shown:translate-y-[0.90rem] peer-placeholder-shown:text-sm peer-focus:-translate-y-1 \${darkBackground} \${lightBackground} peer-focus:text-xs peer-disabled:bg-transparent\`}
        >
          {label}
        </label>
      </div>
    </div>
  );
}`;

const DemoStr: string = `function Demo() {
  return (
    <div className="w-80">
      <InputText placeholder="you@example.com" label="Email" />
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
  {
    type: "code",
    title: "Usage",
    content: DemoStr,
  },
];

const Data: DataDescription = {
  name: "Text Input with Floating Label",
  description: "This is a text input with Floating Label",
  implementation: Implementation,
  component: Demo(),
  version_included: "0.0.2",
  display: true,
};
export default Data;
