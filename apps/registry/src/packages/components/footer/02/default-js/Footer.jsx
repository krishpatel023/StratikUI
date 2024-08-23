import { ThemeToggle } from "@registry/packages/primitives/theme-toggles/01/react_aria-js/ThemeToggle";

export function Footer() {
	return (
		<div className="w-full h-60  @md:h-40 flex flex-col @md:flex-row justify-center @md:justify-between gap-8 items-center px-16">
			<div className="flex flex-col justify-center @md:items-start items-center text-center text-foreground">
				<h1 className="text-xl font-semibold">Stratik / UI</h1>
				<span>© 2024 Stratik UI. All rights reserved.</span>
			</div>
			<div>
				<ThemeToggle />
			</div>
		</div>
	);
}
