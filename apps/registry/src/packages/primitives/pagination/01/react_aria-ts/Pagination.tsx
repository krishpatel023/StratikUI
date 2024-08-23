"use client";

import { useState } from "react";
import { Button, Group } from "react-aria-components";

export type PaginationProps = {
	initialPage: number;
	totalPage: number;
	pageChangeHandler?: (page: number) => void;
};

export function Pagination({
	initialPage,
	totalPage,
	pageChangeHandler,
}: PaginationProps) {
	const [currentPage, setCurrentPage] = useState<number>(initialPage);

	const handleNext = () => {
		if (currentPage < totalPage) {
			setCurrentPage(currentPage + 1);
			if (pageChangeHandler) pageChangeHandler(currentPage + 1);
		}
	};
	const handlePrev = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
			if (pageChangeHandler) pageChangeHandler(currentPage - 1);
		}
	};
	return (
		<Group className="flex justify-center gap-4 text-primary-foreground border-[1px] border-outline  rounded-md bg-primary focus-within:ring-2 focus-within:ring-secondary">
			<Button
				className="w-full py-2 px-4 border-r-[1px] border-outline disabled:cursor-not-allowed disabled:text-muted-foreground  pressed:bg-secondary  rounded-l-[inherit] outline-none"
				onPress={handlePrev}
				isDisabled={currentPage === 1}
				slot="decrement"
			>
				Prev
			</Button>
			<div className="flex justify-center gap-2 py-2 px-4 max-w-20">
				<span>{currentPage}</span>
				<span>of</span>
				<span>{totalPage}</span>
			</div>
			<Button
				className="w-full py-2 px-4 border-l-[1px] border-outline disabled:cursor-not-allowed disabled:text-muted-foreground  pressed:bg-secondary  rounded-r-[inherit] outline-none"
				onPress={handleNext}
				isDisabled={currentPage === totalPage}
				slot="increment"
			>
				Next
			</Button>
		</Group>
	);
}
