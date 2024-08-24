import ArrowHeading from "@registry/ui/ArrowHeading";
import { InputNumber } from "@registry/packages/primitives/input-number/01/react_aria-js/InputNumber";

export default function InputImplementation() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8">
      <ArrowHeading text="Default Usage" />
      <InputNumber placeholder="Enter a value" label="Label" description="This is a description" />
      <ArrowHeading text="Default Usage with showButtons false" />
      <InputNumber placeholder="Enter a value" label="Label" description="This is a description" showButtons={false} />
      <ArrowHeading text=" Usage with different format." />
      <InputNumber
        placeholder="Enter a value"
        label="Price"
        description="Choose the amount you want to pay"
        formatOptions={{
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }}
      />
    </div>
  );
}
