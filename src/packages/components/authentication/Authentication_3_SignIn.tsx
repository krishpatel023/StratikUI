import {
  DataDescription,
  IconProps,
  ImplementationNode,
} from "@/utils/constants";

import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { PasswordToggle } from "@/packages/primitives/input_text/Input_9_Helper";
import { Button } from "@/packages/primitives/buttons/Button_6_Helper";
import { twMerge } from "tailwind-merge";
import { Background } from "@/packages/helper/Background";

export function SignIn() {
  //   const [username, setUsername] = useState<string | null>();
  //   const [usernameError, setUsernameError] = useState<string | null>(null);

  //   const [password, setPassword] = useState<string | null>();
  //   const [passwordError, setPasswordError] = useState<string | null>(null);

  //   const [processMessage, setProcessMessage] = useState<string | null>(null);

  return (
    <div className="flex h-[48rem] w-full items-center justify-center relative">
      <Background />
      <div className="flex flex-col py-8 px-8 w-[25rem] items-center justify-center bg-white/30 border border-neutral-300 dark:border-neutral-900 rounded-lg dark:bg-black/30">
        <h1 className="text-3xl font-semibold mb-6 dark:text-white">Sign In</h1>
        <div className="flex w-full flex-col gap-6">
          <InputText
            label="Email"
            placeholder="you@email.com"
            state="default"
            className="h-12 border-neutral-300 dark:border-neutral-800 border-[2px]"
          />
          <PasswordToggle
            label="Password"
            placeholder="Password"
            className="h-12 border-neutral-300 dark:border-neutral-800 border-[2px]"
            state="default"
          />
        </div>

        <div className="mt-10 w-full flex flex-col gap-4">
          <Button
            className="w-full h-12 mt-auto px-4 py-2 text-black dark:text-white bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-md relative z-[100]"
            clickedClassName="bg-neutral-100 dark:bg-neutral-700"
          >
            Sign In
          </Button>

          <span className="text-accent underline">Forget Password?</span>
          <p className="dark:text-neutral-300 flex gap-3">
            {"Don't have an account?"}
            <span className="text-accent underline">Sign Up</span>
          </p>
        </div>

        <div className="w-full mt-6 flex items-center justify-between">
          <div className="min-h-[1px] w-[43%] bg-neutral-300/20"></div>
          <span className="text-sm font-medium text-textSecondary">OR</span>
          <div className="min-h-[1px] w-[43%] bg-neutral-300/20"></div>
        </div>

        <div className="width-full mt-6 flex items-center justify-center gap-6">
          <button className="rounded-md border-[1px] border-border p-2">
            <Google className="h-8 w-8" />
          </button>
          <button className="rounded-md border-[1px] border-border p-2">
            <GitHubLogoIcon className="h-8 w-8 dark:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

function InputText({
  label,
  placeholder,
  state = "default",
  errorMessage = "",
  className = "",
}: {
  label: string;
  placeholder: string;
  state?: "default" | "error" | "success" | "disabled";
  errorMessage?: string;
  className?: string;
}) {
  return (
    <div>
      <span className="text-s_textPrimary font-medium text-sm">{label}</span>
      <input
        type="text"
        className={twMerge(
          "mt-1 w-full bg-transparent text-s_textPrimary placeholder:text-s_textSecondary py-2 px-4 rounded-md border-[1px] border-s_primary focus:border-s_accent focus:outline-none focus:ring-2",
          className,
          state === "disabled" && "disabled:cursor-not-allowed",
          state === "error" &&
            "border-s_error focus:border-s_error focus:ring-red-400/90",
          state === "success" &&
            "border-s_success focus:border-s_success focus:ring-green-400/90"
        )}
        {...(state === "disabled" && { disabled: true })}
        placeholder={placeholder}
      />
      {errorMessage === "" ? null : (
        <span className="text-red-500 text-sm">{errorMessage}</span>
      )}
    </div>
  );
}

const Google = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 128 128"
    {...props}
  >
    <path
      fill="#fff"
      d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.33 74.33 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.16 36.16 0 0 1-13.93 5.5a41.29 41.29 0 0 1-15.1 0A37.16 37.16 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.31 38.31 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.28 34.28 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38z"
    ></path>
    <path
      fill="#e33629"
      d="M44.59 4.21a64 64 0 0 1 42.61.37a61.22 61.22 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21z"
    ></path>
    <path
      fill="#f8bd00"
      d="M3.26 51.5a62.93 62.93 0 0 1 5.5-15.9l20.73 16.09a38.31 38.31 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9z"
    ></path>
    <path
      fill="#587dbd"
      d="M65.27 52.15h59.52a74.33 74.33 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z"
    ></path>
    <path
      fill="#319f43"
      d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.16 37.16 0 0 0 14.08 6.08a41.29 41.29 0 0 0 15.1 0a36.16 36.16 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.73 63.73 0 0 1 8.75 92.4z"
    ></path>
  </svg>
);

function Demo() {
  return (
    <div className="w-full">
      <SignIn />
    </div>
  );
}

const Code: string = `
  // Add your code snippet here
  `;

const DemoString: string = `
  // Add your demo code snippet here
  `;

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    content: ["tailwind-css", "twMerge"],
  },
  {
    type: "code",
    content: [
      {
        name: "Name",
        content: [
          { language: "tsx", code: Code },
          { language: "jsx", code: Code },
        ],
      },
      {
        name: "Implementation",
        content: [
          { language: "tsx", code: DemoString },
          { language: "jsx", code: DemoString },
        ],
      },
    ],
  },
];

const Data: DataDescription = {
  name: "SignIn Blured with Background",
  description: "Component Description",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.1.1",
  display: true,
};

export default Data;
