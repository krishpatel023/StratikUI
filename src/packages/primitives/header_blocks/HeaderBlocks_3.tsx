"use client";
import { motion } from "framer-motion";
import {
  DetailedHTMLProps,
  forwardRef,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button, ButtonProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import React, { ReactElement } from "react";

export interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export function Header({ className, children, ...props }: HeaderProps) {
  return (
    <header className={twMerge("h-full", className)} {...props}>
      {children}
    </header>
  );
}

function extractHeaderDropdowns(
  children: React.ReactNode
): [
  React.ReactNode,
  (ReactElement | null)[],
  React.MutableRefObject<(HTMLButtonElement | null)[]>,
] {
  const dropdowns: (ReactElement | null)[] = [];
  const dropdownRefs = useRef<(HTMLButtonElement | null)[]>(
    Array.isArray(children)
      ? new Array(children.length).fill({ current: null })
      : []
  );

  const newChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child) && child.type === HeaderItem) {
      let dropdownFound = false;
      let extractedDropdown: ReactElement | null = null;

      const newHeaderItem = React.cloneElement(
        child as ReactElement,
        {},
        React.Children.map(child.props.children, (subChild) => {
          if (
            React.isValidElement(subChild) &&
            subChild.type === HeaderDropdown
          ) {
            extractedDropdown = subChild;
            dropdownFound = true;
            return null;
          }
          return subChild;
        })
      );

      dropdowns.push(extractedDropdown); // This will be null if no dropdown was found

      return React.cloneElement(newHeaderItem as ReactElement, {
        key: index,
        ref: (el: HTMLButtonElement) => {
          if (dropdownRefs.current) {
            dropdownRefs.current[index] = el;
          }
        },
      });
    }
    return child;
  });

  return [newChildren, dropdowns, dropdownRefs];
}

export interface HeaderAnimationWrapperProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  activeIndex: number | null;
  prevActiveIndex: number | null;
  open: boolean;
}

export function HeaderAnimationWrapper({
  className,
  children,
  activeIndex,
  prevActiveIndex,
  open,
  ...props
}: HeaderAnimationWrapperProps) {
  const [newChildren, dropdown, dropdownRefs] =
    extractHeaderDropdowns(children);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const [shiftX, setShiftX] = useState(0);
  const [prevShiftX, setPrevShiftX] = useState(0);

  const changePosition = () => {
    if (
      open &&
      activeIndex &&
      containerRef &&
      containerRef.current &&
      dropdownRefs?.current[activeIndex]
    ) {
      const outerBoxLength = containerRef.current.getBoundingClientRect();
      const innerBoxLength =
        dropdownRefs.current[activeIndex]?.getBoundingClientRect();
      if (!innerBoxLength) return;

      const val =
        innerBoxLength.left + innerBoxLength.width / 2 - outerBoxLength.left;

      setShiftX(val);
      if (!prevShiftX) setPrevShiftX(val);
    }
  };

  useEffect(() => {
    setPrevShiftX(shiftX);
    changePosition();
    if (!activeIndex) setPrevShiftX(0);
  }, [activeIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={containerRef}
      className={twMerge(
        "h-full w-max flex justify-center items-center gap-2 relative",
        className
      )}
      {...props}
    >
      {newChildren}
      <>
        {open &&
        activeIndex &&
        dropdown &&
        dropdown[activeIndex] &&
        shiftX !== 0 &&
        prevShiftX !== 0 ? (
          <motion.div
            className="absolute top-full flex left-0 justify-center group/headerItem"
            initial={{ x: prevShiftX }}
            animate={{
              x: shiftX,
              transition: prevActiveIndex
                ? { type: "spring", stiffness: 300, damping: 30 }
                : { duration: 0.5, ease: "easeInOut" },
            }}
          >
            {dropdown[activeIndex]}
          </motion.div>
        ) : null}
      </>
    </div>
  );
}

export interface HeaderItemProps extends ButtonProps {
  className?: string;
  open?: boolean;
  onChange?: (open: boolean) => void;
}

const HeaderItem = forwardRef<HTMLButtonElement, HeaderItemProps>(
  (
    {
      open = false,
      onChange,
      className,
      children,
      onPress,
      onHoverStart,
      onHoverEnd,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = useState(open);

    useEffect(() => {
      onChange && onChange(internalOpen);
    }, [internalOpen]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
      <Button
        ref={ref}
        className={twMerge(
          "relative flex flex-col justify-center text-center items-center gap-4 group/headerItem h-full text-foreground",
          className
        )}
        {...props}
        data-open={internalOpen}
        onPress={(e) => {
          onPress && onPress(e);
          setInternalOpen(!open);
        }}
        onHoverStart={(e) => {
          onHoverStart && onHoverStart(e);
          setInternalOpen(true);
        }}
        onHoverEnd={(e) => {
          onHoverEnd && onHoverEnd(e);
          setInternalOpen(false);
        }}
        onFocus={(e) => {
          onFocus && onFocus(e);
          setInternalOpen(true);
        }}
        onBlur={(e) => {
          onBlur && onBlur(e);
          setInternalOpen(false);
        }}
      >
        {children}
      </Button>
    );
  }
);

export interface HeaderDropdownProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export function HeaderDropdown({
  className,
  children,
  ...props
}: HeaderDropdownProps) {
  return (
    <div className="w-max transition-all duration-300 ease-linear group-data-[open=false]/headerItem:hidden absolute top-full">
      <div
        className={twMerge(
          "bg-primary text-primary-foreground p-4 rounded border border-outline-secondary",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

export function HeaderBlocksImplementation() {
  const [open, setOpen] = useState(false);
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
    <div className="w-full min-h-[25rem] flex justify-center items-center ">
      <Header className="flex justify-center items-center h-16 border border-outline px-10 rounded-lg">
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
