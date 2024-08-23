"use client";

import type { IconProps } from "@registry/utils/types";
import type React from "react";
import { useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

export interface StepperProps {
	children: React.ReactNode;
	className?: string;
	onChange?: (step: number) => void;
	currentStep?: number;
}

export interface StepLineProps {
	className?: string;
	step: number;
	totalSteps: number;
	state: "active" | "complete" | "incomplete";
}

export interface StepProps {
	children?: React.ReactNode;
	className?: string;
}

export interface StepInternalProps extends StepProps {
	currentActiveStep: number;
	step: number;
	totalSteps: number;
}

interface StepCircularProps {
	className?: string;
	step: number;
	state: "active" | "complete" | "incomplete";
}

export function Stepper({
	children,
	className,
	currentStep,
	onChange,
}: StepperProps) {
	const [currentActiveStep, setCurrentActiveStep] = useState(currentStep || 0);

	const totalSteps = useMemo(
		() => (Array.isArray(children) ? children.length : 0),
		[children],
	);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const newChildren = useMemo(
		() => replaceChildren(children, currentStep || 0),
		[children],
	);

	function replaceChildren(children: React.ReactNode, currentStep: number) {
		if (!children || !Array.isArray(children)) return;
		return children.map((child, index) => (
			<StepInternal
				key={index}
				{...child.props}
				currentActiveStep={currentStep}
				step={index}
				totalSteps={totalSteps}
			/>
		));
	}

	function handleStepChange(step: number) {
		const newStep = step < 0 || step > totalSteps ? currentActiveStep : step;
		setCurrentActiveStep(newStep);
		onChange?.(newStep);
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (currentStep === undefined) return;
		handleStepChange(currentStep);
	}, [currentStep]);

	return (
		<div className={twMerge("flex flex-col gap-4 relative", className)}>
			{newChildren}
		</div>
	);
}

export function Step({ children, className }: StepProps) {
	return <div>{children}</div>;
}

export function StepInternal({
	children,
	className,
	currentActiveStep,
	step,
	totalSteps,
}: StepInternalProps) {
	const state = useMemo(() => {
		if (currentActiveStep === step) {
			return "active";
		}
		if (currentActiveStep > step) {
			return "complete";
		}
		return "incomplete";
	}, [currentActiveStep, step]);

	return (
		<div
			className={twMerge(
				"group text-foreground flex gap-4  items-center rounded-lg border border-outline-secondary p-4 transition-colors duration-300 ease-in-out",
				state === "active" && "bg-primary ",
				className,
			)}
			data-state={state}
		>
			<StepCircular step={step} state={state} />
			<div>{children}</div>
		</div>
	);
}

export function StepCircular({ className, step, state }: StepCircularProps) {
	return (
		<div
			className={twMerge(
				"min-h-8 min-w-8 sm:min-w-12 sm:min-h-12  rounded-full flex items-center justify-center border-[3px] text-lg sm:text-2xl font-semibold transition-all delay-300 ",
				state === "active" && "border-accent text-accent",
				state === "complete" &&
					"bg-accent border-accent text-accent-foreground",
				state === "incomplete" && "border-outline text-outline-foreground",
				className,
			)}
		>
			{state === "complete" ? (
				<Check className="w-3/4 h-3/4 text-accent-foreground" />
			) : (
				step + 1
			)}
		</div>
	);
}

export const Check = (props: IconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		{...props}
	>
		<title>Check icon</title>
		<path
			fill="currentColor"
			d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46l-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47Z"
		/>
	</svg>
);
