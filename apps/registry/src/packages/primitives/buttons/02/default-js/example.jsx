import ArrowHeading from "@/ui/ArrowHeading";
import { Button } from "@registry/primitives/buttons/02/default-js/Button";

export default function ButtonImplementation() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="w-60 md:w-80 flex flex-col gap-4">
        <ArrowHeading text="Primary" />
        <Button>Click</Button>
        <Button isDisabled>Disabled</Button>
        <Button isProcessing>Click</Button>
      </div>
      <div className="w-60 md:w-80 flex flex-col gap-4">
        <ArrowHeading text="Secondary" />
        <Button variant="secondary">Click</Button>
        <Button variant="secondary" isDisabled>
          Disabled
        </Button>
        <Button variant="secondary" isProcessing>
          Click
        </Button>
      </div>
      <div className="w-60 md:w-80 flex flex-col gap-4">
        <ArrowHeading text="Destructive" />
        <Button variant="destructive">Click</Button>
        <Button variant="destructive" isDisabled>
          Disabled
        </Button>
        <Button variant="destructive" isProcessing>
          Click
        </Button>
      </div>
      <div className="w-60 md:w-80 flex flex-col gap-4">
        <ArrowHeading text="Outline" />
        <Button variant="outline">Click</Button>
        <Button variant="outline" isDisabled>
          Disabled
        </Button>
        <Button variant="outline" isProcessing>
          Click
        </Button>
      </div>
      <div className="w-60 md:w-80 flex flex-col gap-4">
        <ArrowHeading text="Ghost" />
        <Button variant="ghost">Click</Button>
        <Button variant="ghost" isDisabled>
          Disabled
        </Button>
        <Button variant="ghost" isProcessing>
          Click
        </Button>
      </div>
      <div className="w-60 md:w-80 flex flex-col gap-4">
        <ArrowHeading text="Accent" />
        <Button variant="accent">Click</Button>
        <Button variant="accent" isDisabled>
          Disabled
        </Button>
        <Button variant="accent" isProcessing>
          Click
        </Button>
      </div>
    </div>
  );
}
