"use client";

import { LegacyRef, useEffect, useRef, useState } from "react";
import { Header, HeaderDropdown, HeaderItem } from "./HeaderBlocks_1";

export function HeaderBlocksImplementation() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const nullRef = useRef(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const totalChildren = containerRef?.current?.children?.length;

  const nullArray = new Array(totalChildren).fill(nullRef);
  const dropdownRefs = useRef<(HTMLElement | null)[]>(nullArray);

  const [shiftX, setShiftX] = useState(0);

  const changePosition = () => {
    if (
      open &&
      activeIndex &&
      containerRef &&
      containerRef.current &&
      dropdownRefs.current[activeIndex]
    ) {
      const outerBoxLength = containerRef.current.getBoundingClientRect();
      const innerBoxLength =
        dropdownRefs.current[activeIndex]?.getBoundingClientRect();
      if (!innerBoxLength) return;

      setShiftX(
        innerBoxLength.left + innerBoxLength.width / 2 - outerBoxLength.left
      );
    }
  };

  useEffect(() => {
    changePosition();
  }, [activeIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="w-full min-h-[25rem] flex justify-center items-center">
      <Header
        className="flex justify-center items-center h-16 border border-outline px-10 rounded-lg"
        ref={containerRef}
      >
        <HeaderItem
          className="hover:text-accent px-2"
          ref={dropdownRefs.current[0] as LegacyRef<HTMLButtonElement>}
        >
          Home
        </HeaderItem>
        <HeaderItem
          className="hover:text-accent px-2"
          ref={dropdownRefs.current[1] as LegacyRef<HTMLButtonElement>}
        >
          Pricing
        </HeaderItem>
        <HeaderItem
          className="hover:text-accent px-2"
          ref={dropdownRefs.current[2] as LegacyRef<HTMLButtonElement>}
          onChange={(open) => {
            setOpen(open);
            setActiveIndex(2);
          }}
        >
          Products
          <HeaderDropdown
            className="flex flex-col items-start"
            style={{ transform: `translateX(${shiftX}px)` }}
          >
            <span>View Best Sellers</span>
            <span>Electronics</span>
            <span>Clothing</span>
            <span>Books</span>
          </HeaderDropdown>
        </HeaderItem>
        <HeaderItem
          className="hover:text-accent px-2"
          ref={dropdownRefs.current[3] as LegacyRef<HTMLButtonElement>}
          onChange={(open) => {
            setOpen(open);
            setActiveIndex(3);
          }}
        >
          Services
          <HeaderDropdown
            className="flex flex-col items-start"
            style={{ transform: `translateX(${shiftX}px)` }}
          >
            <span>Web Design</span>
            <span>Web Development</span>
            <span>Mobile Development</span>
            <span>Other Services</span>
          </HeaderDropdown>
        </HeaderItem>
        <HeaderItem
          className="hover:text-accent px-2"
          ref={dropdownRefs.current[4] as LegacyRef<HTMLButtonElement>}
          onChange={(open) => {
            setOpen(open);
            setActiveIndex(4);
          }}
        >
          About
          <HeaderDropdown
            className="flex flex-col items-start"
            style={{ transform: `translateX(${shiftX}px)` }}
          >
            <span>About Us</span>
            <span>Careers</span>
            <span>Contact Us</span>
          </HeaderDropdown>
        </HeaderItem>
      </Header>
    </div>
  );
}
