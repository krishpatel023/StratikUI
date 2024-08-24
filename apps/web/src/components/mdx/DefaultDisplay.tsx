export const DefaultDisplay = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full border-[1px] border-neutral-200 dark:border-neutral-900 rounded-xl mx-auto overflow-x-auto py-10 mt-2 flex flex-col justify-center items-center">
      {children}
    </div>
  );
};
