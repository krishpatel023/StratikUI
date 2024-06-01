"use client";

import { createContext, useContext, useState } from "react";

const InternalStateContext = createContext<{
  sidebar: boolean;
  setSidebar: (open: boolean) => void;
  searchbar: boolean;
  setSearchbar: (open: boolean) => void;
}>({
  sidebar: false,
  setSidebar: () => {},
  searchbar: false,
  setSearchbar: () => {},
});

export const useInternalState = () => useContext(InternalStateContext);

export const InternalStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const [searchbar, setSearchbar] = useState<boolean>(false);

  return (
    <InternalStateContext.Provider
      value={{ sidebar, setSidebar, searchbar, setSearchbar }}
    >
      {children}
    </InternalStateContext.Provider>
  );
};
