import { Input } from "@registry/primitives/input-text/03/react_aria-js/Input";

export default function InputWithLeftIcon() {
  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Input
        name="Email"
        type="email"
        placeholder="you@example.com"
        label="Email"
        icon={<Icon />}
      />
    </div>
  );
}

const Icon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.2em"
    height="1.2em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.95 3.684L8.637 8.912a1 1 0 0 1-1.276 0l-6.31-5.228A.999.999 0 0 0 1 4v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a.999.999 0 0 0-.05-.316M2 2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m-.21 1l5.576 4.603a1 1 0 0 0 1.27.003L14.268 3z"
    ></path>
  </svg>
);
