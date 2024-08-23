import type { IconProps } from "@/utils/constants";
import { GradientText } from "../ui/GradientText";
import ShineLink from "../ui/Link-Shine";

export function Hero() {
	return (
		<div className="w-full h-[calc(100vh-4rem)] relative">
			<div className="w-full h-full flex flex-col justify-center items-center gap-4 text-center px-6">
				<GradientText className="p-1 text-4xl md:text-5xl font-medium ">
					Not just Beautiful, but Functional
				</GradientText>
				<p className="hidden md:block text-xl text-neutral-700 dark:text-neutral-400 max-w-[60rem]">
					Explore our extensive collection of over 100+ Open Source components,
					hooks, and primitives designed in default along with accessible React
					Aria variant, to ensure accessibility without compromising on style or
					performance.
				</p>
				<p className="md:hidden text-md text-neutral-700 dark:text-neutral-400 max-w-[90%]">
					100+ Open Source components, hooks, and primitives designed in default
					along with accessible React Aria variant.
				</p>
				<ShineLink
					className="hover:gap-2 hover:scale-105 flex gap-1 justify-center items-center py-3 px-6 mt-4  border rounded-xl text-accent-foreground transition-all duration-300"
					href="/docs/introduction"
				>
					Explore Components
					<RightIcon className="h-5 w-5" />
				</ShineLink>
			</div>
			<Background />
		</div>
	);
}

function Background() {
	return (
		<>
			<div className="hidden lg:block absolute top-0 left-0 -z-10 h-full w-full overflow-hidden ">
				<div className="absolute top-3/4 left-[1vw] w-[98vw] h-[98vw] rounded-full bg-white dark:bg-black" />
				<div className="absolute top-3/4 left-[1vw] w-[98vw] h-[98vw] scale-[1.002] rounded-full -z-10 bg-[linear-gradient(to_right,_rgba(255,255,255,0)_25%,_rgb(37,99,235)_50%,rgba(255,255,255,0)_75%)] dark:bg-[linear-gradient(to_right,_rgba(255,255,255,0)_25%,_rgb(37,99,235)_50%,rgba(255,255,255,0)_75%)]" />
				<div className="absolute top-[55%] translate-x-1/2 -z-10 w-[50vw]  h-[50vw] rounded-full bg-blue-400 dark:bg-blue-600 opacity-20 blur-[100px]" />
			</div>
			{/* FOR SMALL SCREEN */}
			<div className="lg:hidden absolute top-0 left-0 -z-10 h-full w-full overflow-hidden">
				<div className="absolute top-3/4 -translate-x-[50vw] w-[200vw] h-[200vw] rounded-full bg-white dark:bg-black" />
				<div className="absolute top-3/4 -translate-x-[50vw] w-[200vw] h-[200vw] scale-[1.002] rounded-full -z-10 bg-[linear-gradient(to_right,_rgba(255,255,255,0)_25%,_rgb(37,99,235)_50%,rgba(255,255,255,0)_75%)] dark:bg-[linear-gradient(to_right,_rgba(255,255,255,0)_25%,_rgb(37,99,235)_50%,rgba(255,255,255,0)_75%)]" />
				<div className="absolute top-[55%] translate-x-0 -z-10 w-[100vw] h-[100vw] rounded-full bg-blue-400 dark:bg-blue-600 opacity-20 blur-[100px]" />
			</div>
		</>
	);
}

export const RightIcon = (props: IconProps) => (
	<svg
		height="200"
		width="200"
		viewBox="0 0 16 16"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<title>Right Icon</title>
		<path
			d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8L6.22 5.28a.75.75 0 0 1 0-1.06"
			fill="currentColor"
			fillRule="evenodd"
		/>
	</svg>
);
