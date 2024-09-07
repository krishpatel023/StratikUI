import { twMerge } from "tailwind-merge";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-12 w-full">
      <div className="col-span-1 md:col-span-2 min-h-8 md:min-h-40 border-r border-outline-secondary" />
      <div className="col-span-10 md:col-span-8 min-h-8 md:min-h-40" />
      <div className="col-span-1 md:col-span-2 min-h-8 md:min-h-40 border-l border-outline-secondary" />
      <div className="col-span-1 md:col-span-2 min-h-8 md:min-h-40 border border-outline-secondary" />
      <div className="col-span-10 md:col-span-8 px-[10%] py-10 md:py-20 border-t border-b border-outline-secondary">
        {children}
      </div>
      <div className="col-span-1 md:col-span-2 min-h-8 md:min-h-40 border border-outline-secondary" />
      <div className="col-span-1 md:col-span-2 min-h-8 md:min-h-40 border-r border-outline-secondary" />
      <div className="col-span-10 md:col-span-8 min-h-8 md:min-h-40" />
      <div className="col-span-1 md:col-span-2 min-h-8 md:min-h-40 border-l border-outline-secondary" />
    </div>
  );
}

function DashedBackground({ className }: { className?: string }) {
  return (
    <div
      className={twMerge(
        "bg-[linear-gradient(45deg,rgba(0,0,0,.1)_7.14%,transparent_7.14%,transparent_50%,rgba(0,0,0,.1)_50%,rgba(0,0,0,.1)_57.14%,transparent_57.14%,transparent);] dark:bg-[linear-gradient(45deg,rgba(0,0,0,.4)_7.14%,transparent_7.14%,transparent_50%,rgba(0,0,0,.4)_50%,rgba(0,0,0,.4)_57.14%,transparent_57.14%,transparent);] bg-[length:10px_10px]",
        "min-w-full min-h-full",
        className,
      )}
    />
  );
}
