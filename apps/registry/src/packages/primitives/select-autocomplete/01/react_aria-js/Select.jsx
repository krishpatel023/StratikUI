"use client";

import { useRef, useState } from "react";
import {
  Button,
  ComboBox,
  FieldError,
  Header,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Separator,
  Text,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function Autocomplete({ children, className, ...props }) {
  return (
    <ComboBox className={twMerge("flex flex-col gap-1", className)} {...props}>
      {props.label && (
        <Label className="text-primary-foreground">{props.label}</Label>
      )}
      <>{children}</>
      {props.description && (
        <Text slot="description" className="text-primary-foreground text-sm">
          {props.description}
        </Text>
      )}
      <FieldError className="text-sm text-error">
        {props.errorMessage}
      </FieldError>
    </ComboBox>
  );
}

export function AutocompleteList({ items, children, className, ...props }) {
  return (
    <Popover>
      <ListBox
        items={items}
        className={twMerge(
          "w-full bg-primary border border-outline-secondary py-1 rounded focus:outline-none",
          className
        )}
        {...props}
      >
        <>{children}</>
      </ListBox>
    </Popover>
  );
}

export function AutocompleteItem({ className, ...props }) {
  return (
    <ListBoxItem
      className={twMerge(
        "p-1 mx-1 rounded hover:bg-secondary hover:outline-none focus:bg-secondary focus:outline-none text-primary-foreground disabled:opacity-50 hover:cursor-pointer",
        className
      )}
      {...props}
    >
      {props.children}
    </ListBoxItem>
  );
}

export function AutocompleteHeader({ children, className }) {
  return (
    <Header
      className={twMerge("text-primary-foreground p-1 mx-1 mb-2", className)}
    >
      {children}
    </Header>
  );
}

export function AutocompleteDivider({ className }) {
  return (
    <Separator
      className={twMerge(
        "min-w-full  border-b-[1px] border-outline my-2",
        className
      )}
    />
  );
}

export function AutocompleteSearch({ listToggleWithButton = false }) {
  const [focus, setFocus] = useState(false);
  const buttonRef = useRef(null);
  const onFocus = () => {
    if (listToggleWithButton) return;
    if (buttonRef.current && !focus) {
      buttonRef.current.click();
      setFocus(true);
    } else {
      setFocus(false);
    }
  };
  return (
    <div className="flex flex-row gap-2 relative">
      <Input
        className="w-full py-2 px-2 bg-transparent border-2 rounded focus:outline-none focus:ring-2 text-foreground placeholder:text-secondary-foreground border-outline-secondary  hover:border-outline focus:border-accent pr-12 z-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:border-muted-secondary"
        placeholder="Search for flavor"
        onFocus={() => onFocus()}
        onBlur={() => onFocus()}
      />
      <Button
        ref={buttonRef}
        aria-hidden={!listToggleWithButton}
        className={twMerge(
          "rounded bg-primary text-primary-foreground hover:bg-secondary absolute inset-y-0 right-1 flex items-center justify-center  h-max w-max p-2 my-auto",
          !listToggleWithButton && "hidden"
        )}
      >
        <Chevron className="w-4 h-4 rotate-180" />
      </Button>
    </div>
  );
}

const Chevron = (props) => (
  <svg
    height="200"
    width="200"
    viewBox="0 0 15 15"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.538 1c-.294 0-.488.177-.615.385l-5.846 9.538C1 11 1 11.153 1 11.308c0 .538.385.692.692.692h11.616c.384 0 .692-.154.692-.692c0-.154 0-.231-.077-.385l-5.77-9.538C8.029 1.177 7.789 1 7.539 1z"
      fill="currentColor"
    />
  </svg>
);
