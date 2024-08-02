"use client";

import useScrollbar from "@/packages/hooks/useScrollbar/01/default-ts/useScrollbar";
import { ContainerGlassEffect } from "@/packages/primitives/containers/06/default-ts/container";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { GradientBackground } from "@/packages/primitives/containers/01/default-ts/Container";
import {
  Header,
  HeaderAnimationWrapper,
  HeaderDropdown,
  HeaderItem,
} from "@/packages/primitives/header-blocks/03/default-ts/HeaderBlocks";
import { Button } from "react-aria-components";
import { HeaderDrawer } from "@/packages/components/headers/04/default-ts/HeaderDrawer";
import { IconProps } from "@/utils/types";

export const HeaderComponent = () => {
  const { directionY, scrollPosition } = useScrollbar("targetElemForScroll");

  const [open, setOpen] = useState<boolean>(false);

  const [isMouseOver, setIsMouseOver] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [prevActiveIndex, setPrevActiveIndex] = useState<number | null>(null);

  const [openCounter, setOpenCounter] = useState(
    Array.from({ length: 5 }).fill(false)
  );
  const handleIndexChange = (index: number, open: boolean) => {
    if (open) {
      setPrevActiveIndex(activeIndex);
      setActiveIndex(index);
      let newOpenCounter = openCounter;
      newOpenCounter[index] = open;
      setOpenCounter(newOpenCounter);
      setOpen(true);
    } else {
      let newOpenCounter = openCounter;
      newOpenCounter[index] = open;
      setOpenCounter(newOpenCounter);
      if (newOpenCounter.every((el) => el === false)) {
        if (isMouseOver) return;
        setOpen(false);
      }
    }
  };

  const [headerDrawerOpen, setHeaderDrawerOpen] = useState(false);

  const [state, setState] = useState<"default" | "hanging" | "transitioning">(
    "default"
  );

  useEffect(() => {
    if (scrollPosition.y < 60) setState("default");
    else if (scrollPosition.y > 500) setState("hanging");
    else setState("transitioning");
  }, [scrollPosition]);

  return (
    <>
      <ContainerGlassEffect
        className={twMerge(
          "transition-all duration-500",
          state === "default" && "w-full h-16 sticky top-0 mx-auto",
          (state === "transitioning" || state === "hanging") &&
            "w-full @md:w-[45rem] mx-auto flex h-16 @md:rounded-full sticky items-center justify-between",
          state === "transitioning" && "@md:top-10 top-0",
          state === "hanging" &&
            (directionY === false ? "@md:top-10 top-0" : "@md:-top-full top-0")
        )}
      >
        <HeaderDrawer
          open={headerDrawerOpen}
          setOpen={setHeaderDrawerOpen}
          className=" @md:hidden bg-background border-b text-foreground border-outline"
        >
          <span className="hover:text-accent-secondary cursor-pointer">
            Home
          </span>
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
        <Header
          className="w-full h-full flex justify-between items-center @md:border @md:border-outline-secondary rounded-[inherit] px-6 @md:px-10"
          onMouseLeave={() => setOpen(false)}
        >
          <a href="#" className="text-primary-foreground">
            LOGO
          </a>
          <div className="justify-center items-center gap-4 hidden @md:flex h-full">
            <HeaderAnimationWrapper
              activeIndex={activeIndex}
              prevActiveIndex={prevActiveIndex}
              open={open}
              onMouseLeave={() => {
                setIsMouseOver(false);
                handleIndexChange(0, false);
              }}
              onMouseEnter={() => {
                setIsMouseOver(true);
              }}
              className="h-full"
            >
              <HeaderItem
                className="hover:text-accent px-2"
                onChange={(open) => handleIndexChange(0, open)}
              >
                Home
              </HeaderItem>
              <HeaderItem
                className="hover:text-accent px-2"
                onChange={(open) => handleIndexChange(1, open)}
              >
                Pricing
              </HeaderItem>
              <HeaderItem
                className="hover:text-accent px-2"
                onChange={(open) => handleIndexChange(2, open)}
              >
                Products
                <HeaderDropdown
                  className="flex flex-col items-start mt-2"
                  onMouseLeave={() => handleIndexChange(2, false)}
                >
                  <span>View Best Sellers</span>
                  <span>Electronics</span>
                  <span>Clothing</span>
                  <span>Books</span>
                </HeaderDropdown>
              </HeaderItem>
              <HeaderItem
                className="hover:text-accent px-2"
                onChange={(open) => {
                  handleIndexChange(3, open);
                }}
              >
                Services
                <HeaderDropdown className="flex flex-col items-start mt-2">
                  <span>Web Design</span>
                  <span>Web Development</span>
                  <span>Mobile Development</span>
                  <span>Other Services</span>
                </HeaderDropdown>
              </HeaderItem>
              <HeaderItem
                className="hover:text-accent px-2"
                onChange={(open) => handleIndexChange(4, open)}
              >
                About
                <HeaderDropdown className="flex flex-col items-start mt-2">
                  <span>About Us</span>
                  <span>Careers</span>
                  <span>Contact Us</span>
                </HeaderDropdown>
              </HeaderItem>
            </HeaderAnimationWrapper>
          </div>
          <GradientBackground>
            <Button className="bg-background text-foreground py-2 @md:px-4 rounded-lg hidden @md:block">
              Get Started
            </Button>
          </GradientBackground>
          <Button
            className="w-10 h-10 @md:hidden hover:bg-secondary rounded flex justify-center items-center relative text-primary-foreground"
            onPress={() => {
              setHeaderDrawerOpen(true);
            }}
          >
            <Bars className="h-6 w-6" />
          </Button>
        </Header>
      </ContainerGlassEffect>
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