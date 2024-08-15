import { ScrollToTop } from "@registry/packages/primitives/scroll-to-top/01/default-ts/ScrollToTop";

export default function ScrollToTopImplementation() {
  return (
    <div className="w-full min-h-[45rem] flex justify-center items-center text-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl text-primary-foreground">Content</h1>
        <h2 className="text-xl text-primary-foreground">
          It will only show up if a threshold is reached. You can change the
          threshold by passing a value to the `threshold` prop.
        </h2>
      </div>
      <ScrollToTop />
    </div>
  );
}
