import Link from "next/link";

export function Card() {
  return (
    <div className="w-80 py-4 px-6 rounded-lg flex flex-col justify-center gap-3 bg-primary text-primary-foreground border shadow-sm border-outline-secondary">
      <h1 className="text-2xl font-semibold">Title</h1>
      <h3 className="text-secondary-foreground">
        This is something great. Design this according to your needs and make it look great.
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
  );
}
