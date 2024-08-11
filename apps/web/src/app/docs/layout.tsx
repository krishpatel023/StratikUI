import Sidebar from "@/components/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-full flex justify-center relative">
        <Sidebar />
        <div className="w-full right-0">
          <div className="w-[90%] mx-auto">{children}</div>
        </div>
      </div>
    </>
  );
}
