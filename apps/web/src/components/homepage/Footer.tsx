import { Logo } from "@/utils/logo";
import { Links } from "@/utils/utils";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="min-w-[80%] min-h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-40 mb-4"></div>
      <div className="text-center mb-4 text-neutral-800 dark:text-neutral-400">
        Designed and developed by{" "}
        <a
          className="underline font-medium"
          href={Links.personal.github}
          target="_blank"
          rel="noreferrer"
          aria-label="Krish Patel's GitHub Profile"
        >
          Krish Patel
        </a>
      </div>
    </>
  );
}
