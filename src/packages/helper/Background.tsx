import { IconProps } from "@/utils/constants";

const Background = () => {
  return (
    <>
      <BackgroundDark />
      <BackgroundLight />
    </>
  );
};

const BackgroundLight = ({
  props,
  className,
}: {
  props?: IconProps;
  className?: string;
}) => {
  return (
    <div className="absolute top-0 left-0 -z-10 h-full w-full bg-white dark:hidden">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
    </div>
  );
};

const BackgroundDark = ({
  props,
  className,
}: {
  props?: IconProps;
  className?: string;
}) => {
  return (
    // <div className="relative h-full w-full bg-slate-950">
    <div className="h-full w-full bg-slate-950 -z-10 absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] hidden dark:block"></div>
    // </div>
  );
};
const BackgroundString: string = `const BackgroundLight = ({
    props,
    className,
  }: {
    props?: IconProps;
    className?: string;
  }) => {
    return (
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>
    );
  };
  
  const BackgroundDark = ({
    props,
    className,
  }: {
    props?: IconProps;
    className?: string;
  }) => {
    return (
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
      </div>
    );
  };`;

export { BackgroundLight, BackgroundDark, BackgroundString, Background };
