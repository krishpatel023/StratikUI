"use client";

import { Fragment, useState } from "react";
import { twMerge } from "tailwind-merge";

type PaginationProps = {
  initialPage: number;
  totalPage: number;
  limit?: number;
};
export function Pagination({
  initialPage,
  totalPage,
  limit = 5,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="flex justify-center text-s_textPrimary border-[1px] border-neutral-400 dark:border-neutral-600  rounded-md bg-neutral-200 dark:bg-neutral-800">
      <button
        className="w-full py-2 px-4 border-r-[1px] border-neutral-400 dark:border-neutral-600 disabled:cursor-not-allowed disabled:text-neutral-500 dark:disabled:text-neutral-500"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <SeriesButton
        state="prev"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        limit={limit}
        totalPage={totalPage}
      />
      {new Array(limit).fill(0).map((val, index) => (
        <Fragment key={index}>
          {limit * Math.floor((currentPage - 1) / limit) + index + 1 <=
            totalPage && (
            <SoloPage
              value={limit * Math.floor((currentPage - 1) / limit) + index + 1}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </Fragment>
      ))}
      <SeriesButton
        state="next"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        limit={limit}
        totalPage={totalPage}
      />
      <button
        className="w-full py-2 px-4 border-l-[1px] border-neutral-400 dark:border-neutral-600 disabled:cursor-not-allowed disabled:text-neutral-500 dark:disabled:text-neutral-500"
        onClick={handleNext}
        disabled={currentPage === totalPage}
      >
        Next
      </button>
    </div>
  );
}

const SoloPage = ({
  value,
  currentPage,
  setCurrentPage,
}: {
  value: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
}) => {
  return (
    <button
      onClick={() => setCurrentPage(value)}
      className={twMerge(
        "w-6 px-4 flex justify-center items-center",
        value === currentPage && "bg-neutral-300 dark:bg-neutral-700"
      )}
    >
      {value}
    </button>
  );
};

const SeriesButton = ({
  state,
  currentPage,
  setCurrentPage,
  limit,
  totalPage,
}: {
  state: "next" | "prev";
  currentPage: number;
  setCurrentPage: (value: number) => void;
  limit: number;
  totalPage: number;
}) => {
  return (
    <>
      {state === "prev" && currentPage > limit && totalPage > limit && (
        <button
          onClick={() =>
            setCurrentPage(Math.floor(currentPage / limit) * limit)
          }
          className={twMerge(
            "w-6 px-4 flex justify-center items-center hover:bg-neutral-300 dark:hover:bg-neutral-700"
          )}
        >
          ...
        </button>
      )}
      {state === "next" &&
        Math.ceil(currentPage / limit) < Math.ceil(totalPage / limit) &&
        totalPage > limit && (
          <button
            onClick={() =>
              setCurrentPage(Math.ceil(currentPage / limit) * limit + 1)
            }
            className={twMerge(
              "w-6 h-full px-4 flex justify-center items-center hover:bg-neutral-300 dark:hover:bg-neutral-700"
            )}
          >
            ...
          </button>
        )}
    </>
  );
};

export const CodeTsx = `type PaginationProps = {
  initialPage: number;
  totalPage: number;
  limit?: number;
};
export function Pagination({
  initialPage,
  totalPage,
  limit = 5,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="flex justify-center text-s_textPrimary border-[1px] border-neutral-400 dark:border-neutral-600  rounded-md bg-neutral-200 dark:bg-neutral-800">
      <button
        className="w-full py-2 px-4 border-r-[1px] border-neutral-400 dark:border-neutral-600 disabled:cursor-not-allowed disabled:text-neutral-500 dark:disabled:text-neutral-500"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <SeriesButton
        state="prev"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        limit={limit}
        totalPage={totalPage}
      />
      {new Array(limit).fill(0).map((val, index) => (
        <Fragment key={index}>
          {limit * Math.floor((currentPage - 1) / limit) + index + 1 <=
            totalPage && (
            <SoloPage
              value={limit * Math.floor((currentPage - 1) / limit) + index + 1}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </Fragment>
      ))}
      <SeriesButton
        state="next"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        limit={limit}
        totalPage={totalPage}
      />
      <button
        className="w-full py-2 px-4 border-l-[1px] border-neutral-400 dark:border-neutral-600 disabled:cursor-not-allowed disabled:text-neutral-500 dark:disabled:text-neutral-500"
        onClick={handleNext}
        disabled={currentPage === totalPage}
      >
        Next
      </button>
    </div>
  );
}

const SoloPage = ({
  value,
  currentPage,
  setCurrentPage,
}: {
  value: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
}) => {
  return (
    <button
      onClick={() => setCurrentPage(value)}
      className={twMerge(
        "w-6 px-4 flex justify-center items-center",
        value === currentPage && "bg-neutral-300 dark:bg-neutral-700"
      )}
    >
      {value}
    </button>
  );
};

const SeriesButton = ({
  state,
  currentPage,
  setCurrentPage,
  limit,
  totalPage,
}: {
  state: "next" | "prev";
  currentPage: number;
  setCurrentPage: (value: number) => void;
  limit: number;
  totalPage: number;
}) => {
  return (
    <>
      {state === "prev" && currentPage > limit && totalPage > limit && (
        <button
          onClick={() =>
            setCurrentPage(Math.floor(currentPage / limit) * limit)
          }
          className={twMerge(
            "w-6 px-4 flex justify-center items-center hover:bg-neutral-300 dark:hover:bg-neutral-700"
          )}
        >
          ...
        </button>
      )}
      {state === "next" &&
        Math.ceil(currentPage / limit) < Math.ceil(totalPage / limit) &&
        totalPage > limit && (
          <button
            onClick={() =>
              setCurrentPage(Math.ceil(currentPage / limit) * limit + 1)
            }
            className={twMerge(
              "w-6 h-full px-4 flex justify-center items-center hover:bg-neutral-300 dark:hover:bg-neutral-700"
            )}
          >
            ...
          </button>
        )}
    </>
  );
};`;

export const CodeJsx = `export function Pagination({
  initialPage,
  totalPage,
  limit = 5,
}) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-center text-s_textPrimary border-[1px] border-neutral-400 dark:border-neutral-600  rounded-md bg-neutral-200 dark:bg-neutral-800">
      <button
        className="w-full py-2 px-4 border-r-[1px] border-neutral-400 dark:border-neutral-600 disabled:cursor-not-allowed disabled:text-neutral-500 dark:disabled:text-neutral-500"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <SeriesButton
        state="prev"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        limit={limit}
        totalPage={totalPage}
      />
      {new Array(limit).fill(0).map((val, index) => (
        <Fragment key={index}>
          {limit * Math.floor((currentPage - 1) / limit) + index + 1 <=
            totalPage && (
            <SoloPage
              value={limit * Math.floor((currentPage - 1) / limit) + index + 1}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </Fragment>
      ))}
      <SeriesButton
        state="next"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        limit={limit}
        totalPage={totalPage}
      />
      <button
        className="w-full py-2 px-4 border-l-[1px] border-neutral-400 dark:border-neutral-600 disabled:cursor-not-allowed disabled:text-neutral-500 dark:disabled:text-neutral-500"
        onClick={handleNext}
        disabled={currentPage === totalPage}
      >
        Next
      </button>
    </div>
  );
}

const SoloPage = ({
  value,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <button
      onClick={() => setCurrentPage(value)}
      className={twMerge(
        "w-6 px-4 flex justify-center items-center",
        value === currentPage && "bg-neutral-300 dark:bg-neutral-700"
      )}
    >
      {value}
    </button>
  );
};

const SeriesButton = ({
  state,
  currentPage,
  setCurrentPage,
  limit,
  totalPage,
}) => {
  return (
    <>
      {state === "prev" && currentPage > limit && totalPage > limit && (
        <button
          onClick={() =>
            setCurrentPage(Math.floor(currentPage / limit) * limit)
          }
          className={twMerge(
            "w-6 px-4 flex justify-center items-center hover:bg-neutral-300 dark:hover:bg-neutral-700"
          )}
        >
          ...
        </button>
      )}
      {state === "next" &&
        Math.ceil(currentPage / limit) < Math.ceil(totalPage / limit) &&
        totalPage > limit && (
          <button
            onClick={() =>
              setCurrentPage(Math.ceil(currentPage / limit) * limit + 1)
            }
            className={twMerge(
              "w-6 h-full px-4 flex justify-center items-center hover:bg-neutral-300 dark:hover:bg-neutral-700"
            )}
          >
            ...
          </button>
        )}
    </>
  );
};`;
