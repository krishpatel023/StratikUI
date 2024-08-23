"use client";

import { useRef } from "react";
import { useFullscreen } from "@registry/packages/hooks/useFullscreen/01/default-ts/useFullscreen";
import Button from "@registry/ui/Button";

export default function UseFullscreenExample() {
	const { isFullscreen, requestFullscreen, exitFullscreen } = useFullscreen();
	const elementRef = useRef<HTMLDivElement>(null);

	const handleEnterFullscreen = () => {
		if (elementRef.current) {
			requestFullscreen(elementRef.current);
		}
	};

	return (
		<div className="w-full h-80 flex flex-col justify-center items-center gap-8 text-foreground">
			<div
				ref={elementRef}
				className="w-1/2 min-w-60 h-60 bg-secondary text-secondary-foreground flex flex-col justify-center items-center text-center gap-6"
			>
				<p>This content can be viewed in full-screen mode.</p>
				<p>Fullscreen status: {isFullscreen ? "Enabled" : "Disabled"}</p>
				<Button onPress={exitFullscreen}>Exit Fullscreen</Button>
			</div>
			<div className="flex gap-4">
				<Button onPress={handleEnterFullscreen}>Enter Fullscreen</Button>
			</div>
		</div>
	);
}
