"use client";

import { useEffect, useState } from "react";

export default function useMousePosition(element) {
	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		let elementExtracted = null;

		if (typeof element === "string") {
			elementExtracted = document.getElementById(element);
		} else if (element && "current" in element) {
			elementExtracted = element.current;
		}

		const handleMouseMove = (event) => {
			let x = 0;
			let y = 0;

			if (elementExtracted) {
				const elemRect = elementExtracted.getBoundingClientRect();
				x = event.clientX - elemRect.left;
				y = event.clientY - elemRect.top;
			} else {
				x = event.clientX;
				y = event.clientY;
			}

			setMousePosition({ x: Math.round(x), y: Math.round(y) });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, [element]);

	return mousePosition;
}
