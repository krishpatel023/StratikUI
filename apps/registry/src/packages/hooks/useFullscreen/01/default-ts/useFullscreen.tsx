"use client";

import { useState, useCallback, useEffect } from "react";

export const useFullscreen = () => {
	const [isFullscreen, setIsFullscreen] = useState(false);

	const requestFullscreen = useCallback((element: HTMLElement) => {
		if (element.requestFullscreen) {
			element.requestFullscreen();
		}
		// This is for Safari
		else if ((element as any).webkitRequestFullscreen) {
			(element as any).webkitRequestFullscreen();
		}
		// This is for IE11
		else if ((element as any).msRequestFullscreen) {
			(element as any).msRequestFullscreen();
		}
	}, []);

	const exitFullscreen = useCallback(() => {
		if (
			document.fullscreenElement ||
			(document as any).webkitFullscreenElement ||
			(document as any).msFullscreenElement
		) {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			}
			// This is for Safari
			else if ((document as any).webkitExitFullscreen) {
				(document as any).webkitExitFullscreen();
			}
			// This is for IE11
			else if ((document as any).msExitFullscreen) {
				(document as any).msExitFullscreen();
			}
		}
	}, []);

	const handleFullscreenChange = useCallback(() => {
		setIsFullscreen(!document.fullscreenElement);
	}, []);

	useEffect(() => {
		document.addEventListener("fullscreenchange", handleFullscreenChange);
		document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
		document.addEventListener("msfullscreenchange", handleFullscreenChange);

		return () => {
			document.removeEventListener("fullscreenchange", handleFullscreenChange);
			document.removeEventListener(
				"webkitfullscreenchange",
				handleFullscreenChange,
			);
			document.removeEventListener(
				"msfullscreenchange",
				handleFullscreenChange,
			);
		};
	}, [handleFullscreenChange]);

	return {
		isFullscreen,
		requestFullscreen,
		exitFullscreen,
	};
};
