const Background = () => {
  return (
    <>
      <BackgroundDark />
      <BackgroundLight />
    </>
  );
};

const BackgroundLight = () => {
  return (
    <div className="absolute top-0 left-0 -z-10 h-full w-full bg-white dark:hidden">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
    </div>
  );
};

const BackgroundDark = () => {
  return (
    <div className="absolute top-0 left-0 -z-10 h-full w-full bg-black hidden dark:block">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(73,89,123,0.5)] opacity-50 blur-[80px]"></div>
    </div>
  );
};

const BackgroundString: string = `const Background = () => {
return (
<>
  // DARK BACKGROUND
  <div className="absolute top-0 left-0 -z-10 h-full w-full bg-black hidden dark:block">
    <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(73,89,123,0.5)] opacity-50 blur-[80px]"></div>
  </div>

  // LIGHT BACKGROUND
  <div className="absolute top-0 -z-10 h-full w-full bg-white">
    <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
  </div>
<>
)};`;

export { BackgroundLight, BackgroundDark, BackgroundString, Background };
