import Sidebar from "@/components/Sidebar";
import { StorageData } from "@/packages";
import { FileData } from "@/utils/constants";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data: FileData[] = StorageData;
  return (
    <>
      <div className="w-full flex justify-center relative">
        <Sidebar params={{ data: data }} />
        <div className="w-[90%] pt-10">{children}</div>
      </div>
    </>
  );
}
