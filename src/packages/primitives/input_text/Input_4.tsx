import { DataDescription, ImplementationNode } from "@/utils/constants";
import { twMerge } from "tailwind-merge";
function InputText({
  label,
  placeholder,
  props,
  helper,
  state = "default",
}: {
  label: string;
  placeholder: string;
  props?: any;
  helper?: string;
  state?: "default" | "error" | "success" | "disabled";
}) {
  return (
    <div>
      <span className="text-s_textPrimary font-medium text-sm">{label}</span>
      <input
        type="text"
        className={twMerge(
          "my-1 w-full bg-transparent bg-opacity-30 text-s_textPrimary placeholder:text-s_textSecondary py-2 px-4 rounded-md border-[1px] border-s_primary focus:border-s_accent focus:outline-none focus:ring-2 shadow-sm",
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
      <span className="text-s_textSecondary font-normal text-sm">
        {helper ? helper : ""}
      </span>
    </div>
  );
}

function Demo() {
  return (
    <div className="w-80">
      <InputText
        placeholder="Something..."
        label="Label"
        helper="This is a helper message."
      />
    </div>
  );
}

const DemoString: string = `function Demo() {
  return (
    <div className="w-80">
      <InputText
        placeholder="Something..."
        label="Label"
        helper="This is a helper message."
      />
    </div>
  );
}`;

const ButtonCodeJsx: string = `function InputText({
  label,
  placeholder,
  props,
  helper,
  state = "default",
}) {
  return (
    <div>
      <span className="text-s_textPrimary font-medium text-sm">{label}</span>
      <input
        type="text"
        className={twMerge(
          "my-1 w-full bg-transparent bg-opacity-30 text-s_textPrimary placeholder:text-s_textSecondary py-2 px-4 rounded-md border-[1px] border-s_primary focus:border-s_accent focus:outline-none focus:ring-2 shadow-sm",
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
      <span className="text-s_textSecondary font-normal text-sm">
        {helper ? helper : ""}
      </span>
    </div>
  );
}`;

const ButtonCodeTsx = `function InputText({
  label,
  placeholder,
  props,
  helper,
  state = "default",
}: {
  label: string;
  placeholder: string;
  props?: any;
  helper?: string;
  state?: "default" | "error" | "success" | "disabled";
}) {
  return (
    <div>
      <span className="text-s_textPrimary font-medium text-sm">{label}</span>
      <input
        type="text"
        className={twMerge(
          "my-1 w-full bg-transparent bg-opacity-30 text-s_textPrimary placeholder:text-s_textSecondary py-2 px-4 rounded-md border-[1px] border-s_primary focus:border-s_accent focus:outline-none focus:ring-2 shadow-sm",
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
      <span className="text-s_textSecondary font-normal text-sm">
        {helper ? helper : ""}
      </span>
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
  name: "Text Input with Helper Text",
  description: "This is a text input with label and helper text",
  implementation: Implementation,
  component: Demo(),
  version_included: "0.0.1",
  display: true,
};
export default Data;
