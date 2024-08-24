"use client";

import {
  Select,
  SelectHeader,
  SelectDivider,
  SelectItem,
} from "@registry/packages/primitives/select/01/react_aria-ts/Select";
import { Section } from "react-aria-components";

export default function SelectImplementation() {
  return (
    <Select label="Ice cream flavor" description="Select your favorite ice cream flavor">
      <Section>
        <SelectHeader>Ice-cream flavor</SelectHeader>
        <SelectItem textValue="mint">Mint</SelectItem>
        <SelectItem textValue="strawberry" isDisabled>
          Strawberry
        </SelectItem>
      </Section>
      <SelectDivider />
      <Section>
        <SelectHeader>All time favorite</SelectHeader>
        <SelectItem textValue="vanilla">Vanilla</SelectItem>
        <SelectItem textValue="chocolate">Chocolate</SelectItem>
      </Section>
    </Select>
  );
}
