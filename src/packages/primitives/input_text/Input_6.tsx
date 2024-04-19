import ArrowHeading from "@/components/ui/ArrowHeading";
import {
  DataDescription,
  IconProps,
  ImplementationNode,
} from "@/utils/constants";
import { twMerge } from "tailwind-merge";
function InputText({
  label,
  placeholder,
  props,
  icon,
  state = "default",
}: {
  label: string;
  placeholder: string;
  props?: any;
  icon?: any;
  state?: "default" | "error" | "success" | "disabled";
}) {
  return (
    <div>
      <span className="text-s_textPrimary font-medium text-sm">{label}</span>
      <div
        className={twMerge(
          "relative text-s_primary",
          state === "error" && "text-s_error",
          state === "success" && "text-s_success"
        )}
      >
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5">
          {icon ? icon : null}
        </div>
        <input
          type="text"
          className={twMerge(
            "my-1 w-full bg-transparent bg-opacity-30 text-s_textPrimary placeholder:text-s_textSecondary py-2 pr-10 pl-4 rounded-md border-[1px] border-s_primary focus:border-s_accent focus:outline-none focus:ring-2 shadow-sm",
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
      </div>
    </div>
  );
}

function Demo() {
  return (
    <div className="w-80">
      <ArrowHeading text="Default" className="mb-2" />

      <InputText placeholder="you@example.com" label="Email" icon={<Icon />} />
      <ArrowHeading text="Error" className="mb-2 mt-6" />
      <InputText
        placeholder="you@example.com"
        label="Email"
        icon={<Icon />}
        state="error"
      />
      <ArrowHeading text="Success" className="mb-2 mt-6" />

      <InputText
        placeholder="you@example.com"
        label="Email"
        icon={<Icon />}
        state="success"
      />
      <ArrowHeading text="Disabled" className="mb-2 mt-6" />

      <InputText
        placeholder="you@example.com"
        label="Email"
        icon={<Icon />}
        state="disabled"
      />
    </div>
  );
}
export const Icon = (props: { props?: IconProps }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.2em"
    height="1.2em"
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path
      fill="currentColor"
      d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512.017-229.216 512.017-512C1024.017 229.232 794.785 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448.017 200.977 448.017 448S759.025 961.009 512 961.009zm-47.056-160.529h80.512v-81.248h-80.512zm46.112-576.944c-46.88 0-85.503 12.64-115.839 37.889c-30.336 25.263-45.088 75.855-44.336 117.775l1.184 2.336h73.44c0-25.008 8.336-60.944 25.008-73.84c16.656-12.88 36.848-19.328 60.56-19.328c27.328 0 48.336 7.424 63.073 22.271c14.72 14.848 22.063 36.08 22.063 63.664c0 23.184-5.44 42.976-16.368 59.376c-10.96 16.4-29.328 39.841-55.088 70.322c-26.576 23.967-42.992 43.231-49.232 57.807c-6.256 14.592-9.504 40.768-9.744 78.512h76.96c0-23.68 1.503-41.136 4.496-52.336c2.975-11.184 11.504-23.823 25.568-37.888c30.224-29.152 54.496-57.664 72.88-85.551c18.336-27.857 27.52-58.593 27.52-92.193c0-46.88-14.176-83.408-42.577-109.568c-28.416-26.176-68.272-39.248-119.568-39.248z"
    ></path>
  </svg>
);

const DemoStringTsx = `function Demo() {
  return (
    <div className="w-80">
      <ArrowHeading text="Default" className="mb-2" />

      <InputText placeholder="you@example.com" label="Email" icon={<Icon />} />
      <ArrowHeading text="Error" className="mb-2 mt-6" />
      <InputText
        placeholder="you@example.com"
        label="Email"
        icon={<Icon />}
        state="error"
      />
      <ArrowHeading text="Success" className="mb-2 mt-6" />

      <InputText
        placeholder="you@example.com"
        label="Email"
        icon={<Icon />}
        state="success"
      />
      <ArrowHeading text="Disabled" className="mb-2 mt-6" />

      <InputText
        placeholder="you@example.com"
        label="Email"
        icon={<Icon />}
        state="disabled"
      />
    </div>
  );
}
export const Icon = (props: { props?: IconProps }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.2em"
    height="1.2em"
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path
      fill="currentColor"
      d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512.017-229.216 512.017-512C1024.017 229.232 794.785 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448.017 200.977 448.017 448S759.025 961.009 512 961.009zm-47.056-160.529h80.512v-81.248h-80.512zm46.112-576.944c-46.88 0-85.503 12.64-115.839 37.889c-30.336 25.263-45.088 75.855-44.336 117.775l1.184 2.336h73.44c0-25.008 8.336-60.944 25.008-73.84c16.656-12.88 36.848-19.328 60.56-19.328c27.328 0 48.336 7.424 63.073 22.271c14.72 14.848 22.063 36.08 22.063 63.664c0 23.184-5.44 42.976-16.368 59.376c-10.96 16.4-29.328 39.841-55.088 70.322c-26.576 23.967-42.992 43.231-49.232 57.807c-6.256 14.592-9.504 40.768-9.744 78.512h76.96c0-23.68 1.503-41.136 4.496-52.336c2.975-11.184 11.504-23.823 25.568-37.888c30.224-29.152 54.496-57.664 72.88-85.551c18.336-27.857 27.52-58.593 27.52-92.193c0-46.88-14.176-83.408-42.577-109.568c-28.416-26.176-68.272-39.248-119.568-39.248z"
    ></path>
  </svg>
);`;

const DemoStringJsx = `function Demo() {
  return (
    <div className="w-80">
      <ArrowHeading text="Default" className="mb-2" />

      <InputText placeholder="you@example.com" label="Email" icon={<Icon />} />
      <ArrowHeading text="Error" className="mb-2 mt-6" />
      <InputText
        placeholder="you@example.com"
        label="Email"
        icon={<Icon />}
        state="error"
      />
      <ArrowHeading text="Success" className="mb-2 mt-6" />

      <InputText
        placeholder="you@example.com"
        label="Email"
        icon={<Icon />}
        state="success"
      />
      <ArrowHeading text="Disabled" className="mb-2 mt-6" />

      <InputText
        placeholder="you@example.com"
        label="Email"
        icon={<Icon />}
        state="disabled"
      />
    </div>
  );
}
export const Icon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.2em"
    height="1.2em"
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path
      fill="currentColor"
      d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512.017-229.216 512.017-512C1024.017 229.232 794.785 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448.017 200.977 448.017 448S759.025 961.009 512 961.009zm-47.056-160.529h80.512v-81.248h-80.512zm46.112-576.944c-46.88 0-85.503 12.64-115.839 37.889c-30.336 25.263-45.088 75.855-44.336 117.775l1.184 2.336h73.44c0-25.008 8.336-60.944 25.008-73.84c16.656-12.88 36.848-19.328 60.56-19.328c27.328 0 48.336 7.424 63.073 22.271c14.72 14.848 22.063 36.08 22.063 63.664c0 23.184-5.44 42.976-16.368 59.376c-10.96 16.4-29.328 39.841-55.088 70.322c-26.576 23.967-42.992 43.231-49.232 57.807c-6.256 14.592-9.504 40.768-9.744 78.512h76.96c0-23.68 1.503-41.136 4.496-52.336c2.975-11.184 11.504-23.823 25.568-37.888c30.224-29.152 54.496-57.664 72.88-85.551c18.336-27.857 27.52-58.593 27.52-92.193c0-46.88-14.176-83.408-42.577-109.568c-28.416-26.176-68.272-39.248-119.568-39.248z"
    ></path>
  </svg>
);
`;
const ButtonCodeTsx: string = `function InputText({
  label,
  placeholder,
  props,
  icon,
  state = "default",
}: {
  label: string;
  placeholder: string;
  props?: any;
  icon?: any;
  state?: "default" | "error" | "success" | "disabled";
}) {
  return (
    <div>
      <span className="text-s_textPrimary font-medium text-sm">{label}</span>
      <div
        className={twMerge(
          "relative text-s_primary",
          state === "error" && "text-s_error",
          state === "success" && "text-s_success"
        )}
      >
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5">
          {icon ? icon : null}
        </div>
        <input
          type="text"
          className={twMerge(
            "my-1 w-full bg-transparent bg-opacity-30 text-s_textPrimary placeholder:text-s_textSecondary py-2 pr-10 pl-4 rounded-md border-[1px] border-s_primary focus:border-s_accent focus:outline-none focus:ring-2 shadow-sm",
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
      </div>
    </div>
  );
}`;

const ButtonCodeJsx = `function InputText({
  label,
  placeholder,
  props,
  icon,
  state = "default",
}) {
  return (
    <div>
      <span className="text-s_textPrimary font-medium text-sm">{label}</span>
      <div
        className={twMerge(
          "relative text-s_primary",
          state === "error" && "text-s_error",
          state === "success" && "text-s_success"
        )}
      >
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5">
          {icon ? icon : null}
        </div>
        <input
          type="text"
          className={twMerge(
            "my-1 w-full bg-transparent bg-opacity-30 text-s_textPrimary placeholder:text-s_textSecondary py-2 pr-10 pl-4 rounded-md border-[1px] border-s_primary focus:border-s_accent focus:outline-none focus:ring-2 shadow-sm",
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
            code: DemoStringTsx,
          },
          {
            language: "jsx",
            code: DemoStringJsx,
          },
        ],
      },
    ],
  },
];

const Data: DataDescription = {
  name: "Text Input with Right Icon",
  description: "This is a text input with label and Right Icon",
  implementation: Implementation,
  component: Demo(),
  version_included: "0.0.1",
  display: true,
};
export default Data;
