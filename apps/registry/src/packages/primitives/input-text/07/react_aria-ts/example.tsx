import { Input } from "@registry/packages/primitives/input-text/07/react_aria-ts/Input";

export default function DefaultLinedInputComponent() {
  return (
    <div className="w-full flex justify-center">
      <Input label="Name" placeholder="Full Name" name="Name" type="text" className="w-80" />
    </div>
  );
}
