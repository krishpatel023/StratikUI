import ArrowHeading from "@/components/ui/ArrowHeading";
import { DataDescription, ImplementationNode } from "@/utils/constants";
import { twMerge } from "tailwind-merge";
function InputText({
  placeholder,
  state = "default",
}: {
  placeholder: string;
  state?: "default" | "error" | "success" | "disabled";
}) {
  return (
    <input
      type="text"
      className={twMerge(
        "w-full bg-transparent text-s_textPrimary py-2 px-4 rounded-md border-[1px] border-s_primary focus:border-s_accent focus:outline-none focus:ring-2",
        state === "disabled" && "disabled:cursor-not-allowed",
        state === "error" &&
          "border-s_error focus:border-s_error focus:ring-red-400/90",
        state === "success" &&
          "border-s_success focus:border-s_success focus:ring-green-400/90"
      )}
      {...(state === "disabled" && { disabled: true })}
      placeholder={placeholder}
    />
  );
}

function Demo() {
  return (
    <div className="w-80 flex flex-col gap-4">
      <ArrowHeading text="Default" />
      <InputText placeholder="Something..." />
      <ArrowHeading text="Error" />
      <InputText placeholder="Something..." state="error" />
      <ArrowHeading text="Success" />
      <InputText placeholder="Something..." state="success" />
      <ArrowHeading text="Disabled" />
      <InputText placeholder="Something..." state="disabled" />
    </div>
  );
}

const DemoString: string = `function Demo() {
  return (
    <div className="w-80 flex flex-col gap-4">
      <InputText placeholder="Something..." />
      <InputText placeholder="Something..." state="error" />
      <InputText placeholder="Something..." state="success" />
      <InputText placeholder="Something..." state="disabled" />
    </div>
  );
}`;

const ButtonCodeTsx: string = `function InputText({
  placeholder,
  state = "default",
}: {
  placeholder: string;
  state?: "default" | "error" | "success" | "disabled";
}) {
  return (
    <input
      type="text"
      className={twMerge(
        "w-full bg-transparent text-s_textPrimary py-2 px-4 rounded-md border-[1px] border-s_primary focus:border-s_accent focus:outline-none focus:ring-2",
        state === "disabled" && "disabled:cursor-not-allowed",
        state === "error" &&
          "border-s_error focus:border-s_error focus:ring-red-400/90",
        state === "success" &&
          "border-s_success focus:border-s_success focus:ring-green-400/90"
      )}
      {...(state === "disabled" && { disabled: true })}
      placeholder={placeholder}
    />
  );
}`;

const ButtonCodeJsx = `function InputText({
  placeholder,
  state = "default",
}) {
  return (
    <input
      type="text"
      className={twMerge(
        "w-full bg-transparent text-s_textPrimary py-2 px-4 rounded-md border-[1px] border-s_primary focus:border-s_accent focus:outline-none focus:ring-2",
        state === "disabled" && "disabled:cursor-not-allowed",
        state === "error" &&
          "border-s_error focus:border-s_error focus:ring-red-400/90",
        state === "success" &&
          "border-s_success focus:border-s_success focus:ring-green-400/90"
      )}
      {...(state === "disabled" && { disabled: true })}
      placeholder={placeholder}
    />
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
  name: "Default Text Input",
  description: "This is a default text input",
  implementation: Implementation,
  component: Demo(),
  version_included: "0.0.1",
  display: true,
};
export default Data;
