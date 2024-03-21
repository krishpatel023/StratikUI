import Component from "@/components/Component";
import { StorageData, readDirectory } from "@/packages/index";
import { DataDescription, FileData } from "@/utils/constants";
import { redirect } from "next/navigation";
import { Fragment } from "react";

export default function Components({ params }: { params: { slug: string } }) {
  const data: FileData[] = StorageData;

  if (params.slug.length > 2) {
    redirect("/404");
  } else if ("primitives" === params.slug[0]) {
    return (
      <>
        {Array.isArray(data[0].content) && (
          <>
            {data[0].content.map((item: FileData, index: number) => {
              if (item.name === params.slug[1]) {
                return (
                  <Fragment key={index}>
                    {Array.isArray(item.content) &&
                      item.content.map((item: FileData, i: number) => (
                        <Fragment key={i}>
                          {!Array.isArray(item.content) && (
                            <Component data={item.content} />
                          )}
                        </Fragment>
                      ))}
                  </Fragment>
                );
              }
              return null;
            })}
            {data[0].content.every(
              (item: FileData) => item.name !== params.slug[1]
            ) && redirect("/404")}
          </>
        )}
      </>
    );
  } else if ("components" === params.slug[0]) {
    return (
      <>
        {Array.isArray(data[1].content) && (
          <>
            {data[1].content.map((item: FileData, index: number) => {
              if (item.name === params.slug[1]) {
                return (
                  <Fragment key={index}>
                    {Array.isArray(item.content) &&
                      item.content.map((item: FileData, i: number) => (
                        <Fragment key={i}>
                          {!Array.isArray(item.content) && (
                            <Component data={item.content} />
                          )}
                        </Fragment>
                      ))}
                  </Fragment>
                );
              }
              return null;
            })}
            {data[1].content.every(
              (item: FileData) => item.name !== params.slug[1]
            ) && redirect("/404")}
          </>
        )}
      </>
    );
  } else {
    redirect("/404");
  }
}
