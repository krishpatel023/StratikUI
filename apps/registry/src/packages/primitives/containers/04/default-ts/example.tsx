import { ConicGradientContainer } from "@registry/primitives/containers/04/default-ts/Container";

export default function ContainerImplementation() {
  return (
    <div>
      <ConicGradientContainer direction="clockwise">
        <div className="w-60 h-60 flex justify-center items-center text-center">
          <h1 className="text-2xl font-semibold">
            This is a rotating border container
          </h1>
        </div>
      </ConicGradientContainer>
    </div>
  );
}
