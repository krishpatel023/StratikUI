import type React from "react";
import type { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

const TableDescriptionLayout = ({ dimensions }: { dimensions: number[] }) => {
	const total = dimensions.reduce((a, b) => a + b, 0);
	return (
		<>
			<colgroup>
				{dimensions.map((_, i) => (
					<col key={i} style={{ width: `${dimensions[i] / total}%` }} />
				))}
			</colgroup>
		</>
	);
};

export const TABLE = ({
	children,
	...props
}: React.HTMLAttributes<HTMLTableElement>) => {
	const childrenArr = children as ReactElement[];
	const length = childrenArr[0].props.children.props.children.length;

	return (
		<div className="w-full max-w-full p-[1px] border border-slate-100 dark:border-none bg-gray-50 dark:bg-neutral-900/70 rounded-xl overflow-y-auto scrollbar-x">
			<table className="w-full" {...props}>
				<TableDescriptionLayout
					dimensions={length === 4 ? [1, 1, 1, 2] : [1, 1, 2]}
				/>
				{children}
			</table>
		</div>
	);
};

export const TD = ({
	...props
}: React.HTMLAttributes<HTMLTableCellElement>) => {
	return (
		<td
			className={twMerge(
				"py-3 text-sm dark:text-neutral-400 bg-white dark:bg-black px-4 break-words border border-gray-50 dark:border-neutral-900/70",
				//   i === data.data.length - 1 &&
				//     j === 0 &&
				//     "rounded-bl-xl ",
				//    === data.data.length - 1 &&
				//     j === data.dimensions.length - 1 &&
				//     "rounded-br-xl"
			)}
		>
			{props.children}
		</td>
	);
};

export const TH = ({
	...props
}: React.HTMLAttributes<HTMLTableCellElement>) => {
	return (
		<th
			className={twMerge(
				"py-3 px-4 text-sm dark:text-neutral-300 text-start",
				"bg-transparent dark:bg-transparent font-semibold border-none",
			)}
			{...props}
		>
			{props.children}
		</th>
	);
};

export const TR = ({ ...props }: React.HTMLAttributes<HTMLTableRowElement>) => {
	return <tr {...props}>{props.children}</tr>;
};
