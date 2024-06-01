import ComponentsLayout from "@/components/layouts/Components";
import { StorageData, processData } from "@/packages";
import { FileData } from "@/utils/constants";
import { notFound } from "next/navigation";
import { Fragment } from "react";

export async function generateStaticParams() {
  return processData("components");
}

export default function Page({ params }: { params: { categoryName: string } }) {
  const data: FileData[] = Array.isArray(StorageData[1].content)
    ? StorageData[1].content
    : [];
  if (data[1].display === false) notFound();

  return (
    <>
      {data.length > 0 && (
        <>
          {data.map((item: FileData, index: number) => {
            const name = params.categoryName.split("#")[0];
            if (item.name === name) {
              if (item.display === false) notFound();
              return (
                <Fragment key={index}>
                  {Array.isArray(item.content) &&
                    item.content.map((item: FileData, i: number) => (
                      <Fragment key={i}>
                        {!Array.isArray(item.content) && item.display && (
                          <ComponentsLayout data={item.content} />
                        )}
                      </Fragment>
                    ))}
                </Fragment>
              );
            }
            return null;
          })}
          {data.every((item: FileData) => item.name !== params.categoryName) &&
            notFound()}
        </>
      )}
    </>
  );
}
