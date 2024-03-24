import { DataDescription, ImplementationNode } from "@/utils/constants";
function InputText({
  label,
  placeholder,
  props,
}: {
  label: string;
  placeholder: string;
  props?: any;
}) {
  return (
    <div>
      <span className="text-s_textPrimary font-medium text-sm">
        {label} <span className="text-s_error text-lg">*</span>
      </span>
      <input
        type="text"
        className="mt-1 w-full bg-transparent bg-opacity-30 text-s_textPrimary placeholder:text-s_textSecondary py-2 px-4 rounded-md border-[1px] border-s_primary focus:border-s_accent focus:outline-none focus:ring-2"
        //ADD FOR DISABLED
        // className="disabled:cursor-not-allowed"

        //ADD FOR ERROR
        // className="border-s_error focus:border-s_error focus:ring-red-400/90"

        //ADD FOR SUCCESS
        // className="border-s_success focus:border-s_success focus:ring-green-400/90"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

function Demo() {
  return (
    <div className="w-80">
      <InputText placeholder="Something..." label="Label" />
    </div>
  );
}

const ButtonCode: string = `function Demo() {
  return (
    <div className="w-80">
      <InputText placeholder="Something..." label="Label" />
    </div>
  );
}
// --------------------------------------------------------------
// THIS IS THE BUTTON LOGIC (IF WANT THE RAW COMPONENT COPY THIS)
// --------------------------------------------------------------

function InputText({
  label,
  placeholder,
  props,
}) {
  return (
    <div>
      <span className="text-s_textPrimary font-medium text-sm">
        {label} <span className="text-s_error text-lg">*</span>
      </span>
      <input
        type="text"
        className="mt-1 w-full bg-transparent bg-opacity-30 text-s_textPrimary placeholder:text-s_textSecondary py-2 px-4 rounded-md border-[1px] border-s_primary focus:border-s_accent focus:outline-none focus:ring-2"
        //ADD FOR DISABLED
        // className="disabled:cursor-not-allowed"

        //ADD FOR ERROR
        // className="border-s_error focus:border-s_error focus:ring-red-400/90"

        //ADD FOR SUCCESS
        // className="border-s_success focus:border-s_success focus:ring-green-400/90"
        placeholder={placeholder}
        {...props}
      />
    </div>
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
  name: "Text Input with Required Tag",
  description: "This is a text input with Required Tag",
  implementation: Implementation,
  component: Demo(),
  version_included: "0.0.1",
  display: true,
};
export default Data;
