import {
  Tooltip,
  TooltipTrigger,
} from "@registry/primitives/tooltip/01/react_aria-ts/Tooltip";
import Button from "@/ui/Button";

export default function TooltipImplementation() {
  return (
    <div className="w-80 min-h-[30rem] mx-auto flex flex-col justify-center items-center gap-10">
      <TooltipTrigger delay={0}>
        <Button>Hover Me</Button>
        <Tooltip>
          <h1>This is a tooltip message</h1>
        </Tooltip>
      </TooltipTrigger>

      <TooltipTrigger delay={0}>
        <Button>Hover Me</Button>
        <Tooltip placement="right">
          <h1>
            This is a tooltip message to demonstrate it can deal with long text
            messages easily. Making this message a little bit longer.
          </h1>
        </Tooltip>
      </TooltipTrigger>

      <TooltipTrigger delay={0}>
        <Button>Hover Me</Button>
        <Tooltip placement="left">
          <h1>This is a tooltip</h1>
        </Tooltip>
      </TooltipTrigger>

      <TooltipTrigger delay={0}>
        <Button>Hover Me</Button>
        <Tooltip placement="bottom">
          <h1>
            This is a tooltip message to demonstrate it can deal with long text
            messages easily. Making this message a little bit longer.
          </h1>
        </Tooltip>
      </TooltipTrigger>
    </div>
  );
}
