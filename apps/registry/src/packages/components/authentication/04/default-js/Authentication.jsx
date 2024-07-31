"use client";

import { Button } from "@/packages/primitives/buttons/02/default-js/Button";
import { Input } from "@/packages/primitives/input-text/02/react_aria-js/Input";
import { Input as PasswordToggle } from "@/packages/primitives/input-text/06/react_aria-js/Input";

export function SignIn() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="flex h-[48rem] w-full items-center justify-center ">
      <div className="relative h-full w-[40%] flex-col items-center justify-center hidden @lg:flex">
        <div className="flex w-3/4 flex-col gap-4">
          <h1 className="text-5xl font-bold text-primary-foreground">
            Welcome Back
          </h1>
          <span className="text-2xl font-normal text-secondary-foreground">
            {
              "Sign in to start creating your dream website. Let's kickstart your development."
            }
          </span>
        </div>
        <Background />
      </div>
      <form
        className="flex h-full w-full @lg:w-[60%] items-center justify-center bg-background"
        onSubmit={handleSubmit}
      >
        <div className="w-[50%] min-w-80">
          <div className="flex w-full flex-col gap-8">
            <Input label="Email" placeholder="you@email.com" className="h-12" />
            <PasswordToggle
              label="Password"
              placeholder="Password"
              className="h-12 "
              state="default"
            />
          </div>

          <div className="mt-12 w-full flex flex-col gap-4">
            <Button variant="primary" className="h-12" type="submit">
              Sign In
            </Button>

            <span className="text-accent-secondary underline">
              Forget Password?
            </span>
            <p className="text-secondary-foreground flex gap-3">
              {"Don't have an account?"}
              <span className="text-accent-secondary underline">Sign Up</span>
            </p>
          </div>
          <div className="w-full mt-6 flex items-center justify-between">
            <div className="min-h-[1px] w-[43%] bg-outline-secondary"></div>
            <span className="text-sm font-medium text-secondary-foreground">
              OR
            </span>
            <div className="min-h-[1px] w-[43%] bg-outline-secondary"></div>
          </div>

          <div className=" mt-6 flex items-center justify-center gap-6">
            <Button variant="outline">
              <Google className="h-8 w-8" />
            </Button>
            <Button variant="outline">
              <GitHub className="h-8 w-8 text-foreground" />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

const Google = (props) => (
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

const GitHub = (props) => (
  <svg
    height="200"
    width="200"
    viewBox="0 0 432 416"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"
      fill="currentColor"
    />
  </svg>
);

const Background = () => {
  return (
    <div className="absolute top-0 left-0 -z-10 h-full w-full bg-white dark:bg-black">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] dark:bg-[rgba(73,89,123,0.5)] opacity-50 blur-[80px]"></div>
    </div>
  );
};
