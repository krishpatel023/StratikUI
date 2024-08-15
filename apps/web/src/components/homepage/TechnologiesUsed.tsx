import { IconProps } from "@/utils/constants";
import { GradientText } from "../ui/GradientText";

export function TechnologiesUsed() {
  return (
    <div className="w-full mt-40 h-80 flex flex-col justify-center items-center gap-12 px-6">
      <div className="flex justify-center items-center gap-8">
        <div className="hidden md:block min-w-80 min-h-[2px] bg-gradient-to-l from-neutral-400 via-neutral-300  dark:from-neutral-700 dark:via-neutral-600 to-transparent rounded-full"></div>
        <GradientText className="text-xl font-medium">
          Technologies Used
        </GradientText>
        <div className="hidden md:block min-w-80 min-h-[2px] bg-gradient-to-r from-neutral-400 via-neutral-300 dark:from-neutral-700 dark:via-neutral-600  to-transparent rounded-full"></div>
      </div>
      <div className="flex justify-center items-center gap-12 dark:text-neutral-300 flex-wrap">
        <IconsContainer name="NextJs">
          <Icons.nextjs className="w-4 h-4 md:w-6 md:h-6" />
        </IconsContainer>
        <IconsContainer name="React">
          <Icons.react className="w-4 h-4 md:w-8 md:h-8" />
        </IconsContainer>
        <IconsContainer name="React Aria">
          <Icons.reactAria className="w-4 h-4 md:w-6 md:h-6" />
        </IconsContainer>
        <IconsContainer name="TailwindCSS">
          <Icons.tailwindcss className="w-4 h-4 md:w-8 md:h-8" />
        </IconsContainer>
        <IconsContainer name="Framer Motion">
          <Icons.framerMotion className="w-4 h-4 md:w-6 md:h-6" />
        </IconsContainer>
      </div>
    </div>
  );
}

