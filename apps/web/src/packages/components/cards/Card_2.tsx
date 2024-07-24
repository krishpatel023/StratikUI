import { Button } from "@/packages/primitives/buttons/Button_1";

function Card() {
  return (
    <div className="w-80 py-4 px-6 rounded-lg flex flex-col justify-center gap-3 bg-primary text-primary-foreground border shadow-sm border-outline-secondary">
      <h1 className="text-2xl font-semibold">Title</h1>
      <h2>Subtitle Text</h2>
      <h3>
        This is something great. Design this according to your needs and make it
        look great.
      </h3>
      <Button>Get Started</Button>
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