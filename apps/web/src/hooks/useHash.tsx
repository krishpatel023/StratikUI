"use client";

import { useState, useEffect } from "react";

type useHashProps = () => string | null;

const useHash: useHashProps = () => {
	const getHash = (): string | null => {
		if (typeof window === "undefined") return null;
		return window.location.hash.replace("#", "");
	};

	const [hash, setHash] = useState<string | null>(getHash());

	// biome-ignore lint/correctness/useExhaustiveDependencies: no dependencies needed
	useEffect(() => {
		const handleHashChange = () => {
			setHash(getHash());
		};

		window.addEventListener("hashchange", handleHashChange);

		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, []);

	return hash;
};

export default useHash;
