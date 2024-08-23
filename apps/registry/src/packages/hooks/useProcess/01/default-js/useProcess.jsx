"use client";

import { useCallback, useState } from "react";

const useProcess = () => {
	const [isProcessing, setIsProcessing] = useState(false);

	const executeProcess = useCallback(async (callback) => {
		try {
			setIsProcessing(true);
			await callback();
		} catch (error) {
			console.error("Error executing process:", error);
		} finally {
			setIsProcessing(false);
		}
	}, []);

	return { isProcessing, executeProcess };
};

export default useProcess;
