"use client";

import {
  CommandPalette,
  CommandPaletteDivider,
  CommandPaletteGroup,
  CommandPaletteItem,
  CommandPaletteMenu,
  CommandPaletteSearchBar,
  CommandPaletteTrigger,
} from "@registry/packages/primitives/command-palette/01/default-js/CommandPalette";
import { useState } from "react";

export function CommandPaletteBox() {
  const [active, setActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function simulateSearch() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }

  return (
    <>
      <CommandPaletteTrigger placeholder="Search" setActive={setActive} keys={["Control", "j"]} className="md:w-60" />
      <CommandPalette isOpen={active} onOpenChange={(val) => setActive(val)}>
        <CommandPaletteSearchBar placeholder="Search for something" onChange={() => simulateSearch()} />
        <CommandPaletteDivider />
        <CommandPaletteMenu isLoading={isLoading}>
          {/* This is a sample data. You can add dynamic data here and manage the loading & empty states accordingly */}
          <CommandPaletteItem>View the components</CommandPaletteItem>
          <CommandPaletteItem>View the primitives</CommandPaletteItem>
          <CommandPaletteGroup heading="Connect">
            <CommandPaletteItem>Give us a feedback</CommandPaletteItem>
            <CommandPaletteItem>Contact the creator</CommandPaletteItem>
            <CommandPaletteItem>Talk about us on X</CommandPaletteItem>
            <CommandPaletteItem>Follow us</CommandPaletteItem>
            <CommandPaletteItem>Refer Docs</CommandPaletteItem>
          </CommandPaletteGroup>
        </CommandPaletteMenu>
      </CommandPalette>
    </>
  );
}
