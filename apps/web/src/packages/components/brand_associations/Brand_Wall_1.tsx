import Logo from "@/packages/helper/Logo";

export function BrandWall() {
  return (
    <>
      <div className="w-full h-[40rem] overflow-hidden relative">
        {/* LOGO WALL */}
        <div className="z-10 w-full flex flex-wrap justify-between gap-8 @md:gap-28 px-20">
          {LogoArray.map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-lg flex justify-center items-center bg-primary border-2 border-outline-secondary opacity-80"
            >
              <item.logo className={`w-16 h-16 text-foreground`} />
            </div>
          ))}
        </div>
        {/* CENTRAL TEXT */}
        <div className="z-30 w-full h-full absolute top-0 left-0 flex justify-center items-center">
          <div className="w-80 h-80  flex flex-col justify-center items-center text-center text-primary-foreground gap-10">
            <h1 className="text-4xl font-bold">
              Connect with your favorite apps
            </h1>
            <h3 className="text-xl font-medium">
              We provide integration with more than 100+ apps so that your
              business can grow.
            </h3>
            <button className="border-2  py-2 px-8 rounded border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground">
              View All
            </button>
          </div>
          {/* RADIAL CIRCLE */}
          <div className="-z-20 absolute -top-[0%] -left-[0%] w-[100%] h-[100%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white dark:from-black via-white/80 dark:via-black/80 to-white/40 dark:to-black/40"></div>
        </div>
      </div>
    </>
  );
}

const LogoArray = [...Logo, ...Logo, ...Logo, ...Logo];

export function BrandWallImplementation() {
  return (
    <div className="w-full">
      <BrandWall />
    </div>
  );
}