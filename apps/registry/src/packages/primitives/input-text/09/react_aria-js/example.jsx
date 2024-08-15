import { Input } from "@registry/packages/primitives/input-text/09/react_aria-js/Input";

export default function DefaultLabelCoveredInputComponent() {
  return (
    <div className="w-full flex justify-center">
      <Input
        label="Full Name"
        placeholder="Your Name"
        name="Name"
        type="text"
        className="w-80"
      />
    </div>
  );
}
