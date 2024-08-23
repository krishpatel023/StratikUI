"use client";

import { useEffect, useRef } from "react";

export const OTPInput = ({ length, setOTP, partition = [length] }) => {
	const inputRefs = useRef([]);

	// Set focus on load
	useEffect(() => {
		inputRefs.current[0]?.focus();
	}, []);

	// It checks if it is a number only. If yes than set focus on next input.
	const handleChange = (e, index) => {
		const value = e.target.value;
		if (/^[0-9]*$/.test(value)) {
			inputRefs.current[index].value = value;
			setOTP(null);
			if (value.length === 1 && index < length - 1) {
				inputRefs.current[index + 1]?.focus();
			}
			if (index === length - 1 && value.length === 1) {
				const otp = inputRefs.current.map((input) => input?.value).join("");
				setOTP(otp);
			}
		} else {
			inputRefs.current[index].value = "";
		}
	};

	// It is responsible for backspace and arrow keys functionality.
	const handleKeyDown = (e, index) => {
		if (e.key === "Backspace" && !inputRefs.current[index]?.value) {
			e.preventDefault();

			if (index > 0) {
				inputRefs.current[index - 1].value = "";
				inputRefs.current[index - 1]?.focus();
			} else {
				inputRefs.current[index]?.focus();
			}
		} else if (e.key === "ArrowLeft" && index > 0) {
			inputRefs.current[index - 1]?.focus();
		} else if (e.key === "ArrowRight" && index < length - 1) {
			inputRefs.current[index + 1]?.focus();
		}
	};

	// Detects the pasted data, validates it and fills accordingly
	const handlePaste = (e) => {
		e.preventDefault();
		const pastedData = e.clipboardData.getData("text/plain");
		if (/^[0-9]*$/.test(pastedData) && pastedData.length === length) {
			pastedData.split("").forEach((char, index) => {
				inputRefs.current[index].value = char;
			});
			inputRefs.current[length - 1]?.focus();
			setOTP(pastedData);
		}
	};

	// Checks the last filled inputs
	const checkLastFilledInput = () => {
		for (let i = 0; i < length; i++) {
			if (!inputRefs.current[i]?.value) {
				return i;
			}
		}
		return length - 1;
	};

	// Set focus on last filled input only.
	const handleFocus = (index) => {
		const lastFilledIndex = checkLastFilledInput();
		if (index !== lastFilledIndex) {
			inputRefs.current[lastFilledIndex]?.focus();
		}
	};

	const getPosition = (partitionIndex, index) => {
		if (partitionIndex === 0) {
			return index;
		}
		let place = 0;
		for (let k = 0; k < partitionIndex; k++) {
			place = place + partition[k];
		}
		return place + index;
	};

	return (
		<div className="flex justify-center items-center" aria-label="otp-input">
			{partition.map((val, partitionIndex) => (
				<div key={partitionIndex} className="flex gap-1">
					{Array.from({ length: val }).map((_, index) => {
						const position = getPosition(partitionIndex, index);
						return (
							<input
								key={position}
								type="text"
								maxLength={1}
								// biome-ignore lint/suspicious/noAssignInExpressions: ref is necessary to be set for the input first then include it in the ref array
								ref={(ref) => (inputRefs.current[position] = ref)}
								onChange={(e) => handleChange(e, position)}
								onKeyDown={(e) => handleKeyDown(e, position)}
								onPaste={handlePaste}
								onFocus={() => handleFocus(position)}
								className="w-10 h-10 border border-outline-secondary rounded text-center text-xl text-primary-foreground bg-transparent"
								aria-label={`OTP Digit ${position + 1}`}
								aria-placeholder="Enter Digit"
								aria-required="true"
								id={`otp-input-${position}`}
							/>
						);
					})}
					{partitionIndex !== partition.length - 1 && <PartitionSymbol />}
				</div>
			))}
		</div>
	);
};

const PartitionSymbol = () => {
	return (
		<div className="w-8 flex justify-center items-center mr-1">
			<p className="text-foreground">-</p>
		</div>
	);
};
