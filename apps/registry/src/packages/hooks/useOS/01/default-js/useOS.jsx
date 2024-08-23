"use client";

import { useState, useEffect } from "react";

export const useOS = () => {
	const [os, setOS] = useState("Unknown");

	useEffect(() => {
		const userAgent = window.navigator.userAgent;

		const detectOS = () => {
			if (/Windows/i.test(userAgent)) {
				return "Windows";
			}
			if (/Macintosh|MacIntel|MacPPC|Mac68K/i.test(userAgent)) {
				return "MacOS";
			}
			if (/Linux/i.test(userAgent)) {
				return "Linux";
			}
			if (/Android/i.test(userAgent)) {
				return "Android";
			}
			if (/iPhone|iPad|iPod/i.test(userAgent)) {
				return "iOS";
			}
			return "Unknown";
		};

		setOS(detectOS());
	}, []);

	return os;
};
