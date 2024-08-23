"use client";

import { useCallback, useState } from "react";

interface UseProcessReturn {
	isProcessing: boolean;
	executeProcess: (callback: () => Promise<void>) => Promise<void>;
}

const useProcess = (): UseProcessReturn => {
	const [isProcessing, setIsProcessing] = useState<boolean>(false);

	const executeProcess = useCallback(
		async (callback: () => Promise<void>): Promise<void> => {
			try {
				setIsProcessing(true);
				await callback();
			} catch (error) {
				console.error("Error executing process:", error);
			} finally {
				setIsProcessing(false);
			}
		},
		[],
	);

	return { isProcessing, executeProcess };
};

export default useProcess;
