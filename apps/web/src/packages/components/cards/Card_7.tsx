import { Button } from "@/packages/primitives/buttons/Button_1";
import {
  HighlighterItem,
  HighlightGroup,
} from "@/packages/primitives/containers/Container_3";
import { DashedBackground } from "@/packages/ui/DashedBackground";

function Card() {
  return (
    <HighlightGroup className="h-full">
      <HighlighterItem className="rounded-lg">
        <div className=" w-80 py-4 px-6 rounded-lg flex flex-col justify-center gap-4  text-primary-foreground border shadow-sm border-outline-secondary">
          <DashedBackground className="h-40 w-full " />
          <h1 className="text-2xl font-semibold">Title</h1>
          <h3>
            This is something great. Design this according to your needs and
            make it look great.
          </h3>
          <Button>Get Started</Button>
        </div>
      </HighlighterItem>
    </HighlightGroup>
  );
}

export function CardsImplementation() {
  return (
    <div className="w-full min-h-[40rem] flex justify-center items-center">
      <Card />
    </div>
  );
}
