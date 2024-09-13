export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-w-[50rem] mx-auto mt-6 md:mt-16 p-10">{children}</div>;
}
