"use client";

import useScrollbar from "@/packages/hooks/useScrollbar/useScrollbar";
import { ContainerGlassEffect } from "@/packages/primitives/containers/Container_6";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { HeaderComponent as HeaderSmallScreen } from "@/packages/components/headers/Header_2";
import { GradientBackground } from "@/packages/primitives/containers/Container_1";
import {
  Header,
  HeaderAnimationWrapper,
  HeaderDropdown,
  HeaderItem,
} from "@/packages/primitives/header_blocks/HeaderBlocks_3";
import { HeroSection } from "../hero_section/Hero_4";
import { Button } from "react-aria-components";

export const HeaderComponent = () => {
  const elem = document.getElementById("targetElem");
  const { directionY, scrollPosition } = useScrollbar("targetElem");

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

  return (
    <>
      {/* ANIMATED ONE FOR LARGE SCREEN */}
      <ContainerGlassEffect
        className={twMerge(
          "w-[45rem] mx-auto hidden @md:flex h-16 px-10 border border-outline-secondary rounded-full  sticky  items-center  justify-between transition-all duration-500",
          directionY === false || scrollPosition.y === 0
            ? "top-10"
            : "-top-full"
        )}
      >
        <Header
          className="w-full h-full flex justify-between items-center"
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
          <GradientBackground className="z-10">
            <Button className="relative z-20 bg-background text-foreground py-2 @md:px-4 rounded-lg hidden @md:block">
              Get Started
            </Button>
          </GradientBackground>
        </Header>
      </ContainerGlassEffect>

      {/* SMALL SCREEN */}
      <div className="@md:hidden w-full h-16  flex justify-between items-center">
        <HeaderSmallScreen />
      </div>
    </>
  );
};

export function HeaderImplementation() {
  return (
    <div
      className="w-full h-[45rem] overflow-auto scrollbar-vertical"
      id="targetElem"
    >
      <div className="w-full">
        <HeaderComponent />
        <div className="min-h-[80rem] w-full">
          <HeroSection />
        </div>
      </div>
    </div>
  );
}