function IconsContainer({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  return (
    <div className="flex justify-center items-center gap-4">
      {children}
      <h1 className="text-sm md:text-md">{name}</h1>
    </div>
  );
}
const Icons = {
  tailwindcss: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 128 128"
      {...props}
    >
      <path
        fill="currentColor"
        d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602c-6.399 8.536-13.867 11.735-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597c-6.399 8.531-13.867 11.73-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
      ></path>
    </svg>
  ),
  framerMotion: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="currentColor" d="M4 0h16v8h-8zm0 8h8l8 8H4zm0 8h8v8z"></path>
    </svg>
  ),
  radixui: (props: IconProps) => (
    <svg
      height="200"
      width="200"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.52 24a7.68 7.68 0 0 1-7.68-7.68a7.68 7.68 0 0 1 7.68-7.68V24Zm0-24v7.68H3.84V0h7.68Zm4.8 7.68a3.84 3.84 0 1 1 0-7.68a3.84 3.84 0 0 1 0 7.68Z"
        fill="currentColor"
      />
    </svg>
  ),
  nextjs: (props: IconProps) => (
    <svg
      height="200"
      width="200"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64a64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64A64 64 0 0 0 64 0m17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92l-.111.096a64 64 0 0 0 .111-.096"
        fill="currentColor"
      />
    </svg>
  ),
  react: (props: IconProps) => (
    <svg
      height="200"
      width="200"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.108 12.376q-.176-.201-.371-.403q.136-.144.264-.287c1.605-1.804 2.283-3.614 1.655-4.701c-.602-1.043-2.393-1.354-4.636-.918q-.331.065-.659.146q-.063-.216-.133-.43C14.467 3.49 13.238 1.999 11.982 2c-1.204 0-2.368 1.397-3.111 3.558q-.11.32-.203.644q-.219-.054-.44-.1c-2.366-.485-4.271-.165-4.898.924c-.601 1.043.027 2.75 1.528 4.472q.224.255.46.5c-.186.19-.361.381-.525.571c-1.465 1.698-2.057 3.376-1.457 4.415c.62 1.074 2.498 1.425 4.785.975q.278-.055.553-.124q.1.351.221.697C9.635 20.649 10.792 22 11.992 22c1.24 0 2.482-1.453 3.235-3.659c.06-.174.115-.355.169-.541q.355.088.715.156c2.203.417 3.952.09 4.551-.95c.619-1.075-.02-2.877-1.554-4.63ZM4.07 7.452c.386-.67 1.943-.932 3.986-.512q.196.04.399.09a20.464 20.464 0 0 0-.422 2.678A20.887 20.887 0 0 0 5.93 11.4q-.219-.227-.427-.465C4.216 9.461 3.708 8.081 4.07 7.452Zm3.887 5.728c-.51-.387-.985-.783-1.416-1.181c.43-.396.905-.79 1.415-1.176q-.028.589-.027 1.179q0 .59.028 1.178Zm0 3.94a7.237 7.237 0 0 1-2.64.094a1.766 1.766 0 0 1-1.241-.657c-.365-.63.111-1.978 1.364-3.43q.236-.273.488-.532a20.49 20.49 0 0 0 2.107 1.7a20.802 20.802 0 0 0 .426 2.712q-.25.063-.505.114Zm7.1-8.039q-.503-.317-1.018-.613q-.508-.292-1.027-.563a18.7 18.7 0 0 1 1.739-.635a18.218 18.218 0 0 1 .306 1.811ZM9.68 5.835c.636-1.85 1.578-2.98 2.304-2.98c.773-.001 1.777 1.218 2.434 3.197q.064.194.12.39a20.478 20.478 0 0 0-2.526.97a20.061 20.061 0 0 0-2.52-.981q.087-.3.188-.596Zm-.4 1.424a18.307 18.307 0 0 1 1.73.642q-1.052.542-2.048 1.181c.08-.638.187-1.249.318-1.823Zm-.317 7.66q.497.319 1.009.613q.522.3 1.057.576a18.196 18.196 0 0 1-1.744.665a19.144 19.144 0 0 1-.322-1.853Zm5.456 3.146a7.236 7.236 0 0 1-1.238 2.333a1.766 1.766 0 0 1-1.188.748c-.729 0-1.658-1.085-2.29-2.896q-.112-.321-.206-.648a20.109 20.109 0 0 0 2.53-1.01a20.8 20.8 0 0 0 2.547.979q-.072.249-.155.494Zm.362-1.324a19.267 19.267 0 0 1-1.762-.646q.509-.267 1.025-.565q.53-.306 1.032-.627a18.152 18.152 0 0 1-.295 1.838Zm.447-4.743q0 .911-.057 1.82c-.493.334-1.013.66-1.554.972c-.54.311-1.073.597-1.597.856q-.827-.396-1.622-.854q-.79-.455-1.544-.969q-.07-.91-.07-1.822q0-.911.068-1.821a24.168 24.168 0 0 1 3.158-1.823q.816.397 1.603.851q.79.454 1.55.959q.065.914.065 1.831Zm.956-5.093c1.922-.373 3.37-.122 3.733.507c.387.67-.167 2.148-1.554 3.706q-.115.129-.238.259a20.061 20.061 0 0 0-2.144-1.688a20.04 20.04 0 0 0-.405-2.649q.31-.076.608-.135Zm-.13 3.885a18.164 18.164 0 0 1 1.462 1.188a18.12 18.12 0 0 1-1.457 1.208q.023-.594.023-1.188q0-.604-.028-1.208Zm3.869 5.789c-.364.631-1.768.894-3.653.538q-.324-.061-.664-.146a20.069 20.069 0 0 0 .387-2.682a19.94 19.94 0 0 0 2.137-1.715q.177.183.336.364a7.234 7.234 0 0 1 1.403 2.238a1.766 1.766 0 0 1 .054 1.403Zm-8.819-6.141a1.786 1.786 0 1 0 2.44.654a1.786 1.786 0 0 0-2.44-.654Z"
        fill="currentColor"
      />
    </svg>
  ),
  reactAria: (props: IconProps) => (
    <svg
      height="200"
      width="200"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 1v18.001L12.607 1H20ZM7.399 1L0 19.001V1h7.399Zm2.604 6.265L14.713 19h-3.086l-1.41-3.419H6.77l3.233-8.316Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ),
};
