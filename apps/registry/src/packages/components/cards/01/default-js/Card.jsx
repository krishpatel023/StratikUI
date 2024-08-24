import { Button } from "@registry/packages/primitives/buttons/02/default-js/Button";
import { DashedBackground } from "@registry/ui/DashedBackground";

export function Card() {
  return (
    <div className="w-80 py-4 px-6 rounded-lg flex flex-col justify-center gap-4 bg-primary text-primary-foreground border shadow-sm border-outline-secondary">
      <DashedBackground className="h-40 w-full" />
      <h1 className="text-2xl font-semibold">Title</h1>
      <h3>This is something great. Design this according to your needs and make it look great.</h3>
      <Button>Get Started</Button>
    </div>
  );
}
