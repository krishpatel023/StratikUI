import ArrowHeading from "@/components/ui/ArrowHeading";
import { DataDescription, ImplementationNode } from "@/utils/constants";
import { twMerge } from "tailwind-merge";
function InputText({
  label,
  placeholder,
  state = "default",
}: {
  label: string;
  placeholder: string;
  state?: "default" | "error" | "success" | "disabled";
}) {
  return (
    <div>
      <span className="text-s_textPrimary font-medium text-sm">{label}</span>
      <input
        type="text"
        className={twMerge(
          "mt-1 w-full bg-transparent text-s_textPrimary placeholder:text-s_textSecondary py-2 px-4 rounded-md border-[1px] border-s_primary focus:border-s_accent focus:outline-none focus:ring-2",

          state === "disabled" && "disabled:cursor-not-allowed",
          state === "error" &&
            "border-s_error focus:border-s_error focus:ring-red-400/90",
          state === "success" &&
            "border-s_success focus:border-s_success focus:ring-green-400/90"
        )}
        {...(state === "disabled" && { disabled: true })}
        placeholder={placeholder}
      />
    </div>
  );
}

function Demo() {
  return (
    <div className="w-80">
      <ArrowHeading text="Default" className="mb-2" />
      <InputText placeholder="Something..." label="Label" />
      <ArrowHeading text="Error" className="mb-2 mt-6" />
      <InputText placeholder="Something..." label="Label" state="error" />
      <ArrowHeading text="Success" className="mb-2 mt-6" />
      <InputText placeholder="Something..." label="Label" state="success" />
      <ArrowHeading text="Disabled" className="mb-2 mt-6" />
      <InputText placeholder="Something..." label="Label" state="disabled" />
    </div>
  );
}

const DemoString: string = `function Demo() {
  return (
    <div className="w-80">
      <InputText placeholder="Something..." label="Label" />
      <InputText placeholder="Something..." label="Label" state="error" />
      <InputText placeholder="Something..." label="Label" state="success" />
      <InputText placeholder="Something..." label="Label" state="disabled" />
    </div>
  );
}`;

const ButtonCodeJsx: string = `
function InputText({
  label,
  placeholder,
  state = "default",
}) {
  return (
    <div>
      <span className="text-s_textPrimary font-medium text-sm">{label}</span>
      <input
        type="text"
        className={twMerge(
          "mt-1 w-full bg-transparent text-s_textPrimary placeholder:text-s_textSecondary py-2 px-4 rounded-md border-[1px] border-s_primary focus:border-s_accent focus:outline-none focus:ring-2",

          state === "disabled" && "disabled:cursor-not-allowed",
          state === "error" &&
            "border-s_error focus:border-s_error focus:ring-red-400/90",
          state === "success" &&
            "border-s_success focus:border-s_success focus:ring-green-400/90"
        )}
        {...(state === "disabled" && { disabled: true })}
        placeholder={placeholder}
      />
    </div>
  );
}`;

const ButtonCodeTsx = `
function InputText({
  label,
  placeholder,
  state = "default",
}: {
  label: string;
  placeholder: string;
  state?: "default" | "error" | "success" | "disabled";
}) {
  return (
    <div>
      <span className="text-s_textPrimary font-medium text-sm">{label}</span>
      <input
        type="text"
        className={twMerge(
          "mt-1 w-full bg-transparent text-s_textPrimary placeholder:text-s_textSecondary py-2 px-4 rounded-md border-[1px] border-s_primary focus:border-s_accent focus:outline-none focus:ring-2",

          state === "disabled" && "disabled:cursor-not-allowed",
          state === "error" &&
            "border-s_error focus:border-s_error focus:ring-red-400/90",
          state === "success" &&
            "border-s_success focus:border-s_success focus:ring-green-400/90"
        )}
        {...(state === "disabled" && { disabled: true })}
        placeholder={placeholder}
      />
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
  name: "Text Input with label",
  description:
    "This is a text input with label. It contains four variants - default, success, error and disabled.",
  implementation: Implementation,
  component: Demo(),
  version_included: "0.0.1",
  display: true,
};
export default Data;
