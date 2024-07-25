import ArrowHeading from "@/ui/ArrowHeading";
import { Input } from "@/packages/primitives/input-text/08/react_aria-js/Input";

export default function StatefulLinedInputComponent() {
  return (
    <div className="w-full flex flex-col items-center gap-6">
      <span>
        <ArrowHeading text="Default" className="mb-2" />
        <Input name="Name" type="text" placeholder="Name" label="Name" />
      </span>

      <span>
        <ArrowHeading text="Error" className="mb-2" />
        <Input
          name="Name"
          type="text"
          label="Name"
          placeholder="Name"
          state="isInvalid"
        />
      </span>

      <span>
        <ArrowHeading text="Disabled" className="mb-2" />
        <Input
          name="Name"
          type="text"
          label="Name"
          placeholder="Name"
          state="isDisabled"
        />
      </span>

      <span>
        <ArrowHeading text="ReadOnly" className="mb-2" />
        <Input
          name="Name"
          type="text"
          label="Name"
          placeholder="Name"
          isReadOnly
          value={"John Doe"}
        />
      </span>
    </div>
  );
}
