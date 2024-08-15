export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-[85%] mx-auto py-16 mb-4">{children}</div>
    </>
  );
}
