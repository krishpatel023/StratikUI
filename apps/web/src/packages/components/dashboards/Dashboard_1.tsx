"use client";
import DummyImage from "@/assets/Images/Image_3.jpg";
import { Button as ButtonCustom } from "@/packages/primitives/buttons/Button_2";
import { Drawer } from "@/packages/primitives/drawer/Drawer_1";
import {
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  DropdownTrigger,
} from "@/packages/primitives/dropdown/Dropdown_1";
import { InputBox } from "@/packages/primitives/input_text/Input_3";
import {
  Popover,
  PopoverTrigger,
} from "@/packages/primitives/popover/Popover_1";
import { DashedBackground } from "@/packages/ui/DashedBackground";
import { IconProps } from "@/utils/constants";
import Image from "next/image";
import { useState } from "react";
import { Button, Section } from "react-aria-components";

export function AccountDropdown() {
  return (
    <DropdownTrigger>
      <Button className="">
        <Image
          className="min-h-10 min-w-10 w-10 h-10 rounded-full"
          src={DummyImage}
          alt=""
        />
      </Button>
      <Dropdown className="min-w-48">
        <Section>
          <DropdownHeader className="text-sm">My Account</DropdownHeader>
          <DropdownItem className="flex items-center py-1 px-3 m-1 rounded-md gap-4">
            <Image className="h-8 w-8 rounded-full" src={DummyImage} alt="" />
            <span>
              <h1 className="text-sm">John Doe</h1>
              <h3 className="text-xs font-light">@avg_dev</h3>
            </span>
          </DropdownItem>
        </Section>
        <DropdownDivider />
        <Section>
          <DropdownItem>Billing</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Help</DropdownItem>
        </Section>
        <DropdownDivider />
        <DropdownItem className="hover:bg-error focus:bg-error">
          Logout
        </DropdownItem>
      </Dropdown>
    </DropdownTrigger>
  );
}

export function ShareDropdown() {
  return (
    <PopoverTrigger>
      <Button className="w-full text-center px-2 py-1 rounded border border-outline-secondary bg-primary open:bg-secondary text-primary-foreground my-1 max-w-80">
        Share
      </Button>

      <Popover className="flex flex-col gap-4">
        <div>
          <h1 className="text-sm text-primary-foreground">Invite</h1>
          <div>
            <span className="flex items-center justify-between gap-2 mt-2">
              <InputBox
                type="email"
                className="w-full"
                placeholder="Add via email"
              />
              <ButtonCustom
                variant="accent"
                className="w-16 h-full text-center"
              >
                Send
              </ButtonCustom>
            </span>
          </div>
        </div>

        <div className="border-b-[1px] border-outline-secondary min-w-full" />
        <div>
          <h1 className="text-sm text-primary-foreground">Invite via link</h1>
          <div>
            <span className="flex items-center justify-center gap-2 mt-2 h-10">
              <InputBox
                className="w-full"
                type="email"
                value="https://www.figma.com/community/file/1179068859697769656"
              />
              <ButtonCustom
                variant="secondary"
                className="h-full w-12 flex justify-center items-center "
              >
                <Icon.Copy className="h-5 w-5" />
              </ButtonCustom>
            </span>
          </div>
        </div>
      </Popover>
    </PopoverTrigger>
  );
}

export function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Drawer active={open} setActive={() => setOpen(false)}>
        <DashedBackground className="h-[calc(100%-4rem)] w-full" />
      </Drawer>
      <header className="w-full bg-background shadow shadow-outline h-16 flex justify-between items-center text-primary-foreground px-4">
        <span className="flex justify-center items-center gap-4">
          <ButtonCustom variant="outline" onClick={() => setOpen(!open)}>
            <Icon.Menu className="w-5 h-5" />
          </ButtonCustom>
          <h1 className="text-md @md:text-xl font-semibold">Stratik / UI</h1>
        </span>
        <span className="flex justify-center items-center gap-6">
          <ShareDropdown />
          <AccountDropdown />
        </span>
      </header>
    </>
  );
}

function Dashboard() {
  return (
    <div className="w-full h-full relative flex flex-col items-center">
      <Header />
      <DashedBackground className="h-[38rem] w-[98%] m-4" />
    </div>
  );
}

export function DashboardImplementation() {
  return <Dashboard />;
}

const Icon = {
  Card: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.5 2.25h-11a1 1 0 0 0-1 1v7.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-7.5a1 1 0 0 0-1-1m-12 3.5h13m-4 3.5H11"
      ></path>
    </svg>
  ),
  Setting: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 1024 1024"
      {...props}
    >
      <path
        fill="currentColor"
        d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088l-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36l-116.224-25.088l-65.28 113.152l79.68 88.192l-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136l-79.808 88.192l65.344 113.152l116.224-25.024l22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152l24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296l116.288 25.024l65.28-113.152l-79.744-88.192l1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136l79.808-88.128l-65.344-113.152l-116.288 24.96l-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384a192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256a128 128 0 0 0 0-256z"
      ></path>
    </svg>
  ),
  Account: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M11.5 14c4.14 0 7.5 1.57 7.5 3.5V20H4v-2.5c0-1.93 3.36-3.5 7.5-3.5m6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13v-1.5M11.5 5A3.5 3.5 0 0 1 15 8.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8 8.5A3.5 3.5 0 0 1 11.5 5m0 1A2.5 2.5 0 0 0 9 8.5a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 14 8.5A2.5 2.5 0 0 0 11.5 6Z"
      ></path>
    </svg>
  ),
  Signout: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4 12a.5.5 0 0 0 .5.5h8.793l-2.647 2.646a.5.5 0 1 0 .707.708l3.5-3.5a.5.5 0 0 0 0-.707l-3.5-3.5a.5.5 0 0 0-.707.707l2.647 2.646H4.5a.5.5 0 0 0-.5.5zM17.5 2h-11A2.502 2.502 0 0 0 4 4.5v4a.5.5 0 0 0 1 0v-4A1.5 1.5 0 0 1 6.5 3h11A1.5 1.5 0 0 1 19 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5v-4a.5.5 0 0 0-1 0v4A2.502 2.502 0 0 0 6.5 22h11a2.502 2.502 0 0 0 2.5-2.5v-15A2.502 2.502 0 0 0 17.5 2z"
      ></path>
    </svg>
  ),
  Copy: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
      ></path>
    </svg>
  ),
  Menu: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.5 6.5h15M4.5 12h15m-15 5.5h15"
      ></path>
    </svg>
  ),
  Close: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  ),
};
