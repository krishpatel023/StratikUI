import ArrowHeading from "@registry/ui/ArrowHeading";
import { HighlighterItem, HighlightGroup } from "@registry/packages/primitives/containers/03/default-js/Container";

export default function ContainerImplementation() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-10">
      <h1 className="text-2xl text-foreground">Hover to see the magic!!!</h1>
      <div>
        <ArrowHeading text="Solo Button" className="mb-4" />
        <HighlightGroup className="h-full">
          <HighlighterItem className="rounded-full">
            <button type="button" className="px-8 py-2 text-foreground text-sm md:text-base">
              Checkout the latest updates
            </button>
          </HighlighterItem>
        </HighlightGroup>
      </div>
      <div>
        <ArrowHeading text="Solo Container" className="mb-4" />
        <HighlightGroup className="h-full ">
          <HighlighterItem>
            <div className="min-h-60 min-w-60 md:min-h-80 md:min-w-80" />
          </HighlighterItem>
        </HighlightGroup>
      </div>
      <div className="w-full flex items-center flex-col">
        <ArrowHeading text="Multiple/Group Container" className="mb-4 mx-auto" />
        <HighlightGroup className="w-full flex gap-6 flex-wrap justify-center items-center">
          <HighlighterItem>
            <div className="min-h-60 min-w-60 md:min-h-80 md:min-w-80" />
          </HighlighterItem>
          <HighlighterItem>
            <div className="min-h-60 min-w-60 md:min-h-80 md:min-w-80" />
          </HighlighterItem>{" "}
          <HighlighterItem>
            <div className="min-h-60 min-w-60 md:min-h-80 md:min-w-80" />
          </HighlighterItem>
        </HighlightGroup>
      </div>
    </div>
  );
}
