"use client";
import { useTheme } from "@/hooks/Theme";
import { useInternalState } from "@/hooks/useInternalState";
import { Icons } from "@/utils/icons";
import { Logo } from "@/utils/logo";
import { Links } from "@/utils/utils";
import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import useHash from "@/hooks/useHash";
import useScrollToSection from "@/hooks/useScrollToSection";
import dynamic from "next/dynamic";
import { SearchField } from "./search/SearchField";
import { useInternalPostHog } from "@/hooks/useInternalPostHog";

const CommandPalette = dynamic(() => import("./search/Search"));

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { sidebar, setSidebar, searchbar, setSearchbar } = useInternalState();
  const { VisitedSocials } = useInternalPostHog();
  // Reading the hashed version
  const hash = useHash();
  const scrollToSection = useScrollToSection();

  // biome-ignore lint/correctness/useExhaustiveDependencies: useless rerenders if scrollToSection is added
  useEffect(() => {
    if (hash) scrollToSection(hash);
  }, [hash]);

  return (
    <div className="sticky top-0 z-[999] bg-background peer-data-[sidebar-open=false]:glass-effect sm:glass-effect w-full  h-16 flex justify-between px-2 sm:px-6 md:px-10 items-center border-b dark:border-neutral-900 ">
      <CommandPalette searchbar={searchbar} setSearchbar={setSearchbar} />

      <Link
        href="/"
        className="flex h-full items-center justify-center  font-semibold text-2xl text-foreground"
        aria-label="Home"
      >
        {theme ? <Logo.dark className="h-16 w-16" /> : <Logo.light className="h-16 w-16" />}
        <span className=" sm:block text-xl">Stratik / UI</span>
        <span className="ml-4 bg-secondary text-sm font-light px-3 py-1 rounded border border-outline-secondary">
          beta
        </span>
      </Link>

      <div className="flex gap-6 items-center">
        {/* PLACEHOLDER */}
        <SearchField setSearchbar={setSearchbar} searchbar={searchbar} keys={["Control", "k"]} />

        <div className="hidden sm:flex justify-center items-center gap-4">
          <Button
            className="hover:bg-secondary w-8 h-10 flex justify-center items-center text-foreground"
            aria-label="Toggle Theme"
            variant="ghost"
          >
            <Link
              href={Links.stratikui.github}
              target="_blank"
              className="w-8 h-10 flex justify-center items-center rounded hover:bg-secondary text-foreground"
              rel="noreferrer"
              aria-label="Twitter Account Link"
              onClick={() => VisitedSocials("github", "stratikui", "header")}
            >
              <Icons.gitHub className="w-5 h-5" />
            </Link>
          </Button>
          <Button
            className="hover:bg-secondary w-8 h-10 flex justify-center items-center text-foreground"
            aria-label="Toggle Theme"
            variant="ghost"
          >
            <Link
              href={Links.personal.twitter}
              target="_blank"
              className="w-8 h-10 flex justify-center items-center rounded hover:bg-secondary text-foreground"
              rel="noreferrer"
              aria-label="Twitter Account Link"
              onClick={() => VisitedSocials("twitter", "personal", "header")}
            >
              <Icons.twitter className="w-6 h-4" />
            </Link>
          </Button>

          <Button
            className="hover:bg-secondary w-8 h-10 flex justify-center items-center text-foreground"
            onClick={() => toggleTheme()}
            aria-label="Toggle Theme"
            variant="ghost"
          >
            {theme ? <Icons.moon className="w-6 h-6" /> : <Icons.sun className="w-6 h-6" />}
          </Button>
        </div>
        <Button
          onClick={() => {
            setSidebar(!sidebar);
          }}
          variant="ghost"
          className="sm:hidden hover:bg-secondary w-8 h-10 flex justify-center items-center"
        >
          <Icons.bars className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};
export default Header;
