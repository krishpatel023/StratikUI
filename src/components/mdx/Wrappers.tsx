import { genId } from "@/utils/helper";
import React from "react";
import { HeaderToggle } from "./HeaderToggle";
import { twMerge } from "tailwind-merge";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const generatedId = genId("stratik-ui");
  // Check if children exist and are iterable
  if (children && React.Children.count(children) > 0) {
    // Map through each child element
    const processedChildren = React.Children.map(children, (child) => {
      // Check if the child is a valid element

      if (React.isValidElement(child)) {
        // Clone the element to modify its properties safely
        const componentType = (child as React.ReactElement).type;

        if (typeof componentType === "function") {
          if (
            componentType.name === "Preview_Component_For_StratikUI" ||
            componentType.name === "Implementation_Component_For_StratikUI" ||
            componentType.name === "Header_Component_For_StratikUI"
          ) {
            let newId = "";

            if (componentType.name === "Header_Component_For_StratikUI")
              newId = generatedId;
            else if (componentType.name === "Preview_Component_For_StratikUI")
              newId = `${generatedId}-preview`;
            else if (
              componentType.name === "Implementation_Component_For_StratikUI"
            )
              newId = `${generatedId}-implementation`;

            if (newId !== "")
              return React.cloneElement(child as React.ReactElement<any>, {
                id: newId,
              });
          }
        }
      }
      // Return the child if it's not a valid element
      return child;
    });

    // Return the wrapper with modified children
    return (
      <div className="w-full flex flex-col gap-4 mb-8 mt-8">
        {processedChildren}
      </div>
    );
  }

  // Return the wrapper without modification if no children are present
  return <div className="w-full flex flex-col gap-4 mb-8 mt-8">{children}</div>;
};

export const Implementation_Component_For_StratikUI = ({
  children,
  id = "Implementation",
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <div id={id} className="w-full hidden flex-col gap-10">
      {children}
    </div>
  );
};

export const Preview_Component_For_StratikUI = ({
  children,
  id = "Preview",
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <div id={id} className="w-full flex-col gap-10">
      {children}
    </div>
  );
};

export const Header_Component_For_StratikUI = ({ id }: { id: string }) => {
  return <HeaderToggle id={id} />;
};

export const ImportsWrapper = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export const PARTITION = ({ className }: { className?: string }) => {
  return <div className={twMerge("min-w-full min-h-10", className)}></div>;
};
