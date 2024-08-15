export const DefaultDisplay = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full border-[1px] border-neutral-200 dark:border-neutral-900 rounded-xl mx-auto relative overflow-hidden mt-2">
      <div className="w-full overflow-x-auto py-10 flex justify-center @container">
        {children}
      </div>
    </div>
  );
};
