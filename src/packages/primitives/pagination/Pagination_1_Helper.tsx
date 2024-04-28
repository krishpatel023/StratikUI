"use client";

import { useState } from "react";

type PaginationProps = {
  initialPage: number;
  totalPage: number;
};
export function Pagination({ initialPage, totalPage }: PaginationProps) {
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
    <div className="flex justify-center gap-4 text-s_textPrimary border-[1px] border-neutral-400 dark:border-neutral-600  rounded-md bg-neutral-200 dark:bg-neutral-800">
      <button
        className="w-full py-2 px-4 border-r-[1px] border-neutral-400 dark:border-neutral-600 disabled:cursor-not-allowed disabled:text-neutral-500 dark:disabled:text-neutral-500"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <div className="flex justify-center gap-2 py-2 px-4 max-w-20">
        <span>{currentPage}</span>
        <span>of</span>
        <span>{totalPage}</span>
      </div>
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

export const CodeTsx = `type PaginationProps = {
  initialPage: number;
  totalPage: number;
};
export function Pagination({ initialPage, totalPage }: PaginationProps) {
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
    <div className="flex justify-center gap-4 text-s_textPrimary border-[1px] border-neutral-400 dark:border-neutral-600  rounded-md bg-neutral-200 dark:bg-neutral-800">
      <button
        className="w-full py-2 px-4 border-r-[1px] border-neutral-400 dark:border-neutral-600 disabled:cursor-not-allowed disabled:text-neutral-500 dark:disabled:text-neutral-500"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <div className="flex justify-center gap-2 py-2 px-4 max-w-20">
        <span>{currentPage}</span>
        <span>of</span>
        <span>{totalPage}</span>
      </div>
      <button
        className="w-full py-2 px-4 border-l-[1px] border-neutral-400 dark:border-neutral-600 disabled:cursor-not-allowed disabled:text-neutral-500 dark:disabled:text-neutral-500"
        onClick={handleNext}
        disabled={currentPage === totalPage}
      >
        Next
      </button>
    </div>
  );
}`;

export const CodeJsx = `export function Pagination({ initialPage, totalPage }) {
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
    <div className="flex justify-center gap-4 text-s_textPrimary border-[1px] border-neutral-400 dark:border-neutral-600  rounded-md bg-neutral-200 dark:bg-neutral-800">
      <button
        className="w-full py-2 px-4 border-r-[1px] border-neutral-400 dark:border-neutral-600 disabled:cursor-not-allowed disabled:text-neutral-500 dark:disabled:text-neutral-500"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <div className="flex justify-center gap-2 py-2 px-4 max-w-20">
        <span>{currentPage}</span>
        <span>of</span>
        <span>{totalPage}</span>
      </div>
      <button
        className="w-full py-2 px-4 border-l-[1px] border-neutral-400 dark:border-neutral-600 disabled:cursor-not-allowed disabled:text-neutral-500 dark:disabled:text-neutral-500"
        onClick={handleNext}
        disabled={currentPage === totalPage}
      >
        Next
      </button>
    </div>
  );
}`;
