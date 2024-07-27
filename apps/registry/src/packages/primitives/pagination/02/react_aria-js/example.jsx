"use client";

import { useState } from "react";
import { Pagination } from "@/packages/primitives/pagination/02/react_aria-js/Pagination";

export default function PaginationImplementation() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <Pagination
        initialPage={1}
        totalPage={12}
        pageChangeHandler={(val) => {
          setCurrentPage(val);
        }}
      />
      <span className="text-foreground">The current page is {currentPage}</span>
    </div>
  );
}
