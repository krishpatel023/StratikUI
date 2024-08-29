import { Container } from "./container";

export default function Example() {
  return (
    <div className="h-60 flex justify-center items-center">
      <Container>
        <button type="button" className="w-80 h-10 rounded border border-outline-secondary">
          Move the mouse over me
        </button>
      </Container>
    </div>
  );
}
