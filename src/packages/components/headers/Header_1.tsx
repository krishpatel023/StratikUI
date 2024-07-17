"use client";
import { GradientBackground } from "@/packages/primitives/containers/Container_1";
import {
  Header,
  HeaderItem,
  HeaderDropdown,
} from "@/packages/primitives/header_blocks/HeaderBlocks_1";
import { IconProps } from "@/utils/constants";
import { useState } from "react";
import { Button } from "react-aria-components";
import { HeaderDrawer } from "./Header_Drawer_Helper";

export const HeaderComponent = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <HeaderDrawer
        open={open}
        setOpen={setOpen}
        className="bg-background border-b text-foreground border-outline"
      >
        <span className="hover:text-accent-secondary cursor-pointer">Home</span>
        <span className="hover:text-accent-secondary cursor-pointer">
          Pricing
        </span>
        <span className="hover:text-accent-secondary cursor-pointer">
          Products
        </span>
        <span className="hover:text-accent-secondary cursor-pointer">
          Services
        </span>
        <span className="hover:text-accent-secondary cursor-pointer">
          About
        </span>
      </HeaderDrawer>
      <Header className="w-full h-16  flex justify-between px-6 @md:px-10 items-center bg-background shadow shadow-outline">
        <a href="#" className="text-primary-foreground font-semibold text-lg">
          LOGO
        </a>
        <div className="justify-center items-center gap-4 hidden @md:flex">
          <HeaderItem className="hover:text-accent">Home</HeaderItem>
          <HeaderItem className="hover:text-accent">Pricing</HeaderItem>
          <HeaderItem className="hover:text-accent">
            Products
            <HeaderDropdown className="flex flex-col items-start">
              <span>View Best Sellers</span>
              <span>Electronics</span>
              <span>Clothing</span>
              <span>Books</span>
            </HeaderDropdown>
          </HeaderItem>
          <HeaderItem className="hover:text-accent">
            Services
            <HeaderDropdown className="flex flex-col items-start">
              <span>Web Design</span>
              <span>Web Development</span>
              <span>Mobile Development</span>
              <span>Other Services</span>
            </HeaderDropdown>
          </HeaderItem>
          <HeaderItem className="hover:text-accent">
            About
            <HeaderDropdown className="flex flex-col items-start">
              <span>About Us</span>
              <span>Careers</span>
              <span>Contact Us</span>
            </HeaderDropdown>
          </HeaderItem>
        </div>
        <GradientBackground>
          <Button className="relative z-10 bg-background text-foreground py-2 @md:px-4 rounded-lg hidden @md:block">
            Get Started
          </Button>
        </GradientBackground>
        <Button
          className="w-10 h-10 @md:hidden hover:bg-secondary rounded flex justify-center items-center relative text-primary-foreground"
          onPress={() => {
            setOpen(true);
          }}
        >
          <Bars className="h-6 w-6" />
        </Button>
      </Header>
    </>
  );
};

const Bars = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export function HeaderImplementation() {
  return (
    <div className="w-full">
      <HeaderComponent />
      <div className="min-h-[40rem] w-full text-center flex justify-center items-center">
        <h1 className="text-2xl text-foreground">Content</h1>
      </div>
    </div>
  );
}
