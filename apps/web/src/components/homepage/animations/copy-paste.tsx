import { Icons } from "@/utils/icons";
import { twMerge } from "tailwind-merge";

export default function CopyPaste() {
  return (
    <div className="flex gap-6 items-center">
      <div className="border border-outline-secondary shadow w-max rounded-lg p-1 bg-white/5 group-data-[visible=true]/bento-card:animate-buttonPress group-hover/bento-card:animate-buttonPress transition-all duration-200 delay-300 relative">
        <div
          className={twMerge(
            "p-2 w-max rounded-[inherit] data-[press=true]:scale-95 transition-all duration-200 border border-outline-secondary shadow-lg bg-background",
          )}
        >
          <Icons.copy className="w-6 h-6 absolute group-data-[visible=true]/bento-card:text-transparent  group-hover/bento-card:text-transparent transition-all duration-200 delay-300" />
          <Icons.tick className="w-6 h-6 group-data-[visible=true]/bento-card:text-green-500 group-hover/bento-card:text-green-500 absolute text-transparent  transition-all duration-200 delay-300" />
          <div className="min-w-6 min-h-6" />
        </div>
        <div className="min-h-full min-w-full transition-all duration-200 delay-300  group-data-[visible=true]/bento-card:bg-green-500 group-hover/bento-card:bg-green-500 absolute top-0 left-0 rounded-xl opacity-90 blur-[10px] -z-50" />
      </div>
    </div>
  );
}
