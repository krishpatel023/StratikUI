import Link from "next/link";

function Card() {
  return (
    <div className="w-80 rounded-lg flex flex-col justify-center gap-3 bg-background text-primary-foreground border shadow-sm border-outline-secondary">
      <div className="w-full flex items-center py-6 px-6 bg-primary rounded-t-[inherit]">
        <h1>Featured</h1>
      </div>
      <div className="w-full px-6 py-4 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Title</h1>
        <h3 className="text-secondary-foreground">
          This is something great. Design this according to your needs and make
          it look great.
        </h3>
        <Link
          href="#"
          target="_blank"
          rel="noreferrer"
          className="text-accent font-semibold mt-4 flex gap-2 hover:gap-4 transition-all duration-200"
        >
          Get Started <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
}

export function CardsImplementation() {
  return (
    <div className="w-full min-h-[40rem] flex justify-center items-center">
      <Card />
    </div>
  );
}
