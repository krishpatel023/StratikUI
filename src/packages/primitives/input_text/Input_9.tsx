import ArrowHeading from "@/components/ui/ArrowHeading";
import {
  DataDescription,
  IconProps,
  ImplementationNode,
} from "@/utils/constants";
import { twMerge } from "tailwind-merge";
import { PasswordToggle } from "./Input_9_Helper";

function Demo() {
  return (
    <div className="w-80">
      <ArrowHeading text="Default" className="mb-2" />
      <PasswordToggle placeholder="Password" label="Password" />
      <ArrowHeading text="Error" className="mb-2 mt-6" />
      <PasswordToggle placeholder="Password" label="Password" state="error" />
      <ArrowHeading text="Success" className="mb-2 mt-6" />
      <PasswordToggle placeholder="Password" label="Password" state="success" />
      <ArrowHeading text="Disabled" className="mb-2 mt-6" />
      <PasswordToggle
        placeholder="Password"
        label="Password"
        state="disabled"
      />
    </div>
  );
}

const DemoString = `function Demo() {
  return (
    <div className="w-80">
      <ArrowHeading text="Default" className="mb-2" />
      <PasswordToggle placeholder="Password" label="Password" />
      <ArrowHeading text="Error" className="mb-2 mt-6" />
      <PasswordToggle placeholder="Password" label="Password" state="error" />
      <ArrowHeading text="Success" className="mb-2 mt-6" />
      <PasswordToggle placeholder="Password" label="Password" state="success" />
      <ArrowHeading text="Disabled" className="mb-2 mt-6" />
      <PasswordToggle
        placeholder="Password"
        label="Password"
        state="disabled"
      />
    </div>
  );
}`;

const ButtonCodeTsx: string = `export function PasswordToggle({
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
  const [showPassword, setShowPassword] = useState<boolean>(false);
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
        <button
          className={twMerge(
            "cursor-pointer absolute inset-y-0 right-0 flex items-center pr-2.5",
            state === "disabled" && "pointer-events-none"
          )}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <Icon.PasswordVisible className="w-4 h-4" />
          ) : (
            <Icon.PasswordHidden className="w-4 h-4" />
          )}
        </button>
        <input
          type={showPassword ? "text" : "password"}
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

const Icon = {
  PasswordVisible: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="M15.98 7.873c.013.03.02.064.02.098v.06a.24.24 0 0 1-.02.097C15.952 8.188 13.291 14 8 14S.047 8.188.02 8.128A.24.24 0 0 1 0 8.03v-.059c0-.034.007-.068.02-.098C.048 7.813 2.709 2 8 2s7.953 5.813 7.98 5.873m-1.37-.424a12.097 12.097 0 0 0-1.385-1.862C11.739 3.956 9.999 3 8 3c-2 0-3.74.956-5.225 2.587a12.098 12.098 0 0 0-1.701 2.414a12.095 12.095 0 0 0 1.7 2.413C4.26 12.043 6.002 13 8 13s3.74-.956 5.225-2.587A12.097 12.097 0 0 0 14.926 8c-.08-.15-.189-.343-.315-.551M8 4.75A3.253 3.253 0 0 1 11.25 8A3.254 3.254 0 0 1 8 11.25A3.253 3.253 0 0 1 4.75 8A3.252 3.252 0 0 1 8 4.75m0 1C6.76 5.75 5.75 6.76 5.75 8S6.76 10.25 8 10.25S10.25 9.24 10.25 8S9.24 5.75 8 5.75m0 1.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5"
      ></path>
    </svg>
  ),
  PasswordHidden: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <g fill="currentColor">
        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288c-.335.48-.83 1.12-1.465 1.755c-.165.165-.337.328-.517.486l.708.709z"></path>
        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"></path>
        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884l-12-12l.708-.708l12 12l-.708.708z"></path>
      </g>
    </svg>
  ),
};`;

const ButtonCodeJsx: string = `export function PasswordToggle({
  label,
  placeholder,
  props,
  state = "default",
}) {
  const [showPassword, setShowPassword] = useState(false);
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
        <button
          className={twMerge(
            "cursor-pointer absolute inset-y-0 right-0 flex items-center pr-2.5",
            state === "disabled" && "pointer-events-none"
          )}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <Icon.PasswordVisible className="w-4 h-4" />
          ) : (
            <Icon.PasswordHidden className="w-4 h-4" />
          )}
        </button>
        <input
          type={showPassword ? "text" : "password"}
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

const Icon = {
  PasswordVisible: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="M15.98 7.873c.013.03.02.064.02.098v.06a.24.24 0 0 1-.02.097C15.952 8.188 13.291 14 8 14S.047 8.188.02 8.128A.24.24 0 0 1 0 8.03v-.059c0-.034.007-.068.02-.098C.048 7.813 2.709 2 8 2s7.953 5.813 7.98 5.873m-1.37-.424a12.097 12.097 0 0 0-1.385-1.862C11.739 3.956 9.999 3 8 3c-2 0-3.74.956-5.225 2.587a12.098 12.098 0 0 0-1.701 2.414a12.095 12.095 0 0 0 1.7 2.413C4.26 12.043 6.002 13 8 13s3.74-.956 5.225-2.587A12.097 12.097 0 0 0 14.926 8c-.08-.15-.189-.343-.315-.551M8 4.75A3.253 3.253 0 0 1 11.25 8A3.254 3.254 0 0 1 8 11.25A3.253 3.253 0 0 1 4.75 8A3.252 3.252 0 0 1 8 4.75m0 1C6.76 5.75 5.75 6.76 5.75 8S6.76 10.25 8 10.25S10.25 9.24 10.25 8S9.24 5.75 8 5.75m0 1.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5"
      ></path>
    </svg>
  ),
  PasswordHidden: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <g fill="currentColor">
        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288c-.335.48-.83 1.12-1.465 1.755c-.165.165-.337.328-.517.486l.708.709z"></path>
        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"></path>
        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884l-12-12l.708-.708l12 12l-.708.708z"></path>
      </g>
    </svg>
  ),
};`;

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    content: ["tailwind-css", "twMerge"],
  },
  {
    type: "code",
    content: [
      {
        name: "PasswordToggle",
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
  name: "Passord Toggle Input",
  description: "This is a text input with password toggle",
  implementation: Implementation,
  component: Demo(),
  version_included: "0.1.1",
  display: true,
};
export default Data;
