"use client";
import type React from "react";
import { useCallback, useEffect } from "react";
import { twMerge } from "tailwind-merge";

export type Key =
	| "Control"
	| "Shift"
	| "Alt"
	| "Command"
	| "Option"
	| "Enter"
	| "Tab"
	| "Up"
	| "Down"
	| "Left"
	| "Right"
	| "Esc"
	| "Insert"
	| "Delete"
	| "Home"
	| "End"
	| "PageUp"
	| "PageDown"
	| "F1"
	| "F2"
	| "F3"
	| "F4"
	| "F5"
	| "F6"
	| "F7"
	| "F8"
	| "F9"
	| "F10"
	| "F11"
	| "F12"
	| "a"
	| "b"
	| "c"
	| "d"
	| "e"
	| "f"
	| "g"
	| "h"
	| "i"
	| "j"
	| "k"
	| "l"
	| "m"
	| "n"
	| "o"
	| "p"
	| "q"
	| "r"
	| "s"
	| "t"
	| "u"
	| "v"
	| "w"
	| "x"
	| "y"
	| "z"
	| "0"
	| "1"
	| "2"
	| "3"
	| "4"
	| "5"
	| "6"
	| "7"
	| "8"
	| "9";

interface KeyListenerProps {
	keys: Key[];
	onKeyDown: (event: KeyboardEvent) => void;
	children?: React.ReactNode;
	focusPermitted?: boolean;
}

export const KeyListener: React.FC<KeyListenerProps> = ({
	keys,
	onKeyDown,
	children,
	focusPermitted = true,
}) => {
	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
			const isCtrlPressed = event.ctrlKey || event.metaKey;
			const isShiftPressed = event.shiftKey;
			const isAltPressed = event.altKey;

			const alphabetKeyRegex = /^Key([A-Z])$/;
			const alphabetMatch = event.code.match(alphabetKeyRegex);

			const digitsKeyRegex = /^Digit([0-9])$/;
			const digitsMatch = event.code.match(digitsKeyRegex);

			const functionKeyRegex = /^F([0-9])$/;
			const functionKeyMatch = event.code.match(functionKeyRegex);

			const pressedKeys = [
				isCtrlPressed && !functionKeyMatch && "Control",
				isShiftPressed && "Shift",
				isAltPressed && "Alt",

				// biome-ignore lint/complexity/useOptionalChain: needed
				alphabetMatch && alphabetMatch[1].toLocaleLowerCase(),

				// biome-ignore lint/complexity/useOptionalChain: needed
				digitsMatch && digitsMatch[1],
				functionKeyMatch && `F${event.code.slice(1)}`,

				event.code === "Escape" && "Esc",
				event.code === "Insert" && "Insert",
				event.code === "Delete" && "Delete",
				event.code === "Home" && "Home",
				event.code === "End" && "End",
				event.code === "PageUp" && "PageUp",
				event.code === "PageDown" && "PageDown",
				event.code === "ArrowUp" && "Up",
				event.code === "ArrowDown" && "Down",
				event.code === "ArrowLeft" && "Left",
				event.code === "ArrowRight" && "Right",
				event.code === "CapsLock" && "CapsLock",
				event.code === "Enter" && "Enter",
			].filter(Boolean) as Key[];

			if (pressedKeys.join("+") === keys.join("+")) {
				event.preventDefault();
				onKeyDown(event);
			}
		},
		[keys, onKeyDown],
	);

	useEffect(() => {
		if (!focusPermitted) return;
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown, focusPermitted]);

	return <>{children}</>;
};

interface IconsProps {
	[key: string]: string;
}

const Icons: IconsProps = {
	Up: "↑",
	Down: "↓",
	Left: "←",
	Right: "→",
	Esc: "Esc",
	Insert: "Insert",
	Delete: "Delete",
	Home: "Home",
	End: "End",
	PageUp: "PageUp",
	PageDown: "PageDown",
	Control: "Ctrl",
	Shift: "Shift",
	Alt: "Alt",
	F1: "F1",
	F2: "F2",
	F3: "F3",
	F4: "F4",
	F5: "F5",
	F6: "F6",
	F7: "F7",
	F8: "F8",
	F9: "F9",
	F10: "F10",
	F11: "F11",
	F12: "F12",
	Command: "Cmd",
	Option: "Opt",
	Enter: "↵",
	Tab: "Tab",
	a: "A",
	b: "B",
	c: "C",
	d: "D",
	e: "E",
	f: "F",
	g: "G",
	h: "H",
	i: "I",
	j: "J",
	k: "K",
	l: "L",
	m: "M",
	n: "N",
	o: "O",
	p: "P",
	q: "Q",
	r: "R",
	s: "S",
	t: "T",
	u: "U",
	v: "V",
	w: "W",
	x: "X",
	y: "Y",
	z: "Z",
	0: "0",
	1: "1",
	2: "2",
	3: "3",
	4: "4",
	5: "5",
	6: "6",
	7: "7",
	8: "8",
	9: "9",
};

export function KeyListenerDisplay({
	keys,
	className,
}: {
	keys: Key[];
	className?: string;
}) {
	return (
		<div className="flex gap-2">
			{keys.map((key, index) => (
				<div
					key={index}
					className={twMerge(
						"w-max text-xs rounded py-1 px-2 border border-outline bg-primary text-primary-foreground",
						className,
					)}
				>
					{Icons[key] || key}
				</div>
			))}
		</div>
	);
}
