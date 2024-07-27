"use client";

import {
  Autocomplete,
  AutocompleteHeader,
  AutocompleteItem,
  AutocompleteList,
  AutocompleteSearch,
} from "@/packages/primitives/select-autocomplete/01/react_aria-js/Select";
import { Section } from "react-aria-components";

export default function AutocompleteImplementation() {
  return (
    <Autocomplete label="Ice cream flavor">
      <AutocompleteSearch />
      <AutocompleteList className="min-w-60">
        <Section>
          <AutocompleteHeader>Ice-cream flavor</AutocompleteHeader>
          <AutocompleteItem textValue="Mint">Mint</AutocompleteItem>
          <AutocompleteItem textValue="Strawberry" isDisabled>
            Strawberry
          </AutocompleteItem>
          <AutocompleteItem textValue="Vanilla">Vanilla</AutocompleteItem>
          <AutocompleteItem textValue="Chocolate">Chocolate</AutocompleteItem>
        </Section>
      </AutocompleteList>
    </Autocomplete>
  );
}
