"use client";

import { GradientBackground } from "@/packages/primitives/containers/01/default-ts/Container";
import {
  Header,
  HeaderAnimationWrapper,
  HeaderDropdown,
  HeaderItem,
} from "@/packages/primitives/header-blocks/03/default-ts/HeaderBlocks";
import { IconProps } from "@/utils/types";
import { useState } from "react";
import { Button } from "react-aria-components";
import { CommandPaletteBox } from "./CommandPalette";
import { HeaderDrawer } from "./HeaderDrawer";

export const HeaderComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState(false);

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
      <HeaderDrawer
        open={drawerOpen}
        setOpen={setDrawerOpen}
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
      <Header
        className="w-full h-16  flex justify-between px-6 @md:px-10 items-center bg-blur shadow shadow-outline-secondary"
        onMouseLeave={() => setOpen(false)}
      >
        <a href="#" className="text-primary-foreground font-semibold text-lg">
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
              <HeaderDropdown className="flex flex-col items-start mt-2">
                <div>
                  <h4 className="font-semibold text-sm mb-4">Categories</h4>
                  <ul className="text-sm text-primary-foreground flex flex-col gap-2">
                    <li className="hover:text-accent-secondary hover:cursor-pointer">
                      Electronics
                    </li>
                    <li className="hover:text-accent-secondary hover:cursor-pointer">
                      Clothing
                    </li>
                    <li className="hover:text-accent-secondary hover:cursor-pointer">
                      Books
                    </li>
                  </ul>
                </div>
              </HeaderDropdown>
            </HeaderItem>
            <HeaderItem
              className="hover:text-accent px-2"
              onChange={(open) => {
                handleIndexChange(3, open);
              }}
            >
              Services
              <HeaderDropdown className="flex flex-col items-start mt-2 px-4 w-max">
                <h4 className="font-semibold text-lg mb-4">Our Services</h4>
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4">
                    <div className="min-w-40 h-28 bg-secondary rounded-lg"></div>
                    <div className="min-w-60">
                      <h1>Product 1</h1>
                      <p className="text-sm text-secondary-foreground mt-2">
                        This is the most fabulous product in the world. The
                        popularity of it is endless.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="min-w-40 h-28 bg-secondary rounded-lg"></div>
                    <div className="min-w-60">
                      <h1>Product 2</h1>
                      <p className="text-sm text-secondary-foreground mt-2">
                        This is the most fabulous product in the world. The
                        popularity of it is endless.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="min-w-40 h-28 bg-secondary rounded-lg"></div>
                    <div className="min-w-60">
                      <h1>Product 3</h1>
                      <p className="text-sm text-secondary-foreground mt-2">
                        This is the most fabulous product in the world. The
                        popularity of it is endless.
                      </p>
                    </div>
                  </div>
                </div>
              </HeaderDropdown>
            </HeaderItem>
            <HeaderItem
              className="hover:text-accent px-2"
              onChange={(open) => handleIndexChange(4, open)}
            >
              About
              <HeaderDropdown className="flex flex-col items-start mt-2 max-w-80">
                <h4 className="font-semibold text-sm mb-4">
                  About Our Company
                </h4>
                <p className="text-sm text-secondary-foreground">
                  We are a leading provider of innovative solutions for
                  businesses of all sizes. Our team of experts has years of
                  experience in nothing {":)"}
                </p>
              </HeaderDropdown>
            </HeaderItem>
          </HeaderAnimationWrapper>
        </div>
        <span className="gap-8 items-center justify-center hidden @lg:flex">
          <CommandPaletteBox />
          <button
            className="w-8 h-10 flex justify-center items-center rounded hover:bg-secondary text-foreground"
            onClick={() => setTheme(!theme)}
          >
            {theme ? (
              <Icons.sun className="w-6 h-6" />
            ) : (
              <Icons.moon className="w-6 h-6" />
            )}
          </button>

          <GradientBackground>
            <button className="text-foreground bg-background py-2 @md:px-4 rounded-lg hidden @md:block">
              Get Started
            </button>
          </GradientBackground>
        </span>
        <Button
          className="w-10 h-10 @md:hidden hover:bg-secondary rounded flex justify-center items-center relative text-primary-foreground"
          onPress={() => {
            setDrawerOpen(true);
          }}
        >
          <Icons.Bars className="h-6 w-6" />
        </Button>
      </Header>
    </>
  );
};

const Icons = {
  Bars: (props: IconProps) => (
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
  ),
  sun: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.3em"
      height="1.3em"
      viewBox="0 0 21 21"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 0 0-4-4.018c-2.219 0-4 1.781-4 4c0 2.219 1.781 4 4 4zM4.136 4.136L5.55 5.55m9.9 9.9l1.414 1.414M1.5 10.5h2m14 0h2M4.135 16.863L5.55 15.45m9.899-9.9l1.414-1.415M10.5 19.5v-2m0-14v-2"
          opacity=".3"
        ></path>
        <g transform="translate(-210 -1)">
          <path d="M220.5 2.5v2m6.5.5l-1.5 1.5"></path>
          <circle cx="220.5" cy="11.5" r="4"></circle>
          <path d="m214 5l1.5 1.5m5 14v-2m6.5-.5l-1.5-1.5M214 18l1.5-1.5m-4-5h2m14 0h2"></path>
        </g>
      </g>
    </svg>
  ),
  moon: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 56 56"
      {...props}
    >
      <path
        fill="currentColor"
        d="M41.242 36.121c-12.937 0-20.953-7.781-20.953-20.273c0-3.563.61-6.703 1.477-8.391c.351-.68.398-1.008.398-1.476c0-.774-.703-1.688-1.687-1.688c-.188 0-.633.07-1.313.328c-8.648 3.516-14.742 12.656-14.742 22.5c0 14.227 10.313 24.586 24.539 24.586c10.219 0 18.469-5.344 22.29-14.11c.257-.609.327-1.124.327-1.382c0-.961-.843-1.617-1.547-1.617c-.398 0-.656.023-1.218.234c-1.922.773-4.782 1.29-7.57 1.29m-33.14-9.164c0-7.289 3.773-14.227 9.867-18.047c-.75 2.18-1.172 4.594-1.172 7.266c0 14.648 8.93 23.367 23.906 23.367c2.39 0 4.453-.281 6.375-.96c-3.562 5.882-10.43 9.468-17.953 9.468c-12.164 0-21.023-8.86-21.023-21.094"
      ></path>
    </svg>
  ),
};
