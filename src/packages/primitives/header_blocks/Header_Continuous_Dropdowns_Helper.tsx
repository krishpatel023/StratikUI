"use client";

import { IconProps } from "@/utils/constants";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export const NavbarGroup = ({
  headings,
  withDropdownIcon = false,
  linkClassName = "",
  dropdownClassName = "",
  className = "",
}: {
  headings: { title: string; content: React.ReactNode | null; link?: string }[];
  withDropdownIcon?: boolean;
  linkClassName?: string;
  dropdownClassName?: string;
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const nullRef = useRef(null);
  const nullArray = new Array(headings.length).fill(nullRef);
  const dropdownRefs = useRef<(HTMLElement | null)[]>(nullArray);
  const containerRef = useRef<HTMLDivElement | null>(null);

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
    <div
      ref={containerRef}
      className={twMerge(
        "relative h-full transition-all duration-300",
        className
      )}
      onMouseLeave={() => setActiveIndex(null)}
    >
      {/* NAV LINKS */}
      <div className="h-full flex justify-center items-center gap-4">
        {headings.map(({ title, link, content }, index) => (
          <a
            key={index}
            {...(link ? { href: link } : {})}
            onMouseEnter={() => {
              setActiveIndex(index);
              setOpen(true);
            }}
            ref={(ref) => (dropdownRefs.current[index] = ref)}
            className={twMerge(
              "h-full text-black dark:text-white hover:text-blue-500 font-medium flex justify-center items-center",
              linkClassName
            )}
          >
            {title}

            {withDropdownIcon && content && (
              <ArrowDropDownIcon className="w-8 h-8" />
            )}
          </a>
        ))}
      </div>
      {/* ANIMATED MENU */}
      {open && activeIndex && headings[activeIndex]?.content && shiftX !== 0 ? (
        <div
          className="absolute top-full left-0"
          style={{ transform: `translateX(${shiftX}px)` }}
        >
          <NavbarDropDown
            content={headings[activeIndex]?.content}
            dropdownClassName={dropdownClassName}
          />
        </div>
      ) : null}
    </div>
  );
};

const NavbarDropDown = ({
  content,
  dropdownClassName,
}: {
  content: React.ReactNode;
  dropdownClassName?: string;
}) => {
  return (
    <>
      {content && (
        <div
          className={twMerge(
            "px-6 py-4 rounded-lg bg-neutral-100 text-black border-neutral-400 dark:bg-neutral-950 dark:text-white border dark:border-neutral-700",
            dropdownClassName
          )}
          style={{ transform: `translateX(-50%)` }}
        >
          {content}
        </div>
      )}
    </>
  );
};

export const ArrowDropDownIcon = (props: IconProps) => (
  <svg
    height="200"
    width="200"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414L12 15.001Z"
      fill="currentColor"
    />
  </svg>
);
