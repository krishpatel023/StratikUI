import { DataDescription, ImplementationNode } from "@/utils/constants";
function InputText({
  placeholder,
  props,
}: {
  placeholder: string;
  props?: any;
}) {
  return (
    <input
      type="text"
      className="w-full bg-transparent text-s_textPrimary py-2 px-4 rounded-md border-[1px] border-s_primary focus:border-s_accent focus:outline-none focus:ring-2"
      //ADD FOR DISABLED
      // className="disabled:cursor-not-allowed"

      //ADD FOR ERROR
      // className="border-s_error focus:border-s_error focus:ring-red-400/90"

      //ADD FOR SUCCESS
      // className="border-s_success focus:border-s_success focus:ring-green-400/90"
      placeholder={placeholder}
      {...props}
    />
  );
}

function Demo() {
  return (
    <div className="w-80">
      <InputText placeholder="Something..." />
    </div>
  );
}

const ButtonCode: string = `function Demo() {
  return (
    <div>
      <InputText placeholder="Something..." />
    </div>
  );
}
// --------------------------------------------------------------
// THIS IS THE BUTTON LOGIC (IF WANT THE RAW COMPONENT COPY THIS)
// --------------------------------------------------------------

function InputText({
  placeholder,
  props,
}) {
  return (
    <input
      type="text"
      className="w-full bg-transparent text-s_textPrimary py-2 px-4 rounded-md border-[1px] border-s_primary focus:border-s_accent focus:outline-none focus:ring-2"
      //ADD FOR DISABLED
      // className="disabled:cursor-not-allowed"

      //ADD FOR ERROR
      // className="border-s_error focus:border-s_error focus:ring-red-400/90"

      //ADD FOR SUCCESS
      // className="border-s_success focus:border-s_success focus:ring-green-400/90"
      placeholder={placeholder}
      {...props}
    />
  );
}`;

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    title: "Technology Used",
    content: ["tailwind-css"],
  },
  {
    type: "code",
    title: "Code",
    content: ButtonCode,
  },
];

const Data: DataDescription = {
  name: "Default Text Input",
  description: "This is a default text input",
  implementation: Implementation,
  component: Demo(),
  version_included: "0.0.1",
  display: true,
};
export default Data;
