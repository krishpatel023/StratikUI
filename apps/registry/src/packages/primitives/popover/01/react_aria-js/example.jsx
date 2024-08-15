import Button from "@registry/ui/Button";
import {
  Popover,
  PopoverTrigger,
} from "@registry/packages/primitives/popover/01/react_aria-js/Popover";

export default function PopoverImplementation() {
  return (
    <PopoverTrigger>
      <Button className="my-8"> Open Popover</Button>
      <Popover>
        <div className="flex flex-col justify-center gap-2 max-w-40">
          <h1 className="text-xl font-bold">Popover</h1>
          <span>
            This is a popover where you can place anything like a message, a
            form, or anything else.
          </span>
        </div>
      </Popover>
    </PopoverTrigger>
  );
}
