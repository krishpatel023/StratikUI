"use client";

import {
  CommandPaletteDivider,
  CommandPaletteFooter,
  CommandPaletteGroup,
  CommandPaletteItem,
  CommandPaletteMenu,
  CommandPalette as CommandPalettePrimitive,
  CommandPaletteSearchBar,
} from "@/components/ui/CommandPalette";
import { SearchIndividualProps } from "@/data/Search";
import { useSearch } from "@/hooks/useSearch";
import { IconProps } from "@/utils/constants";
import { Links } from "@/utils/utils";
import { CSSProperties } from "react";

export default function CommandPalette({
  searchbar,
  setSearchbar,
}: {
  searchbar: boolean;
  setSearchbar: (val: boolean) => void;
}) {
  const { search, isLoading, message, results } = useSearch();

  function HandleClick() {
    setSearchbar(false);
  }

  return (
    <>
      <CommandPalettePrimitive
        isOpen={searchbar}
        onOpenChange={(val) => setSearchbar(val)}
      >
        <CommandPaletteSearchBar
          placeholder="Search for something"
          onChange={(e) => search(e.target.value)}
        />
        <CommandPaletteDivider />
        <CommandPaletteMenu
          isLoading={isLoading}
          style={{ "--sidebar-width": "5px" } as CSSProperties}
        >
          {results.map((item, index) => (
            <SearchItems
              link={"/" + item.link}
              category={item.category}
              name={item.name}
              key={index}
              onPress={HandleClick}
            />
          ))}
          <DefaultItems onPress={HandleClick} />
        </CommandPaletteMenu>
        <CommandPaletteFooter
          listeners={[
            { name: "Search", key: ["Enter"] },
            { name: "Next", key: ["Down"] },
            { name: "Prev", key: ["Up"] },
            { name: "Close", key: ["Esc"] },
          ]}
        />
      </CommandPalettePrimitive>
    </>
  );
}

function SearchItems({
  link,
  name,
  category,
  onPress,
}: {
  link: string;
  name: string;
  category: SearchIndividualProps["category"];
  onPress: () => void;
}) {
  return (
    <CommandPaletteItem
      className="flex items-center justify-start gap-6 my-2 h-16"
      link={link}
      onPress={onPress}
    >
      {category === "components" ? (
        <Icons.components className="w-4 h-4" />
      ) : category === "primitives" ? (
        <Icons.primitive className="w-4 h-4" />
      ) : category === "hooks" ? (
        <Icons.hooks className="w-4 h-4" />
      ) : null}
      <div className="flex flex-col items-start">
        <span className="text-sm md:text-base text-nowrap">{name}</span>
        <span className="hidden sm:block text-sm capitalize text-secondary-foreground">
          {category}
        </span>
      </div>
    </CommandPaletteItem>
  );
}
function DefaultItems({ onPress }: { onPress: () => void }) {
  return (
    <CommandPaletteGroup heading="Connect">
      <CommandPaletteItem
        className="flex items-center justify-start gap-6"
        link={Links.personal.twitter}
        newTab
        onPress={onPress}
      >
        <Icons.twitter className="w-4 h-4" />
        <span>Follow us on Twitter</span>
      </CommandPaletteItem>
      {/* <CommandPaletteItem className="flex items-center justify-start gap-6">
        <Icons.feedback className="w-4 h-4" />
        <span>Send us a feedback</span>
      </CommandPaletteItem> */}
      <CommandPaletteItem
        className="flex items-center justify-start gap-6"
        link={Links.stratikui.github}
        newTab
      >
        <Icons.github className="w-4 h-4" />
        <span>View Repository</span>
      </CommandPaletteItem>
      <CommandPaletteItem
        className="flex items-center justify-start gap-6"
        link={Links.stratikui.newIssue}
        newTab
      >
        <Icons.bug className="w-4 h-4" />
        <span>Report a bug</span>
      </CommandPaletteItem>
    </CommandPaletteGroup>
  );
}

