import ArrowHeading from "@/components/ui/ArrowHeading";
import { DataDescription, ImplementationNode } from "@/utils/constants";
import { twMerge } from "tailwind-merge";
function Input({
  defaultValue,
  state = "default",
}: {
  defaultValue?: string;
  state?: "default" | "disabled" | "error" | "success";
}) {
  return (
    <div className="relative h-10 transition-all duration-200">
      <input
        type="text"
        defaultValue={defaultValue}
        className={twMerge(
          "absolute top-0 left-0 bg-neutral-600 h-full px-3 focus:border-none outline-none rounded-md min-w-full text-s_textPrimary focus:bg-neutral-700 peer",
          state === "disabled" && "disabled:cursor-not-allowed"
        )}
        {...(state === "disabled" && { disabled: true })}
      />
      <div
        className={twMerge(
          "min-h-[108%] min-w-full bg-s_foreground  rounded-md peer-focus:bg-blue-600",
          state === "disabled" && "bg-slate-400 peer-focus:bg-slate-600",
          state === "error" && "bg-red-400 peer-focus:bg-red-600",
          state === "success" && "bg-green-400 peer-focus:bg-green-600"
        )}
      ></div>
    </div>
  );
}

function Demo() {
  return (
    <div className="w-80 flex flex-col gap-4">
      <ArrowHeading text="Default" />
      <Input defaultValue="Default Value" />
      <ArrowHeading text="Error" />
      <Input defaultValue="Error Value" state="error" />
      <ArrowHeading text="Success" />
      <Input defaultValue="Success Value" state="success" />
      <ArrowHeading text="Disabled" />
      <Input defaultValue="Disabled" state="disabled" />
    </div>
  );
}

const DemoString: string = `function Demo() {
  return (
    <div className="w-80 flex flex-col gap-4">
      <ArrowHeading text="Default" />
      <Input defaultValue="Default Value" />
      <ArrowHeading text="Error" />
      <Input defaultValue="Error Value" state="error" />
      <ArrowHeading text="Success" />
      <Input defaultValue="Success Value" state="success" />
      <ArrowHeading text="Disabled" />
      <Input defaultValue="Disabled" state="disabled" />
    </div>
  );
}`;

const CodeTsx: string = `function Input({
  defaultValue,
  state = "default",
}: {
  defaultValue?: string;
  state?: "default" | "disabled" | "error" | "success";
}) {
  return (
    <div className="relative h-10 transition-all duration-200">
      <input
        type="text"
        defaultValue={defaultValue}
        className={twMerge(
          "absolute top-0 left-0 bg-neutral-600 h-full px-3 focus:border-none outline-none rounded-md min-w-full text-s_textPrimary focus:bg-neutral-700 peer",
          state === "disabled" && "disabled:cursor-not-allowed"
        )}
        {...(state === "disabled" && { disabled: true })}
      />
      <div
        className={twMerge(
          "min-h-[108%] min-w-full bg-s_foreground  rounded-md peer-focus:bg-blue-600",
          state === "disabled" && "bg-slate-400 peer-focus:bg-slate-600",
          state === "error" && "bg-red-400 peer-focus:bg-red-600",
          state === "success" && "bg-green-400 peer-focus:bg-green-600"
        )}
      ></div>
    </div>
  );
}`;

const CodeJsx: string = `function Input({
  defaultValue,
  state = "default",
}) {
  return (
    <div className="relative h-10 transition-all duration-200">
      <input
        type="text"
        defaultValue={defaultValue}
        className={twMerge(
          "absolute top-0 left-0 bg-neutral-600 h-full px-3 focus:border-none outline-none rounded-md min-w-full text-s_textPrimary focus:bg-neutral-700 peer",
          state === "disabled" && "disabled:cursor-not-allowed"
        )}
        {...(state === "disabled" && { disabled: true })}
      />
      <div
        className={twMerge(
          "min-h-[108%] min-w-full bg-s_foreground  rounded-md peer-focus:bg-blue-600",
          state === "disabled" && "bg-slate-400 peer-focus:bg-slate-600",
          state === "error" && "bg-red-400 peer-focus:bg-red-600",
          state === "success" && "bg-green-400 peer-focus:bg-green-600"
        )}
      ></div>
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
            code: CodeTsx,
          },
          {
            language: "jsx",
            code: CodeJsx,
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
  name: "Input with bottom indicating edge",
  description: "This is an input with bottom indicating edge.",
  implementation: Implementation,
  component: Demo(),
  version_included: "0.0.1",
  display: true,
};
export default Data;
