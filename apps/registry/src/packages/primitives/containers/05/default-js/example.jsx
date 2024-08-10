import { ConicGradientContainer } from "@registry/primitives/containers/05/default-js/Container";

export default function ContainerImplementation() {
  return (
    <div>
      <ConicGradientContainer>
        <div className="px-10 py-20 text-secondary-foreground flex flex-col justify-center items-start gap-2 max-w-80 md:max-w-[30rem]">
          <h1>
            This entire component has been made with TailwindCSS and is a part
            of Stratik UI Library.
          </h1>
          <button className="text-accent mt-4">
            Check out other components
          </button>
        </div>
      </ConicGradientContainer>
    </div>
  );
}
