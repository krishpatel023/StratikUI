"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const useDelay = () => {
	const timerRef = useRef(null);
	const [isDelaying, setIsDelaying] = useState(false);

	useEffect(() => {
		return () => {
			clearDelay();
		};
	}, []);

	const delay = async (time, callback, options = {}) => {
		const { immediate = false } = options;
		const executableFunc = callback || (() => {});

		if (immediate) {
			executableFunc();
		}

		return new Promise((resolve) => {
			clearDelay();

			timerRef.current = setTimeout(() => {
				if (!immediate) {
					executableFunc();
				}
				setIsDelaying(false);
				resolve();
			}, time);

			setIsDelaying(true);
		});
	};

	const clearDelay = useCallback(() => {
		if (timerRef.current) {
			clearTimeout(timerRef.current);
			timerRef.current = null;
			setIsDelaying(false);
		}
	}, []);

	return { isDelaying, delay, clearDelay };
};

export default useDelay;
