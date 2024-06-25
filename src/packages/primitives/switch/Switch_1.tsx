"use client";

import { Switch as ReactAriaSwitch, SwitchProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export interface ExtendedSwitchProps extends SwitchProps {
  children?: React.ReactNode;
}

export const Switch = ({ className, ...props }: ExtendedSwitchProps) => {
  return (
    <ReactAriaSwitch
      className={twMerge(
        "flex gap-4 justify-center items-center group hover:cursor-pointer disabled:cursor-not-allowed",
        className as string
      )}
      {...props}
    >
      <div className="bg-secondary rounded-full w-14 flex justify-start items-center border border-outline  group-data-[selected=true]:justify-end group-data-[selected=true]:bg-accent group-focus:ring-2 group-focus:ring-accent group-disabled:opacity-50">
        <span className="w-5 h-5 m-1 rounded-full bg-accent group-data-[selected=true]:bg-accent-foreground transition-transform duration-300 ease-linear" />
      </div>
      {props.children}
    </ReactAriaSwitch>
  );
};

export const SwitchImplementation = () => {
  return <Switch> Label Message </Switch>;
};
