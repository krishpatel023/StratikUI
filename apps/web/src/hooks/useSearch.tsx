"use client";

import { useState } from "react";
import Fuse from "fuse.js";
import SearchData, { SearchProps } from "@/data/Search";

type UseSearchResult = {
  isLoading: boolean;
  message: { state: "error" | "success" | "default"; msg: string } | null;
  search: (query: string) => void;
  results: SearchProps;
};

const DEFAULTS = {
  resultLimit: 6,
};

const options = {
  includeScore: true,
  keys: [
    { name: "name", weight: 1 },
    { name: "description", weight: 0.5 },
    { name: "tags", weight: 1 },
  ],
  threshold: 0.4,
};

export const useSearch = (): UseSearchResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<UseSearchResult["message"]>(null);
  const [results, setResults] = useState<SearchProps>([]);

  const fuse = new Fuse(SearchData, options);

  const search = (query: string) => {
    // Set loading state to true before search is executed
    setIsLoading(true);
    setMessage(null);
    setResults([]);

    // Search Logic
    const results = fuse.search(query);
    const items = results.map((result) => result.item);
    setResults(items.slice(0, DEFAULTS.resultLimit));
    if (items.length === 0) {
      setMessage({ state: "default", msg: "No results found." });
    } else {
      setMessage({
        state: "success",
        msg: "Found " + items.length + " results.",
      });
    }
    // Set loading state to false after search is complete
    setIsLoading(false);
  };

  return { results, isLoading, message, search };
};
