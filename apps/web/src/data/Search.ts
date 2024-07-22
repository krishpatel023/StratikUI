import * as GENERATED_SEARCH from "./generated/generated-search";
export interface SearchIndividualProps {
  name: string;
  category: string;
  group: string;
  description: string;
  tags: string[];
  link: string;
  version_included: string;
  flag: "hidden" | "experimental" | "deprecated" | "beta" | "default";
}

export type SearchProps = SearchIndividualProps[];

const defaultSearch: SearchProps = [];

const SearchData: SearchProps = [...defaultSearch, ...GENERATED_SEARCH.default];

export default SearchData;
