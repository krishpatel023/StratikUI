"use client";

import { useTheme } from "@/hooks/Theme";
import { Icons } from "@/utils/icons";
import { ReactNode, useState } from "react";
import { Button } from "react-aria-components";
import { twMerge } from "tailwind-merge";

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
      <ToggleButton handleChange={handleToggle} active={active} />
      <div className="flex gap-2">
        <Button
          onPress={() => setTheme(!theme)}
          className="h-10 w-10 bg-secondary p-1 rounded-lg flex justify-center items-center gap-4 text-center text-foreground md:hover:scale-105 pressed:animate-press transition-transform duration-300 outline-none border border-outline-secondary"
          name="theme toggle"
        >
          <div className="bg-background w-full h-full flex justify-center items-center rounded-md ">
            {theme ? (
              <Icons.moon className="w-6 h-6" />
            ) : (
              <>
                <Icons.sun className="w-6 h-6" />
              </>
            )}
          </div>
        </Button>
      </div>
    </div>
  );
};

const ToggleButton = ({
  handleChange,
  active,
}: {
  handleChange: (val: boolean) => void;
  active: boolean;
}) => {
  return (
    <div className="relative flex w-max rounded-lg border border-outline-secondary bg-secondary p-1">
      <Tab onPress={() => handleChange(false)} className="w-20">
        Preview
      </Tab>
      <Tab onPress={() => handleChange(true)} className="w-16">
        Code
      </Tab>
      <div
        className={twMerge(
          "min-h-8 bg-background rounded-md absolute transition-transform duration-300 z-10",
          active ? "w-16 translate-x-20" : "w-20 left-1"
        )}
      />
    </div>
  );
};

const Tab = ({
  children,
  onPress,
  className,
}: {
  children: ReactNode;
  onPress: () => void;
  className?: string;
}) => {
  return (
    <Button
      onPress={() => {
        onPress();
      }}
      className={twMerge(
        "z-20 h-8 text-foreground outline-none pressed:animate-press",
        className
      )}
    >
      {children}
    </Button>
  );
};
