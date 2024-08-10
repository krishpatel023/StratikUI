"use client";

import { useTheme } from "@/hooks/Theme";
import { Icons } from "@/utils/icons";
import { useState } from "react";

export const HeaderToggle = ({
  getState,
}: {
  getState: (val: boolean) => void;
}) => {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState<boolean>(false);

  function handleToggle(state: boolean) {
    setActive(state);
    getState(state);
  }
  return (
    <div className="w-full h-12 flex justify-between items-center">
      <div className="py-1 px-1 flex gap-1 bg-secondary text-primary-foreground rounded text-textPrimary">
        <button
          className={
            active === false ? "bg-background px-2 py-1 rounded" : "px-2 py-1"
          }
          onClick={() => handleToggle(false)}
        >
          Preview
        </button>
        <button
          className={
            active === true ? "bg-background px-2 py-1 rounded" : "px-2 py-1"
          }
          onClick={() => handleToggle(true)}
        >
          Code
        </button>
      </div>
      <button
        onClick={() => setTheme(!theme)}
        className="h-10 w-10 bg-secondary p-1 rounded-md flex justify-center items-center gap-4 text-center text-foreground"
        name="theme toggle"
      >
        <div className="bg-background hover:bg-secondary w-full h-full flex justify-center items-center rounded-md">
          {theme ? (
            <Icons.moon className="w-6 h-6" />
          ) : (
            <>
              <Icons.sun className="w-6 h-6" />
            </>
          )}
        </div>
      </button>
    </div>
  );
};
