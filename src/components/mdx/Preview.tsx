export const Preview = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <div id={`${id}-preview`} className="w-full flex-col gap-10 mt-6 mb-10">
      {children}
    </div>
  );
};