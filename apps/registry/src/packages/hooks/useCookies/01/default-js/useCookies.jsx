"use client";

import { useState, useEffect } from "react";

const useCookies = () => {
	const defaultValue = {
		essential: true,
		functional: true,
		analytics: true,
		advertising: true,
	};
	const [cookiePreferences, setCookiePreferences] = useState(defaultValue);

	const handlePrefLoad = () => {
		const storedPreferences = localStorage.getItem("cookiePreferences");
		if (storedPreferences) {
			setCookiePreferences(JSON.parse(storedPreferences));
		}
	};
	const handlePrefUpdate = (pref) => {
		localStorage.setItem("cookiePreferences", JSON.stringify(pref));
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		handlePrefLoad();
	}, []);
	
	const toggleCookieCategory = (category) => {
		const newPref = {
			...cookiePreferences,
			[category]: !cookiePreferences[category],
		};
		setCookiePreferences(newPref);
		handlePrefUpdate(newPref);
	};
	
	const resetCookiePreferences = () => {
		setCookiePreferences(defaultValue);
		handlePrefUpdate(defaultValue);
	};
	
	const rejectAllCookiePreferences = () => {
		setCookiePreferences({
			essential: false,
			functional: false,
			analytics: false,
			advertising: false,
		});
		handlePrefUpdate({
			essential: false,
			functional: false,
			analytics: false,
			advertising: false,
		});
	};
	
	const acceptAllCookiePreferences = () => {
		setCookiePreferences({
			essential: true,
			functional: true,
			analytics: true,
			advertising: true,
		});
		handlePrefUpdate({
			essential: true,
			functional: true,
			analytics: true,
			advertising: true,
		});
	};

	const setCookie = (
		name,
		value,
		time,
		category,
		options = {
			path: "/",
		},
	) => {
		if (cookiePreferences[category]) {
			const date = new Date();
			const timeCalaculated = date.setTime(date.getTime() + time * 1000);
			const expires = `expires=${date.toUTCString()}`;
			const cookieOptions = Object.entries(options)
			.map(([key, value]) => `${key}=${value}`)
			.join(";");
			document.cookie = `${name}=${value};${expires};path=${options.path};${category};${cookieOptions}`;
		}
	};

	const editCookie = (category, name, value, days, options = {}) => {
		if (cookiePreferences[category]) {
			removeCookie(name, category);
			setCookie(name, value, days, category, options);
		}
	};
	
	const removeCookie = (name, category) => {
		if (cookiePreferences[category]) {
			const cookiesForCategory = document.cookie.split(";");
			
			for (const cookie of cookiesForCategory) {
				const cookieName = cookie.split("=")[0].trim();
				if (cookieName === name) {
					const expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
					document.cookie = `${cookieName}=; ${expires}; path=/; ${category}`;
				}
			}
		}
	};
	
	const getCookie = (name) => {
		const encodedName = encodeURIComponent(name);
		const cookies = document.cookie.split(";");
		for (let i = 0; i < cookies.length; i++) {
			const cookie = cookies[i].trim();
			if (cookie.startsWith(`${encodedName}=`)) {
				return decodeURIComponent(cookie.substring(encodedName.length + 1));
			}
		}
		return null;
	};

	const getAllCookies = () => {
		const cookies = {};
		const cookiesArray = document.cookie.split(";");
		for (let i = 0; i < cookiesArray.length; i++) {
			const cookie = cookiesArray[i].trim().split("=");
			const name = decodeURIComponent(cookie[0]);
			const value = decodeURIComponent(cookie.slice(1).join("="));
			cookies[name] = value;
		}
		return cookies;
	};
	
	return {
		cookiePreferences,
		toggleCookieCategory,
		resetCookiePreferences,
		acceptAllCookiePreferences,
		rejectAllCookiePreferences,
		setCookie,
		editCookie,
		removeCookie,
		getCookie,
		getAllCookies,
	};
};

export default useCookies;
