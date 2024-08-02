import { Logo } from "./Logo";
import { twMerge } from "tailwind-merge";

const LOGO2 = Logo[2].logo;
const LOGO4 = Logo[4].logo;
const LOGO0 = Logo[0].logo;
const LOGO1 = Logo[1].logo;
const LOGO3 = Logo[3].logo;
const LOGO5 = Logo[5].logo;
const LOGO6 = Logo[6].logo;

const Background = () => {
  return (
    <div className="absolute top-0 left-0 -z-10 h-full w-full bg-white dark:bg-black">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] dark:bg-[rgba(73,89,123,0.5)] opacity-50 blur-[80px]"></div>
    </div>
  );
};

export function Testimonial() {
  return (
    <div className="w-full relative px-10 py-2">
      <h1 className="text-3xl font-semibold text-primary-foreground text-center mb-2">
        Testimonials
      </h1>
      <h2 className="text-base font-medium text-secondary-foreground text-center mb-8">
        Look what our customers have to say about us.
      </h2>
      <div className="w-full grid grid-cols-1 @md:grid-cols-3 @lg:grid-cols-4 gap-4">
        <Card>
          <LOGO0 className="w-8 h-8" />
          <p className="font-medium text-s_textSecondary mt-6">
            While StratikUI offers a wide range of features, I found the
            learning curve a bit steep. It took me some time to fully utilize
            all the tools available.
          </p>
          <h1 className="text-xl font-semibold text-s_textPrimary mt-6">
            John Doe
          </h1>
          <h2 className="font-medium text-s_textSecondary">CEO</h2>
        </Card>
        <Card className="@md:col-span-2 ">
          <LOGO6 className="w-8 h-8" />
          <p className="font-medium text-s_textSecondary mt-6">
            {
              "As a startup founder, StratikUI has been a game-changer for our team. We can quickly prototype and iterate on our product's interface without needing a full-time designer. The responsive templates ensure our app looks great on all devices."
            }
          </p>
          <h1 className="text-xl font-semibold text-s_textPrimary mt-6">
            Jane Doe
          </h1>
          <h2 className="font-medium text-s_textSecondary">Founder</h2>
        </Card>
        <Card>
          <LOGO1 className="w-8 h-8" />
          <p className="font-medium text-s_textSecondary mt-6">
            StratikUI has revolutionized my design workflow. The intuitive
            interface makes it easy to create sleek, modern designs without
            compromising on functionality.
          </p>
          <h1 className="text-xl font-semibold text-s_textPrimary mt-6">
            John Doe
          </h1>
          <h2 className="font-medium text-s_textSecondary">CEO</h2>
        </Card>
        <Card>
          <LOGO1 className="w-8 h-8" />
          <p className="font-medium text-s_textSecondary mt-6">
            StratikUI has revolutionized my design workflow. Their extensive
            library of customizable components saves me hours of development
            time.
          </p>
          <h1 className="text-xl font-semibold text-s_textPrimary mt-6">
            John Doe
          </h1>
          <h2 className="font-medium text-s_textSecondary">CEO</h2>
        </Card>{" "}
        <Card>
          <LOGO2 className="w-8 h-8" />
          <p className="font-medium text-s_textSecondary mt-6">
            StratikUI has revolutionized my design workflow. Their extensive
            library of customizable components saves me hours of development
            time.
          </p>
          <h1 className="text-xl font-semibold text-s_textPrimary mt-6">
            John Doe
          </h1>
          <h2 className="font-medium text-s_textSecondary">CEO</h2>
        </Card>{" "}
        <Card>
          <LOGO3 className="w-8 h-8" />
          <p className="font-medium text-s_textSecondary mt-6">
            StratikUI has revolutionized my design workflow. Their extensive
            library of customizable components saves me hours of development
            time.
          </p>
          <h1 className="text-xl font-semibold text-s_textPrimary mt-6">
            John Doe
          </h1>
          <h2 className="font-medium text-s_textSecondary">CEO</h2>
        </Card>{" "}
        <Card>
          <LOGO4 className="w-8 h-8" />
          <p className="font-medium text-s_textSecondary mt-6">
            StratikUI has revolutionized my design workflow. Their extensive
            library of customizable components saves me hours of development
            time.
          </p>
          <h1 className="text-xl font-semibold text-s_textPrimary mt-6">
            John Doe
          </h1>
          <h2 className="font-medium text-s_textSecondary">CEO</h2>
        </Card>
      </div>

      <Background />
    </div>
  );
}

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "text-foreground rounded-xl border-2 border-outline px-8 py-6 bg-slate-400/10  hover:scale-105 hover:cursor-pointer transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};
