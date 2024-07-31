import Display, { DisplayProps } from "@/ui/Display";

export default function Page() {
  return (
    <Playground category="hooks">
      {/* Remove this h1 and add your component here */}
      <h1 className="text-2xl mx-auto text-foreground">Playground</h1>
    </Playground>
  );
}

export function Playground({
  children,
  category,
}: {
  children?: React.ReactNode;
  category: DisplayProps["category"];
}) {
  return (
    <>
      <h1 className="text-foreground mt-20 text-center text-xl underline underline-offset-2">
        Welcome to the Playground
      </h1>
      <h2 className="text-secondary-foreground max-w-[50rem] px-4 mx-auto pt-4 text-center">
        <span className="underline underline-offset-2">NOTE:</span> Adjust the
        category of the Playground component. The primitives and hooks have
        different display layout than the components. Make sure to adjust the
        category to the correct one.
      </h2>
      <h2 className="text-secondary-foreground mt-2 mb-10 text-center">
        Please test the components here and DO NOT PUSH this page to production
      </h2>
      <Display category={category}>{children}</Display>
    </>
  );
}
