import { Logo } from "./Logo";

const LOGO2 = Logo[2].logo;
const LOGO4 = Logo[4].logo;
const LOGO0 = Logo[0].logo;
const LOGO1 = Logo[1].logo;
const LOGO3 = Logo[3].logo;
const LOGO5 = Logo[5].logo;

export function Testimonial() {
	return (
		<div className="w-full h-[70rem] overflow-hidden flex justify-center items-center gap-10 text-primary-foreground">
			<div className="flex flex-col gap-10">
				<EmptyCard />
				<EmptyCard />
				<EmptyCard />
			</div>
			<div className="flex-col gap-10 hidden @md:flex">
				<EmptyCard />
				<Card>
					<LOGO2 className="w-8 h-8" />
					<p className="font-medium text-secondary-foreground mt-6">
						StratikUI has revolutionized my design workflow. Their extensive
						library of customizable components saves me hours of development
						time. The intuitive interface makes it easy to create sleek, modern
						designs without compromising on functionality.
					</p>
					<h1 className="text-xl font-semibold text-primary-foreground mt-6">
						John Doe
					</h1>
					<h2 className="font-medium text-secondary-foreground">Co-Founder</h2>
				</Card>
				<Card>
					<LOGO4 className="w-8 h-8" />
					<p className="font-medium text-secondary-foreground mt-6">
						{
							"I appreciate StratikUI's attention to accessibility. Their components are WCAG compliant out of the box, which helps us create inclusive designs effortlessly. The documentation is comprehensive and regularly updated."
						}
					</p>
					<h1 className="text-xl font-semibold text-primary-foreground mt-6">
						Erin Joseph
					</h1>
					<h2 className="font-medium text-secondary-foreground">
						Product Manager
					</h2>
				</Card>
				<EmptyCard />
			</div>
			<div className="flex flex-col gap-10">
				<EmptyCard />
				<Card>
					<LOGO0 className="w-8 h-8" />
					<p className="font-medium text-secondary-foreground mt-6">
						While StratikUI offers a wide range of features, I found the
						learning curve a bit steep. It took me some time to fully utilize
						all the tools available. However, once I got the hang of it, my
						productivity skyrocketed.
					</p>
					<h1 className="text-xl font-semibold text-primary-foreground mt-6">
						John Doe
					</h1>
					<h2 className="font-medium text-secondary-foreground">CEO</h2>
				</Card>
				<div className="w-80 py-8 px-10 rounded-xl bg-gradient-to-tr from-primary  to-secondary border-outline-secondary border shadow-md shadow-outline-secondary">
					<h1 className="text-xl text-primary-foreground font-semibold">
						Want to see what others are saying about us?
					</h1>
					<button
						className="bg-foreground text-background py-2 px-4 rounded-xl mt-4"
						type="button"
					>
						See more
					</button>
				</div>
				<Card>
					<LOGO1 className="w-8 h-8" />
					<p className="font-medium text-secondary-foreground mt-6">
						{
							"As a startup founder, StratikUI has been a game-changer for our team. We can quickly prototype and iterate on our product's interface without needing a full-time designer. The responsive templates ensure our app looks great on all devices."
						}
					</p>
					<h1 className="text-xl font-semibold text-primary-foreground mt-6">
						Jane Doe
					</h1>
					<h2 className="font-medium text-secondary-foreground">Founder</h2>
				</Card>
				<EmptyCard />
			</div>{" "}
			<div className="flex-col gap-10 hidden @md:flex">
				<EmptyCard />
				<Card>
					<LOGO3 className="w-8 h-8" />
					<p className="font-medium text-secondary-foreground mt-6">
						{
							"StratikUI has been a game-changer for our team. We can quickly prototype and iterate on our product's interface without needing a full-time designer. The responsive templates ensure our app looks great on all devices."
						}
					</p>
					<h1 className="text-xl font-semibold text-primary-foreground mt-6">
						Jack Doe
					</h1>
					<h2 className="font-medium text-secondary-foreground">CEO</h2>
				</Card>
				<Card>
					<LOGO5 className="w-8 h-8" />
					<p className="font-medium text-secondary-foreground mt-6">
						While StratikUI offers a wide range of features, I found the
						learning curve a bit steep. It took me some time to fully utilize
						all the tools available. However, once I got the hang of it, my
						productivity skyrocketed.
					</p>
					<h1 className="text-xl font-semibold text-primary-foreground mt-6">
						John Doe
					</h1>
					<h2 className="font-medium text-secondary-foreground">CEO</h2>
				</Card>
				<EmptyCard />
			</div>
			<div className="flex flex-col gap-10">
				<EmptyCard />
				<EmptyCard />
				<EmptyCard />
			</div>
		</div>
	);
}

const Card = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="w-80 rounded-xl border-2 border-outline-secondary shadow-md shadow-outline-secondary px-8 py-6">
			{children}
		</div>
	);
};

const EmptyCard = () => {
	return (
		<div className="min-w-80 min-h-80 rounded-xl border-2 border-outline-secondary border-dashed " />
	);
};
