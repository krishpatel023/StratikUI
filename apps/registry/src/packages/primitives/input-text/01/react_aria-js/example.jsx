import { Input } from "@registry/packages/primitives/input-text/01/react_aria-js/Input";

export default function InputImplementation() {
  return (
    <div className="w-full flex justify-center">
      <Input label="Name" placeholder="Name" name="Name" type="text" className="w-80" />
    </div>
  );
}
