import { HeaderComponent } from "@/packages/components/headers/05/default-js/Header";

export default function HeaderImplementation() {
  return (
    <div className="w-full h-full">
      <HeaderComponent />
      <div className="min-h-[40rem] w-full flex justify-center items-center text-foreground">
        <h1>Content</h1>
      </div>
    </div>
  );
}
