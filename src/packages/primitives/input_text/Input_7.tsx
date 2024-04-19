import ArrowHeading from "@/components/ui/ArrowHeading";
import { DataDescription, ImplementationNode } from "@/utils/constants";
import { twMerge } from "tailwind-merge";
function InputText({
  label,
  placeholder,
  props,
  state = "default",
}: {
  label: string;
  placeholder: string;
  props?: any;
  state?: "default" | "error" | "success" | "disabled";
}) {
  // Don't change the formating. ONLY CHANGE THE COLOR !!!
  const darkBackground = "peer-focus:dark:bg-slate-950";
  const lightBackground = "peer-focus:bg-[#f1f7ff]";

  return (
    <div>
      <div className="relative text-s_primary">
        <input
          type="text"
          className={twMerge(
            "peer placeholder:text-transparent focus:placeholder:text-s_textSecondary my-1 w-full bg-transparent bg-opacity-30 text-s_textPrimary  py-2 pr-10 pl-4 rounded-md border-[1px] border-s_primary focus:border-s_accent focus:outline-none focus:ring-2 shadow-sm",
            state === "disabled" && "disabled:cursor-not-allowed",
            state === "error" &&
              "border-s_error focus:border-s_error focus:ring-red-400/90",
            state === "success" &&
              "border-s_success focus:border-s_success focus:ring-green-400/90"
          )}
          {...(state === "disabled" && { disabled: true })}
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
      <ArrowHeading text="Default" className="mb-2" />

      <InputText placeholder="you@example.com" label="Email" />
      <ArrowHeading text="Error" className="mb-2 mt-6" />
      <InputText placeholder="you@example.com" label="Email" state="error" />
      <ArrowHeading text="Success" className="mb-2 mt-6" />

      <InputText placeholder="you@example.com" label="Email" state="success" />
      <ArrowHeading text="Disabled" className="mb-2 mt-6" />

      <InputText placeholder="you@example.com" label="Email" state="disabled" />
    </div>
  );
}

const DemoString = `function Demo() {
  return (
    <div className="w-80">
      <InputText 
        placeholder="you@example.com" 
        label="Email" />
      <InputText
        placeholder="you@example.com"
        label="Email"
        state="error"
      />
      <InputText
        placeholder="you@example.com"
        label="Email"
        state="success"
      />
      <InputText
        placeholder="you@example.com"
        label="Email"
        state="disabled"
      />
    </div>
  );
}`;

const ButtonCodeTsx: string = `function InputText({
  label,
  placeholder,
  props,
  state = "default",
}: {
  label: string;
  placeholder: string;
  props?: any;
  state?: "default" | "error" | "success" | "disabled";
}) {
  // Don't change the formating. ONLY CHANGE THE COLOR !!!
  const darkBackground = "peer-focus:dark:bg-slate-950";
  const lightBackground = "peer-focus:bg-[#f1f7ff]";

  return (
    <div>
      <div className="relative text-s_primary">
        <input
          type="text"
          className={twMerge(
            "peer placeholder:text-transparent focus:placeholder:text-s_textSecondary my-1 w-full bg-transparent bg-opacity-30 text-s_textPrimary  py-2 pr-10 pl-4 rounded-md border-[1px] border-s_primary focus:border-s_accent focus:outline-none focus:ring-2 shadow-sm",
            state === "disabled" && "disabled:cursor-not-allowed",
            state === "error" &&
              "border-s_error focus:border-s_error focus:ring-red-400/90",
            state === "success" &&
              "border-s_success focus:border-s_success focus:ring-green-400/90"
          )}
          {...(state === "disabled" && { disabled: true })}
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
const ButtonCodeJsx: string = `function InputText({
  label,
  placeholder,
  props,
  state = "default",
}) {
  // Don't change the formating. ONLY CHANGE THE COLOR !!!
  const darkBackground = "peer-focus:dark:bg-slate-950";
  const lightBackground = "peer-focus:bg-[#f1f7ff]";

  return (
    <div>
      <div className="relative text-s_primary">
        <input
          type="text"
          className={twMerge(
            "peer placeholder:text-transparent focus:placeholder:text-s_textSecondary my-1 w-full bg-transparent bg-opacity-30 text-s_textPrimary  py-2 pr-10 pl-4 rounded-md border-[1px] border-s_primary focus:border-s_accent focus:outline-none focus:ring-2 shadow-sm",
            state === "disabled" && "disabled:cursor-not-allowed",
            state === "error" &&
              "border-s_error focus:border-s_error focus:ring-red-400/90",
            state === "success" &&
              "border-s_success focus:border-s_success focus:ring-green-400/90"
          )}
          {...(state === "disabled" && { disabled: true })}
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

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    content: ["tailwind-css", "twMerge"],
  },
  {
    type: "code",
    content: [
      {
        name: "InputText",
        content: [
          {
            language: "tsx",
            code: ButtonCodeTsx,
          },
          {
            language: "jsx",
            code: ButtonCodeJsx,
          },
        ],
      },
      {
        name: "Implementation",
        content: [
          {
            language: "tsx",
            code: DemoString,
          },
          {
            language: "jsx",
            code: DemoString,
          },
        ],
      },
    ],
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
