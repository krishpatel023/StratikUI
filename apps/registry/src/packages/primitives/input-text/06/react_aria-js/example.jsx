import { Input } from "@registry/primitives/input-text/06/react_aria-js/Input";

export default function InputPasswordToggle() {
  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Input name="Password" placeholder="Password" label="Password" />
    </div>
  );
}
