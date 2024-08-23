"use client";

import { useState, useCallback, useEffect } from "react";

export const useFullscreen = () => {
	const [isFullscreen, setIsFullscreen] = useState(false);

	const requestFullscreen = useCallback((element) => {
		if (element.requestFullscreen) {
			element.requestFullscreen();
		}
		// This is for Safari
		else if (element.webkitRequestFullscreen) {
			element.webkitRequestFullscreen();
		}
		// This is for IE11
		else if (element.msRequestFullscreen) {
			element.msRequestFullscreen();
		}
	}, []);

	const exitFullscreen = useCallback(() => {
		if (
			document.fullscreenElement ||
			document.webkitFullscreenElement ||
			document.msFullscreenElement
		) {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			}
			// This is for Safari
			else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			}
			// This is for IE11
			else if (document.msExitFullscreen) {
				document.msExitFullscreen();
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
