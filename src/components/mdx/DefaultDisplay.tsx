export const DefaultDisplay = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full border-[1px] border-neutral-300 dark:border-neutral-800  mt-6 rounded-xl mx-auto relative overflow-hidden">
      <div className="w-full overflow-x-auto py-10 flex justify-center @container">
        {children}
      </div>
    </div>
  );
};