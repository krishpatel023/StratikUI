import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder: string;
  state?: "default" | "error" | "success" | "disabled";
  type?: "text" | "email" | "password";
  className?: string;
}

export function Input({
  label,
  placeholder,
  state = "default",
  type = "text",
  className,
  ...props
}: InputProps) {
  return (
    <div>
      {label && (
        <span className="text-black dark:text-white font-medium text-sm">
          {label}
        </span>
      )}
      <input
        type={type}
        className={twMerge(
          "mt-1 w-full bg-transparent text-black dark:text-white  placeholder:text-s_textSecondary py-2 px-4 rounded-md border-[1px] border-s_primary focus:border-s_accent focus:outline-none focus:ring-2",

          state === "disabled" && "disabled:cursor-not-allowed",
          state === "error" &&
            "border-s_error focus:border-s_error focus:ring-red-400/90",
          state === "success" &&
            "border-s_success focus:border-s_success focus:ring-green-400/90",
          className
        )}
        {...(state === "disabled" && { disabled: true })}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
