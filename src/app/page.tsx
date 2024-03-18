import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="w-full h-[calc(100vh-4rem)] flex justify-center items-center bg-[url('../assets/HomepageBackground.svg')] bg-no-repeat	bg-center	">
        <div className="flex flex-col justify-center items-center text-center gap-6">
          <h1 className="text-5xl font-bold text-textPrimary w-1/2">
            Make the websites in lightspeed using Stratik UI
          </h1>
          <span className="text-2xl font-medium text-textSecondary w-3/4">
            Beautifully designed components that you can copy and paste into
            your apps. Accessible. Customizable. Developer Friendly.
          </span>
          <Link
            className="w-32 h-10 rounded-md bg-primary hover:bg-primaryHover text-textComplementary text-center flex justify-center items-center "
            href="/components"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
