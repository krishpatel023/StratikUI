import { twMerge } from "tailwind-merge";

export function DashedBackground({ className }: { className?: string }) {
  return (
    <div className={twMerge(" rounded-lg border border-outline bg-primary p-2", className)}>
      <div className="min-h-full min-w-full rounded-[inherit] border border-outline bg-[linear-gradient(45deg,rgba(0,0,0,.05)_7.14%,transparent_7.14%,transparent_50%,rgba(0,0,0,.05)_50%,rgba(0,0,0,.05)_57.14%,transparent_57.14%,transparent);] dark:bg-[linear-gradient(45deg,rgba(0,0,0,.4)_7.14%,transparent_7.14%,transparent_50%,rgba(0,0,0,.4)_50%,rgba(0,0,0,.4)_57.14%,transparent_57.14%,transparent);] bg-[length:10px_10px]" />
    </div>
  );
}
