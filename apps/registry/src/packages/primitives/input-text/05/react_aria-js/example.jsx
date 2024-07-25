import { Input } from "@/packages/primitives/input-text/05/react_aria-js/Input";

export default function InputWithFloatingLabel() {
  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Input
        name="Name"
        type="text"
        placeholder="Enter your name"
        label="Name"
      />
    </div>
  );
}