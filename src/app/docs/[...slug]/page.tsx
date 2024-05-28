import Component from "@/components/Component";
import { StorageData } from "@/packages/index";
import { FileData } from "@/utils/constants";
import { notFound } from "next/navigation";
import { Fragment } from "react";

export default function Components({ params }: { params: { slug: string } }) {
  const data: FileData[] = StorageData;

  if (params.slug.length > 2) {
    notFound();
  } else if ("primitives" === params.slug[0]) {
    if (data[0].display === false) notFound();
    return (
      <>
        {Array.isArray(data[0].content) && (
          <>
            {data[0].content.map((item: FileData, index: number) => {
              const name = params.slug[1].split("#")[0];
              if (item.name === name) {
                if (item.display === false) notFound();
                return (
                  <Fragment key={index}>
                    {Array.isArray(item.content) &&
                      item.content.map((item: FileData, i: number) => (
                        <Fragment key={i}>
                          {!Array.isArray(item.content) && item.display && (
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
            ) && notFound()}
          </>
        )}
      </>
    );
  } else if ("components" === params.slug[0]) {
    if (data[1].display === false) notFound();
    return (
      <>
        {Array.isArray(data[1].content) && (
          <>
            {data[1].content.map((item: FileData, index: number) => {
              const name = params.slug[1].split("#")[0];
              if (item.name === name) {
                if (item.display === false) notFound();
                return (
                  <Fragment key={index}>
                    {Array.isArray(item.content) &&
                      item.content.map((item: FileData, i: number) => (
                        <Fragment key={i}>
                          {!Array.isArray(item.content) && item.display && (
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
            ) && notFound()}
          </>
        )}
      </>
    );
  } else if ("hooks" === params.slug[0]) {
    if (data[2].display === false) notFound();
    return (
      <>
        {Array.isArray(data[2].content) && (
          <>
            {data[2].content.map((item: FileData, index: number) => {
              const name = params.slug[1].split("#")[0];
              if (item.name === name) {
                if (item.display === false) notFound();
                return (
                  <Fragment key={index}>
                    {Array.isArray(item.content) &&
                      item.content.map((item: FileData, i: number) => (
                        <Fragment key={i}>
                          {!Array.isArray(item.content) && item.display && (
                            <Component data={item.content} />
                          )}
                        </Fragment>
                      ))}
                  </Fragment>
                );
              }
              return null;
            })}
            {data[2].content.every(
              (item: FileData) => item.name !== params.slug[1]
            ) && notFound()}
          </>
        )}
      </>
    );
  } else {
    notFound();
  }
}
