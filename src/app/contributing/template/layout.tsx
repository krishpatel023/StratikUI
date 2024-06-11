import { StorageData } from "@/docs";
import { FileData } from "@/utils/constants";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("@/components/Sidebar"), { ssr: false });

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
        <div className="w-[90%]">{children}</div>
      </div>
    </>
  );
}
