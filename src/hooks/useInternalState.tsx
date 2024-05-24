"use client";

import { createContext, useContext, useState } from "react";

const InternalStateContext = createContext<{
  sidebar: boolean;
  setSidebar: (open: boolean) => void;
}>({
  sidebar: false,
  setSidebar: () => {},
});

export const useInternalState = () => useContext(InternalStateContext);

export const InternalStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sidebar, setSidebar] = useState<boolean>(false);

  return (
    <InternalStateContext.Provider value={{ sidebar, setSidebar }}>
      {children}
    </InternalStateContext.Provider>
  );
};
