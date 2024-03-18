import { StorageData, readDirectory } from "@/packages/index";
import { DataDescription, FileData } from "@/utils/constants";

export default function Components() {
  const data: FileData[] = StorageData;
  return (
    <>
      <div>
        {/* {data.map((item: any) => (
          <div>
            {item.name}
            {item.type}

            {item.content.map((item: any) => (
              <div>
                {item.name}
                {item.type}

                {item.content.map((item: any) => (
                  <div>
                    {item.content.name}
                    {item.content.component}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))} */}
        Components
      </div>
    </>
  );
}
