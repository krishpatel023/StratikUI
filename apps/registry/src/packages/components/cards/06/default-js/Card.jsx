import { DashedBackground } from "@/ui/DashedBackground";
import Link from "next/link";

export function Card() {
  return (
    <div className="w-[30rem] h-auto @md:h-[20rem] @md:w-[35rem] rounded-lg flex flex-col @md:flex-row py-6 px-6  bg-background text-primary-foreground border shadow-sm border-outline-secondary">
      <DashedBackground className="w-full h-48 @md:w-1/2 @md:h-full" />

      <div className="@md:w-1/2 px-6 py-6 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Title</h1>
        <h3>
          This is something great. Design this according to your needs and make
          it look great.
        </h3>
        <Link
          href="#"
          target="_blank"
          rel="noreferrer"
          className="text-accent font-semibold mt-4 flex gap-2 hover:gap-4 transition-all duration-200"
        >
          Get Started <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
