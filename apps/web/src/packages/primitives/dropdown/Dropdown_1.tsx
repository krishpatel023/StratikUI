"use client";

import { Icons } from "@/utils/icons";
import {
  Button,
  FieldError,
  Header,
  Label,
  Menu,
  MenuItem,
  MenuItemProps,
  MenuProps,
  MenuTrigger as MenuTriggerAria,
  MenuTriggerProps,
  Popover,
  Section,
  Separator,
  SubmenuTrigger as SubmenuTriggerAria,
  SubmenuTriggerProps,
  Text,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export interface DropdownTriggerProps extends MenuTriggerProps {
  label?: string;
  description?: string;
  errorMessage?: string;
}

export function DropdownTrigger({ children, ...props }: DropdownTriggerProps) {
  return (
    <MenuTriggerAria aria-label={props.label || "Dropdown"} {...props}>
      <div className="flex flex-col">
        {props.label && (
          <Label className="text-primary-foreground text-sm">
            {props.label}
          </Label>
        )}
        {children}
        {props.description && (
          <Text slot="description" className="text-primary-foreground text-sm">
            {props.description}
          </Text>
        )}
        <FieldError className="text-sm text-error">
          {props.errorMessage}
        </FieldError>
      </div>
    </MenuTriggerAria>
  );
}

export function Dropdown({
  items,
  children,
  className,
  ...props
}: MenuProps<any>) {
  return (
    <>
      <Popover>
        <Menu
          items={items}
          className={twMerge(
            "w-full bg-primary border border-outline-secondary py-1 rounded outline-none focus-visible:outline-none",
            className as string
          )}
          {...props}
        >
          {/* <Section> */}
          <>{children}</>
          {/* </Section> */}
        </Menu>
      </Popover>
    </>
  );
}

export function DropdownItem({ className, ...props }: MenuItemProps) {
  return (
    <MenuItem
      aria-label="Dropdown Item"
      className={twMerge(
        "p-1 mx-1 rounded hover:bg-secondary hover:outline-none focus:bg-secondary focus:outline-none text-primary-foreground disabled:opacity-50 transition-colors duration-100 ease-linear hover:cursor-pointer",
        className as string
      )}
      {...props}
    >
      {props.children}
    </MenuItem>
  );
}

export function DropdownHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Header
      className={twMerge("text-primary-foreground p-1 mx-1 mb-2", className)}
    >
      {children}
    </Header>
  );
}

export function DropdownDivider({ className }: { className?: string }) {
  return (
    <Separator
      className={twMerge(
        "min-w-full min-h-[2px] border-b border-outline my-2",
        className
      )}
    />
  );
}

export const SubmenuTrigger = (props: SubmenuTriggerProps) => {
  return (
    <SubmenuTriggerAria {...props} aria-label={"Submenu"}>
      {props.children}
    </SubmenuTriggerAria>
  );
};

export function DropdownImplementation() {
  return (
    <DropdownTrigger
      label="User Settings"
      description="This is an user settings dropdown"
    >
      <Button className="w-full text-start px-2 py-1 rounded border border-outline-secondary bg-primary open:bg-secondary text-primary-foreground my-1 max-w-80">
        Settings
      </Button>
      <Dropdown className="min-w-60">
        <Section>
          <DropdownHeader>My Account</DropdownHeader>
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem isDisabled>Billing</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
        </Section>
        <DropdownDivider />
        <Section>
          <DropdownHeader className="mt-2">Other Settings</DropdownHeader>

          <SubmenuTrigger>
            <DropdownItem className="flex items-center justify-between">
              <span>Team</span>
              <Icons.chevron className="h-5 w-5" />
            </DropdownItem>

            <Dropdown className="min-w-40">
              <Section>
                <DropdownHeader>Team</DropdownHeader>
              </Section>
              <DropdownDivider />
              <Section>
                <DropdownItem>Team 1</DropdownItem>
                <DropdownItem>Team 2</DropdownItem>
                <DropdownItem>Team 3</DropdownItem>
              </Section>
              <DropdownDivider />
              <DropdownItem>Add Team</DropdownItem>
            </Dropdown>
          </SubmenuTrigger>

          <DropdownItem>Support</DropdownItem>
        </Section>
        <DropdownDivider />
        <DropdownItem className="hover:bg-error focus:bg-error">
          Logout
        </DropdownItem>
      </Dropdown>
    </DropdownTrigger>
  );
}
