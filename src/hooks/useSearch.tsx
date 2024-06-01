"use client";
import { FlattenedItem } from "@/components/search/FlattenData";
import { useMemo } from "react";

type SearchOptions = {
  limit?: number;
};

const calculateRelevance = (query: string, text: string): number => {
  const queryWords = query
    .toLowerCase()
    .split(" ")
    .filter((item) => item !== "");
  const textWords = text
    .toLowerCase()
    .split(" ")
    .filter((item) => item !== "");

  let relevance = 0;
  let consecutiveMatchCount = 0;
  let lastMatchedIndex = -1;

  for (let i = 0; i < textWords.length; i++) {
    const word = textWords[i];
    let partialMatch = false;

    for (const queryWord of queryWords) {
      if (word.startsWith(queryWord)) {
        relevance += 10; // Base relevance score for each matched word
        partialMatch = true;

        if (i === lastMatchedIndex + 1) {
          consecutiveMatchCount++;
          relevance += consecutiveMatchCount * 2; // Bonus score for consecutive matches
        } else {
          consecutiveMatchCount = 1;
        }

        lastMatchedIndex = i;
        break;
      }
    }

    if (!partialMatch) {
      consecutiveMatchCount = 0;
      lastMatchedIndex = -1;
    }
  }

  return relevance;
};

const calculateTotalRelevance = (
  query: string,
  name: string,
  description: string
): number => {
  const nameScore = calculateRelevance(query, name);
  const descriptionScore = calculateRelevance(query, description) / 2; // Description has half the weight
  return nameScore + descriptionScore;
};

export const useSearch = (
  query: string | null,
  data: FlattenedItem[],
  options?: SearchOptions
): FlattenedItem[] => {
  const memoizedData = useMemo(() => data, [data]);

  if (!query || !query.trim()) return [];

  const lowerCaseQuery = query.toLowerCase();
  const resultsWithRelevance = memoizedData.map((item) => {
    const { name, description } = item;
    const relevance = calculateTotalRelevance(
      lowerCaseQuery,
      name,
      description
    );
    return { ...item, relevance };
  });

  const filteredResults = resultsWithRelevance.filter(
    (item) => item.relevance > 0
  );
  const sortedResults = filteredResults.sort(
    (a, b) => b.relevance - a.relevance
  );

  const limit = options?.limit || Infinity;
  const limitedResults = sortedResults.slice(0, limit);

  return limitedResults;
};
