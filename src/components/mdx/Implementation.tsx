export const Implementation = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <div id={`${id}-implementation`} className="w-full hidden flex-col gap-10">
      {children}
    </div>
  );
};
