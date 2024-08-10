"use client";

import { useState } from "react";
import {
  Header,
  HeaderAnimationWrapper,
  HeaderDropdown,
  HeaderItem,
} from "@registry/primitives/header-blocks/03/default-js/HeaderBlocks";

export default function HeaderBlocksImplementation() {
  const [open, setOpen] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [prevActiveIndex, setPrevActiveIndex] = useState(null);

  const [openCounter, setOpenCounter] = useState(
    Array.from({ length: 5 }).fill(false)
  );

  const handleIndexChange = (index, open) => {
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
    <div className="w-full min-h-[25rem] flex justify-center items-center ">
      <Header
        className="flex justify-center items-center h-16 border border-outline px-10 rounded-lg"
        onMouseLeave={() => setOpen(false)}
      >
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
            <HeaderDropdown className="flex flex-col items-start">
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
            <HeaderDropdown className="flex flex-col items-start">
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
            <HeaderDropdown className="flex flex-col items-start">
              <span>About Us</span>
              <span>Careers</span>
              <span>Contact Us</span>
            </HeaderDropdown>
          </HeaderItem>
        </HeaderAnimationWrapper>
      </Header>
    </div>
  );
}
