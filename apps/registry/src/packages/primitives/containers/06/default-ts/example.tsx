import { ContainerGlassEffect } from "@registry/packages/primitives/containers/06/default-ts/container";

const ContainerImplementation = () => {
  return (
    <div className="w-full h-[25rem] relative overflow-hidden flex justify-center items-center">
      <ContainerGlassEffect className="rounded-lg border border-outline-secondary">
        <div className="px-10 py-20 text-foreground flex flex-col justify-center items-start gap-2 max-w-80 md:max-w-[30rem]">
          <h1>This entire component has been made with TailwindCSS and is a part of Stratik UI Library.</h1>
          <button type="button" className="mt-4 text-accent-secondary hover:text-accent">
            Check out other components
          </button>
        </div>
      </ContainerGlassEffect>
      <h1 className="absolute text-7xl text-foreground">Sample text to see the effect in action</h1>
    </div>
  );
};

export default ContainerImplementation;
