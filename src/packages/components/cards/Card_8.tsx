import { DashedBackground } from "@/packages/ui/DashedBackground";

function Card() {
  return (
    <div className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200  to-neutral-200 dark:from-sky-500 dark:to-neutral-600 before:absolute before:top-0 w-80 h-72 relative bg-primary flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
      <DashedBackground className="min-w-28 min-h-28 mt-2 rounded-full z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500 bg-secondary" />

      <div className="z-10  group-hover:-translate-y-12 transition-all duration-500 text-primary-foreground">
        <span className="text-2xl font-semibold">John Doe</span>
        <p>Developer</p>
        <span className="hidden group-hover:block delay-300 px-4">
          This is the description of the person that you want to provide.
        </span>
      </div>
    </div>
  );
}

export function CardsImplementation() {
  return (
    <div className="w-full min-h-[40rem] flex justify-center items-center">
      <Card />
    </div>
  );
}