const Icons = {
  components: (props: IconProps) => (
    <svg
      height="200"
      width="200"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 2h20v20H2V2Zm2 2v7h7V4H4Zm9 0v16h7V4h-7Zm-2 16v-7H4v7h7Z"
        fill="currentColor"
      />
    </svg>
  ),
  primitive: (props: IconProps) => (
    <svg
      height="200"
      width="200"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="none" stroke="currentColor">
        <path d="M20.54 8.676v6.876a.694.694 0 0 1-.355.644l-7.132 4.024a2.096 2.096 0 0 1-2.056.002L3.82 16.197a.694.694 0 0 1-.355-.66V8.694a.694.694 0 0 1 .345-.654l7.156-4.172a2.097 2.097 0 0 1 2.117.002l7.112 4.17a.693.693 0 0 1 .344.636Z" />
        <path d="M3.82 9.253a.699.699 0 0 1-.01-1.213l7.156-4.172a2.097 2.097 0 0 1 2.117.002l7.112 4.17a.699.699 0 0 1-.01 1.212l-7.132 4.024a2.096 2.096 0 0 1-2.056.003z" />
      </g>
    </svg>
  ),
  hooks: (props: IconProps) => (
    <svg
      height="200"
      width="200"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm4.78 1.97a.75.75 0 0 1 0 1.06L5.81 8l.97.97a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06l1.5-1.5a.75.75 0 0 1 1.06 0m2.44 1.06a.75.75 0 0 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.97-.97z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ),
  arrow: (props: IconProps) => (
    <svg
      height="200"
      width="200"
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z"
        fill="currentColor"
      />
    </svg>
  ),
  add: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1z"
      ></path>
    </svg>
  ),
  feedback: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20Zm0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20Z"
      ></path>
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"
      ></path>
    </svg>
  ),
  support: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.95 3.684L8.637 8.912a1 1 0 0 1-1.276 0l-6.31-5.228A.999.999 0 0 0 1 4v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a.999.999 0 0 0-.05-.316M2 2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m-.21 1l5.576 4.603a1 1 0 0 0 1.27.003L14.268 3z"
      ></path>
    </svg>
  ),
  guide: (props: IconProps) => (
    <svg
      height="200"
      width="200"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m22.903 11.728l-4.528-1.697V4.945a1.69 1.69 0 0 0-1.097-1.58l-4.687-1.757a1.668 1.668 0 0 0-1.186 0L6.717 3.366a1.687 1.687 0 0 0-1.097 1.58v5.085l-4.528 1.697A1.69 1.69 0 0 0 0 13.308v5.16c0 .638.36 1.224.933 1.51l4.687 2.344a1.68 1.68 0 0 0 1.51 0L12 19.884l4.87 2.438a1.68 1.68 0 0 0 1.51 0l4.687-2.344a1.69 1.69 0 0 0 .933-1.51v-5.16c0-.703-.436-1.331-1.097-1.58zm-6.122-1.66l-3.984 1.496V8.367l3.984-1.734zM7.22 4.88L12 3.09l4.781 1.79v.028L12 6.848l-4.781-1.94Zm3.937 13.645l-3.984 1.992V16.81l3.984-1.818zm0-5.25l-4.781 1.94l-4.781-1.94v-.028l4.781-1.79l4.781 1.79zm11.25 5.25l-3.984 1.992V16.81l3.984-1.818zm0-5.25l-4.781 1.94l-4.781-1.94v-.028l4.781-1.79l4.781 1.79z"
        fill="currentColor"
      />
    </svg>
  ),
  bug: (props: IconProps) => (
    <svg
      height="200"
      width="200"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 14h2a1 1 0 0 0 0-2h-2v-1a5.15 5.15 0 0 0-.21-1.36A5 5 0 0 0 22 5a1 1 0 0 0-2 0a3 3 0 0 1-2.14 2.87A5 5 0 0 0 16 6.4a2.58 2.58 0 0 0 0-.4a4 4 0 0 0-8 0a2.58 2.58 0 0 0 0 .4a5 5 0 0 0-1.9 1.47A3 3 0 0 1 4 5a1 1 0 0 0-2 0a5 5 0 0 0 3.21 4.64A5.15 5.15 0 0 0 5 11v1H3a1 1 0 0 0 0 2h2v1a7 7 0 0 0 .14 1.38A5 5 0 0 0 2 21a1 1 0 0 0 2 0a3 3 0 0 1 1.81-2.74a7 7 0 0 0 12.38 0A3 3 0 0 1 20 21a1 1 0 0 0 2 0a5 5 0 0 0-3.14-4.62A7 7 0 0 0 19 15Zm-8 5.9A5 5 0 0 1 7 15v-4a3 3 0 0 1 3-3h1ZM10 6a2 2 0 0 1 4 0Zm7 9a5 5 0 0 1-4 4.9V8h1a3 3 0 0 1 3 3Z"
        fill="currentColor"
      />
    </svg>
  ),
  close: (props: IconProps) => (
    <svg
      height="200"
      width="200"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94L4.28 3.22Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ),
  backspace: (props: IconProps) => (
    <svg
      height="200"
      width="200"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.5 5h-10c-1.266 0-2.834.807-3.57 1.837L3.32 10.49l-1.199 1.679c-.121.175-.122.492.003.664l1.188 1.664l2.619 3.667C6.666 19.193 8.233 20 9.5 20h10c1.379 0 2.5-1.122 2.5-2.5v-10C22 6.122 20.879 5 19.5 5zm-2.293 9.793a.999.999 0 1 1-1.414 1.414L13.5 13.914l-2.293 2.293a.997.997 0 0 1-1.414 0a.999.999 0 0 1 0-1.414l2.293-2.293l-2.293-2.293a.999.999 0 1 1 1.414-1.414l2.293 2.293l2.293-2.293a.999.999 0 1 1 1.414 1.414L14.914 12.5l2.293 2.293z"
        fill="currentColor"
      />
    </svg>
  ),
  github: (props: IconProps) => (
    <svg
      height="200"
      width="200"
      viewBox="0 0 432 416"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"
        fill="currentColor"
      />
    </svg>
  ),
};
