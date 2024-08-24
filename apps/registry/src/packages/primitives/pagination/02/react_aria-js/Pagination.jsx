"use client";

import { Fragment, useState } from "react";
import { Button, Group } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function Pagination({ initialPage, totalPage, limit = 5, pageChangeHandler }) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handleNext = () => {
    if (currentPage < totalPage) pageHandler(currentPage + 1);
  };
  const handlePrev = () => {
    if (currentPage > 1) pageHandler(currentPage - 1);
  };

  const pageHandler = (value) => {
    setCurrentPage(value);
    pageChangeHandler?.(value);
  };
  return (
    <Group className="flex justify-center  text-primary-foreground border-[1px] border-outline  rounded-md bg-primary focus-within:ring-2 focus-within:ring-secondary">
      <Button
        className="w-full py-2 px-4 border-r-[1px] border-outline disabled:cursor-not-allowed disabled:text-muted-foreground  pressed:bg-secondary  rounded-l-[inherit] outline-none transition-colors duration-100 ease-linear"
        onPress={handlePrev}
        isDisabled={currentPage === 1}
        slot="decrement"
      >
        Prev
      </Button>
      <SeriesButton
        state="prev"
        currentPage={currentPage}
        pageHandler={pageHandler}
        limit={limit}
        totalPage={totalPage}
      />
      {new Array(limit).fill(0).map((val, index) => (
        <Fragment key={index}>
          {limit * Math.floor((currentPage - 1) / limit) + index + 1 <= totalPage && (
            <SoloPage
              value={limit * Math.floor((currentPage - 1) / limit) + index + 1}
              currentPage={currentPage}
              pageHandler={pageHandler}
            />
          )}
        </Fragment>
      ))}
      <SeriesButton
        state="next"
        currentPage={currentPage}
        pageHandler={pageHandler}
        limit={limit}
        totalPage={totalPage}
      />
      <Button
        className="w-full py-2 px-4 border-l-[1px] border-outline disabled:cursor-not-allowed disabled:text-muted-foreground  pressed:bg-secondary  rounded-r-[inherit] outline-none transition-colors duration-100 ease-linear"
        onPress={handleNext}
        isDisabled={currentPage === totalPage}
        slot="increment"
      >
        Next
      </Button>
    </Group>
  );
}

function SoloPage({ value, currentPage, pageHandler }) {
  return (
    <Button
      onPress={() => pageHandler(value)}
      className={twMerge(
        "w-6 px-4 flex justify-center items-center hover:bg-secondary transition-colors duration-200 ease-linear",
        value === currentPage && "bg-secondary",
      )}
    >
      {value}
    </Button>
  );
}

function SeriesButton({ state, currentPage, limit, totalPage, pageHandler }) {
  return (
    <>
      {state === "prev" && currentPage > limit && totalPage > limit && (
        <Button
          onPress={() => pageHandler(Math.floor(currentPage / limit) * limit)}
          className={twMerge("w-6 px-4 flex justify-center items-center hover:bg-secondary")}
        >
          ...
        </Button>
      )}
      {state === "next" && Math.ceil(currentPage / limit) < Math.ceil(totalPage / limit) && totalPage > limit && (
        <Button
          onPress={() => pageHandler(Math.ceil(currentPage / limit) * limit + 1)}
          className={twMerge("w-6 h-full px-4 flex justify-center items-center hover:bg-secondary")}
        >
          ...
        </Button>
      )}
    </>
  );
}
