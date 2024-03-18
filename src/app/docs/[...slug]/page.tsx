import Component from "@/components/Component";
import { StorageData, readDirectory } from "@/packages/index";
import { DataDescription, FileData } from "@/utils/constants";
import { redirect } from "next/navigation";
import { Fragment } from "react";

export default function Components({ params }: { params: { slug: string } }) {
  const data: FileData[] = StorageData;

  if (params.slug.length > 2) {
    redirect("/404");
  } else if ("components" === params.slug[0]) {
    return (
      <>
        {Array.isArray(data[0].content) &&
          data[0].content.map((item: FileData, index: number) => {
            return (
              <Fragment key={index}>
                {item.name === params.slug[1] ? (
                  <>
                    {Array.isArray(item.content) &&
                      item.content.map((item: FileData, i: number) => (
                        <Fragment key={i}>
                          {!Array.isArray(item.content) && (
                            <Component data={item.content} />
                          )}
                        </Fragment>
                      ))}
                  </>
                ) : (
                  <>
                    {Array.isArray(data[0].content) &&
                      index === data[0].content.length - 1 &&
                      redirect("/404")}
                  </>
                )}
              </Fragment>
            );
          })}
      </>
    );
  } else if ("primitives" === params.slug[0]) {
    <>
      {Array.isArray(data[1].content) &&
        data[1].content.map((item: FileData, index: number) => {
          return (
            <Fragment key={index}>
              {item.name === params.slug[1] ? (
                <>
                  {Array.isArray(item.content) &&
                    item.content.map((item: FileData, i: number) => (
                      <Fragment key={i}>
                        {!Array.isArray(item.content) && (
                          <Component data={item.content} />
                        )}
                      </Fragment>
                    ))}
                </>
              ) : (
                <>
                  {Array.isArray(data[1].content) &&
                    index === data[1].content.length - 1 &&
                    redirect("/404")}
                </>
              )}
            </Fragment>
          );
        })}
    </>;
  } else {
    redirect("/404");
  }
}
